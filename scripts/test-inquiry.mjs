import assert from "node:assert/strict";
import { test } from "node:test";
import { mkdtemp, readFile, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import ts from "typescript";
import { getPlatformProxy } from "wrangler";

// Compile the small shared modules without another runtime dependency.
const compiled = await mkdtemp(join(tmpdir(), "zavino-inquiry-test-"));
for (const name of ["inquiry", "inquiry-notification", "inquiry-delivery"]) {
  const source = await readFile(new URL(`../src/lib/${name}.ts`, import.meta.url), "utf8");
  const javascript = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ES2022 } }).outputText
    .replace(/from "\.\/(inquiry(?:-notification)?)"/g, 'from "./$1.mjs"');
  await writeFile(join(compiled, `${name}.mjs`), javascript);
}
const { deliverInquiry } = await import(pathToFileURL(join(compiled, "inquiry-delivery.mjs")));
const { validateInquiry, inquiryContext } = await import(pathToFileURL(join(compiled, "inquiry.mjs")));
const { notifyInquiry } = await import(pathToFileURL(join(compiled, "inquiry-notification.mjs")));
const proxy = await getPlatformProxy({ configPath: "wrangler.jsonc", persist: true });
const db = proxy.env.LEADS_DB;
const email = "synthetic-inquiry-test@example.invalid";
const data = { name: "Synthetic local test", company: "Local test project", email, focus: "ai-automation", brief: "Synthetic workflow brief used only for local persistence verification.", systems: "Example CRM", outcome: "Verify saved receipt", timing: "Local test", website: "", source: "/services/ai-automation" };
const request = (input, options = {}) => new Request("http://localhost:3000/api/inquiry", { method: "POST", headers: { origin: "http://localhost:3000", "content-type": "application/json", ...options.headers }, body: JSON.stringify(input) });
const config = { siteUrl: "https://thezavino.com", database: db };

try {
  await test("context and validation reject unknown options and preserve legitimate founders", () => {
    assert.deepEqual(inquiryContext("ai-automation", "https://bad.example"), { focus: "ai-automation", source: "/services/ai-automation" });
    assert.deepEqual(inquiryContext(["ai-automation"], "/unknown"), { focus: "", source: "/contact" });
    assert.equal(validateInquiry(data).ok, true);
    assert.equal(validateInquiry({ ...data, name: "", brief: "too short", focus: "unknown" }).ok, false);
    assert.equal(validateInquiry({ ...data, website: "spam" }).ok, false);
    assert.equal(validateInquiry({ ...data, email: "person\r\n@example.com" }).ok, false);
  });
  await test("real local D1 save precedes receipt, repeated UUID saves once, changed payload conflicts", async () => {
    const id = crypto.randomUUID();
    const payload = { ...data, inquiryId: id };
    const response = await deliverInquiry(request(payload), config);
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { ok: true, received: true, inquiryId: id });
    const row = await db.prepare("SELECT brief, focus, source, notification_status FROM project_inquiries WHERE id = ?").bind(id).first();
    assert.equal(row.brief, data.brief);
    assert.equal(row.focus, data.focus);
    assert.equal(row.source, data.source);
    assert.equal(row.notification_status, "pending");
    const duplicates = await Promise.all([deliverInquiry(request(payload), config), deliverInquiry(request(payload), config)]);
    assert.equal(duplicates.every((result) => result.status === 200), true);
    assert.equal((await db.prepare("SELECT count(*) AS total FROM project_inquiries WHERE id = ?").bind(id).first()).total, 1);
    assert.equal((await deliverInquiry(request({ ...payload, brief: `${data.brief} Modified.` }), config)).status, 409);
    let sent = 0;
    await notifyInquiry(db, { send: async (message) => { sent++; assert.equal(message.to, "leads@thezavino.com"); assert.equal(message.replyTo, email); return { messageId: "mock-email-receipt" }; } }, id, data.source, data);
    await notifyInquiry(db, { send: async () => { sent++; throw new Error("should not send twice"); } }, id, data.source, data);
    assert.equal(sent, 1);
    assert.equal((await db.prepare("SELECT notification_status FROM project_inquiries WHERE id = ?").bind(id).first()).notification_status, "accepted");
  });
  await test("notification failure retains persisted brief and truthful failed state", async () => {
    const id = crypto.randomUUID();
    assert.equal((await deliverInquiry(request({ ...data, inquiryId: id }), config)).status, 200);
    await notifyInquiry(db, { send: async () => { throw new Error("mock service failure"); } }, id, data.source, data);
    const row = await db.prepare("SELECT brief, notification_status FROM project_inquiries WHERE id = ?").bind(id).first();
    assert.equal(row.brief, data.brief);
    assert.equal(row.notification_status, "failed");
  });
  await test("origin, invalid input, oversize, and unavailable database never produce success", async () => {
    const payload = { ...data, inquiryId: crypto.randomUUID() };
    assert.equal((await deliverInquiry(request(payload, { headers: { origin: "https://bad.example" } }), config)).status, 403);
    assert.equal((await deliverInquiry(request({ ...payload, email: "wrong" }), config)).status, 422);
    assert.equal((await deliverInquiry(request({ ...payload, brief: "x".repeat(41_000) }), config)).status, 413);
    assert.equal((await deliverInquiry(request(payload), { siteUrl: config.siteUrl })).status, 503);
  });
} finally {
  await db.prepare("DELETE FROM project_inquiries WHERE email = ?").bind(email).run();
  await proxy.dispose();
  await rm(compiled, { recursive: true, force: true });
}

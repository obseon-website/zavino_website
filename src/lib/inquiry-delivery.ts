import { isInquirySource, validateInquiry } from "./inquiry";
import { notifyInquiry } from "./inquiry-notification";

const MAX_REQUEST_BYTES = 40_000;
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const responseHeaders = { "Cache-Control": "no-store" };

export type InquiryDeliveryConfig = {
  database?: D1Database;
  email?: SendEmail;
  emailEnabled?: boolean;
  siteUrl: string;
  allowedOrigins?: string;
  waitUntil?: (promise: Promise<unknown>) => void;
};

class BodyTooLargeError extends Error {}

async function boundedText(body: ReadableStream<Uint8Array> | null) {
  if (!body) return "";
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let bytes = 0;
  let text = "";
  try {
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;
      bytes += chunk.value.byteLength;
      if (bytes > MAX_REQUEST_BYTES) {
        await reader.cancel();
        throw new BodyTooLargeError();
      }
      text += decoder.decode(chunk.value, { stream: true });
    }
    return text + decoder.decode();
  } finally {
    reader.releaseLock();
  }
}

function originOf(value: string | undefined) {
  try { return value ? new URL(value).origin : undefined; } catch { return undefined; }
}

function requestOriginAllowed(request: Request, config: InquiryDeliveryConfig) {
  const origin = request.headers.get("origin");
  if (!origin || request.headers.get("sec-fetch-site") === "cross-site") return false;
  const allowed = new Set([originOf(config.siteUrl)]);
  for (const extra of (config.allowedOrigins || "").split(",")) {
    const parsed = originOf(extra.trim());
    if (parsed?.startsWith("https://")) allowed.add(parsed);
  }
  const url = new URL(request.url);
  if (["localhost", "127.0.0.1", "[::1]"].includes(url.hostname) && url.protocol === "http:") {
    allowed.add(url.origin);
  }
  return allowed.has(origin);
}

function error(message: string, status: number, extra = {}) {
  return Response.json({ ok: false, message, ...extra }, { status, headers: responseHeaders });
}

export async function deliverInquiry(request: Request, config: InquiryDeliveryConfig): Promise<Response> {
  if (!requestOriginAllowed(request, config)) {
    return error("Please submit your brief from the Zavino contact page.", 403);
  }
  if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") {
    return error("Please submit the project form using JSON.", 415);
  }
  const declaredSize = Number(request.headers.get("content-length") || 0);
  if (!Number.isFinite(declaredSize) || declaredSize > MAX_REQUEST_BYTES) {
    return error("This brief is too long. Please shorten it and try again.", 413);
  }
  let input: unknown;
  try { input = JSON.parse(await boundedText(request.body)); } catch (cause) {
    return cause instanceof BodyTooLargeError
      ? error("This brief is too long. Please shorten it and try again.", 413)
      : error("We could not read the form. Please try again.", 400);
  }
  const validation = validateInquiry(input);
  if (!validation.ok) return error("Please check the highlighted fields.", 422, { errors: validation.errors });
  const envelope = input as Record<string, unknown>;
  if (typeof envelope.inquiryId !== "string" || !UUID_PATTERN.test(envelope.inquiryId)) {
    return error("Please refresh this page before sending your brief.", 422);
  }
  if (!isInquirySource(envelope.source)) return error("Please return to the contact page and try again.", 422);
  const db = config.database;
  if (!db) return error("We could not save your brief. Your details are still here — please retry or email us.", 503);

  const id = envelope.inquiryId;
  const source = envelope.source;
  const { name, company, email, focus, brief, systems, outcome, timing } = validation.data;
  const canonical = JSON.stringify({ name, company, email, focus, brief, systems, outcome, timing, source });
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(canonical));
  const hash = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
  try {
    const existing = await db.prepare("SELECT payload_hash FROM project_inquiries WHERE id = ?")
      .bind(id).first<{ payload_hash: string }>();
    if (existing && existing.payload_hash !== hash) {
      return error("The earlier version of this brief was received. Please email us any updates.", 409);
    }
    if (existing) return Response.json({ ok: true, received: true, inquiryId: id }, { headers: responseHeaders });
    const recent = await db.prepare("SELECT count(*) AS total FROM project_inquiries WHERE lower(email) = lower(?) AND submitted_at > ?")
      .bind(email, new Date(Date.now() - 600_000).toISOString()).first<{ total: number }>();
    if (recent && recent.total >= 5) return error("Please wait a few minutes before sending another brief, or email us directly.", 429);
    const inserted = await db.prepare(
      "INSERT INTO project_inquiries (id, payload_hash, submitted_at, name, company, email, focus, brief, systems, outcome, timing, source) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT(id) DO NOTHING",
    ).bind(id, hash, new Date().toISOString(), name, company, email, focus, brief, systems, outcome, timing, source).run();
    if (!inserted.success) throw new Error("Inquiry persistence failed");
    // A racing retry can lose the INSERT. Verify the persisted payload before receipt.
    if (!inserted.meta.changes) {
      const receipt = await db.prepare("SELECT payload_hash FROM project_inquiries WHERE id = ?")
        .bind(id).first<{ payload_hash: string }>();
      if (receipt?.payload_hash !== hash) return error("The earlier version of this brief was received. Please email us any updates.", 409);
    } else if (config.emailEnabled && config.email && config.waitUntil) {
      config.waitUntil(notifyInquiry(db, config.email, id, source, validation.data).catch(() => {
        console.error(JSON.stringify({ event: "inquiry.notification_state_failed", inquiryId: id }));
      }));
    }
    return Response.json({ ok: true, received: true, inquiryId: id }, { headers: responseHeaders });
  } catch {
    console.error(JSON.stringify({ event: "inquiry.persistence_failed", inquiryId: id }));
    return error("We could not confirm receipt of your brief. Your details are still here. Please retry or email us.", 503);
  }
}

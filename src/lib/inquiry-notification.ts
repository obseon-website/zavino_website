import { inquiryFocusOptions, type ValidatedInquiry } from "./inquiry";

export function inquiryNotification(
  id: string,
  source: string,
  data: ValidatedInquiry,
): EmailMessageBuilder {
  const focus = inquiryFocusOptions.find((option) => option.value === data.focus)?.label;
  const text = [
    `New Zavino project inquiry: ${id}`,
    `Name: ${data.name}`,
    `Company / project: ${data.company}`,
    `Email: ${data.email}`,
    `Focus: ${focus}`,
    `Source: ${source}`,
    "",
    "What needs to change?",
    data.brief,
    "",
    `Systems: ${data.systems || "Not provided"}`,
    `Outcome / scale: ${data.outcome || "Not provided"}`,
    `Timing: ${data.timing || "Not provided"}`,
  ].join("\n");
  const escaped = text.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]!);
  return {
    to: "leads@thezavino.com",
    from: { email: "website@thezavino.com", name: "Zavino website" },
    replyTo: data.email,
    subject: `New project inquiry · ${focus}`,
    text,
    html: `<pre style="white-space:pre-wrap;font-family:Arial,sans-serif">${escaped}</pre>`,
  };
}

/** Email acceptance is separate from database receipt; it does not prove inbox delivery. */
export async function notifyInquiry(
  db: D1Database,
  sender: SendEmail,
  id: string,
  source: string,
  data: ValidatedInquiry,
): Promise<void> {
  // Only the request that inserted the row schedules this work. Marking sending also
  // prevents a second caller from issuing the same notification concurrently.
  const claimed = await db.prepare(
    "UPDATE project_inquiries SET notification_status = 'sending', notification_updated_at = ? WHERE id = ? AND notification_status = 'pending'",
  ).bind(new Date().toISOString(), id).run();
  if (!claimed.meta.changes) return;
  try {
    const result = await sender.send(inquiryNotification(id, source, data));
    if (!result.messageId) throw new Error("Missing email acceptance receipt");
    await db.prepare(
      "UPDATE project_inquiries SET notification_status = 'accepted', notification_message_id = ?, notification_updated_at = ? WHERE id = ?",
    ).bind(result.messageId, new Date().toISOString(), id).run();
  } catch {
    await db.prepare(
      "UPDATE project_inquiries SET notification_status = 'failed', notification_error = 'email_send_failed', notification_updated_at = ? WHERE id = ?",
    ).bind(new Date().toISOString(), id).run();
    console.error(JSON.stringify({ event: "inquiry.notification_failed", inquiryId: id }));
  }
}

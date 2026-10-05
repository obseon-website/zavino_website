import { getCloudflareContext } from "@opennextjs/cloudflare";
import { deliverInquiry } from "@/lib/inquiry-delivery";

export async function POST(request: Request) {
  try {
    const { env, ctx } = await getCloudflareContext({ async: true });
    return await deliverInquiry(request, {
      database: env.LEADS_DB,
      email: env.INQUIRY_EMAIL,
      emailEnabled: String(env.INQUIRY_EMAIL_ENABLED) === "true",
      siteUrl: env.NEXT_PUBLIC_SITE_URL,
      allowedOrigins: process.env.INQUIRY_ALLOWED_ORIGINS,
      waitUntil: (promise) => ctx.waitUntil(promise),
    });
  } catch {
    return Response.json({ ok: false, message: "We could not save your brief. Your details are still here — please retry or email us." }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}

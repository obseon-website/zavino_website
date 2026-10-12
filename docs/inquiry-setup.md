# Project inquiries

The contact form saves each valid brief in Cloudflare D1 before returning `received: true` and its inquiry reference. Email acceptance is separate from receipt. A form error keeps the entered draft in the current page; retrying the same draft uses the same UUID. The database primary key suppresses duplicate saves and notification attempts. Different contents sharing an ID produce a conflict response rather than silently replacing a brief.

## Database

- Account: `OBSEON-host` (`71e42a055d9f95bde3317d2f55c023ff`).
- New D1 database: `zavino-leads`, APAC.
- Database ID: `557cb512-5302-4330-a841-45a9b3fe2038`.
- Worker binding: `LEADS_DB`.
- Schema: `migrations/0001_project_inquiries.sql`.
- Migration applied to both local and remote database on 4 October 2026 UTC.
- No website deployment was performed as part of database setup.

Run local migrations before testing a fresh checkout:

```sh
npx wrangler d1 migrations apply zavino-leads --local
npm run dev
node --test scripts/test-inquiry.mjs
```

`next dev` gets local bindings through the existing `initOpenNextCloudflareForDev()` in `next.config.ts`. Local tests use local D1 and mocked email; they do not write synthetic briefs to production or send email. The normal Worker build remains `npm run build:worker`.

For future schema changes, create a migration and apply it locally, verify it, then apply it remotely:

```sh
npx wrangler d1 migrations create zavino-leads descriptive_change_name
npx wrangler d1 migrations apply zavino-leads --local
npx wrangler d1 migrations apply zavino-leads --remote
```

## Email setup remains pending

Destination: `leads@thezavino.com`. Proposed sender: `website@thezavino.com`. The structured Cloudflare Email Service binding `INQUIRY_EMAIL` restricts both addresses. **Sending is disabled** with `INQUIRY_EMAIL_ENABLED: "false"` until the domain and recipient configuration can be verified.

The authenticated `wrangler email sending list` request returned `Unauthorized` (Cloudflare code 2036) on 4 October 2026 UTC. Sender onboarding could not be verified. No MX, DNS, Email Routing rules, or existing mailbox configuration was changed; no external email test was sent.

Before enabling notices:

1. Confirm Cloudflare Email Sending is available for the account, the current credentials can inspect it, and `thezavino.com` is onboarded for sending. Use `npx wrangler email sending list` and the [domain setup documentation](https://developers.cloudflare.com/email-service/get-started/send-emails/). Onboarding can add DNS records and should be reviewed by the domain owner.
2. Verify the sender and the working destination mailbox `leads@thezavino.com`. A binding alone does not verify mailbox delivery.
3. Change `INQUIRY_EMAIL_ENABLED` to `"true"` in `wrangler.jsonc`, regenerate types with `npm run cf-typegen`, and include this setting in the separately authorized website deployment. Keep `.dev.vars` disabled for synthetic tests.
4. Submit an explicitly authorized real test brief and confirm both the saved D1 record and actual mailbox receipt. Cloudflare's `messageId` proves service acceptance, not inbox delivery. The notification states are `pending`, `sending`, `accepted`, and `failed`; the UI promises only that the brief is saved.
5. Assign a team member to review incoming briefs and monitor pending/failed notices. There is no automatic retry worker in this change. A notice left in `sending` after a Worker interruption requires review, because its send outcome is uncertain; blindly resending may duplicate the email.

Use the [current Workers Email API](https://developers.cloudflare.com/email-service/api/send-emails/workers-api/) for binding behavior.

## Reviewing saved briefs

The database remains the source of truth while email is disabled. Authorized team members can use the D1 dashboard to inspect `project_inquiries`. Review the backlog before launch and whenever sending is unavailable. A read-only count that avoids printing personal details:

```sh
npx wrangler d1 execute zavino-leads --remote --command "SELECT notification_status, count(*) AS total FROM project_inquiries GROUP BY notification_status"
```

Saved fields: name, company/project, email, focus, brief, optional systems/outcome/timing, allowlisted source page, timestamp, payload hash, and notification state. No IP address or user-agent is stored. Logs contain event codes and inquiry references only. This change adds no analytics events or private form data to URLs.

The form rejects cross-origin requests, unknown focus/source values, oversized requests, honeypot fills, invalid types, control characters, and missing/invalid required fields. It limits new briefs to five per email in ten minutes. That email limit is a basic abuse control, not a complete bot defense. Domain-level WAF rules can be configured separately if production traffic warrants it.

Handle data access/deletion requests at `leads@thezavino.com`. Retention and follow-up ownership should be set by Zavino; this implementation does not invent a retention period or response SLA.

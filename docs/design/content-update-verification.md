# Content update with the approved art direction — 12 October 2026

The user reverted the broader business redesign and then explicitly requested the brief's information without changing the theme. The visual baseline is commit `5d6477c`, restored by `a8cf4f6`.

## Scope

- Updated the homepage headline, supporting copy, audit CTA, secondary link and Dhaka/worldwide line.
- Added all six primary services to the homepage index, Services page and footer. The original three interactive illustrations remain in the homepage stage, directory and detail pages. Operations, content workflows and Bangladesh-only enterprise training use existing editorial scope styles.
- Replaced the former primary creative/marketing list with the supplied supporting-practice paragraph.
- Added ongoing maintenance/support using the existing split section and scope-list styles. Updated the homepage and studio process to four steps.
- Renamed the existing product page to `/labs`, preserving its Aston Mark artwork and layout. Removed the unsubstantiated generic venture list and labeled the documented launched product. The previous products URL redirects with HTTP 308.
- Added the five Work categories while retaining the creative gallery, films, original internal demos and truthful labels.
- Updated contact copy and all eight needs; added country, phone/WhatsApp, budget and timeline. Extended validation, persistence, payload identity and notification formatting without a schema migration. Current source attribution uses actual routes.
- Kept the public email and Cal.com destination. Updated product/implementation documentation.

## Visual preservation

No changes to the forest/ivory tokens, font files, global theme, hero image, service-playground implementation/styles, scroll-driven service stage, blur effects, page transitions, footer signature, or creative media. `git diff` against the baseline is empty for those source/assets. CSS additions only accommodate the six text links, four process columns, wrapped work-category links and form/support spacing in the existing system. No new accent palette or demonstration family was introduced.

## Verification

- Next production build, TypeScript, ESLint and four isolated inquiry test groups pass. Initial TypeScript output referenced generated routes from the reverted build; regeneration cleared that stale output.
- Inquiry tests cover current/legacy focus context, required and optional field validation, SQLite persistence, versioned contact details, duplicate requests, conflicts, mock notification success/failure, origin rejection, oversized input and unavailable storage. No live email or production inquiry was sent.
- Desktop and phone viewport captures inspected for home, catalogue, retained service scene, informational service sections, Labs, Work, contact, process and ongoing support. Files are local at `.impeccable/review/content-only/`.
- At 320px, home, services, Labs, Work, contact and studio each remain within the viewport. This is browser viewport testing, not a physical-device test.
- Empty-form submission marks all six required fields invalid. The original mobile automation snippet still moves from preparing a brief to the human-approval state. Browser error log was empty in the inspected session.
- Confirmed the former products URL returns 308 to `/labs`.

## Delivery boundary

GitHub only. No Workers build/deploy command, remote migration, notification enablement or live email test. Email notifications remain disabled as previously documented; successful inquiry receipts mean the brief was saved.

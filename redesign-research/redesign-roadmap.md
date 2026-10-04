# Redesign roadmap and content requirements

Planning document, 4 October 2026. This describes future work only. No source code is changed by this research pass.

## Outcome to build toward

A visitor should see **“WHERE VISION TAKES FLIGHT”** in small all-caps type above the approved **“Build it. Market it. Automate it.”** headline and its exact supporting line, understand Zavino’s five service pillars, find a page that matches their problem, see honest evidence or a clearly labeled demonstration, and choose between sending a brief, booking an audit, or starting a WhatsApp chat. The chosen type-led hero uses fast, scroll-reactive image fades while remaining readable and usable on mobile. See [UI design base](ui-design-base.md).

## Sequence

### 1. Approve the offer structure and conversion path

- Confirm the five pillars and nesting in [the page map](service-architecture-and-page-map.md).
- Confirm whether all three specialized web development pages have enough original content for launch. If not, launch their complete sections on the Web Development hub first.
- The homepage eyebrow, headline, and supporting line are approved in [UI design base](ui-design-base.md). Validate target geography and any industry focus for deeper page copy without reopening these three approved hero elements.
- Decide whether “free audit” is an actual commitment. Current Cal.com title says “30 min meeting”; the site should not promise a free diagnostic, deliverable, or response time that the booking experience does not support.

### 2. Gather proof and production inputs

- Create an asset register for every existing reel and still: client, service delivered, date if known, permission to publish, rights in music/footage, and suggested destination page.
- Request at least one real narrative for each available creative project: initial ask, Zavino’s role, deliverables, and approved outcome. Outcome can be qualitative; do not invent metrics.
- Gather legitimate web/app/automation material: screenshots or a commissioned project story, if available. If none exists, commission in-house **Zavino Lab** concept demonstrations with an unmistakable label. A small polished demo is more credible than a fake portfolio grid.
- Gather staff/process photos or artifacts if available. If unavailable, design the About page around real operations and authored copy.
- Confirm client-name and logo display rights before reusing the current client strip on broader service pages.

### 3. Write the page content before high-fidelity design

For each launch route, prepare a content brief with: visitor question, promise, exact service scope, likely deliverables, process, evidence, common objections, primary/secondary CTA, and search title/description. Keep claims within what the team actually does. Do not reuse the same generic “one connected crew” paragraph across every route.

The first writing priority is Home → Services index → five service hubs → Contact. Then write the specialized Web Development pages and `/work`. This order ensures the core navigation has no thin or empty destinations.

### 4. Build the visual system and interaction prototype

- Start from the selected concept 03 and define typography, color, spacing, media treatment, icon/line style, button states, navigation, form fields, and responsive patterns in one design system.
- Prototype the scroll-reactive homepage image sequence first: two image apertures, approved stills, fast opacity crossfades, responsive behavior, and a static reduced-motion state. Then prototype the service chooser, a web/app demonstration, and the lead form. Verify that each is understandable in a static screenshot and on a phone.
- Use the route-specific layouts in [page experience blueprints](page-experience-blueprints.md) and the researched patterns in [design inspiration](design-inspiration.md). The pages should vary in composition but keep one recognizable Zavino system.
- Review motion for keyboard, touch, reduced motion, and CPU/network cost before broadening it across the site.

### 5. Implement the funnel and measurement

- Use consistent inquiry context (service, page source, optional campaign source) so the form can be preselected without rewriting the user’s brief.
- Choose a reliable form delivery/storage route and owner notification method; test failed, duplicate, and spam submissions. Define who receives leads and who replies. Avoid exposing credentials in client code.
- Put the [Cal.com audit link](https://cal.com/zavino/audit) on Home, relevant service pages, Contact, and the thank-you state. Check title/description/availability and time-zone behavior with the account owner.
- Keep WhatsApp as a visible shortcut with message text tailored to the page when technically practical, while still letting the visitor edit the message.
- Measure useful funnel events such as service-page CTA clicks, form starts, successful form submissions, WhatsApp clicks, and booking-link clicks. Do not send form contents or personal information into analytics.

### 6. Review and launch

- Follow the repo’s current Next.js agent rule: read the relevant installed `node_modules/next/dist/docs/` guide before code changes. Install dependencies only in the implementation pass if needed.
- Check route content, header/footer links, service preselection, form validation and delivery, confirmation state, calendar, and WhatsApp on desktop and mobile.
- Check real network behavior for media. The first hero frame should arrive quickly; adjacent scroll-sequence frames should be ready without downloading the full library. Full video should start only when needed. Test the interactive hero on a slower mobile connection and with fast forward/reverse scrolling.
- Check text contrast, focus order, target size, reduced motion, captions/transcripts where appropriate, and interaction without a mouse.
- Review metadata, canonical URLs, sitemap, robots, redirects, and structured data for the new route tree.
- Review privacy policy and terms against actual form handling and any new service commitments. Obtain appropriate business/legal review before publishing changed terms.

### 7. Grow the proof library after launch

- Publish approved `/work/[slug]` stories as engagements finish. Each story should state Zavino’s role and real results or learning.
- Promote individual service subpages only when each has distinct content and useful evidence. On-page SEO, technical SEO, and local SEO can remain substantial sections of the SEO hub until that threshold is met.
- Rebalance homepage proof as web, AI, and performance engagements accumulate. The design must allow new portfolio categories without redoing navigation.

## Definition of done for the redesign

| Area | Acceptance check |
| --- | --- |
| Offer clarity | The small all-caps eyebrow, headline, and supporting line match the approved copy exactly. A first-time visitor can name the five pillars from the homepage and find the exact listed subservice in at most two navigation steps. |
| Honesty | Every client name, visual, and result has approved attribution; demos are labeled; no empty portfolio or fabricated figures. |
| Conversion | Form, WhatsApp, and Cal.com paths are accessible on all service hubs and Contact; form service preselection works; successful submissions produce a visible confirmation and a real notification to Zavino. |
| Web craft | The two hero image apertures change with scrolling through fast fades without shifting or hiding type; forward/reverse and fast scroll work on desktop/mobile. Reduced motion shows a complete static state, and low bandwidth still loads the first frame promptly. Other page-specific micro-interactions remain purposeful. |
| Search | Public pages have distinct content and metadata; sitemap/redirects work; no thin placeholder routes are indexed. |
| Operations | A named owner receives and responds to leads; spam/error handling, privacy copy, and calendar availability are verified. |

## Decisions that require Zavino business input before implementation

1. Which web, SaaS, and automation examples can be described publicly, and which must be labeled as concepts?
2. Which client logos/names and media are cleared for reuse on new service pages?
3. Is the Cal.com audit free, what does the caller receive, and who hosts it?
4. Which contact inbox/CRM should receive the form, what response promise is realistic, and which budget ranges make sense by service?
5. What project support, hosting, maintenance, ad-spend, and SEO deliverables are actually included? These should be answered in copy and proposals only after business confirmation.

These are content/business signoffs for a later pass. The architecture and design research can be reviewed now without them.

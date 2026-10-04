# Zavino site baseline: redesign audit

Research date: 4 October 2026. This records the site and checkout as inspected for the original research pass; it is **a historical baseline**, not a live audit of later edits. Findings came from the checked-out source, the project [README](../README.md), the original [website brief](../website%20brief.md), and the live [homepage](https://thezavino.com/), [services page](https://thezavino.com/services), and [contact page](https://thezavino.com/contact). The old hero recommendation below has been replaced by the [AI-first direction](current-direction.md).

## What exists today

| Area | Observed state | Redesign implication |
| --- | --- | --- |
| Positioning | The live hero leads with “Where Vision Takes Flight” and describes an independent creative and marketing agency. | Keep **“WHERE VISION TAKES FLIGHT”** as a small all-caps eyebrow above the approved headline and supporting line in [UI design base](ui-design-base.md). |
| Navigation | Work links to a homepage section; Agency, Expertise, and Contact have their own pages. | Give the expanded services a scannable menu and dedicated landing pages. Let Work become a browseable destination. |
| Proof | 13 real reels, four selected campaign/product stills, and a client-name strip are present. | Use this as genuine evidence for production/creative work. Do not imply the same portfolio proves SaaS, web, SEO, or automation delivery. |
| Services | `/services` displays content production, digital marketing, branding and creative, and offline marketing. Each has a short list and a WhatsApp CTA. | Replace with the full five-pillar inventory in the new brief. Nest offline under Branding & Creative as the user specified. Give web development and AI automation enough space to explain their offers. |
| Lead capture | `/contact` offers WhatsApp, phone, and email. Header and end-of-page CTAs mainly point to WhatsApp. There is no form or booking CTA in the source. | Add a visible lead form and the supplied Cal.com audit link while retaining WhatsApp for fast contact. |
| Presentation | Dark evergreen palette, Syne display font, IBM Plex Sans body, large type, full-bleed aviation image, pointer image trail, project grid, and a GSAP pinned service stack. | Preserve the confident type, brand green, and interactive quality. Shift more visual attention to what Zavino delivers and the problems it solves. |
| Technical basis | Next.js 16.3.5, React 19.3.0, vanilla CSS, GSAP, Cloudflare/OpenNext. Existing sitemap and legal routes. | Plan within this stack when implementation begins. Read the installed Next.js docs before any future code change, as `AGENTS.md` requires. `node_modules` is absent in this checkout today. |

## Strengths to carry forward

1. **Recognizable art direction.** The dark green, cream, aviation image, and large typography feel deliberate. A new site should still look like Zavino, even if the aircraft becomes a quieter visual motif.
2. **Real production assets.** The reel collection and existing photography can make Content Production immediately credible. Reuse selectively, with context about the service shown and permission to display each client asset.
3. **Some motion accessibility is already considered.** Current reveal and pinned service effects check reduced-motion preference. The desktop pin becomes a normal list at smaller widths. The redesign can extend that discipline to every new interaction.
4. **Basic trust infrastructure exists.** There are About, contact, custom 404, sitemap, robots, and three legal pages. The redesign should update them for the new form and services rather than forget them.

## Main gaps

### Clarity and information architecture

- The headline is memorable but does not tell a first-time visitor that Zavino now offers ecommerce sites, custom SaaS/web apps, SEO, and AI automation. The current hero links to Work, so a web or automation buyer must infer relevance from visuals focused on content production.
- Four service cards compress an increasingly broad offer into one generic page. Individual service inquiries cannot land on a relevant page with a matching message or preselected form topic.
- Offline marketing currently appears as a fourth equal pillar. The supplied service taxonomy puts it inside Branding & Creative. We should follow the new taxonomy in navigation and content.
- There is no dedicated `/work` landing page, filtering, or case-study structure. Existing images open in a media dialog with short descriptions. That is valid gallery proof, but it is not a written outcome story.

### Conversion

- The current contact choice assumes a visitor wants to start a WhatsApp conversation or call. A buyer who needs to send a brief has no structured intake form. A buyer ready to schedule cannot reach the supplied [audit booking page](https://cal.com/zavino/audit) from the site.
- Most CTAs use “Let’s talk,” which does not explain whether the click opens WhatsApp, a form, or a calendar. New CTAs should name their action.
- The live Cal.com link resolves to a 30-minute “meeting” with a business-audit description. Before launch, make the event title, description, availability, and on-site CTA tell the same story; the event description currently contains “through” where “thorough” appears intended.

### Credibility while the portfolio grows

- The source contains content/creative media and client names, but no documented web/app/automation/SEO projects. The new pages should explain process, deliverables, decision criteria, and demonstrate actual interaction quality without fabricating client results.
- Client names can remain if usage rights are clear. Do not place a client logo beside a service unless that engagement is verified for that service.
- If Zavino makes in-house concept prototypes, label them **Concept** or **Zavino Lab**; never present them as commissioned client work. No invented testimonials, metrics, dashboard screenshots, or case-study outcomes.

### Practical design tension

The existing site is image led, which fits production work. A full redesign must support **two kinds of proof**: rich media for content/branding, and crisp interactive demonstrations or diagrams for web/AI. Make the content unmistakably clear before adding motion. The most impressive implementation will be an accessible, fast, responsive interaction that helps the buyer understand an offer.

## Inventory to preserve or revisit

- `src/lib/site.ts`: business details, 12 listed client names, four still-image projects, and the old four-group services model.
- `src/lib/reels.ts` plus `public/media/reels/`: 13 films and posters. Published media folder is about 54 MB, mostly reels. Keep video loading intentional; the current README says video downloads start on play.
- `public/media/`: existing campaign/product visuals and the generated aviation hero.
- `src/components/hero.tsx`, `work.tsx`, `capabilities.tsx`, `motion.tsx`: current visual/motion patterns. The intro animation in `intro.tsx` also deserves UX review before reusing it across a more conversion-oriented site; it currently has debug controls and console output.
- `src/app/sitemap.ts`, `next.config.ts`: sitemap and legacy redirects. A future route migration needs a deliberate redirect list, especially `/portfolio` and `/case-study`, which currently lead to the home Work section.
- `/privacy-policy`, `/terms-and-conditions`, `/cancellation-refund-policy`: legal pages should be reviewed for structured lead collection and newly offered services during implementation.

## Former planning recommendation — retired

The earlier recommendation was to keep **“WHERE VISION TAKES FLIGHT”** above **“Build it. Market it. Automate it.”** with a five-pillar index and scroll-reactive media. That is preserved here only as history. The current recommendation is an AI automation and SaaS front door with a labeled, governed workflow demonstration; see [Current direction](current-direction.md).

# Page experience blueprints

These are content and interaction briefs for a later design/build pass. They describe **proposed** sections, not existing pages. The route list and service scope are defined in [service architecture and page map](service-architecture-and-page-map.md). The homepage hero copy and behavior are approved in [UI design base](ui-design-base.md); older examples in this document do not override it. All concepts should work with static content, keyboard input, touch, and reduced motion.

## Shared visual idea

Keep Zavino’s evergreen/cream identity and editorial type.  The visual headline is **work in motion**: filmed content on production pages, campaign systems on marketing pages, product interfaces on development pages, and flow diagrams on automation pages. Each route should have a different composition, while navigation, type scale, spacing, CTA styles, and accessibility remain consistent.

Avoid repeating the same full-screen image hero and four equal cards across every page. The implementation itself should demonstrate web skill: responsive composition, precise transitions, immediate feedback, and stable performance.

## `/` — homepage

**First screen:** retain **“WHERE VISION TAKES FLIGHT”** as a small tracked all-caps eyebrow above the exact headline **“Build it. Market it. Automate it.”** and exact supporting line **“Branding, Marketing, Website development, content and AI automation.”** Use the chosen [desktop and mobile composition](homepage-concepts.md): dominant type, one wide and one narrow image aperture, deep evergreen, warm ivory, and sage accents. Start with genuine, permission-cleared work. As the visitor scrolls, the images change quickly through short fade-in/fade-out transitions while the eyebrow, words, and controls remain steady. “Send a brief” is primary; “Book an audit” and WhatsApp remain direct contact paths. The full behavior is specified in [UI design base](ui-design-base.md).

**Section sequence:**

1. **Five ways we help.** Five unequal editorial rows or panels, each with a concrete outcome, 2–3 example services, and a link to its hub. A non-animated list remains fully readable on touch/reduced-motion devices.
2. **Selected work.** Fewer, better media pieces above the fold of this section; let the 13-film collection live on `/work`. Caption each item with the relevant discipline and what Zavino actually delivered.
3. **From idea to launch.** A horizontal story showing content → identity → campaign → website → automation as possible connected disciplines, without suggesting every client buys all five.
4. **Build capability demonstration.** A small in-house interactive example: a clean responsive interface, filterable state, or workflow visualization. Label it as a Zavino demonstration, not client work.
5. **How we work.** Discover → define → make → launch/measure, with concise deliverables and a clear handoff point.
6. **Contact triad.** “Send a brief” (form), “Book an audit” (Cal.com), “Message on WhatsApp” (direct chat), each explaining when it is most useful.

**Motion:** the scroll-reactive image sequence is the homepage's signature motion. Prototype fast opacity crossfades that follow scroll progress in both directions; do not autoplay or queue transitions after scrolling stops. Service-row hover/focus feedback stays secondary. No motion should delay the service message or CTA.

## `/services` — choose a direction

Open with a clear five-pillar summary rather than an abstract slogan alone. Use a vertical service index with oversized labels, a small visual sample, scope keywords, and a distinct next link for each. The active row can update a sticky side preview on desktop. On mobile, the preview becomes an inline image/diagram after its row. Show the full list of exact services in expandable but crawlable text, including Offline Marketing nested under Branding & Creative and SEO under Web Development. End with a short “Not sure where to start?” inquiry CTA.

## `/services/content-production`

**Visual structure:** wide film frame plus smaller staggered vertical stills. A sticky chapter index jumps to Cinematic Reels, Product Videos, Food Photography & Videography, Motion Graphics, and CGI Content. Click-to-play reels use posters first; do not download the entire film library on load.

**Proof and content:** one authentic piece per available category, with an honest caption identifying the deliverable. If no CGI or motion example is cleared, explain the method and show a plainly labeled in-house study rather than mislabeling another clip. Add a “from brief to final export” timeline and platform formats/deliverables.

**CTA:** “Plan a production” opens the form with Content Production selected; WhatsApp is the faster secondary path.

## `/services/digital-marketing`

**Visual structure:** a campaign route map from audience and offer to creative, placement, measurement, and iteration. Use a split layout with Meta and Google channel tabs; Google tab visibly includes Search, Display, and YouTube. Campaign Strategy and Performance Tracking get their own sections, not a footer bullet.

**Proof and content:** show real creative assets where attributable. Use an example reporting framework with placeholder-free **sample labels** and no invented performance figures. Explain what is measured, how often clients see it, and what is excluded from Zavino’s fee (for example, ad spend only if that is the actual commercial model, to be confirmed).

**Motion:** connecting-line progress as the user scrolls; tabs switch instantly with a short crossfade. **CTA:** “Discuss a campaign.”

## `/services/branding-creative`

**Visual structure:** an editorial brand system surface showing identity, social, packaging, and visual direction as related applications. Instead of identical cards, a large central brand image can be surrounded by smaller packaging/social/print crops. Only show genuine client work with suitable rights and accurate attribution.

**Offline Marketing chapter:** a materially different canvas, like a floorplan or physical-size grid, for Event & Stall Production, Banner & Print Materials, and Activation Campaigns. Link directly to `#offline-marketing` from the Services menu and index.

**Motion:** controlled application switches that show the same identity across surfaces; provide static fallback. **CTA:** “Build your brand.”

## `/services/web-development` — build path chooser

This is the main **web/software conversion hub**, with the clearest offer explanation on the site. First screen: “Websites, stores, and custom tools built around the way your business works.” Show a responsive, interactive Zavino-made UI example beside the message. It must be visibly labeled a **demo** until it represents a commissioned project.

**Section sequence:** choose Ecommerce, Custom Mini SaaS, or Custom Web App; explain where SEO fits; show the discovery → architecture → design → build → launch → iterate process; define typical deliverables and handover; answer buyer concerns about integrations, hosting, content, accessibility, and ongoing support without promising terms Zavino has not agreed to. A short selector can recommend a path based on the visitor’s need, with a plain list fallback.

**Motion:** responsive UI morph between desktop and phone previews, button/state feedback, and a subtle build-progress visual. Avoid decorative fake terminals or unreadable code rain. **CTA:** “Discuss your build,” plus audit booking.

## `/services/web-development/ecommerce`

Explain Shopify vs WordPress as a fit discussion, not a universal winner. Use an interactive shopping journey **prototype**: product discovery → product page → cart → checkout handoff, with clear boundaries so it is not mistaken for a real store or payment flow. Cover mobile purchase path, product/catalog structure, speed, basic conversion considerations, integrations, SEO, launch, and handover. Cross-link to paid campaigns and SEO. CTA: “Plan my store.”

## `/services/web-development/custom-saas`

Explain what a “mini SaaS” means at Zavino: a focused product solving one repeatable workflow, scoped for a first release. Use a three-panel layout: customer problem, minimum useful workflow, and early product screen. A labeled **Zavino concept** can switch between user roles or states to demonstrate thoughtful UX. Include discovery, MVP scope, account roles, integrations, data and security considerations, deployment, and iteration as discussion topics; no blanket promises. CTA: “Scope a SaaS MVP.”

## `/services/web-development/web-apps`

Lead with business tools: portals, dashboards, internal workflows, and customer-facing applications. Show an annotated UI demo with a task moving from intake to review to completion; the demo is illustrative. Use a split-screen “current manual process / proposed digital workflow” layout without invented savings figures. Cover permissions, data sources, integrations, mobile behavior, QA, and handover. CTA: “Scope a web app.”

## `/services/web-development/seo`

Lead with a practical site audit rather than a ranking promise. Design a layered website diagram with five selectable areas: On-page SEO, Technical SEO, Off-page Link Building Strategy, Local SEO, and Citations. Each area explains what Zavino checks, what it may change, and what the client receives. Explicitly distinguish “link-building strategy” from guaranteed links or paid link schemes. Use a real or clearly illustrative audit checklist without fabricated scores. Primary CTA: “Book a 30-minute audit”; secondary CTA: “Send a site brief.”

## `/services/ai-automation`

First screen: “Make repeatable content workflows easier to run.” Draw a transparent pipeline: source material → n8n automation → optional ComfyUI image/video generation → human review → scheduled publication → logging. Let visitors switch between the three offered use cases: Social Media Automation, AI Image & Video Generation, and Automated Content Publishing Workflow.

Show approvals, failure handling, content rights, and account/platform permissions as real design considerations. A little functional node-flow demo can show branching and review states without implying Zavino has automated a named client. Pair the technical diagram with simple business language. CTA: “Map my workflow.”

## `/work`

Use the current films and stills as an honest media-led archive. Start with a curated highlight, then lightweight filters by Content Production, Branding & Creative, format, and industry **only where the metadata is verified**. Each tile needs project/client name, Zavino’s actual role, year if known, and a relevant service link. Keep a way to see all items even when filters are active. When a project has enough permission-cleared story and outcome evidence, add `/work/[project-slug]` with challenge, role, work, and approved result. Until then, avoid empty case-study routes.

## `/about`

Describe who Zavino serves, what the team can actually deliver, how projects run, and where the agency is based. Use authentic team/process material if available; otherwise build the page with type, documents, and existing work details rather than generic team stock. A five-discipline “one team” diagram can show collaboration without asserting that every project uses every discipline. Keep the client names only with display approval. End with contact choices.

## `/contact` and `/thank-you`

Give the structured single-page brief form prominent space. In an adjacent or following column, show WhatsApp (“quick question”) and [Cal.com audit booking](https://cal.com/zavino/audit) (“schedule 30 minutes”). The form should offer inline errors, preserve entries on a retry, and confirm submission. `/thank-you` states that the brief was received, explains the actual response process, and offers booking without forcing it. The detailed funnel and field plan is in [conversion funnel and lead form](conversion-funnel-and-lead-form.md).

## Interaction rules for every page

- Interaction must reinforce a message: reveal structure, show state, or preview output. No motion that merely makes text harder to read.
- Start with semantic, readable content. Enhancement may add sticky previews, scrubbing, filtering, and morphs; the route must make sense before those run.
- Use transform/opacity for motion where possible; keep layout stable. No scroll hijacking. Pause videos until requested or use silent, restrained loops only when justified and not competing with the headline.
- Respect `prefers-reduced-motion`, keyboard focus, touch input, contrast, and readable mobile type. Provide a play/pause or equivalent control for moving content that lasts indefinitely.
- Define a light media budget per page before implementation. This is especially important because the current media directory is dominated by video files. Use poster-first and lazy loading.

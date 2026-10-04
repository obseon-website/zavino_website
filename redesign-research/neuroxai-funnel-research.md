# NeuroX AI sitemap, offer architecture, and lead funnel research

Research date: **4 October 2026** (Asia/Dhaka). This is an observed competitor study for Zavino's planning pass. NeuroX AI's prices, guarantees, client counts, and results below are **claims made on its own website**, not independently verified facts or promises Zavino should repeat.

## Scope and method

- [NeuroX AI's robots.txt](https://neuroxai.com/robots.txt) declares [its XML sitemap](https://neuroxai.com/sitemap.xml). I fetched the live sitemap and enumerated **171 listed URLs**. The sitemap has one URL set, not a sitemap index.
- I requested **every one of the 171 sitemap URLs** on 4 October 2026. All returned HTTP 200, each had a page title and one or more H1 headings. A contact form appeared in the returned HTML of **169/171**; the exceptions were the privacy and terms pages. This confirms page availability and shared form presence, not that every interactive feature or form submission succeeds.
- I read every non-blog page type via the live HTML, inspected all 103 blog article links for their conversion destination, and read representative service, industry, migration, work, pricing, about, and blog pages in detail. I also fetched the form destination `/thank-you`, which is live but **not listed in the sitemap**.
- The web text extractor could not open the raw XML and `robots.txt`, while direct HTTP requests returned them successfully. No sitemap URL was inaccessible during the direct scan. The [Calendly destination](https://calendly.com/anshulent789/meeting) resolves, but I did not book a slot or submit the lead form.

## Complete page inventory from the sitemap

| Branch | Count | Shape | Role in the site |
| --- | ---: | --- | --- |
| Home | 1 | `/` | Positioning, proof, featured offers, direct booking, and brief form. |
| Services | 7 | `/services` + 6 service details | Buyer chooses an offer, then sees the process, deliverables, indicative price, FAQs, and contact routes. |
| Industries | 45 | `/industries` + 10 vertical hubs + 34 vertical/service pages | Search and navigation routes for industry-specific problems, each linked back to the relevant service. |
| Migration | 7 | `/migrate` + 6 generator-specific guides | High-intent routes for teams with an AI-generated app that needs production work. |
| Pricing | 1 | `/pricing` | Shows a progression from validation to build to ongoing operation. |
| Work | 3 | `/work` + 2 in-house case studies | Proof through own products where client work cannot be shown. |
| About | 1 | `/about` | Team, process commitments, and self-reported credibility. |
| Blog | 104 | `/blog` + 103 articles | Long-tail discovery and mid-funnel education. |
| Legal | 2 | `/privacy`, `/terms` | Policy and terms. |
| **Total** | **171** | | |

The site [states the 10-vertical/34-pairing structure itself](https://neuroxai.com/industries). The precise URL count above comes from the [sitemap](https://neuroxai.com/sitemap.xml) and live HTTP scan. The `/thank-you` page is one additional, reachable conversion page outside the XML inventory.

### Top-level navigation

The live desktop header links to **Services, Industries, Pricing, a “30-day Sprint” anchor on home, Work, About, Blog, and an external “Book a call” Calendly link**. The footer additionally exposes **Migrate a prototype** and **Contact**, with Contact linking to `/#contact-form`. A currency toggle switches between USD and INR presentation. There is no top-level standalone `/contact` route in this sitemap; contact is embedded across the site. These links and labels are visible on the [home page](https://neuroxai.com/) and [services page](https://neuroxai.com/services).

### Services: six pillars, with one signature offer

| URL | How NeuroX frames it | Funnel purpose |
| --- | --- | --- |
| [`/services`](https://neuroxai.com/services) | Six pillars, one partner | Choice page that routes to each detail page. |
| [`/services/ai-agents`](https://neuroxai.com/services/ai-agents) | Agents that perform support, sales, operations, and research work | Explains use cases and packaged deliverables. |
| [`/services/prototype-to-production`](https://neuroxai.com/services/prototype-to-production) | Turns Bolt/Lovable/v0 prototypes into products with auth, data, payments, tests, and monitoring | Signature service and the clearest web/SaaS analogue for Zavino. |
| [`/services/growth-marketing`](https://neuroxai.com/services/growth-marketing) | Media buying, SEO/AEO, CRM automation, attribution | Shows how a broad service is divided into individually priced components. |
| [`/services/generative-ai-rag`](https://neuroxai.com/services/generative-ai-rag) | RAG, evaluation, multimodal apps, cost controls | Technical buyer explanation. |
| [`/services/strategy-governance`](https://neuroxai.com/services/strategy-governance) | Use-case discovery, ROI, risk and governance | Decision-maker offer. |
| [`/services/ai-sprint`](https://neuroxai.com/services/ai-sprint) | Four-week, fixed-fee validation | Productized entry point and main path into larger builds. |

The [prototype-to-production service page](https://neuroxai.com/services/prototype-to-production) is the most useful pattern to study for Zavino's custom web app and mini SaaS offer. It starts with a **specific buyer problem**, offers **two immediate actions** (book a call and send a brief), lists what will be made real, walks through audit → foundation → tests/CI → deployment → handoff, itemizes deliverables, gives an indicative price, answers objections, then repeats the contact form. The [AI Sprint page](https://neuroxai.com/services/ai-sprint) explains a smaller entry engagement, its weekly timeline, deliverables, price, and stated guarantee. NeuroX's [pricing page](https://neuroxai.com/pricing) ties these together as **Validate → Build → Scale** and says the sprint fee can be credited toward Build under its stated conditions.

This is why the website reads as an **offer system** rather than a list of capabilities. Every detail page tells a prospect what problem it solves, what gets delivered, how long the work takes, what it costs or starts at, and what happens after the first project. NeuroX also shows optional components: its [prototype service](https://neuroxai.com/services/prototype-to-production) lists an audit, an auth/database/payments pack, test harness, mobile/PWA work, observability, and a rebuild option. Those are examples of how to make an abstract development service concrete; their exact packages and prices are NeuroX's, not Zavino's.

### Industry architecture: one hub, ten verticals, 34 intersections

NeuroX's [industry directory](https://neuroxai.com/industries) routes to these ten hubs:

| Industry hub | Linked service-specific pages |
| --- | --- |
| [`/industries/fintech`](https://neuroxai.com/industries/fintech) | AI agents, generative AI/RAG, strategy/governance, prototype-to-production |
| [`/industries/healthcare`](https://neuroxai.com/industries/healthcare) | Generative AI/RAG, AI agents, strategy/governance, AI sprint |
| [`/industries/ecommerce`](https://neuroxai.com/industries/ecommerce) | AI agents, growth marketing, generative AI/RAG, prototype-to-production |
| [`/industries/saas`](https://neuroxai.com/industries/saas) | Prototype-to-production, generative AI/RAG, AI agents, growth marketing |
| [`/industries/insurance`](https://neuroxai.com/industries/insurance) | Generative AI/RAG, AI agents, strategy/governance |
| [`/industries/logistics`](https://neuroxai.com/industries/logistics) | AI agents, generative AI/RAG, AI sprint |
| [`/industries/real-estate`](https://neuroxai.com/industries/real-estate) | AI agents, generative AI/RAG, growth marketing |
| [`/industries/legal`](https://neuroxai.com/industries/legal) | Generative AI/RAG, AI agents, strategy/governance |
| [`/industries/education`](https://neuroxai.com/industries/education) | Generative AI/RAG, AI agents, prototype-to-production |
| [`/industries/travel-hospitality`](https://neuroxai.com/industries/travel-hospitality) | AI agents, generative AI/RAG, AI sprint |

An industry hub is more than a renamed service page. For example, the [SaaS hub](https://neuroxai.com/industries/saas) discusses tenant isolation, unit economics, release evaluation, integrations, and specific SaaS service links. Its [SaaS × prototype-to-production page](https://neuroxai.com/industries/saas/prototype-to-production) narrows the offer further to multi-tenancy, subscriptions, tests, and buyer security review; it gives metrics to measure, the delivery steps, a link to the full parent service, FAQs, and a form. The industry route answers “Do they understand *my* constraints?” before passing the reader to the broader service and contact path.

### Migration architecture: search intent around the tool the buyer already used

The [migration hub](https://neuroxai.com/migrate) names recurring prototype failure modes, then offers a guide for each source tool. The six pages are [Bolt](https://neuroxai.com/migrate/bolt-to-production), [Lovable](https://neuroxai.com/migrate/lovable-to-production), [v0](https://neuroxai.com/migrate/v0-to-production), [Replit](https://neuroxai.com/migrate/replit-to-production), [Cursor](https://neuroxai.com/migrate/cursor-to-production), and [general AI prototypes](https://neuroxai.com/migrate/ai-prototype-to-production). Each has its own issue list, followed by shared production concerns, an audit/build path, price ladder, FAQs, an in-page form, and links to the parent service and other guides. The [Bolt guide](https://neuroxai.com/migrate/bolt-to-production), for instance, addresses RLS, browser-side business rules, regeneration wiping fixes, and environment handling. The hub and tool pages target visitors who already have a specific problem, not visitors exploring an agency broadly.

### Pricing, proof, and content routes

- [Pricing](https://neuroxai.com/pricing) packages the buying path: a fixed 30-day Sprint, a prototype-to-production build starting at a quoted amount, then a managed retainer. It spells out deliverables, timing, exclusions, and a FAQ. This reduces ambiguity before a sales call.
- [Work](https://neuroxai.com/work) explicitly says much client work is under NDA. It shows **two in-house products**, not anonymously recast client case studies. [FoodNeverComes](https://neuroxai.com/work/foodnevercomes) has a public live product, an extensive build story, mechanics, stack, and external coverage links. [AI Hotel Concierge](https://neuroxai.com/work/ai-hotel-concierge) is labeled as an internal, non-public Phase 0 build and explains actual product screens and decisions. This candid status labeling is highly relevant to Zavino while its web/SaaS portfolio is thin.
- [About](https://neuroxai.com/about) reinforces the delivery promise, ownership model, team, and self-reported track record, then returns the visitor to pricing or a call.
- [Blog](https://neuroxai.com/blog) has **103 sitemap-listed articles**. Some are broad AI engineering commentary; others directly support a service, such as [“From Bolt to Production”](https://neuroxai.com/blog/from-bolt-to-production-what-ai-prototypes-get-wrong). I checked article-body conversion links across all 103: **71** link to `/services/prototype-to-production`, **29** to `/services/ai-sprint`, **1** to `/services/growth-marketing`, **1** directly to Calendly, and **1** has no distinct in-article service/booking link. Even that last article still includes the shared brief form. This is a clear editorial-to-service funnel, although the CTA distribution is heavily weighted toward two offers.

## The conversion funnel, step by step

```text
Discovery
  ├─ homepage / navigation
  ├─ service search → service detail
  ├─ industry search → industry hub → industry × service page
  ├─ tool-specific search → migration guide
  ├─ blog article → relevant service
  └─ work / about / pricing → proof and scope
             ↓
Qualification on the page
  problem framing → process → deliverables → pricing or price signal → FAQ → proof
             ↓
Lead action (repeated across nearly all content pages)
  A. direct 30-minute Calendly booking
  B. short on-page brief form → /thank-you → optional Calendly booking
```

The [home page](https://neuroxai.com/) leads with one sharp offer, a visible direct-booking button and services link, then a visual before/after prototype demonstration, signature service, productized Sprint, industries, process, disclosed proof, and contact. A service page such as [Prototype → Production](https://neuroxai.com/services/prototype-to-production) repeats the same intent at greater depth and places the booking/form choice in its hero. The [pricing page](https://neuroxai.com/pricing) catches visitors who need a commercial range; [work](https://neuroxai.com/work) answers “Can they ship?”; industry and migration pages answer “Do they understand my context?”; blog articles feed relevant offers. The repeated form means a visitor usually does not have to leave the page to inquire.

### Exact live form pattern to adapt

**It is a single-page form, not a multi-step wizard.** All six visible fields and the “Send brief” submit button appear together in one form in the returned page HTML; there are no separate question screens, progress indicator, or Next/Back controls. The same form is present on the [home page](https://neuroxai.com/), [services](https://neuroxai.com/services), [pricing](https://neuroxai.com/pricing), [migration](https://neuroxai.com/migrate), and detail pages. In the returned HTML it is a `POST` form named `contact`, with Netlify form attributes and a honeypot field. The form action points to `/thank-you`. The visible fields are:

| Order | Field | Required in live HTML? | Notes |
| --- | --- | --- | --- |
| 1 | Your name | Yes | Text input. |
| 2 | Company | Yes | Text input. |
| 3 | Work email | Yes | Email input. |
| 4 | Project type | Yes | Select; exact options listed below. |
| 5 | Budget range | Yes | Select; exact options listed below. |
| 6 | Brief | Yes | Textarea prompt asks for the problem, success definition, and any timeline constraints. |

**Exact Project type labels:** “Select a service…” (empty placeholder), “AI Agents”, “Prototype → Production”, “Growth Marketing AI”, “Generative AI & RAG”, “Strategy & Governance”, “30-day AI Sprint”, and “Not sure yet”. **Exact Budget range labels:** “Select a range…” (empty placeholder), “< $10,000”, “$10,000–$25,000”, “$25,000–$75,000”, “$75,000+”, and “Retainer”. The brief textarea placeholder is “What's the problem? What does success look like? Any timeline constraints?”

The form copy promises a one-business-day response and offers an NDA on request; a direct Calendly link sits above it. On service detail and migration pages, the relevant **Project type is already selected** in the HTML. On broader pages such as home, the services index, industry hub, work, and sampled blog article, the neutral placeholder is selected. This preserves context while leaving the user able to change it. The form markup declares all six fields `required`, and the email field has `type="email"`, so browser-native missing-field and email-format validation is expected. I did not verify custom error messages or client-side conditional behavior. A direct GET of the [confirmation page](https://neuroxai.com/thank-you) shows “Brief received.”, the stated reply time, a booking link for urgent visitors, and a home link. I did **not** submit a real lead, so successful POST delivery, redirect behavior after POST, spam handling, and notification delivery remain unverified.

There is one visible anchor issue to avoid copying: the hero's “Send a brief” link on the [prototype service page](https://neuroxai.com/services/prototype-to-production) uses `#contact`, while that page's returned HTML exposes `id="contact-form"` but no `id="contact"`. The [home page](https://neuroxai.com/) has both IDs, so its contact fragment is valid. A redesign should check every CTA fragment against a real target during build QA.

## What Zavino should borrow, adapt, and defer

These are **recommendations for Zavino**, not descriptions of the current NeuroX site. They complement the proposed routes in [Zavino's service architecture and page map](./service-architecture-and-page-map.md).

1. **Borrow the clear offer ladder for development.** Explain how a buyer can start with a scoped audit/discovery, move into an ecommerce site or custom mini SaaS/web app build, then choose maintenance, SEO, or iteration. State actual Zavino deliverables, ownership, timeline ranges, and what affects scope. Use price ranges only if Zavino is ready to honor them; do not copy NeuroX's numbers or guarantee.
2. **Make the development routes problem-specific.** An ecommerce buyer needs platform choice, product/catalogue flow, checkout, performance, and handoff. A mini SaaS buyer needs user roles, billing or access model where relevant, a narrow first release, and a roadmap. A custom web app buyer needs workflow mapping, integrations, permissions, and post-launch ownership. Each page should say what is included and what happens next, as NeuroX's [prototype service](https://neuroxai.com/services/prototype-to-production) does.
3. **Use a three-way contact choice.** Keep one concise inquiry form, a direct [Zavino audit booking link](https://cal.com/zavino/audit), and WhatsApp on each high-intent page. The form can follow NeuroX's field order while using Zavino's five service pillars and the actual budget ranges the team accepts. Add an optional website/reference URL and preferred contact method if useful. Make the service selection prefilled on its page and carry that context into the submission and thank-you flow. Do not invent an SLA for replies.
4. **Use honest proof while the web portfolio grows.** NeuroX's [work hub](https://neuroxai.com/work) labels its own products and their status. Zavino can show an interactive site capability demo, a concept mini SaaS, process artifacts, or a build log **clearly labeled as in-house/concept work**. Keep the existing content production portfolio separate and truthful. Add client web case studies later when permissions, screenshots, scope, and outcomes are available.
5. **Defer the 34-page industry matrix.** NeuroX can support many specialized pages with substantial distinct copy. Zavino should launch the service hubs and focused development pages first, then add vertical or problem pages only when there is a genuinely different buyer problem, strong original content, and something credible to show. Do not create thin near-duplicates merely to match the competitor's URL count.
6. **Use a small content-to-service loop later.** Publish a useful guide only when Zavino can offer first-hand value, then link it to the one fitting service and inquiry path. NeuroX's many article CTAs show how content can feed services; Zavino does not need a 103-post blog for this redesign.
7. **Keep trust statements exact.** NeuroX uses deadlines, guarantees, prices, client counts, and compliance claims as selling tools. Zavino should publish only terms it can substantiate operationally and contractually. A concise process, explicit deliverables, live demos, and clear contact options can make the site persuasive without borrowed claims.

## Reference URLs by page family

The full list of all 171 live sitemap URLs remains in [NeuroX AI's sitemap](https://neuroxai.com/sitemap.xml). For a compact, inspectable route map, the non-blog families are listed here; the 103 blog article routes are represented by the [blog index](https://neuroxai.com/blog) and the count/CTA audit above.

**Core:** [home](https://neuroxai.com/) · [services](https://neuroxai.com/services) · [pricing](https://neuroxai.com/pricing) · [about](https://neuroxai.com/about) · [work](https://neuroxai.com/work) · [blog](https://neuroxai.com/blog) · [industries](https://neuroxai.com/industries) · [migrate](https://neuroxai.com/migrate) · [privacy](https://neuroxai.com/privacy) · [terms](https://neuroxai.com/terms)

**Service details:** [AI Agents](https://neuroxai.com/services/ai-agents) · [Prototype → Production](https://neuroxai.com/services/prototype-to-production) · [Growth Marketing](https://neuroxai.com/services/growth-marketing) · [Generative AI & RAG](https://neuroxai.com/services/generative-ai-rag) · [Strategy & Governance](https://neuroxai.com/services/strategy-governance) · [AI Sprint](https://neuroxai.com/services/ai-sprint)

**Work:** [FoodNeverComes](https://neuroxai.com/work/foodnevercomes) · [AI Hotel Concierge](https://neuroxai.com/work/ai-hotel-concierge)

**Migration guides:** [Bolt](https://neuroxai.com/migrate/bolt-to-production) · [Lovable](https://neuroxai.com/migrate/lovable-to-production) · [v0](https://neuroxai.com/migrate/v0-to-production) · [Replit](https://neuroxai.com/migrate/replit-to-production) · [Cursor](https://neuroxai.com/migrate/cursor-to-production) · [Any AI prototype](https://neuroxai.com/migrate/ai-prototype-to-production)

**Industry hubs:** [Fintech](https://neuroxai.com/industries/fintech) · [Healthcare](https://neuroxai.com/industries/healthcare) · [Ecommerce](https://neuroxai.com/industries/ecommerce) · [SaaS](https://neuroxai.com/industries/saas) · [Insurance](https://neuroxai.com/industries/insurance) · [Logistics](https://neuroxai.com/industries/logistics) · [Real estate](https://neuroxai.com/industries/real-estate) · [Legal](https://neuroxai.com/industries/legal) · [Education](https://neuroxai.com/industries/education) · [Travel and hospitality](https://neuroxai.com/industries/travel-hospitality)

**Industry/service intersections:**

| Hub | Exact child URL suffixes under `/industries/` |
| --- | --- |
| `fintech/` | [`ai-agents`](https://neuroxai.com/industries/fintech/ai-agents), [`generative-ai-rag`](https://neuroxai.com/industries/fintech/generative-ai-rag), [`strategy-governance`](https://neuroxai.com/industries/fintech/strategy-governance), [`prototype-to-production`](https://neuroxai.com/industries/fintech/prototype-to-production) |
| `healthcare/` | [`generative-ai-rag`](https://neuroxai.com/industries/healthcare/generative-ai-rag), [`ai-agents`](https://neuroxai.com/industries/healthcare/ai-agents), [`strategy-governance`](https://neuroxai.com/industries/healthcare/strategy-governance), [`ai-sprint`](https://neuroxai.com/industries/healthcare/ai-sprint) |
| `ecommerce/` | [`ai-agents`](https://neuroxai.com/industries/ecommerce/ai-agents), [`growth-marketing`](https://neuroxai.com/industries/ecommerce/growth-marketing), [`generative-ai-rag`](https://neuroxai.com/industries/ecommerce/generative-ai-rag), [`prototype-to-production`](https://neuroxai.com/industries/ecommerce/prototype-to-production) |
| `saas/` | [`prototype-to-production`](https://neuroxai.com/industries/saas/prototype-to-production), [`generative-ai-rag`](https://neuroxai.com/industries/saas/generative-ai-rag), [`ai-agents`](https://neuroxai.com/industries/saas/ai-agents), [`growth-marketing`](https://neuroxai.com/industries/saas/growth-marketing) |
| `insurance/` | [`generative-ai-rag`](https://neuroxai.com/industries/insurance/generative-ai-rag), [`ai-agents`](https://neuroxai.com/industries/insurance/ai-agents), [`strategy-governance`](https://neuroxai.com/industries/insurance/strategy-governance) |
| `logistics/` | [`ai-agents`](https://neuroxai.com/industries/logistics/ai-agents), [`generative-ai-rag`](https://neuroxai.com/industries/logistics/generative-ai-rag), [`ai-sprint`](https://neuroxai.com/industries/logistics/ai-sprint) |
| `real-estate/` | [`ai-agents`](https://neuroxai.com/industries/real-estate/ai-agents), [`generative-ai-rag`](https://neuroxai.com/industries/real-estate/generative-ai-rag), [`growth-marketing`](https://neuroxai.com/industries/real-estate/growth-marketing) |
| `legal/` | [`generative-ai-rag`](https://neuroxai.com/industries/legal/generative-ai-rag), [`ai-agents`](https://neuroxai.com/industries/legal/ai-agents), [`strategy-governance`](https://neuroxai.com/industries/legal/strategy-governance) |
| `education/` | [`generative-ai-rag`](https://neuroxai.com/industries/education/generative-ai-rag), [`ai-agents`](https://neuroxai.com/industries/education/ai-agents), [`prototype-to-production`](https://neuroxai.com/industries/education/prototype-to-production) |
| `travel-hospitality/` | [`ai-agents`](https://neuroxai.com/industries/travel-hospitality/ai-agents), [`generative-ai-rag`](https://neuroxai.com/industries/travel-hospitality/generative-ai-rag), [`ai-sprint`](https://neuroxai.com/industries/travel-hospitality/ai-sprint) |

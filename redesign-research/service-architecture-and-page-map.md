# Zavino service architecture and page map

**Proposed information architecture, updated 4 October 2026.** The [AI-first direction](current-direction.md) controls this plan. These are recommended future routes, not a claim that they exist in the current application. The former five-pillar homepage hierarchy is retired; its services remain in the inventory below.

## The front door

The first navigation and homepage choice should be **AI Automation**, **SaaS Development**, and **Web Development**. AI Automation leads. SaaS Development is a distinct product-engineering offer, rather than a small sub-item under web development. Web Development remains broad and credible, from business sites and ecommerce to complex applications. The Services index can show supporting capabilities after these three.

| Primary offer | Buyer problem | What the page must make concrete |
| --- | --- | --- |
| **AI Automation** | Data and decisions are trapped across CRM, commerce, support, operations, and manual approvals. | Workflow map, data sources, AI/rules boundary, integrations, approval gate, failure path, outputs, monitoring, and measurable success criteria. Examples: customer-data-to-offer orchestration, support triage, document operations, onboarding, and internal approvals. |
| **SaaS Development** | A team needs a sellable product or needs to turn a prototype into a robust service. | Users and roles, product workflow, architecture, tenant/data boundaries where applicable, billing where needed, integrations, deployment, QA, ownership, and iteration. |
| **Web Development** | A business needs a high-quality site, commerce experience, portal, or custom web platform. | UX, responsive frontend, backend, CMS/content operations, ecommerce, integrations, accessibility, performance, technical SEO, analytics, and launch/support options. |

**Custom AI** belongs naturally inside AI Automation or SaaS depending on whether the buyer needs an operational system or an in-product feature. It can have a dedicated landing page only when there is enough distinct original material and proof. Do not create many thin pages to mimic a competitor's page count.

## Full service inventory and where it belongs

The broader offer should remain discoverable, especially for existing clients and post-acquisition expansion. Its placement should follow the buyer's question, not pull it into equal prominence in the hero.

| Capability | Specific scope to retain | Recommended presentation |
| --- | --- | --- |
| **AI UGC creative** | AI-assisted UGC concepts, image/video variants, creative testing inputs, brand and rights review, platform-ready outputs. | A compact “AI creative” chapter after the three primary offers; consider a dedicated route once real process examples and rights-cleared work exist. Do not imply synthetic actors are real customers. |
| **Custom AI** | Private-data assistants, retrieval or RAG where useful, tailored agents, multimodal workflows, evaluation, cost and safety controls. | Detailed sections in AI Automation/SaaS; separate page later if demand and evidence justify it. |
| **Content Production** | Cinematic reels, product videos, food photography and videography, motion graphics, CGI content. | Supporting service on the Services index and existing Work archive; a dedicated page can preserve this real creative offer. |
| **Digital Marketing** | Meta Ads, Google Search/Display/YouTube, campaign strategy, performance tracking. | Supporting service and relevant cross-link from customer lifecycle automation and SaaS go-to-market. |
| **Branding & Creative** | Brand identity, social content, packaging design, visual direction. | Supporting service; keep authentic work and role attribution. |
| **Offline Marketing** | Event and stall production, banner and print materials, activation campaigns. | A subsection under Branding & Creative, with a direct anchor if published. |
| **SEO** | On-page SEO, technical SEO, off-page link-building strategy, local SEO, citations. | Web Development section or distinct SEO page when it has original depth. Do not promise rankings or guaranteed links. |

The user wants the homepage to acquire AI and SaaS opportunities first. A prospect should learn about AI UGC, growth creative, production, branding, or offline capabilities **after the core offer is clear**, from a related page, a concise supporting section, or the discovery process. This is a presentation priority, not a deletion of those services.

## Proposed route tree and release priority

```text
/
├── /services
│   ├── /services/ai-automation
│   ├── /services/saas-development
│   ├── /services/web-development
│   ├── /services/ai-ugc-creative           (later, if original content supports it)
│   ├── /services/content-production        (retain as a secondary route)
│   ├── /services/digital-marketing          (secondary route)
│   ├── /services/branding-creative          (secondary route, with #offline-marketing)
│   └── /services/web-development/seo        (later, if distinct from the hub)
├── /work
│   └── /work/[project-slug]                 (only documented, approved stories)
├── /about
├── /contact
├── /thank-you                               (only with a working form; noindex)
└── existing legal routes
```

| Route | Job | Primary next step | Proof and status |
| --- | --- | --- | --- |
| Home | Make AI automation and SaaS value clear immediately; show the three primary offers and a governed example system. | **Discuss your project** → contextual brief or discovery booking. | Illustrative workflow labeled as concept; accurate creative proof lower on page. |
| Services index | Route a buyer by problem and scope; reveal adjacent services later. | Visit the relevant primary service. | Distinct outputs and service boundaries in HTML. |
| AI Automation | Qualify substantial, cross-system workflows. | **Map an automation project**. | Data-to-action diagram, approval/failure path, deliverables, measurable criteria; concept label where needed. |
| SaaS Development | Explain a product from discovery to launch and iteration. | **Discuss a SaaS build**. | Working, labeled product concept or authorized project story. |
| Web Development | Show the breadth of serious web work and route by website, store, portal, or app. | **Discuss a web platform**. | Responsive interaction demo and actual implementation standards; no fabricated client project. |
| Supporting service pages | Give existing production, marketing, branding, AI creative, or SEO prospects a relevant destination. | Service-specific brief. | Only publish a page when it has distinct scope and meaningful proof or explanation. |
| Work | Separate verified client work from in-house concept demonstrations. | **Discuss a similar project**. | Project status, Zavino's role, deliverables, and approved results. |
| About | Explain the actual team, way of working, and business location. | **Discuss your project**. | Real people/process material where available; no invented enterprise history. |
| Contact | Collect enough context for a useful first conversation while keeping scheduling direct. | Submit a brief or book a call. | Working delivery, confirmation, and owner follow-up are implementation requirements. |

The initial build should make **Home, Services, three primary service hubs, Work, About, and Contact** complete before creating a large route network. Existing public routes and legal pages need a coherent migration plan if their content or URLs change. Never publish a thin placeholder route just to fill the tree.

## Navigation model

- **Desktop:** logo → Services (three primary offers first, supporting capabilities below) → Work → About → Contact → a clear project-conversation action. “Book a 30-minute call” can be the persistent secondary route once the event wording is confirmed.
- **Mobile:** the same order with an accessible menu, obvious close action, direct links, and no hover-dependent reveal. The menu should not bury AI Automation or SaaS.
- **Footer:** show all active service pages, Work, contact channels, company details, social profiles, and existing legal routes. Secondary capabilities can live here without overcrowding the first screen.
- **Cross-link by need:** a lifecycle automation page may link to AI UGC for creative variants; SaaS may link to Web for marketing site or portal work; Web may link to SEO; content or branding pages may link to campaign operations. Each link should explain the relationship.

## Page content standard, informed by NeuroXAI

The preserved [NeuroXAI research](neuroxai-funnel-research.md) documents its [service architecture](https://neuroxai.com/services), [industry-specific constraints](https://neuroxai.com/industries), [prototype-to-production offer](https://neuroxai.com/services/prototype-to-production), and [honest work statuses](https://neuroxai.com/work). Use the useful information architecture: a specific problem, scope, deliverables, method, proof state, FAQs, and a brief/booking path. Zavino should write its own terms and examples. Industry pages can come later when an actual vertical has distinctive constraints and evidence.

Every published primary service page should answer: **Who is this for? Which systems or product parts are involved? What gets delivered? Who owns decisions and data? How is success judged? What happens after launch?** These answers will do more selling to a large buyer than a long generic list of tools.

# Zavino service architecture and page map

Status: proposed information architecture for the redesign, 4 October 2026. Routes are recommendations, not routes already implemented. The five top-level pillars below follow the new service list supplied for this project. “Web Development” corrects the spelling for customer-facing copy.

## Approved homepage copy and service positioning

**Small all-caps eyebrow:** “WHERE VISION TAKES FLIGHT”

**Headline:** “Build it. Market it. Automate it.”

**Supporting line:** “Branding, Marketing, Website development, content and AI automation.”

These three copy elements are the homepage's approved front door. The eyebrow is a quiet brand signature above the headline; the five pillars below remain the service taxonomy and navigation. The three verbs do not collapse or rename them. The scroll-reactive image behavior is specified in [UI design base](ui-design-base.md).

## Service taxonomy and exact coverage

| Pillar / proposed hub | Service or sub-service to cover | Recommended home on the site |
| --- | --- | --- |
| **Content Production** `/services/content-production` | Cinematic Reels; Product Videos; Food Photography & Videography; Motion Graphics; CGI Content | One hub with five anchored service sections, relevant existing reels/stills, process, deliverables, and inquiry CTA. |
| **Digital Marketing** `/services/digital-marketing` | Meta Ads (Facebook & Instagram); Google Ads (Search, Display, YouTube); Campaign Strategy; Performance Tracking | One hub explaining channel choice, creative-to-campaign workflow, reporting, and campaign inquiry. |
| **Branding & Creative** `/services/branding-creative` | Brand Identity; Social Media Content; Packaging Design; Visual Direction | Main creative sections with actual examples where rights and service attribution are clear. |
| **Branding & Creative → Offline Marketing** `#offline-marketing` | Event & Stall Production; Banner & Print Materials; Activation Campaigns | A clear nested section on the branding hub and a jump link from `/services`; a separate landing page only when there is enough distinct evidence and demand. |
| **Web Development** `/services/web-development` | Ecommerce Web Design (Shopify/WordPress); Custom Mini SaaS Development; Custom Web App Development | Hub showing the three build paths, discovery-to-launch method, maintenance/ownership expectations, and links to focused pages. |
| **Web Development → SEO** `/services/web-development/seo` | On-page SEO; Technical SEO; Off-page Link Building Strategy; Local SEO; Citations | Dedicated SEO page with five explicit sections. Position as strategy/implementation, without ranking guarantees or invented results. |
| **AI Automation** `/services/ai-automation` | Social Media Automation (n8n); AI Image & Video Generation (ComfyUI); Automated Content Publishing Workflow | Hub organized by workflow, human approval points, example diagrams, limitations, and automation intake. |

The marketing and SEO pages should connect, but their scopes should stay distinct: paid acquisition and campaign measurement live in Digital Marketing; search optimization lives under Web Development as requested. A cross-link can explain how landing pages, technical SEO, and paid campaigns reinforce each other.

## Recommended route tree

```text
/
├── /services
│   ├── /services/content-production
│   ├── /services/digital-marketing
│   ├── /services/branding-creative
│   │   └── #offline-marketing (section on the pillar page)
│   ├── /services/web-development
│   │   ├── /services/web-development/ecommerce
│   │   ├── /services/web-development/custom-saas
│   │   ├── /services/web-development/web-apps
│   │   └── /services/web-development/seo
│   └── /services/ai-automation
├── /work
│   └── /work/[project-slug] (future, after a case study is documented)
├── /about
├── /contact (lead form + WhatsApp + audit booking)
├── /thank-you (form confirmation, noindex)
├── /privacy-policy
├── /terms-and-conditions
└── /cancellation-refund-policy
```

### Page-by-page purpose

| Route | Job to do | Primary CTA | Supporting route / proof | Priority |
| --- | --- | --- | --- | --- |
| `/` | Lead with the approved headline and supporting line; let users self-select among five pillars; show scroll-reactive, genuine work and a clearly labeled web/automation demo. | “Send a brief” → `/contact` | Five-pillar index and Work; audit and WhatsApp visible. | Launch |
| `/services` | Help a visitor choose among five pillars without reading a long undifferentiated list. | “Find the right service” → relevant hub | Cross-discipline example paths and all five hubs. | Launch |
| `/services/content-production` | Convert visitors interested in film, food, products, motion, or CGI. | “Plan a production” → form preselected | Reel gallery and permission-cleared stills; direct WhatsApp. | Launch |
| `/services/digital-marketing` | Explain campaign planning and accountable reporting. | “Discuss a campaign” → form preselected | Relevant creative and measurement framework; Cal audit. | Launch |
| `/services/branding-creative` | Explain identity, social, packaging, visual direction, and the offline work nested beneath them. | “Build your brand” → form preselected | Genuine design/media samples and process. | Launch |
| `/services/web-development` | Make the software offer tangible and route users to the right build path. | “Discuss your build” → form preselected | Interactive product UI demo, delivery model, scope selector. | Launch |
| `/services/web-development/ecommerce` | Address store owners choosing Shopify or WordPress. | “Plan my store” → form preselected | Store journey/feature demo; links to SEO and ads. | Launch if enough original page content is prepared |
| `/services/web-development/custom-saas` | Explain a small SaaS product from problem discovery through MVP and iteration. | “Scope a SaaS MVP” → form preselected | Example product flow clearly labeled as a Zavino concept if not client work. | Launch if enough original page content is prepared |
| `/services/web-development/web-apps` | Explain custom portals, internal tools, dashboards, and business apps without pretending to have shipped unverified examples. | “Scope a web app” → form preselected | Interactive interface demonstration and delivery phases. | Launch if enough original page content is prepared |
| `/services/web-development/seo` | Explain the exact five SEO services and when they are appropriate. | “Request a site audit” → [Cal.com](https://cal.com/zavino/audit) | Form for detailed briefs; cross-links to web and paid marketing. | Launch |
| `/services/ai-automation` | Show concrete workflows, tools, review gates, and business fit. | “Map my workflow” → form preselected | A step-by-step workflow simulator/diagram; WhatsApp. | Launch |
| `/work` | Present the real media portfolio in a way that can later grow into case studies. | “Discuss a similar project” → form preselected | Filters by service and format; project context on each item. | Launch |
| `/about` | Explain the team, location, working approach, and why disciplines connect. | “Meet the team / Start a project” → `/contact` | Authentic people/process visuals if available; client list with rights confirmed. | Launch |
| `/contact` | Offer three clear contact paths and collect a useful brief. | Submit form | WhatsApp for fast chat; audit booking for scheduled conversation. | Launch |
| `/thank-you` | Confirm form submission and explain the next step. | “Book a 30-minute audit” or return to services | No fabricated response-time promise. | Launch with form |
| Legal pages | Explain current terms and data handling accurately. | Contact | Revise for form collection and scheduling before launch. | Launch review |

For the three web development child pages, **do not publish near-identical thin pages**. If sufficient original copy, diagrams, and FAQs cannot be produced for a child route at launch, keep that topic as a robust section of `/services/web-development` and publish the child route in the next phase. This is an editorial quality gate, not a change to the service list.

## Navigation model

**Desktop header:** logo → Services (five-pillar menu) → Work → About → Contact → prominent “Book an audit” action. Keep a visible WhatsApp shortcut in the header utility area or as a clear secondary contact affordance, especially on mobile.

**Services menu:** show five large labels with a one-line practical explanation. Under Web Development, expose Ecommerce, Custom SaaS, Web Apps, and SEO; under Branding & Creative, include a textual Offline Marketing jump link. Make every menu item a real page/anchor with keyboard support. Avoid a maze of separate pages for each small item.

**Mobile:** a compact full-screen or panel menu with the same route order, an obvious close button, focus handling, and two direct contact links. The service menu must remain usable without hover.

**Footer:** service hubs, Work, About, Contact, WhatsApp, audit booking, social profiles, business details, and current legal routes. No empty “Insights” or “Case studies” link until those sections exist.

## Cross-link routes that support discovery

| Visitor starts here | Helpful next page | Why |
| --- | --- | --- |
| Food reel on `/work` | `/services/content-production#food-photography-videography` | Show the related offer and an inquiry form with that topic preselected. |
| Product shoot or brand identity | `/services/digital-marketing` | Explain how the assets become campaigns. |
| Ecommerce | `/services/web-development/seo` and `/services/digital-marketing` | Connect the store to organic discovery and paid acquisition. |
| Custom SaaS or web app | `/services/ai-automation` | Explain integrations and repeatable workflows where relevant. |
| AI publishing workflow | `/services/content-production` and `/services/branding-creative` | Make clear that automation still needs quality content and brand direction. |

## Existing URL treatment

Preserve `/`, `/about`, `/services`, `/contact`, and legal URLs. The current redirects send `/portfolio` and `/case-study` to `/#work`; when `/work` launches, update those to `/work` if that is the correct intent for old links. Preserve `/about-us` and `/contact-us` redirects. Add new routes to the sitemap only when the pages are substantive and public. Keep `/thank-you` out of search indexing. No change is made in this planning pass.

## Search and content structure

Each public service page needs a distinct buyer question, plain H1, scope, deliverables, process, evidence or clearly labeled demonstration, FAQs drawn from real buyer objections, and a route-specific CTA. Example language to validate with customers: “Shopify and WordPress ecommerce websites,” “custom SaaS MVP development,” “technical and local SEO,” and “n8n content automation.” These are draft topic descriptions, not keyword-volume claims. Avoid location-stuffed pages unless Zavino can actually serve and support those locations.

# Zavino

A studio website for practical AI systems, SaaS products, web platforms, content workflows, and enterprise AI training. Built with Next.js App Router, React, TypeScript, and plain CSS. The visual system is documented in [DESIGN.md](DESIGN.md), with product constraints in [PRODUCT.md](PRODUCT.md).

## Run locally

Use Node.js 22 or newer (`.nvmrc` selects 22).

```bash
npm ci
npm run dev
```

Open http://localhost:3000. For a standard production preview:

```bash
npm run build
npm run start
```

`.env.example` documents the optional canonical URL override. The contact form's persistence and notification bindings are described in the existing deployment documentation. A plain Next.js preview does not provide production Cloudflare bindings.

## Site structure

| Route | Purpose |
| --- | --- |
| `/` | Business promise, six services, selected work, four-step process, ongoing support, audit invitation |
| `/services` | Goal-based finder and six primary services |
| `/services/ai-revenue-systems` | Lead qualification, sales workflows, and an interactive inquiry concept |
| `/services/ai-operations-agents` | Internal workflows, knowledge sources, and an agent escalation concept |
| `/services/saas-development` | Custom products and an interactive release planner |
| `/services/web-apps-platforms` | Custom platforms and a booking/permissions concept |
| `/services/ai-content-flows` | Content operations and an editorial approval concept |
| `/services/enterprise-ai-training` | Practical workshops for enterprise teams in Bangladesh, with role-specific exercises |
| `/services/web-development` | Supporting website capability and original responsive journey concept |
| `/work` | Five work categories, creative heritage, 13 films, and labeled internal prototypes |
| `/labs` | Zavino Labs, launched Aston Mark, and a clearly labeled operating experiment |
| `/about` | Studio approach, disciplines, working principles, business details |
| `/contact` | Validated project brief, booking, email, and WhatsApp |
| Policy routes | Privacy, terms, cancellation, and refunds |

The site also includes a 404, sitemap, robots file, social preview, icons, and legacy URL redirects.

## Editing

- Six-service catalog and support copy: `src/lib/services.ts`; four-step process: `src/lib/home.ts`.
- Business details and supplied projects: `src/lib/site.ts`.
- Film titles and order: `src/lib/reels.ts`; original-to-published mapping: `src/lib/reel-manifest.json`.
- Pages: `src/app/`; shared components: `src/components/`.
- Shared tokens and components: `src/app/globals.css`.
- Homepage layouts: `src/app/homepage.css`; expressive motion and footer: `src/app/experience.css`; service layouts: `src/app/service-pages.css`; concept demos: `src/app/demos.css`.
- Business refinement layouts: `src/app/business-pages.css`; distinct interactive concepts: `src/components/concepts/` and `src/app/business-concepts.css`.
- Self-hosted Manrope font and license: `src/fonts/`.

The homepage shows evidence with its true scope. The lab concepts are illustrative, creative projects are labeled as creative work, and Aston Mark is described as an owned business. Do not turn these into unsupported client results.

## Imagery and motion

The hero uses a generated miniature fighter jet on a forest-green ramp, a brand illustration rather than client work. Its prompt is saved in `docs/design/flight-ramp.prompt.txt`; provenance accompanies the asset. Existing portfolio and film assets come from the supplied repository.

The homepage retains a masked **Reveal** and short **Stagger**, then native scrolling advances six dimensional opportunity chapters through an IntersectionObserver. Phones use direct selection. Each detailed service has its own working concept with options, alternate outcomes, and immediate feedback. No page-specific demo is reused across routes.

The shared footer retains a playful wordmark button with tap, drag, and keyboard alternatives. Progressive bottom blur and native page transitions are shared across routes. Controls remain usable with keyboard and reduced motion. The giant signature contains no navigation link.

The business update’s state paths and motion vocabulary are recorded in `docs/design/business-update-verification.md`. These locally authored examples never send messages, publish content, reserve real appointments, or process a payment.

Videos load only after play is pressed. To regenerate the approved 13-film collection with FFmpeg installed, run `npm run media:reels`. Originals remain in `resources-from-old-website/videos/`.

## Validation and delivery

```bash
npm run lint
npm run build
npm run typecheck
npm run test:inquiry
```

The inquiry test uses isolated in-memory SQLite (verified on Node 24), the real SQL migration, and mocked notifications. It does not start a Workers process, access a hosted database, or send a real inquiry. New contact details use a versioned context record in the existing schema; see `docs/inquiry-setup.md`.

**Deliver this redesign through GitHub only. Do not run Worker deployment commands.** Existing Cloudflare integration remains in the repository because it powers the current contact runtime. The historical [deployment guide](docs/CLOUDFLARE-DEPLOYMENT.md) is background documentation, not authorization to deploy this change manually.

# Zavino

A service-led studio website for AI automation, SaaS development, and web development. Built with Next.js App Router, React, TypeScript, and plain CSS. The visual system is documented in [DESIGN.md](DESIGN.md), with product constraints in [PRODUCT.md](PRODUCT.md).

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
| `/` | Promise, three services, selected work, process, project invitation |
| `/services` | Core services and supporting creative capabilities |
| `/services/ai-automation` | Automation scope, illustrative workflow, process, FAQs |
| `/services/saas-development` | Product scope, illustrative role-based concept, process, FAQs |
| `/services/web-development` | Web scope, responsive concept, standards, process, FAQs |
| `/work` | Creative archive, 13 films, and clearly labeled lab concepts |
| `/zavino-owned-products` | Ventures Zavino builds and operates |
| `/about` | Studio approach, disciplines, working principles, business details |
| `/contact` | Validated project brief, booking, email, and WhatsApp |
| Policy routes | Privacy, terms, cancellation, and refunds |

The site also includes a 404, sitemap, robots file, social preview, icons, and legacy URL redirects.

## Editing

- Homepage service and process data: `src/lib/home.ts`.
- Business details, supplied projects, service scopes: `src/lib/site.ts`.
- Film titles and order: `src/lib/reels.ts`; original-to-published mapping: `src/lib/reel-manifest.json`.
- Pages: `src/app/`; shared components: `src/components/`.
- Shared tokens and components: `src/app/globals.css`.
- Homepage layouts: `src/app/homepage.css`; expressive motion and footer: `src/app/experience.css`; service layouts: `src/app/service-pages.css`; concept demos: `src/app/demos.css`.
- Self-hosted Manrope font and license: `src/fonts/`.

The homepage shows evidence with its true scope. The lab concepts are illustrative, creative projects are labeled as creative work, and Aston Mark is described as an owned business. Do not turn these into unsupported client results.

## Imagery and motion

The new daylight bridge image is a generated brand visual, not client work. Its exact prompt is saved in `docs/design/workday-bridge.prompt.txt`. Raster provenance is embedded or stored in adjacent JSON sidecars. Existing portfolio and film assets come from the supplied repository.

The homepage opens with a masked **Reveal** and short **Stagger**. Its three services share a sticky, dimensional CSS interface stage driven by native scroll through GSAP ScrollTrigger. The three UI concepts are labeled as illustrations. On smaller or shorter screens, and with reduced motion, services use a compact static flow.

The shared footer adds a large Manrope wordmark, physical depth, and pointer-responsive **Parallax** with a moving light field. A homepage-only **Mask / Blur** treatment progressively diffuses the viewport’s bottom edge. The blur cannot intercept input and disappears for visible keyboard focus, open dialogs, and reduced transparency. Pointer effects require a fine pointer and no reduced-motion preference; they reset on leave, focus, scrolling, resizing, and preference changes.

**Press / Tap feedback** on primary controls and **Origin-aware animation** for the native mobile dialog remain. Keyboard focus is immediate. Main content and links are present without JavaScript; a failed motion import falls back to compact services. Motion source: `service-experience.tsx`, `footer-signature.tsx`, `progressive-blur.tsx`, and `experience.css`.

Videos load only after play is pressed. To regenerate the approved 13-film collection with FFmpeg installed, run `npm run media:reels`. Originals remain in `resources-from-old-website/videos/`.

## Validation and delivery

```bash
npm run lint
npm run build
npm run typecheck
node scripts/test-inquiry.mjs
```

The inquiry test uses a local database and mocked notifications; it does not send a real project inquiry.

**Deliver this redesign through GitHub only. Do not run Worker deployment commands.** Existing Cloudflare integration remains in the repository because it powers the current contact runtime. The historical [deployment guide](docs/CLOUDFLARE-DEPLOYMENT.md) is background documentation, not authorization to deploy this change manually.

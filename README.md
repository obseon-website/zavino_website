# Zavino — Where Vision Takes Flight

Complete agency website: a homepage and six supporting pages, built locally for Cloudflare Workers with Next.js and OpenNext. GitHub integration and deployment have not been performed.

## Run locally

Use Node.js 22 or newer (`.nvmrc` selects 22).

```bash
npm ci
npm run dev
```

Open http://localhost:3000. No credentials or database are required. `.env.example` documents the optional canonical URL override.

For a production build in the actual local Cloudflare runtime:

```bash
npm run preview
```

Open http://localhost:8787. This does not publish the site. Follow [the Cloudflare deployment guide](docs/CLOUDFLARE-DEPLOYMENT.md) to connect GitHub and launch later.

## Pages

| Route                         | Content                                                                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `/`                           | Desktop image-trail hero, logo-window introduction, mobile film deck, all 13 showreels, portfolio stills, services, process, contact |
| `/about`                      | Agency, values, business details, clients                                                                                            |
| `/services`                   | Four service groups, quotes, projects and retainers, FAQs                                                                            |
| `/contact`                    | WhatsApp, calls, email, public address                                                                                               |
| `/privacy-policy`             | Website data practices and communication/payment providers                                                                           |
| `/terms-and-conditions`       | Proposals, advances, revisions, approvals, ownership, delivery                                                                       |
| `/cancellation-refund-policy` | Cancellation, unused-fee reconciliation, refund timing                                                                               |

All pages are prerendered. A custom 404, sitemap, robots file, social image, icons, and legacy URL redirects are included. There is no inquiry form, analytics tracker, or public payment checkout.

## Editing

- Business details, clients, portfolio stills, services: `src/lib/site.ts`.
- Film titles, order, descriptions: `src/lib/reels.ts`.
- Page and policy copy: `src/app/`.
- Shared components: `src/components/`.
- Styles and responsive layouts: `src/app/globals.css`.
- Symbol files: `public/brand/`; original logo path: `src/lib/logo.ts`.
- Self-hosted fonts and licenses: `src/fonts/`.

Policy defaults are 50% project advance, 50% before delivery, retainers paid monthly in advance, two consolidated revision rounds, and approved refund processing within 7–10 working days. An accepted proposal can define project-specific terms.

## Media

All 13 supplied top-level showreels are in the homepage motion collection. `src/lib/reel-manifest.json` maps their original filenames to the published assets. The desktop hero and mobile deck use the same approved collection; discarded legacy background videos are not used.

`public/media/reels/` contains compatible H.264/AAC MP4s with fast-start metadata and original audio, plus WebP posters. Videos download only after play is pressed. The original AV1 files remain in `resources-from-old-website/videos/`.

To regenerate, install FFmpeg (`ffmpeg` and `ffprobe` on PATH), then run:

```bash
npm run media:reels
# Re-encode every film after changing compression settings:
npm run media:reels -- --force
```

The script intentionally expects exactly 13 approved showreels. Review it and the gallery count when changing the collection. Commit generated videos, posters, and manifest; Cloudflare does not need FFmpeg at build time. The aviation hero is a generated brand visual; portfolio media uses the supplied work.

## Checks

```bash
npm run lint
npm run build:worker
npm run typecheck
npm run check:size
npm run preview:worker
```

`check:size` is a local dry run and requires a Worker build first. `preview:worker` reuses that build. `npm run deploy` actually publishes; use it only when ready.

Motion respects reduced-motion preferences. The introduction runs once per tab session, includes a skip button and timeout, and does not block a no-JavaScript page. Desktop service pinning becomes a normal list on smaller screens. Policy pages use a narrow desktop sidebar and a collapsed contents menu on smaller screens.

Dependencies are pinned in `package.json` and `package-lock.json`. The original [Cloudflare recommendations](Cloudflare-Next.js-Recommendations.md) remain as background reference; use the project-specific guide for this site's exact settings.

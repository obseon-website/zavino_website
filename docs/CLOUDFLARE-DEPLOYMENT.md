# Connect Zavino to Cloudflare

Prepared for this repository on 21 September 2026. No deployment, GitHub connection, or DNS change has been made.

## 1. What you need

- Access to GitHub repository `iaevan/zavino_website` and permission to connect it to Cloudflare.
- A Cloudflare account and access to the domain's DNS when ready to replace the old website.
- Node.js 22 for local work.
- The completed files committed and pushed, including `package-lock.json`, `public/`, and `cloudflare-env.d.ts`.

This site uses **Cloudflare Workers with OpenNext**, following the repository's requested approach. It needs no D1, KV, R2, paid image-processing binding, or API credentials. Current pages are generated at build time. [OpenNext setup](https://opennext.js.org/cloudflare/get-started)

## 2. Check locally

From the repository root:

```bash
npm ci
npm run lint
npm run build:worker
npm run typecheck
npm run check:size
npm run preview:worker
```

Visit http://localhost:8787. Test every page, films, mobile navigation, and policy links. `check:size` uses `wrangler deploy --dry-run`; it does not publish.

Keep `.env.local`, `.dev.vars`, credentials, and build folders out of Git. The supplied `.gitignore` covers them. Include generated media under `public/`: original videos are not converted during Cloudflare builds.

## 3. Connect GitHub

1. Push the completed site to the production branch you want Cloudflare to track. The existing branch is `main`.
2. In Cloudflare, open **Workers & Pages**, create a Worker application, and choose the Git repository connection flow.
3. Connect GitHub, grant the Cloudflare GitHub application access to `iaevan/zavino_website`, and select that repository.
4. Apply the settings below. For an existing Worker, connect the repository under **Settings → Build**.
5. Run the first deployment. Review its log and test the resulting `workers.dev` URL before moving the live domain.

Workers Builds uses separate build and deployment steps. [Cloudflare build settings](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)

| Setting           | Value                                            |
| ----------------- | ------------------------------------------------ |
| Worker name       | `zavino-website`                                 |
| Repository        | `iaevan/zavino_website`                          |
| Production branch | `main`, unless intentionally changed             |
| Root directory    | Repository root (`/`)                            |
| Build command     | `npm run build:worker`                           |
| Deploy command    | `npx opennextjs-cloudflare deploy`               |
| Build variable    | `NODE_VERSION` = `22`                            |
| Build variable    | `NEXT_PUBLIC_SITE_URL` = `https://thezavino.com` |

The lockfile controls dependency versions. Do not set a Pages output folder or use a Pages deployment command. `npm run build` alone does not create the Worker output. Do not use `npm run deploy` in the table's deploy step because it repeats the build.

Start with production-branch builds only. If enabling non-production branches later, use `npx opennextjs-cloudflare upload` after the same build command to create preview versions without promoting them to production. [OpenNext CLI](https://opennext.js.org/cloudflare/cli)

## 4. Repository configuration

| File                  | Purpose                                                                      |
| --------------------- | ---------------------------------------------------------------------------- |
| `wrangler.jsonc`      | Worker name, `.open-next/worker.js`, assets, compatibility flags, public URL |
| `open-next.config.ts` | OpenNext adapter, no external incremental cache                              |
| `next.config.ts`      | Local Workers integration, preoptimized images, headers, legacy redirects    |
| `public/_headers`     | Static file caching                                                          |
| `cloudflare-env.d.ts` | Generated binding types                                                      |
| `.env.example`        | Optional Next.js development/build variables                                 |
| `.dev.vars.example`   | Optional local Worker preview variables                                      |

Keep `name` and `services[0].service` equal if renaming the Worker. Keep `nodejs_compat` enabled. Run `npm run cf-typegen` after changing bindings. Public `NEXT_PUBLIC_*` values are embedded during builds: set the Cloudflare **build variable**, not only its runtime variable, and rebuild after changing the URL. The source fallback and Wrangler configuration already use `https://thezavino.com`.

No secrets are needed. Future credentials belong in Cloudflare's encrypted secret settings, never `NEXT_PUBLIC_*` or committed files. Do not add database, R2, or image bindings without a feature that needs them.

## 5. Switch the live domain

Keep the legacy site available until the Worker preview passes review.

1. Ensure `thezavino.com` is an active zone in the same Cloudflare account. If moving nameservers, first copy all existing DNS records, especially email MX, SPF, DKIM, and DMARC.
2. Open the Worker's **Settings → Domains & Routes → Add → Custom Domain** and enter `thezavino.com`.
3. Review any conflicting website DNS record Cloudflare identifies. Replace only the relevant web record when ready to switch. Preserve email and unrelated subdomain records.
4. Configure `www.thezavino.com` too. Prefer a Cloudflare redirect rule from `www` to `https://thezavino.com`, preserving path and query string. The site's canonical URLs use the apex domain.
5. After DNS and certificate activation, verify HTTPS, every page, and complete film playback on the final domain.

Custom Domains associate a hostname and certificate with the Worker. [Cloudflare Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)

Existing permanent redirects: `/portfolio` and `/case-study` → `/#work`; `/about-us` → `/about`; `/contact-us` → `/contact`. Add other legacy routes to `next.config.ts` if the old sitemap contains more URLs worth retaining.

## 6. Updates and recovery

Edit locally, run checks, commit, and push to the connected production branch. Cloudflare rebuilds and deploys that revision. Check the deployment result before announcing an update.

A failed build leaves the previous deployed version available. Read the first substantive error in the build log. For a bad successful release, redeploy a previous working version from deployment history, then revert or fix the source commit so the next Git build does not repeat it. Keep the old hosting available through the initial domain verification.

### Manual deployment alternative

When you choose to publish from your terminal:

```bash
npx wrangler login
npx wrangler whoami
npm run deploy
```

Verify the intended Cloudflare account. With multiple accounts, set the public `account_id` in `wrangler.jsonc` to avoid ambiguity. Keep tokens out of Git. Manual deployment does not connect future Git pushes; complete section 3 for that.

## 7. Launch checklist

- Confirm public contacts match the intended merchant identity. Current confirmed details: Zavino; Bashundhara R/A, Dhaka, Bangladesh; +880 1844 293698; info@thezavino.com.
- Confirm portfolio, client names, and film soundtracks are cleared for public display.
- Check all seven pages, `/sitemap.xml`, `/robots.txt`, HTTPS, and legacy redirects.
- Check calls, WhatsApp, email, mobile navigation, and all 13 films.
- Review the policy defaults against actual proposals: 50% advance / 50% before delivery, two revision rounds, monthly retainers prepaid, 30-day retainer notice, unused-fee reconciliation, approved refunds processed within 7–10 working days.
- Run mobile Lighthouse against the deployed domain and test on actual iPhone and Android devices. Local simulation does not measure Bangladesh mobile network performance.

### SSLCommerz later

This is a quote-based website with no checkout, card collection, order submission, or payment API. Policy references to SSLCommerz do not activate merchant payments.

Complete merchant onboarding with the legal business/trade-license details and full registered address SSLCommerz requires, keeping the website consistent with those records. Before adding checkout, implement server-side transaction verification, success/failure/cancellation handling, policy acceptance, and required payment branding. BDT is the primary quotation currency; other currencies require support under your merchant arrangement and payment method. Review [SSLCommerz merchant terms](https://sslcommerz.com/terms-and-conditions/) before integration.

## Troubleshooting

| Symptom                         | Check                                                                                                                     |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `.open-next/worker.js` missing  | Use `npm run build:worker` from repository root.                                                                          |
| Service binding cannot be found | Match Worker name and `WORKER_SELF_REFERENCE` service name.                                                               |
| Film returns 404                | Commit its MP4 and poster from `public/media/reels/`.                                                                     |
| Film starts late                | Check connection speed; films deliberately load on play. For a much larger library, assess a dedicated streaming service. |
| Image binding error             | Keep `images.unoptimized: true`; WebPs are already optimized.                                                             |
| Canonical URLs wrong            | Correct the build variable and `src/lib/site.ts` fallback; rebuild.                                                       |
| Old website still appears       | Check active deployment, Custom Domain, DNS, and browser cache.                                                           |
| Worker bundle grows             | Build then run `npm run check:size`; keep media in `public/`, not embedded in code.                                       |

Check [current Workers limits](https://developers.cloudflare.com/workers/platform/limits/) before launch. The broad recommendations supplied in the repository are background guidance; current account limits take precedence.

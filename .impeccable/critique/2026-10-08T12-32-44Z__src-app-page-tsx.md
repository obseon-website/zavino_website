---
target: Homepage baseline at 4fe783f, assessed before redesign
total_score: 23
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 1
target_identity: "file:/Users/iaevan/work/zavino/zavino_website/src/app/page.tsx"
target_fingerprint: "sha256:a12237b9ec19c321f13fdb497ad7f8570e57a47befed8defaeb61ca4ee6a3d63"
target_path: /Users/iaevan/work/zavino/zavino_website/src/app/page.tsx
timestamp: 2026-10-08T12-32-44Z
slug: src-app-page-tsx
---
# Homepage critique and redesign decisions

Assessed 8 October 2026, before editing baseline commit `4fe783f`. This report describes the old homepage, not the redesigned page. Two independent agents performed the design assessment and detector/browser assessment. The design assessment completed before the detector findings entered the synthesis.

## Assessment

The old homepage had a sound functional foundation but asked visitors to process too much technical explanation before seeing tangible work. Its repeated dark-green panels, lime accents, two-tone headlines, and outlined system diagrams made most sections feel alike. The hero workflow appeared again farther down the page, while a second product demonstration added another dense interface. Real creative work arrived late.

The heuristic score was **23/32 (71.9%)**: status, real-world language, control, consistency, prevention, recognition, and recovery each scored 3/4; minimalist design scored 2/4. Expert-efficiency and standalone help were not applicable. Local cognitive load failed four of eight checks: single focus, chunking, minimal choices, and progressive disclosure.

The deterministic scan returned **zero findings**. Browser evidence found problems the markup detector did not cover. A clean detector result was not treated as proof of quality.

| Priority | Observed problem | Implemented response |
| --- | --- | --- |
| P1 | Mobile service titles merged into “SaaSdevelopment” and “Webdevelopment” and approached their arrows. | Plain service names, explicit spacing, generous rows, and a dedicated arrow column. |
| P2 | The same workflow was explained twice at full interaction depth. | A short service summary on the homepage; complete demonstrations on the service and work routes. |
| P2 | Demo text fell to roughly 7–10px, with small controls. | Larger demo typography and 44px primary controls; no miniaturized interface in the hero. |
| P2 | Repeated headline treatments and panels produced a visual plateau. | Mist-blue sections, open service rows, broad imagery, an owned-product feature, and a compact process. |
| P2 | Tangible evidence followed several conceptual promises. | Selected work immediately follows the three core services. Owned product, client creative work, and illustrative concepts remain clearly distinguished. |
| P2 | At narrow widths the header approached or exceeded the available layout width. | A responsive header with a 44px menu control, verified down to a 320px viewport. |
| P2 | The open mobile navigation left concealed page content in the accessibility tree. | Native modal dialog with background inertness, contained focus, Escape, and focus restoration. |

Keep: the three core services, honest demonstration labels, working approval/recovery examples, real creative images, and clear project inquiry routes. Remove: repeated promises, duplicate contact sections, decorative labels, and automatic scroll animation.

## New content model

1. **Promise:** good technology for a lighter workday, a concise service description, one project action, and a static brand image.
2. **Services:** name, business outcome, short description, scope, and destination for each of AI automation, SaaS development, and web development. Creative services are supporting capabilities.
3. **Evidence:** Aston Mark as an owned digital business; Halda Valley and Ventro as client creative work. No invented automation results or quantitative claims.
4. **Process:** three ordered stages, each with a tangible deliverable.
5. **Conversation:** a project inquiry and a secondary booking route.

`src/lib/home.ts` owns the service and process model. `src/lib/site.ts` remains the source for contact details, service scopes, and supplied projects. Supporting routes preserve full scope, concepts, the creative archive, all 13 films, owned products, contact delivery, and policies.

## Run notes

Target slug: `src-app-page-tsx`. No critique ignore rules existed. Assessment A and B were independent. Baseline CLI detector completed once with `[]`. Browser evidence used the Codex in-app browser at desktop, mobile, and narrow mobile sizes. Overlay injection was unavailable because the supported evaluation API is read-only; no overlay or detector live server was started. Source inspection, computed DOM bounds, screenshots, and native interaction checks supplied the fallback evidence. Temporary assessment reports were kept outside the repository in `/tmp`.

Questions skipped: the user had already requested implementation and delegated the visual world. Two scope clarifications were asked early and answered: retain the three services, and build directly in code. The redesign proceeds on those confirmed answers.

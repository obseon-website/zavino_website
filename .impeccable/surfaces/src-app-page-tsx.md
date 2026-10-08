---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/components/hero.tsx","src/components/header.tsx","src/components/footer.tsx","src/app/globals.css"]
---

# Homepage redesign

Mode: Persuade. Primary action: discuss a project. User confirmed the three core services and code-first delivery; visual-world choice is delegated by the request.

## New hierarchy and content model

1. Hero: one promise, one explanation of the three services, a contact action, and a quiet brand image.
2. Services: three plain-language outcomes with links to full scope and demonstrations.
3. Selected work: owned product Aston Mark as software/commercial operating evidence; two clearly labeled creative projects as creative evidence. No invented automation results.
4. Process: three sequential stages with a concrete deliverable each.
5. Contact invitation: one next action, a secondary booking route, and the shared footer.

Supporting routes retain full service scope, concepts, creative archive, 13 films, owned products, contact form, business details, and policies. The shared type, colors, controls, and spacing extend to every route.

## Direction derivation

Grounded candidates: 1 independent studio monograph; 2 architecture practice portfolio; 3 museum collection guide; 4 transport wayfinding guide; 5 fine stationery catalogue; 6 industrial design catalogue; 7 type foundry specimen. These span publication, spatial wayfinding, and object presentation traditions used by business decision makers and product teams.

The assigned sixth direction is an industrial design catalogue. The existing dark systems dashboard is the anti-reference. The six catalog challengers were considered against audience identification and product clarity: information-noise sleeve, ekiben wrapper, cloud quarry, cel-animation dawn, cutting bench, and type specimen all lose both for this calm, service-led business brief. Each raises a discipline: information-noise sleeve demands total palette commitment; ekiben demands a clear index; cloud quarry demands tangible imagery; cel dawn demands depth through real light; cutting bench demands accurate selected-work labeling; type specimen demands typographic consistency. No visual motifs are borrowed.

## Direction contract

THESIS: Good technology makes the workday lighter. An industrial design catalogue presents the offer with clarity and physical calm, replacing the dashboard hero and repeated diagrams.

OWN-WORLD: Daylight mist-blue surfaces, deep blue ink, matte paper sculpture, Manrope medium-weight display, clean system body type, broad image fields, open rows, and restrained round controls. Color groups whole sections.

STORY: Understand the three services; see owned-product and creative evidence with accurate labels; understand the delivery process; start a project conversation.

FIRST VIEWPORT: A compact wordmark/navigation line. A two-line headline on the left and a concise service explanation with contact action on the right. Beneath both, a full-width panoramic sculptural paper bridge. Typography and image share the page, with no dashboard or promotional badge.

FORM: Industrial design catalogue, grounded candidate 6, seed 77f0a797. The user delegated visual direction; no further approval gate. Named interactions: Press / Tap feedback and Origin-aware animation for mobile navigation, reduced-motion and keyboard alternatives included.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Motion expansion — user steering, 8 October 2026

The user approved the new visual world and requested a more expressive landing page, referencing Abhay Singh’s Appsmith case study, Wispr Flow, and Primora. This supersedes the earlier restriction to two understated interactions. Preserve the palette, typography, imagery, truthful evidence, and distilled service hierarchy.

Motion thesis: the services become tangible interface pieces. A sticky visual stage follows native scroll while three service chapters assemble and exchange dimensional CSS interface concepts. This is the focal **Scroll-driven animation** with **Parallax**; it makes the three capabilities inspectable without duplicating explanatory sections. The homepage begins with one coordinated **Reveal** and **Stagger**. The close is a large dimensional wordmark with pointer-responsive light and perspective. A narrow, fixed **Mask** plus **Blur** creates the requested progressive blur at the bottom edge.

Budget: keep real content visible without JavaScript; use existing GSAP only to synchronize the service timeline; no wheel interception or continuous idle animation. Small screens and reduced-motion use a compact static service composition. Keyboard focus stays immediate. The progressive blur is pointer-transparent, disabled while keyboard focus is visible or dialogs are open, and removed for reduced transparency. Footer pointer work runs only on fine pointers and coalesces input into animation frames.

References are motion and craft inspiration, not copied content or a replacement visual identity. Review the expanded behavior and update design documentation before the GitHub-only push.

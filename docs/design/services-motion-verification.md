# Service experience verification — 8 October 2026

## Build and source checks

- Production build completed and generated all 17 routes.
- ESLint and TypeScript passed.
- The existing inquiry delivery logic is unchanged. No external test messages were sent.
- Single Impeccable detector run: 79 advisory system mismatches (55 type, 18 radius, 6 color), zero primary findings. These describe the approved green palette and dimensional concept extension against the prior design snapshot. No repeat detector was run.
- Raster provenance scan: 33 rasters, zero missing records. New hero is 1536 × 1024 WebP, approximately 67 kB. Native SVG social and icon sources were recolored and re-rendered; provenance records were updated.

## Browser evidence

Codex in-app Chromium browser, real browser at emulated viewport dimensions. Production preview at `http://localhost:3001`. Desktop 1440 × 1000, intermediate 928 × 800, phone 390 × 844, narrow phone 320 × 740. Screenshots are in `.impeccable/review/services/`.

- Automation progresses from inquiry to prepared brief to explicit approval; the completion status says no data was sent. The reset action works.
- Customer, Team and Owner buttons select and reorder the SaaS workspace.
- Desktop and Mobile buttons change the responsive composition. Keyboard activation reports a 0s transition duration.
- Homepage mobile chapters contain working concepts for all three services.
- Footer is a native button, has no href and causes no navigation. A native mouse drag at phone viewport moved the letters by approximately 23–34px, then the spring settled. Enter changes finish and clears transforms. `touch-action: pan-y` preserves browser vertical panning by design.
- Mobile menu opens and closes, and navigating from it arrives on the correct route with the blur restored.
- Pointer and keyboard route changes arrive correctly; keyboard route input is recorded and suppresses the blur animation. Blur transitions use the installed Next/React ViewTransition API with 160ms exit and 260ms entry, max 6px snapshot blur. A screenshot alone did not isolate an intermediate animation frame.
- All eight main routes at 320px had one H1, shared progressive blur, and document scroll width equal to its client width. At a 320px browser viewport Chromium reserved 15px for its scrollbar, leaving 305px of content width.
- No browser errors. One development-only image LCP advisory occurred while opening the below-fold web concept directly through its section fragment; the homepage hero is preloaded.

## Contrast

Calculated from the OKLCH tokens converted to linear sRGB: ink/canvas 12.46:1; muted/canvas 6.27:1; muted/sage 5.67:1; action/sage 5.81:1; white/ink 13.18:1; footer text/lightest footer stop 7.06:1; footer secondary text/lightest stop 5.65:1. Decorative miniatures have separate illustration scales; their actual controls and state descriptions remain normal UI text outside the aria-hidden scene.

## Review handoff

The first inspection found the hero nose cropped, clipped illustration footers, and undersized mobile illustration text. One correction batch adjusted the crop, illustration rhythm, and phone composition.

The fresh finish review identified five material issues: persistence of the old blue/static-mobile contract, a clipped SaaS Owner selector at 320px, insufficient clearance below the automation card at that width, premature preparation status, and an automation field-reveal tail exceeding 300ms. The source correction batch:

- Gives the narrow automation scene 360px of height. At the 320px browser viewport the scene bottom is 460.19px and the card bottom is 445.25px, leaving 14.94px of clearance rather than clipping its status strip.
- Removes only decorative selector icons below a 300px container width. Customer, Team and Owner each measure 71 × 44px, and all are contained inside the panel. Owner selection was exercised successfully.
- Makes the three visible stamps read “Waiting for a brief,” “Ready for a human,” and “Approved by you.” All three states and reset were exercised in the browser.
- Uses a 180ms field transform with 45/90ms stagger. The last desktop field settles at 270ms; the simplified phone sequence ends at 225ms. Keyboard and reduced-motion state changes suppress the motion.

The direction brief records the explicit continuation contract and distinguishes the historical FORM identifier from a corroborated seed receipt. PRODUCT.md, DESIGN.md, the surface record and the design token sidecar are reconciled by the documentation pass. All required viewport captures were refreshed after the source fixes for the scoped reviewer verdict.

The final scoped review resolved all five material findings and returned **ship**. Its motion verdict approved the timing correction. See `services-finish-review.md` for the scored fixes, Before/After/Why table, and evidence limits. Final lint, TypeScript and Git whitespace checks passed; the production build generated all 17 routes.

Physical iPhone/Android touch hardware, Safari, frame-time profiling and OS reduced-motion toggling were unavailable. Pointer dragging was exercised at phone dimensions; this is not a physical-touch test. Reduced-motion, reduced-transparency, forced-color and event-cleanup behavior were reviewed in source.

# Work client brands — verification, 13 October 2026

Verified on 13 October 2026 (Asia/Dhaka). This is an extension of the existing `/work` page: twelve real client marks appear in a sliding, tap/click-responsive section immediately before the existing contact invitation. The route diff adds the `WorkBrands` import and component; the existing capabilities, software work, product content, contact CTA, and footer remain in place.

## Scope and evidence

The addition covers Rancon, Halda Valley, Ventro, Steak & Marrow, Borsalle, Saus Taus, Nawabi Delight, Popsicles, Thanda Garam, Chair Line, MK Electronics, and British Bangla Travel Ltd. The heading is “Brands we worked with.” The section presents the client identities supplied by the user; it adds no testimonials, numerical outcomes, or project-result claims.

The development direction is recorded in [the Work surface brief](../../.impeccable/surfaces/src-app-work-page-tsx.md). Comparison covered [the component](../../src/components/work-brands.tsx), [its styles](../../src/components/work-brands.module.css), [the processing script](../../scripts/prepare-client-logos.mjs), the route diff, shared global and supporting-page styles, local font setup, [PRODUCT.md](../../PRODUCT.md), [DESIGN.md](../../DESIGN.md), and [the existing design sidecar](../../.impeccable/design.json). All six saved captures were opened and checked for the expected section, loaded imagery, and complete page context. This documentation pass used source, asset records, file measurements, and saved captures; it did not run a browser.

## Asset preparation

The shipping set contains eleven transparent, dark monochrome WebPs and MK Electronics’ native SVG. Every selected primary mark uses its original lettering and shapes. Sharp applies deterministic foreground masks, recorded crops, transparent trimming, size limits, and lossless WebP encoding; it does not generate or redraw logos. Raster output fits within 384 × 180px without enlargement, so small sources retain their available resolution. The vector retains its paths, with dark fill/stroke and a viewBox that isolates the primary wordmark and excludes the tiny slogan.

Popsicles is a standalone primary mark extracted from the existing designer branding sheet. Steak & Marrow’s wordmark is separated from the fire background and surrounding emblem. Other recorded crops isolate the relevant mark or remove surrounding artwork. The final asset sheet shows all twelve outputs on the light catalogue ground.

| Measurement                          | Final result                                           |
| ------------------------------------ | ------------------------------------------------------ |
| Shipping logo files                  | 53,134 bytes (51.9 KiB)                                |
| Selected original files              | 2,078,058 bytes                                        |
| Reduction against selected originals | 97.4%                                                  |
| Largest WebP                         | Steak & Marrow, 7,050 bytes                            |
| MK Electronics SVG                   | 20,848 bytes; 6,116 bytes when gzip-compressed locally |
| Per-file budget                      | Every logo is below 25,000 bytes                       |

These totals count the twelve logo files, excluding documentation and JSON metadata. File measurements matched every manifest size. [The manifest](../../public/clients/manifest.json) and each adjacent `<image-file>.json` retain source file, source page, crop, method, output dimensions, and byte counts. The provenance scan covered eleven shipping rasters and reported zero missing origins. The script regenerates the assets and structured records with the existing Sharp dependency.

Original downloads remain intact in `client-logo-assets/`. [SOURCES.txt](../../client-logo-assets/SOURCES.txt) records their collection and source qualifications: Popsicles comes from a designer reference sheet; Nawabi Delight’s profile image was confirmed by the user as its logo; the other collected marks retain their recorded source evidence. This extension does not establish a new independent identity reconfirmation.

## System comparison

- **Palette and material:** The light catalogue ground, forest text, muted names, rule color, and sage hover surface use the existing semantic roles. Logo files use a fixed dark forest foreground (`#263e31`) as asset treatment; they introduce no new interface palette.
- **Type:** The section keeps local Manrope headings and platform body/control text. Its desktop heading uses the established shared headline clamp of 32–60px; the phone clamp is 32–36px. Names, the hint, and the pause control use the existing 14px control/status scale. The heading retains the supporting page’s inherited weight, tracking, and line height.
- **Layout and depth:** The heading follows the centered 1480px shell and fluid gutters. A fine top rule, open spacing, and one horizontal row keep the catalogue flat. Local section padding is 56–96px; the row uses contained images rather than raised cards or cropped image plates. At 599px and below, logo slots narrow from 220px to 190px and image width from 192px to 162px.
- **Shape and focus:** Logo buttons and the outlined pause control use the existing 0.375rem control radius. Shared focus-visible outlines remain available. The control has a minimum 44px height; logo buttons reserve at least 140px height.
- **Motion scope:** Continuous sliding is the user’s explicit local `/work` request. The surface brief records its pause and preference guards. It is a local exception to DESIGN.md’s general no-continuous-idle-animation guidance, rather than a new site-wide motion rule.

The documented archive/content drift predates this extension: PRODUCT.md and older design descriptions refer to retained creative work and films, while the current Work archive is commented out. The design sidecar is dated 8 October and predates DESIGN.md’s later clarity and product-preview notes. PRODUCT.md, DESIGN.md, the sidecar, and existing verification documents were preserved; these differences were reported without repair or new system rules.

## Behavior and accessibility

The row repeats two sets for a linear 70-second desktop loop and a 60-second phone loop. The duplicate is `aria-hidden`, its controls have `tabIndex={-1}`, and its pointer-down handler prevents focus. The primary set retains visible client names and named native buttons; the logo image itself has empty alternative text to avoid repeating the button’s accessible name.

The pause/play control stops or resumes motion. Fine-pointer hover pauses the row. The loop also pauses while a logo reacts, while keyboard mode is active, outside the viewport, or when the document is hidden. Repeated pointer activation cancels the prior animation and starts from the logo’s current pose: one 560ms decaying wobble animates transform. Keyboard or reduced-motion activation uses 180ms opacity feedback with no spatial movement.

Keyboard focus switches to one native horizontally scrollable set with no sliding animation; the duplicate is hidden. Reduced motion presents one static wrapped grid, hides the motion control and wiggle hint, and retains accessible logo buttons. Visibility, preference changes, leaving the viewport, and unmount cancel active logo feedback and clean up observers/listeners. `touch-action: pan-y` preserves native vertical panning. All twelve marks load eagerly so the moving row does not cross deferred blank images.

## Verification and review outcome

The implementation checks recorded browser viewport widths of 1280, 390, and 320px. No page-level horizontal overflow was found; all twelve primary images loaded. Phone logo targets measured 190 × 140px and the pause control measured 88 × 44px. Pointer activation and repeated double clicks produced the reaction state and changing logo transforms. Keyboard traversal reached all twelve primary brands and brought the final brand inside the 1280px viewport; Enter feedback kept its transform at `none`. The inspected browser error log was empty, and the temporary viewport override was reset.

The final production build, ESLint, TypeScript, Git whitespace check, and Prettier check passed. The Impeccable detector ran once. Its only advisory concerned a 30px heading endpoint; the final source uses the established 32px headline minimum. No second detector was run.

The independent initial finish review accepted the scoped composition, behavior, and accessibility while requesting two crop-margin corrections. Both corrections were applied, the source dimensions were updated, and the assets were rebuilt. The final disposition was **ship, scoped to the two crop corrections**: the verdict pass scored both requested fixes resolved. This is not a whole-site approval. The preexisting progressive blur outside the client section was excluded from that review.

Reduced-motion, hidden-document, offscreen, and unmount handling were reviewed in source. This pass does not claim OS preference testing, physical-device testing, frame-time measurements, or coverage across browsers.

## Saved evidence

Captures are implementation evidence, not design comps. The full-page captures begin at the document top after both existing product screenshots loaded. Stored image widths differ from the browser viewport widths recorded above; the retained browser-capture filenames use `.png` while their encoded format is JPEG. The logo sheet is PNG.

- [Desktop section](../../.impeccable/review/work-brands/desktop.png) — 1265 × 712px
- [Phone section](../../.impeccable/review/work-brands/mobile.png) — 375 × 812px
- [Narrow phone section](../../.impeccable/review/work-brands/phone-320.png) — 305 × 705px
- [All twelve optimized marks](../../.impeccable/review/work-brands/logos.png) — 1000 × 450px
- [Desktop full page](../../.impeccable/review/work-brands/desktop-full.png) — 1265 × 4874px
- [Phone full page](../../.impeccable/review/work-brands/mobile-full.png) — 375 × 6174px

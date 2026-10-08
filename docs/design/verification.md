# Redesign verification

Verified locally on 8 October 2026. Delivery is through GitHub; no Worker deployment command was run.

## Build and behavior

- `npm run lint`: passed with no warnings after cleanup.
- `npm run build`: passed; all 17 generated pages completed.
- `npm run typecheck`: passed.
- `node scripts/test-inquiry.mjs`: four tests passed. Coverage includes validation/context, local persistence, idempotency/conflict handling, retained records after notification failure, origin rejection, size limits, and unavailable storage. Notifications were mocked.
- Production preview: `npm run start -- --port 3001`.
- Browser warning/error log query: empty.
- Both baseline and final Impeccable markup detector scans completed with zero findings. Each was run once at its respective stage. Detector results do not establish accessibility conformance.

## Rendered checks

The homepage was inspected at 1440px, 390px, the user's 928px browser width, and a narrow 320px width. Desktop browser scrollbars reserve 15px, so a 390px test has 375px of available layout width. Required finish captures show the homepage at desktop, mobile, and 928px, plus the mobile menu, SaaS page at desktop/mobile, and contact validation at mobile.

- No horizontal document overflow at the checked widths.
- All homepage images loaded and had intrinsic dimensions.
- Every public route checked at mobile has a single H1 and fits the available layout width.
- Before the requested motion expansion, the distilled homepage was approximately 6,140px tall at the 390px viewport versus approximately 8,998px in the baseline. The final expressive footer and service layout bring the current mobile page to approximately 6,702px. Desktop deliberately reserves scroll space for the three service chapters.
- Service navigation, owned-product destination, portfolio anchors, booking, email, and policy destinations remain available.
- The mobile menu exposes only its own contents in the accessibility tree while modal, focuses Close menu on entry, closes with Escape, and restores focus to Open menu.
- The contact page honors `focus=saas-development`, shows its matching brief hint, associates field errors with `aria-describedby`, and focuses the error summary after an empty submission. No valid live inquiry was submitted.

## Boundaries

These checks used the Codex in-app browser, DOM/accessibility inspection, source review, and local integration tests. They are not a full screen-reader audit, cross-browser certification, physical iOS device test, or production notification-delivery test. Reduced-motion alternatives are implemented in CSS and reviewed in source; operating-system preference toggling was not automated.

Local captures are excluded from Git and kept in `.impeccable/review/`. The baseline critique snapshot was saved, its trend read, and its resolved backlog closed. The independent finish review is in `finish-review.md`.

## Independent finish result

The initial finish review requested five corrections. Its verdict pass scored all five resolved: mobile sentence spacing, contact field boundary contrast, keyboard focus timing, 16px entry text, and remaining decorative labels/numbers. Base redesign disposition: **ship**, at the scope of those five fixes. The subsequent user-requested motion expansion has its own independent review below. See `finish-review.md` for initial findings, replacement-capture evidence, and review limits.

The normal field boundary now uses `#718594`: 3.39:1 against the mist form surface and 3.83:1 against white. Other source-derived color pairs: primary text on mist 10.26:1, secondary text on mist 5.38:1, large hero accent on mist 4.17:1, white primary-button text 11.57:1, error text on mist 5.55:1, and focus color on mist 6.25:1.

## User-requested motion expansion

After approving the visual world, the user requested a stronger scroll/reactive showcase, a reveal entrance, a progressive bottom blur, and an expressive footer. The earlier two-subtle-motion restriction is superseded. No content claims were added; the three UI illustrations are explicitly labeled concepts.

- `npm run lint`, `npm run build`, and `npm run typecheck` passed again after the new motion implementation and its batched corrections.
- Confirmed at 1440 × 1000, 928 × 900, 390 × 844, and 320 × 700. All fit horizontally. Narrow footer lettering was corrected from a 7rem minimum to a 5rem minimum.
- At desktop scroll positions 980, 1730, and 2380, the visible service panels were respectively automation, SaaS, and web. Read-back opacities were `[1,0,0]`, `[0,1,0]`, and `[0,0,1]`. The visual stage stayed at 128px from the top in the latter two positions. Scrolling back to 1730 restored the SaaS panel immediately.
- The footer’s wordmark and light field changed transforms with pointer position. Keyboard Tab into its contact link reset the transform to `none` and hid the bottom blur. An open mobile dialog also hid the blur; Escape restored focus to Open menu.
- At phone width, the decorative service stage is hidden and all three real service links remain in a compact vertical flow. All six homepage images loaded; no document overflow or browser warnings/errors were observed.
- The four blur layers are bounded to the viewport’s bottom 96px (64px mobile), pointer-transparent, and removed for reduced transparency/forced colors. They do not intercept scrolling or clicks.
- The service timeline and footer listeners have cleanup paths. Reduced-motion behavior, import-failure fallback, and media-query reversal were reviewed in source. Real-device frame-rate measurements and OS preference toggling were not performed.

The motion build’s single Impeccable detector pass is saved at `/tmp/zavino-motion-detector.json`: 46 advisory design-system mismatches (28 typography, 6 radius, 12 color), no non-advisory findings. These describe the new concept illustration and footer material against the prior system snapshot. The documenter reconciles the intentional system extension; tiny illustrative type and pure-black mask stops are scoped exceptions, not a new UI text palette. The scan was not rerun to chase an empty result.

Final motion captures are local and ignored under `.impeccable/review/motion-*`. Full-page captures include a fixed blur band at the original viewport boundary and show the initial sticky panel; the separate three service-state captures and behavior JSON establish the actual scroll sequence. See `motion-finish-review.md` for the expanded build’s independent verdict and `motion-review.md` for the named animation and interface checks.

### Finish-review correction

The independent motion review identified one material issue: the service stage could run into the blur on short laptop windows. The illustration now scales uniformly inside a frame that reserves its rendered height; the full-size caption stays outside the scale. The available-height calculation runs on ScrollTrigger refresh, not on scroll frames, and leaves 16px above the blur. The intermediate illustration's natural height is 35rem so its internal content fits before scaling.

All three scenes were recaptured at 1440 × 714 and 928 × 700. Their concept windows had equal client/scroll heights, confirming no internal vertical clipping. Caption bottom / blur top measured approximately 601.8 / 618px and 587.8 / 604px respectively. The exact 1440 × 800 case was also captured; the minimum 650px enabled height retained the same clearance. Main captures at 1440 × 1000, 928 × 900, and 390 × 844 were refreshed and checked. Lint, production build, and typecheck passed after this correction. The raster provenance scan again reported 32 rasters and zero missing records.

Final motion disposition: **ship**, at the scope of the scored service-stage height fix. The independent reviewer marked that finding **resolved** and reported no regression from the correction in the refreshed desktop, tablet, and mobile captures. See the verdict table in `motion-finish-review.md` for its evidence and scope.

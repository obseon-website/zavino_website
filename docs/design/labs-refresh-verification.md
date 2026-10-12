# Labs product previews and footer — 13 October 2026

The user requested original product logos, engaging Labs components based on the actual apps, clear footer headings, and followable links. The existing forest/sage catalogue, Manrope headings, hero, global blur, and footer lettering remain the visual context.

## Product evidence and implementation

- Inspected [Outbid.bd](https://outbid-preview.obseon-host.workers.dev/): its original symbol and Poppins wordmark, category navigation, sample-data/no-payments notice, amount/position preview, and leaderboard. The Labs miniature uses those interactions with explicitly illustrative businesses. There is no live submission or payment.
- Inspected [Forma](https://forma-file-conv.thezavino.workers.dev/) and its `/app` workspace: three-layer CSS logo, mountain sample, sculptural file objects, PNG/JPEG/WebP choices, and optional resize/quality controls. The miniature uses the original sample and converts it through canvas. Displayed file sizes come from actual blobs.
- Original assets are local, with source URLs recorded in adjacent JSON files. The product font includes its SIL license. Forma’s source logo geometry is reproduced in CSS; its blue colors are confined to the mark. Both marks also appear in the homepage product links.
- Footer titles are semantic headings, 18px Manrope at weight 600, with full-column divider rules. Links remain 14px at weight 400 with at least 44px target heights.
- Root metadata explicitly renders `index, follow`. Source and rendered homepage/Labs anchors contain no `nofollow`, `sponsored`, or `ugc` relationships. External links retain `noopener noreferrer`. Regular followable links require no special `dofollow` attribute, per [Google’s outbound-link guidance](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links).

## Functional and layout verification

ESLint, TypeScript, production build, and Git whitespace checks passed. Browser checks used the Codex in-app browser, with the existing 821px pane and an isolated tab at 1280 × 1000, 390 × 844, and 320 × 900. The native pane does not honor viewport overrides, so responsive checks used the isolated tab and confirmed the actual `innerWidth`.

- Outbid’s category buttons filter the board. Raising the sample amount from 40 to 70 moves the user example from #2 to #1; completion confirms the position and reset restores defaults. Tied amounts put the user example after existing entries.
- Downloads were checked with Sharp: WebP is truly WebP at 600 × 450, PNG is PNG at 1200 × 900, and JPEG is JPEG at 1200 × 900. Quality at 75% produced a 5.5 KiB WebP sample at 600 × 450.
- Pointer completion produces 18 particles for both previews. Keyboard completion produces zero particles and disables motion in the active preview. Outbid’s measured height remained 642.09375px before/after completion at 390px; Forma’s remained 680.640625px at 320px.
- All inspected sizes fit horizontally. Visible demo buttons were at least 44px high. Product images loaded, compact homepage logos fit at 320px, and size/quality controls have explicit associated labels.
- Source review confirmed cleanup for confetti, pending conversions, and object URLs, plus readable conversion errors and disabled busy states. No operating-system reduced-motion setting was changed; the CSS/media-query fallback was reviewed in source.

Captures are saved under the ignored `qa/labs-refresh/` directory. Final views include `forma-desktop-final.jpg`, `footer-desktop-final.jpg`, `forma-320-final.jpg`, and `home-logos-mobile-final.jpg`. The build and browser checks do not establish physical touch performance or all-browser coverage.

## Scoped animation review

| Before | After | Why |
| --- | --- | --- |
| New Labs button press styling also applied its scale to keyboard input | `src/app/labs/labs.css:405` suppresses the active transform for keyboard actions | Keyboard actions receive immediate state changes without a motion pulse |
| The confetti hook accepted only a live React event; async conversion outlasts event dispatch | `src/components/labs-product-preview.tsx:291` captures the original button and input detail; `button-confetti.ts:28` accepts those fields | The burst retains the correct button origin after conversion and still skips keyboard input |

**Timing and interruptibility:** ranking rows use interruptible 200ms transforms with the standards’ on-screen movement curve. File orientation uses a 180ms strong ease-out transform; button press feedback uses 120ms. The only longer effect is the existing rare 760–920ms completion burst, which never delays the control and cancels on reset, repeated use, unmount, visibility, or preference changes.

**Accessibility:** the active keyboard preview removes transitions and active movement. Reduced motion removes movement and particles; completion text remains available. Hover enhancement is limited to fine pointers. Only transform and opacity animate.

**Approve** — no remaining feel-breaking regressions in the Labs motion changes; origin, timing, interruptibility, and preference handling meet the review bar.

# Motion and interface review

Reviewed 8 October 2026 against the user's expanded motion brief. Scope: the homepage entrance, service showcase, viewport blur, and shared footer. Next.js / React with plain CSS; existing GSAP synchronizes native scroll. This records the `review-animations`, `make-interfaces-feel-better`, `userinterface-wiki`, and Apple-design checks. It supplements the independent finish review.

## Animation vocabulary

| Name | Implementation and purpose |
| --- | --- |
| **Reveal + Stagger** | The two headline lines move out of an overflow mask, separated by 70ms. Supporting copy and the hero image arrive as one brief composition. This is an occasional marketing entrance. |
| **Scroll-driven animation** | Three native-scroll chapters exchange dimensional interface illustrations on one sticky stage, connecting each service to something tangible. There is no wheel interception. |
| **Parallax** | Perspective and separated depth planes give the service illustrations physical depth. The footer wordmark tilts up to 3.5° while a separate light field follows the pointer. |
| **Mask + Blur** | Four fixed, progressively stronger backdrop filters diffuse the viewport's lower edge. The filter values themselves do not animate. |
| **Press / Tap feedback** | Existing primary controls compress to 0.96 with 140ms deliberate press and 100ms release. |
| **Origin-aware animation** | The existing mobile menu enters from its top-right trigger using 0.97 scale and asymmetric timing. Keyboard entry is immediate. |

## Review-animations findings

| Before | After | Why |
| --- | --- | --- |
| Service-panel overlap lasted 22–27% of the timeline | `src/components/service-experience.tsx:102`: exits occupy 10%, entries 12%, with a later entry offset | Shorter overlap keeps two layers of interface text from lingering over one another. Native scroll still controls and reverses the entire transition. |
| Hero line stagger was 90ms | `src/app/experience.css:24`: 70ms | Uses the review standard's 30–80ms stagger range while keeping the headline a single thought. |
| Footer cached pointer bounds until pointer leave or scroll | `src/components/footer-signature.tsx:59`: resize also resets bounds and cancels the pending frame | An interrupted responsive resize cannot keep a stale pointer origin. |

**Timing and interruptibility:** Footer transforms use 180ms and 240ms strong ease-out CSS transitions (`experience.css:659`), which retarget from their current visual state. The hero's 650–850ms coordinated entrance is an explicitly requested marketing sequence, not a frequently triggered control. ScrollTrigger uses `scrub: true`, so its fractional durations describe scroll ranges rather than delays; reversing scroll immediately reverses the state. The dummy final interval preserves a deliberate resting range for the last panel.

**Performance:** Dynamic frames write only transforms/opacity directly on the affected elements. Footer pointer input is coalesced to one requested frame, with no idle loop or per-frame React state. Its bounds are cached between reset events. GSAP media contexts revert on cleanup, and component disposal guards delayed imports. The four blur layers are limited to 96px of viewport height (64px mobile), with a maximum static filter of 16px (12px mobile). This bounds the paint area but is not a measured frame-rate guarantee.

**Origin and cohesion:** The hero reveals from its left baseline, the service panels share a consistent perspective, and the footer's shallow tilt is centered on its typographic object. Color and material stay within the approved daylight/mist world. There is no `scale(0)`, `transition: all`, ease-in UI, continuous ambient loop, or layout-property animation in the new layer.

**Accessibility:** Spatial effects require no reduced-motion preference. The compact static service layout exposes the same real copy and destinations. Pointer tracking requires a fine mouse pointer and hover capability. Keyboard focus resets the footer's motion and hides the blur immediately; dialogs also hide it. Reduced-transparency and forced-colors remove the blur/light. Illustrative UI layers are aria-hidden and contain no focusable controls. The real service links remain ordinary links, and the hero has one accessible H1 name.

**Decision: Approve at the inspected source and browser-behavior scope.** Not verified: OS-level reduced-motion toggling, real-device frame rates, Safari profiling, and 10%-speed DevTools playback. Reduced-motion/media cleanup paths were inspected in source. The independent finish reviewer evaluates the broader visual result separately.

## Interface polish — full mode

| Category | Evidence inspected | Result |
| --- | --- | --- |
| Typography | Hero, real service copy, concept labels, footer at 1440/928/390/320 widths | Narrow wordmark and small footer-label corrections applied |
| Surfaces | CSS windows, keycaps, phone outline, footer type depth and light | Consistent directional shadows; structural dividers distinct from elevation |
| Animations | Scroll chapters forward/reverse, pointer transforms, focus resets, native menu | Reviewed above |
| Icons | Phosphor symbols beside service headings, links and illustrative controls | One icon family, currentColor, decorative content hidden from assistive technology |
| Performance | Transform writes, pointer frame coalescing, cleanup, bounded blur | No actionable source finding; frame rates not measured |

| Severity | Location | Before | After | Why |
| --- | --- | --- | --- | --- |
| Medium | `src/app/experience.css:613` | 7rem wordmark minimum exceeded the 305px content width of a 320px viewport | 5rem minimum; computed lettering width approximately 254px | The complete brand signature fits a narrow phone without clipping. |
| Low | `src/app/experience.css:485` | Concept caption was 11px, 10px at intermediate width | 12px at both widths | The qualifier distinguishing concept work from delivered work is readable. |
| Low | `src/app/experience.css:806` | Mobile footer prompt/baseline used 11px; action 13px | Prompt/baseline 12px; action 14px with a 44px minimum invite target | Keeps the footer's secondary invitation and contact details practical. |
| Low | `src/app/experience.css:733` | Intermediate illustration stage was 30rem | 35rem in the final correction | Gives the dimensional SaaS board enough natural height for all content before viewport scaling. |
| Medium | `src/app/experience.css:785` | A failed animation import left the extended scroll layout | Import-failure state uses a compact, static service list | Failure cannot leave a long empty decorative stage. |

The timing and bounds findings in the animation table are also part of this polish pass.

### Considered but rejected

| Location | Candidate | Rejected because |
| --- | --- | --- |
| Service stage | Intercept wheel input or force scroll snapping | The sticky native-scroll sequence delivers the requested showcase while retaining ordinary scrollbar, keyboard, and touch behavior. |
| Footer | Animate gradient coordinates or shadows on every pointer event | A transformed light layer and transformed wordmark provide the effect without repainting those values per frame. |
| Homepage sections | Add the same fade/slide reveal to every section | The services already provide a focal sequence; the work and process remain directly readable. |
| Concept illustrations | Promote miniature UI text sizes to the site's content scale | Those sizes belong to an aria-hidden illustration, not real controls or body copy. |

### Verification and verdict

Production build, lint, and TypeScript checks pass. Browser evidence covers four widths, all three scroll states, reversal, footer pointer response, focus reset, and mobile dialog open/Escape/focus restoration. The console warning/error query was empty. No live form submission or external message was sent. **Approve**, with the unverified device, preference-emulation, frame-rate, and slow-motion checks listed above.

### Independent review correction

The finish review found a height-budget issue on short laptop windows. `ServiceExperience` now measures its natural illustration plane only on ScrollTrigger refresh, uniformly scales it to the available height, and reserves that height in an outer frame. The caption retains its normal 12px size, with 16px clearance above the progressive blur. This uses layout writes only during a viewport refresh, not animation frames. Cleanup removes the refresh listener and inline sizing.

The complete three-scene sequence was checked at 1440×714 and 928×700, plus the exact 1440×800 case and the 650px minimum enabled height. All concept windows fit their internal content. Default desktop, intermediate, and mobile captures were refreshed; lint/build/typecheck passed again. The independent verdict is recorded in `motion-finish-review.md`.

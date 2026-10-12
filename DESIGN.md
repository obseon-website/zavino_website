---
name: "Zavino"
description: "A forest-green daylight studio catalogue with distinct, colorful business concepts and accessible controls."
colors:
  forest-950: "oklch(23% 0.035 158)"
  forest-900: "oklch(30% 0.048 158)"
  forest-800: "oklch(38% 0.058 158)"
  forest-700: "oklch(46% 0.064 158)"
  forest-600: "oklch(52% 0.045 158)"
  forest-500: "oklch(62% 0.049 158)"
  forest-400: "oklch(74% 0.042 158)"
  forest-300: "oklch(82% 0.033 158)"
  forest-200: "oklch(89% 0.024 158)"
  forest-100: "oklch(94% 0.014 158)"
  forest-50: "oklch(97.5% 0.006 158)"
  white: "oklch(99.5% 0.002 110)"
  linen: "oklch(96% 0.014 92)"
  sand: "oklch(88% 0.031 86)"
  muted: "oklch(47% 0.027 158)"
  danger: "oklch(44% 0.14 28)"
  separator: "oklch(30% 0.048 158 / 0.17)"
  pure-white: "#fff"
  field-error: "#a63e32"
  amber-soft: "oklch(94% 0.045 83)"
  amber-mid: "oklch(82% 0.1 83)"
  amber-ink: "oklch(40% 0.08 67)"
  blue-soft: "oklch(93% 0.025 240)"
  blue-mid: "oklch(79% 0.07 240)"
  blue-ink: "oklch(39% 0.07 245)"
  clay-soft: "oklch(93% 0.035 43)"
  clay-mid: "oklch(80% 0.07 43)"
  clay-ink: "oklch(41% 0.08 37)"
  violet-soft: "oklch(93% 0.025 300)"
  violet-mid: "oklch(80% 0.065 300)"
  violet-ink: "oklch(40% 0.065 300)"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(44px, 5.8vw, 94px)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.75rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(28px, 3vw, 47px)"
    fontWeight: 500
    lineHeight: 1.13
    letterSpacing: "-0.04em"
  inner-display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(44px, 6.4vw, 96px)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  inner-headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(36px, 4.2vw, 65px)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  control:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
  field:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  footer-display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(5rem, 26vw, 27rem)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  service-selector:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.3
  concept-status:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  business-headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(32px, 4.2vw, 64px)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  concept-control:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.35
  concept-display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(19px, 3.4cqw, 29px)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.035em"
  concept-copy:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif"
    fontSize: "clamp(12px, 2cqw, 15px)"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  square: "0"
  image: "0.25rem"
  control: "0.375rem"
  media-dialog: "8px"
  panel: "0.75rem"
  menu: "0.875rem"
  circle: "50%"
  concept: "16px"
  snippet-action: "7px"
  selector-group: "9px"
  concept-selector-group: "10px"
  concept-ticket: "12px"
  concept-frame: "20px"
spacing:
  compact: "0.5rem"
  inline: "0.75rem"
  content: "1rem"
  inset: "1.5rem"
  group: "2rem"
  row: "2.5rem"
  heading: "3rem"
  gutter: "clamp(1.375rem, 5vw, 5rem)"
  section: "clamp(4.5rem, 8vw, 7.5rem)"
  inner-section: "clamp(76px, 9vw, 138px)"
components:
  button-primary:
    backgroundColor: "{colors.forest-900}"
    textColor: "{colors.pure-white}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0.875rem 1.375rem 0.875rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.forest-700}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.forest-900}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0.875rem 1.375rem 0.875rem 1.5rem"
  button-secondary-hover:
    backgroundColor: "{colors.forest-200}"
  icon-button:
    textColor: "{colors.forest-900}"
    rounded: "{rounded.control}"
    padding: "0.5rem"
    width: "2.75rem"
  field:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.forest-900}"
    typography: "{typography.field}"
    rounded: "{rounded.square}"
    padding: "13px 15px"
  service-selector-selected:
    backgroundColor: "{colors.white}"
    textColor: "{colors.forest-900}"
    typography: "{typography.service-selector}"
    rounded: "{rounded.control}"
    padding: "0.65rem 0.85rem"
  snippet-action:
    backgroundColor: "{colors.forest-900}"
    textColor: "{colors.white}"
    rounded: "{rounded.snippet-action}"
    padding: "0.8rem 1rem"
  contact-panel:
    backgroundColor: "{colors.forest-100}"
    rounded: "{rounded.panel}"
    padding: "clamp(24px, 3.4vw, 52px)"
  concept-window:
    backgroundColor: "{colors.white}"
    textColor: "{colors.forest-900}"
    rounded: "{rounded.concept}"
  playground-panel:
    backgroundColor: "{colors.forest-100}"
    rounded: "{rounded.concept}"
  concept-action:
    backgroundColor: "{colors.forest-900}"
    textColor: "{colors.white}"
    typography: "{typography.concept-control}"
    rounded: "{rounded.snippet-action}"
    padding: "12px 17px"
  concept-action-hover:
    backgroundColor: "{colors.forest-800}"
  concept-action-disabled:
    backgroundColor: "{colors.forest-200}"
    textColor: "{colors.muted}"
  concept-segment-selected:
    backgroundColor: "{colors.white}"
    textColor: "{colors.clay-ink}"
    rounded: "{rounded.snippet-action}"
    padding: "9px 12px"
  finder-ticket:
    backgroundColor: "{colors.white}"
    textColor: "{colors.forest-900}"
    rounded: "{rounded.concept-ticket}"
    padding: "35px 30px"
  footer-signature:
    textColor: "{colors.forest-200}"
    typography: "{typography.footer-display}"
---

# Design System: Zavino

## Overview

**Creative North Star: "The Daylight Studio Catalogue"**

Zavino presents technology through the physical calm of an industrial design catalogue: forest-green ink, sage grounds, ivory objects, generous image fields, clear type, and open rows. Dimensional service concepts make capabilities tangible across desktop and mobile while real controls and explanations stay easy to use.

Preserve the Zavino name and symbol, local Manrope, miniature ivory fighter jet on its green ramp, progressive edge blur, and playful non-navigation footer lettering. The October 12 business refinement extends this approved world with amber, blue, clay, and violet states. Forest green remains the brand and primary-action color; the footer owns the darkest field while reading surfaces stay light.

Distinct interactive objects explain each service through meaningful choices and consequences. Their overlapping sheets, physical keycaps, receipts, and notebooks are authored illustrations; real controls and status sit outside the decorative planes. Share visual tokens and accessible primitives, while keeping each page's demonstration original.

**Key Characteristics:**

- Sage grounds group whole sections; bounded amber, blue, clay, and violet objects carry service identity and state.
- Medium-weight Manrope headings pair with platform body text.
- Broad imagery, open service rows, and distinct dimensional objects give content room to breathe.
- Controls use small radii, clear boundaries, and visible focus.
- Work and demonstrations retain explicit, truthful attribution.
- Motion is tied to entrance, scroll progress, or direct input; mobile, keyboard, and reduced-motion alternatives preserve the interaction state.

Reconciled with the approved October 8 visual world and October 12 business refinement on 12 October 2026. Frontmatter records implemented primitives; the sidecar adds motion, depth, breakpoints, and component specimens. Its synthesized tonal ramps are preview aids, not additional implementation colors. Source styles remain the reference for selector-specific exceptions. This code-led run has no approved comp, decision comp, or quality-bar card.

## Colors

The source defines an OKLCH forest ramp at hue 158, from deep ink to pale sage, with controlled chroma. Preserve OKLCH rather than creating a parallel hex palette.

### Primary

The forest ramp is the brand system. Dark steps supply text, filled controls, and the footer; middle steps supply functional emphasis, material edges, and focus; light steps group content and distinguish selected or layered surfaces.

### Secondary

**Amber** identifies revenue and training concepts; its soft ground and dark ink also signal held, incomplete, or pending states. **Blue** identifies operations and booking-platform objects. **Clay** identifies the SaaS release and Labs journey, and supports the website work-preview state. **Violet** identifies the content-workflow concept. Each family has a soft ground, middle material tone, and dark ink; use those roles together, with a visible label or icon explaining state.

**Linen** and **Sand** remain incumbent supporting materials in retained illustrative surfaces. They no longer define the primary SaaS release concept. None of these secondary colors replaces green on global navigation or primary business actions.

### Neutral

**White** is the slightly warm interface-object surface. **Pure White** remains the actual shared-button text and contact-field fill. **Muted** is a separate readable secondary-text value. **Separator** resolves the source's ink at 17% opacity. **Danger** is the declared semantic warning/error token; current contact validation retains the separately recorded **Field Error** value.

| Semantic CSS role | Implemented primitive |
| --- | --- |
| Canvas / `--bg` | Forest 50 |
| Surface / `--surface` | Forest 100 |
| Deeper surface / `--surface-2` | Forest 200 |
| Text / `--ink` | Forest 900 |
| Secondary text / `--muted` | Muted |
| Action, focus, success | Forest 700 |
| Selection | Forest 200, with Forest 950 text |
| Separators / `--line` | Forest 900 at 17% opacity |
| Field boundary / placeholder | Forest 500 / Forest 600 |
| Feedback / `--danger` | Danger; current form errors use Field Error |

**The Section Ground Rule.** Use sage and linen grounds to organize reading content; keep the additional accent families bounded to authored objects and meaningful states. Forest ink anchors reading and actions, and the darkest field belongs to the signature.

**The State Has Words Rule.** Pair color with a status label, icon, or explanation. Amber can hold an unconfirmed state; a green confirmation must follow a meaningful action.

## Typography

**Display Font:** local variable Manrope, with sans-serif fallback. The shipped font supports weights 200–800; headings use 500, the header wordmark uses 650, and the footer signature uses 600.

**Body Font:** the platform stack in the frontmatter. There is no separate monospace family in the implemented system.

The broad display face supplies character. Body copy, navigation, controls, and field labels use familiar platform text. Headings balance their wrapping and use optical sizing; paragraphs use pretty wrapping.

### Hierarchy

- **Display** is the homepage headline. The business-page layer sets it to `5.5vw` at 1000px and below, then `clamp(36px, 7.3vw, 58px)` at 799px and below, and `8.2vw` at 400px and below. The inherited mobile line height is 1.12. Masks may wrap on narrow phones.
- **Headline** sets shared section headings. **Title** is the six-opportunity desktop chapter heading; mobile opportunity names use 26px. **Business Headline** sets the original service-concept introductions, becoming 44px below 800px and 37px at 400px and below.
- **Footer Display** is the user-authorized oversized brand exception. Solid letterforms and shallow text-shadow extrusion form a typographic object; this scale is not a general heading rule.
- **Inner Display / Inner Headline** remain supporting-page defaults. Service heroes have a separate observed `clamp(54px, 6.2vw, 92px)` composition. Do not flatten route-specific hierarchy to one size.
- **Body** is the root reading style. Supporting prose commonly uses 17px with 1.7–1.75 line height; concise helper copy uses 14–15px. Hero copy stays about 35ch, concept introductions about 38ch, and longer introductions about 65ch.
- **Control** sets shared filled buttons. **Concept Control** is the 14px action type. Selectors use 13px, 12px in components below 500px, and 11px in components below 320px, retaining at least 44px targets. These narrow selector exceptions are not the body-copy scale. **Field** remains 16px at every viewport.
- **Concept Status** remains real 14px text with 1.5 line height; captions use 12px. **Concept Display / Concept Copy** are illustrative typography inside accessibility-hidden scenes. Local miniature details use roughly 9–12px on phones and container-relative sizes on desktop. They do not replace readable controls, summaries, or attribution.

Business-page headings use tracking no tighter than −0.04em. The named role values above are the repeated system; illustration-specific titles, radii, badges, and container geometry remain local art direction rather than a larger general UI scale.

**The Readable Entry Rule.** Editable text stays at the field size, and labels remain visible above the control.

## Layout

The shared shell is centered with a maximum width of 1480px and fluid side gutters. Spacing expands between groups while related content remains close. This is a flexible content grid, not a universal card grid.

The homepage has a split introduction, broad jet image, six outcome chapters beside one original opportunity board, an owned-product feature, creative evidence, and a four-step process. The opportunity section uses equal columns with a 7% gap; each chapter spans at least 65vh. Its board sticks 120px below the top, with 32px of top padding. At 799px and below, the chapter list gives way to six direct selectors and a persistent text explanation below the board. At 400px and below the selectors become two columns. This is an overview illustration; it does not reuse detailed-service concepts.

Service-concept sections use a 1fr / 1.25fr split with a 7% gap, adjust to 0.8fr / 1.2fr at 1000px and below, and stack at 799px and below. The services finder has equal columns and an 8% gap; its controls become a compact two-column choice grid on phones. Directory entries are open ruled rows. Ongoing support is an unnumbered reading list; process numbers retain their sequential meaning. Labs pairs its original moving parcel with controls and ordinary explanatory copy.

The hero's mobile image remains 15rem high with a 48% 45% focal point; its desktop crop uses center 30%. Above 1480px the hero ground spans the viewport while content aligns to a 1320px inner field. The full-width signature precedes footer information columns. Preserve the distinction between a large brand image and a compact, interactive concept.

| Boundary | Implemented response |
| --- | --- |
| 1100px and below | Retained supporting-page process/path grids use two columns; the product showcase stacks. |
| 1050px and below | Incumbent hero proportions tighten before the later business-page overrides. |
| 1000px and below | Four homepage process columns become two; concept proportions tighten. |
| 999px and below | Supporting website concept composition becomes one column. |
| 900px and below | Contact layout stacks. |
| 899px and below | Native mobile navigation replaces desktop navigation. |
| 799px and below | Business page splits stack; native chapter scroll becomes direct selection; finder priorities form a two-column control grid. |
| 760px and below | Retained supporting-page grids stack and inner-section spacing becomes 76px. |
| 700px and below | Shared footer, reading layout, and website goal controls reflow; header height becomes 4.5rem. |
| 600px and below | Contact fields become one column; submit actions fill the available width. |
| 599px and below | Retained website concept controls and scene use their mobile layout. |
| 400px and below | Homepage process becomes one column; concept introduction type and finder inset reduce. |
| Component width 500px and below | New scenes use 118cqw height with a 370px floor; controls wrap, and actions fill the width. |
| Component width 320px and below | New scene floors rise as needed: revenue/operations/SaaS 415px, content 430px, training 400px. Decorative details simplify without hiding controls or status. |
| Component width 300px and below | Retained website illustration keeps its own narrow-container treatment. |
| 359px and below | Separate header contact link hides; it remains accessible in the menu. |

The desktop header is 5.5rem high. The global lower-edge blur occupies level 15, sticky navigation level 20, the skip link level 30, and native dialogs use the browser top layer. Anchor offsets keep content below the header. Preserve spaces around responsive line breaks so stacked copy remains readable.

## Elevation & Depth

Most reading surfaces remain flat. Tonal changes, fine rules, and real light in the imagery establish depth. The floating menu, physical product covers, illustrative interface objects, and dimensional footer signature have distinct shadow treatments. Ordinary controls and content rows do not acquire a generic lifted-card treatment.

### Shadow Vocabulary

- **Menu:** `0 16px 60px oklch(from var(--forest-950) l c h / 0.149)` separates the native navigation panel from the dimmed page.
- **Homepage product cover:** `6px 14px 30px oklch(from var(--ink) l c h / 0.149)` grounds the cover as a physical object.
- **Interface objects:** the shared object shadow pairs a diffuse 20px vertical layer with a small 3px contact layer. It grounds concept paper, the finder ticket, opportunity sheets, and Labs parcel. Keycaps use an inset edge and an ambient layer; the retained website phone uses container-relative shadows. Exact values are in the sidecar.
- **Footer signature:** stepped text shadows create shallow extrusion; the mobile variant reduces their offsets and spread. The forest footer ground and stationary light use gradients while the letters retain a solid fill and move independently.

The sticky header uses a translucent sage ground and 12px backdrop blur. Reduced-transparency and higher-contrast preferences replace it with an opaque surface. Higher contrast also strengthens muted text and rules and gives the mobile panel a forest-ink border.

**The Object Depth Rule.** Reserve dimensional depth for physical imagery, floating dialogs, illustrative interface objects, and the footer signature; keep ordinary reading surfaces flat.

## Shapes

Image plates are square or gently eased. Buttons and icon controls share the control radius; demonstration and form panels use the larger panel radius. Editable fields remain square. The menu is softer than a control, and media dialogs retain their own radius.

One-pixel rules divide services, process steps, lists, and footer information. Circular arrows are navigation cues; circular play and receipt controls retain their functional meaning. The sculpture in the hero remains a raster asset. New concept papers and scene/control shells use 16px corners; the finder and Labs outer frames use 20px; tickets commonly use 12px. New selector groups use 10px and their controls use 7px. Keycap rounding (22%) and the retained phone silhouette belong to illustrations. Local 5–13px badge, receipt, and inner-sheet variants do not authorize arbitrary radii in ordinary content.

## Components

### Buttons

Compact, grounded actions with room for a real SVG icon. The primary variant uses forest ink and pure-white text, the frontmatter padding, a 1.75rem icon gap, and a minimum height of 3.25rem. Small and icon buttons are at least 2.75rem high. Secondary/outline buttons have a transparent ground and rule-colored border. Text links use an underline on pointer hover.

Pointer hover changes color immediately. **Press / Tap feedback** scales filled and icon controls to 0.96 over 140ms, returning over 100ms with `cubic-bezier(0.23, 1, 0.32, 1)`. Disabled and focus-visible controls do not scale. Keyboard focus has no transition, and reduced motion removes the press transform.

### Inputs / Fields

Straight-edged pure-white fields sit inside the sage form panel. Their boundary uses Forest 500, with explicit field typography and frontmatter padding. Focus changes the border immediately and adds a 2px accent outline at a 3px offset. There is no focus or validation transition.

Visible labels, required markers, autocomplete, hints, and field-specific error descriptions accompany entry. Invalid fields use the recorded field-error value and `aria-invalid`; text explains the problem. The form focuses a status summary after submission, preserves entered details on failure, and disables the fieldset while saving. Optional phone/WhatsApp and budget fields remain explicit alongside the required business brief fields. A received state is tied to an actual storage receipt, not to successful email delivery.

### Navigation

The shared wordmark/symbol remains visible beside Services, Work, Labs, and Studio, with the audit CTA separate. Desktop current-page links are underlined. At the mobile boundary, a labelled button opens a native modal dialog with a labelled close button, native focus containment, Escape support, scroll locking, and focus restoration to the trigger.

**Origin-aware animation** enters from the top right over 180ms and exits over 120ms, using opacity, a −4px vertical offset, and scale 0.97 with the shared easing. Keyboard opening, keyboard closing, Escape, and link navigation are instant. Reduced motion uses an 80ms opacity transition without movement. A resize to desktop closes the menu.

### Hero Reveal and Stagger

The two headline lines use masked Reveal over 800ms, with a 70ms delay on the second line. They travel from 112% below the mask with 2° rotation to their resting position. Supporting copy arrives over 650ms after 150ms; the image figure arrives over 850ms after 180ms, both moving 24px with opacity. The shared easing coordinates the entrance. These animations run only with no reduced-motion preference; the heading keeps a complete accessible name. The image itself remains a still.

### Scroll-driven Opportunity Chapters

Six ordinary desktop articles pair an outcome, explanation, and route link with one accessibility-hidden layered board. A native IntersectionObserver changes the active chapter using a −25% / −55% root margin. CSS rotates and translates the sheets over 280ms. There is no GSAP timeline, pinning, wheel interception, or dependency-loading fallback in this component.

At phone widths, direct buttons expose all six choices with `aria-pressed`; a persistent polite live region supplies the service name, outcome, availability, and route. Keyboard and reduced-motion updates retain states with no transition. Desktop reduced-motion keeps the native chapter layout but removes animated interpolation. Nearby copy identifies the board as an illustration.

### Services Finder

The directory has its own priority chooser, rotating compass, and recommendation ticket. A selection changes the proposed service, starting scope, and route; it is a conversation aid rather than a diagnostic claim. The ticket's polite live region stays mounted while its contents change. Its compass rotates over 280ms; keyboard and reduced-motion changes are immediate. Mobile choices form a compact two-column grid. The illustration does not add a decorative eyebrow above the heading.

### Original Interactive Concepts

Every detailed service and new page owns a distinct authored demonstration. Share controls, tokens, static reading primitives, and input-modality handling; do not mount the same demonstration on multiple routes. Concepts run locally and do not send inquiries, reserve actual appointments, create orders, or process payments. The website detail retains its own browser/phone concept. Work's internal prototypes remain distinct evidence examples.

| Surface | Meaningful interaction and visual response |
| --- | --- |
| AI Revenue Systems | Select an inquiry and channel, qualify it, hold missing details, or approve the example. An incoming note translates into a prepared sales record, with an independently rotating keycap and moving receipt. |
| AI Operations & Agents | Select a question and allowed sources; show an answer, hold unsupported output, or hand off to a human. Source sheets fan behind the answer; visible text names the source and state. |
| Custom SaaS Products | Select optional modules, inspect customer/team views, assemble the release, and revise it. Modules recede or join the workspace while the release ticket changes position and finish. |
| Web Apps & Platforms | Choose a day, time, and view; reserve, move, detect a conflict, or reset the example. Calendar selection, team view, and receipt respond independently. |
| AI Content Flows | Select channels, inspect drafts, request changes, revise, and approve; empty selection is explained. Channel sheets fan while the review/approval strip scales and changes state. |
| Enterprise AI Training | Choose a role, answer a practical judgment question, see correct/incorrect feedback, and retry. The notebook page turns and progress changes; Bangladesh-only availability stays in real text. |
| Website detail | Choose the visitor goal, desktop/mobile view, and next-step preview. Browser and phone emphasis changes independently of the goal preview. |
| Labs | Explore storefront, payment, delivery, and improvement, including a pending payment branch. A parcel translates and rotates along a track; pending payment has an amber clock. |

The six new service concepts have an accessibility-hidden scene above real native controls and a persistent status/explanation. Scene height defaults to 77cqw, bounded by 440px and 570px; mobile container rules increase it and simplify decorative detail. Controls remain outside the transformed plane. Actions are at least 48px high, selectors and checkbox/radio label targets at least 44px, and native select entry text 16px.

Motion names follow animation-vocabulary: **Translate**, **Rotate**, **Scale**, **Continuity transition**, **Fade in / Fade out**, and **Press / Tap feedback**. New object transitions usually settle in 130–280ms, have no idle loops or artificial waits, and are interruptible CSS changes. New business concepts disable transition and animation for keyboard input or reduced motion. The retained website concept uses its existing 80ms opacity-only reduced-motion alternative; keyboard changes are immediate. Captions distinguish Product Concept, sample workshop, internal prototype, and illustrative Labs experiment in ordinary evidence copy, not heading decoration.

### Images and Evidence

The active hero is a static tabletop illustration of an ivory miniature fighter jet on a forest-green ribbon ramp. Keep its descriptive alternative text, coherent contact shadows, and complete silhouette in the responsive crop. The earlier blue bridge is historical, not the active asset. Supplied creative work retains its project title and category; Aston Mark is identified as a launched Zavino digital-download product and storefront in ordinary copy, not as a SaaS customer outcome. Supporting demos and concept work keep visible concept attribution near the artifact. Labels describe evidence instead of decorating headings.

Shipping raster provenance remains with each asset in its metadata/sidecar. The exact jet-edit prompt is recorded in `docs/design/flight-ramp.prompt.txt`; the active raster and its provenance sidecar are `public/media/flight-ramp.webp` and `public/media/flight-ramp.webp.json`. Review captures are evidence of the implementation, not design comps.

### Footer Signature

The monumental Manrope lettering sits on a dark forest field. The wordmark is a native button with no href and no navigation, named “Play with the Zavino lettering”; contact and navigation links remain separate from that play surface. The oversized display is the approved brand exception.

Tapping gives nearby letters a vertical impulse. Horizontal dragging retains each letter’s position and release velocity, then returns through a requestAnimationFrame spring with stiffness 260 and damping 25. Travel has resistance, release velocity is capped, and re-grabbing remains interruptible. `touch-action: pan-y` preserves vertical browser panning. The loop stops when settled; there is no idle animation.

Enter or reduced-motion activation clears transforms and changes the finish instantly. The hint switches to the keyboard instruction on focus. Resize, window blur, hidden-document state, leaving the viewport, preference changes, and unmount reset or clean up pointer capture, animation frames, listeners, and `will-change`. Reduced transparency and forced colors remove the decorative light and text-shadow extrusion.

### Progressive Bottom Blur

Every route has the shared pointer-transparent lower-edge mask, bounded to 96px high and reduced to 64px at 700px and below. Four graduated backdrop layers use blur radii of 2px, 4px, 8px, and 16px; the last becomes 12px on mobile. Extra footer-bottom padding keeps the final links clear. The effect is decorative and accessibility-hidden, disappears for visible keyboard focus or an open dialog, and is removed for reduced transparency or forced colors. Those preferences also remove the footer light and text-shadow extrusion.

### Route Transition

Native Next/React ViewTransition wraps page content while preserving ordinary links, history, focus, and prefetching. The outgoing snapshot defocuses over 160ms; the incoming snapshot refocuses over 260ms. Snapshot blur never exceeds 6px and the overlay is pointer-transparent. Keyboard navigation has no animation. Reduced motion or reduced transparency substitutes an 80ms linear opacity fade. This is snapshot treatment, not a blur applied to live text.

### Shared Accessibility

Maintain the skip link, semantic headings and landmarks, descriptive image alternatives, and accessible names for icon-only controls. The default focus-visible treatment is a 2px accent outline with a 5px offset. Hover is an enhancement for fine pointers; it does not reveal required information. Keep native disclosure, dialog, and form semantics, and retain the reduced-motion, reduced-transparency, and higher-contrast treatments.

## Do's and Don'ts

### Do:

- **Do** use sage and linen for reading grounds, bounded state accents for authored objects, forest ink for actions, and the dark forest field for the signature.
- **Do** pair medium Manrope headings with readable platform body text.
- **Do** preserve broad image fields, open service rows, and the hierarchy between primary and supporting content.
- **Do** give each page its own meaningful concept while sharing tokens, accessible controls, and static reading primitives.
- **Do** preserve working mobile concepts, visible focus, explicit labels, immediate keyboard state changes, and preference-based alternatives.
- **Do** distinguish owned products, delivered creative work, and illustrative concepts in nearby copy.
- **Do** retain provenance when replacing or adding a shipping raster.

### Don't:

- **Don't** replace the forest-green brand with the secondary blue accent or turn reading pages into dark dashboards; the dark signature is intentional.
- **Don't** add decorative kickers or use nonsequential numbers as a house style.
- **Don't** turn every service or content group into a raised card.
- **Don't** intercept native scrolling or add continuous idle animation; the brand image remains a still.
- **Don't** reduce editable text below the field token, reuse miniature text for controls, or animate keyboard focus.
- **Don't** present concepts, simulated states, or brand imagery as delivered customer outcomes.

Not canonized or repaired by this documentation pass: dormant legacy eyebrow/old-stage CSS, local miniature text and material variants, and remaining decorative catalogue indices are not a general house style. The latest heading scaffolding and nonsequential support numbers were removed in implementation. Do not promote residual one-off values or decorative indices into rules for future surfaces.

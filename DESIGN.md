---
name: "Zavino"
description: "A forest-green daylight studio catalogue with tangible, accessible service concepts."
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
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(3rem, 5.75vw, 5.25rem)"
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
    fontSize: "clamp(1.8rem, 3vw, 2.75rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.035em"
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
  footer-signature:
    textColor: "{colors.forest-200}"
    typography: "{typography.footer-display}"
---

# Design System: Zavino

## Overview

**Creative North Star: "The Daylight Studio Catalogue"**

Zavino presents technology through the physical calm of an industrial design catalogue: forest-green ink, sage grounds, ivory objects, generous image fields, clear type, and open rows. Dimensional service concepts make capabilities tangible across desktop and mobile while real controls and explanations stay easy to use.

Preserve the Zavino name and symbol. The latest explicit user instruction replaces the earlier blue palette and static mobile service fallback with dark green, working mobile concepts, a playful lettering button, global progressive blur, and route defocus/refocus. The retained daylight catalogue now includes a miniature ivory fighter jet on a green ramp. The footer owns a deep forest field; the rest of the site remains light.

**Key Characteristics:**

- Sage grounds group whole sections; linen adds a supporting material and the footer carries the darkest green.
- Medium-weight Manrope headings pair with platform body text.
- Broad imagery, ruled service chapters, and a bounded visual stage give content room to breathe.
- Controls use small radii, clear boundaries, and visible focus.
- Work and demonstrations retain explicit, truthful attribution.
- Motion is tied to entrance, scroll progress, or direct input; mobile, keyboard, and reduced-motion alternatives preserve the interaction state.

Reconciled with the explicitly approved green and service-interaction expansion on 8 October 2026. Frontmatter records implemented primitives; the sidecar adds motion, depth, breakpoints, and component specimens. Its synthesized tonal ramps are preview aids, not additional implementation colors. Source styles remain the reference for selector-specific exceptions. This code-led run has no approved comp, decision comp, or quality-bar card.

## Colors

The source defines an OKLCH forest ramp at hue 158, from deep ink to pale sage, with controlled chroma. Preserve OKLCH rather than creating a parallel hex palette.

### Primary

The forest ramp is the brand system. Dark steps supply text, filled controls, and the footer; middle steps supply functional emphasis, material edges, and focus; light steps group content and distinguish selected or layered surfaces.

### Secondary

**Linen** is the SaaS stack's material ground. **Sand** is a small supporting material accent. These do not replace green as the brand color.

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

**The Section Ground Rule.** Use sage and linen grounds to organize content; use forest ink for reading and actions, and reserve the darkest field for the signature.

## Typography

**Display Font:** local variable Manrope, with sans-serif fallback. The shipped font supports weights 200–800; headings use 500, the header wordmark uses 650, and the footer signature uses 600.

**Body Font:** the platform stack in the frontmatter. There is no separate monospace family in the implemented system.

The broad display face supplies character. Body copy, navigation, controls, and field labels use familiar platform text. Headings balance their wrapping and use optical sizing; paragraphs use pretty wrapping.

### Hierarchy

- **Display** is the homepage headline. At widths up to 1050px it becomes `clamp(2.875rem, 5.5vw, 4rem)`; up to 700px it becomes `clamp(2.125rem, 8.75vw, 3.75rem)` with a 1.12 line height.
- **Headline** sets shared section headings. **Title** sets the current homepage service-chapter names and retains the same clamp in compact flow.
- **Footer Display** is the user-authorized oversized brand exception. Its solid letterforms and shallow text-shadow extrusion form a typographic object; this scale is not a general heading rule.
- **Inner Display / Inner Headline** are the supporting-page defaults. Service hero compositions use their own observed clamp, so these defaults are not a mandate to flatten every route to one size.
- **Body** is the root reading style. Homepage service and process prose commonly use 0.9375rem; supporting-page prose uses 17px with a 1.75 line height. Hero copy is kept to about 35–37ch; general page introductions allow 65ch.
- **Control** sets filled buttons. Navigation and text links use the same size with their own line height. **Field** remains 16px at every viewport.
- Captions remain 0.75rem (12px). Real concept status/action text uses 0.875rem (14px), and view selectors use 0.8125rem (13px) with at least 44px targets. Mobile miniatures have separate 10–12px decorative text, with local badge exceptions; these aria-hidden illustration scales are not general UI text tokens.

**The Readable Entry Rule.** Editable text stays at the field size, and labels remain visible above the control.

## Layout

The shared shell is centered with a maximum width of 1480px and fluid side gutters. Spacing expands between groups while related content remains close. This is a flexible content grid, not a universal card grid.

The homepage uses a split hero, linked service chapters beside a sticky visual stage, a split owned-product feature, two creative images, and three process columns. The service split is 0.85fr / 1.15fr with a 5% gap. At widths of at least 800px, heights of at least 650px, and no reduced-motion preference, each chapter spans at least 68svh and the stage sticks 8rem below the top (9rem at 800–1100px). Smaller or shorter viewports and reduced motion hide the scroll stage and expose working concepts inside each service chapter. The same local concepts appear in the services directory and detailed service pages.

At 700px and below, the remaining homepage sections become a single reading column. The hero image becomes 15rem high with a focal point of 48% 45%; the desktop crop uses center 30% to retain the complete jet. Above 1480px, the hero ground spans the viewport while its content aligns to a 1320px inner field. The full-width signature precedes three footer information columns, which become two columns with contact information spanning both at 700px and below.

| Boundary | Implemented response |
| --- | --- |
| 1100px and below | Supporting-page process/path grids use two columns; the product showcase stacks. |
| 1050px and below | Homepage hero proportions tighten. |
| 900px and below | Contact layout stacks; its secondary contact information uses two columns. |
| 899px and below | Desktop navigation gives way to the native mobile menu; the header is 4.75rem high. |
| 999px and below | Detailed-service concept compositions become one column, with a maximum concept width of 700px. |
| Below 800px width or 650px height | Working local concepts replace the sticky homepage stage; reduced motion uses the same composition. |
| 760px and below | Supporting-page two-column content and project grids stack; inner section spacing becomes 76px. |
| 700px and below | Homepage, shared contact invitation, legal reading layout, and demos reflow; header height is 4.5rem. |
| 600px and below | Contact fields become one column; submit actions fill the available width. |
| 599px and below | Concept controls stack; mobile scenes simplify while retaining labelled controls and state text. |
| Component width 300px and below | Automation has a 360px minimum scene height; only decorative selector icons are hidden. |
| 380px and below | Remaining narrow supporting-page process/path grids stack. |
| 359px and below | The separate header contact link is hidden; contact remains in the menu. |

The desktop header is 5.5rem high. The global lower-edge blur occupies level 15, sticky navigation level 20, the skip link level 30, and native dialogs use the browser top layer. Anchor offsets keep content below the header. Preserve spaces around responsive line breaks so stacked copy remains readable.

## Elevation & Depth

Most reading surfaces remain flat. Tonal changes, fine rules, and real light in the imagery establish depth. The floating menu, physical product covers, illustrative interface objects, and dimensional footer signature have distinct shadow treatments. Ordinary controls and content rows do not acquire a generic lifted-card treatment.

### Shadow Vocabulary

- **Menu:** `0 16px 60px oklch(from var(--forest-950) l c h / 0.149)` separates the native navigation panel from the dimmed page.
- **Homepage product cover:** `6px 14px 30px oklch(from var(--ink) l c h / 0.149)` grounds the cover as a physical object.
- **Interface objects:** layered ambient shadows separate the concept window, floating annotations, keycaps, and phone. Keycap gradients describe a physical surface. Exact variants are recorded in the sidecar.
- **Footer signature:** stepped text shadows create shallow extrusion; the mobile variant reduces their offsets and spread. The forest footer ground and stationary light use gradients while the letters retain a solid fill and move independently.

The sticky header uses a translucent sage ground and 12px backdrop blur. Reduced-transparency and higher-contrast preferences replace it with an opaque surface. Higher contrast also strengthens muted text and rules and gives the mobile panel a forest-ink border.

**The Object Depth Rule.** Reserve dimensional depth for physical imagery, floating dialogs, illustrative interface objects, and the footer signature; keep ordinary reading surfaces flat.

## Shapes

Image plates are square or gently eased. Buttons and icon controls share the control radius; demonstration and form panels use the larger panel radius. Editable fields remain square. The menu is softer than a control, and media dialogs retain their own radius.

One-pixel rules divide services, process steps, lists, and footer information. Circular arrows are navigation cues; circular play and receipt controls retain their functional meaning. The sculpture in the hero remains a raster asset. The service showcase uses separate CSS interface concepts, with 16px window/keycap corners, smaller internal elements, and a phone silhouette; these are illustrative objects, not a new general card language.

## Components

### Buttons

Compact, grounded actions with room for a real SVG icon. The primary variant uses forest ink and pure-white text, the frontmatter padding, a 1.75rem icon gap, and a minimum height of 3.25rem. Small and icon buttons are at least 2.75rem high. Secondary/outline buttons have a transparent ground and rule-colored border. Text links use an underline on pointer hover.

Pointer hover changes color immediately. **Press / Tap feedback** scales filled and icon controls to 0.96 over 140ms, returning over 100ms with `cubic-bezier(0.23, 1, 0.32, 1)`. Disabled and focus-visible controls do not scale. Keyboard focus has no transition, and reduced motion removes the press transform.

### Inputs / Fields

Straight-edged pure-white fields sit inside the sage form panel. Their boundary uses Forest 500, with explicit field typography and frontmatter padding. Focus changes the border immediately and adds a 2px accent outline at a 3px offset. There is no focus or validation transition.

Visible labels, required markers, autocomplete, hints, and field-specific error descriptions accompany entry. Invalid fields use the recorded field-error value and `aria-invalid`; text explains the problem. The form focuses a status summary after submission, preserves entered details on failure, and disables the fieldset while saving. Optional questions use native disclosure. A received state is tied to an actual receipt.

### Navigation

The shared wordmark/symbol remains visible beside concise navigation. Desktop current-page links are underlined. At the mobile boundary, a labelled button opens a native modal dialog with a labelled close button, native focus containment, Escape support, scroll locking, and focus restoration to the trigger.

**Origin-aware animation** enters from the top right over 180ms and exits over 120ms, using opacity, a −4px vertical offset, and scale 0.97 with the shared easing. Keyboard opening, keyboard closing, Escape, and link navigation are instant. Reduced motion uses an 80ms opacity transition without movement. A resize to desktop closes the menu.

### Hero Reveal and Stagger

The two headline lines use masked Reveal over 800ms, with a 70ms delay on the second line. They travel from 112% below the mask with 2° rotation to their resting position. Supporting copy arrives over 650ms after 150ms; the image figure arrives over 850ms after 180ms, both moving 24px with opacity. The shared easing coordinates the entrance. These animations run only with no reduced-motion preference; the heading keeps a complete accessible name. The image itself remains a still.

### Scroll-driven Service Chapters

Each service is an ordinary link containing its title, outcome, description, scope, and exploration cue. Fine rules preserve the catalogue rhythm. A decorative, accessibility-hidden stage shows three dimensional interface concepts beside this complete copy, with a visible truthful concept caption.

GSAP ties transform and opacity directly to native scroll using a scrubbed, linear timeline from the section’s top at 45% of the viewport to its bottom at 75%. The stage uses CSS sticky positioning, not wheel interception. Concepts exchange in order; a progress line and chapter markers follow the same progress. `will-change` is active only while the trigger is active. Compact, short-viewport, and reduced-motion modes remove the stage and extra chapter height, then show each service’s working local concept. Import failure selects the same composition; ordinary service copy and links remain available without JavaScript.

On setup and ScrollTrigger `refreshInit`, the stage measures the viewport and uniformly scales its inner visual plane from the top center. Available height subtracts the sticky top, full-size caption and its margin, computed bottom-blur height, and 16px clearance. The outer frame reserves the scaled height; the caption stays outside the transform at 0.75rem (12px). The natural plane is `clamp(25rem, 41vw, 37rem)`, with a 35rem height at 800–1100px before fitting. Measurements never run on scroll frames. Cleanup removes the refresh listener and inline frame height/plane transform.

### Interactive Service Concepts

The shared playground puts an aria-hidden dimensional scene above real native controls and a polite live status. The caption says “Interactive studio concept.” It runs locally and sends no inquiry data. Keep the controls outside the decorative plane.

| Service | Interaction and motion |
| --- | --- |
| Automation | Prepare an inquiry, reveal its fields, then explicitly approve the example. The action cycles to reset. Main object transforms use 280ms; fields use 180ms transforms and 140ms opacity with 45/90ms delays. The last desktop field finishes at 270ms; the simplified mobile sequence finishes at 225ms. Completion states that nothing was sent. |
| SaaS | Customer, Team, and Owner selectors reorder the layered workspace cards. Cards use 280ms transforms and 160ms opacity; inactive card bodies recede. |
| Web | Desktop and Mobile selectors shift emphasis between browser and phone. Transforms use 280ms; opacity uses 180ms. |

Selectors expose `aria-pressed`; captions and live status remain outside the scene. Actions are at least 48px high and selectors at least 44px. Keyboard activation updates state with no transition. Reduced motion keeps state changes and uses only an 80ms linear opacity transition. The shared action retains a small 0.97 pointer press response with 140ms press and 100ms return.

The scene sizes with its component through container units. At phone widths, automation and SaaS use 120cqw scene height and the web scene 104cqw; the automation content simplifies to two useful fields. At a component width of 300px or less, a 360px automation floor prevents clipping, and only the decorative selector icons disappear. Do not hide service names, control labels, status, or concept attribution.

### Images and Evidence

The active hero is a static tabletop illustration of an ivory miniature fighter jet on a forest-green ribbon ramp. Keep its descriptive alternative text, coherent contact shadows, and complete silhouette in the responsive crop. The earlier blue bridge is historical, not the active asset. Supplied creative work retains its project title and category; Aston Mark is identified as a Zavino owned product in ordinary copy. Supporting demos and concept work keep visible concept attribution near the artifact. Labels describe evidence instead of decorating headings.

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

- **Do** use sage and linen grounds for grouping, forest ink for reading, and the dark forest field for the signature.
- **Do** pair medium Manrope headings with readable platform body text.
- **Do** preserve broad image fields, ruled service chapters, and the hierarchy between primary and supporting content.
- **Do** preserve working mobile concepts, visible focus, explicit labels, immediate keyboard state changes, and preference-based alternatives.
- **Do** distinguish owned products, delivered creative work, and illustrative concepts in nearby copy.
- **Do** retain provenance when replacing or adding a shipping raster.

### Don't:

- **Don't** reintroduce the superseded blue palette or turn the catalogue into a dark dashboard; the dark signature is intentional.
- **Don't** add decorative kickers or use nonsequential numbers as a house style.
- **Don't** turn every service or content group into a raised card.
- **Don't** intercept native scrolling or add continuous idle animation; the brand image remains a still.
- **Don't** reduce editable text below the field token, reuse miniature text for controls, or animate keyboard focus.
- **Don't** present concepts, simulated states, or brand imagery as delivered customer outcomes.

Not canonized: miniature-only text/radii/material variants, dormant eyebrow styles, and decorative indices are not general interface rules. Preserve the functional mobile controls and attribution; do not turn illustration details into a UI type scale.

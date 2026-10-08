---
name: Zavino
description: A daylight studio catalogue for thoughtful technology and a lighter workday.
colors:
  blue-ink: "#213c4c"
  blue-accent: "#315d7a"
  soft-ink: "#5d7789"
  ink-hover: "#345769"
  near-white: "#f9faf8"
  mist: "#edf2f5"
  deep-mist: "#e0e9ef"
  muted-ink: "#536570"
  rule: "#213c4c26"
  white: "#fff"
  demo-paper: "#f9fbfc"
  contact-ground: "#dce7ee"
  field-border: "#718594"
  error: "#a63e32"
  approved: "#e5eee8"
  held: "#f1ece0"
  concept-paper: "#fdfefe"
  signature-ink: "#36566b"
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
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  control:
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
  field:
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  selected-demo-control:
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.65
  footer-display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(5rem, 26vw, 27rem)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.04em"
rounded:
  square: "0"
  image: "0.25rem"
  control: "0.375rem"
  media-dialog: "8px"
  panel: "0.75rem"
  menu: "0.875rem"
  circle: "50%"
  concept: "16px"
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
    backgroundColor: "{colors.blue-ink}"
    textColor: "{colors.white}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0.875rem 1.375rem 0.875rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.ink-hover}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.blue-ink}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0.875rem 1.375rem 0.875rem 1.5rem"
  button-secondary-hover:
    backgroundColor: "{colors.deep-mist}"
  icon-button:
    textColor: "{colors.blue-ink}"
    rounded: "{rounded.control}"
    padding: "0.5rem"
    width: "2.75rem"
  field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.blue-ink}"
    typography: "{typography.field}"
    rounded: "{rounded.square}"
    padding: "13px 15px"
  demo-control-selected:
    backgroundColor: "{colors.deep-mist}"
    textColor: "{colors.blue-ink}"
    typography: "{typography.selected-demo-control}"
    rounded: "{rounded.control}"
    padding: "0.625rem 0.75rem"
  demo-panel:
    backgroundColor: "{colors.demo-paper}"
    textColor: "{colors.blue-ink}"
    rounded: "{rounded.panel}"
  contact-panel:
    backgroundColor: "{colors.mist}"
    rounded: "{rounded.panel}"
    padding: "clamp(24px, 3.4vw, 52px)"
  concept-window:
    backgroundColor: "{colors.concept-paper}"
    textColor: "{colors.blue-ink}"
    rounded: "{rounded.concept}"
  footer-signature:
    textColor: "{colors.signature-ink}"
    typography: "{typography.footer-display}"
---

# Design System: Zavino

## Overview

**Creative North Star: "The Daylight Studio Catalogue"**

Zavino presents technology through the physical calm of an industrial design catalogue: cool daylight, matte objects, generous image fields, clear type, and open rows. The visual system makes the work approachable while retaining enough structure for service detail, product concepts, and inquiry forms.

Preserve the Zavino name and symbol. The implemented world replaces the former dark systems dashboard with mist surfaces and blue ink. Imagery carries material character; navigation and controls stay quiet. The user-approved motion expansion adds a coordinated hero Reveal and Stagger, a native-scroll service showcase, a dimensional footer with pointer Parallax, and a bounded progressive Blur/Mask. Press / Tap feedback and Origin-aware menu animation remain in place.

**Key Characteristics:**

- Cool grounds group whole sections.
- Medium-weight Manrope headings pair with platform body text.
- Broad imagery, ruled service chapters, and a bounded visual stage give content room to breathe.
- Controls use small radii, clear boundaries, and visible focus.
- Work and demonstrations retain explicit, truthful attribution.
- Motion is tied to entrance, scroll progress, or direct input; compact and preference-based alternatives remain available.

Extracted from the current implementation and reconciled with the approved motion expansion on 8 October 2026. Frontmatter records implemented primitives; the sidecar adds motion, depth, breakpoints, and component specimens. Its synthesized tonal ramps are preview aids, not additional implementation colors. Source styles remain the reference for selector-specific exceptions. This code-led run has no approved comp, decision comp, or quality-bar card.

## Colors

The palette is cool and low in saturation, with dark blue text carrying the hierarchy.

### Primary

- **Blue Ink** is the primary text and filled-action color. **Blue Accent** marks focus, functional emphasis, and selected details.
- **Soft Ink** softens large display phrases; it is not the body-text color. **Ink Hover** gives filled controls their pointer-hover state.

### Neutral

- **Near White** is the page ground; **Mist** groups hero, work, and form surfaces; **Deep Mist** supports selected or hovered controls.
- **Muted Ink** carries supporting prose. **Rule** separates rows and sections without drawing a box around each item.
- **White** distinguishes editable fields and workflow nodes. **Demo Paper** contains supporting-route demonstrations; **Concept Paper** supplies the dimensional homepage windows. **Contact Ground** marks the shared closing invitation and footer information.
- **Signature Ink** is the monumental footer lettering. Its gradients belong to the surrounding light and material surfaces, not the text fill.
- **Field Border** provides a stronger boundary for editable controls. **Error** is reserved for validation text and invalid fields.
- **Approved** and **Held** are local demonstration-state fills, accompanied by text; they are not additional brand accents.

**The Section Ground Rule.** Use the pale grounds to organize content groups; use blue ink for reading and actions.

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
- Captions and supporting labels generally use 0.75–0.8125rem. Their job is attribution, instruction, or navigation, not a decorative pre-heading.

**The Readable Entry Rule.** Editable text stays at the field size, and labels remain visible above the control.

## Layout

The shared shell is centered with a maximum width of 1480px and fluid side gutters. Spacing expands between groups while related content remains close. This is a flexible content grid, not a universal card grid.

The homepage uses a split hero, linked service chapters beside a sticky visual stage, a split owned-product feature, two creative images, and three process columns. The service split is 0.85fr / 1.15fr with a 5% gap. At widths of at least 800px, heights of at least 650px, and no reduced-motion preference, each chapter spans at least 68svh and the stage sticks 8rem below the top (9rem at 800–1100px). Smaller or shorter viewports and reduced motion use compact service links with the decorative stage hidden.

At 700px and below, the remaining homepage sections become a single reading column. The hero image becomes 15rem high and keeps its focal point at 50% 55%. Above 1480px, the hero ground spans the viewport while its content aligns to a 1320px inner field. The full-width signature precedes three footer information columns, which become two columns with contact information spanning both at 700px and below.

| Boundary | Implemented response |
| --- | --- |
| 1100px and below | Supporting-page process/path grids use two columns; the product showcase stacks. |
| 1050px and below | Homepage hero proportions tighten. |
| 900px and below | Contact layout stacks; its secondary contact information uses two columns. |
| 899px and below | Desktop navigation gives way to the native mobile menu; the header is 4.75rem high. |
| Below 800px width or 650px height | The service showcase becomes compact static content; the same fallback applies to reduced motion. |
| 760px and below | Supporting-page two-column content and project grids stack; inner section spacing becomes 76px. |
| 700px and below | Homepage, shared contact invitation, legal reading layout, and demos reflow; header height is 4.5rem. |
| 600px and below | Contact fields become one column; submit actions fill the available width. |
| 380px and below | Remaining narrow supporting-page process/path grids stack. |
| 359px and below | The separate header contact link is hidden; contact remains in the menu. |

The desktop header is 5.5rem high. The homepage lower-edge blur occupies level 15, sticky navigation level 20, the skip link level 30, and native dialogs use the browser top layer. Anchor offsets keep content below the header. Preserve spaces around responsive line breaks so stacked copy remains readable.

## Elevation & Depth

Most reading surfaces remain flat. Tonal changes, fine rules, and real light in the imagery establish depth. The floating menu, physical product covers, illustrative interface objects, and dimensional footer signature have distinct shadow treatments. Ordinary controls and content rows do not acquire a generic lifted-card treatment.

### Shadow Vocabulary

- **Menu:** `0 16px 60px #18344526` separates the native navigation panel from the dimmed page.
- **Homepage product cover:** `6px 14px 30px #213c4c26` grounds the cover as a physical object.
- **Owned-product page cover:** `6px 12px 26px #213c4c26` is the existing route-specific variant.
- **Interface objects:** layered ambient shadows separate the concept window, floating annotations, keycaps, and phone. Keycap gradients describe a physical surface. Exact variants are recorded in the sidecar.
- **Footer signature:** stepped text shadows create shallow extrusion; the mobile variant reduces their offsets and spread. The footer ground and moving light use gradients while text retains a solid fill.

The sticky header uses a translucent mist ground and 12px backdrop blur. Reduced-transparency and higher-contrast preferences replace it with an opaque mist surface. Higher contrast also strengthens muted text and rules; it gives the mobile panel a blue-ink border.

**The Object Depth Rule.** Reserve dimensional depth for physical imagery, floating dialogs, illustrative interface objects, and the footer signature; keep ordinary reading surfaces flat.

## Shapes

Image plates are square or gently eased. Buttons and icon controls share the control radius; demonstration and form panels use the larger panel radius. Editable fields remain square. The menu is softer than a control, and media dialogs retain their own radius.

One-pixel rules divide services, process steps, lists, and footer information. Circular arrows are navigation cues; circular play and receipt controls retain their functional meaning. The sculpture in the hero remains a raster asset. The service showcase uses separate CSS interface concepts, with 16px window/keycap corners, smaller internal elements, and a phone silhouette; these are illustrative objects, not a new general card language.

## Components

### Buttons

Compact, grounded actions with room for a real SVG icon. The primary variant uses blue ink and white text, the frontmatter padding, a 1.75rem icon gap, and a minimum height of 3.25rem. Small and icon buttons are at least 2.75rem high. Secondary/outline buttons have a transparent ground and rule-colored border. Text links use an underline on pointer hover.

Pointer hover changes color immediately. **Press / Tap feedback** scales filled and icon controls to 0.96 over 140ms, returning over 100ms with `cubic-bezier(0.23, 1, 0.32, 1)`. Disabled and focus-visible controls do not scale. Keyboard focus has no transition, and reduced motion removes the press transform.

### Inputs / Fields

Straight-edged white fields sit inside the mist form panel. They use the field-border token, explicit field typography, and frontmatter padding. Focus changes the border immediately and adds a 2px accent outline at a 3px offset. There is no focus or validation transition.

Visible labels, required markers, autocomplete, hints, and field-specific error descriptions accompany entry. Invalid fields use the error token and `aria-invalid`; text explains the problem. The form focuses a status summary after submission, preserves entered details on failure, and disables the fieldset while saving. Optional questions use native disclosure. A received state is tied to an actual receipt.

### Navigation

The shared wordmark/symbol remains visible beside concise navigation. Desktop current-page links are underlined. At the mobile boundary, a labelled button opens a native modal dialog with a labelled close button, native focus containment, Escape support, scroll locking, and focus restoration to the trigger.

**Origin-aware animation** enters from the top right over 180ms and exits over 120ms, using opacity, a −4px vertical offset, and scale 0.97 with the shared easing. Keyboard opening, keyboard closing, Escape, and link navigation are instant. Reduced motion uses an 80ms opacity transition without movement. A resize to desktop closes the menu.

### Hero Reveal and Stagger

The two headline lines use masked Reveal over 800ms, with a 70ms delay on the second line. They travel from 112% below the mask with 2° rotation to their resting position. Supporting copy arrives over 650ms after 150ms; the image figure arrives over 850ms after 180ms, both moving 24px with opacity. The shared easing coordinates the entrance. These animations run only with no reduced-motion preference; the heading keeps a complete accessible name. The image itself remains a still.

### Scroll-driven Service Chapters

Each service is an ordinary link containing its title, outcome, description, scope, and exploration cue. Fine rules preserve the catalogue rhythm. A decorative, accessibility-hidden stage shows three dimensional interface concepts beside this complete copy, with a visible truthful concept caption.

GSAP ties transform and opacity directly to native scroll using a scrubbed, linear timeline from the section’s top at 45% of the viewport to its bottom at 75%. The stage uses CSS sticky positioning, not wheel interception. Concepts exchange in order; a progress line and chapter markers follow the same progress. `will-change` is active only while the trigger is active. Compact, short-viewport, and reduced-motion modes remove the stage and extra chapter height. Import failure selects the same compact fallback; service copy and links remain available without JavaScript.

On setup and ScrollTrigger `refreshInit`, the stage measures the viewport and uniformly scales its inner visual plane from the top center. Available height subtracts the sticky top, full-size caption and its margin, computed bottom-blur height, and 16px clearance. The outer frame reserves the scaled height; the caption stays outside the transform at 0.75rem (12px). The natural plane is `clamp(25rem, 41vw, 37rem)`, with a 35rem height at 800–1100px before fitting. Measurements never run on scroll frames. Cleanup removes the refresh listener and inline frame height/plane transform.

### Demonstrations and Selection Controls

Workflow, product, and responsive-web previews use a pale panel, thin rule, and panel radius. Scenario/role buttons show selection through a deeper mist fill, stronger weight, and `aria-pressed`. Workflow nodes use small radii; the selected node adds an accent outline. State changes are immediate. Approved and held states retain explanatory text alongside their fill.

The surrounding caption identifies these as illustrative concepts. A simulated approval, delivery, or integration must not appear to be a live business result.

### Images and Evidence

The paper bridge is a static brand illustration. Keep the hero's descriptive alternative text and its wide crop. Supplied creative work retains its project title and category; Aston Mark is identified as a Zavino owned product in ordinary copy. Supporting demos and concept work keep visible concept attribution near the artifact. Labels describe evidence instead of decorating headings.

Shipping raster provenance remains with each asset in its metadata/sidecar. The new bridge's prompt is recorded in `docs/design/workday-bridge.prompt.txt` and `public/media/workday-bridge.webp.json`. Review captures are evidence of the implementation, not design comps.

### Footer Signature

The shared footer opens with a monumental Manrope wordmark on a graduated daylight surface, followed by useful contact and navigation information. Its wordmark is a home link with a normal accessible name; the visible sculpture is decorative. The display scale is the approved brand exception, not gradient text or a replacement for footer navigation.

Pointer Parallax runs only for a mouse on a fine, hover-capable pointer with no reduced-motion preference. Input is coalesced into animation frames and writes transforms directly to the wordmark and light children. The wordmark stays within ±3.5° rotation and ±5px horizontal travel; the light uses ±60% horizontal and ±25% vertical travel. CSS transitions remain interruptible: 180ms for the wordmark and 240ms for the light. Pointer leave, focus, scrolling, resizing, preference changes, and unmount reset or clean up the effect. Keyboard focus and reduced motion keep the signature still.

### Progressive Bottom Blur

The homepage has a pointer-transparent lower-edge mask, bounded to 96px high and reduced to 64px at 700px and below. Four graduated backdrop layers use blur radii of 2px, 4px, 8px, and 16px; the last becomes 12px on mobile. Extra footer-bottom padding keeps the final links clear. The effect is decorative and accessibility-hidden, disappears for visible keyboard focus or an open dialog, and is removed for reduced transparency or forced colors. Those preferences also remove the footer light and text-shadow extrusion.

### Shared Accessibility

Maintain the skip link, semantic headings and landmarks, descriptive image alternatives, and accessible names for icon-only controls. The default focus-visible treatment is a 2px accent outline with a 5px offset. Hover is an enhancement for fine pointers; it does not reveal required information. Keep native disclosure, dialog, and form semantics, and retain the reduced-motion, reduced-transparency, and higher-contrast treatments.

## Do's and Don'ts

### Do:

- **Do** use pale grounds for section grouping and blue ink for reading and actions.
- **Do** pair medium Manrope headings with readable platform body text.
- **Do** preserve broad image fields, ruled service chapters, and the hierarchy between primary and supporting content.
- **Do** preserve visible focus, explicit field labels, immediate keyboard responses, and preference-based alternatives.
- **Do** distinguish owned products, delivered creative work, and illustrative concepts in nearby copy.
- **Do** retain provenance when replacing or adding a shipping raster.

### Don't:

- **Don't** restore the former dark dashboard aesthetic or add technical decoration to imply sophistication.
- **Don't** add decorative kickers or use nonsequential numbers as a house style.
- **Don't** turn every service or content group into a raised card.
- **Don't** intercept native scrolling or add continuous idle animation; the brand image remains a still.
- **Don't** reduce editable text below the field token or animate keyboard focus.
- **Don't** present concepts, simulated states, or brand imagery as delivered customer outcomes.

Not canonized: dormant eyebrow styles and remaining decorative indices on supporting routes are implementation residue, not reusable system rules. They are outside this documentation-only write boundary.

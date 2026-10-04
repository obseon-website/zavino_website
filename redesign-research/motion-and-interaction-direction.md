# Motion and interaction direction — luminous systems

**Motion specialist brief, 4 October 2026.** This is a design specification for the future builder, not implemented code. Its job is to make Zavino's technical capability visible while helping a buyer understand the offer. The old scroll-swapping image-reel hero is retired.

## Creative standard

Build an interface that feels like a **serious agency demonstrating a live system**, not a generic AI template. Use confident editorial type, disciplined spacing, deep evergreen/charcoal surfaces, warm ivory content, and one controlled electric sage or cyan signal color. The visual language is a network of data, decisions, and products with moments of light at meaningful state changes. It should look impressive in a static screenshot and more capable when interacted with.

The next AI builder should push its best frontend design skills: invent custom compositions, tune the transitions, make every breakpoint deliberate, and ship interactions that are visibly bespoke. Do not settle for a dark gradient, a glowing sphere, three equal cards, stock dashboards, looping code rain, or repeated generic reveal animations. The visual quality and the business explanation must strengthen each other.

## Signature hero scene: customer signal to approved action

At initial render, show the full readable path: **Customer signal → connected data → AI-assisted decision → human approval → action sent → measured feedback**. Label the entire scene **“Illustrative workflow · Zavino concept.”** The H1 and CTAs stay stable and readable; no animation gates them. A visible explanation panel states what each selected step does.

- On entering view, a light packet travels once along the path over roughly **700–1000 ms**. Connector segments illuminate in order, and a limited halo reveals the active node. The scene comes to rest after the sequence.
- Give visitors **two or three real-feeling scenarios** to select, such as a lapsed customer, abandoned cart, or support escalation. Each changes the source, decision, approval, and final action. Use a **220–350 ms** crossfade or state transition. The example remains illustrative and contains no fake numbers.
- Make the approval gate a meaningful stop. The signal pauses there until an explicit illustrative “Approve” action, then reaches the send step. A “Hold” or “Reject” path demonstrates control. Do not perform any actual send.
- Let each node be a button or accessible control. Click, tap, Enter, and Space should select it and update its explanation. Focus should show a clear solid ring with a soft glow. The content should still make sense if scripting or motion is unavailable.
- On small screens, rearrange the path into a vertical or stepped diagram with no tiny labels, horizontal overflow trap, or dependency on hover.

## Custom CSS motion vocabulary

Create several distinctive elements as **real CSS or SVG/CSS interactions**, each tied to a job:

| Element | Visual behavior | Purpose |
| --- | --- | --- |
| **Signal path** | A thin connector draws or a small luminous packet travels with an SVG path or a clipped CSS pseudo-element. | Explain direction and sequence in the workflow. |
| **Node halos** | Two or three restrained radial-gradient halos pulse via opacity and scale when a node becomes active. | Show active state and dependency without flooding the page with glow. |
| **Capability edge glint** | A clipped gradient traces only the active service row edge on hover, focus, or selection. | Make AI, SaaS, and Web choices feel responsive. |
| **Approval gate bracket** | A small bright bracket or line holds the signal, then changes state on the visitor's choice. | Make human control visible. |
| **CTA and focus light** | Short localized light response plus a clear solid focus core. | Confirm action and keyboard position. |

Animate **transform and opacity** wherever possible. A glow can be made from a static blurred layer whose opacity changes. Avoid animating full-screen blur, giant shadows, layout dimensions, or background position continuously. Control feedback should feel immediate at roughly **150–220 ms**. The overall page should have one large motion scene and only a few small local accents active at a time.

## Section-specific interactions

| Section | Interaction | What the visitor learns |
| --- | --- | --- |
| Connected-business problem | A line joins formerly separate CRM, commerce, support, and operations nodes once as the section enters view; labels are visible throughout. | The work is integration across teams and tools. |
| Three core capabilities | Unequal editorial rows respond with a localized edge glint and an output preview. Hover and keyboard focus work; touch has direct buttons or links. | AI automation, SaaS, and web are distinct but connected. |
| Automation deep dive | Node selection reveals inputs, rules, guardrails, approval, output, and measurement. Approval visibly controls the example path. | The automation is governed, not magic. |
| SaaS development | A clearly labeled concept UI switches among customer portal, admin workflow, and usage/operations view. | Zavino understands the product states behind a SaaS build. |
| Web development | A desktop/phone control shows the same page or flow adapting to viewport size; keyboard buttons are available. | Responsiveness is demonstrated, not claimed. |
| Delivery process | A short line advances as real stages enter view; each stage reveals a concrete artifact such as workflow map, prototype, launch checklist, or measurement plan. | Buyers can picture the engagement. |
| Adjacent creative services | AI UGC or existing media examples get short, accurate captions and click-to-play behavior. | Wider capabilities are available without distracting from the core offer. |
| Contact | CTA focus/hover light and immediate form focus, validation, sending, error, and success states. | The next step feels dependable. |

## Behavior and quality gates

- **Static first:** every diagram, service description, CTA, and explanatory label exists in readable HTML before animation. A screenshot should communicate the offer.
- **Accessibility:** support keyboard, touch, visible focus, sufficient contrast, and clear state labels. Hover never contains the only explanation. Reduced-motion users receive a complete static diagram and instant selected-state changes with no travel. If any motion runs continuously for more than five seconds alongside content, provide pause/stop/hide control as required by [WCAG guidance](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide).
- **Performance:** trigger scenes only while visible; pause offscreen activity; reserve dimensions to avoid layout shift. Prefer a sharp lightweight hero composition and defer video/large media. Test a real phone and a slower network for smoothness, LCP, and CLS. The glow should be cheap enough that scrolling and form input remain responsive.
- **Restraint:** no mandatory loader, scroll lock, pinned gate, cursor trail, autoplay reel, or generic animated network wallpaper. Do not make users wait for a demonstration to reach the CTA.
- **Truth:** motion can explain a proposed system, but it must never make an unbuilt automation look like live client telemetry or imply a real message was sent.

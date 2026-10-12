# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Workflow owners in operations, growth, customer experience, product, and IT; founders building SaaS products. This audience is recorded in `redesign-research/current-direction.md`. Visitors need to understand the offer, inspect relevant work, and start a project conversation.

## Product Purpose

Zavino's marketing website explains its capabilities and supports project inquiries through the existing contact form, booking link, email, and WhatsApp.

## Positioning

The latest 12 October 2026 brief focuses the site on four services: AI Revenue, AI Operations & Agents, SaaS Products, and AI Content. Websites, web apps, and enterprise AI training remain secondary capabilities in the service directory. The user explicitly asked to reduce text and cognitive load while preserving the current aesthetic. Zavino Labs showcases the team’s own products: Outbid.bd (work in progress) and Forma. Aston Mark, Halda Valley, and Ventro imagery is removed from the displayed site.

## Capabilities and Constraints

- Existing Next.js App Router project, React, TypeScript, plain CSS, local fonts, Phosphor icons.
- Preserve all service routes, the remaining creative work and 13 films, contact delivery, legal pages, and business contact details. Showcase the user-supplied Outbid.bd and Forma products in Labs.
- Preserve the distinction between illustrative product/workflow concepts and delivered client creative work.
- Push code through GitHub only. Do not run Workers deployment commands.
- The user chose code-first implementation on 8 October 2026.

## Brand Commitments

Preserve Zavino’s name and symbol. The latest explicit user instruction on 8 October 2026 establishes dark forest green and sage through an OKLCH system, while retaining the daylight industrial design catalogue, local Manrope, distilled content, and truthful evidence. This supersedes the earlier blue palette, two-interaction limit, and static mobile service fallback.

Provide working revenue, operations, SaaS, and content examples in the services directory and homepage. Mobile homepage examples use native disclosures to keep the four services easy to scan. Detailed routes retain their corresponding examples, including web as a secondary capability. The large footer wordmark is a playful button with tap/drag and keyboard alternatives, without navigation. Progressive blur is shared across routes and informs native route transitions. The active hero is a coherent miniature ivory fighter jet on a green ramp. Keep real controls readable, preserve native vertical scrolling, and provide reduced-motion alternatives.

## Evidence on Hand

- `src/lib/site.ts`: contact details, approved creative project descriptions, and clients. `src/lib/services.ts`: the four-service catalogue, secondary services, and concise support copy.
- `public/media/`: supplied creative portfolio, showreels, and owned-product cover.
- `src/components/service-playground.tsx` and `service-experience.tsx`: local illustrative concepts with truthful captions, not customer outcomes. Automation approval sends no data.
- `docs/design/services-motion-brief.md`: the latest explicit visual, interaction, mobile, asset, and delivery contract.
- `docs/design/flight-ramp.prompt.txt` and `public/media/flight-ramp.webp.json`: exact prompt and provenance for the active hero.
- `docs/design/services-motion-verification.md`: saved build/browser evidence and its limits. Viewport emulation does not establish physical-touch or frame-time performance.
- `src/lib/products.ts` and `src/app/labs/page.tsx`: Outbid.bd’s work-in-progress business discovery preview and Forma’s browser-based PNG, JPEG, and WebP tool. The names, links, and Outbid status were supplied by the user; descriptions were checked against their live previews. The former owned-products URL redirects to Labs.
- `src/components/button-confetti.ts`: bounded button-origin celebration on completed examples; no particles for keyboard or reduced-motion input. Product features use task-specific icons.
- No supported numerical business outcomes, testimonials, enterprise certifications, or delivery guarantees are supplied.

## Product Principles

- Describe the business benefit in plain language before technical implementation.
- Show evidence with its true scope.
- Keep a clear route from service understanding to a project conversation.
- Preserve access to detailed content while shortening the homepage.
- Keep service concepts usable on mobile with real controls outside decorative scenes; keyboard and reduced-motion alternatives preserve state.

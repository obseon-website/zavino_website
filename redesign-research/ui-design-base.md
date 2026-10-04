# Archive: former Zavino UI design base

Status: **retired historical concept**, 4 October 2026. Nothing below is a current copy lock or implementation instruction. The user's later AI-first brief, [Current direction](current-direction.md), [Page experience blueprints](page-experience-blueprints.md), and [Motion direction](motion-and-interaction-direction.md) replace this hero and the scroll-reactive image plan. The frames and details below are preserved only as a record of the earlier creative-first exploration.

## Former copy lock — retired

The small eyebrow above the headline is exactly **“WHERE VISION TAKES FLIGHT”**. Keep it in tracked, small all-caps type with the fine horizontal rule from concept 03. It is a quiet brand signature on both desktop and mobile, and stays still while the images react to scroll.

The homepage's main headline is exactly:

> Build it. Market it. Automate it.

The line directly beneath it is exactly:

> Branding, Marketing, Website development, content and AI automation.

The display treatment may use uppercase letters and line breaks, but the words, order, commas, and full stops stay intact. On desktop and mobile, show the three headline phrases as a clear reading sequence. The older “Make it. Market it. Build it.” headline is superseded; **“WHERE VISION TAKES FLIGHT” remains above the new headline as the small eyebrow**. The five service pillars remain the actual navigation and page taxonomy; the three verbs are the expressive front-door message, not a replacement for that taxonomy.

## Former chosen visual direction — retired

Use [concept 03](homepage-concepts.md) as the homepage base. The refreshed [desktop](concepts/03-typographic-reel.png) and [mobile](concepts/03-typographic-reel-mobile.png) images show the approved copy and a representative starting frame. They are composition references; the scroll response below cannot be judged from a still image.

- **Type first:** the small all-caps brand eyebrow leads into oversized geometric display type on a deep evergreen field. Both remain readable and stable while media changes. The long “Automate it.” phrase must fit without clipped letters at common desktop and phone widths.
- **Selective media:** retain the two image apertures from concept 03: one wide horizontal interruption among the headline lines and one smaller vertical crop near the lower copy. Show at most these two images at once. They reveal work without turning the hero into a gallery.
- **Existing brand materials:** start from the current site's dark evergreen `#0c1410`, warm ivory `#f0f1e9`, and sage `#b9cbaa`. The existing Syne / IBM Plex Sans pairing is a starting point; choose the final display weight and width to fit the approved words. Use fine rules and small labels sparingly.
- **Offer clarity:** the exact supporting line sits near the headline. The next section exposes all five formal pillars: Content Production, Digital Marketing, Branding & Creative, Web Development, and AI Automation.
- **Contact hierarchy:** “Send a brief” is the primary hero action. “Book an audit” opens [the supplied Cal.com event](https://cal.com/zavino/audit); WhatsApp is the third direct path. All three remain discoverable on mobile.

## Former scroll-reactive image sequence — retired

The image apertures react to **visitor scroll**, rather than playing on a timer. As the user moves through the opening hero, curated stills replace one another quickly with a short opacity crossfade: the outgoing image fades out while the next fades in. The headline and contact actions do not flicker or move with every frame.

| Part | Design behavior |
| --- | --- |
| Start | The first approved image is visible immediately, before scrolling or downloading video. The page is meaningful as a static screen. |
| Scroll mapping | Map hero scroll progress to an ordered sequence of roughly 6–8 approved frames for the first prototype. Alternate updates between the wide and narrow apertures so only one area changes at a time. A short scroll should produce a noticeable change; reversing scroll should move back through the sequence. |
| Fade | Prototype a fast **150–220 ms crossfade** using opacity, with no white flash, blur wash, or scale jump. Tune the final duration on real desktop and phone hardware. |
| Fast gestures | If a wheel, touch, or trackpad gesture skips multiple thresholds, show the frame for the latest scroll position. Do not queue every missed transition or make the images continue changing after scrolling stops. |
| Exit | The sequence resolves into the five-pillar service index. Normal page scrolling continues; there is no mandatory pinned scene, scroll lock, or forced wait before the offer and CTAs. |

The sequence is an image treatment, not proof by itself. Use permission-cleared Zavino work with accurate role labels. For web, SaaS, or AI work that lacks a cleared client example, use a visibly labeled Zavino Lab concept or process artifact. Do not make a food or Jeep image imply a software or automation engagement. The sequence may include frames associated with **Build** (brand, content, web), **Market** (campaign creative and distribution), and **Automate** (workflow or generated-content process), while the formal service categories remain separate below.

## Responsive behavior

**Desktop:** keep “WHERE VISION TAKES FLIGHT” small and letter-spaced above the three dominant headline beats. The wide image aperture interrupts the type; the narrow crop adds a second, quieter proof point. Support copy and all three contact paths remain legible before the service index. Media updates within their slots rather than shifting the layout.

**Mobile:** keep the same small all-caps eyebrow and phrase order in a vertical stack. The wide crop becomes a short full-width strip; the second crop sits beside or below the supporting line without shrinking the text. Brief, audit, and WhatsApp follow in a clear tap order. Start the service index with one full-width row at a time. Use an appropriately sized mobile image sequence and do not miniaturize the desktop navigation.

**Reduced motion and constrained devices:** retain the complete headline, supporting line, contacts, and a representative still image. Disable the rapid sequence when reduced motion is requested; the service index and page remain fully usable. Do not autoplay a video to simulate the scroll effect. Load a sharp first frame, then prepare only the next frames needed for smooth transitions. Preserve image dimensions to prevent layout shifts and test on slower mobile connections.

## Historical implementation and review checks — do not apply to the new brief

- The exact small all-caps eyebrow, headline, and supporting line appear in the DOM and match the refreshed concept images; they are not baked into production image assets.
- The three phrases fit at desktop and mobile widths, and the supporting line is readable without covering media.
- Scrolling forward and backward updates the image apertures promptly with a fast fade. Stopping scroll stops changes. Text and controls remain stable.
- Every frame is approved and truthfully labeled where needed. The initial frame loads quickly; later frames do not compete with the lead form or navigation for bandwidth.
- The three contact paths and the five-pillar index work with touch, keyboard, and no animation. Reduced-motion users receive a complete static composition.
- Test the sequence at normal and fast scroll speeds on real phones and desktop devices before treating the prototype timing as final.

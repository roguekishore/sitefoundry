# reflect.app — recreation notes

Recreated as **Nocturne**, a made-up local-first notebook app ("write at night, think by
day"). None of the original's copy, names, logos, screenshots or videos are used.

## Design language

- **Palette (dark is faithful).** A near-black indigo page `#030014`, with a faint violet
  radial wash at the top of the hero. Ink is a lavender-white `#f4f0ff`; secondary text is
  the same lavender at 60% (`rgba(239,237,253,.6)`), small print 70%. Hairlines are lavender
  at 8–10%. One violet does the emphasis: `#9382ff` for @mentions and active states; buttons
  are a deep violet `#1d0c46` with a lilac hairline and an inner top glow
  (`inset 0 -7px 11px rgba(164,143,255,.12)`); the secondary button is a near-black panel
  with a white-10% hairline. Gradient light (black-hole glow, light cone, planet) is violet
  `#7b5cff` to blue `#5c7cff`; prices use a pink→lilac→periwinkle gradient
  (`#e59cff → #ba9cff → #9cb2ff`).
- **Headings** are filled with a vertical white→white-70% gradient (text clip), weight 500.
- **Type scale.** H1 72/80 at 1440, 44/52 at 390. Section H2 56/64 at 1440, 40/48 at 390.
  Sub-heads 32/40. Price 72/80. Lead 16/24 at 60% ink. Card text 16/24, small 14/20, badges
  14/20, footer and nav 15/24 and 14/20. Letter-spacing normal everywhere.
- **Rhythm.** Every section is the same recipe: a centred pill badge → gradient heading →
  one muted paragraph → buttons, 16px between badge and heading, 24px to the lead, 32–40px
  to the buttons. Sections are ~110–150px apart at 1440 and ~80–100px at 390.
- **Grid.** 1200px content frame at 1440 (features grid 120→1320), header edge-to-edge at
  72px sides, footer at 1128px. Feature grids are hairline-ruled cells, no card fill.
- **Shapes.** Buttons 8px radius, 36px tall. Pills fully round. Testimonial cards and the
  app window 16px; the academy panel 24px. Depth is light, not shadow: glows, inset
  highlights, starfields; almost no drop shadows.

## Type

| Original | Classification | Ours | Why |
|---|---|---|---|
| AeonikPro 500 (display) | geometric-leaning neo-grotesk, normal-to-wide, large x-height, round bowls, double-storey a, single-storey g | **Figtree Variable** 500 | the open face closest on all four traits: round geometric bowls, normal-wide set, big x-height, double-storey a / single-storey g; flat terminals like Aeonik |
| Inter V 400/500 (body) | neo-grotesk, normal width, tall x-height | **Inter Variable** | the original uses Inter |
| — | — | JetBrains Mono (mono token only) | no mono on the page; filled for the token |

## Section map

| # | section | block | height | 390 | 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | fixed header | `reflect-header` | 88px / 76px | logo, Download button, menu icon | logo left, nav links in a hairline pill centred, text link + primary button right; hairline under | — | fixed for the whole scroll, glassy blur; links fade .9→.6 |
| 1 | hero | `reflect-hero` | content (~1385 / 1190) | badge, 2-line H1 44px, lead, stacked buttons, note; glow; tall 350×658 r16 app frame | centred badge, 1-line H1 72px, lead, two buttons inline, note; orbit rings + glow; 1198×748 app window in a double frame, fades out at the bottom | black-hole video (16:9) behind; app screenshot (1.6 / 0.53) | rings rotate 100s, stars rotate 70s + twinkle; play button grows on hover |
| 2 | features | `reflect-features` | content (392 / 196) | horizontal swipe row of cells | 4×2 hairline-ruled grid; icon, title, muted text | — | cell glow on hover |
| 3 | AI | `reflect-ai` | content (1311 / 1824) | stacked; capability list single column with a left hairline | badge/H2/lead; showcase card over a light-beam image; H3 32px; 3+2 hairline grid of centred items | light beam + grid floor (1440×835) | showcase card hover; "magic" button hue loop 2s; light streak loop 5s; media fades in on view |
| 4 | connected | `reflect-connected` | content (1265 / 1632) | cone, heading, two cards stacked | light-cone image top, badge/H2/lead below, two hairline cards side by side, each media + icon + bold lead-in text | light cone (806×849); two card media (468×256) | media fade in on view |
| 5 | research | `reflect-research` | content (1086 / 1250) | radar, heading, two items stacked with hairlines | radar half-disc image with orb, badge/H2/lead, two centred items split by a hairline | radar (890×890, top half shown) | fade in on view |
| 6 | local files | `reflect-privacy` | content (844 / 622) | glow field behind, small heading 40px | glow field video behind, orb, badge, H2 72px, lead, button | cipher-text video (1568×882), lock orb | fade in on view |
| 7 | pricing | `reflect-pricing` | content (1184 / 1380) | stacked plans, full-width buttons with left text | badge/H2, two plans split by a hairline, gradient prices, footnote; glowing planet + its reflection behind | planet (744×837) | fades in; scrubbed upward drift |
| 8 | classic | `reflect-migrate` | content (480 / 496) | stacked | badge, H2, two paragraphs, two buttons | — | — |
| 9 | testimonials | `reflect-testimonials` | content (868 / 852) | heading, two rows of one-and-a-bit cards | two outline circles behind heading, two marquee rows of 480px cards, edge fades | avatars | rows drift (marquee 200s); circles sway 5s; fade in |
| 10 | about | `reflect-about` | content (824 / 864) | heading, button, globe | badge, 2-line H2, lead, button; dotted-globe canvas rising from the bottom, side hairlines | globe canvas | globe scales .5→1 and fades in on view; ring rotates 70s |
| 11 | academy | `reflect-academy` | content (916 / 756) | panel full-bleed, text on top | 896×640 r24 panel with a violet floor glow, text centred in it; keycap hints below | game canvas panel | fade in on view |
| 12 | final CTA | `reflect-cta` | content (600 / 538) | 2-line H2 | badge, H2 56px, lead, button; black-hole glow video below | black-hole video (16:9) | fades in on view; stars rotate |
| 13 | footer | `reflect-footer` | content (723 / 1203) | stacked: logo+socials, columns, newsletter, legal | logo + socials left, 3 link columns right, hairline, newsletter row, hairline, legal row | — | link colour .6→.7 |

## Motion inventory

| section | trigger | what changes | timing | how |
|---|---|---|---|---|
| header | pinned | fixed at top for the whole scroll, blurred translucent bar | — | `sticky top-0` with a negative bottom margin so the hero runs under it; `backdrop-blur` |
| header links | hover | colour 90%→60% | .3s cubic-bezier(.6,.6,0,1) | `transition-colors` + `hover:` |
| buttons | hover | top-glow layer crossfades (::before off, ::after on) | .45s same ease | two absolutely placed layers, `group-hover:opacity` |
| badge | hover | inner glow .12→.24 | .45s | `transition-shadow` + `hover:shadow-[…]` |
| hero rings | loop | rotate 360° | 100s linear | `@keyframes` in `reflect-hero.css` |
| stars (hero, AI, testimonials, CTA, about) | loop | rotate 360° 70s, twinkle opacity 11s | linear / ease-in-out | `reflect-starfield` component with its own CSS |
| hero play button | hover | outer disc 112→120px, inner 80→96px | .3s ease-in-out | `transition-all` + `group-hover:scale` |
| feature / AI cells | hover | soft top glow fades in | .45s | `::after`-style layer, `group-hover:opacity-100` |
| AI showcase card | hover | bg → white 5%, border → white 16% | .45s | `transition-colors` |
| AI "magic" button | loop | hue-rotate 0→360 | 2s linear | `@keyframes` |
| AI showcase streak | loop | a light streak travels along the card | 5s | `@keyframes` translateX |
| media slots (all sections) | entering view | opacity 0→1 (lazy-load fade) | ~1s, over `entry 0% cover 30%` | `animation-timeline: view()` in `@supports` |
| pricing planet | scrubbed | rises ~80px as the section crosses the window | whole cover range | view timeline, `animation-range: cover` |
| testimonials rows | loop | translateX 0→-50% (marquee) | 200s linear; row 2 half a cycle offset | `@keyframes` on a doubled track |
| testimonials circles | loop | sway left/right a few degrees | 5s ease-in-out alternate | `@keyframes` |
| about globe | entering view | opacity 0→1, scale .5→1 | `entry 0% cover 40%` | view timeline |
| about globe ring | loop | rotate 360° | 70s linear | `@keyframes` |
| footer links | hover | 60%→70% ink | .45s | `transition-colors` |
| newsletter input | hover | bg → lavender 6% | .45s | `transition-colors` |

Skipped (inside media, the placeholder's business): the black-hole video, the cipher-text
flicker, the radar scanner and its items, the backlink/record-circle card animations, the
planet's line sweep, the WebGL globe dots, the falling-blocks game.

## Media slots → placeholders

All slots are `ReactNode` props; empty ones are token surfaces of the same size and frame.

- hero black hole (16:9, 1440 wide) → soft `glow` radial wash, bottom-centred.
- hero app screenshot (1198×748 at 1440, 350×658 r16 at 390) → `bg-muted` inside the double
  frame, faded out at the bottom like the original.
- AI beam + floor (1440×835) → a `glow` wash in the same box.
- connected cone (806×849) → `glow`→transparent vertical wash; two card media 468×256 →
  `bg-muted/…` panels.
- research radar (890×890, top half) → a half-disc `glow/…` wash with a hairline edge
  (radius only, the slot is round-topped in the original).
- privacy cipher field (1568×882) → `glow` ellipse wash; lock orb → 100px round `bg-muted`.
- pricing planet (744×837) → a `glow` wash in that box; reflection → a fainter one.
- testimonial avatars 44px round → `bg-muted` circles.
- about globe (canvas) → round `bg-muted/…` disc with a hairline rim, top half showing.
- academy panel (896×640 r24) → `bg-card` panel with a `glow` floor gradient.
- CTA black hole (16:9) → `glow` radial wash.

## Decisions

- Name: **Nocturne** (night-sky notebook) — fits the starry palette, shares nothing with
  "Reflect".
- Dark is the faithful mode; light is a sibling: pale lavender page, indigo ink, the same
  violet; glows become soft lilac.
- The 390 feature row is a Swiper carousel in the original; ours is a native horizontal
  scroll-snap row (no JS), which also keeps the page itself from overflowing.
- Header overlays the hero (the original is `position: fixed`); ours is sticky with a
  negative bottom margin so it works both as a page header and alone in the gallery.
- Starfields are generated from a fixed seed, so server and client render the same dots.

## Comparison round 1

Heights (original → ours, px) at 1440: hero 1463→1474, features 392→409, AI 1311→1363,
connected 1265→1366, research 1086→1070, privacy 844→868, pricing 1184→1242, migrate
480→498, testimonials 868→854, about 824→826, academy 916→916, CTA 600→610, footer
723→739. No overflow at 360/768/1024. Section crops are taken at scroll 0, so view-timeline
reveals (media fades, globe) show their pre-state there; they are checked in the scroll
frames, where they play.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | lead 3 lines vs 2 (copy longer) | play button showed a square glass box (backdrop-blur artefact); horizon glow much fainter than the original's bright light | rings + stars turn ✓ | yes: no backdrop blur; brighter core in the glow wash; shorter lead |
| features | ✓ | ✓ | hover glow ✓ | — |
| AI | lead 7 lines vs 6; capability icon→title gap 36 vs 30 | icon→title gap 36 vs 20; one capability wrapped to 3 lines | hue loop, streaks, media fade ✓ | yes: mt-7/lg:mt-5, shorter copy |
| connected | ✓ | heading two lines vs one (+64px) | media fade ✓ | yes: one-line title; card placeholders made softer (radial muted, no hard box) |
| research | ✓ | ✓ | disc fade ✓ | — |
| privacy | ✓ | ✓ | pool fade ✓ | — |
| pricing | label/price/sub/button gaps 15–40% looser; second sub wrapped | plans start 20px low; planet sat ~190px too low (anchored to the bottom) | drift scrubbed ✓ | yes: tighter gaps, planet anchored 72px from the top |
| migrate | ✓ | ✓ | — | — |
| testimonials | heading wrapped to two lines; the 12% edge fade ate the phone card | rings a little bright; cards shorter (shorter posts) | marquee + sway ✓ | yes: shorter title, 3% fade on phones, min card height, fainter rings |
| about | ✓ | ✓ | globe scale+fade ✓ (scroll frames) | — |
| academy | ✓ | lead 3 lines vs 2 | panel fade ✓ | yes: shorter lead with a desktop break |
| CTA | lead 2 lines vs 1 | ✓ | glow fade ✓ | yes: shorter lead |
| footer | ✓ | ✓ | link hover ✓ | — |

## Comparison round 2

Heights (original → ours) at 1440: hero 1463→1474, features 392→409, AI 1311→1307,
connected 1265→1302, research 1086→1070, privacy 844→868, pricing 1184→1182, migrate
480→498, testimonials 868→858, about 824→826, academy 916→916, CTA 600→610, footer
723→739. At 390 after the fixes below: hero 1268→1282, AI 1824→1881, connected
1632→1622, research 1250→1220, privacy 622→586, pricing 1380→1342, testimonials 852→878,
CTA 538→538, footer 1203→1184. Fits at 360/768/1024. Every inventory row appears in ours'
Motion list: header sticky; orbit 100s, stars 70s + twinkle 11s, AI hue 2s and 5s streaks,
marquee 200s, ring sway 5s, globe rim 70s (loops); media fades and globe scale .5→1 (view
timeline reveals); planet drift ±64px (scrubbed); hovers on nav (.9→.6 in .3s), buttons,
badge glow (.14→.28), play button, footer links (.6→.7 in .45s).

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| connected | 120px of empty padding under the second card (original ends right after its text) | ✓ (one-line title now) | ✓ | yes: no bottom padding on phones |
| research | ~50px extra at the bottom | ✓ | ✓ | yes: phone bottom padding cut |
| CTA | glow area ~28px taller | ✓ | ✓ | yes: 13rem on phones |
| pricing | ✓ gaps now within a few px | ✓ planet top at 72px; plans start where the original's do | drift ✓ | — |
| hero | ✓ | glow brighter; play button clean | ✓ | — |
| AI | still ~57px taller (lead one line longer at 390) | ✓ | ✓ | left: copy length only |

Re-theme check: `reflect-hero`, `reflect-pricing` and `reflect-testimonials` under
`sample-ember` (light) pick up its paper, ink, rust buttons and orange glow cleanly; the
site's own light sibling reads as lavender paper with indigo ink.

Left as is: media slots are placeholders (glow washes and muted panels), so the
original's bright black-hole, light-cone, planet and globe artwork is only suggested by
the glow; Figtree sets a touch wider than AeonikPro, so headings run ~5% longer.

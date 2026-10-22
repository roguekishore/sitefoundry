# Bevel (bevel.health) — recreation notes

Captured in advance (`precapture.json`): landing page only, no other pages asked for.
The fictional product here is **Juniper**, an everyday health companion app; all copy is ours.

## Design language

- **Palette roles.** A white page; one cool, pale blue-grey surface `#EBF0F8` for every card
  (feature bento, review cards, tabs, intelligence cards); near-black ink `#222326` for
  headings and the pill buttons; body copy is the same ink at 60% opacity; one deep charcoal
  band `#1F2025` (the AI section) with white text. Colour only arrives as soft tints at the
  bottom of cards: peach (strain), blue (sleep), green (recovery), lavender (nutrition / AI),
  teal (records), pink, and a dark green glow in the privacy card. Stars are iOS orange.
- **Type scale.** One neo-grotesk (SF Pro on Apple; the site's own stack falls back to Inter),
  semibold 600 for every heading with tight tracking (-0.03em) and line-height 1:
  H1 80px (50px phone), H2 64px (41.5px), H3 40px (32.5px), card titles 24px; leads 24px/1.3
  weight 500 (20px phone); body 18px/1.3; small 12–16px. Fluid between with clamp().
- **Spacing rhythm.** Very airy: ~160px above and below each section at 1440, ~80px on phones;
  32px gaps between cards; 48–80px padding inside cards. Content cards span the full width
  minus 32px gutters (1376px at 1440), 16px gutters on phones.
- **Layout grid.** Centered headings; a 3-up bento of tall cards; full-width split cards
  (text left / media right, or reversed); a 2-column list + phone section.
- **Shapes.** Big soft radii: 32px cards, 24px hero frame and tabs, 16px media tiles, full
  pills (128px) for buttons and the nav. Phones are the star of every card, bottom-cropped.
- **Depth.** Mostly flat; a frosted white nav pill; small soft shadows under floating chips;
  inset white highlights on the dark button.

## Type

| Original | Class | Width | x-height | Ours | Why |
|---|---|---|---|---|---|
| `-apple-system` (SF Pro), stack `-apple-system, BlinkMacSystemFont, Inter, "Segoe UI"` | neo-grotesk sans | normal | large | **Inter Variable** (`@fontsource-variable/inter`, already in the repo) | SF Pro is closed; Inter is the original's own named fallback (it loads an Inter face, and the captures render in it), and it is the closest open match on width, x-height and the semibold tight-tracked headings. |

Graphik, Archivo, Numans and Gilroy are loaded by the site but never seen on the landing page
(Webflow leftovers): not used.

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| – | fixed nav pill | `bevel-header` | 56px, fixed | full-width frosted pill: wordmark + menu icon | 500px centered frosted pill: wordmark, two links, dark "download" pill | – | fixed; hover colour 0.15s; button scale 1.025 + inset glow 0.6s expo-out |
| – | download dock | `bevel-download-dock` | fixed | bottom app banner (icon, name, stars, button), shows when scrolling up | QR card bottom-right, fades out over the first ~900px of scroll | app icon, QR code | scrubbed opacity; JS show-on-scroll-up on phones |
| 1 | hero | `bevel-hero` | content (1067 / 928) | 8px inset frame r24; nav overlays; H1 3 lines, lead, button, rating; phone+watch below cropped | same, H1 2 lines; floating metric chips around the device | sky (top), light-streak video (behind device), phone+watch | floating chips loop in/out; frame bottom fades to white |
| 2 | works with | `bevel-works-with` | content (166) | "Works with" + logos in a drifting marquee | static row of 5 wordmarks | partner logos → plain text names | phone: slow marquee loop |
| 3 | members | `bevel-members` | content (1039 / 723) | two laurel awards, H2 4 lines, 142×253 cards | awards, H2 2 lines, 236×420 r16 cards with faded edges | 12 social posts (9:16) | slow marquee loop |
| 4a | metrics | `bevel-metrics` | content | heading + 3 stacked cards | heading + 3-up cards 437×768 r32 | 3 phones (bottom-cropped) | – |
| 4b | nutrition | `bevel-split-card` | 657 | text top, UI cluster below | text left, UI cluster right bleeding off | nutrition UI | – |
| 4c | records | `bevel-records` | 658 | text, tile ring, phone | phone left, ring of lab tiles, text right | phone, 9 lab tiles (lucide icons) | ring rotates −6°→6° with scroll; tiles drift; floating cards parallax ±18px |
| 5 | intelligence | `bevel-intelligence` | content (3469) | dark; 3 persona orbs + chips, heading, 4 cards with phone in flow | 4 cards 620px, phone **pinned** in the viewport, each card reveals its own screen | persona orbs, 4 phones, 4 floating bubbles | pinned phone (sticky track clipped per card); bubbles scrubbed ±7…39px |
| 6 | more features | `bevel-more-features` | content (1019) | heading left, horizontal row of tab cards, phone below | heading + vertical tab list left, phone right | phone per tab | tabs auto-advance with a progress ring; inactive scale .93 / opacity .5, 0.25s |
| 7 | privacy | `bevel-privacy` | content (970) | dark card 537 tall | dark card 650 tall centered text | lock illustration → plain placeholder | dot grid fades 0→1 on entering view |
| 8 | testimonials | `bevel-testimonials` | content (1525) | 4 photo columns cropped, heading, review marquee | 8-column arched photo collage, heading, review card marquee | 16 photos | review row: slow marquee loop |
| 9 | closing CTA | `bevel-cta` | content (1146) | heading, lead, button, flat-lay | same, wide flat-lay bleeding edges | product flat-lay | – |
| 10 | footer | `bevel-footer` | content (604) | stacked | brand left, 4 link columns, socials + badges row | 2 compliance badges | link hover |

Shared components: `bevel-button` (dark pill with icon), `bevel-heading` (centered H2 + lead),
`bevel-placeholder` (token-coloured media slot), `bevel-smooth-scroll` (Lenis).

## Motion inventory

| section | trigger | what changes | timing / easing | how |
|---|---|---|---|---|
| page | wheel | smooth scrolling (Lenis) | Lenis default | `bevel-smooth-scroll`, hydrate load |
| header | fixed | stays at the top throughout | – | `position: fixed` |
| header / buttons | hover | scale 1 → 1.025, inset white glow, a sheen sliding down | 0.6s cubic-bezier(.19,1,.22,1); sheen opacity/top 0.6s | Tailwind transitions + group-hover |
| header links | hover | colour 60% → 100% ink | 0.15s ease | Tailwind |
| download dock (desktop) | scrubbed | opacity 1 → 0 between 424 and 1325px of scroll | linear | CSS `animation-timeline: scroll()` |
| download dock (phone) | scroll direction | banner slides up when scrolling up, away when scrolling down | 0.3s ease | small effect, hydrate load |
| hero | loop | metric chips appear/fade around the device in turn | ~12s cycle | CSS keyframes, staggered delays |
| works with (phone) | loop | logo row drifts left | slow linear | CSS marquee |
| members | loop | card row drifts left (~83px per 1300px of scroll sampled) | slow linear | CSS marquee |
| records | scrubbed | ring rotates −6° → 6° | linear | `animation-timeline: view()` |
| records | scrubbed | floating cards translateY 18 → −18px | linear | view() |
| intelligence | pinned | phone stays in the viewport centre while cards scroll; each card clips its own phone | – | sticky phone inside a tall per-card track, card `overflow: clip` (lg only) |
| intelligence | scrubbed | floating bubbles translateY 7…39 → −7…−39px | linear | view() |
| more features | loop / click | active tab: scale .93→1, opacity .5→1, progress ring fills, then next tab | 0.25s ease; ~6s per tab | React state + CSS, hydrate visible |
| privacy | entering view | dot grid opacity 0 → 1 | entry → cover 40% | view() |
| testimonials | loop | review card row drifts left | slow linear | CSS marquee |

Skipped: `hero_phone-video.cc-2/3` and `hero_card-container.cc-4…9` translate across the whole
page at 1440 but are off-screen copies (nothing visible changes); motion inside the videos.

## Media slots → placeholders

All are `bevel-placeholder` surfaces (token colours, same size, ratio and radius):
hero sky + light streak (a soft glow gradient band behind the device), hero phone+watch
(~370×600, bottom fade), 12 member posts (9:16, r16), metric phones (338×689, top-rounded,
bottom-cropped), nutrition UI cluster, records phone, lab tiles (white r16 squares holding a
lucide icon), persona orbs (soft glowing circles), intelligence phones (350×700) and bubbles,
feature phone (305×640), privacy lock (rounded muted shape), 16 collage photos (r24),
flat-lay (full-bleed wide), compliance badges (40px circles).

## Decisions

- Brand: **Juniper**; personas "Drill", "Buddy", "Mentor"; partner and press names invented.
- `--radius: 1rem`; cards use `rounded-[calc(var(--radius)*2)]` (32px), tabs/hero frame
  `rounded-2xl` (24px), media `rounded-lg` (16px).
- Card tints use chart tokens: chart-1 peach, chart-2 green, chart-3 blue, chart-4 lavender,
  chart-5 teal; pink tint = highlight mixed — kept to chart tokens + glow so other themes re-tint.
- Privacy card forces `.dark` and uses chart-2 (green) for its corner glows.
- The phone banner only appears while scrolling up: the scroll frames never show it but two
  section crops do, which fits a show-on-scroll-up banner (a judgement call).
- The pinned intelligence phone is built with sticky (not fixed) so it still works inside the
  gallery's transformed preview frames.

## Round 1 (ours vs original)

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| all headings | line-height ~1.5 instead of 1 (tailwind-merge dropped `leading-none` written before the arbitrary font-size) | same; hero title 3 lines, 1298px tall vs 1067 | – | yes: size class first in `bevelTitle` |
| privacy, more features, testimonials, cta, footer | arbitrary classes missing (the running gallery never scanned these new files): privacy card 174px tall, tabs full width without phone, collage tiles missing, footer gaps lost | same | – | yes: files touched so the gallery rescans; privacy glow moved into its CSS file |
| bento, records, AI cards, privacy | – | content inset 64px instead of 32px (max-w-page includes the doubled gutter) | – | yes: `--page-width` 90rem |
| leads | Inter 500 reads lighter than the original's SF medium | same | – | yes: weight 550 |
| hero | – | title wraps to 3 lines at 38rem | chips loop ✓ | yes: max width 42rem |
| intelligence | – | spotlight cone hard-edged | pinned phone ✓ (sticky track works, each card clips its own phone) | yes: blur outside the clip |
| download dock | – | QR card visible at top ✓ | fades with scroll ✓ | – |

## Round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| intelligence | persona row (3 × 140px + gaps = 468px) widened the page at 360, which also pushed the fixed header pill past the right edge | – | sticky pin ✓, bubble drift ✓ | yes: `overflow-x-clip` on the band (clip, not hidden, so the sticky phone still works) |
| records | outer ring of tiles overlapped the 4-line lead | ring and tiles ✓ | ring turns −6°→6° ✓, floats ±18px ✓ | yes: ring centre lower (40rem), card 44rem, shorter demo lead |
| more features | – | title wrapped to 2 lines in the 555px column (the original's is 1 line) | tabs: scale .93→1, opacity .5→1 ✓; ring fill ✓ | yes: shorter demo title |
| hero | 947 vs 928px ✓ | 1098 vs 1067px ✓; two lines ✓ | chips loop ✓ | – |
| heights | members 678 vs 723, testimonials 1355 vs 1220 | members 959 vs 1039, bento 2672 vs 2564, more 1250 vs 1019 | – | close enough; content length differs |

## Round 3

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| whole page | fits at 360 / 768 / 1024 ✓ | – | all inventory rows show in ours' Motion list: fixed nav, QR fade (scrubbed), chip loop, marquees (loops), ring turn + float drift (scrubbed), sticky pinned phone, bubble drift, tab scale/opacity, dot reveal | – |
| more features | – | by the time a visitor arrived, autoplay had moved to the faded last tab | ring fill | yes: the ring runs only while the section is ≥30% in view |
| records | tiles clear the lead ✓ | ✓ | ✓ | – |

Re-theme check: `bevel-metrics`, `bevel-intelligence` and `bevel-more-features` under
`sample-ember` take its cream surfaces, serif display face, brown band and copper glow
without anything breaking.

Stopping here: each section pair reads as the same design apart from content and the
media placeholders. Known remaining differences: phones, persona orbs, lab logos, photos and
the flat-lay are plain placeholders; the hero's sky photo and light-streak video are a soft
token gradient; laurels are lucide wheat sprigs; the bento section runs ~100px taller at
1440 and "more features" ~230px taller (our copy wraps to two lines in each tab).

Gotcha met on the way: a running gallery did not generate Tailwind classes for some files
created while it was running (privacy, more features, testimonials, cta, footer) until the
files were touched.

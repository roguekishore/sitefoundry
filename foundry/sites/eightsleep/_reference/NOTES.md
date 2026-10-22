# eightsleep — recreation notes

Original: https://www.eightsleep.com/ (landing page only; precaptured 2026-10-21, no other
pages asked for). Fictional stand-in: **Tidewell**, maker of the **Mantle 4** climate bed
cover (Layer / Core unit / app), priced from $2,149. All copy is ours.

## Capture caveat: the first screen is blind

A full-window promo quiz ("Unlock a surprise", a photo on the left, four light-blue answer
buttons) sits over the page in **every** scroll frame at 390 and 1440, so no scroll frame
shows the page. Everything below comes from the `-section-NN` crops (taken at scroll 0, so
every view-timeline reveal shows blank there), the media list and the Motion list. Marked
**(inferred)** where a crop was blank: the hero above 900px, the section headings, the
"For the life you live" scenes, and the guarantee row. The quiz popup is not a page section
and is not rebuilt.

## Design language

- **Palette.** Mostly white and very light greys: page white, section bands #f7f7f7,
  panels #f4f4f4, cards #f0f0f0. Text near-black (21,21,20); body copy warm grey (105,103,101);
  a lighter grey (142,142,142) for quiet text. Pure black CTA buttons on light, pure white
  buttons on dark. One sparing electric blue (24,98,255) for @mentions and eyebrows, and a
  softer blue (79,127,255) as the glow. Dark bands are true black (advisors, footer) or a
  black-to-navy night sky (3,25,56 → 27,45,90) for the app carousel, the reviews and the
  study cards.
- **Type.** One neo-grotesk for everything, at only two weights (400 and 500). Headings 44px /
  1.1 on desktop, ~32px on phones; card titles 22–28px; body 18px/1.4 desktop, 15px/1.3 phones;
  small print 11–14px. A mono for eyebrows ("NEW TO …", "CLINICAL RESEARCH") and timestamps, a
  condensed gothic for big figures (the 4.5 rating, the 68° dial, the 96 score), and a narrow
  high-contrast serif for review quotes.
- **Spacing.** Generous: ~120px above and below each band on desktop, ~80px on phones; content
  1312px wide with 64px gutters at 1440, 20px gutters at 390 (cards 350px wide).
- **Shapes.** Media and cards rounded 16–24px (big media 24, cards 20, small 16), buttons
  softly rounded (~8px), pills fully round. No borders on light; on dark, glass cards with a
  14% white hairline.
- **Depth.** Flat; depth comes from photography and dark gradient scrims at the bottom of
  media cards (transparent 50% → black/50%). Glass cards on the night sky (white/20 fill,
  white/14 hairline). Hover lifts review cards with a soft shadow.
- **Layout.** Centered section headings over full-width rows: an expanding three-card row
  (one wide, two narrow), a two-column feature with a rotating list, a staggered pair of tall
  media cards, a three-column benefits panel, two big portrait cards, marquee tracks of review
  and athlete cards, a full-bleed closing photo, a three-up guarantee row and a black footer.

## Type

| Original | Kind | Ours | Why |
|---|---|---|---|
| Neue Montreal (200–800, mostly 400/500) | neo-grotesk sans, normal width, high x-height, slightly squared curves | **Hanken Grotesk Variable** (`--typeface-body`, `--typeface-display`) | closest open neo-grotesk on width and x-height, with the same calm, slightly geometric 400/500; already in the repo |
| IBM Plex Mono 400/500 | monospace | **IBM Plex Mono** (`--typeface-mono`) | the original's own face is open-licensed |
| Oswald / Dharma Gothic | condensed gothic, for big figures | **Oswald Variable**, via the theme variable `--eightsleep-figures` | Oswald itself is open; Dharma is a narrower cousin |
| Bethany Elingston (400, italic) | narrow high-contrast display serif, for review quotes | **Instrument Serif**, via `--eightsleep-quote` | narrow, high-contrast, same tall, tight look |

The token set has no slot for a second display face, so the two extra faces live in theme
variables `--eightsleep-figures` and `--eightsleep-quote`. Blocks read them as
`var(--eightsleep-figures, var(--typeface-display))`, so under any other theme they fall back
to that theme's display face. (Decision; the tokens themselves are untouched.)

## Section map

Heights are the original's at 390 / 1440.

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | fixed header: promo strip + nav | `eightsleep-header` | fixed, 42 + 64px | strip; wordmark, log in, cart, menu | strip; wordmark, 3 links, log in, cart, small white CTA | — | strip tucks up 42px after ~400px of scroll |
| 1 | hero (inferred above 900px) | `eightsleep-hero` | content 1037 / ≈82svh + 685px (1421 at 900, 1237 at 675) | mono "NEW", huge title, product, lede, price, white button, 4.5 rating | same, centered, product 795×1023 floats over the title | sky image (cover, whole hero), product video 418×538 / 795×1023 (contain) | load: sky veil + dark fade 1.45s, title fades 2s, copy 0.4s; scrubbed: copy rises 224px, product 400px |
| 2 | film band | `eightsleep-film` | **min(640px, 80svh)** (640 at 900, 540 at 675; 506 at 633) | centered 2-line title, white button with play icon | one-line title, button | video loop, full bleed | small play toggle bottom right (decorative) |
| 3 | "What's the Pod?" system cards | `eightsleep-system` | content 1457 / 890 | heading; 3 stacked cards (media 350×263 r16) with title + text below; black button | heading; expanding row: one wide card 615 + two 333 (454 tall, r24), pill tag, +/× toggle, caption over a bottom scrim; black button | 3 media | reveal heading; click expands a card (flex-grow 0.5s) |
| 4 | Core unit feature with rotating list | `eightsleep-hub-tabs` | content 711 / 800 | mono eyebrow + progress ring; tab row with underline; media 350×243; subhead, body, full-width black button | left: eyebrow, 4 stacked 44px lines (active black, rest pale grey), ring, subhead 28px, body, 426px black button; right 640×640 media r24 | 1 per tab | auto-advance every 6s with a ring filling; media crossfade |
| 5a | "For the life you live" scenes (inferred) | `eightsleep-life` | content ≈2000 / ≈2400, partly window-sized | heading, sub, link; 3 stacked media (350×406/406/420, r20) each with a glass widget card | heading; 3 zig-zag scenes (621×720, 388×450, 720×726) each with a floating widget card | 3 | reveal heading; widgets fade in and drift 180px → -180px scrubbed |
| 5b | moment cards | `eightsleep-moments` | content ≈1730 / ≈1165 | 3 stacked 350×320 image cards, caption over scrim; black button | expanding row 608 + 332 + 332, 439 tall, r20; black button | 3 | click expands |
| 6 | night carousel | `eightsleep-night` | content 790 / 1020 | heading; one 310px glass card with neighbours peeking; dots; arrows; footnote | heading; 520px glass cards, centre one bright, neighbours cut by the edges | night-sky image (cover), a 274×158 widget per card | reveal heading + cards; slide on arrows/dots (0.5s) |
| 7 | solo sizes, staggered pair | `eightsleep-solo` | content 1301 / 1302 | heading, sub, black button; 2 stacked 350×450 cards | heading; 2 tall cards side by side (652×837 / 652×836), left one lower; white captions 28px | 2 | reveal heading; left card drifts 209px → -209px scrubbed |
| 8 | research | `eightsleep-research` | content 1909 / 1099 | eyebrow, heading, sub; grey panel with 3 stacked benefit items; 3 stacked navy study cards | panel with 3 columns (405×291 media r8, 28px title, 14px stat); 3 navy cards 421×168 r20 | 3 | reveal heading |
| 9 | advisors (black) | `eightsleep-advisors` | content 1161 / 947 | eyebrow, heading; 2 stacked grey cards 350×426 | 2 grey cards 640×560 r12, name + role top-left, portrait bottom-centre | 2 portraits | reveal heading |
| 10 | reviews (black → navy) | `eightsleep-reviews` | content 867 / 979 | 4.5 + stars + count, heading, a timeline curve, white button; marquee of review cards | same, wider | photos in big cards, avatars | reveal; marquee loop; card hover shadow + photo scale 1.025 |
| 11 | athletes (light grey) | `eightsleep-athletes` | content 906 / 958 | heading; logo row (marquee); card marquee 309×466 r16 | heading; 4 logos with dividers; card marquee | 1 photo per card | reveal; marquee loop |
| 12 | closer | `eightsleep-closer` | content 560 / 899 (image-shaped) | 40px title, sub, bold price, white button over a photo | 64px title near the top | full-bleed photo | — |
| 13 | guarantees + shipping note (inferred) | `eightsleep-guarantees` | content 972 / 522 | 3 stacked items (icon, title, text); note | 3 columns; centered note | — | items rise 24px + fade, staggered |
| 14 | footer (black) | `eightsleep-footer` | content 1798 / 1285 | wordmark + region; payment chips; newsletter; accordion columns; contact + socials; copyright; footnotes | wordmark + chips row; newsletter + 4 link columns; contact + socials; rule; copyright; footnotes | — | accordions on phones |

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header | scrubbed (short) | promo strip + nav translateY 0 → -42px | over 300–420px of page scroll | CSS `animation-timeline: scroll(root)` with a px range |
| hero sky | load | dark veil opacity 1 → 0, light veil 0.92 → 0.34 | 1.45s | CSS keyframes, fill both |
| hero title | load | opacity 0.48 → 1 | 2s | CSS keyframes |
| hero copy + "NEW" | load | opacity 0 → 1 | 0.4s (after a short delay) | CSS keyframes |
| hero copy | scrubbed | translateY 0 → -224px | page scroll 0 → 1350px (lg only) | CSS `scroll(root)` timeline |
| hero product | scrubbed | translateY 0 → -400px | page scroll 0 → 1350px (lg only) | CSS `scroll(root)` timeline |
| every section heading (eyebrow, title, sub) | entering view | opacity 0 → 1, rise 18px | ~220px of scroll | CSS `view()` timeline, `entry 0px → entry 220px`, staggered 40px per line |
| life widgets | entering view + scrubbed | opacity 0 → 1; translateY 180 → -180px | across the scene's pass through the window | CSS `view()` timeline, cover range (lg only) |
| night cards | entering view | opacity 0 → 1 | ~220px | CSS view() reveal |
| solo left card | scrubbed | translateY 209 → -209px | across its pass | CSS view() timeline, cover range (lg only) |
| reviews track | loop | translateX, continuous | ~80s per lap | CSS keyframes marquee, paused on hover |
| athletes track (+ phone logo row) | loop | translateX, continuous | ~60s per lap | CSS keyframes marquee |
| guarantees | entering view | opacity 0 → 1, rise 24px, staggered | ~220px | CSS view() reveal |
| hover: buttons | hover | background dims | 0.2s ease-out | Tailwind transition |
| hover: review cards | hover | shadow 4px 4px 12px /25%, photo scale 1.025 | 0.25s | Tailwind transition |
| hover: expand cards | click | flex-grow, caption text appears | 0.5s cubic-bezier(.4,0,.2,1) | React state + CSS transition |
| hub list | loop (timed) | active line changes, ring fills | 6s per item | React state + CSS ring keyframes |
| carousel | click | track slides | 0.5s cubic-bezier(.4,0,.2,1) | React state + CSS transform transition |

All of it is off under `prefers-reduced-motion: reduce` (marquees become scrollable rows; the
hub list stops auto-advancing).

## Media slots → placeholders

Every photo and video becomes a token-coloured surface of the same size, shape and radius:
`bg-muted` on light, a soft `glow` gradient for the hero sky, a black→navy gradient for the
night sky, a low-contrast `foreground/10` surface on dark. The product video in the hero is a
soft radial glow of the product's 795×1023 frame (a box would cover the copy, and the
original's video is `contain`, so its frame is mostly transparent). Widget images inside
the night cards are glass tiles. Portraits, avatars and athlete photos are plain surfaces.
Partner logos are plain-text names of fictional teams; payment marks are plain-text chips.

## Decisions

- Faithful mode is **light**; dark bands force `.dark` on themselves (as clerk does), so the
  dark palette is the site's night palette. In dark mode the light bands go black too.
- Inline mock UI in the original (the snoring chart inside a card, the sleep-score dial in
  the app photo, the 68° dial in the carousel) is part of their artwork: left to the media
  slots, not rebuilt from divs. The life widgets are kept as plain typographic glass cards
  (label, big figure, caption), which is layout, not a drawing.
- The reviews curve (a thin line with dots and a mono time label) is kept as a simple
  decorative SVG stroke in `currentColor`.
- No smooth-scroll library: the capture saw none.
- Section 5 of the capture ("For the life you live") is one section in the original; it is
  split into two blocks (scenes, moment cards) because the card row is useful alone.

## Comparison round 1 (ours vs original, 390 and 1440)

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | 1075 vs 1037 tall | 1476 vs 1421; at the shorter window 1378 vs 1237 (stage had a min-height, so it barely followed the window); sky bottom faded to white and swallowed the review count; lede wrapped to 3 lines (original 2) | load-in + scrubbed parallax both present (-224 / -400px) | yes: stage `calc(82svh+125px)` no min, 570px on phones; sky = solid glow + white veil; lede measure 30ch |
| system / moments / solo / athletes cards | placeholders near-black, much heavier than the original's mid-tone photos | same | expand transition ok | yes: dark frames get a solid background and a mid-grey (muted-foreground/40) placeholder |
| life scenes | media invisible (placeholder = band colour); widgets overlapped the photo bottom, section 600px short | media invisible | widgets fade + drift 180 → -180px, scrubbed (matches) | yes: default placeholder is muted-foreground/25; phone widgets sit under the photo; scene gap 96px |
| hub feature | ok | grid started at 110px (centred 1349px box) instead of the 64px gutter; media radius too round | ring + crossfade ok | yes: page-width grid with the spare 91px on the right; radius lg |
| night carousel | — | no left neighbour (track started at card 1) | slide ok | yes: cards drawn three times, position snaps back to the middle copy after a wrap |
| reviews | +50px | +144px: heading on 3 lines, big gap above the button | marquee + reveals present | yes: heading measure 26ch, button gap 48px, top 56px |
| research, athletes | ok | +64 / +66px | reveals present | yes: less top padding |
| guarantees | 811 vs 972 | 417 vs 522 | li rise 24px staggered (matches) | yes: more padding and gaps |
| footer | 1408 vs 1798 (original's footnotes are much longer) | ok | — | partly: bottom padding 170 / 145px like the original; the rest is footnote length |
| header | — | — | promo tuck 0 → -42px present | — |
| overflow | fits at 360/768/1024 | | | |

## Comparison round 2

Heights now (ours vs original, px): hero 1421 vs 1421 at 1440 and 1236 vs 1237 in the shorter
window, 1019 vs 1037 at 390; film 640/540 vs 640/540; system 878 vs 890; hub 800 vs 800;
life + moments 3187 vs 3165; night 1016 vs 1020; solo 1287 vs 1302; research 1084 vs 1099;
advisors 980 vs 947; reviews 1026 vs 979; athletes 933 vs 958; closer 899 vs 899; footer
1236 vs 1285. Page 15853 vs 15928 at 1440. No horizontal overflow at 360/768/1024.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | ok (sky reads blue to pale, review count legible) | ok, height follows the window like the original | load-in, -224/-400px parallax | — |
| system / moments | phones show the first card as open (×); the original shows + on phones | open card's title wrapped to two lines (original one) | expand ok | title measure 30ch; phone toggle state left as is (one state for all widths) |
| night | ok | neighbours on both sides, centre card bright (matches the original crop almost exactly) | loop slide | — |
| solo | ok | button now visible at rest like the original; left card offset +209px at rest | drift 209 → -209px | — |
| all headings | | | fade + 18px rise, staggered, view timeline | — |
| re-theme | `eightsleep-system` and `eightsleep-reviews` under `sample-ember`: serif headings, terracotta buttons, warm-brown night band, cards and scrims intact | | | — |

Left as is: the hero above 900px, the life scenes and the guarantee row are reconstructed
(the original's captures hid them), so they can't be compared pixel for pixel; the footer is
shorter on phones because our footnotes are shorter.

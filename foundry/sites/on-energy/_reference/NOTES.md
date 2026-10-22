# on-energy — recreation notes

Original: https://www.on.energy/ (landing page only; precaptured, no other pages asked for).
Fictional stand-in: **Sorrel Power**, maker of **Keel**, a medium-voltage power buffer for
compute campuses. All copy, names, customers, quotes, headlines and figures are invented.

## Design language

- **Industrial dark with a signal yellow.** Most of the page is black (`#000`) or near-black
  (`#202020` panels, `#323232` raised surfaces). One loud signal yellow (`#fff313`) is used in
  big flat fields (the manifesto panel, the footer card, the hero promo card) and small
  controls (logo badge, CTA, arrow tiles). Two sections flip to off-white (`#eee`) with black
  text (testimonials, news), so the page alternates dark → yellow → dark → light → dark →
  light → yellow.
- **Greys do the hierarchy:** off-white `#eee` text, silver `#afafaf` for copy on dark,
  mid-grey `#7d7d7d` for quiet copy, arsenic `#4b4b4b`, light-grey `#cdcdcd` for row hover on
  light.
- **Type:** one neo-grotesk (Univers Next Pro) almost always at **weight 300**, big and
  tight: display 64/72 (−2.56px) in the hero, 48/56 (−1.92px) for section statements, 36/42
  (−1.44px) for headings, 24/28 for card titles, 16/22 body, 120px **weight 100** for stat
  numbers. A grotesk mono (ABC Monument Grotesk Mono) at 12px for labels, dates and button
  text. On phones: 37/44, 29/33, 20.8/25, 14.5/20.
- **Grid:** 2 columns with a 1.6vw gutter and 4.27vw (≈ 36px at 1440, 17px at 390) outer
  gutter. Almost every section puts its heading in the left column and its content in the
  right column starting exactly at 50% (x = 728 at 1440). Lots of empty left column.
- **Shapes:** small radii on controls (4–6px), 16px on the promo card and expertise card,
  **56px** on the stat cards (25px on phones), 32px on news images, 24px on the footer card.
  No shadows except a yellow glow on button hover. Glassy translucent nav pills
  (off-white at 20% over the content, blurred).
- **Rhythm:** sections are tall and airy: ~120px top padding before a heading, content
  sections 670–960px tall at 1440. Two sections are exactly one window tall (hero,
  performance) and one is a pinned 800vh scroll scene.

## Type

| Original | Class | Ours | Why |
|---|---|---|---|
| Univers Next Pro 100/250/300/400 | neo-grotesk, normal width, large x-height, tight apertures | **Hanken Grotesk Variable** (already in the repo) | an open neo-grotesk with Univers-like proportions, normal width and a large x-height; the variable axis goes down to 100 for the thin stat numbers and has a true 300 for the light body/headings |
| ABC Monument Grotesk Mono 400 | grotesk-styled monospace, low contrast | **DM Mono 400** (already in the repo) | low-contrast grotesk mono with a similar 12px texture; Monument Grotesk Mono is closed |

No new packages (Hanken Grotesk, DM Mono and lenis are already in package.json).

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | header | on-energy-header | fixed, 28px controls 16px from top | one yellow pill top-right: wordmark · divider · grid menu button | yellow logo badge · 5 equal glass pills (dropdown chevrons) · yellow CTA, 4px gaps across full width | — | fixed; pills hover to off-white with black text 0.2s; CTA hover black/yellow 0.3s |
| 1 | hero | on-energy-hero | **100svh** | headline 37/44 mid-screen, yellow promo card full width at bottom | headline 64/72 left at mid-height; lede bottom-left; yellow promo card 346×118 bottom-right with thumb | full-bleed video (cover); 96×96 promo thumb | media drifts down 0→300px and a black veil fades in as the hero leaves (scrubbed) |
| 2 | manifesto | on-energy-manifesto | content (~890) | 29/33 statement, 17px gutter | 48/56 statement, ~1200px measure | — | panel opens from an inset rounded frame to full bleed while entering; lines light up 0.15→1 scrubbed |
| 3 | showcase (pinned) | on-energy-showcase | **800svh** wrapper, sticky 100svh scene | title 29px, glass button, copy bottom | title 48/56 at mid-height left, glass button, copy 16/22 bottom-left (first words white, rest grey) | full-window 3D scene (camera move) | pinned; title letters blur + fade out one by one scrubbed; button fades; media slowly pulls back (scale) |
| 4 | features | on-energy-features | content (779 / 1283) | 4 stacked items | 2×2 grid in the right half, left half empty | 4 small dotted icons (lucide, dotted stroke) | each item fades in 0→1 scrubbed as it enters |
| 5 | testimonials | on-energy-testimonials | content (684 / 845) | heading, quote, wordmark, name/role, black button, arrows right | "Testimonials" 48px left; quote 24/28 right column; arrows at far right | customer wordmark (text) | heading letters blur in; prev/next swaps quote; button fill hover |
| 6 | expertise | on-energy-expertise | content (670 / 680) | eyebrow, heading, lead, card | eyebrow + 36px heading left; lead 20px + charcoal card right | 190×190 card image (radius 9) | eyebrow scrambles in; heading letters blur in; card fades; card hover → yellow 0.2s |
| 7 | performance | on-energy-performance | **100svh** | eyebrow, title + copy 29px, button; canvas behind | content in right column from top 120px; canvas full-bleed | full-window canvas (glow streaks) | eyebrow scramble; heading letters blur in; copy/button fade in |
| 8 | stats | on-energy-stats | content (955 / 1685) | 4 stacked cards 356px tall, radius 25 | 2×2 cards 676×450, radius 56 | map illustration in card 4 | cards rise + fade in as they enter |
| 9 | news | on-energy-news | content (1809 / 2491) | heading, intro, 2 stacked cards, rows stacked (title/date/read more) | heading, gap, intro, 2 cards side by side (image 676×450 r32 + meta), 5 rows title · date · read more | 2 news images 3:2 | heading blur-in; cards/rows rise in; row hover: light-grey fill, title →0.8rem, link ←0.8rem |
| 10 | footer | on-energy-footer | content (873 / 1299) | full-width yellow card, rounded bottom 25px | yellow card inset 16px, radius 24, over a dark circle-grid pattern; tagline + button left, big link list right, giant wordmark bottom-left | — | link rows hover; button hover |

## Motion inventory

| section | trigger | what changes | timing / easing | ours |
|---|---|---|---|---|
| page | smooth scroll | Lenis | — | `on-energy-smooth-scroll` (lenis), hydrate load |
| header | fixed | stays on top over every section | — | `fixed inset-x-0 top-0` |
| header pills | hover | bg off-white/20 → off-white, text → black | 0.2s ease | Tailwind `transition-colors duration-200` |
| header CTA | hover | yellow → black bg, yellow text | 0.3s | Tailwind |
| hero | scrubbed (leaving) | media translateY 0 → 300px; veil opacity 0 → 1 | linear with scroll, exit range | CSS `view()` timeline, `animation-range: exit` |
| manifesto | scrubbed (entering) | panel from inset frame (8px, rounded) → full bleed | entry 0–60% | CSS `clip-path` on a view timeline |
| manifesto | scrubbed (entering) | lines opacity ~0.15 → 1, top to bottom | over ~1 screen | each word on its own view timeline → words on one line light up together |
| showcase | pinned | 800vh wrapper, scene sticky | — | `sticky top-0 h-svh` in a `h-[800svh]` wrapper |
| showcase | scrubbed | title letters opacity 1→0 + blur 0→8px, staggered left to right; button fades | first ~45% of the pin | named view timeline on the wrapper, per-letter `animation-range` offsets |
| showcase | scrubbed | media scale 1.2 → 1 (camera pulls back) | whole pin | same timeline |
| features | scrubbed (entering) | item opacity 0 → 1 | entry 0 → cover 30% | CSS view timeline per item |
| headings (testimonials, expertise, performance, news) | entering view | per-letter opacity 0→1, blur → 0, staggered | ~0.05s per letter | `on-energy-blur-text`: per-letter view timeline with range offsets |
| eyebrows (expertise, performance) | entering view | label scrambles through random glyphs then settles | ~0.6s | `on-energy-eyebrow` (JS, IntersectionObserver; static HTML shows the final text) |
| expertise, performance, news | entering view | copy, cards, buttons fade/rise in | entry → cover 25% | CSS view timeline (`on-energy-reveal` class in each block's css) |
| stats | entering view | cards rise 60px + fade | entry → cover 30% | CSS view timeline |
| buttons | hover | yellow fill slides in from the left (translateX −100% → 0), text → black, yellow glow 20px | 0.6s, expo-out cubic-bezier(.16,1,.3,1) | `on-energy-button`, Tailwind group-hover |
| expertise card | hover | bg charcoal → yellow; title black; copy arsenic; arrow tile black/yellow | 0.2s | Tailwind group-hover |
| news rows | hover | bg light-grey; title +0.8rem; "read more" −0.8rem | 0.2s | Tailwind group-hover |
| hero promo card | hover | brightness 0.95 | 0.2s | `hover:brightness-95` |

Not rebuilt: the hero video, the 3D scene and its camera path, the canvas glow streaks, the
dot-matrix arrow-icon animation ("stream" sweep) inside buttons (we keep the fill sweep and
the glow), the map's pulsing dots.

## Media slots

| slot | original | placeholder |
|---|---|---|
| hero background | full-bleed looping video, cover, 100svh | `bg-muted` with a soft top-to-bottom gradient of `foreground/10`, full bleed, drifts with the scroll |
| hero promo thumb | ~96×96 product image, radius 9 | `bg-primary-foreground/10` square, radius 9 |
| showcase scene | full-window 3D scene (scroll-driven camera) | full-window `bg-muted` with a soft radial light from the theme's foreground (a floor light, not a product) |
| performance canvas | full-window WebGL glow streaks | full-window black with a soft radial `glow` haze in the lower left |
| expertise card image | 190×190, radius 9 | `bg-muted` square |
| stats card 4 | dotted map of the Americas | `bg-muted/40` rounded slot at the same place and size |
| news images | 676×450 (3:2), radius 32 | `bg-muted` 3:2, radius 32 |

## Decisions

- **Faithful mode is dark** (`.dark`). Sections that are light on the original use
  `bg-foreground text-background`, the yellow ones `bg-primary text-primary-foreground`, the
  `#202020` ones `bg-card`, so in light mode the whole page inverts in the same spirit.
- **Dotted icons:** the original's dot-matrix icons are their own set; ours are lucide icons
  drawn with a dotted stroke (`stroke-dasharray`), which keeps the dotted-texture feel
  without copying their glyphs.
- **Testimonials carousel** keeps a small React state for prev/next (hydrate visible).
- **Logo:** a plain text wordmark "sorrel" in the display font, bold; no logo shapes.
- **Footer's giant logo** becomes the wordmark set very large.
- Stats "10+" superscript dots become a plain "+" in the same superscript slot.

## Round 1 (dark, 390 + 1440)

Note on captures: the section crops are cut from a screenshot taken at scroll 0, so blocks with
scroll-driven reveals show their "before" state there (faint manifesto, empty features). Those
were compared on the scroll frames instead. The first capture also ran before the running
gallery had picked up our new files (no CSS for our classes) and was redone after touching
`apps/gallery/src/catalog.ts`; captures of ours ran with Vite's HMR socket muted (a temp copy
of capture.mjs) because other sessions' edits kept reloading the page mid-capture.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| theme | gutter 17px ✓ | gutter was 4.27vw = 61px, original 36px | — | yes: `--page-gutter` 2.5vw from 1024px |
| header | — | badge, pills, CTA stay yellow/translucent over the yellow and light sections; the original retints them (black badge/CTA, darker pills) | tone switch missing | yes: header follows `data-on-energy-tone` on the section under it |
| hero | ✓ height, card, headline | ✓ | drift + veil ✓ | — |
| manifesto | ✓ 912 vs 904 | ✓ 888 vs 890 | panel was already full bleed when it filled the window; original still shows the inset frame there. Lines darkened too early | yes: open over cover 0–75%, words over cover 8–48% |
| showcase | ✓ 800svh pinned | ✓ title 48px, button, copy | letters blur away by ~40% of the pin ✓, pull-back ✓ | — |
| features | ✓ 1272 vs 1283 | ✓ 796 vs 779 | fade-in ✓ | — |
| testimonials | 784 vs 845 (short) | 662 vs 684 | heading blur ✓ | yes: more bottom padding on phones |
| expertise / performance / news headings | — | — | heading letters still blurred when the heading was well inside the window | yes: shorter, earlier stagger |
| stats | ✓ 1674 vs 1685, overlap under performance ✓ | ✓ 954 vs 955 | rise-in ✓ | — |
| news | 2548 vs 2491 | ✓ 1820 vs 1809 | row/card rise ✓ | accepted (our titles wrap one line longer) |
| footer | wordmark smaller than the original's full-width mark | 798 vs 873; wordmark ~100px tall vs 190; tagline wrapped to 3 lines | — | yes: wordmark 11rem / 9.4rem, more room above it, shorter tagline |
| overflow | 360 / 768 / 1024 fit | | | — |

## Round 2 (dark, 390 + 1440)

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | ✓ | ✓ badge/CTA turn black-and-yellow over the manifesto (checked with a probe at scroll 1100; the capture frame fell mid-transition) | tone switch ✓ | — |
| manifesto | ✓ | ✓ inset frame still visible when the panel fills the window, as on the original | ✓ | — |
| headings | ✓ blur-in now done while the heading is in the lower third of the window | ✓ | ✓ | — |
| testimonials | 832 vs 845 ✓ | 662 vs 684 ✓ | ✓ | — |
| footer | 1237 vs 1299 (our links wrap the same; wordmark now full width) | wordmark 11rem ≈ the original's 190px mark; card was 620 vs 693 tall | — | yes: card min height 43.3rem on desktop |
| overflow | 360 / 768 / 1024 fit | | | — |

Re-theme check: `on-energy-expertise` under sample-ember (light) and `on-energy-stats` under
sample-ember (dark) keep their layout and pick up the other palette and fonts;
`on-energy-news` in our light mode turns into a black band as intended (inverted section).

Stopping here: each section pair reads as the same design (apart from content and the media
placeholders), and every motion row shows up in ours' Motion list (hero drift + veil, manifesto
clip + line reveal, pinned scene with letter blur-out and pull-back, feature fades, blur-in
headings, card rises, header retint, hover fills).

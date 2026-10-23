# ouraring — recreation notes

Original: https://ouraring.com/ (precaptured 2026-10-23; landing page only, no other pages asked
for). Fictional stand-in: **Tessel**, a smart-ring company; its ring is the **Tessel Loop**. All
copy is ours.

## Design language

- **Palette roles.** A warm, paper-like cream page (247,241,232) with a slightly darker sand
  (239,230,219) for the hero ground and the testimonial cards. Type is a warm dark grey
  (74,71,65), never black; the same grey fills the pill buttons, the tag chips and the carousel
  arrow. One sparing electric blue (42,114,222) only on the hero's "Shop" button. A near-black
  warm ink (28,27,26) carries the press band and the footer, where type turns cream and
  secondary type a stone grey (168,165,160); the footer is a soft diagonal gradient from a
  lighter ink (≈45,43,40) into the ink.
- **Type scale.** Two voices: a light, narrow, high-contrast editorial serif for every big
  heading (80 / 68 / 56 px at 1440; 48 / 56 / 40 px at 390), set tight (−0.03 to −0.05em,
  line-height 1.1), and a Swiss neo-grotesk for everything else: 24px/30 ledes, 20px/30 body,
  16px/24 UI, 12px tags. Headings on photo cards are the grotesk at 40px light (28px phones).
  Eyebrows are 16px bold uppercase with ~0.08em tracking.
- **Spacing rhythm.** 64px side gutter at desktop (content 1312 of 1440), 24px on phones.
  Sections breathe with ~80px vertical padding (40px phones); between intro, reel and stats
  the gaps are larger (≈140px) because each block pads itself.
- **Grid.** 12-column feel, but the page is mostly centred single columns (intro, stats), a
  3-up grid (testimonials), a 40/60 split (feature: text left, picture bleeding off the right
  edge) and a 60/40 split (press: big featured card left, three stacked cards right).
- **Shapes.** Pills (fully round) for every button and the cart circle; 8px corners on cards
  and photo cards, 4px on tag chips, 24px on the feature picture's left corners only (it
  bleeds right), 40px on the press band's bottom corners where it tucks over the footer.
- **Depth.** Flat. No shadows; depth comes from photography, a dark gradient at the bottom
  of photo cards, and the frosted translucent mobile nav pill.

## Type

| Original | Kind | Width / x-height | Ours | Why |
|---|---|---|---|---|
| AkkuratLL (300, 400; 700 eyebrows) | Swiss neo-grotesk, straight terminals, double-storey a, single-storey g | normal width, large x-height, open default spacing | **Public Sans Variable** | the closest open neo-grotesk on those traits: neutral Franklin-ish skeleton, double-storey a / single-storey g, large x-height, and a 100–900 axis so the 300 light card titles and 700 eyebrows both exist |
| Editorial New (200, 300) | high-contrast editorial serif, light display weights | narrow, small-ish x-height | **Instrument Serif** | a narrow, sharp, high-contrast display serif; Newsreader/Fraunces are much wider. It has one weight (400), which reads close to Editorial New 200–300 at display sizes because its strokes are thin |

## Section map (1440 px page 6614 tall; 390 px page 7488 tall)

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | announcement strip + header | `ouraring-header` | 52 + 90px (content) | 52px strip; nav becomes a frosted pill fixed at the bottom (logo, cart circle, menu circle) | 52px cream strip, then a 90px bar over the hero: wordmark left, 4 nav links with chevrons centred, 48px cart circle right; sand→transparent gradient behind | — | sticky; bar background fades in once scrolled (400ms); bar hides on scroll down, returns on scroll up (inferred from the scroll frames, where it never shows) |
| 2 | hero | `ouraring-hero` | **window** (100svh, media fills it) | photo fills the window; copy centred at the bottom: 48px serif title on 2 lines, 20px lede, blue pill | photo fills the window; copy block left at x=64, vertically centred: 80px serif title on 2 lines, 20px lede (≈470px wide), blue pill 48px | 1440×900 cover (390×844 cover) | none seen |
| 3 | intro | `ouraring-intro` | content (~420px) | 56px serif on 3 lines, 24px lede, two pills stacked | centred 68px serif on one line, 24px lede ≈750 wide, two pills side by side | — | heading/lede/buttons fade + rise 20px on entering view (500ms) |
| 4 | category reel | `ouraring-reel` | content (~830px) | one 312×392 card + peek of the next, snap scrolling; divider; arrows right | 493×689 cards, gap 24, running off the right edge; hairline; ← and dark → circle right-aligned | 6 photos (493×689 / 312×392 cover) | photo inside each card scrubbed translateY −138→69px (−78→39 phones); first card's copy fades in |
| 5 | stats | `ouraring-stats` | content (~1100px) | 56px serif on 4 lines, 24px lede, small note, pill; phone-fan picture full bleed | centred 68px serif on 2 lines with superscript, 24px lede, 14px note, pill, then a 1248×644 contain picture | 1248×644 contain (480×247 phones, wider than the screen) | text fades + rises 20px (staggered); picture blurs in (filter + opacity, 600ms) |
| 6 | testimonials | `ouraring-testimonials` | content (~430px cards) | cards stacked, full width, gap 24 | three 418×426 sand cards, gap 30, padding 40: dark tag chip, small quote mark, 24px/30 serif quote, 60px avatar + 20px semibold name | 3 avatars (60px circles) | each card fades + rises 20px (500ms) |
| 7 | feature ("new features") | `ouraring-feature` | content (789 / 777) | picture first (366×275, bleeds right, 24px left corners), then eyebrow, 40px serif, 20px body, pill | text left (≈475 wide, vertically centred), picture right 839×629 bleeding to the window edge, 24px left corners, dark ground | 839×629 cover | text block fades + rises 20px; picture blurs in |
| 8 | press band | `ouraring-news` | content (906 + 237) | eyebrow; featured card (342×565) stacked; then a snap carousel of cream cards (293×387) with "1 / 3" and dots | dark ink band: eyebrow, featured photo card 775×710 (photo, bottom gradient, badge, 40px grotesk headline, cream "Read" pill) left; three cream cards 477×230 stacked right (24px/30 headline, dark arrow circle) | featured photo 775×655 cover | featured photo scrubbed translateY −164→34px |
| 9 | footnotes | part of `ouraring-news` | content | same, 14px | hairline then two 14px footnotes with superscripts; band's bottom corners round 40px over the footer | — | — |
| 10 | footer | `ouraring-footer` | content (652) | wordmark, payment chips + caption, link columns 2-up, newsletter, legal | big wordmark left + payment chips right; serif newsletter line + email field left; four link columns; hairline; legal links, copyright, language pill | — | none (payment row opacity fade is negligible) |

## Motion inventory

| section | trigger | what changes | timing / easing | ours |
|---|---|---|---|---|
| header | scroll | bar background fades in once the page is scrolled | 400ms ease | `useEffect` scroll listener toggles a state class; Tailwind `transition-opacity duration-400` |
| header | scroll direction | bar slides up out of view going down, back going up (inferred) | ~300ms | same listener, `translate-y` transition; off under reduced motion (bar just stays) |
| intro | entering view | opacity 0→1, rise 20px, staggered | 500ms ease-out | `ouraring-reveal` component: CSS `animation-timeline: view()`, range `entry 0px → entry 200px` (+40px per step) |
| reel | scrubbed | photo inside card translateY −138→69px (desktop), −78→39px (phones) | linear | CSS view timeline named on the section (`view-timeline-name`), read by each photo (the track is a horizontal scroll container, so an anonymous `view()` would freeze) |
| reel | entering view | card copy opacity 0→1 | ~1s | reveal component (fade) on each card's caption |
| stats | entering view | heading, lede, note, button fade + rise 20px, staggered | 500ms | reveal component |
| stats | entering view | picture blur(…)→0 + fade | 600ms | reveal component `kind="blur"` |
| testimonials | entering view | each card fade + rise 20px, staggered | 500ms | reveal component, stagger per card |
| feature | entering view | text block fade + rise 20px; picture blurs in | 500 / 600ms | reveal component |
| press | scrubbed | featured photo translateY −164→34px | linear | CSS `view()` on the card, photo oversized so no gap shows |
| buttons | hover | dark pill 74,71,65 → 28,27,26; blue → darker blue; cream pill → stone grey | 150ms cubic-bezier(.4,0,.2,1) | `hover:brightness-*` with `transition-[filter]` (works under any theme) |
| cart circle | hover | faint fill + border darkens | 300ms | `hover:bg-foreground/10 hover:border-foreground` |
| photo cards | hover | photo scales 1.05 | 500ms | `group-hover:scale-105` |
| press card arrows | hover | arrow nudges up | 150ms | `group-hover:-translate-y-0.5` |

Motion inside media (the hero video/photo, the phone screens) isn't rebuilt.

## Media slots → placeholders

All via the shared `ouraring-media` component: a token-coloured surface with the slot's size
and corners; a soft warm gradient (`muted` → `secondary`, or `card` → `muted` on dark) so the
parallax moves visibly. Photo cards also carry the original's bottom-dark gradient (it's part
of the card design, not the photo).

- hero photo: full window, cover → sand-to-muted gradient filling the hero
- six reel photos (493×689 / 312×392) → muted gradient, oversized for the parallax
- phone-fan picture (1248×644, contain) → a rounded muted panel at that aspect
- feature picture (839×629, 24px left corners, ink ground) → dark muted panel
- featured press photo (775×655) → muted gradient under the dark gradient
- three avatars (60px circles) → muted circles

## Decisions

- **Mobile nav pill at the bottom.** The 390 capture never shows a top bar; the only header
  is a frosted pill (logo, cart, menu) that appears mid-page in the section crops, which is
  where a fixed element lands in a full-page shot. Built as a fixed bottom pill on phones.
- **Header hide-on-scroll** is inferred: the header is "sticky for 12 half-screens" but
  absent from every desktop scroll frame.
- **Payment marks** are third-party logos: replaced by white chips holding lucide icons
  (card, wallet, phone, bank…), with an accessible label prop.
- **Gutter and section padding** change at 64rem in the theme (`--page-gutter` 24→64px,
  `--section-y` 40→80px), so blocks stay token-only.
- **Hover darkening** is done with a brightness filter, so the dark pill, the blue pill and
  the cream pill all darken as in the original without a second colour token.
- **Press band rounding.** The band's bottom corners round over the footer; the footer has an
  `overlap` prop that tucks it 40px underneath (page.tsx turns it on).
- The cookie banner in every capture is the site's consent tool, not design: not rebuilt.

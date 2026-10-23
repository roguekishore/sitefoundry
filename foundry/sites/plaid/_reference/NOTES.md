# plaid — recreation notes

Original: https://plaid.com/ (captured in advance, landing page only; no other pages asked for).
Fictional stand-in: **Halyard**, a financial-data network with an API (own names, copy and figures).

## Design language

- **Palette roles.** A pale, cool page (#f7faff, washed with lavender→cyan gradients) between two
  saturated **blue→aqua gradient bands** (the hero and the contact band: deep #07578c at the top
  left, bright #0e94d8 in the middle, mint-aqua #42f0cd at the bottom right). Ink is a navy
  (#02294b) for headings, near-black (#111112) for buttons, a blue-grey (#5c7695) for the
  second half of card titles. Dark panels: navy #00172e (AI band, footer), indigo #0d0d3f (API
  band) with a periwinkle 70px glow, #0c1116 code window. One **rainbow** (lime → teal → cyan →
  periwinkle → pink → yellow) rims buttons, the form card and hovered product cards. Purple
  #6748d8→#b14edb gradient for the big stat figures. Lavender #eaddfd for the privacy pill.
- **Type scale (1440 / 390).** h1 76/40px, medium weight, tracking −3.5px, gradient text
  (lime → teal → white). h2 70/30px (one 60px), line-height ~1.1. Card titles 26/20px with a
  600-weight lead-in and a 500-weight blue-grey rest. Story titles 30/18px. Body 24px/36 grey on
  the network section, 16px elsewhere. Buttons 20px (lg, 56px tall) / 16px (md, 38px tall).
  Stat figures: a light high-contrast display serif 70/40px.
- **Spacing rhythm.** Page width 1246px (97px gutters at 1440), 26px gutter at 390. Sections
  are separated by very large gaps (140–190px at 1440, ~100px at 390); grid gaps 24px.
- **Shapes.** Everything is pill-shaped or very round: buttons and nav rounded-full, cards 24px,
  big bands 24–40px, form card 40px, inputs 6px, footer's top corners 40px.
- **Depth.** Soft long grey shadows under the notification cards and code window; a coloured
  glow under the API band; the nav is a translucent white pill with blur.

## Type

| original | classification | width / x-height | ours | why |
|---|---|---|---|---|
| Cern (headings, body) | geometric-leaning grotesque, round o, double-storey a, low contrast | normal width, medium-tall x-height | **Figtree** (variable) | geometric sans with the same round bowls, double-storey a, plain t and similar x-height; Inter/Geist would read too grotesque |
| Plaid Sans (buttons, nav) | neo-grotesque | normal | Figtree too | at 16–20px the difference is small; one family keeps blocks portable |
| Bowery Street (stat figures) | light high-contrast display serif (soft Didone) | normal width | **Fraunces** (variable) at weight 300, optical size max | the closest open light, high-contrast display serif that is installed; exposed as `--typeface-serif` (blocks fall back to Georgia) |
| Inconsolata (code) | humanist monospace | — | **Inconsolata** (variable, open licence) | same font |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | floating nav | `plaid-header` | 71px pill (56px at 390), fixed | logo + hamburger in a 364px pill | logo · 5 links (4 with chevrons) · Log in (outline) · Contact sales (ink + rainbow) in a 1130px pill | — | fixed; hides (fade + rise 40px) on scrolling down, back on scrolling up; link hover bg white/50 150ms |
| 1 | hero | `plaid-hero` | **window** (929 @900, 864 @844 → `100svh + ~1.75rem`) | art slot on top (~426×320 bleeding both sides), centred 40px headline, centred subtitle, two buttons side by side, logo row | text left (max ~880px), art slot 944×736 right bleeding off the bottom, logo row across the full width, announcement card peeking at the bottom left | background canvas (wave lines) → the gradient itself; portrait illustration → placeholder | logo marquee loop; button hovers |
| 2 | products | `plaid-products` | content | 60px→30px heading, button, cards stacked (334px wide, ~420 tall) | heading 2 lines + "See all" button; bento: 2 cards 611×583, 3 cards 399×619, gap 24 | each card: a full-card background picture + a UI illustration (300×~300) at the bottom → soft gradient surface + placeholder panel | hover: rotating rainbow rim fades in (inset 0→4px), arrow circle fills navy, media lifts 10px; at 390 (no hover) the card centred in view gets the same state, scrubbed with scroll |
| 3 | AI band | `plaid-feature-band` | content (707px band) | 334×600 band, text centred at the bottom | 1246×707 band, text left, vertically centred | the whole band is a picture → navy→blue gradient surface (no portrait) | button hover |
| 4 | network + stats | `plaid-network` | content | heading, body, 4 stats stacked, then 3 feed rows (notification card left + photo chip peeking right) | left half: zig-zag feed of 4 notification cards and 4 photo chips (238×83) over a wave canvas; right half: 70px heading, 24px body, 2×2 stats | photo chips → placeholders; wave canvas → omitted (decorative) | stats count up when they enter view |
| 5 | developers | `plaid-developers` | content | 334px indigo band, 30px heading, stacked buttons, code window | 1246px indigo band radius 40 with glow, centred 70px heading, subtitle, two buttons, code window 890px flush with the band's bottom | wave canvas behind → soft periwinkle glow | button hovers |
| 6 | stories | `plaid-stories` | content (+ ~330px wave area under it) | 24px heading, arrows under it, 250px cards | 48px heading + arrows right; 420px cards, gap 40, image 420×250 r20 | each story picture → placeholder | arrows scroll the track; card hover: image scale 1.05 |
| 7 | contact | `plaid-contact` | content | 30px heading, white form card full width (single column), lavender note stacked | headline left (4 lines), form card 668×552 radius 40 with rainbow rim right; lavender note pill 1246×122 under | padlock doodle in the note → omitted | submit + button hovers |
| 8 | footer | `plaid-footer` | content | mark, 2 link columns, socials, legal row | navy, 40px top corners, mark at left, 4 columns ×2 rows of link groups, socials, legal row | — | link hover colour |

## Motion inventory

| section | trigger | what changes | timing | build |
|---|---|---|---|---|
| header | scroll direction (pinned) | opacity 1→0, translateY 0→−40px when scrolling down past ~120px; back when scrolling up | ~300ms ease | small `useEffect` scroll listener sets `data-hidden`; CSS transition; `hydrate: load` |
| header links | hover | background transparent → white/50 | 150ms ease-out | Tailwind `transition-colors` |
| buttons | hover | ink: periwinkle glow 14px; soft: tint shifts green; aqua: brightness | 100–250ms ease | Tailwind transitions in `plaid-button` |
| hero logos | loop | row drifts left forever | ~40s linear | CSS `@keyframes plaid-hero-marquee` (doubled list) |
| product cards | hover / focus | rainbow conic rim fades in and rotates (10s loop), surface inset 0→4px, radius 24→20, arrow circle fills navy, media translateY −10px | 250ms ease; rim spin 10s linear | CSS in `plaid-products.css` |
| product cards (touch) | scrubbed with scroll | same active state while the card is near the middle of the view | view() `cover 35%–65%` | CSS scroll-driven inside `@media (hover: none)` + `@supports` |
| stats | entering view | figures count up from ~45% of the value | ~1.6s ease-out | `@foundry/anchorage-count` (motion `animate`) |
| stories | click arrows | track scrolls one card | smooth | `scrollBy` in a click handler, `hydrate: visible` |
| story cards | hover | picture scale 1.05, arrow circle fills | 300ms ease | Tailwind |
| canvases (hero waves, feed waves, API waves, stories waves) | loop | line art drifts | — | media: not rebuilt |

## Media slots → placeholders

- Hero portrait illustration (944×736, bottom right / 426×320 top at 390): `plaid-placeholder`
  "art" tone (periwinkle→cyan wash at low opacity over the gradient), slot prop `media`.
- Product cards: each has `media` (UI illustration, ~300×300 frame with a white/60 rim, radius 20).
  The card's own background picture becomes the soft lavender→cyan gradient surface.
- AI band picture: band surface gradient, slot `media` behind the text.
- Network feed photo chips 238×83 radius 13: placeholders.
- Stories pictures 420×250 / 250×149 radius 20: placeholders.
- Wave-line canvases: decorative, left out (noted in block notes).

## Decisions

- The hero's announcement card (peeking at the bottom left at 1440) is built as a small card
  fully inside the hero (its contents are cut off in the capture, so ours is our own).
- The stories carousel starts aligned with the page gutter instead of the original's 50px
  offset with a sliver of the previous card (an infinite-loop artefact).
- The cookie banner is not part of the design.
- Stats reuse `@foundry/anchorage-count` instead of another counter.
- Logos and partner names in the feed are plain-text fictional names with lucide icons.

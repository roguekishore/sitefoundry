# zoe — recreation notes

Original: https://zoe.com/ (captured in advance, landing page only; no other pages asked for).
Fictional stand-in: **Tillwell**, a gut-health food science company (a daily plant blend,
a fibre bar, an app, a microbe test, a podcast and a documentary series). All copy is ours.

## Design language

- **Palette roles.** A white page with deep navy ink (#2e3348) for all text. One loud brand
  colour: a pure sunflower yellow (#ffd000) for the main buttons, the logo, the podcast band
  and one bento tile; navy text sits on it. Quiet warm-cream surfaces (#f8f8f1) carry the
  product and research cards; a warmer cream (#efecd7) the snack panel and the journal card;
  a pale mint (#eef6f4) the quote cards. Three full-bleed colour bands break the white:
  yellow (podcast), deep teal-green (#2d4343, member stories) and plum (#532d3c, the
  newsletter + footer). A sage tile (#c9e1da) and a navy tile carry figures in the bento.
  Links are a soft violet (#5755ce → #312fc1 on hover).
- **Type scale.** A friendly geometric grotesk throughout: 72/1.05 semibold hero (44 on
  phones), 46/1.05 semibold section headings (-0.02em; 44 on phones, 34 for some), 40/1.05
  *light* card titles (34 on phones), 30 regular bento titles, 24 semibold eyebrows, 18/1.2
  body, 16 semibold buttons, 14 small print. A light, bookish serif for the softer voice
  (podcast heading 46, newsletter title 30, bento figures 64). A tall condensed bold for the
  documentary banner heading only.
- **Spacing rhythm.** Sections breathe on 72 px top/bottom (`--section-y` 4.5rem) and are
  separated by plain 96 px white gaps around the statement. Card padding 24, grid gaps 48
  (products) and 16 (bento, sliders).
- **Layout grid.** A 1296 px column (72 px margins at 1440, 16 px on phones). Products are a
  2×2 grid of 600 px cards; the bento bleeds edge to edge on a 6-column grid of 227 px
  squares; the research slider runs off the right edge from a 32 px inset.
- **Shapes and depth.** Flat: no shadows on cards. Radii 24 px on the big panels and product
  cards, 16 px on tiles, quote cards and explore cards, 8 px on buttons and inputs, 5 px on
  little badges, a full pill for the podcast platform tray.

## Type

| Original | Classification | Width / x-height | Ours | Why |
|---|---|---|---|---|
| Lota Grotesque Alt 1 (300/400/600) | geometric grotesk with humanist touches (round o, double-storey a, single-storey g, open terminals) | normal width, fairly large x-height | **Figtree Variable** (300–800) | the closest open face on all three traits: geometric-friendly skeleton, double-storey a / single-storey g, same x-height and width, and real Light and SemiBold weights for the 40 px light titles and 46 px headings |
| Nantes (300 / italic) | light transitional book serif | normal width, moderate x-height | **Newsreader Variable** (300) | a light, open-licence text serif with the same calm, slightly literary contrast; optical sizes keep it crisp at 30–64 px |
| Antonio 700 | condensed grotesk, all caps | very condensed, tall | **Antonio Variable** (700) | Antonio is itself an open (OFL) Google font, so we use it as is |

The snack panel's heading is an *image of text* in a heavy rounded grotesk on the original;
we set it as real text in Figtree 800 at -0.04em instead (it's design, not artwork).

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1–2 | promo strip + nav | `zoe-header` | content (74+72 / 44+72) | strip (2 lines' room) over logo + burger | strip; logo, 6 links (Products ▾), outlined Login right | — | whole header fixed to the top; link colour hover; Login fills navy on hover |
| 3 | hero | `zoe-hero` | content-sized by aspect (487 at 390 = 4:5, 716 at 1440 ≈ 2:1) | photo, centred white heading + sub at top, CTA bottom centre | photo full-bleed; heading + sub left at ~x126, vertically centred; CTA bottom centre | photo (cover) | — |
| 4 | snack spotlight | `zoe-spotlight` | content (72 pad, 658 panel) | one navy panel: heading, body, yellow button, then the photo | 24 px panel split in halves: photo on navy left, cream right with heading, body, navy button | photo of the product in hands | button hover |
| 5 | products | `zoe-products` | content | heading, 1-col cards, full-width buttons | heading, 2×2 cards of 600, 48 gaps; italic footnote | 4 product shots (600×465) | button hover |
| 6 | podcast band | `zoe-podcast` | content (844) | phone composite on top, centred text below | text left (eyebrow, serif heading, platform pill), composite right (600×700, r32) | composite image | — (the blobs are static) |
| 7, 9, 11 | white gaps | page spacing | 96 | — | — | — | — |
| 8 | statement | `zoe-statement` | content | centred heading (2 lines) + 2 paragraphs | centred heading + paragraphs (max ~900) | — | — |
| 10 | bento | `zoe-bento` | content (712 / 1392) | 2 columns of 167 squares, wide tile hidden | 6 × 3 grid of 227 squares, edge to edge, 16 gaps | 5 photo tiles + 2 composites in tiles | images fade in as the bento enters view |
| 12 | documentary banner | `zoe-challenge` | content (802 / 589) | condensed heading centred, navy button, photo below | 24 px cream panel: photo (with title logo) left half, heading + button right | photo (people + title logo) | photo fades in on entering view |
| 13 | research slider | `zoe-research` | content | heading, 1 card per screen, progress line, arrows | heading, 600 px cards from a 32 px inset running off the edge, progress line, round arrows | card photos (600×465) | swipe/arrow slider, track glides 0.3s |
| 14 | member stories | `zoe-stories` | content (664 / 876) | teal band: eyebrow, heading, 276 px quote cards in a slider, progress + round arrows | 4 quote cards in a centred row | — | quote glyphs fade in; slider on phones |
| 15 | disclaimer | `zoe-disclaimer` | content | italic small print centred | same | — | — |
| 16 | explore + newsletter | `zoe-explore` | content | plum: eyebrow, line, cards in a sideways row, then newsletter | plum: eyebrow, line; newsletter left, 3 cards (250) right; line | 3 card images (250², r16) | — |
| 17 | footer | `zoe-footer` | content | plum: follow us, 4 link groups stacked, line, © + region | follow us left; Company+Location / Legal / Resources columns; line, © + region | — | link hover |

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header | pinned | promo strip + nav bar stay fixed at the top for the whole page | — | `position: sticky; top: 0` on a wrapper of both, first in the page |
| header links | hover | navy → violet text | `all 0.2s ease` | `transition-colors duration-200 hover:text-ring` |
| Login button | hover | transparent → navy fill, text white | 0.1s ease-in-out | `hover:bg-foreground hover:text-background duration-100` |
| yellow / navy buttons | hover | fill darkens one step (#ffd000 → #e6ba41, #2e3348 → #242838) | 0.1s ease-in-out | `hover:brightness-90` with `transition-[filter] duration-100 ease-in-out` |
| bento, documentary photo, quote glyphs | entering view | images fade from a blurred placeholder to the picture (opacity of the cover layer 1 → 0) — the site's lazy image loading | `opacity 0.5s ease` | the placeholder fades in (opacity 0 → 1) on a CSS view timeline, `entry 0% → entry 80%`, in `zoe-placeholder` (`fade` prop) |
| research + stories sliders | drag / arrows | track slides one card; progress line grows | `transform 0.3s ease-in-out` | native scroll-snap row, arrows call `scrollBy` with smooth behaviour; progress bar width follows `scrollLeft` (JS, `hydrate: visible`) in `zoe-slider` |
| phone menu | click | burger opens a full-height drawer | 0.3s ease | state + CSS transition (`hydrate: load`) |
| products dropdown | hover / focus | Products ▾ opens a small menu | 0.25s ease (transform, opacity) | CSS `group-hover` / `group-focus-within`, no JS |

No smooth-scroll library and no load-in animations show in the capture.

## Media slots → placeholders

All via `zoe-placeholder` (a plain token surface, `aria-hidden`):
- hero photo → `tone="photo"` warm cream-to-grey wash under a soft dark text scrim;
- snack photo → `tone="ink"` navy surface (the original's photo sits on navy);
- product shots, research photos → `tone="soft"`, a faint ink wash in the card's top;
- podcast composite → `tone="glass"`, a pale translucent panel on the yellow band, r32;
- bento photos → `tone="photo"`; composites in the yellow / cream tiles → `tone="glass"`;
- documentary photo → `tone="photo"` in the panel's left half;
- explore card images → `tone="photo"` / `tone="sun"` (the first is a yellow cover).

## Decisions

- **Tokens.** background white, foreground navy, card = cream #f8f8f1, accent = warmer cream
  #efecd7, muted = mint #eef6f4, primary = yellow with navy text, secondary = plum with white
  text (the explore/footer band), highlight = deep teal with white text (the stories band),
  ring = the violet link colour (also used for link hover), glow = a paler yellow for the
  podcast blobs, chart-1 = sage (the figure tile). Navy surfaces (promo strip, dark buttons,
  navy tile, phone snack panel) use `bg-foreground text-background`, switched to
  `dark:bg-card dark:text-card-foreground` so they stay dark in dark mode.
- **Extra faces** are theme-only variables, `--zoe-serif` and `--zoe-condensed`, each block
  falling back to `--typeface-display` under other themes.
- **The documentary's title logo** is part of the photo on the original (an image), so it is
  inside the placeholder, not rebuilt.
- **Platform and social icons** are brand marks on the original; ours are plain lucide icons
  passed in as props.
- **The research slider** seemed to auto-advance on the phone capture (it showed card 2); we
  don't autoplay (no evidence on desktop, and it fights reading).
- **Hero height** follows the original's aspect (4:5 on phones, 2:1 from 1024 up) since the
  capture does not mark it window-sized.

## Comparison round 1

Section crops of ours are taken at scroll 0, so the fading placeholders (bento photos,
documentary photo) show blank there; checked on the scroll frames instead, where they show.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | matches (strip 74, bar 72, logo + burger) | matches (strip 44, bar 72, links, outlined login) | pinned: matches (sticky, 26 / 19 half-screens) | — |
| hero | headline wrapped to 3 lines (our copy longer) | matches: 716 tall, text left at x126, CTA bottom centre | — | yes: shorter copy |
| spotlight | 943 tall vs 676: the original shows no pitch on phones, only headline + button over the photo | matches; pitch reads lighter than Lota's | — | yes: pitch hidden below lg, semibold; phone padding pt-4 pb-12; 16:10 photo from sm |
| products | matches (1-col, 34px light titles, full-width buttons) | matches (2×2 of 600, 48 gaps, badges) | button hover | — |
| podcast | composite inset by the gutter; the original runs it edge to edge | heading 3 lines vs 2 (copy longer) | — | yes: full-bleed on phones, shorter copy |
| statement | matches | matches (content shorter) | — | — |
| bento | matches (2 cols, wide tile hidden) | matches 6×3 edge to edge; figures a bit larger than the original's 64px | fade on entering view: matches | yes: figures 48/64px |
| documentary | matches | matches | fade: matches | — |
| research | matches (peeking card, progress line, arrows flush left) | matches (600 cards from 32px, 25% fill) | slider | — |
| stories | matches | matches; quote marks smaller and lighter than the original's | glyph fade | yes: bigger, medium weight |
| explore | matches | cards unequal heights (3-line text) | — | yes: equal heights |
| footer | 1076 vs 901: gaps between groups too big | matches | — | yes: gaps 48/40 |
| overflow | 360 / 768 fit | **1024 overflowed** (explore 27rem column + 3 cards, footer fixed columns) | — | yes: explore side-by-side from xl, footer fluid columns at lg |

# galaxy: recreation notes

Original: https://galaxy.com/ (landing page only; precaptured 2026-10-23, no other pages asked for).
Fictional stand-in: **Brightrail**, an infrastructure company for onchain money and AI compute.
All copy, names, dates and figures below are invented.

## Capture caveats

- A white cookie banner (Cookiebot) is fixed over the bottom ~250px of every 1440 frame and the
  bottom half of every 390 frame. The 1440 stats band (section 03, 298px) sits entirely under it;
  its layout at 1440 is **inferred**: the 390 capture shows stacked, centred figures (48px number,
  16px label), the font-size list shows 48px ×4 at 390 → four figures, and I lay them out as a
  row of four at 1440 at 60px (the next display step in the site's scale).
- No scroll reveals: GSAP + ScrollTrigger are loaded, but no section changed while scrolling
  (scroll frames and the Motion list agree). The only scroll behaviour is the sticky header.

## Design language

- **Palette:** near-black page (#020202) all the way down, pure white text, two greys for
  secondary text (#939598 descriptions, #6d6e71 dates/meta), #323232 hairlines, #0a0a0a code
  card on a #1c1c1c border. Three signal colours used only on single words and outlines:
  green #40ff88 ("code"), orange #ff5a1f ("capital", the first hero pill), blue #4da3ff
  ("compute", the second pill). The button is a white pill with black text.
- **Type:** one family in three optical cuts (Display / Deck / Micro), all a neo-grotesk with
  a single-storey a and g, large x-height, tight display tracking. Scale at 1440: 96 (hero),
  72/76 (big h2), 60/64 (h2), 32 (join titles), 24/32 (card titles), 20 (list titles,
  section labels), 18/27 (lead), 16 (UI), 14/20 uppercase +0.1em (eyebrows). At 390: 46 hero,
  40/44 h2, 48 stats, 20, 16, 12/18 eyebrows.
- **Spacing:** 96px section padding at desktop (≈56px on phones); 48px page gutter (24px on
  phones); 12-column grid with 32px gaps inside a 1344px content width.
- **Shapes:** pill buttons (fully round), 5px image corners, 4px tag chips with a 1px border,
  a 14px-radius code card. No shadows anywhere; depth is only black on black.
- **Layout habit:** alternating split rows (media in one half, text vertically centred in the
  other); on phones media always comes first, then the text.

## Type

| Original | Class | Width / x-height | Ours | Why |
|---|---|---|---|---|
| FormaDisplay / FormaDeck (Forma DJR) | neo-grotesk with single-storey a, g | normal, large x-height | **Mona Sans Variable** (`standard.css`, wght + wdth), weight 560, width 95%, −0.035em | the only open grotesk on hand whose default a and g are single-storey; same large x-height and straight terminals. Slightly wider, so headings run at `font-stretch` 95% (theme var `--galaxy-stretch`) |
| FormaMicro | same family, text cut | normal, large x-height | Mona Sans Variable 400, 100% width | same family keeps body and heads related, as in the original |
| JetBrains Mono (code card) | mono | normal | **JetBrains Mono Variable** | the original uses it; open licence |

Checked against Urbanist (too round, small x-height) and Figtree / DM Sans / Instrument Sans
(double-storey a) in a render next to the hero crop.

## Section map (1440 heights measured; 390 from the 390 capture)

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | galaxy-header | 54 / 80px, sticky | mark + wordmark, search + menu icons | mark + wordmark left, 4 links centred, search + Login right | none | sticky; link hover colour |
| 2 | hero | galaxy-hero | content (593px) | centred 46px headline in 4 lines with 2 inline art slots, lead, 2 outline pills | centred 96px headline in 2 lines, inline art slots ~1em, 18px lead, 2 pills | backdrop (canvas starfield 1440×971 spanning hero + stats), 2 inline art glyphs | hover on pills |
| 3 | stats | galaxy-stats | content (298px) | stacked centred figures | row of four (inferred) | shares the backdrop | none |
| 4 | CEO letter | galaxy-split | content (848px) | square media, then text | square media cols 1–6 (656), text cols 7–12 vertically centred, 72px head | video 1:1 | button hover |
| 5 | two engines | galaxy-intro | content (402px) | centred eyebrow, 40px head, lead | centred, 72px head with two coloured words | none | none |
| 6 | digital assets | galaxy-split (+ links) | content (685px) | art, text, link list with one rule | text cols 1–5, art centred in cols 7–12, row of 4 links each with a left rule | art ~300×320 | chevron nudge on hover |
| 7 | data centers | galaxy-split | content (543px) | art, then text | art centred cols 1–6, text cols 8–12 | art ~300×340 | button hover |
| 8 | featured research | galaxy-split | content (561px) | 16:9 media, then text | text cols 1–6, 16:9 media cols 7–12 (656×369) | image 16:9 | button hover |
| 9 | research & insights | galaxy-post-grid | content (528px) | label + View all over a rule, cards stacked | same header, 3 cards | 3 images 2:1, radius 5 | card hover |
| 10 | bringing onchain | galaxy-intro | content (228px) | centred eyebrow + 36px head | centred eyebrow + 60px head | none | none |
| 11 | code rails | galaxy-split (code card) | content (641px) | code card, then text | text cols 1–5, code card (560 max) centred in cols 7–12 | none (code card is built) | cursor blink loop; button hover |
| 12 | news | galaxy-post-grid | content (576px) | cards stacked | 4 cards | 4 images 2:1 | card hover |
| 13 | join / investors | galaxy-join | content (372px) | two stacked panels, inset 16px more | two halves split by a vertical rule | none | link hover |
| 14 | metrics note | galaxy-footnote | content (172px) | uppercase grey note | same, indented 280px | none | none |
| 15 | footer | galaxy-footer | content (1141px) | mark + link groups indented, socials, insights, podcast, legal | left half: mark + 5 link groups on a 2-col grid, socials, copyright; right half: 2 insight cards, podcast row, uppercase legal | 2 images 2:1, 1 square | link hover |

## Motion inventory

| section | trigger | what changes | timing | how |
|---|---|---|---|---|
| header | scroll | sticky at top, black | n/a | `sticky top-0` |
| header links, search, login | hover | colour white → #6d6e71 (muted) | 0.3s ease-in-out | `transition-colors duration-300 ease-in-out hover:text-muted-foreground` |
| header wordmark | hover | opacity 1 → 0.6 | 0.3s ease-in-out | `hover:opacity-60` |
| buttons with arrow | hover | arrow translateX(50%); fill dims | 0.3s ease-in-out | `group-hover:translate-x-1/2` on the icon |
| hero pills | hover | outline pill gets a faint wash of its colour | 0.3s ease-in-out | `hover:bg-chart-1/15` (inferred: the hover state wasn't sampled) |
| link cards (digital-assets list) | hover | chevron translateX(10px) (the site's `.arrow__card` rule) | 0.3s ease-in-out | `group-hover:translate-x-2.5` |
| post cards | hover | eyebrow/title colour shift (the site's `.card:is(a):hover` rule) | 0.3s ease-in-out | title `group-hover:text-muted-foreground` |
| code card | loop | block cursor blinks (opacity) | 1050ms, infinite | `@keyframes galaxy-code-card-blink` in the block's CSS, steps |
| hero backdrop | loop | WebGL starfield + drifting code glyphs | n/a | media: placeholder, not rebuilt |

## Media slots → placeholders

- hero backdrop (canvas, spans hero + stats): `backdrop` prop; empty → a faint radial wash
  of `--glow` low in the hero on the page background (the glyph cloud sits there).
- hero inline glyphs (2): `inlineMedia` parts in the headline; empty → 0.95em rounded `bg-muted` tiles.
- CEO video 1:1, featured image 16:9, digital-assets art, data-centers art: `media` prop of
  galaxy-split; empty → `bg-muted` at the slot's ratio (art slots ~300×330 square-ish).
- post card images 2:1, radius 5px; footer insight images 2:1; podcast cover 1:1.

## Decisions

- Faithful mode is **dark**; light is a sibling (white page, #020202 ink, darker signal colours).
- The three signal colours map to `--highlight` (green), `--chart-1` (orange), `--chart-2`
  (blue). Blocks take a `tone` per coloured word/pill: `highlight | chart-1 | chart-2`.
- `galaxy-split` serves four sections (letter, data centers, featured, code) and the
  digital-assets row (with its `links` list): same grid and type, different media side and
  shape; one block is easier to reuse than five near-copies.
- Code card is UI chrome (mono text, a rule, a cursor), so it's built as the component
  `galaxy-code-card` with its lines as props.
- No load-in or scroll reveals are added: the original has none.
- Section padding and gutter change at `lg` through the theme (`--section-y` 3.5rem → 6rem,
  `--page-gutter` 1.5rem → 3rem).

## Round 1 (ours vs original, 390 and 1440)

Section heights at 1440 (ours / original): hero 601/593, stats 292/298 (inferred), letter
848/848, intro 404/402, money 706/685, compute 530/543, featured 561/561, research 535/528,
onchain intro 238/228, rails 697/641, news 504/576, join 392/372, footnote 176/172,
footer 1156/1141. No horizontal overflow at 360/768/1024. Sticky header and the 1050ms
cursor blink both show up in ours' Motion list; every hover row shows up too.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| all | — | — | Tailwind's `ease-in-out` is cubic-bezier(0.4,0,0.2,1), the original's is CSS `ease-in-out` | yes: `ease-[cubic-bezier(0.42,0,0.58,1)]` everywhere |
| header | ok | ok | links fade to #939598, original to #6d6e71 | yes: `hover:text-muted-foreground/70` |
| hero | 3-line headline vs 4 (our copy is shorter) | ok; inline tiles read heavier than the sparse art (placeholder) | — | no: copy and placeholder |
| letter / intro / split heads | ok | tracking a hair looser than Forma DJR | — | yes: −0.04em |
| rails | ok | heading wrapped to 4 lines (longer copy) vs 3 | — | yes: shorter headline |
| news | ok | 72px shorter: the original's titles run to 4 lines and it has ~116px under the cards | — | yes: `lg:pb-[6.5rem]` on the page's news grid |
| join | ok | rule sat at the half-way line with 80px before the second text; original: rule on the first panel's edge, 48px gap, 32px inset | — | yes |
| footer / footnote | legal, copyright and footnote are 12px on phones, ours 14px | ok | — | yes: `text-xs lg:text-sm` |
| money (digital assets) | ok | 21px taller: our art tile is 9:10 and the text centres on it | — | no: within the art slot's ratio |

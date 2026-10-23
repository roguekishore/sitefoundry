# Pilot (pilot.com) — recreation notes

Precaptured (`precapture.json`, landing only, no other pages asked for). Fictional stand-in:
**Tallyhouse**, bookkeeping, tax and advisory for small companies. All copy is ours.

## Design language

- **Palette roles.** A white page framed by two faint vertical hairlines (the 1280px page
  column, x=80 and x=1360 at 1440) that run through every band. Ink is a deep aubergine
  purple `#281350` (headings and body); the same purple is the dark band colour (header,
  hero, case-study carousel, one card). Actions: violet `#5f2ee5` pills; a butter-yellow
  `#ffd967` pill for the main "get started"; pink `#f891ff` for the announcement bar, the
  chat callout and small accents. Pastel bands rotate down the page: pale cyan `#e7f9ff`
  (features, with `#8eecff` dotted media cards), white with a pink wash (AI chat), white
  (advisors), cream `#fcf3d6` (scenarios, gold `#967000` labels, yellow arcs), aubergine
  (cases), white (insights), violet `#5931dc` (three ways), white footer.
- **Type scale.** Display: 56px hero (1440) / 36px (390), section titles 40/42 (1440) and
  28–36px (390), weight 600, tight leading 1.05. Card titles 32px (1440)/24px weight 500.
  Ledes 20/30 (1440), 16/25.6 (390). Body 16/24. Mono (Space Mono) uppercase for every
  button and link-like label, 16–18px with ~1px tracking; small caps eyebrows 12px with
  1.2px tracking. A handwritten script (La Belle Aurore) for one closing line per band, with
  a brush underline.
- **Spacing rhythm.** Sections ~120px top padding at 1440 (heading at y≈120), ~64–72px at
  390. Closing lines sit 90–120px under the content, centred, each with a coloured brush
  stroke under it.
- **Layout grid.** 1280px framed column; inner text inset 25px (x=105). Feature rows sit in
  a narrower 1060px column (x=190–1250) alternating media left/right. Cards that touch the
  frame (advisors, scenarios, cases, three ways, insights) are square-cornered and divided by
  hairlines — a ledger-like grid.
- **Shapes and depth.** Pills for every button and input; 16px radius only on the product
  media cards and the chat window; everything else square. Almost no shadow: depth comes
  from flat colour blocks, dotted textures and hairlines.

## Type

| Original | Kind | Ours | Why |
|---|---|---|---|
| Euclid Circular B (300–700) | geometric sans, normal width, medium x-height, double-storey a, round o | **Figtree Variable** | the closest open geometric sans on width, x-height and the double-storey a; friendly, round, same weight range |
| Spacemono (400/700) | monospace, grotesque | **Space Mono** | the same open font |
| La Belle Aurore | handwritten script | **La Belle Aurore** (`@fontsource/la-belle-aurore`) | the same open font |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | announcement + nav (fixed together) | `pilot-header` | content (175 / 137) | pink bar two lines, aubergine bar: wordmark + 3-line burger | pink bar one line; wordmark, 6 links (4 chevroned), SIGN IN, yellow pill, outlined pill | — | fixed (sticky); hover on pills |
| 2 | hero + logo row | `pilot-hero` | content (1293 / 986) | left-aligned 36px headline, lede, CTA, pink mono link, 342×324 media, centred logo names | centred rating row, 56px two-line headline, 800×389 media, yellow CTA, mono label + 8 logos in a row; grid lines on the right, violet glow bottom-right | product composite / photo | hover on CTA, "case study" logos 0.4→1 opacity |
| 3 | 50/50 features | `pilot-features` | content (2044 / 1955) | centred heading, then per row: icon, title, text, 342×210 card | centred heading + lede; 3 rows alternating 688×422 dotted cyan card ⟷ icon+title+text; script closing line | 3 product screenshots | none |
| 4 | AI chat | `pilot-ask` | content (1024 / 768) | stacked: heading, quotes, script, chat 342×264 with pink callout | text left (540), chat window right bleeding to the frame, pink callout pill overlapping its bottom | chat window, decorative pink bars | chat lines crossfade (inside media) |
| 5 | advisors | `pilot-advisors` | content (2469 / 1349) | centred heading; 3 cards stacked in a bordered box | 3 framed columns, tinted name/role tags, quote, portrait bottom-right, tinted gradient | 3 portraits | none |
| 6 | growth scenarios | `pilot-scenarios` | content (2251 / 1505) | heading, lede, label; 4 stacked cells | left heading 730 max, 2×2 framed grid, gold label + bar, quote, photo in a yellow-edged arc | 4 photos | none |
| 7 | case studies | `pilot-cases` | content (1654 / 1329) | eyebrow, 36px heading, 329px white cards in a swipe track, arrows centred under | eyebrow + heading with arrows right; 1064 cards (704 white + 360 photo) in a track bleeding right | 1 photo per case | carousel (Swiper) |
| 8 | free insights | `pilot-insights` | content (1299 / 881) | heading, lede, bordered list | heading left; right half dotted column with 4 hairline rows | 4 line icons | row hover → pale lilac 0.2s |
| 9 | three ways | `pilot-paths` | content (1465 / 1190) | stacked: white card, aubergine card, lilac card | white card left (540 tall) with photo on a yellow disc; right: aubergine card + lilac card | photo, pink bar art | hover on pills |
| 10 | footer | `pilot-footer` | content (2021 / 854) | wordmark+email; 2-col groups; legal list | 1128 column: wordmark+email, 5 columns (Resources spans 2), hairline, mono legal row, mono grey disclaimer | — | none |

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header | pinned | announcement + nav stay at the top | — | `position: sticky; top:0` |
| header / hero / paths pills | hover | yellow pill → violet fill, white text; outlined white → white fill, purple text; violet → darker | 0.1–0.2s ease | Tailwind `transition-colors duration-200` |
| hero logos | hover | "case study" logos opacity 0.4→1 | 0.15s | `opacity-60 hover:opacity-100 duration-150` |
| cases | hover | READ STORY darkens; WATCH VIDEO outline → violet fill | 0.1s | Tailwind hover |
| insights | hover | row background → pale lilac | 0.2s ease | Tailwind hover |
| cases | swipe / arrows | carousel slides one card | Swiper | scroll-snap track + arrow buttons calling `scrollBy` (`hydrate: visible`) |
| ask | loop (Webflow) | three chat-answer images swap opacity | ~ every few s | inside media: `frames` prop crossfades in a CSS loop when given; the placeholder doesn't draw chat lines |

No scroll reveals, parallax or smooth scroll in the capture.

## Media slots → placeholders

- Hero composite (800×389, 342×324 at 390): pale tinted panel with a soft border on the dark band.
- Feature screenshots (688×422 / 342×210): dotted cyan card is design (built); the screenshot inside is a white-ish placeholder panel inset in it.
- Feature and insight icons (128px / 60px line illustrations): `icon` slots; demo passes lucide icons.
- Chat window (687×528, radius 16, pink ring): placeholder card; pink callout pill is built.
- Pink bar art behind the chat and in the "approach" card: decorative, become soft glow washes.
- Advisor portraits (≈269×228 cut-outs): tinted placeholder bottom-right.
- Scenario photos (466×269, arc-clipped): placeholder in the same arc shape with the yellow edge.
- Case photos (360×716 with violet overlay + company name): placeholder with overlay; name is text.
- Paths photo on the yellow disc (607×396): placeholder over a built yellow disc.

## Decisions

- **A/B hero.** The 390 and 1440 captures show different hero variants (390: left headline +
  lede + email form; 1440: centred rating + headline + product + CTA). One block covers both:
  rating, headline, optional lede, CTA + optional mono link, media, logos; left-aligned on
  phones, centred from `lg`. The email form is left out (the 1440 variant has none).
- **Band colours from tokens.** Dark bands = `secondary` (aubergine) in this theme; pastel
  bands are tints: cyan band `accent/20`, cream `highlight/25`, lilac `glow/15`, so other themes
  get their own pastel versions. Gold labels and the lime tag use `chart-5` / `chart-4`.
- **Frame lines** (`lg:border-x`) on every band's page column, as on the original.
- **Light is the faithful mode**; the dark sibling is a deep aubergine page with the same accents.

## Round 1 (ours vs original)

Motion check: header sticky ✓ (pinned 23 half-screens at 1440, same as original); hover rows
match (pills, insight rows, logo tags); no reveals in either. Overflow: fits at 360/768/1024 ✓.
Heights (1440 / 390): header 137/179 vs 137/175 · hero 1124/1225 vs 986/1293 · features
1975/2060 vs 1955/2044 · ask 768/952 vs 768/1024 · advisors 1405/2313 vs 1349/2469 ·
scenarios 1480/1988 vs 1505/2251 · cases 1362/1478 vs 1329/1654 · insights 824/1196 vs
881/1299 · paths 1177/1426 vs 1190/1465 · footer 856/1849 vs 854/2021.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| all headings | `\n` desktop breaks also broke phone lines ("advice / for") | Figtree 600 reads a step lighter than Euclid 600 | — | yes: `PilotLines` (desktop-only `<br>`), headings 600→700 |
| hero | ok (lede kept; A/B variant) | 138px taller: the optional lede; logo row inset 25px too far | — | margins tightened, logo row on the 104px line; lede kept (decision) |
| features | card came before the copy; original puts icon+title+copy first | ok | — | yes: order swapped on phones |
| ask | ok | chat window ran past the frame line | crossfade only with frames | yes: frame clips it |
| advisors | ok | ok | — | — |
| scenarios | a little shorter (shorter copy) | ok | — | — |
| cases | ok | card title wrapped (24rem cap); photo placeholder too light vs violet-washed photo | arrows step one card ✓ | yes |
| insights | ok | rows 146px vs 155–175 | row hover ✓ | yes: py-7, link mt-6 |
| paths | explore art a hard-edged rectangle | same | — | yes: radial wash |
| footer | shorter (fewer long links) | column at x=180 vs 156; titles lighter | — | yes |

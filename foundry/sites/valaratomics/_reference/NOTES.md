# valaratomics — recreation notes

Original: https://valaratomics.com/ (landing only; precaptured 2026-10-24, not opened here).
Ours: **Tallgrass Fission**, a made-up builder of small salt-cooled reactors that sell steam
heat and power to farms, mines and fertiliser plants on the plains. All copy is our own.

## Design language

- **Palette:** three greys and a gold. Page `#f3f3f3`, white `#fff` bands (products, mission,
  press), `#e7e7e7` press tiles, pure black `#000` bands (hero, the rounded "model" card, the
  technology panel, the full-bleed pilot band, the footer). One gold `#e9b709` used sparingly:
  1px button frames, the active eyebrow on the technology tabs, the statement brackets, and the
  hover fill of every button. Text is pure black or white; secondary text is the same ink at
  50% / 30% opacity.
- **Type:** three families. A very wide heavy grotesk in caps only for the two biggest lines
  (hero, footer), a tight neo-grotesk for headings (48px/0.9, −0.02em) and body (22px/1.1,
  −0.01em), and a mono in caps for every label, button and nav link (16–24px).
- **Rhythm:** sections pad by 16vh (`--py-section`) top and bottom; the intro (heading +
  paragraph) sits 16vh above its content on desktop, 36px on phones. 5.9vw side gutter on
  desktop (85px at 1440), 14px on phones.
- **Grid:** 12 columns with a 2vw gap. Intros split into two halves (heading left, text from
  the middle); the hero and footer put their right column on columns 8–12.
- **Shapes:** almost square: 4px radius on tiles and panels, 8px on the big model card.
  Chamfered, tabbed outlines appear twice (the statement brackets, the mission plate) and the
  technology panel grows a tab under its active label.
- **Depth:** none. Flat surfaces; the only "shadow" is a gold drop-shadow glow on the mission
  plate's hover and the white glow of the footer mark (an image).

## Type

| Original | Class / width / x-height | Ours | Why |
|---|---|---|---|
| Druk (Wide, heavy) | grotesk, extra-wide, heavy caps | **Archivo Variable** at `wdth 125`, `wght 900` | measured: "ATOMIC AGE" is 8.50em wide in the original (680px at 80px), Archivo 125/900 gives 8.47em |
| Saans | neo-grotesk, normal width, large x-height, tight | **Hanken Grotesk Variable** (500 headings, 400 body) | "Proven Technology" is 8.63em before tracking in the original (398px at 48px with −0.02em); Hanken 500 gives 8.64em; single-storey g, flat terminals |
| Saans Mono | grotesk mono, 0.6em advance | **DM Mono** 400/500 | grotesk-shaped mono with the same 0.6em advance (nav "TECHNOLOGY" 96px at 16px); already in the workspace |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | `valaratomics-header` | fixed, 76 / 106px | mark + 2-line wordmark left, wave menu icon right | mark + wordmark left, six mono links right (gap 36) | — | wordmark + links fade out over the first ~400px; mark and menu stay; whole bar `mix-blend-difference` (white on dark, black on light) |
| 2 | hero | `valaratomics-hero` | **100svh** | black, video full-bleed; wide caps title 42px at the bottom, body 18px, gold-framed button, 72px bottom padding | title 80px on cols 1–7, body 22px + button on cols 8–12, bottom-aligned | video, full-bleed cover | none (button hover) |
| 3 | statement | `valaratomics-statement` | 700px content / **100svh** | centred text between a top and bottom gold bracket (bumps outward), lattice texture behind brackets | 600px text block centred, gold brackets left and right (bumps outward) | lattice texture (decoration, skipped) | text blur + 0.1 opacity → sharp, scrubbed with scroll |
| 4 | model card | `valaratomics-model` | content 877 / **85svh** | black rounded card (8px), heading 42px, body 18px, button, image fills card | card inset by the gutter, heading left half, body + button right half, 85px inner padding | image fills card (cover), top-to-black fade over it | media rises 75px, scales 1.05→1, fades in on entering view |
| 5 | technology | `valaratomics-core` | content | intro stacked; black panel 363×440 with a 22px tab under the active label; label row scrolls sideways to the active one | intro in halves; 1270×418 panel + tab; three labels spread (justify-between) | one video per label inside the panel | auto-advance every ~4s: tab slides (clip-path 0.5s), labels dim to 50% / gold eyebrow, media crossfades |
| 6 | products | `valaratomics-products` | content | white; intro; 4 cards stacked 363×230 | intro in halves; 4 cards 303×410 in a row, gap 20 | one image/video per card | desktop: the non-hovered cards sit under a black veil (first card active by default); media scales on hover |
| 7 | pilot band | `valaratomics-pilot` | **100svh** | photo full-bleed, heading 42, partner seals row, body, button, vertically centred | heading 60px + partner seals left, body + button right, vertically centred | photo full-bleed cover; 4 partner seals (→ plain text names) | none |
| 8 | mission | `valaratomics-mission` | content (24vh padding) | white; heading 42 two lines, two paragraphs, then the chamfered plate button 362×236 | text left (max 500px), plate 620×404 right | lattice texture inside the plate (→ slot) | plate hover: gold drop-shadow glow 0.3s |
| 9 | press | `valaratomics-press` | content | white; heading; tiles stacked (grey #e7e7e7, 4px radius, ~280–350 tall) | 3×3 square tiles 410×410, gap 20; black SHOW MORE button centred | publication logos (→ plain text names) | hover: READ MORE 30%→100%, arrow nudges right; SHOW MORE reveals the rest |
| 10 | footer | `valaratomics-footer` | content ~835 | black; huge wide caps title, link rows with arrows, small links, PRESS pill + icons, glow mark, line at the bottom | title left, link rows on cols 8–12, legal lines, glowing mark centred below | glow mark image 1000×890 (→ glow gradient slot) | revealed underneath the page (fixed/sticky under the content); mark fades in over the last part of the scroll |

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header | scrubbed (scroll 0→~400px) | wordmark and nav links opacity 1→0 | linear with scroll | CSS `animation-timeline: scroll(root)`, range 0–360px, ends `visibility:hidden` |
| header | always | `mix-blend-difference` mark over light and dark bands | — | `dark` scope + `mix-blend-difference` |
| statement | scrubbed | text blur(~12px) + opacity 0.1 → none + 1 | until the section is roughly centred | CSS `view()` range `cover 10%`–`cover 50%` (never the last section) |
| model card | entering view | media opacity 0→1, translateY 75px→0, scale 1.05→1, origin bottom | 750ms in the original | CSS `view()` range `entry 80px`–`entry 480px` |
| technology | loop (timer) | active tab moves (clip-path 0.5s cubic-bezier(.92,…)), labels opacity .5→1, eyebrow gold, media crossfade (opacity 0.5s ease-in-out) | ~4s per label | React state + `setInterval` (hydrate visible); CSS transitions; paused under reduced motion; labels are buttons |
| products | hover (desktop) | black veil on the other cards, media scale 1.04 | opacity .3s, transform .5s | CSS `:has()` in the block's `.css` |
| mission | hover | gold drop-shadow glow on the plate | filter .3s cubic-bezier(.4,0,.2,1) | Tailwind `hover:drop-shadow` with `--glow` |
| press | hover | READ MORE opacity .3→1, arrow translate-x 4px, tile tint | .15s | Tailwind group-hover |
| buttons | hover | transparent/black → gold fill, white → black text | .15s cubic-bezier(.4,0,.2,1) | Tailwind `transition-colors` |
| footer | scrubbed | page slides away to reveal a footer fixed underneath | with scroll | `sticky bottom-0` under a `relative z-10` main (page.tsx) |
| footer | scrubbed (last ~600px) | glow mark opacity 0→1 | with scroll | CSS `scroll(root)` range `calc(100% - 36rem)`–`100%` |

## Media slots → placeholders

- hero video (full-bleed, 100svh) → `media`, empty: dark `bg-muted` → `bg-background` gradient.
- model card image (fills card) → `media`, empty: dark diagonal fade from `muted`.
- technology panel videos (one per label) → `items[].media`, empty: a muted rounded inset frame that crossfades per label.
- product card images/videos (4) → `items[].media`, empty: dark muted gradient tile.
- pilot band photo (full-bleed, 100svh) → `media`, empty: dark gradient + the original's top/bottom black fades.
- mission plate lattice → `texture`, empty: flat `bg-card` inside the hairline.
- press publication logos → `source` as plain text, set in the wide face.
- footer glow mark → `mark`, empty: radial `glow` gradient of the same 1000×890 footprint.
- partner seals in the pilot band → plain-text names in mono.

## Decisions

- **Light is the faithful mode** (grey/white page with black bands). The black bands are `dark`
  scopes, so they stay black on the light page and pick up any theme's dark palette. The dark
  sibling turns the grey/white bands black/near-black; the model card and panels then keep a
  hairline edge so they still read.
- Lattice textures (statement sides, mission plate) are artwork: not drawn. The statement keeps
  its gold brackets (simple strokes, part of the layout); the mission plate takes a `texture` slot.
- Logo: a lucide `Wheat` mark + a two-line wordmark in the wide face; the footer mark is a slot.
- The technology tabs are clickable buttons as well as auto-advancing (the original's are
  timer-driven; clickable is a small accessibility addition).
- Press: 9 shown, SHOW MORE reveals the rest (needs JS; static HTML shows the first 9).
- The footer reveal is built in page.tsx (`main` relative z-10 over a sticky footer), so the
  footer block also works alone in the gallery.

## Comparison round 1

Heights matched on the first capture (390: 844 / 700 / 860 / 972 / 1445 / 844 / 969 / 3108 / 832 vs
844 / 700 / 877 / 990 / 1541 / 844 / 969 / 3357 / 835; 1440 within 20px everywhere). Every motion
row showed up in ours' Motion list (header fade, statement blur scrub, model settle, tab clip-path +
label/media swaps, sticky footer + mark fade). No overflow at 360/768/1024.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| all headings | Hanken 500 reads lighter and airier than Saans 500 | same | — | yes: 600, −0.03em |
| all body | looser-looking spacing | same | — | yes: −0.02em |
| header | wordmark 22px, much bigger than the original's ~18px | same | fade ok | yes: 18px |
| hero | title 42px wraps to 3 lines; the original's is 32px on phones | "POWER FROM" ran wide | — | yes: 32px phones, copy "Heat for / the plains" |
| statement | — | bracket bumps only 14px deep (path drawn in viewBox units, not px) and centred too low | blur scrub ok | yes: path to the box edge, centre 32px higher |
| model / core / products / pilot | placeholders nearly pure black, read as empty bands | same | — | yes: new `photo` placeholder tone (mid-grey fade) |
| mission | — | plate 72px too high: the original pads 32vh top / 16vh bottom (as on phones) | — | yes |
| mission | plate empty white; the original's lattice reads pale grey | same | — | yes: pale muted fill when no texture |
| press | headlines ~6% wider than the original | same | hover ok | yes: −0.05em |
| footer | — | title 72px below the footer's top edge (original ~43px); links row 14px low | sticky + fade ok | yes |

## Comparison round 2

Heights unchanged except mission (390: 929 vs 969 — copy one line shorter; 1440: 836 = 836) and
products (390: 1425 vs 1541, our card copy is shorter). Scroll frames at 1440 (statement,
technology, footer) now overlay closely; motion list identical to round 1.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| technology | the tab was a separate black strip; under the photo placeholder it read as a different colour (the original's media, 363×440 / 1270×440, spans panel and tab) | same | tab move ok | yes: panel + tab are one element clipped by one animated polygon |
| technology | — | — | checked live: after 4s the tab sits under the middle label and the phone label row has slid to it | — |
| press | headlines wrapped wider than the original's (~260px on phones) | ok | — | yes: 17rem phones, 21rem desktop |
| footer | glow slot centre ~70px low | same | ok | yes: lifted |
| footer | mark is a glow placeholder, not the original's sharp logo (artwork) | same | fade ok | no: media slot by design |
| footer | min-height is min(52rem, 100svh), so the capture marks it window-sized on a short window; the original is fixed at 835px | — | — | kept: sticky reveal would hide the top of a taller-than-window footer |
| re-theme | `valaratomics-core`, `-products`, `-mission` under sample-ember light: dark panels/cards pick up ember's dark palette, gold → ember's primary; the model card under our own dark mode keeps its edge via the photo placeholder | | | ok |

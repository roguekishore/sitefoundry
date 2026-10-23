# functionhealth: reference notes

Original: a yearly blood-testing membership. Captured in advance (390 and 1440), landing page only.
The recreation is a fictional company, **Tidewell** (a yearly lab-panel membership), with its own copy.

## Design language

- **Palette** (warm paper + terracotta): page `#FEF9EF` (beige) is `background`; raised/quiet surfaces `#F5EEE1`
  (cream) are `card`/`secondary`/`muted`; hairlines `#D1C9BF` are `border`; body text `#2A2B2F` (midnight) is
  `foreground`, secondary text `#515151` is `muted-foreground`; the one brand colour terracotta `#B05A36` is
  `primary` and also `highlight` (italic emphasis words, numbers, icons, outline buttons). `glow` is the pale end of
  the terracotta gradient (`#D8A183`). Greens (`#79BD8B`, `#4C9A62`) are only data dots inside charts: chart-2/3.
- **Type:** high-contrast light serif for every heading with one **italic terracotta** phrase per heading; light
  (300) grotesk body; semibold (600) for buttons, names and nav; small spaced-out mono caps for captions and credits.
- **Scale** (390 → 1440): hero h1 57 → 80 px, line-height 1; section h2 48 → 64 px, line-height 1, tracking −0.03em;
  category / card titles 27 → 34–45 px; pull quotes 27 → 40; body 16 → 18; list items 16 → 18/27; captions 11–12 px
  mono, letter-spacing 1.1 px, uppercase. The site's own fluid clamps are reused for the page rhythm.
- **Layout:** content is 1248 px wide at 1440 (margin 96); side margin grows fluidly from 20 px on phones.
  Sections are beige, centred headings, `section-top/bottom` padding clamp(3rem → 6.2rem).
- **Shapes:** pills (999 px) for every button and input; 12 px cards; 24 px for the pricing card and the compare
  table; 6 px for portrait photos; 1 px `#D1C9BF` borders on cards and FAQ rows.
- **Depth:** almost none. Cream-on-beige tiles; one big soft shadow under the pricing card and the footer card
  (`0 18px 40px rgba(42,43,47,.14)` / `12px 32px 80px rgba(42,43,47,.1)`); a terracotta gradient column in the compare
  table is the only strong colour field.

## Type

| Original | Classification | Width / x-height | Open font used | Why |
|---|---|---|---|---|
| FT Base (300/400/600) | quirky neo-grotesk / humanist hybrid, rounded terminals, tight word spacing | normal width, large x-height | **Hanken Grotesk** (variable) | closest soft geometric grotesk with a 300 weight and a large x-height; already in the repo |
| Financier Display (300 + italic) | high-contrast transitional display serif, wedge serifs | slightly narrow, large x-height | **Newsreader** (variable, optical size axis, italic) | same wedge-serif display feel at large optical size, real light italic |
| Fragment Mono 400 | neutral grotesk mono | normal | **DM Mono** | closest installed mono with the same clean, rounded-grotesk look |

No `pnpm add` was needed: all three packages were already in the repo.

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | announcement bar + sticky nav | `functionhealth-header` | bar 40 px; nav 80 px bar floating 16 px below it, sticky | logo, pill button, search, menu icon in one rounded bar | logo · 5 links centred · Log in · pill · search · menu | none (wordmark is text + lucide icon) | bar is translucent glass with light text over the hero, becomes transparent with terracotta text once past the hero (0.18 s) |
| 1 | hero | `functionhealth-hero` | **window-sized**: 100svh − bar (96 %) at 1440; ~729 px phone | full-bleed photo; pill, h1, subline, stacked CTA + stats at the bottom-left | full-bleed photo; copy bottom-left, 3 stats with vertical dividers bottom-right; pause button bottom-right | 1 full-bleed image/video (with a bottom-dark overlay) | load-in rise of the copy |
| 2 | Testing is easy | `functionhealth-steps` | content (858 / 1458) | 3 stacked cream cards, 2 pills below | 3 equal cards, 2 pills below | 3 card illustrations (calendar, chart, plan list) | hover on pills |
| 3 | Monitor early indicators | `functionhealth-conditions` | content (678 / 803) | left-aligned heading + check list, chart card, 2 marquee rows | centred heading, inline check list, chart card in the middle, 2 marquee rows crossing behind it | 1 chart card 328×246 | marquee rows scrubbed with scroll in opposite directions; pause-motion button |
| 4 | lab tests chosen by doctors | `functionhealth-biomarkers` | content (1450 / 1819) | quote + avatar, 2-col grid of 5 categories + "more" tile, results row stacked | quote + avatar, 3-col grid with hairlines, "more" tile, results row | doctor avatar 46 px, results-hand-off icons | list fades out at the bottom of each cell; hover |
| 5 | The new standard | `functionhealth-press` | content (898 / 736) | horizontal snap rail of tiles | 4-column masonry (mixed tile heights) | 5 portrait photos, 4 award logos (as text tiles) | hover; rail scrolls |
| 6 | press logos | `functionhealth-press-logos` | content (295 / 197) | marquee + pause button | same | logos as plain text names | loop marquee 48 s (42 s phone), pause |
| 7 | Real people. Real results. | `functionhealth-stories` | content (838 / 713) | horizontal snap rail of 9:16 cards | 4 columns of 9:16 cards | 4 videos (poster + play button) | hover |
| 8 | Gold standard testing | `functionhealth-locations` | content (618 / 969) | text, zip form, then 3 stat cards stacked | left text + form; right 2-col stat cards with one wide card | bar-chart art, dot map, van icon | – |
| 9 | Not your average checkup | `functionhealth-compare` | content (1596 / 1584) | 3-col table, tall terracotta column | same, wider | none | – |
| 10 | Built with top doctors | `functionhealth-board` | content (764 / 651) | snap rail of square portraits | 4 portraits + next arrow, last one faded | 4+ square photos | arrow scrolls the rail |
| 11 | What could cost you | `functionhealth-pricing` | content (974 / 1260) | card with details above, list below, 3 review quotes in a rail | card split in two with a divider, 3 centred reviews | none | – |
| 12 | FAQs | `functionhealth-faq` | content (772 / 733) | accordion rows | same, 864 px wide | none | open/close |
| 13 | Life is short? | `functionhealth-cta` | content (440 / 338) | centred heading, subline, 2 pills | same | none | hover |
| 14 | footer | `functionhealth-footer` | content (1126 / 2200) | newsletter first, then link columns (2 + 1), badges, socials, legal | link columns left, newsletter right, badges + socials below | QR placeholder, 2 store buttons | hover lift on socials |

## Motion inventory

| section | trigger | what changes | timing | build |
|---|---|---|---|---|
| header | scrolling past the hero | glass bar + cream text → transparent bar + terracotta text, logo tone swap | 0.18 s ease | small scroll listener (`hydrate: load`), Tailwind transitions |
| hero | load | copy rises 24 px + fades in, staggered | 0.8 s, `cubic-bezier(.2,.7,.2,1)` | CSS `@keyframes`, fill-mode both |
| conditions | scrubbed with scroll | row 1 translateX −271 → −1280 px, row 2 −1491 → −488 px (opposite directions) | linear over the section's pass | CSS `animation-timeline: view()` in `@supports` |
| conditions, press-logos | click | "Pause motion" stops the marquees | – | state toggles `data-paused` (`hydrate: visible`) |
| press-logos | loop | marquee translateX 0 → −50 % | 48 s / 42 s phone, linear infinite | CSS `@keyframes` |
| buttons | hover | pill fills (outline → solid, solid → midnight), 0.2 s | `background-color, color, border-color 0.2s` | Tailwind |
| text links | hover | underline slides | 0.2 s | Tailwind |
| footer socials | hover | translateY(−1px), icon darkens | 0.15 s | Tailwind |
| faq | click | row opens; plus rotates to ×  | 0.2 s | native `<details>` + CSS |
| board | click | rail scrolls by one card | smooth | `scrollBy` (`hydrate: visible`) |
| steps cards (calendar / chart / plan list animate inside) | – | motion inside media | – | skipped: placeholder |
| hero (WebGL diagonal slice shader over a video) | – | motion inside media | – | skipped: placeholder |
| cookie banner (third-party consent widget) | – | – | – | not part of the design, skipped |

## Media slots → placeholders

Hero photo/video + canvas; 3 step illustrations; chart card; doctor avatar; 5 press portraits (award logos
become text tiles); 4 story videos; bar chart and dot map; van icon (a lucide `Truck`); 4+ board portraits; QR code
and 2 store badges. All are `ReactNode` props in token-coloured placeholder frames with the original's size, ratio and radius.

## Decisions

- Heading: one `FunctionhealthHeading` component (serif title, italic accent segment before or after) shared by all blocks.
- Pill button, media placeholder and pause control are components shared across blocks.
- Header sits over the hero (zero-height sticky wrapper) like the original; the hero adds its own top padding.
- Hero text colours use `background` (cream) over a `foreground`-coloured placeholder, so the hero stays "dark photo, light text" in either mode.
- Footer social icons come in as props (lucide-react dropped brand icons).

## Comparison rounds

Heights are measured from `ours-design.md` against `original-design.md` (1440 / 390).

### Round 1

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | bar overflowed at 360 (wordmark, pill and icons too wide, page 402 px) | nav links centred on the page (orig. sit left of centre, between logo and actions) | glass → solid on scroll present | yes: smaller phone wordmark, pill and icons, nav is `flex-1` |
| hero | 728 vs 729 px | 860 px, window-sized (96 %), matches | load rise present, original has none captured | – |
| steps | cards 384 px, matches | cards 416 vs 418 px | – | – |
| conditions | chart card stretched full width (350 vs 330 px) | rows 40 px apart (orig. 56), card 13 px low | rows scrubbed in opposite directions ✓ | yes: card capped at 328 px, row gap 36 px |
| biomarkers | category names broke in 3 lines at 27 px (orig. 24 px, 2 lines) | names set on one line (orig. two lines, 45 px), cells 336 vs 420 px tall, result tiles wrapped | – | yes: size 24 → 40 px, narrower measure, non-breaking "& word", taller cells, nowrap tiles |
| press | rail started at the screen edge (scroll-snap ignored padding), heading wrapped oddly (text-balance) | tiles 29 px low | – | yes: scroll padding, no balance, less top padding |
| press logos | 190 vs 197 px | 300 vs 295 px | loop present | – |
| stories | 711 vs 713 px, rail edge as in press | 845 vs 838 px | – | rail fixed |
| locations | zip form overflowed the column (grid column wider than the screen), map card put the caption at the bottom | heading broke differently ("on your schedule" should be italic on its own line) | – | yes: `minmax(0,1fr)` column, caption first on phones, `"\n"` line-break part in the heading |
| compare | brand mark too wide for the 110 px pillar | bottom padding 55 vs 96 px, labels 16 vs 17 px | – | yes: stacked mark on phones, bottom padding, 17 px |
| board | rail started at the edge | arrow 20 px low | – | yes |
| pricing | rail started at the edge | 958 vs 974 px | – | rail fixed |
| faq | – | plus box 14 px too far in | `<details>` open/close | yes |
| cta | 284 vs 338 px | 428 vs 440 px | – | – (content height) |
| footer | 1731 vs 2200 px (shorter fine print) | 919 vs 1126 px | hover lift ✓ | yes: longer sample fine print, more space under the logo, QR slot shows its placeholder |

### Round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| all | no horizontal overflow at 360 / 768 / 1024 (was 402 px at 360) | – | – | ✓ |
| header | fits, 66 px tall | 80 px tall, glass → solid | ✓ | ✓ |
| conditions | 774 vs 803 px | 672 vs 678 px | two scrubbed rows (0 → −600 px phone, 0 → −1100 px desktop, opposite directions) ✓ | ✓ |
| biomarkers | 1794 vs 1819 px | 1427 vs 1450 px | – | ✓ |
| press | 756 vs 736 px | 902 vs 898 px | – | ✓ |
| locations | 1040 vs 969 px (map card stacks) | 615 vs 618 px | – | ✓ |
| compare | 1705 vs 1584 px (labels wrap one line more) | 1600 vs 1596 px | – | ✓ on desktop; phone left as is |
| footer | 1910 vs 2200 px | 1021 vs 1126 px | – | content (fine print is our own shorter text) |
| themes | `sample-ember` (light) and the dark mode of the theme both re-theme cleanly: pricing card, grid, pills, gradient pillar all follow the tokens | – | – | ✓ |

Still different on purpose: the hero WebGL slice effect and photos, the three animated card scenes, chart/map art, real portraits and logos are placeholders; the third-party cookie banner is not recreated.

# apexspace: recreation notes

Original: https://www.apexspace.com/ (landing page only; captured in advance, not opened here).
Our fictional company: **Orrery Space Works**, a maker of satellite buses. Products and copy are
invented (Wren, Heron and Condor buses, "The Hangar", "Loom" software, Columbus, Ohio).

## Design language

- **Palette roles.** An aerospace-industrial dark: two near-blacks alternate as full-bleed bands.
  **Charcoal** (#1a1a1a) carries the intro, mission, customer, factory bands and the footer, and
  the header once you scroll; **pure black** (#000) carries the bus-platform band, the customer
  tiles and the black buttons. White text; **mid grey** (#808080) for footer links and stat notes;
  white at 60% for nav numbers. One **signal yellow** (#f6b717) for the main buttons and the
  compare underline. Each bus has its own **tone**: purple (#a145e4), blue (#4e98f9), orange
  (#f76b0e), with a green (#0dc182) for one orbit tag; tones colour the card's CTA bar and its tag
  borders. Hairlines are white at 15%.
- **Type scale.** Three families with strict jobs: a light (300) wide-ish grotesk in UPPERCASE
  for every heading, line-height 1; a monospace at 12px uppercase with +0.06em tracking for
  every label, nav item, button and footer link; a neo-grotesk for body text at 16/1.4.
  Desktop: 72 (hero) / 60 (section) / 44 (sub-heads and stat figures) / 40 (power figures) /
  26 (units) / 20 (customer line) / 16 body / 14 notes / 12 mono. Phones: 42 / 33.75 / 29 / 25 /
  20.4 / 18 / 14 / 14 / 12.
- **Spacing rhythm.** A 16px gutter at every width; content runs edge to edge (no max width).
  Sections open with ~160px above the heading on desktop and ~80px on phones; media panels sit
  flush against the section's bottom (or both ends) instead of being padded.
- **Layout grid.** Desktop splits the screen into a wide left and a 480px right column that
  starts at ~944px (hero copy, platform intro); the mission text starts at ~44%; the factory
  splits 50/50 with the photo bleeding off the right edge; footer link columns start at ~44%
  and step 184px. Feature columns and the bus cards are three equal columns with 8px gaps.
- **Shapes and depth.** Square corners everywhere (radius 0). No shadows. Structure comes from
  1px hairlines: the header has vertical dividers and a bottom rule, feature columns have a top
  rule, the bus cards are outlined with small "+" crosshairs at their corners and rules between
  stat rows; tags use solid vs dashed borders to show available vs optional orbits.

## Type

| Original | Class | Width | x-height | Ours | Why |
|---|---|---|---|---|---|
| Space Grotesk 300 (headings) | geometric-grotesk hybrid | normal, slightly wide | large | **Space Grotesk Variable** (`@fontsource-variable/space-grotesk`) | the original's face is open (OFL), so the same family is the closest match |
| Space Mono 400 (labels, nav, buttons, links) | monospace (geometric) | mono | large | **Space Mono** (`@fontsource/space-mono`, already in the repo) | open (OFL), the same face |
| Inter 400–700 (body) | neo-grotesk | normal | large | **Inter Variable** (already in the repo) | the original uses Inter itself, so it isn't a fallback |

The bus names (ARIES/NOVA/COMET) are drawn as custom logotypes on the original; ours are plain
text in Space Grotesk at weight 500, wide tracking (no logo shapes).

## Section map (landing)

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | `apexspace-header` | 65px bar, sticky, overlaps the hero | wordmark left, three-line menu button right; full-screen menu | wordmark left; seven nav cells right, each `n.0 LABEL +` in mono, split by full-height vertical hairlines; last cell `BUILD YOURS →` | – | sticky; charcoal background fades in after ~420px of scroll; hover: dim number/icon brighten (0.25s) |
| 2 | hero | `apexspace-hero` | **100svh** (window-sized) | heading 42px (3 lines), paragraph 14px, black button; media fills the window | heading 72px two lines top-left; paragraph + black button in the 480px right column, both just under the bar | 1 video, cover, fills the window, dimmed | – |
| 3 | intro + three pillars | `apexspace-intro` | content (835 / 1198) | heading 33.75px; three stacked pillars, each: top rule, 40px icon, 29px title, 14px text | heading 60px in ~800px; three columns with top rules, icon, 44px two-line title, 16px text | – (line icons) | – |
| 4 | bus platforms | `apexspace-platforms` | content (1452 / 1287) | heading, text, badge stacked; one 350px card at a time in a swipe track with the next peeking; arrow buttons + three name tabs below; full-width compare link | heading left, text + badge right; three outlined cards with corner crosshairs, 800px tall; compare link centred, 380px, yellow underline | 3 bus videos, 16:9 contain (468×263 / 350×197) | swipe track (Swiper) on phones; CTA bar text → white on hover; compare link hover |
| 5 | mission | `apexspace-mission` | content (638 / 1093), media flush to the bottom | heading 29px, paragraphs, yellow button; photo full-bleed 390×281 at the bottom | photo 500×478 bleeding off the left, flush to the bottom; text column from ~44% | 1 image, cover | – |
| 6 | customers | `apexspace-logos` | content (585 / 453) | line 18px, 3 lines; strip of 190px black tiles running sideways | line 20px; seven 206px black tiles edge to edge, 1px charcoal seams | – (names as plain text) | phones: strip drifts sideways in a loop; desktop: static |
| 7 | factory | `apexspace-factory` | content (824 / 1164), media full height on desktop | heading, small icon + indented paragraphs, yellow button; square photo full-bleed at the bottom | text in the left half (heading, icon at the gutter, paragraphs indented 76px, button); photo the full right half, top to bottom | 1 image, cover | – |
| 8 | footer | `apexspace-footer` | content (480 / 1059) | wordmark; four link groups stacked; contact button, subscribe field, consent, socials, copyright | left: wordmark, 352px contact button, subscribe label, email field, consent; right from ~44%: four mono link columns, copyright + socials below | 1 faint line-art backdrop (cover) | links grey → white on hover (0.3s); socials white → grey |

Shared components: `apexspace-wordmark` (plain text wordmark), `apexspace-button` (mono label +
arrow: yellow, black, tone bar, underline), `apexspace-heading` (the light uppercase heading at
the three sizes).

## Motion inventory

| section | trigger | what changes | timing / easing | how we build it |
|---|---|---|---|---|
| header | pinned | stays at the top for the whole page | – | `position: sticky; top: 0` with a −65px bottom margin so the hero slides under it |
| header | scrubbed (threshold) | background layer opacity 0 → 1 around 420–450px of scroll | ~quick fade | CSS `animation-timeline: scroll(root)` with `animation-range: 380px 450px`; without support the background shows always |
| header nav | hover | number and + icon white/60 → white | 0.25s ease | Tailwind `group-hover:` `transition-colors duration-250` |
| buttons (yellow, black) | hover | background → transparent, border → dotted, text keeps contrast | 0.4s ease (`all`) | Tailwind `hover:border-dotted hover:bg-transparent` `transition-all duration-400` |
| bus CTA bar | hover | text + arrow black → white | `all` 0.4s ease | Tailwind `hover:text-foreground` |
| compare link | hover | label → yellow | 0.3s ease | Tailwind transition |
| bus cards (phone) | swipe / buttons | track scrolls one card; active tab marked | native smooth scroll | CSS `scroll-snap` track + small JS for the arrows/tabs (`hydrate: visible`) |
| customer strip (phone) | loop | translateX drift to the left (~166px between samples, read as "scrubbed") | linear loop, ~40s per set | CSS `@keyframes apexspace-logos-drift` on a doubled list below `lg`; static grid at `lg` |
| footer links | hover | grey → white | color 0.3s ease | Tailwind transition |
| footer socials | hover | white → grey | 0.3s ease | Tailwind transition |

Not rebuilt: the original also loads Webflow interactions and a CSS `animation-timeline` rule,
but no reveal, parallax or pin besides the header showed in any scroll frame or sample, so
nothing else moves. Motion inside the videos is the placeholders' business.

## Media slots

| slot | original | placeholder |
|---|---|---|
| hero film | video, cover, fills the window (1440×900 / 390×844), dimmed by a 50% black wash | `bg-muted` surface filling the section, with a `bg-background/50` wash over it |
| bus clips ×3 | video, 16:9 contain, ~360px tall area on desktop, 197px on phones | `bg-muted` 16:9 frame centred in the card's media area |
| mission photo | image, cover, 500×478 desktop / 390×281 phone | `bg-muted` panel at the same size, flush to the section bottom |
| factory photo | image, cover, 715×824 desktop (half width, full height) / 390×390 phone | `bg-muted` panel |
| footer backdrop | line-art image, cover, 1655×777, faint | `bg-muted/30` band behind the footer content (only when no media is passed it stays a faint tint) |
| customer logos | logo images | plain-text names of fictional organisations in the theme's fonts |

## Decisions

- **Tokens.** Dark is the faithful mode. `background` = charcoal, `card` = pure black (the
  platform band, customer tiles, black buttons), `primary` = signal yellow, `muted` = a lifted
  grey for placeholders (so they read on both charcoal and black), `muted-foreground` = #808080,
  `chart-1…4` = the bus tones (purple, blue, orange, green), `radius` = 0, `page-gutter` = 1rem,
  `section-y` = fluid 5rem → 10rem.
- **Light sibling.** Paper grey page (#efefed), white cards, near-black text, the same yellow and
  tones, darkened slightly for contrast on light.
- **Hero text over media** uses `text-foreground` over a `bg-background/50` wash, so in light
  mode the wash is pale and the text dark, keeping contrast with whatever the slot holds.
- **No max width**: the original runs edge to edge at 1440 with a 16px gutter; `--page-width`
  is set wide (120rem) so `max-w-page` only caps very large screens.
- The header's background fade is scroll-driven CSS rather than JS, as the threshold toggle is
  close to a short scrubbed range.

## Comparison round 1

Section heights (ours vs original): 1440 — hero 900/900, intro 1038/835, platforms 1544/1452,
mission 709/638, customers 588/585, factory 858/824, footer 676/480. 390 — hero 844/844,
intro 1348/1198, platforms 1395/1287, mission 1032/1093, customers 437/453, factory 1077/1164,
footer 1074/1059. Motion list: header sticky ✓, header fill 0→1 at 450px ✓ (422–844 at 390),
customer strip translateX drift at 390 ✓ and static at 1440 ✓. Overflow at 360/768/1024: fits ✓.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| all headings | line-height ~1.5 instead of 1 (tailwind-merge dropped `leading-none` because the size class came after it) | same, makes intro +200px, platforms +90px | – | yes: size class first in `apexspace-heading` and the card figures |
| footer | ok | grid columns not applied: everything stacked in one column, 676 vs 480px | – | yes: explicit `col-start`/`row-start` instead of template areas |
| bus cards | name smaller than the original's logotype (26 vs 30px cap) | same; media field 20px too tall, card 836 vs 800 | – | yes: name 40→44px, media field 21rem / 15rem |
| bus cards | units forced to caps ("KW") | same | – | yes: unit kept as written ("KG", "kW") |
| bus tabs (phone) | names a little wide for 390 | – | – | yes: 16px names, less tracking |
| footer copyright | wraps to two lines (longer fictional name) | – | – | yes: shorter line |
| hero / factory / mission text | line counts differ with our copy | – | – | no: content |

## Comparison round 2

Section heights (ours vs original): 1440 — hero 900/900, intro 860/835, platforms 1481/1452,
mission 643/638, customers 588/585, factory 828/824, footer 493/480. 390 — hero 844/844,
intro 1177/1198, platforms 1335/1287, mission 974/1093, customers 437/453, factory 1060/1164,
footer 1128/1059 (the 390 differences are line counts of our shorter or longer copy). Motion
list unchanged and matching: header sticky; header fill 0→1 at ~450px; customer strip drifts
left at 390 (translateX −60→−307px over the samples) and is static at 1440. Fits at 360/768/1024.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| footer links | rows 30px apart instead of 22px (inline links sat on the list item's 24px body line) | rows 31 vs 24px | – | yes: links are `block`, 0.3rem / 0.45rem gaps |
| intro | ok | 70px taller at the bottom (original's bottom padding ~115px, not 160) | – | yes: `lg:pb-[7.25rem]` |
| footer backdrop placeholder | tint read as a lighter footer | same | – | yes: `bg-muted/15` |
| bus card media | 16:9 muted frame, the original shows the product floating on black | same | – | no: placeholder by design |
| bus names | plain text, the original uses drawn logotypes | same | – | no: no logo shapes |

Re-theme check: `apexspace-platforms` under `sample-ember` (light) and `apexspace-mission` under
`sample-ember` (dark) both read correctly (tones come from the theme's chart colours, serif
headings swap in); the hero under `apexspace-theme` light shows dark text on the pale wash.

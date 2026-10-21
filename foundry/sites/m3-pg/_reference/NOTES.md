# m3-pg — notes

Recreating https://m3-pg.de/ (a German architecture and project-planning office), landing
page only. Captured in advance (`precapture.json`, no other pages asked for). Our fictional
firm: **Steinach Architekten**, a planning office for commercial and residential buildings;
all copy is ours, in English.

## Design language

- **Palette:** two inks on white. Near-black `#202020` for type and the footer band, pure
  black for a few titles and links, a mid grey `#9e9e9e`/`#909090` for the big secondary
  numbers and the grey half of headlines, `#6b6b6b` for quiet text on the dark footer.
  Hairlines are 1px `#707070` on white, `#4e4e4e` on the dark band. No accent colour at all:
  hierarchy is only black vs grey.
- **Type:** one neo-grotesk (Inter) everywhere. Headlines uppercase, semibold (600), set
  solid (line-height 1.0–1.12) with tight tracking (−0.03em); body 16/24 with −0.01em; links
  semibold and underlined. Scale at 1440: 64 / 60 / 40 / 24 / 18 / 16; at 390: 36 / 34 / 24 /
  20 / 16.
- **Grid:** a strict 4-column grid at desktop — 20px outer gutter, 20px gaps, 335px columns.
  The first column holds small labels; content starts on column 2 (x = 375), nav links are
  spread across columns 2–3, a three-card row fills columns 2–4. Phones: one column with a
  10px gutter.
- **Shapes and depth:** square everywhere (radius 0), flat, no shadows. Boxes are drawn with
  1px hairlines (the project accordion).
- **Rhythm:** sections have little top padding and a large bottom gap (~160px at 1440,
  ~90px at 390), so blocks read as a stack of statements.

## Type

| Original | Classification | Ours | Why |
|---|---|---|---|
| Inter 400/600/700 | neo-grotesk sans, normal width, tall x-height | **Inter Variable** (`@fontsource-variable/inter`, already installed) | the original uses Inter itself, so it is the faithful choice (the "no Inter" rule is for defaults, not for sites set in it) |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | `m3-pg-header` | content (50px phone, 96→80px desktop) | wordmark left, menu lines right | wordmark col 1, five nav links spread across cols 2–3, language code right | — | sticky; the wordmark gives way to a short mark once scrolled |
| 2 | intro | `m3-pg-hero` | content at 390; **100svh** at 1440 | 370×211 media slot full width, ~100px air above, ~130 below | 690×394 media slot on cols 2–3, centred in the window | video (the animated logo) → placeholder | — (motion is inside the video) |
| 3 | principles | `m3-pg-principles` | content (775 at 1440) | label line, 36px uppercase headline, 24px grey line, three stacked cards | label in col 1; 60px headline + 40px grey line on cols 2–4; three cards (title, hairline, body, link) on cols 2/3/4 | — | link hover |
| 4 | pattern band | `m3-pg-band` | content (730 at 1440) | 370×174 slot | 1380×650 slot (aspect 2.12) | image (a bar pattern) → placeholder | **sticky** (top 100px); the projects section slides over it |
| 5 | projects | `m3-pg-projects` | content (907 at 1440) | label + text, then a vertical accordion: open item (image 338×220, title, text, link, number), closed rows (number, title, plus) | label + text in col 1, "all projects" link at its foot; on cols 2–4 a horizontal accordion 680px tall: one open panel (image 674×380, title, text, link, big number) and five 66px closed columns (plus, rotated title, big number) | one image per project → placeholder | click opens (flex + bg 0.25s ease); closed column hover turns dark with white text; image hover scale 1.1 |
| 6 | statement | `m3-pg-statement` | content (571 at 1440) | 34px uppercase headline, grey then dark; 24px paragraph; link | 64px headline over cols 1–3; 24px paragraph and link on cols 2–3 | — | link hover |
| 7 | footer | `m3-pg-footer` | content (833 at 1440) | dark band: mark, intro, stacked underline fields, consent, send, two-col address/links, socials, wordmark fitted to width, 2×2 legal row | mark col 1, intro col 2, form on cols 3–4 (2×2 fields + message); address / links / socials on cols 2/3/4; a wordmark fitted to the full width (155px); hairline; legal row in four columns | — | link hover |

The floating "W. Honors" ribbon at the left edge is a third-party award badge, not the site's
design: left out.

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header | pinned | sticky at the top for the whole page, white background | — | `position: sticky` |
| header | scrubbed with scroll (0→120px) | full wordmark fades out, short mark fades in; height 96→80 at desktop | ~0.3s feel | CSS `animation-timeline: scroll()` over the first 120px, inside `@supports`; fallback shows the wordmark |
| header | hover | nav link underline appears | all 0.3s ease | `hover:underline` + `transition-all duration-300` |
| header (phone) | click | menu lines open a full-width list | 0.3s | React state, `hydrate: load` |
| pattern band | pinned | sticks at top 100px; next section (white) slides over it | — | `position: sticky` + `relative z-10 bg-background` on the projects block; page wraps band→statement in one parent (like the original's `main`) |
| projects | click | the chosen item opens (flex-grow) | background-color, flex 0.25s ease | React state; `transition-[flex-grow,background-color] duration-250` |
| projects | hover (closed column) | background → ink, text → white | 0.25s ease | `hover:bg-foreground hover:text-background` |
| projects | hover (image) | inner image scales 1 → 1.1 | all 0.3s ease | `group-hover:scale-110` on the slot, `overflow-clip` frame |
| links | hover | "read more" underline → none; nav none → underline | all 0.3s ease | Tailwind hover classes in `m3-pg-link` |

The capture's "reveal scale 1.00→1.00" on the project image is no change at all: nothing to build.

## Media slots

| slot | size | becomes |
|---|---|---|
| hero video (animated logo) | 690×394 at 1440 (aspect 1.75), 370×211 at 390, cover | `bg-muted` placeholder, square corners |
| pattern band image | 1380×650 (2.12), 370×174 at 390 | `bg-muted` placeholder |
| project images | 674×380 (1.77) at 1440, 338×220 (1.54) at 390, cover | `bg-muted` placeholder per project |

## Decisions

- Light is the faithful mode; dark is a sibling with charcoal paper and light-grey ink. The
  footer band is `bg-foreground text-background` (the original's footer is the ink colour),
  so in dark mode it turns into a light band: noted in its meta.
- The footer wordmark is sized in container units so it fills the width as the original's
  does (155px at 1440 = 10.8% of the width); the size is a prop because it depends on the
  name's length.
- The header's short mark is plain text (`St/A`) in the theme font: no logo shapes.
- The hero is window-sized only from `lg` (as the original: at 390 it is content-sized).

## Comparison round 1

Page height: 4711 vs 4698 at 390, 4767 vs 4711 at 1440. Motion list matches the original's
(header pinned for the whole page, band pinned for 2 half-screens, the same no-op scale on the
project image, the same underline hovers). Fits at 360 / 768 / 1024 (the original overflows at
360 and 768).

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | — | short mark 100px wide vs 85 | swap and sticky match | yes: 46px mark |
| hero | media slot at 150–361, same as the original's video | slot on cols 2–3, centred | — | — |
| principles | tagline wraps to two lines (our copy is longer) | cards start 7px low, body 12px low (787 vs 775 tall) | — | yes: shorter tagline, tighter card spacing |
| band | matches | matches; sticks at 100px, projects slide over | pinned 2 half-screens, as original | — |
| projects | matches (rows 56px, numbers 36px) | box 27px lower (from principles' extra height) | hover inks column; easing was ease-in-out | yes: easing now `ease`, height follows principles fix |
| statement | matches | matches | — | — |
| footer | mark too big (125 vs 88 wide); email and copyright wrap; field rows 43 vs 48px | wordmark fills 92% of the width vs ~99%; mark too big (220 vs 160) | — | yes: smaller mark, wordmark 10.5cqi, shorter demo lines, taller fields |
| links | — | — | easing ease-out vs the original's `ease` | yes |

## Comparison round 2

Page height: 4664 vs 4698 at 390, 4748 vs 4711 at 1440 (the rest is the original's header
overlapping its hero by 60px, where ours sits in flow). Section by section: principles 771 vs
775, footer 841 vs 833 (1091 vs 1120 at 390). Motion list unchanged and matching; fits at
360 / 768 / 1024.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| principles | tagline on one line, as the original | cards row within 2px of the original | — | yes (round 1) |
| footer | info row 17px high, legal row tight | info row 40px low, wordmark 45px low, mark still large | — | yes: lg:mt-14 info, leading-none wordmark, 92px mark, more air above the legal row on phones |
| band + projects | — | the wrapper is 28px taller: our band image is 1400 wide (the original's is 1380, so 10px less tall) | — | left: the band follows the grid's content width |
| hero | — | grey slot where the original's logo film plays (same place and size) | — | placeholder by design |

Stopping here: each section pair reads as the same layout apart from content and placeholders.

## Re-theme check

`m3-pg-projects` and `m3-pg-principles` under `sample-ember` (light): cream paper, the
theme's own sans, green links (its highlight), warm hairlines and muted numbers; the
accordion and the cards keep their shape. `m3-pg-theme` dark: charcoal page, light ink,
grey placeholders; the footer turns into a light band, as its notes say.

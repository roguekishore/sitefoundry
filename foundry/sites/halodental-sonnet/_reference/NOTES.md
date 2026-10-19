# Halo Dental: design notes

## Design language
- **Palette:** warm paper page `#f5f1ee`, pure black panels, white cards, one hot orange
  `#ff5e2b` (buttons, the big statement heading), amber `#ffa41c` as a rare second colour.
  Text is black or white; grey `#968b88` only for dimmed items. Hairlines are black at 30%.
- **Type:** one grotesk (Nuckle) at regular weight only. Scale: 100px giant statement,
  64px section titles (leading 1), 28px headlines, 16px body, 12–14px small. Mobile: 50 / 40 / 21 / 14.
  The hero word "Halo" is about 280px, on desktop only.
- **Layout:** 1440 page, 40px side padding, 12-column grid with 24px gutters. Sections are
  separated by colour change (paper, black, paper, black panel), not borders.
- **Frame:** hero and footer are black panels with 8px radius, inset 10px (6px on phones)
  from the page edge. The statement band is full-bleed black.
- **Shapes and depth:** 4px radius on buttons and media, 8px on panels. No shadows. Depth
  comes from black against paper and from photography. Hairline-separated rows for lists.
- **Motion:** colour changes on hover only.

## Media slots
| Slot | Size | Placeholder |
|---|---|---|
| Hero product video/photo | fills the 880px (832 on phones) panel | graphite vertical gradient with a lighter centre strip |
| Product photo | about 670 × 655, near square | muted paper gradient, 4px radius |
| Product thumbnails | 3 × 96px squares (a row under the photo on phones) | same, first one ringed in orange |
| Statement photo | 250 × 181 desktop, 166 wide on phones | graphite panel with orange glow |
| News thumbnails | 324 × 180 | muted paper gradient |
| Footer art strip | about 1360 × 170 | graphite panel with glow |

## Sections built
`halodental-sonnet-header`, `-hero`, `-product`, `-statement`, `-news`, `-newsletter`,
`-footer`; components `-button`, `-heading`, `-media`, `-mark`.

## Decisions
- **Font:** Nuckle is closed, so Hanken Grotesk (already in the repo) stands in; weight 400.
  It is narrower than Nuckle, so the giant word is set a little larger.
- **Dark panels on a light page:** the hero, statement, footer and header wrap themselves in
  `.dark`, so they stay black on the paper theme without any literal colours.
- **Mobile menu:** a native `<details>` panel, no JavaScript.
- **Product thumbnails** are static (the original swaps the big photo with a carousel; that
  is script-driven and skipped).
- **Skipped:** the accessibility button, the fading last news row, the cookie/overlay parts.
- Fictional brand "Gleam" with its own copy; the logo icon is a lucide glyph.

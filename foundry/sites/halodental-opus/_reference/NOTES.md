# halodental-opus: notes

Source: https://halodental.com (captured 2026-10-19). A dental-device maker's landing page.

## Design language

**Mood.** Product-gallery calm: warm cream paper, pure black "stage" panels, and one hot
orange. Everything is regular weight; size alone makes hierarchy. No shadows anywhere;
depth comes from black panels sitting inside a thin cream/white margin with 8px corners.

**Palette roles.**
- page: warm cream `#f5f1ee` (product, news); white `#fff` for the newsletter strip and
  news logo tiles; a darker cream `#e8e4e1` for quiet fills.
- ink: pure black `#000` text and 1px black rules.
- stage: pure black panels (hero, "about" band, footer) with white text.
- brand: orange `#ff5e2b` buttons with **black** text on them.
- gradient: the big "about" headline runs yellow `#ffa41c` → red `#ff362a`.
- soft lines: `rgba(0,0,0,.3)` on the email field and checkbox.

**Type.** One family (Nuckle, a commercial wide grotesk) at weight 400 only.
| role | 390 | 1440 |
|---|---|---|
| hero wordmark | hidden | ~280px (an SVG in the original) |
| mega heading ("about") | 50 / 1.0 | 100 / 0.95 |
| section heading | 39.5 / 1.1 | 64 / 1.0 |
| card title (news) | 25 / 1.1 | 28 / 1.1 |
| footer column heading | 21 / 1.1 | 28 / 1.1 |
| body | 14.6 / 1.5 | 16 / 1.5 |
| buttons, list rows | 16 / 1 | 16 / 1 |
| small print | 12.5 / 1.5 | 12 / 1.5 |

**Grid.** 12 columns, 20px gaps, 40px side margins at 1440 (columns come out at exactly
95px). Everything snaps: product text = 4 cols, product photo = 6 cols (cols 6–11), thumbs
= col 12; news rows = thumb cols 1–3, title cols 6–8, text cols 9–11, arrow col 12; footer
link groups every 2 cols. At 390 the margin is 21px and everything stacks.

**Frames.** Hero and footer are black panels inset 10px (6px on phones) from the viewport
with 8px corners; the "about" band is full-bleed black, no frame.

**Spacing.** Sections breathe ~120–130px top and bottom at 1440, ~70px on phones. Inside,
40px between heading and list/button, 20px small gaps.

**Shapes.** 4px buttons (40px tall, 15px side padding), 8px photos and panels, 40px square
icon tiles. Rules are solid 1px black. Thumbnails: active one gets a 2px orange ring.

**Motion.** Simple colour/opacity hovers; nothing else is built.

## Media slots → placeholders

| slot | original | placeholder |
|---|---|---|
| hero backdrop | full-panel dark product photo/video (grey-lit black object) | dark surface with a soft centred light (foreground/10 radial) inside the framed panel; `media` prop |
| hero wordmark | huge white SVG brand word | rendered as text in the display face (`wordmark` prop); it's the brand name, not artwork |
| product gallery | ~1:0.98 photo (670×655 at 1440, 348×340 at 390) + 3 square thumbs | `slides[].media`; empty → dark `bg-foreground` surface with a soft glow, thumbs muted squares, 8px |
| about photo | 210×210 square team photo, 8px | `media`; muted square |
| news thumbs | 325×180 (≈16:9) photos or press logos on white, 8px | `media`; white card tile (`bg-card`) |
| footer illustration | line drawing of the product + concentric circles, ~900×280 | `media`; faint concentric radial on the black panel |

## Blocks

- `halodental-opus-header`: transparent bar over the hero panel; logo left, centred nav, white
  "reserve" button + two 40px squares; phones: button + menu square (native disclosure).
- `halodental-opus-hero`: framed black stage, giant wordmark bottom-left, tagline at col 8;
  phones: tagline + orange "play" button.
- `halodental-opus-product`: two columns, heading/body/ruled feature list/button + square
  photo with a thumb rail.
- `halodental-opus-about`: full-bleed black band, gradient mega heading, square photo +
  paragraph + button.
- `halodental-opus-news`: heading + outline button, ruled rows (thumb / title / text / arrow
  tile), faded last row with a centred "more" button.
- `halodental-opus-newsletter`: white strip, big heading left, floating-label field,
  checkbox consent and a button that stays grey until the box is ticked (CSS only).
- `halodental-opus-footer`: framed black panel, three link groups, two buttons, illustration
  slot, small legal row.

Components: `halodental-opus-button` (orange / light / outline / tile / ghost-square) and
`halodental-opus-heading` (section and mega sizes, optional gradient).

## Decisions

- **Font:** Nuckle is commercial → **Manrope** (open, wide geometric grotesk, similar
  broad bowls and calm regular weight). Used for everything, weight 400.
- **Light is the faithful mode.** Black panels use the theme's **dark palette locally**: the
  panel carries the `dark` class, so inside it every token flips to the dark values
  (`bg-card` = black, text white). Under another theme the panels take that theme's dark
  palette, so blocks re-theme cleanly. In the dark sibling the page is a warm near-black
  and panels stay pure black, so frames are still visible.
- Fluid gutter and section spacing live in the theme (`clamp()`), so blocks use `px-gutter`
  / `py-section` only.
- Hero wordmark hidden on phones (the original shows only the tagline + play button there).
- The original's gallery is a swiper; ours is static (first slide active) to stay JS-free.
- Phone "about" band in the original has ~250px of empty space under the button (left over
  from a scroll animation); ours uses normal section padding.
- All copy is for a fictional company, "Lumo Oral Devices", and its product "the Beacon".

# levels.com — recreation notes

Captured in advance (`precapture.json`, landing page only, no other pages asked for).
Recreated as a fictional metabolic-health app, **Ballast** ("watch what each meal does").

## Design language

- **Palette roles.** Near-black ink `#131413` for text, dark buttons and every dark surface
  (stat cards, the closing band, footer, the top tier of the plans); white main bands;
  two quiet off-white bands that alternate with white: a warm `#f7f7f5` (what-you-get,
  plans) and a cool grey `#f3f5f4` (trust row, inside, stories). Secondary text is a warm
  grey `#585a59` / `#6a6f6d`. One brand colour, a deep green `#1d7d6c`, used only for text
  links, list dots, icons and the eyebrow of the recommended panel; a pale sage `#9fc5bc`
  for big numbers and eyebrows on dark; pale green-grey panels `#edf2ef` / `#edf5f2` for
  the privacy strip, the recommended panel, icon tiles and the recommended plan.
- **Type scale.** One grotesk throughout, medium weight (500) for headings with tight
  tracking (≈ -0.04em on the big sizes). Hero 56px/84px on phones (a very open 1.5 line
  height, kept) → ~96px/1.02 on desktop. Section titles 32px/48px → 56px/1.04. Row titles
  28.8px → 44.8px. Card titles 28px/1.55, item titles 23px, small card titles 20px. Leads
  18px/32px → 20px/32px. Body 14–16px with 24–28px line height. Eyebrows 12–14px semibold
  uppercase, wide 0.16em tracking.
- **Spacing rhythm.** Sections pad ~96px on phones and 128px on desktop, top and bottom.
  Content is 1200px wide (120px margins at 1440), the header a little wider (1280).
  16px gutter on phones. Gaps of 48px between columns, 16–24px between cards.
- **Layout grid.** Mostly two columns (text | media), alternating sides; three-up card
  grids; four story cards; three plan cards. Phones stack everything, text before media
  (except the monitoring section, where the photo leads).
- **Shapes.** 10px corners on cards and media, 8px on buttons, 30–32px on the chart
  card and story cards, full pills on chips, badges and the footer form.
- **Depth.** Mostly flat with 1px hairlines (black at 6–8%). Very soft, long shadows only
  on the chart card, the recommended plan and the story cards
  (`0 20px 60px -40px` ink at 28%).

## Type

| Original | Kind | Width | x-height | Ours | Why |
|---|---|---|---|---|---|
| TT Hoves (300–900; headings 500, labels 600) | neo-grotesk with geometric round letters, double-storey a, single-storey g | normal | large | **Hanken Grotesk Variable** | the closest open neo-grotesk: same normal width, large x-height, double-storey a / single-storey g, round o/e, works tight-tracked at display sizes and wide-tracked as small caps; already installed |
| GT Sectra Fine (loaded, not seen on the landing page) | serif | — | — | not used | no visible text uses it |
| Inter (9 nodes: cookie banner/widget only) | — | — | — | not used | third-party chrome, not the site's design |

Mono is not used by the site; the theme sets a system mono stack.

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | fixed top bar | `levels-header` | 73px, fixed over the page | wordmark left, round menu button right | wordmark left, 4 nav items centred (last with chevron), Login + white Buy button right | — | fixed; dark ink at 85% + blur; link colour hover |
| 2 | hero | `levels-hero` | **window** (min-h-svh: 860 at 390, 900 at 1440) | eyebrow, 3-line title, lead, white button; text from y≈208 | eyebrow, 2-line title, lead (≈650px), white button; block centred vertically | background video, cover, fills window | button hover |
| 3 | trust row | `levels-trust` | content (400 / 190) | three stacked items, hairlines between | three columns, vertical hairlines | — | — |
| 4 | problem + chart | `levels-spike` | content (1325 / 856) | text, link, then tall chart card (356×600) | text left (600), chart card right (546×600) | chart (one per choice) | chip hover/active, link arrow nudge |
| 5 | what you get | `levels-system` | content (3603 / 2418) | heading; 3 rows: icon, eyebrow, title, lead, bullets, then media; privacy panel; dark button | heading; 3 rows text/media alternating sides, hairlines between; privacy panel row; centred dark button | 3 images 570×456 (1.25) | link + button hover |
| 6 | glucose monitoring | `levels-monitor` | content (1318 / 865) | photo card (358×460) with caption, then text and 3 note cards | photo card left (588×609), text + 3 note cards right | 1 photo, radius 10 | — |
| 7 | inside | `levels-patterns` | content (3880 / 1674) | heading; 3 big cards stacked; 6 small cards stacked; link | heading; 3 big cards (media top 382×287); 3×2 small icon cards; centred link | 3 images 1.33 | link hover |
| 8 | what to do next | `levels-habits` | content (1850 / 1065) | heading, 3 items with hairlines, then panel with phone screen | heading + items left (540), panel right (434) with phone screen | 1 phone screen 320×651 (0.49) | — |
| 9 | results | `levels-results` | content (1822 / 939) | heading; evidence card; 3 dark stat cards; fine print | heading left, evidence card right; 3 dark stat cards; fine print | — | link hover |
| 10 | stories | `levels-stories` | content (2948 / 1058) | centred heading; 4 cards stacked, full width | centred heading; 4 cards in a row (280 wide) | 4 video stills 0.8 | card lift + image zoom on hover |
| 11 | plans | `levels-plans` | content (3822 / 1788) | heading; recommended panel; 3 plan cards stacked | heading; recommended panel (text | button); 3 plan cards (white, pale green, dark) | — | button hover, link arrow nudge |
| 12 | closing band | `levels-cta` | content (610 / 550) | dark, centred eyebrow, 2-line title, lead, white button | same, title on one line | — | button hover |
| 13 | footer | `levels-footer` | content (1457 / 626) | wordmark, mailing list (input + full-width Join), 3 link groups stacked, legal, disclaimer | wordmark + mailing list left, 3 link columns right; legal row; disclaimer | — | link hover |

Shared components: `levels-wordmark`, `levels-button`, `levels-link`, `levels-heading`,
`levels-icon-tile`, `levels-placeholder`.

## Motion inventory

The capture found no scroll-driven reveals, no pinned sections and no keyframe loops on
the page itself; the scroll frames agree (every section is fully drawn as it arrives).
Motion is hover-only, 150ms `cubic-bezier(0.4,0,0.2,1)` colour fades and 200ms transforms.

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header | scroll | bar stays fixed at the top over everything | — | `position: fixed` |
| header nav, footer links | hover | text white/80 → white | 150ms ease (0.4,0,0.2,1) | `transition-colors hover:` |
| white / dark buttons | hover | background → 90% | 150ms | `transition-colors hover:bg-*/90` |
| green text links | hover | green → darker green, arrow nudges right 2–4px | 150ms colour, 200ms transform | `group-hover:translate-x-1` + `hover:text-*` |
| chart chips | hover / click | white/92 → white, border darkens; selected chip turns ink | 150ms | React state + `transition` |
| chart | entering view | glucose spike grows from a flat line | ~1s | **skipped: motion inside the chart illustration, which is a placeholder slot** |
| story cards | hover | card lifts 8px, still zooms 1.05 | 200ms | `group-hover:-translate-y-2`, `group-hover:scale-105` |
| big pattern cards | hover | still zooms 1.02 | 200ms | `group-hover:scale-[1.02]` |
| hero video | loop | the film itself | — | placeholder (media) |

## Media slots → placeholders

- hero film (fills the window, cover) → `media` prop; empty: dark ink surface + the
  original's bottom-heavy dark gradient so white text reads.
- 3 what-you-get images (1.25) → `media` per row; `bg-muted`-family placeholder, radius 10.
- chart → `chart` per choice; empty: a pale wash panel the size of the chart area.
- monitoring photo (0.97 desktop / 0.78 phone) → `media`; dark placeholder with the bottom
  gradient under the caption.
- 3 pattern-card stills (1.33) → `media` per card.
- phone screen (0.49) → `media`; placeholder is a dark rounded phone-sized surface.
- 4 story stills (0.8) → `media` per story.

## Decisions

- **Fixed header.** Like the original it overlays the hero; the hero adds top padding for
  it. In the gallery the block demo is a tall dark box so the bar is visible.
- **Dark surfaces use `bg-foreground text-background`** in light mode and `dark:bg-card
  dark:text-card-foreground` in dark mode, so stat cards, footer and closing band stay
  dark in both modes.
- **The green** is `--highlight` (links, dots, icons); the pale sage on dark is `--glow`;
  pale green panels are `--accent`.
- **Section padding**: `--section-y` is the desktop 8rem; phones use 0.75× (96px).
- **Hero line height on phones** stays at the original's open 1.5 (looks odd, is faithful).
- Story cards' 16px white strip above three of the stills at 1440 is a hover/offset
  artefact of the original's image positioning; ours put the still flush at the top.
- Dark mode is a sibling: near-black page `#0f1110`, cards a step lighter, same greens
  brightened.

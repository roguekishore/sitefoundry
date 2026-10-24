# railway — recreation notes

Source: https://railway.com/ (precaptured 2026-10-24; landing page only, no other pages asked).
Fictional stand-in: **Halyard**, a calm all-in-one cloud for shipping code. All copy, names,
numbers and people below are invented.

## Design language

- **Palette (dark is the faithful mode).** A deep ink-violet page (#13111c) with near-white
  text (#f7f7f8) and a lavender-grey secondary text (#a1a0ab). Big sections sit on
  **framed panels**: full-bleed minus a 16px inset, 16px radius, a hairline white-9% border,
  each faintly tinted: steel navy (#1b2132, "build"), slate teal (#1f2b2e, "monitor") and
  plum (#251823, "testimonials"). Between them, untinted sections sit straight on the page.
  Recessed surfaces (app windows, board cells) are nearly black (#0b0b0f / #0d0c14).
- **Accents:** a muted violet primary button (#553f83, lighter violet hairline), sea green
  (#42946e) for network/collaboration badges and the status line, copper orange (#ed852f) for
  scale, pink (#f9a8d4) for @mentions, a magenta→violet radial gradient with a glow for the
  final call to action.
- **Type:** headings in a book serif (IBM Plex Serif, 400; 500 for the hero), everything else
  in Inter; JetBrains Mono for the departures board and the status line. Scale:
  hero 40→54px, section headings 36px (40px for centred ones), lead 18px/1.6, body 16px,
  small UI 14px, board characters 28→40px.
- **Spacing:** tall and airy: ~128px above each feature section's badge on desktop, ~64px on
  phones; a 16px gap between stacked panels; a 1160px content column (left edge 136px at 1440)
  with the text column pushed in to 259px to make room for the rail.
- **Grid:** feature text ~500px wide; the wide app windows span the full 1160px column;
  three-column point grids (349px columns); split sections are 500px text + 464px media card.
- **Shapes and depth:** radii 4px (cells, small chrome), 6–8px (buttons, badges, windows),
  12–16px (cards, panels). Depth is borders, not shadows; the only glows are the CTA button
  and a soft blue under-glow on the hero window.
- **The rail motif:** on desktop a vertical track runs down the left of the feature sections,
  a station ring pulses beside each badge, and a small train car slides down the track as you
  scroll. The page ends at a departures board and a train whose doors open on the final CTA.

## Type

| Original | Kind | Width / x-height | Ours | Why |
|---|---|---|---|---|
| IBM Plex Serif | transitional book serif, slab-ish | normal width, tall x-height | **IBM Plex Serif** (`@fontsource/ibm-plex-serif`, 400/500) | the original's own face is open-licence |
| Inter | neo-grotesk sans | normal, tall x-height | **Inter Variable** (`@fontsource-variable/inter`) | the original uses Inter itself |
| JetBrains Mono | monospace | normal, tall x-height | **JetBrains Mono Variable** | same face, open licence |

(Inter Tight appears 3× in the cookie dialog only; ignored.)

## Section map

Capture "section 3" (6400px at 1440) holds five feature sections; "section 5" holds the stats
board and the train CTA. Split by what is seen.

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | railway-header | content (66 / 72px), sticky | wordmark + two-line menu button | wordmark · centred nav with chevrons · Sign in / Book a demo | — | sticky; hover bg on nav |
| 2 | hero | railway-hero | content (420 / 1242px) | framed panel 358×404: serif h1 two lines, sub, two buttons; no app window | framed panel 1400×1226: h1, sub, two buttons, app window 1062×~756 with a 5-tab pill bar overlapping its bottom | panel background art (sky); app window screenshot (one per tab) | tabs auto-advance with a progress fill; background drifts sideways while scrolling |
| 3 | build & deploy | railway-feature (framed, stacked, neutral) | content (~1710 desktop) | panel, 32px padding, badge, 4-line h2, lead, window 294×208, three points stacked, alt row | rail at x=170, text at 259, window 1160×824, 3-col points, divider, "Alternative to" row | app window screenshot | rail train scrubbed down; station pulse; |
| 4 | network | railway-feature (open, split, green) | content (~650) | text, points with dividers, alt row, media card 358×392 | text left 500px / media card 464×509 right | network diagram | same |
| 5 | scale | railway-feature (open, split, orange, top hairline) | content (~760) | as 4 | as 4 | scaling diagram | same |
| 6 | monitor | railway-feature (framed teal, stacked) | content (~1740) | as 3 | as 3, three-line lead | dashboard screenshot | same |
| 7 | evolve | railway-feature (open, stacked, green, card media) | content (~1330) | as 3 without frame | window replaced by a lighter card 1160×600 | environments diagram | same |
| 8 | testimonials | railway-testimonials | content (2602 / 1390) | plum panel, centred serif h2, sub, outline button, 3 stacked double-bordered cards, sans h3, tweet marquee | 3 cards in a row 360×500, sans heading, tweet marquee cards 360×245 | company wordmarks → text; avatars → circles | tweet row loops left forever (120s) |
| 9 | stats board | railway-stats | content (~800) | serif h2 3 lines, sub, board 12 cells wide: label row then value row (short values) | board 31 cells of 46px, one row per stat, label left, value right-aligned | — | (original: live counters flip) |
| 10 | train CTA | railway-cta | content (~1000) | doorway wider than the screen | train body 745px + platform 205px, doors 2×340×555 centred | train body, platform | train slides in from the right with the scroll; doors slide apart and the CTA fades in |
| 11 | footer | railway-footer | content (1250 / 834) | 2-col link grid; logo, status, copyright centred | featured cards left (521px), 3×2 link columns right, compliance marks, bottom row | compliance marks → text | link hover colour |

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header | scroll | sticky at top | — | `sticky top-0` |
| header nav | hover | bg transparent → card, text #dcdce0 → #f2f1f3 | 150ms ease | `transition-colors hover:bg-card` |
| hero background | scrubbed | art layer translateX −54 → −29px | over the hero's scroll | CSS `view()` scrubbed translate on the placeholder |
| hero tabs | loop / click | active pill turns violet, progress fill sweeps across it, window content swaps | ~5s per tab | React state + interval (`hydrate: load`), CSS keyframe for the fill |
| hero primary | hover | filter brightness(1.1) | 150ms | `hover:brightness-110 transition` |
| feature rail | scrubbed | train car translateY 0 → 300–540px down the track | across each section | CSS `view()` on the section, `translate` keyframe |
| feature station | loop | ring scale 1→2.2, opacity .6→0 | 3s infinite | CSS keyframes |
| testimonials tweets | loop | row translateX 0 → −50% | 120s linear infinite | CSS keyframes, duplicated list |
| stats board | entering view | (original: digits tick live with split-flap flips) | — | CSS view-timeline flip-in of each cell (rotateX 90→0), staggered by column; last digit cells flip on a slow loop |
| train CTA | scrubbed | train translateX from the right → 0; doors slide apart; CTA opacity 0 → 1 | entry 0–70% / 70–100% | CSS `view()` ranges on the section |
| CTA button | hover | glow doubles (12px/32px) | 250ms | `transition-shadow hover:shadow-…` |
| footer links | hover | colour → foreground | 150ms | `hover:text-foreground` |

Reduced motion: all off; doors render open and the CTA visible.

## Media slots → placeholders

- Hero background art → full-panel soft gradient from `glow`/`chart-5` over `card` (drifts).
- Hero app window → `bg-muted` window with a hairline border, 8px radius, ~1.4 aspect; one
  slot per tab (`tabs[].media`).
- Feature app windows (build, monitor) → `bg-muted` window, 1160×824 (1.41).
- Evolve card → `bg-card` panel 1160×600, 16px radius.
- Network / scale cards → 464×509 card with a tone-tinted gradient rising from the bottom.
- Testimonial avatars → 48px / 40px circles in `bg-muted`.
- Company and competitor logos → plain-text names.
- Train body and platform → a wide `bg-muted` surface with a glow tint at the bottom and a
  hairline floor; the doors are two plain panels (no windows, nothing drawn).

## Decisions

- One `railway-feature` block covers all five feature sections (props: `framed`, `layout`
  stacked/split, `tone`, `media`, `points`, `alternatives`, `divider`), so the page repeats one
  building block, as the original does.
- `railway-panel` (framed tinted panel) and `railway-button` are components: the hero,
  features and testimonials share the panel; header, hero, testimonials and CTA share the button.
- The rail is shown from `lg` up only, as on the original (phones have no rail).
- The stats board's live ticking is replaced by a CSS flip-in on view plus a slow flip loop
  on the last digits: no JavaScript, and still reads as a live board.
- The CTA door motion runs on `entry` ranges (not `cover`) so it completes even when the block
  is shown alone in the gallery (see the scroll-range rule).

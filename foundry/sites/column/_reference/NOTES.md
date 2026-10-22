# Column: design notes

Captured in advance (`precapture.json`, landing page only, no other pages asked for).
The recreation is a fictional platform bank, **Tidewell**, with its own copy; customers are
made-up names (Parcelo, Quillpay, Fennec, Larkspur, Orchard Loop, Mossgate).

## Design language

- **Palette.** A cool, almost-white page (#f6f6f8) with deep navy ink (#111a4a) for headings
  and a grey-blue (#7c7f88) for body. Surfaces step down in tiny increments: white buttons,
  #fbfbfc story card, #eeeff2 tiles and the closing panel. One **navy** primary (the filled
  "Sign up" button, #1d2253 with a soft top sheen), an **indigo** announcement strip
  (#3e5199 → #5568ad). Each section owns a small accent colour for its eyebrow and icons:
  teal-green (scale and stats), blue (developers, products), cyan (infrastructure), lime-green
  (segments), purple (products eyebrow), orange (the featured customer), crimson (lending).
  One long **dark teal** band (#011821 page, #172c34 panels, white 8% hairlines, pale cyan
  gradient headline) sits mid-page in a 12px-radius card inset 12px from the window edges.
- **Type.** A Swiss neo-grotesk (Suisse Int'l) for everything, headings at 500–600 with
  tight tracking (-0.02em); a grotesk mono (Suisse Int'l Mono) for uppercase eyebrows; SF Mono
  for code. Scale at 1440: 60 (hero), 52 (closing), 48 (big section heads), 40 (segment
  list), 28 (section heads), 20 (lead / product titles), 16 body, 14 small, 12 mono.
  At 390: 32–34 hero, 48 infra head, 32 products head, 40 closing, 24–28 section heads.
- **Spacing.** Sections breathe: ~120px top padding at 1440, ~60–80px at 390. Content
  column 1072px (184 → 1256 at 1440), gutters 20px on phones.
- **Grid.** Mostly a 2-column split: text in the left ~45%, art on the right. Products use
  a 1:2 split (group label | 2-col tile grid).
- **Shapes and depth.** 8px radius everywhere (buttons, tiles, panels), 12px for the big
  inset cards. Depth is whisper-quiet: hairline rings (`0 0 0 1px` at 5–12%), a 1–3px soft
  drop, white inset highlights on buttons. Dot-grid textures (1px dots at 7% on a ~16px grid)
  behind the developer copy and across the dark band.

## Type

| Original | Kind | Width / x-height | Ours | Why |
|---|---|---|---|---|
| Suisse Int'l (300–600) | Swiss neo-grotesk | normal width, large x-height | **Host Grotesk Variable** | a contemporary neo-grotesk with the same neutral, slightly squared Swiss shapes, normal width and big x-height; variable 300–800 covers 400/500/600 |
| Suisse Int'l Mono | grotesk mono | normal, large x-height | **Source Code Pro Variable** | neutral sans mono with no slab serifs (closest calm mono already in the repo) |
| SF Mono (code) | neo-grotesk mono | normal | **Source Code Pro Variable** | same face for code; one mono keeps the theme simple |
| Inter (inside product mock cards) | | | — | only inside media we replace with placeholders |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | announcement + nav | `column-header` | 40 + 45 / 40 + 62 (content) | indigo strip, wordmark + burger | strip; wordmark · 4 centred links with chevrons · sign-in + outline "Get started" | — | hides on scroll down, returns on scroll up |
| 1 | hero + logo row | `column-hero` | 950 / 880 (content) | art on top (~430px), badge, 32px headline, lead, full-width buttons, logos 3×2 | text left (badge, 60px h1, 20px lead, 2 buttons) over a full-bleed art canvas, logos in a row of 6 at the bottom | full-bleed map canvas 2000×1200 (1.67) | badge load-in; art drifts up and fades while scrolling out |
| 2 | trusted at scale | `column-scale` | 1017 / 711 | eyebrow, rule, chart art, heading, text, button, stats 2×2 | eyebrow, rule; heading/para/button left, chart art right; 4 stats in a row | chart art ~ 600×520 | stats reveal staggered (fade, rise 20px, blur), scrubbed |
| 3 | customer stories | `column-stories` | 996 / 864 | horizontal snap carousel, each card: art top, heading, chips, quote | one white card: 4 name tabs on top (active = filled accent), heading + chips + quote left, art right | story art 800×800 square-ish | tab crossfade; art scales in 0.85 → 1 on entering view |
| 4 | developer first | `column-developers` | 1327 / 800 | eyebrow, heading, text, button, 2 feature notes, panel | left copy over a dot grid; right panel: transaction card art + "Response" code | transaction card art ~ 400×180 | eyebrow cursor blink; panel rises 200px and fades in on entering view |
| 5 | infrastructure (dark) | `column-infrastructure` | 4793 / 3242 (content) | inset dark card: eyebrow, 48px gradient head, text, stack art + labels; then per product: title, text, code, panel (art + chips list) | head left, stack art + labelled rules right; then products left, one **sticky** panel right that switches with the product in view | stack art 300×360; panel art per product (~ 600×400) | labels pull apart/fade scrubbed; panel pinned; panel crossfades between products; chips rise in |
| 6 | column for | `column-segments` | 834 / 890 | eyebrow, rule, segment list (40px → 24px), paragraphs | list left, active one in a raised white pill with icon; paragraphs below; dot art right | dot art 448×600 | segment switch crossfade (click) |
| 7 | products | `column-products` | 1768 / 1212 | eyebrow, rule, 32px head, groups: label then 1-col tiles | 48px head; groups: label left, 2-col tile grid right | — | tiles rise 20px + scale 0.95 → 1 staggered on entering view |
| 8 | start building | `column-cta` | ~900 / ~520 | inset panel, 40px head, 3 stacked cards | inset grey panel, 52px head, 3 cards in a row | small dot-icon per card (built as a lucide icon on a dot tile) | fades 0.2 → 1 on entering view |
| 9 | footer | `column-footer` | ~1400 / ~550 | faded wordmark, link groups stacked | faded wordmark left, 4 link columns (products spans two) | — | link colour 0.2s |

Components: `column-button` (navy primary with an animated arrow, white secondary),
`column-eyebrow` (mono tinted tag with optional blinking block cursor), `column-code`
(code block with line numbers and simple syntax colours).

## Motion inventory

| section | trigger | what changes | timing | build |
|---|---|---|---|---|
| header | scroll direction | translateY 0 → -100% when scrolling down past ~100px, back on scroll up | 0.4s ease | small `useEffect` scroll listener, `hydrate: load` |
| hero badge | load | rises from ~12px below and fades in | 1.6s ease-out | CSS `@keyframes`, fill both |
| hero art | scrubbed while leaving view | translateY 0 → -137px, opacity 1 → 0 | scroll 0 → 1 screen | `animation-timeline: view()`, range `exit` |
| eyebrows | loop | block cursor blinks | 1s steps | CSS `@keyframes` in `column-eyebrow.css` |
| scale stats | scrubbed on entering | opacity 0 → 1, translateY 20 → 0, blur 6px → 0, staggered | entry 0% → cover 30% (+ offsets) | `view()` with per-item range offsets |
| stories | click tab | content and art crossfade | 0.6s cubic-bezier(0.76,0,0.24,1) | React state + CSS transitions, `hydrate: visible` |
| stories art | entering view | scale 0.85 → 1, opacity 0 → 1 | entry → cover 35% | `view()` |
| developers panel | entering view | translateY 200 → 0, opacity 0 → 1 | entry 0% → cover 40% | `view()` |
| infra stack labels | scrubbed | top label +80px, bottom -80px, middle ones fade and drift ±36px | across the head's view | `view()` scrubbed on the art column |
| infra panel | pinned | stays centred while the product copy scrolls past | whole products list | `position: sticky` in the right column |
| infra panel content | product in view | crossfade + scale 0.97 → 1 | 0.6s cubic-bezier(0.76,0,0.24,1) | IntersectionObserver in `useEffect`, `hydrate: visible` |
| infra chips | panel switch / entering | translateY 20 → 0, scale 0.95 → 1, staggered | 0.5s | CSS transition keyed by the active product; mobile: `view()` |
| segments | click | active pill moves, paragraphs crossfade | 0.4s cubic-bezier(0.76,0,0.24,1) | React state, `hydrate: visible` |
| products tiles | entering view | translateY 20 → 0, scale 0.95 → 1, opacity 0 → 1, staggered | entry 0% → cover 25% | `view()` |
| cta panel | entering view | opacity 0.2 → 1 | entry → cover 30% | `view()` |
| buttons (hover) | hover | bg + ring shadow change; arrow stem draws in and chevron slides 3px right | 0.2s ease | Tailwind transitions |
| links (hover) | hover | colour → ink | 0.2s ease | Tailwind transitions |

Not rebuilt (inside media): the world map dots and the route line, the rising bar chart
(2s grow loop), the 3D layer stack itself, the card/loan/account mock cards, the dot-art
segment picture. All become placeholders.

## Media slots

| slot | original | placeholder |
|---|---|---|
| hero art | full-bleed dotted world map canvas + floating transfer card, 2000×1200 | a soft radial wash from `glow`/`highlight` on the right ~60% of the hero, faint dot grid, plus a card-coloured 320×260 frame where the floating card sits |
| scale chart | rising dot/bar chart, ~620×520 | soft `highlight` radial wash, rounded |
| story art | 800×800 canvas of account cards on an orange dot field | card-coloured surface tinted with the story accent, radius 8 |
| developer card | white transaction card | white card frame 180px tall, ring shadow |
| infra stack | 3D layered stack 300×360 | muted rounded rhombus-free block: a plain `muted` rounded rect |
| infra panel art | per-product mock (card, loan stack, account card) | a `muted`/`card` rounded rect centred in the panel |
| segment art | dotted pixel picture 448×600 | a soft `highlight` wash with a faint dot grid, radius 8 |

## Decisions

- **Dark band:** `column-infrastructure` adds the `dark` class to its own card, so the
  theme's `.dark` values (the faithful dark teal) apply inside it on a light page. The
  theme's dark mode is therefore the Column dark teal; light mode is the faithful one.
- **Accent per section:** eyebrows, icons and story tabs take a `tone` prop mapped to
  `primary`, `highlight` and `chart-1…5`, so they re-theme.
- **Stories on desktop vs phones:** desktop is a tabbed single card; phones get a CSS
  scroll-snap carousel of all stories (as the original), no JS needed there.
- **Sticky panel:** one panel per product is rendered; on phones each sits under its
  product; on desktop they stack inside one sticky frame and the product nearest the window
  middle is shown.
- **Code blocks** are layout (a mono panel with coloured tokens) so they're built, with our
  own fictional endpoints and ids.
- **Cookie banner** in the captures isn't part of the design and is left out.

## Comparison round 1

Capture of ours needed four tries: the shared gallery reloads while other sessions edit
files ("execution context was destroyed"); the fourth run went through cleanly.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | layout, heights match (937 vs 950) | headline wrapped to 3 lines and lead to 3, hero 89px too tall; logos pushed below the fold | badge load-in ✓, art drift + fade scrubbed ✓ | yes: wider headline/lead measure, shorter lead |
| scale | statement at 24px, original 28px | matches (723 vs 711) | stats blur/rise reveal ✓ (static crop shows them before entry) | yes |
| stories | card carousel with art on top ✓ | tabbed card ✓ (864 vs 888) | art scale-in ✓, tab crossfade ✓ | — |
| developers | ✓ (1290 vs 1327) | ✓ (800 vs 800) | panel rises 200px ✓ | — |
| infrastructure | product column overflowed sideways (code's max-content width stretched the grid track); text clipped by the card | 318px too tall: last product kept the full 660px min height plus 200px bottom padding | labels pull together ✓, pinned panel ✓ (4 half-screens), panel switches ✓, chips rise ✓ | yes: `grid-cols-1` + `min-w-0`; last product only as tall as the panel, 144px bottom |
| segments | 75px shorter than the original | ✓ (897 vs 890) | click crossfade (not scroll-sampled) | yes: more bottom padding on phones |
| products | ✓ | ✓ (1211 vs 1212) | tiles rise + scale staggered ✓ | — |
| cta | ✓ | lead wrapped to 2 lines; cards 8px low | panel fade 0.2 → 1 ✓ | yes |
| footer | ✓ | link rows 41px vs 44px | link colour hover | yes |
| overflow | fits at 360 / 768 / 1024 (the infra clip hid it) | | | |

## Comparison round 2

Heights now follow the original (1440: hero 876 vs 880, scale 723 vs 711, stories 888 vs
864, developers 800 vs 800, infrastructure 3344 vs 3242, segments 897 vs 890, products 1211
vs 1212, closing panel + footer 1112 vs 1074). No horizontal overflow at 360/768/1024.
Motion list in `ours-design.md` matches the inventory: header hides on scroll down, hero
art scrubbed up 140px and faded, stat reveal (rise 20px + blur), story art scale 0.85 → 1,
developer panel rise 200px, stack labels pulling together, one sticky panel pinned through
the products with the panels switching, chip and tile rise + scale, closing panel fade.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | ✓ | headline and lead on two lines each, logos back in the first screen | ✓ | — |
| infrastructure | products no longer overflow; still ~150px taller than the original (our snippets are a line or two longer) | +100px (same reason) | chips rise in on phones ✓ | gap between products on phones 120 → 96px |
| static crops | stats, chips and tiles look empty in the `section` crops: they're the before-entry state of CSS view timelines, taken at scroll 0; the scroll frames show them in place | | | intended |

Re-theme check: `column-products` (sample-ember light) and `column-stories` (sample-ember
dark) both pick up the other theme's colours and type with nothing hard-coded.

## What still differs, on purpose

- All art is placeholder: the dotted world map and floating transfer card, the bar chart,
  the customer art, the developer transaction card, the 3D layer stack, each product's
  mock card, the segment dot picture. Their frames keep the original's size and place.
- The customer and press marks are plain text names (some with a lucide icon).
- The dark band uses the theme's `.dark` values, so under the gallery's dark mode the whole
  page goes teal and the band blends in.

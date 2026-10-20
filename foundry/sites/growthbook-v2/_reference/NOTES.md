# growthbook-v2 — recreation notes

Inspiration: https://www.growthbook.io/ (landing page only; no other pages were asked for).
Captured in advance (`precapture.json`, `pages: []`); the original was not opened.

Fictional company for the copy: **Fernlight**, an experimentation / feature-flag / analytics
platform for product teams and their coding agents. Every customer, publication and
integration name in the demos is made up.

## Design language

- **Palette roles.** A near-white page (`#fafafa`) with deep navy text (`#151e3d`), one
  brand violet (`#6e56cf`, hover `#5643b8`) for every filled CTA and link hover, a pale
  lavender (`#f6f2fd`) for alternate bands (case studies, SDKs), white cards. Dark bands
  are navy (`#151e3d`, testimonials / CTA card / footer) and a deeper ink violet (`#1a1238`,
  case-study cards). Light, grainy gradients of violet → periwinkle → mint (`#a1ded2`) fill
  every media frame. A lime (`#abe338`) appears only as code-string colour.
- **The rail.** The page is framed by 1px vertical hairlines at the page-width edges
  (x=80 and x=1360 at 1440; x=16 / x=374 at 390), sometimes a third one in the middle.
  Beside section headings the left rail carries a 4px *gradient accent* (violet → white →
  blue → navy → green → mint), which sticks to the top of the window while its section
  scrolls by. This is the site's signature.
- **Type scale.** One face, Inter, nearly always weight 400 — even the 68px hero. Headings
  are large and airy: hero 68/1.1 (44 at 390), section h2 56/1.2 (36/1.3 at 390), card h3
  48/1.2, stats and case numbers 40/1.3, body 16/1.65 and 18/1.5, small UI 14px. IBM Plex
  Mono at 14px for eyebrows ("Experimentation"), stat labels, the "Read the story" links
  and the footer's bottom row; 10px mono for blog categories.
- **Spacing rhythm.** Generous: ~120–140px between feature rows at 1440, 64–80 at 390.
  Content sits 40px inside the rail at 1440, 16–40px at 390.
- **Grid.** 1280px page; features are a 50/50 split (text left, 578px square media
  right); case cards ~400px in a sliding row; footer 1 brand column + 5 link columns.
- **Shapes.** 8px buttons (58px tall in the hero, 58 in rows), 12px cards and media
  frames (16px at 390), pill tab group and GitHub-stars pill (fully round), 50px round
  arrow buttons.
- **Depth.** Almost flat: hairline borders (`#d2d2db`), a faint `0 4px 20px rgb(0 0 0/4%)`
  on white tiles; depth comes from the gradient media panels and the dark bands.

## Type

| Original | Class | Width / x-height | Ours | Why |
|---|---|---|---|---|
| Inter (400/500) | neo-grotesk sans | normal, tall x-height | **Inter Variable** (`@fontsource-variable/inter`) | the original uses Inter itself, so no stand-in is needed |
| IBM Plex Mono 400 | grotesque monospace | normal, medium x-height | **IBM Plex Mono** (`@fontsource/ibm-plex-mono`, 400 + 500) | same open-licence face (OFL) |

## Section map

Heights are content-sized unless marked; the capture marks no section "sized by the window".

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | announcement + nav | `growthbook-v2-header` | content (158 / 120) | violet bar, 2 lines centred; nav: wordmark, stars pill, burger | violet bar 38px; nav 80px: wordmark, 5 links (3 with chevrons), stars pill · Sign in · outline + primary buttons | — | sticky; ≥1024 slides away on scroll down, back on scroll up; link colour hover |
| 2 | hero | `growthbook-v2-hero` | content (905 / 1065) | centred 44px h1, 18px sub, two full-width buttons stacked (outline, then primary); edge-to-edge gradient panel 338px tall with the screenshot cropped | centred 68px h1 on 2 lines, sub max 480px, two 176×58 buttons side by side; 1280×595 gradient panel radius 12 with a dark pill tab group and a screenshot cropped by the panel's bottom | screenshot 860×443 · panel backdrop | tab switch; button hovers |
| 3 | logo marquee | `growthbook-v2-logos` | content (~230) | caption, one row sliding | caption, one row sliding | — (fictional wordmarks as text) | marquee loop 100s |
| 4 | platform rows | `growthbook-v2-platform` | content (~3000) | intro h2 36px; each row: eyebrow, 36px h3, text, full-width button, then 358 square media | intro h2 68px; 3 rows: text left (56px h3), 578 square media right | 3 × 578² gradient panel + inner screenshot | rail accent sticky; button hovers |
| 5 | case studies | `growthbook-v2-cases` | content (~900) | lavender; h2, full-width outline button; one 300px card visible, a scroll bar under it | lavender, rails at both edges + mid line on the heading row; h2 left, outline button right; 3 ink cards (~400×466) | — (wordmarks as text) | track scrubbed sideways with the scroll; card wordmark de-blurs on entering |
| 6 | stats + deploy | `growthbook-v2-deploy` | content (1515 / 973) | violet→navy gradient band; 3 stats stacked with hairlines; 2 white cards stacked | 3 stats with left hairlines in a row; 2 white cards side by side (radius 12) with a gradient edge accent | 2 × 80px icon art | — |
| 7 | integrations | `growthbook-v2-integrations` | content (~760) | h2, text, outline button; 3 horizontal rows of logo tiles sliding | h2 + text + outline button left; 3 columns of white tiles right, drifting vertically, fading at top/bottom | — (names as text) | rows/columns loop (CSS) |
| 8 | why us | `growthbook-v2-why` | content (~720) | h2; tabs as a sideways row with underline; gradient cards sliding | h2; vertical tab list left (active white with rail accent), 317×396 gradient cards right | card art (placeholders) | tab switch; track scrubbed sideways with the scroll |
| 9 | cost | `growthbook-v2-cost` | content (~800) | h2, text, full-width button; chart below | text left, chart right with two chips and glowing dots | chart illustration | dot glow pulse loop (subtle) |
| 10 | latest posts | `growthbook-v2-posts` | content (1509 / 811) | stacked: big post, then 3 posts each image-over-text | big post left (488×275), 3 rows right (219×122 + text); background fades to mint | 4 thumbnails | title hover colour |
| 11 | SDKs | `growthbook-v2-sdks` | content (1054 / 655) | lavender; h2, text, stacked buttons; white panel below | text left, white panel right with select, label, dark code block, docs link | — | select switches snippet; hovers |
| 12 | testimonials | `growthbook-v2-testimonials` | content (841 / 768) | navy gradient; arrows top right; one quote | arrows top right; 3 quotes in a row, active bright, others dim | — (wordmarks as text) | prev/next; opacity 0.3s |
| 13 | CTA | `growthbook-v2-cta` | content (706 / 865) | gradient backdrop, navy card: art top right, h2, text, stacked buttons | navy card 1280×607 radius 12: text left, arrow art right | arrow art 480² | outline highlight loops along the card edge (15s) |
| 14 | footer | `growthbook-v2-footer` | content (1473 / 715) | brand, then link groups 2 per row, socials, badges, legal | brand + socials + badges left, 5 link columns, mono legal row | — | link hover |

Shared components: `growthbook-v2-button`, `growthbook-v2-heading`, `growthbook-v2-eyebrow`,
`growthbook-v2-rail-accent`, `growthbook-v2-panel` (the gradient media placeholder),
`growthbook-v2-smooth-scroll` (Lenis, seen in the capture).

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| page | wheel | smooth (Lenis) scrolling | ~1.1s glide | `growthbook-v2-smooth-scroll` (lenis), hydrate load |
| header | scroll (≥1024) | translateY 0 → −100% on scroll down, back on scroll up | 0.4s cubic-bezier(.4,0,.2,1) | small scroll listener in a `useEffect`, hydrate load |
| header | hover | link colour → violet | 0.25s ease | `transition-colors duration-250` |
| buttons | hover | primary bg → darker violet; outline border → foreground | 0.25s ease | Tailwind `hover:` + transition |
| logos | loop | row translateX 0 → −50% | 100s linear (we use 60s, a 10-logo set is shorter) | CSS keyframes `growthbook-v2-logos-slide` |
| rail accent | scroll | sticks to the window top while its section passes; grows in on entering | entering view 0–40% | `position: sticky` + CSS view() `scaleY 0→1` |
| case cards | scroll (scrubbed) | track translateX 0 → −overflow | through the section | CSS view() timeline + container units; plain horizontal scroll without support |
| case cards | entering view | wordmark blur 6px → 0 | entry 0–60% | CSS view() |
| integrations | loop | columns drift up/down (rows sideways at 390) | 40–55s linear | CSS keyframes |
| why cards | scroll (scrubbed) | track translateX | through the section | same as case cards |
| why tabs | click | card set switches | instant | React state, hydrate visible |
| cost | loop | glow ring pulse on the two dots | 3s ease-in-out | CSS keyframes |
| posts | hover | title → violet | 0.25s | `hover:` |
| testimonials | click | active quote opacity 0.5 → 1 | 0.3s ease | React state, hydrate visible |
| CTA | loop | a bright segment slides along the card's outline | 15s | CSS keyframes on `left` |
| CTA | scroll (scrubbed) | outline drifts up ~30px | through view | CSS view() translateY |

Skipped: the cookie banner, chat widget and accessibility bubble (third-party overlays,
not the site's design).

## Media slots → placeholders

- hero screenshot (860×443 at 1440, cropped by the panel) → `bg-card` frame with a muted
  top bar, inside a `growthbook-v2-panel` violet gradient frame;
- platform rows: 3 × square panel (violet / mint / sky gradients, faint grid lines), inner
  screenshot → white `bg-card` rectangle of the same proportion;
- deploy card icons (80px) → small soft-gradient squares;
- why cards art → bottom-left soft-gradient blob area inside each card;
- cost chart (two crossing curves) → a faint column grid area (layout chrome) with the two
  chips and glowing icon dots, curves omitted;
- posts thumbnails (16:9) → `growthbook-v2-panel` gradient;
- CTA arrow art → glow-tinted soft square.

## Decisions

- Light is the faithful mode. Navy and ink bands use the theme's `dark` class locally (the
  established foundry pattern), so the dark theme's background is navy `#151e3d` and its card
  is the ink violet `#1a1238`.
- `--page-width: 80rem`, `--page-gutter: 1rem`, `--radius: 0.5rem` (lg 8px buttons, xl
  12px cards, 2xl 16px phone media), `--section-y: 7.5rem` (blocks use ~55% of it below
  1024px).
- `--highlight` = lime, used only on dark code surfaces.
- The gradient rail accent stops come from tokens (`--foreground`, `--primary`, `--card`,
  `--chart-2` blue, `--chart-3` green, `--chart-4` mint).
- The Swiper autoplay of the two card rows is rebuilt as a scroll-scrubbed slide (CSS, no
  JS); without scroll-timeline support (or with reduced motion) they are plain swipeable rows.
- Brand social icons don't exist in lucide 1.x; the footer takes any icons as props and the
  demo uses generic ones (Play, Code, Users, AtSign).

## Round 1 (ours vs original, light mode)

Page height: 390 14568 vs 14338 px; 1440 12035 vs 11984 px. Every section is content-sized in
both (the original marks none "sized by the window"). Motion list in `ours-design.md`: header
sticky + slides away at 1440 (−100px, as the original's −120); logo marquee loop; cases and why
tracks scrubbed sideways; case wordmarks de-blur on entry; integration lanes loop (sideways at
390, vertical at 1440); cost dots pulse; CTA outline drifts + segment glides on `left` 15s; rail
accent sticky + grow-in. Hover: link colour → violet 0.25s, primary bg darkens, outline border →
foreground — same as the original's list.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | ok | h1 wrapped to 3 lines (container 832px too narrow for our longer first line); sub 3 lines | — | yes: h1 box 992px, shorter sub |
| platform intro | intro 44px / 4 lines vs 40px / 3 | ok | rail accent ok | yes: 40px below 768 |
| cases | heading broke at the desktop \n points | progress bar showed at 1440 (unlayered CSS beat `lg:hidden`) | slide ok | yes |
| integrations | page 1387px wide at 360/768: grid column grew to the marquee | ok | ok | yes: `grid-cols-1` + `min-w-0` |
| why | heading broke at \n ("teams" alone) | ok | ok | yes |
| SDKs | buttons narrower than the original (right padding 40 vs 16) | code block navy instead of neutral graphite | — | padding yes; graphite no (no token for it; noted) |
| testimonials | ok | arrow icons 16px vs 20px | ok | yes |
| CTA | art slot 176px vs ~110px | ok | ok | yes: 128px |
| footer | ok | page 1054px wide at 1024 (fixed 170px columns) | — | yes: columns shrink |

## Round 2

Page height now 390 14475 vs 14338 px, 1440 11913 vs 11984 px. Fits at 360 / 768 / 1024.
Motion list unchanged from round 1 (all inventory rows present).

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | ok | h1 on 2 lines, sub on 2 lines, like the original | — | — |
| integrations | text column normal width; rows slide | ok | ok | — |
| cases | ok | progress bar gone at 1440 | ok | — |
| why (dark mode) | navy cards turned white (wash mixed from `--foreground`) | same | — | yes: navy wash starts from `--card` under `.dark` |
| hero tabs (dark mode) | — | tab group turned white | — | yes: `dark:` card-coloured group |
| case wordmarks | blurred in the static full-page crop (before entry) | same | intended: they sharpen on entering view | no change |

Re-theme check: `growthbook-v2-platform` and `growthbook-v2-cases` under `sample-ember` (light) pick up
its serif, terracotta primary, cream page and brown ink cards with nothing left over in violet.

Left as is: SDK code block is navy (`--popover` in dark), not the original's neutral graphite;
hero / platform / post / CTA / why-card art, deploy icons and the cost chart's curves are
placeholders of the same size and frame.

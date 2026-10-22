# meow — recreation notes

Original: https://www.meow.com/ (captured in advance, 2026-10-21; only the landing page was
asked for). Fictional stand-in: **Tallyhold**, business banking for software agents and
remote teams. Its wordmark is plain text in the theme font with a lucide icon; no logo shapes.

## Design language

- **Palette roles.** A white page with two kinds of contrast blocks: a deep blue-black ink
  (#171923) for the hero, the big stat card and the footer, and a pale grey (#f6f6f6) for
  media panels, the testimonial band and the closing CTA. Text is a near-black ink
  (#181b25), secondary text a warm graphite (#36373a). One hot orange (#ff6631) for
  first-screen CTAs and the "new" label; a clear blue (#387bf0) as the second accent (the
  closing CTA button, product-UI accents). Green dots (#1cba6b) mark the capability chips.
  Hairlines are #ebebeb.
- **Type scale.** One sans everywhere. 56/64 hero title (32/40 on phones), 32/40 section
  titles with −0.8px tracking (24/32 on phones), 28/36 feature-row titles and the quote
  (18/24 and 24/32 on phones), 16/24 body, 14/20 UI, 13 and 11 px legal small print.
  Stats: 120 px in the dark card, 56 px in the light ones (72/56 on phones). Weights 400
  and 500 only (500 for every heading).
- **Spacing rhythm.** ~112 px between sections on desktop, a hairline rule at the top of
  some sections with 64 px under it; ~40 px on phones. Cards: 20 px gaps.
- **Grid.** 1152 px content column (144 px margins at 1440), 20 px phone gutter. Two-column
  splits (text | media) for hero, agent section and feature rows; a 3-column card grid.
- **Shapes.** Small 4 px radius on everything (buttons, chips, panels, cards); pills only
  for the "new" badge. Flat: no shadows except the product mock-ups inside images.
- **Depth.** None to speak of: colour blocks, hairlines and the dark/light alternation do
  the work.

## Type

| Original | Class | Width | x-height | Ours | Why |
|---|---|---|---|---|---|
| Untitled Sans (Klim), 300–700 | neutral neo-grotesk, plain "generic" sans, single-storey g, double-storey a | normal | large | **Public Sans Variable** | the closest open neo-grotesk on the same traits: plain, normal width, large x-height, single-storey g, a full weight axis so 400/500 match. Inter/Geist avoided by rule. |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | fixed top bar | meow-header | 65 px, fixed | logo + hamburger | logo, 5 nav items, sign-in, orange CTA | — | transparent on the dark hero → white with hairline once scrolled; hover nav → white bar |
| 2 | dark hero | meow-hero | content (852 px desktop, ~1140 phone) | badge, title, text, email form, small print, globe, logo marquee — one column | text column left (≈560), round globe 520 right, marquee under the text column | globe (canvas) 520×520 round → round placeholder with a glow rim | logo marquee loop 60s |
| 3 | agent onboarding | meow-agent | content | video first, then title, text, full-width buttons, chips | text + buttons + chips left, video 552×311 right | video 16:9 | hover: button colours |
| 4 | platform grid | meow-platform | content | stacked cards | hairline, title, 3×2 card grid with top rules and small print under each row | 6 panels 371×319 grey | — |
| 5 | testimonial band | meow-quote | content | photo, quote, name, small print, company mark at the end | grey band; mark, quote 28/36, name, small print left; photo 600×440 right, bleeding 80 px past the column | photo 600×440 | — |
| 6 | stats | meow-stats | content | stacked: dark card, two outlined | title; dark card left spanning 2 rows (120 px figure at its foot), two outlined cards right | — | — |
| 7 | checking features | meow-feature-rows | content | per row: panel, then text | title + small print, 3 rows alternating text/panel (566×380 grey) | 3 panels | hover: "learn more" fades |
| 8 | FAQ | meow-faq | content | rule, title, plus-rows | same, wider | — | accordion open/close |
| 9 | closing CTA | meow-cta | content (298 px) | grey band, centred title, line, white email form, blue button | same | — | hover: button 90% |
| 10 | footer | meow-footer | content | link groups in 2 columns, mark, copyright, rule, legal text | 4 link columns, mark + copyright row, rule, legal text | — | — |

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header | scroll past the hero top | background transparent → white 80% + blur, text white → ink, hairline appears | 150 ms ease | small `useEffect` scroll listener toggles a `data-solid` attribute; `hydrate: "load"` (the phone menu needs state too) |
| header | hover the bar | the whole bar turns white with ink text (group hover) | all 150 ms | `group-hover:` classes |
| hero | loop | logo row slides left forever (`scroll-x`, 60 s linear), edges faded by a mask | 60 s linear infinite | CSS `@keyframes meow-hero-marquee` on a doubled row; off under reduced motion |
| buttons | hover | orange CTA → ink (`Get started with Claude`), outline → white fill, header CTA opacity .9, blue CTA 90% | 100–150 ms cubic-bezier(.4,0,.2,1) | Tailwind `transition` + `hover:` |
| chips | hover | text and border darken ("and more") | 150 ms | Tailwind |
| feature rows | hover "learn more" | opacity 1 → .8 | 200 ms | Tailwind |
| FAQ | click | plus turns to a cross, answer opens | 200 ms | native `<details>`, CSS rotate |

The capture's "scrubbed translateX" on `animate-scroll-x` is the marquee loop being sampled
while scrolling, not a scroll-linked effect. The "scale 1.00→1.00" reveal is a no-op. No
smooth-scroll library was seen, so none is used.

## Media slots → placeholders

| slot | size | placeholder |
|---|---|---|
| hero globe (canvas) | 520×520 desktop, 320×320 phone, circle | round `bg-muted`-free dark disc with a `glow`-coloured ring and soft outer glow (the frame only, no dots or continents) |
| hero customer logos | wordmarks | plain-text fictional company names in muted ink |
| agent video | 552×311 (16:9), square corners | `bg-muted` 16:9 box |
| platform panels ×6 | 371×319 (≈1.16), 4 px radius | `bg-muted` panels |
| testimonial photo | 600×440 (1.36), 4 px | `bg-muted` box, `object-cover` when filled |
| feature-row panels ×3 | 566×380, 4 px | `bg-muted` panels |

## Decisions

- **Dark scopes.** The hero, the big stat card and the footer wrap themselves in the theme's
  `.dark` tokens (class `dark`), so they stay ink-dark in light mode and pick up any theme's
  dark palette. In dark mode the whole page is ink and the grey bands become a step lighter.
- **Blue = `highlight`.** The orange is `primary`; the blue closing CTA uses `highlight`,
  the chip dots use `chart-2` (green).
- **Header colour change** uses a scroll listener rather than a CSS scroll timeline: CSS
  animations override `:hover` styles, and the bar also turns white on hover.
- **Nav dropdowns** of the original (mega menus) are rebuilt as a simple hover/focus panel
  listing each group's links with a one-line description; the CSS shows them on
  `group-hover` / `focus-within`.
- **Legal small print** is kept as a slot (`fineprint`) because it's part of the layout's
  rhythm (11–13 px blocks under the hero form, under each card row, in the footer); our text
  is our own short fiction.
- Components pulled out: `meow-button` (orange / ink / outline / blue / link variants),
  `meow-email-form` (hero and CTA), `meow-mark` (wordmark), `meow-heading` (section title
  with optional small print).

## Round 1 (ours vs original, light mode)

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| all | headings, buttons, chips look a weight lighter: Public Sans 500 is thinner than Untitled Sans 500 | same | — | yes: every 500 became 600 |
| hero | page 2490 px wide at 360/768: the marquee's `w-max` track widened the implicit single grid column, so text and form ran off-screen | — | marquee loops (60 s, CSS) ✓ | yes: `grid-cols-1` + `min-w-0` |
| hero | — | globe slot stretched into a 520×600 oval by the flex row's stretch | — | yes: `items-start` |
| hero | — | 797 px tall vs 852: our small print is shorter | — | yes: two more sentences in the demo |
| agent | — | title balanced onto two short lines (original fills the line) | hover colours ✓ | yes: no `text-balance` (also on section headings) |
| quote | ✓ | photo column started at 700 px instead of 780 (the bleeding photo's width fed back into the `1fr` track), so the quote was narrower and the photo 496 px tall | — | yes: fixed 37.5rem + `minmax(0,1fr)` columns |
| footer | — | link rows 40 px apart vs 36 | — | yes: links are blocks |
| header | fixed ✓ | fixed ✓, transparent over hero ✓, white once scrolled ✓ | — | — |
| stats, platform, feature rows, FAQ, CTA | ✓ | ✓ (spacing within ~8 px) | — | — |

## Round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | ✓ fits at 360/768/1024 now; ~45 px taller than the original (our badge and title wrap a little differently) | ✓ globe round 520×520 at the same place; 830 px vs 852 | marquee ✓ (CSS loop, 60 s; the capture again reads it as "scrubbed translateX", like the original's) | title: dropped `text-balance` so it fills the line like the original |
| header | ✓ | ✓ transparent over the hero, white with hairline once scrolled (scroll frame 1) | fixed ✓ | — |
| quote | ✓ order photo → quote → name → small print → mark | ✓ photo at 780–1376, 600×437; quote shorter by one line (our text is shorter) | — | content only |
| stats | ✓ | ✓ | — | dark card gets a hairline so it doesn't vanish in dark mode |
| main total | 9616 px vs 9968 | 6011 px vs 6088 | — | the rest is copy length |
| dark mode | — | whole page in the ink palette, grey bands one step lighter; reads as the same site | — | — |
| re-theme | — | meow-stats and meow-agent under `sample-ember`: serif display, rounded corners, ember button; layout intact | — | — |

Left as is: the footer is shorter than the original's (1222 vs 2269 px at 1440) because the
original's legal text runs to ~1700 px; ours is nine paragraphs of our own and the block takes
any number. Hover-only effects (nav drop-downs, button colours) are built but the capture's
hover probe only samples a few elements.

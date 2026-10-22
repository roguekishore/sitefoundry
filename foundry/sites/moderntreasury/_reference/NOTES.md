# moderntreasury — recreation notes

Captured in advance (`precapture.json`, landing page only, no other pages asked for). A
cookie notice covers the lower right of every 1440 frame and the lower half of every 390
frame; it is the site's consent banner and is not recreated.

Fictional company for the copy: **Kestrel**, a payment-rails API ("Kestrel Rails").

## Design language

- **Palette roles.** A plain white page with near-black ink (#151515) for all headings and
  primary buttons. Four very pale tinted surfaces carry the sections: a warm stone (#f8f5f4)
  for the big feature cards, a warm paper (#f8f7f5) for the form, a blush (#f9f6f8) for the
  quote card, a cool aqua tint (#f0f8f9) for the three value cards, and a mint tint
  (#f0f9f5) for the API response pane. The brand is a bank green (#29735c, #215b4b for
  text) used sparingly: the wordmark, the active stepper dot, the selected toggle, mono step
  numbers. A pale mint (#bae0cf) highlights code values and fills the footer's Subscribe
  button. The footer is a deep forest green (#0c221d) with white text at 60%.
- **Type scale (1440 / 390).** H1 71/47px, weight 400, tight tracking (~-0.03em), line
  height ~1.1. Section H2 47/32px at 1.25. Feature-card titles 32/26px light (330).
  Value-card titles 21px. Lead text 18px/27 muted. Body 16/24, UI 14/21. Mono labels 11px
  uppercase with +0.04em tracking; code 13px/22 (11.5/19 on phones).
- **Spacing rhythm.** Sections ~60px top and bottom at 1440 (≈40px on phones), heading to
  content 56px, card padding 48px (feature) / 32px (value) / 24px (form) and 48px gaps
  between big cards, 24px between value cards.
- **Grid.** 1200px content (120px sides at 1440), 20px gutters on phones. Feature cards 2×2,
  stats and value cards 3-up, footer 6 columns (2 on phones).
- **Shapes.** Square-ish: buttons, tags and code chips 2px, cards 8px, the code panel 4px.
  Outline buttons are a 1px inset ring of ink. Circle arrow buttons for the carousel.
- **Depth.** Nearly flat. The sticky header has a soft drop shadow; small floating UI
  cards in the artwork have soft shadows (media, not rebuilt). Everything else is fills and
  hairlines (#151515 at 13–20%).

## Type

| Original | Classification | Width / x-height | Ours | Why |
|---|---|---|---|---|
| mt-display / mt-neue-display (headings, stats) | neo-grotesk display, Neue Haas-like | normal width, large x-height, tight spacing | **Host Grotesk Variable** | open neo-grotesk with the same straight-sided, large-x-height build; tracked tight it reads like the original's display cut |
| mt-sans 100–900 (body, UI, weights 330/360/450/600) | neo-grotesk text | normal width, large x-height | **Host Grotesk Variable** (300–800) | same family keeps the system tidy; the variable axis gives the in-between 330/360/450 weights (330 lands just above the 300 floor) |
| mt-mono 400/600 (labels, code) | monospace, slightly humanist | normal width | **IBM Plex Mono** 400/600 | close letterforms and both weights; already in the repo |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | top bar | moderntreasury-header | content, 56 / 65px | wordmark left, menu button right | wordmark left, 6 nav items centred (4 with chevrons), Log in + Start building outline, Talk to us filled | — | sticky at desktop; hover tint + chevron flip |
| 2 | announcement | moderntreasury-announcement | content, 70 / 49px | left-aligned two lines | one centred line on pale grey | — | link arrow nudge |
| 3 | hero | moderntreasury-hero | content, 694 / 700px | 3-line H1, lead, two buttons side by side, slot 350×263 | 1-line H1 71px, lead 2 lines, buttons, slot 1024×370 | rail diagram video | faint grid behind (static) |
| 4 | logo strip | moderntreasury-logos | content, 227 / 287px | rules top/bottom, marquee | same, wider | customer logos → plain-text names | marquee loop, leftward |
| 5 | feature cards | moderntreasury-features | content, 1935 / 1397px | heading 2 lines, 4 stacked cards | heading, 2×2 cards 576 wide | 4 product images 576×324 (350×197) flush at card bottom | link arrow nudge |
| 6 | stats | moderntreasury-stats | content, 436 / 265px | 3 stacked, rule between | 3 columns each ruled top + bottom | — | — |
| 7 | API steps + code | moderntreasury-api | content, 990 / 913px | dots-only stepper, prev/next row with current step, full-width toggle, stacked panes | heading 2 lines, lead, 4-step stepper with labels, code panel request 60% / response 40% | — (code is UI, built) | ping ring on next step (loop), step + toggle clicks |
| 8 | value cards | moderntreasury-values | content, 794 / 442px | heading, 3 stacked cards | heading, 3 cards | — | — |
| 9 | testimonial | moderntreasury-quote | content, 624 / 416px | arrows top right, stacked card: name, quote, person, button | arrows top right, card: wordmark left, quote + person + button right | customer logos → plain-text wordmark | slide switch by arrows; arrow nudge |
| 10 | contact form | moderntreasury-contact | content, 870 / 874px | heading, lead, form card, names side by side | same, wider | — | button arrow nudge |
| 11 | footer | moderntreasury-footer | content, 1125 / 623px | newsletter stacked, 2 link columns ×3 rows, legal stacked | newsletter row, 6 columns, legal row with socials | — | link colour on hover |

Nothing on this page is "sized by the window".

## Motion inventory

| section | trigger | what changes | timing / easing | build |
|---|---|---|---|---|
| header | scroll (pinned) | nav stays at the top from desktop up (capture: pinned 12 half-screens at 1440, not at 390) | — | `lg:sticky top-0` |
| header nav | hover | background → ink 5%, chevron rotates 180° | 200ms cubic-bezier(.4,0,.2,1) | Tailwind `hover:` / `group-hover:rotate-180` |
| buttons and arrow links | hover | arrow moves right 2px | 150ms cubic-bezier(.4,0,.2,1) | `group-hover:translate-x-0.5` |
| logos | loop | the row slides left continuously (capture: translateX −88→−555px while sampling) | linear, ~45s per set | CSS `@keyframes` marquee in `.css`, doubled list |
| API stepper | loop | ping ring around the next step: scale 1→2, opacity 1→0 | 1000ms, cubic-bezier(0,0,.2,1), infinite | CSS `@keyframes` (Tailwind `ping` pattern) |
| API stepper / toggle | click | active step and code sample change | instant colour change 150ms | React state (`hydrate: visible`) |
| quote | click | next / previous testimonial | 150ms colour | React state (`hydrate: visible`) |
| footer links | hover | white 60% → white | 150ms | Tailwind `transition-colors` |

No scroll reveals: the capture shows none, and every scroll frame has content in place.

## Media slots

| slot | original | placeholder |
|---|---|---|
| hero diagram | autoplay video, 1024×370 (2.76:1) at 1440, 350×263 (4:3) at 390, no frame | `moderntreasury-media` surface, aspect 4/3 → 2.76/1 from md, no radius |
| feature card art ×4 | image 576×324 (16:9), flush to the card's bottom and sides | `moderntreasury-media` surface, aspect 16/9, inside the card's rounded clip |
| testimonial logo | image ~200×115 | plain-text wordmark of a fictional customer |
| logo strip | customer logos | plain-text fictional company names in varied weights |

The placeholder (`moderntreasury-media`) is a pale mint-to-stone wash from `glow` and
`muted`, plainly empty.

## Decisions

- **Footer colours** come from the theme's own `.dark` tokens: the footer carries the `dark`
  class, so it is the forest green in both modes and turns into any other theme's dark
  background under that theme.
- **Dark sibling**: the footer's forest green becomes the page, cards a step lighter green,
  ink buttons become the pale mint, tinted surfaces become low-contrast greens.
- **`--radius` 0.5rem** (cards 8px = `rounded-lg`); 2px chips use `calc(var(--radius)/4)`.
- **Section padding** is `--section-y` 3.75rem at desktop, two thirds of it on phones.
- **Stepper behaviour**: the original likely advances its steps on its own; the capture only
  proves the ping loop, so ours changes step on click (no auto-advance).

## Capturing ours

The shared gallery reloads whenever another session edits files, which killed every
`capture.mjs` run (`window.__cap` lost). Ours was captured with a /tmp copy of
`capture.mjs` that adds one line, `context.routeWebSocket(/./, () => {})`, to stub Vite's
live-reload socket. Nothing else changed; the skill's script is untouched.

## Round 1 (ours vs original)

Heights in px, ours / original.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | 56 / 56; wordmark lighter and smaller than the original's heavy capitals | 65 / 65 | sticky at 1440 only ✓, nav tint + chevron flip ✓ | yes: wordmark 18px extrabold |
| announcement | 70 / 70 | 49 / 49 | link arrow nudge ✓ | — |
| hero | 696 / 694 | 723 / 700: lead ran to three lines | grid static ✓ | yes: shorter lead, max-w 42rem → 696 |
| logos | 196 / 227: no top padding | 226 / 287 | marquee loop ✓ (45s) | yes: py instead of pb; edge fade also faded the hairlines, so the mask moved inside the bordered box |
| features | 2021 / 1935: media gap 40 vs 24, section padding 40 vs 30 | 1423 / 1397: heading-to-grid 8px too big | arrow nudge ✓ | yes: mt-6 on phones, lg:mt-12, phones padding ×0.5 |
| stats | 436 / 436 | 269 / 265 | — | — |
| API | 979 / 990 | 929 / 913 | ping on next step ✓ (1s loop), clicks ✓ | left (our lead is a line longer) |
| values | 813 / 794 | 450 / 442; titles too heavy (450) | — | yes: regular titles, lg:mt-12, phones padding ×0.5 |
| quote | 636 / 624; quote indented 8px too far (pl + hanging quote) | 416 / 416; button bottom-aligned, original centred | arrows ✓ | yes: hanging indent only, items-center |
| contact | 876 / 870 | 924 / 874: label→field 8px and row gap 20px too big | — | yes: mt-0.5, gap-y-4, pt-7 → 874 |
| footer | 1213 / 1125: links every 32px vs 29px | 644 / 623 | link colour hover ✓ | yes: leading 1.5 on the lists, lg:pt-12 |

Overflow at 360 / 768 / 1024: fits ✓. Nothing is window-sized in either capture ✓.

## Round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | 56 / 56 | 65 / 65 | ✓ | — |
| hero | 696 / 694 | 696 / 700 | ✓ | — |
| logos | 226 / 227 | 286 / 287 | ✓ | — |
| features | 1938 / 1935 | 1415 / 1397 (our card copy is a line longer) | ✓ | — |
| stats | 436 / 436 | 269 / 265 | — | — |
| API | 979 / 990 | 929 / 913 | ✓ | — |
| values | 794 / 794 | 442 / 442 | — | — |
| quote | 636 / 624 | 416 / 416 | ✓ | — |
| contact | 830 / 870 (the original's long question wraps three lines) | 874 / 874 | — | — |
| footer | 1162 / 1125 | 612 / 623 | ✓ | — |

Re-theme: `moderntreasury-api` and `moderntreasury-footer` under `sample-ember` take its
cream, orange and dark brown (the footer turns into ember's dark background) ✓. In
dark mode the code marks were white on pale mint, which was hard to read; they are now
`highlight` at 25%, which reads in light, dark and other themes.

Left as is: Host Grotesk is a touch rounder and wider than the original's grotesk;
copy-length differences of a line here and there.

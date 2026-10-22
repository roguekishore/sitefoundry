# linear — recreation notes

Original: https://linear.app/ (landing page only; precaptured 2026-10-21, no other pages asked for).
Our fictional company: **Kestrel**, a planning-and-shipping workspace for product teams and
their coding agents. Wordmark: "Kestrel" in the theme's display face next to lucide `Bird`.

## Design language

- **Palette (dark is the faithful mode).** Near-black page `#08090a`, panels a step up
  (`#0f1011`, `#161718`), hairlines at white 8% and section rules full-bleed. Text has four
  steps: white `#f7f8f8` headings, cool blue-grey `#d0d6e0` for large descriptions, grey
  `#8a8f98` for body and nav, darker grey `#62666d` for captions and dates. The only
  "brand" fills are a pale grey pill button (`#e5e5e6`, white on hover) and, far down, two
  colour cards: a pale blue→lavender gradient and an electric lime `#e4f222`, both with
  near-black text. Indigo `#5e6ad2` appears only inside product UI (kept as `--ring`/`--sidebar-primary`).
- **Type scale.** One family (Inter Variable) at weight 510 for every heading and 400 for
  text, tight tracking (-0.022em) on display sizes, line-height ~1.0–1.06 on big type:
  64 (hero, CTA) · 48 (intro statement, section titles) · 32 (quotes) · 24 (section
  descriptions) · 18 (hero sub) · 15/24 (body) · 13 (nav, footer) · 12 mono caps (captions,
  dates). Phones: 38 · 24 · 24 · 15.
- **Spacing rhythm.** Very generous: ~128px above/below each feature section's content,
  ~200px from header to hero title, 80–130px between header text, media and feature list.
  Sections are separated by a full-width 1px rule rather than background changes.
- **Grid.** 1280px content (80px gutter at 1440, 24px on phones). Feature sections split in
  two 608px columns with a 64px gap: title left, description right; the feature list sits in
  the right column as two sub-columns divided by a vertical hairline. Footer: six columns
  (mark + five link groups).
- **Shapes.** Pills (`9999px`) for buttons; 8px cards; 12–16px for big product frames; the
  hero stage is a 12px-inset box with rounded bottom corners.
- **Depth.** Almost none: hairlines and 1–3% white fills. The single dramatic light is the
  hero stage, a vertical gradient from page black to a cool grey at the bottom with a
  radial vignette, under the product frame. Feature media fades out at its edges (masks).

## Type

| Original | Class | Width / x-height | Ours | Why |
|---|---|---|---|---|
| Inter Variable (100–900) | neo-grotesk sans | normal / tall | `@fontsource-variable/inter` | the original's own open face; weight 510 works with the variable axis |
| Berkeley Mono | grotesque monospace with slab i/l/r | normal / tall | `@fontsource/ibm-plex-mono` (400, 500) | closest open mono on the same traits (rational grotesque skeleton, slabbed narrow letters, tall x-height); already in the workspace |

## Section map

Heights from the capture (390 / 1440). Nothing on this page is sized by the window.

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | fixed header | `linear-header` | 65 / 73 content | logo, Log in, Sign up pill, two-bar menu | logo left; 6 nav links + rule + Log in + Sign up right | — | fixed, translucent + backdrop blur; hover pill on links |
| 2 | hero | `linear-hero` | 716 / 1024 content | 38px title 4 lines, sub, "New · Loops →" below; product frame bleeding off the right | 64px title 2 lines; sub left, "New · Loops →" right on one row; 1320px frame on a grey-lit stage | product frame 1320×720 (aspect ~1.83), 12px radius | (inferred) load fade/blur-in; hover brightness on announcement |
| 2b | logo row | `linear-logos` | ~200 content | marquee of wordmarks, mono caption | seven wordmarks spread on one row, mono caption below | — | 390: 30s marquee loop |
| 3 | intro statement | `linear-intro` | 191 / 144 | 24px, white lead + grey rest | 48px, white lead + grey rest, ~1130px measure | — | — |
| 4 | three pillars | `linear-pillars` | 446 / 468 | swipeable bordered cards (~328 wide) | 3 columns split by vertical hairlines, FIG mono label, illustration, title, text | illustration ~330×300 per pillar | — |
| 5–8 | feature sections ×4 | `linear-feature` | ~578 / ~1226 content | full-bleed media 390×312 on top, then title, text, Learn more | title left / description + Learn more right; 1320×560 media; "Features" label + two link columns | media 1320×560 (edge-faded) / 390×312 | hover colour on links |
| 9 | changelog | `linear-changelog` | hidden / 422 | not shown on phones | 48px title, 4-column timeline with dots on a rule, title, 2-line text, mono date; View all | — | hover colour |
| 10 | customer quotes | `linear-customers` | 366 / 564 | swipeable cards | 880 + 432 cards in a faint rounded frame; stat line + link | — | blur reveal on entering view; hover brightness |
| 11 | closing CTA | `linear-cta` | 168 / 228 | centred 38px two lines, two pills | centred 64px two lines, two pills | — | hover |
| 12 | footer | `linear-footer` | 878 / 494 | 2 columns of groups (+ Legal group) | mark + 5 columns; legal row under | — | hover colour |

## Motion inventory

| section | trigger | what changes | timing / easing | how we build it |
|---|---|---|---|---|
| header | pinned | stays fixed at top for the whole page, translucent with backdrop blur | — | `sticky top-0` + `backdrop-blur` + `bg-background/80` |
| header links | hover | colour grey→white, background → white 8% | 100ms cubic-bezier(.25,.46,.45,.94) | Tailwind `transition-colors duration-100` + `hover:` |
| Sign up / CTA pill | hover | background #e5e5e6 → white | 160ms same ease | `hover:bg-foreground duration-150` |
| hero announcement | hover | filter brightness(1.3) | 160ms | `hover:brightness-130` |
| hero | load (inferred, not in the capture) | title, sub and frame fade in from blur(8px) and 12px lower, staggered | ~800ms ease-out | CSS `@keyframes` with fill both, delays 0/100/200ms |
| logos (390) | loop | track translateX, 30s linear infinite | 30s linear | CSS `@keyframes linear-logos-scroll`, duplicated list; static row from lg |
| feature list buttons | hover | colour grey → light, background white 5% | 160ms | `transition-colors` |
| customer card | entering view | filter blur → none (with opacity) | scroll 8100–8550 at 1440 | `animation-timeline: view()`, range `entry 0px entry 260px` |
| customer card | hover | brightness(125%) | 160ms | `hover:brightness-110` (125% washes the pale cards out under other themes) |
| footer / arrow links | hover | colour grey → white | 100ms | `transition-colors` |

Not rebuilt (motion inside media): the "Thinking…" shimmer, chat messages blurring in, the
send-button reveal and the dot-grid opacity loops (`grid-dot-*`) all live inside product
screenshots and the FIG illustrations; those are placeholders.

## Media slots → placeholders

- hero product frame: 1320×720 at 1440 (aspect ~1.83), 12px radius, hairline border, 2–3%
  white fill, sitting on the lit stage; on phones ~660px wide and cropped by the stage's right edge.
- pillar illustrations (3): ~330×300 line art → a soft radial `bg-muted` patch, no drawing.
- feature media (4): 1320×560 panels that fade into the page at the edges → a
  bordered `bg-card` panel with an edge mask; phones: 390×312 band, panel inset 18px left and bleeding right.
- customer logos on quote cards → plain text company names; the big faint logo watermark is dropped.
- logo row → plain-text fictional wordmarks (with a lucide icon for a few).

## Decisions

- One `linear-feature` block is used four times (the four feature sections are one pattern).
- Changelog hidden below `lg` by default as on the original (prop `showOnPhones` to show it stacked).
- Shared components: `linear-button` (pill), `linear-arrow-link` ("Learn more →"), `linear-placeholder` (media surface).
- `chart-1` holds the coral red of the newest changelog dot; `chart-5` the lavender end of
  the first quote card's gradient (`glow` is its blue start).
- Customer card hover uses brightness 110% instead of 125%.

## Comparison round 1

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| all display type | looser letter shapes than the original's big type | same: 64/48px headings read wide and soft | — | yes: theme imports Inter's `opsz` build so big sizes use the display optical size, as the original's Inter Variable does |
| hero | 4-line title ✓ | title ran to 3 lines (copy too long), pushing the stage 80px down | load fade/blur-in present | yes: shorter headline |
| hero stage | ✓ | bottom grey a little brighter and wider than the original | — | yes: end colour 70% grey, vignette 65% |
| intro | ✓ | 4 lines instead of 3 | — | yes: shorter copy |
| customers | ✓ (swipe) | ✓ in scroll frames; **1024 overflowed** (grid `fr` columns had a min-content floor from the quote's max width, plus a -32px frame bleed) | blur reveal ✓ (ViewTimeline) | yes: `minmax(0,…fr)` columns, -12px bleed at lg, -32px from xl |
| CTA | first line wrapped (3 lines) | ✓ | — | yes: shorter copy |
| logos | marquee ✓ | static row ✓ | 30s loop ✓ | — |
| header | ✓ | ✓ | sticky ✓, hover pill ✓ | — |
| feature ×4 | media band first ✓ | ✓ layout and rhythm | hover ✓ | — |

## Comparison round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| all display type | ✓ now tight like the original (opsz) | ✓ | — | — |
| hero | ✓ | subtitle row sat 10px low | load-in ✓ | yes: `lg:mt-6` |
| changelog | hidden ✓ | **1024 overflowed** (three fixed 21rem columns); title→timeline gap 25px too big | hover ✓ | yes: 4 equal columns at lg, fixed columns from xl; `lg:mt-20` |
| pillars / customers swipe rows | first card snapped flush to the edge (original keeps 8px) | ✓ | — | yes: `scroll-px-2` |
| feature ×4 | ✓ band, title, text, link | ✓ | ✓ | — |
| overflow | 360 ✓ | 768 ✓ · 1024 ✓ after the changelog fix | — | — |

## Comparison round 3

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| logos | wordmarks ~20% larger than the original's on phones | ✓ | marquee ✓ | yes: 20px marks on phones, 24px from lg |
| intro | lead wrapped to 2 lines (6 total vs 5) | ✓ 3 lines | — | yes: shorter lead |
| motion check | sticky header ✓ · marquee translateX ✓ · customer blur reveal ✓ | sticky ✓ · customer blur reveal at 8100–8550px, same range as the original ✓ · hover rows match (nav pill, sign-up whitening, brightness on announcement and cards, link colours) | — | — |
| overflow | 360 ✓ | 768 ✓ · 1024 ✓ | — | — |
| re-theme | `linear-hero` under sample-ember dark ✓ | `linear-customers` and `linear-feature` under sample-ember light ✓ (cards take ember's glow/highlight) | — | — |

Remaining differences (intended): media slots are empty panels; the pale quote cards drop the
original's faint logo watermark; IBM Plex Mono stands in for Berkeley Mono; the hero load-in
is inferred (the precapture can't show load motion).

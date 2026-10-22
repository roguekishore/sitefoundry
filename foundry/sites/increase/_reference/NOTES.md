# increase — recreation notes

Landing page only (no other pages asked for; precapture lists none). Captured in advance;
the original was not opened.

Fictional stand-in: **Cairn**, an API-first bank for software companies. Customers, people
and publications in the demos are invented.

## Design language

- **Frame.** The page sits between two full-height hairlines at the edges of a 1160px
  column (x = 140 and 1300 at 1440; the viewport edges on phones). Every section ends in a
  full-width hairline, so the page reads as a stack of ruled boxes. Content is inset 24px
  from the frame (16px on phones).
- **Palette.** White page; slate-navy text (#1a2b3b family); a muted grey (#657482) for
  the second clause of every lead sentence; #f5f6f7 bento panels holding white inset cards;
  hairlines #edf0f2, input borders #d5dee5. Mint #31f2bf for the main button and links on
  dark; electric lime #e4ff33 for the "introducing" badge and the yellow quote card; sky
  blue #02a7ff for the blue quote card and the hero art. Deep navy #151e29 for the
  developer band, the announcement card and the footer.
- **Type scale.** Lead statements 40/48 (hero) and 32/38 (sections) at 1440, 32 and 24 on
  phones: a semibold clause in navy, then the rest in regular muted grey, tracking −1px.
  Card titles 24/29 regular. Body 14/20 and 16/24. Quote card text 18/30 medium. Mono for
  figures (stats 40px), attributions and dates (12–16px).
- **Shapes.** 8px radius on buttons, badges, cards; 16px on bento panels and quote cards;
  32px icon tiles with 8px radius. Depth is soft: announcement card has a long, faint
  shadow (0 18px 34px −12px); everything else is flat with hairlines.
- **Rhythm.** Sections open ~100px below their top rule at 1440 (~64 on phones). Bento
  gaps 24px. Headings max ~750px wide; the right half of a lead section stays empty.

## Type

| Original | Kind | Ours | Why |
|---|---|---|---|
| TT Interphases Pro (100–900) | neo-grotesk with geometric touches, normal width, high x-height, double-storey a, single-storey g | **Figtree Variable** | closest open grotesk on the same traits: geometric-leaning, normal width, tall x-height, same a/g/y forms. Not Inter (the original isn't Inter) |
| Input Mono (400/700) | grotesque-derived monospace, normal width | **Spline Sans Mono Variable** | a grotesque mono (not a slab or a typewriter), similar weight and width; already installed |
| MRZ Mono | passport-strip mono inside the card art | not used | only inside media |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | fixed bar | increase-header | 64px | wordmark + two-bar menu button; panel opens below | wordmark, 6 nav links, Sign in ghost + Sign up dark button | — | sticky; hover tints |
| 1 | hero | increase-hero | content (~690 / ~550) | badge, lead 32px, two buttons; art fills the lower half behind | text in the left 60%, art fills right/bottom to the window edge | hero art (3D slabs) | hover tints |
| 1b | logo strip | increase-logos | ~94px | 3 marks visible, marquee | 8 marks visible, marquee | — | marquee loop 54s, pauses on hover |
| 2 | announcement | increase-announcement | content (266 / 363) | dark card, text only | dark card, text left, image right 269px | photo | hover underline |
| 3 | products bento | increase-products | content | heading; 5 panels stacked | heading; row 1 full width (rails list + mock), row 2 = 7:5, row 3 = 5:7 | 5 mock UIs | hover on rail tiles |
| 4 | testimonial | increase-testimonial | content (341 / 495) | lime card, quote, attribution, note under | lime card, quote left 60%, note bottom right | logo tile | — |
| 5 | team | increase-team | content (596 / 640) | lead, quote, author, link | same, left 60% | — | link arrow nudge |
| 6 | stats | increase-stats | content (241 / 433) | 3 stacked | 3 columns centred | — | — |
| 7 | developers | increase-developers | content (2086 / 1774) | dark; intro + button; 3 rows text only | dark; intro; 3 rows: text left (lead, link, quote at bottom), diagram right on a dot grid | 3 diagrams (hidden on phones) | diagram reveal: fade + rise 16px |
| 8 | customers | increase-customers | content (907 / 1339) | lead; group heading; features stacked; blue quote card; group 2 | lead; group heading 24px; 3 feature columns; blue quote card; group 2 | logo tile | arrow button hover |
| 9 | announcement again | increase-announcement | as 2 | | | photo | |
| 10 | updates | increase-updates | content (577 / 884) | vertical timeline, dot + rail | 4 columns, dot + rule across | — | hover: title underline, dot turns lime |
| 11 | footer | increase-footer | content (644 / 976) | wordmark; links in 2 flowing columns; rule; legal | wordmark; 4 columns; rule; legal | — | hover text |

## Motion inventory

| section | trigger | what changes | timing | build |
|---|---|---|---|---|
| header | pinned (fixed for the whole page) | stays at top, white 95% | — | `sticky top-0` + `bg-background/95 backdrop-blur` |
| logos | loop | track translateX 0 → −50% | 54s linear infinite; paused on hover / focus-within | CSS `@keyframes increase-logos-marquee` in increase-logos.css |
| developers rows | entering view | diagram opacity 0→1, translateY 16→0 | 1.2s ease-out-quint, once | CSS view timeline, `entry 0px → entry 220px`, ease-out-quint; inside `@supports` + no-preference |
| header links / buttons | hover | bg transparent → #edf0f2, text grey → navy | 150ms ease (0.4,0,0.2,1) | `transition-colors duration-150` |
| Contact sales / badge / Sign up | hover | background a step darker | 150ms | `hover:brightness-95` / `hover:bg-foreground/90` |
| outline button | hover | bg white → #f5f8fa | 150ms | `hover:bg-muted` |
| arrow links | hover | text underline; arrow nudges up-right 2px | 150ms | `group-hover:translate-x-0.5 -translate-y-0.5` |
| update items | hover | title underline; dot tile turns lime | 150–340ms | `group-hover:` classes |
| bento mocks (sheen, digit rolls, spinner, live pulse) | loop | inside product mock-ups | — | not rebuilt: media placeholders |

## Media slots → placeholders

| slot | original | ours |
|---|---|---|
| hero art | 3D gradient slabs, ~1240×690 bleeding to the right window edge, behind text | `art` prop; empty: a borderless soft highlight→glow wash in the same box (lower-right), plainly a placeholder |
| announcement photo | 269×216, right side of the card, cropped, hidden < sm | `media` prop; empty: `bg-muted` panel same size |
| bento mock UIs | code + transfer card, card on a grid + event log, balance chart, KYB checklist, loan table | `media` per panel; empty: white `bg-card` inset with border at the same size (bleeding off the panel's right/bottom edge like the originals) |
| developer diagrams | flow diagrams on a dot grid, ~520×450 | `media` per row; empty: the dot-grid surface alone |
| customer logo tiles | 48px brand tiles | `mark` prop (a lucide icon on a token tile in the demo) |

## Decisions

- **Bento mock UIs are placeholders**, not rebuilt from divs (skill rule); the rails list in
  the first panel is layout (icon tile + label) and is built, with lucide icons.
- The header is `sticky` instead of `fixed`: same look, and the hero doesn't need a 64px
  pad.
- The dark bands are forced with the `dark` class, so they use the theme's dark tokens in
  either mode.
- The page frame (two vertical hairlines) is drawn by each block (`border-x` on the inner
  column), so every block keeps it when used alone.
- The hero is content-sized (the capture doesn't mark it "sized by the window"):
  ~690px at 1440 from padding + art box min-height.

## Round 1 (ours vs original, light mode)

Heights (1440 / 390, ours vs original): header+hero+logos 849/713 vs 847/708 · announcement
317/349 vs 266/363 · products 1563/2375 vs 1558/2426 · testimonial 327/465 vs 341/495 · team
592/598 vs 596/640 · stats 244/447 vs 241/433 · developers 2041/1670 vs 2086/1774 · customers
978/1352 vs 907/1339 · updates 556/965 vs 577/884 · footer 673/977 vs 644/976. No sideways
overflow at 360/768/1024. Header sticky in both.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | 40px taller than the original (text-to-logos gap) | nav starts 33px left of the original | — | yes: pb-40 on phones; nav ml-20 |
| announcement | ok | 50px too tall: body ran to 3 lines, roomier padding | hover ok | yes: tighter padding/leading, body max-w 36rem, shorter demo text |
| products | ok | "Cross-border" wrapped in the rails list; mock slot 80px narrower than the original's | — | yes: nowrap, 9.5rem + 32px columns; media column 540px |
| testimonial / team | ~30px shorter (shorter demo quote) | matches | — | no (content length) |
| stats | ok | figures lighter than the original's regular mono | — | yes: font-normal |
| developers | ok | dark navy a step too deep; diagrams (dot grid) reveal in the scroll frames | reveal ok | yes: dark background L 0.215 → 0.228 |
| customers | ok | 70px too tall: bigger gaps heading → group → points | — | yes: mt-14, points mt-9 |
| updates | excerpts 3 lines (original clamps to 2), items 10px further apart | "more" button 20px too high | hover ok | yes: line-clamp-2 (3 from lg), pb-8, button mt-12 |
| footer | matches | matches (30px taller) | — | no |

## Round 2

Heights (1440 / 390, ours vs original): header+hero+logos 849/713 vs 847/708 · announcement
273/349 vs 266/363 · products 1563/2375 vs 1558/2426 · testimonial 327/465 vs 341/495 · team
592/598 vs 596/640 · stats 244/447 vs 241/433 · developers 2041/1670 vs 2086/1774 · customers
930/1336 vs 907/1339 · updates 572/933 vs 577/884 · footer 673/977 vs 644/976. Fits at
360/768/1024. Motion list: header sticky for the whole page; logo track looping 54s
(`increase-logos-marquee`); the three diagrams reveal opacity 0→1, translateY 16→0 on entering
view, same as the original's list.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| announcement | ok | ok (body on 2 lines, 273 vs 266) | ok | photo placeholder was nearly the card colour on dark: now bg-accent |
| products | ok | rails on one line each; mock slot at the original's width | — | — |
| updates | ok (still ~50px taller: longer demo titles wrap to 2 lines) | ok | ok | no (content length) |
| developers (390) | ~100px shorter: shorter demo quotes | ok | reveal ok | no (content length) |
| everything else | ok | ok | ok | — |

Re-theme check: increase-products and increase-quote-card captured alone under
`sample-ember` (light): panels, rail tiles, washes and fonts all follow the theme.

Remaining differences, on purpose: the hero art, bento mock UIs, announcement photo and
diagrams are placeholders; the wordmark is a plain text mark; copy is our own, so line
breaks and a few section heights differ by up to ~50px.

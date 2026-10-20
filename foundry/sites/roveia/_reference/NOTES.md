# roveia — recreation notes

Original: https://www.roveia.com/ (a growth-marketing agency for health brands; Webflow + GSAP
ScrollTrigger + Lenis). Captured in advance (`precapture.json`, landing page only, no other
pages asked for). Our fictional company: **Northvane**, a paid-growth studio for care brands.

## Design language

- **Palette.** Pure white page, near-black ink `#101010`, one electric blue `#218aff` (CTAs,
  the highlighted words of headings, quote marks, hover colour of links), its lighter hover
  `#469bfa`. Neutral greys: `#eeeeee` card surface (service cards, chips at 5% ink), ink at
  60% / 40% for secondary text, 8% ink hairlines. The hero card is a white-to-pale-blue wash
  (`radial-gradient(circle at 50% 150%, blue 40%, white)`); the footer sits on a blurred blue
  "wave" glow. Dark moments are image-led: full-bleed media under a 50–75% black veil
  (brands, case studies, steps) and `#101010` cards on phones with a blue 165° corner glow.
  A faint peach `#fb9e79` tints some testimonial cards from the bottom-right corner.
- **Type.** One family, Manrope, at light weights: 300 for the big display lists (80px
  industries, 64px brands/FAQ heading), 400 everywhere else. Tight tracking on display
  (-2px at 64–70px), -0.4/-0.5px on 16–40px. Scale at 1440: 80 / 70 (hero) / 64 / 40 / 32 /
  28 / 20 / 16 / 14. At 390: 35 (hero) / 40 / 32 / 28 / 20 / 16 / 14.
- **Spacing.** Generous: sections breathe on 120px padding at 1440 (60–80px at 390). Content
  column starts at 120px from the window edge (container ≈ 1200px). Big inset cards sit 20px
  from the window sides (8–20px on phones).
- **Shapes.** Three radii: 8px (chips, video frames in cards), 24px (cards, media), 40px (the
  big inset section cards: hero, brands, steps). Pills (999px) for buttons and the nav.
- **Depth.** Almost flat. One soft shadow `0 8px 30px rgba(0,0,0,.1)` (nav pill, quote
  cards); hover lifts case/blog cards 3px with `0 20px 40px -20px rgba(0,0,0,.16)`.
- **Layout grid.** 1440: centred 2-line hero headline over a 3-column row (stat · media ·
  copy+CTA); split 50/50 rows (brands, steps, FAQ). 390: one column, everything stacked,
  hero CTA full width, partner list in 2 columns.

## Type

| Original | Classification | Width | x-height | We use | Why |
|---|---|---|---|---|---|
| Manrope 300/400/500 | geometric-grotesk sans (semi-condensed feel at display sizes) | normal | large | `@fontsource-variable/manrope` | the original's own face is open (OFL) and already in the workspace |

No second face. The wordmark is Manrope 500 with a small superscript `+` (our own mark).

## Section map

Heights are the capture's; window = 900px at 1440, 844px at 390.

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| – | floating nav pill | `roveia-header` | fixed | white pill 358×48, wordmark + 2-line burger | white pill ≈996×56 centred at top 24px: wordmark · 5 links (3 with chevrons) · dark "Get started →" pill | – | fixed over everything; link hover opacity .64 (0.3s); CTA dark→blue (0.5s) |
| 1 | hero | `roveia-hero` | 390: content (1002); 1440: **210% of the window**, pinned | inset card (8px sides), headline 35px centred, subcopy, full-width blue CTA, media 310×174 r24, "Partnered with" + 2-col list | inset card 20px sides, 100svh−16px tall, r40 bottom; 2-line 70px headline; row: stat (icon, 64px figure, label, muted note) · media 580×326 r24 · copy + blue CTA; partner row of 8 | 1 video | pinned for 1.1 windows; the media grows to fill the card, black veil 0→.75, headline turns light |
| 2 | who we work with | `roveia-industries` | content (630 / 1719) | heading 32px; 3 dark cards (r24, `#101010` + blue 165° glow): illustration 165×165, "01 · Name" 28px, paragraph, client wordmarks | heading 40px at 120px in; 3-row list at 80px/300 with tiny "01" index at the baseline | 3 illustrations (390 only) | heading fades in scrubbed; items reveal on entering view; hover → blue |
| 3 | trusted by (brands) | `roveia-brands` | 390: content (420); 1440: **5 windows**, pinned | centred 16px title, 2-col grid of client wordmarks | inset card r40 full window: left a 64px/300 list of 13 brand names sliding up through the middle (active 1, ±1 .5, ±2 .25, ±3 .1, rest .05); right "Trusted by…" + brand logo + tags + paragraph; full-bleed photo per brand under a veil | 1 photo per brand (fills the window) | pinned; list scrubbed 600→−600px; per-item opacity by distance; panel + photo crossfade per brand |
| 4 | case studies | `roveia-cases` | 390: content (2128); 1440: **5 windows** | 5 cards 315×360 r24, title 32px + paragraph at the bottom over a dark gradient | 5 window-high cards (1368 wide, r24) stacking: each sticks at the top; the next rises in scaled 0.9 → 1 | 1 video per card | sticky stack; scale .9→1 on entering; hover: centred blue "Read full case study ↗" pill |
| 5 | what we do | `roveia-services` | 390: content (2952); 1440: ≈3.8 windows, pinned | heading; 5 stacked grey cards (r24): illustration 306×240, 32px title, chips (8px r, 5% ink), tagline | pinned horizontal track of 5 cards (500×504, gap 20) translating 0→−1380px; the centred card tints blue and its illustration turns from grey to colour | 5 illustrations | heading fade-in; track scrubbed sideways; active-card tint + grayscale→colour |
| 6 | 3-step program | `roveia-steps` | content (877 / 1004) | dark card r40, heading 40px, 3 steps stacked | dark inset card r40: 64px heading left; steps right (dot + "Step n" 28px, 40px title, 14px note) | 1 background video (floating pills) | none captured |
| 7 | founders | `roveia-founders` | 390: content (3107); 1440: ≈6.8 windows, pinned | centred 40px heading (2nd line blue); 6 quote cards stacked (r24, shadow, tint), each with a 16:9 video r8 | centred 64px heading pinned; 6 quote cards (≈380 wide) fly in from the right, cross the screen and leave left, rotating 10° → −10°, staggered | 1 video per card | pinned; per-card scrubbed translateX + rotate |
| 8 | FAQ | `roveia-faq` | content (584 / 687) | heading 40px, list of questions with black round arrow buttons | heading 64px/300 left, questions right (16px) with 32px black round arrow buttons, 84px rhythm | – | rows fade in on entering view; accordion |
| 9 | CTA + footer | `roveia-footer` | content (830 / 792) | centred 40px CTA, button, wordmark, socials, copyright, 3 link columns | centred 64px CTA, subcopy, blue button; footer row: wordmark + socials + © left, 3 link columns right; all over a blurred blue wave glow | – (decorative glow is CSS) | CTA + footer fade in on entering view; link hover → blue |

## Motion inventory

| section | trigger | what changes | timing / easing | how we build it |
|---|---|---|---|---|
| page | Lenis smooth scroll | wheel scrolling glides | ~1.1s exp ease-out | `roveia-smooth-scroll` (lenis), hydrate load, off under reduced motion |
| header | fixed | stays at top 24px | – | `position: fixed` |
| header | hover | links opacity 1→.64; CTA dark→blue | 0.3s ease / 0.5s | Tailwind `transition` + `hover:` |
| hero (≥lg) | pinned | card sticks for 1.1 windows (wrapper 210svh) | – | sticky inside a 210svh wrapper |
| hero (≥lg) | scrubbed | media grows from its slot to cover the card; veil 0→.75; headline/stat/copy turn light | scroll 0→1 window, linear | CSS view timeline on the wrapper (`contain` range): media `scale` + `translate`, veil opacity, text colour |
| industries | scrubbed / entering view | heading opacity 0→1; rows opacity 0→1 staggered | entry, ~400px | CSS `view()` reveal per row (range offsets) |
| industries | hover | row text + index → blue | 0.3s | `hover:text-primary` |
| brands (390) | entering view | grid fades in | ~400px | CSS `view()` reveal |
| brands (≥lg) | pinned | inset card sticks for 4 windows (wrapper 500svh) | – | sticky + named view timeline `--roveia-brands` |
| brands (≥lg) | scrubbed | list translateY +600 → −600 (one row per step) | linear | keyframes on the named timeline |
| brands (≥lg) | scrubbed | each name's opacity by distance from the active row (1 / .5 / .25 / .1 / .05) | linear | same timeline, per-item `animation-range` centred on its step |
| brands (≥lg) | scrubbed | right panel and background photo crossfade per brand | ~½ step | same timeline, per-item ranges; only the first shows without support |
| cases | sticky | each card sticks at top 20px; the next stacks over it | – | `position: sticky` per card, 100svh slots |
| cases | entering view | card scale 0.9 → 1 | entry 0–100% | CSS `view()` |
| cases | hover | "Read full case study ↗" pill appears in the middle; media scale .9→1 | 0.3s | `group-hover:` (the original's pill follows the cursor; ours is centred) |
| services (≥lg) | pinned + scrubbed | track translateX 0 → −(track − window) | linear | sticky inside a 380svh wrapper, named view timeline |
| services (≥lg) | scrubbed | active card: blue tint, illustration grayscale → colour | per step | per-card ranges on the same timeline |
| services | entering view | heading fades in | ~400px | CSS `view()` |
| founders (≥lg) | pinned | heading + stage stick for ≈5.8 windows | – | sticky inside a 680svh wrapper |
| founders (≥lg) | scrubbed | each card translateX ≈ +110vw → −130vw, rotate 10° → −10°, staggered by ≈⅛ of the run | linear | named view timeline, per-card ranges |
| FAQ | entering view | rows opacity 0→1, staggered | ~400px | CSS `view()` |
| FAQ | click | answer opens, arrow turns | 0.3s | `<details>`; arrow rotates 90° |
| footer | entering view | CTA block + footer row fade/rise in | short | CSS `view()` |
| footer | hover | links → blue | 0.3s | `hover:text-primary` |

Not rebuilt: the custom blue "+" cursor (a fixed element following the mouse) and the case
study pill following the cursor — JS cursor effects, not part of the layout. Video playback
itself is the placeholders' business.

## Media slots → placeholders

- hero video 580×326 (16:9) r24 (310×174 at 390) → `media` prop; empty: `bg-muted` + soft
  `glow` wash, same radius.
- industries illustrations 165×165 r24 (phones only) → `items[].media`; empty: a blue-tinted
  square.
- brand photos (fill the window) → `brands[].media`; empty: a dark muted surface with a
  faint glow, under the same veil.
- case-study videos (1368×≈860 r24; 315×360 at 390) → `cases[].media`; empty: muted surface.
- service illustrations 324×256 → `services[].media`; empty: rounded tinted tile.
- steps background video → `media`; empty: dark muted surface.
- founder videos 294×198 r8 (16:9 at 390) → `quotes[].media`; empty: muted tile.
- footer blurred wave → built as a CSS glow (radial gradients of `--glow`), it is a
  decorative background, not a picture of anything.

## Decisions

- **Light is the faithful mode.** Dark sections (brands, cases, steps, phone industry cards)
  wrap themselves in `.dark` so they read right under any theme; `.dark` of our theme is a
  sibling: `#101010` page, `#1c1c1c` cards, the same blue.
- **One block, two layouts** where the original swaps them (industries: big list ≥lg / dark
  cards on phones; brands: pinned list ≥lg / wordmark grid on phones), with `lg:` switches —
  the original ships both and hides one.
- **All scroll motion in CSS** (view timelines, named on the tall wrappers) so the blocks need
  no JavaScript; everything sits inside `@supports (animation-timeline: view())` and
  `prefers-reduced-motion: no-preference`, so other browsers get the static layout.
- The hero media "grows" with a uniform `scale` from its slot (enough to overfill the card,
  which crops it with `overflow-clip`) rather than measuring the slot in JS.
- Fictional content throughout: Northvane, invented clinics/brands, invented platforms in the
  partner row (lucide icons in white discs instead of real platform logos).

## Comparison rounds

Capture note: the `ours-*-section-NN.png` crops are taken as full-page screenshots, which
leave every CSS view-timeline animation at its start state (reveals look blank, case cards sit
at 90%) and stretch the svh-sized pinned sections. So sections were compared with the scroll
frames (`ours-*-scroll-NN.png`) and with extra frames at chosen scroll offsets (a throwaway
Playwright script outside the repo, pointed only at our own preview).

### Round 1

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | pill 358 wide vs 326 | matches (pill, links, dark CTA) | fixed ✓, hover ✓ | yes: phone side padding 32px |
| hero | matches (centred headline, full-width CTA, 16:9 slot, 2-col partners) | matches; small text tracked too tight | pinned 210svh ✓, grow + veil + light text ✓ | yes: body tracking normal |
| industries | dark cards ✓ | heading 40px vs 32px; list 20px right of the original | fade-in ✓, hover blue ✓ | yes: heading 32px; content edge at 120px |
| brands | wordmark grid ✓ | panel and photo vanished after the first brand | list slide ✓, falloff ✓; crossfade broken | yes: `:not(:first-child)` fallback out-ranked the @supports rule |
| cases | 360px cards ✓ | sticky stack ✓, 0.9→1 ✓, pill ✓ | ✓ | – |
| services | stacked ✓ | heading 40px vs 32px | pinned sideways track ✓ (0→−1380px, same as the original), focus tint + grey→colour ✓ | yes: heading 32px |
| steps | ✓ | ✓ (grey veiled card, 64px heading, steps right) | none in either | – |
| founders | stacked cards ✓ | quote mark was a closing "99"; heading ~70px low | pinned ✓, fly + tilt 10°→−10° ✓ | yes: mark turned, heading lifted |
| FAQ | ✓ | heading/questions 20px right of the original | row fade ✓ | yes: page width 77.5rem (content 120…1320 at 1440) |
| footer | ✓ | ✓ (glow smoother than the original's wave ridges) | fade/rise ✓ | glow kept smooth (decorative) |

Overflow at 360 / 768 / 1024: fits (the original overflows at 360 and 1024).

### Round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | pill 326 wide ✓ | ✓ | ✓ | – |
| hero | ✓ | ✓ (tracking normal) | ✓ | – |
| industries | ✓ | 32px heading at 152px, index at 120px ✓ | ✓ | – |
| brands | ✓ | panel + photo crossfade per brand ✓; but the first brand arrived dark (its photo and name only lit up once the run began) | first/last items now hold their state outside the run | yes: `-first` / `-last` keyframes |
| cases | ✓ | ✓ | ✓ | – |
| services | ✓ | ✓ | ✓ | – |
| steps | ✓ | ✓ | – | – |
| founders | ✓ | heading at 300–450px like the original, "66" quote mark ✓ | ✓ | – |
| FAQ | ✓ | heading at 120px, arrows end at 1320px ✓ | ✓ | – |
| footer | ✓ | wordmark/columns on the 120…1320 grid ✓ | ✓ | – |

Re-theme check: `roveia-hero` under `sample-ember` (light) and `roveia-services` under
`sample-ember` (dark) read correctly in the other palette and type; the whole page in
`roveia-theme` dark is a coherent sibling (navy wash hero, deep-blue footer glow).

Remaining, by choice: placeholders instead of media (hero video, brand photos, case videos,
service illustrations, steps video, founder videos); the custom blue "+" cursor and the
cursor-following case pill are not rebuilt; the services focus moves first→last card rather
than tracking the card under the window's centre; the footer glow is smooth rather than the
original's rippled waves.

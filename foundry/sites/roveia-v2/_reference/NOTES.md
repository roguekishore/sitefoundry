# Roveia — recreation notes

Original: https://www.roveia.com/ (captured in advance; landing page only, no other pages asked for).
Fictional stand-in: **Halden Growth**, a growth agency for health, wellness and telehealth brands.
All client names (Solvera, Kindred Rx, Pellum, Brisa, Quietroot…) and all copy are invented.

## Design language

- **Palette roles.** White page (#fff), near-black ink #101010 for text and the dark pill
  button, one bright brand blue #218aff (primary: CTAs, the blue half of headlines, quote marks,
  the brand list's hover, link hover), its lighter hover #469bfa, a pale grey surface #eeeeee
  (service cards = muted), translucent ink chips (5% fill + 8% hairline). A sky gradient (white
  at the top to ~28% blue at the bottom) fills the hero card and the footer's blurred waves.
  Dark moments are photo/video panels under a 50–75% black wash; the steps panel is a charcoal
  (#404040-ish) video panel. A peach (#fb9e79) only tints one testimonial card's corner glow
  (highlight).
- **Type scale (1440 → 390).** One face, Manrope, almost always at 400 (300 for a few big
  numbers), with tight tracking (-2px) on display sizes: 80/96 (industry list), 70/77 (hero h1,
  brand list, section heads), 64/77 (steps / FAQ / founders heads), 40/48 (case titles, step
  titles), 32/38 (small section labels "Who we work with", service titles), 28 (step label),
  20 (FAQ questions), 16/24 body, 14/24 small. Phones: 32–35px heads, 16 body.
- **Spacing rhythm.** Big, airy sections: ~120px top padding on content sections, 120px left
  inset for text columns at 1440 (content ~1200 wide), 20px between cards, 40px card padding.
  Phones: 20px gutter, 8px inset for full-bleed rounded cards.
- **Layout grid.** Mostly a 2-column split at ~45/55 (heading left, list right: steps, FAQ),
  or centered statements (hero, founders, CTA). Full-bleed rounded panels inset 20px from the
  window edges (hero, brands, steps), 36px for the case-study stack.
- **Shapes.** 40px radius on window-sized panels, 24px on cards and media, 8px on chips and
  testimonial media, full pills for buttons and the floating nav.
- **Depth.** Flat; one soft shadow (0 8px 30px black 10%) on the floating nav and the
  testimonial cards. Hover lifts on cards (−3px + 0 20px 40px −20px shadow).

## Type

| Original | Class / width / x-height | Ours | Why |
|---|---|---|---|
| Manrope 300–700 | geometric-grotesk sans, normal width, large x-height | **Manrope Variable** (`@fontsource-variable/manrope`, already in the workspace) | it is the original's own face and is open-licensed (OFL) |

The original's wordmark uses a wider grotesk with a small "+" mark; ours is a plain Manrope
wordmark (no mark), per the originality rule.

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| – | floating nav | `roveia-v2-header` | 56px pill, fixed 24px from top | 326px pill, wordmark + two-line burger | 996px white pill, wordmark · 5 nav items (3 with chevron) · black "Get started" pill | – | fixed; links hover opacity .6 (0.3s); button black→blue (0.5s) |
| 1 | hero | `roveia-v2-hero` | 1440: window-sized panel `calc(100svh−16px)` inside a 210svh pinned wrapper; 390: content (~1000px) | stacked, centered: h1 32px, lead, full-width blue pill, 16:9 media, "Partnered with" 2-col chip grid | h1 70px centered; row: stat (icon, 73%, label, note) · 580×326 media · lead + blue pill; partner chip row | 1 video 580×326 r24 (390: 310×174) | load: rise-in; pinned: media grows to fill the panel, black wash 0→.75, text turns white |
| 2 | who we work with | `roveia-v2-industries` | content (630 / ~1720) | dark gradient cards (illustration slot, "01 · Title", paragraph, client wordmarks) | 32px label; 3 rows "01 Telehealth" 80px with small index | 3 illustrations 165×165 (phones only) | heading scrubbed fade-in; rows fade/rise in staggered; hover → blue |
| 3 | trusted by | `roveia-v2-brands` | 1440: 500svh pinned wrapper, panel `calc(100svh−16px)`; 390: content (420) | centered label + 2-col wordmark grid | dark photo panel; left: 14-name list (70px) scrolling up with opacity falloff 1/.5/.25/.1/.05; right: label + current brand's wordmark, tags, paragraph crossfading | 1 background photo per brand, fills the panel | pinned; list scrubbed −Y; per-name opacity scrubbed; detail + background crossfade per brand |
| 4 | case studies | `roveia-v2-cases` | 1440: 5 × 100svh sticky stack (500svh) ; 390: content | 5 cards 315×360 r24, text at the bottom | 1368×868 cards, sticky one over the other, title 40px + paragraph bottom-left, blue cursor pill "Read the story ↗" | 5 videos (1231×781 at .9 scale; 390: 315×360) | each card scales .9→1 as it reaches the top and sticks; cursor-following pill; hover nothing else |
| 5 | what we do | `roveia-v2-services` | 1440: 380svh pinned wrapper with a window-tall sticky stage; 390: content | vertical stack of cards 350 wide | "What we do" 32px; horizontal track of 6 cards 500×504 (muted, r24, illustration, 32px title, chips, line) | 6 illustrations 324×255 | pinned; track scrubbed X 0→−(track−window); the card in the middle gets a blue tint and its picture loses its grey filter |
| 6 | 3-step program | `roveia-v2-steps` | content (877 / ~1000) | panel: heading, 3 steps | charcoal video panel r40 inset 20: heading 64px left; steps right ("● Step 1" 28px, 40px title, 14px line) | 1 video fills the panel | steps reveal on entering |
| 7 | founders | `roveia-v2-founders` | 1440: 680svh pinned wrapper; 390: content | heading, vertical list of quote cards | centered 70px heading (second line blue); 6 quote cards fly from right to left across the middle, turning from +10° to −10° | 6 videos 294×198 r8 inside cards (390: 302×170) | pinned; each card scrubbed X off-right→off-left with rotate 10°→−10°, staggered |
| 8 | FAQ | `roveia-v2-faq` | content (584 / 687) | heading, rows | heading 64px left (3 lines); 6 rows right: 20px question + 32px black round arrow button | – | rows fade/rise in staggered; open/close |
| 9 | CTA + footer | `roveia-v2-footer` | content (830 / 792) | centered CTA; wordmark, socials, ©; 3 link columns | centered 70px heading, line, blue pill; footer row: wordmark + socials + © left, 3 link columns right, over blurred blue waves | the blue waves (background art) | fades in on entering; link hover → blue |

## Motion inventory

| section | trigger | what changes | timing / easing | how we build it |
|---|---|---|---|---|
| all | wheel | Lenis smooth scroll | ~1.2s glide | `roveia-v2-smooth-scroll` (lenis, hydrate load), used by page.tsx |
| header | fixed | stays at the top | – | `position: fixed` |
| header | hover | nav links opacity 1→.6; dark pill → blue | 0.3s ease / 0.5s | Tailwind `transition` + `hover:` |
| hero | load | headline, row and chips rise 24px + fade in, staggered | ~0.9s ease-out | CSS `@keyframes`, fill both |
| hero (≥1024) | pinned, scrubbed | media grows 580×326 → whole panel, radius 24→40; black wash 0→.75; text → white | across the pin (110svh) | sticky panel inside a 210svh wrapper with a named `view-timeline`; CSS keyframes on `contain` range |
| industries | entering view, scrubbed | label opacity 0→1; rows opacity 0→1 + rise, staggered | entry → cover 40% | CSS `animation-timeline: view()` |
| industries | hover | row colour → blue | 0.3s | `transition-colors` |
| brands (≥1024) | pinned, scrubbed | name list moves up one row per brand; each name's opacity 0.05→1→0.05 by distance; detail + background crossfade | across the pin (400svh) | sticky panel in a 500svh wrapper, named view-timeline; per-name `animation-range` computed from its index (inline style) |
| brands (phones) | entering view | grid fades in | entry | CSS view() |
| cases | scrubbed as each card enters | scale .9→1 | until it reaches the top | each card `position: sticky; top` in its own 100svh slot; CSS view() on the slot |
| cases | hover | blue pill follows the cursor; fades in | 0.3s | onMouseMove sets CSS vars (hydrate visible); without JS the pill sits centred |
| services (≥1024) | pinned, scrubbed | track X 0 → −(track − window); centre card tint + picture grayscale 1→0 | across the pin (280svh) | sticky stage in a 380svh wrapper, named view-timeline; per-card ranges from index |
| services (phones) | entering view | heading fades in, cards rise | entry | CSS view() |
| steps | entering view | each step fades + rises 24px, staggered | entry → cover 35% | CSS view() |
| founders (≥1024) | pinned, scrubbed | 6 cards X off-right → off-left, rotate 10°→−10°, slight arc in Y, staggered | across the pin (~580svh) | sticky stage in a 680svh wrapper; per-card ranges from index |
| founders (phones) | entering view | cards rise + fade | entry | CSS view() |
| FAQ | entering view | rows fade + rise 24px staggered | entry → cover 30% | CSS view() |
| FAQ | click | answer opens; arrow turns 90° | 0.3s | `<details>` (no JS) |
| footer | entering view | CTA fades + scales .96→1 | entry → cover 40% | CSS view() |
| footer | hover | link colour → blue | 0.3s | `transition-colors` |

## Media slots → placeholders

| slot | placeholder |
|---|---|
| hero video 580×326 r24 (phones 16:9 full width) | `bg-muted` with a soft `glow` gradient, same radius |
| industries illustrations 165×165 (phones) | a translucent glow-tinted tile r24 |
| brand background photos (fill the panel) | dark surface (`.dark` muted) with a slow-shifting glow wash, one tint per brand (chart-1…5) |
| case study videos (cards) | `bg-muted` (dark scope) with a gradient wash per card |
| service illustrations 324×255 | a `foreground/5` tile r24 |
| steps panel video | charcoal `bg-secondary` (dark scope) with a soft glow drift |
| founder videos 294×198 r8 | `bg-muted` tile r8 |
| footer blurred waves | three blurred glow ellipses (soft gradient, not a drawing) |

## Decisions

- Light is the faithful mode. Dark is a sibling: near-black page, charcoal cards, same blue.
- Panels that sit on video (hero end-state, brands, cases, steps, industries cards on phones)
  wrap themselves in `.dark` so their wash and text stay dark/white under any theme mode.
- The desktop pinned sequences only switch on at ≥1024px (`lg`), as the original's 390 capture
  shows ordinary stacked sections there; phones get simple entering-view reveals.
- Everything scroll-driven is CSS (`animation-timeline`), inside `@supports` and a
  reduced-motion media query; without support the pinned wrappers collapse to normal stacked
  content (no tall empty wrappers).
- Social icons: lucide 1.x has no brand icons; footer socials take any icon as a prop (demo uses
  AtSign, Rss, Mail), which also keeps clear of the original's marks.
- Partner chips ("Partnered with") become fictional platform names with lucide icons.

## Comparison round 1

Heights (1440 / 390, original → ours): hero 1890 → 1890 (210svh) / 1002 → 1021 · industries 630 → 662 / 1719 → 1613 · brands 4500 → 4500 (500svh) / 420 → 569 · cases 4500 → 4468 / 2128 → 2220 · services 3427 → 3420 (380svh) / 2952 → 3449 · steps 877 → 865 / 1004 → 943 · founders 6150 → 6120 (680svh) / 3107 → 2847 · FAQ 584 → 596 / 687 → 637 · footer 830 → 984 / 792 → 870. Window-sized: the capture marks hero (210%), brands (500%), cases (496%), services (380%), founders (680%) in ours, matching the original's hero/brands/cases. No horizontal overflow at 360/768/1024 (the original overflows at 360 and 1024).

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | headline 4 lines (original 3) | headline 3 lines, overlapping the media (original 2) | pinned grow + wash + white text all present | yes: shorter copy |
| industries | ok | the hover zone was the whole row, so the capture's centred cursor turned row 1 blue | heading fade + staggered rise present | yes: links are inline |
| brands | grid 569px tall vs 420 (12 names, looser rows) | matches: list slide, falloff, detail swap | scrubbed slide, opacity falloff, crossfade present | yes: tighter grid |
| cases | ok (stacked sticky, scale-in) | ok; the cursor pill sits where the pointer last was | scale .9→1 while pinned present | – |
| services | 6 cards (original 5) | 6 cards → track moved 1900px (original 1380); titles drifted with chip count (mt-auto) | pinned sideways scrub + tint/grey filter present | yes: 5 cards, fixed title line |
| steps | ok | the placeholder's blue glow too strong | step reveals present | yes: softer glow |
| founders | quote mark faced the wrong way | ok | cards fly X ±912px with rotate 10°→−10° | yes: mark turned |
| FAQ | ok | ok (crops show rows in their pre-reveal state: crops are taken at the top of the page; scroll frames show them in) | rows rise in | – |
| footer | ok | 984 tall: the closing line wrapped to 3 lines at 80px | CTA fade/scale present | yes: 70px, wider, shorter line |

## Comparison round 2

Heights now (1440 / 390): hero 1890 / 983 · industries 662 / 1613 · brands 4500 / 500 · cases 4468 / 2220 · services 3420 / 2909 · steps 865 / 943 · founders 6120 / 2847 · FAQ 596 / 637 · footer 853 / 858 (original 830 / 792). Window-sized sections match; no overflow at 360/768/1024. Services track now moves 0 → −1380px, exactly the original's distance.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | 3-line headline like the original | 2-line headline, row and chips where the original has them | pinned grow, wash 0→.75 (420–1319px, original 420–1320px), white text | – |
| services | **bug**: the last card stayed hidden; the inline per-card `animation-range` (meant for the desktop pin) also overrode the phone reveal range | ok | – | yes: ranges moved into a CSS variable read only by the desktop rules (services, founders, brands) |
| founders | ok | checked in its own capture: six cards cross one after another, about four on screen, tilting +10° → −10°, like the original's frames | staggered | – |
| footer | ok | 853 vs 830; links on a 28px line like the original | – | yes (line spacing) |
| re-theme | – | hero and FAQ under `sample-ember` dark: all colours and fonts follow the theme | – | – |

Left as is: placeholders are flat token surfaces where the original has photos/video (hero media, brand backgrounds, case cards, steps panel, founder clips, service illustrations); the brand-list panel is therefore darker and plainer than the original's photos under a wash. The phone wordmark grid is 500px vs 420px (12 sample brands vs 9).

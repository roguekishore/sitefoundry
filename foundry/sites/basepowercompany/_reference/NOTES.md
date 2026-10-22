# basepowercompany: notes

Recreating the landing page of https://www.basepowercompany.com/ (precaptured 2026-10-21; no other
pages asked for). The fictional company is **Porchlight**, a home-battery-plus-electricity
company; its battery is the **Porchlight Hub**. All copy is our own.

## Design language

- **Palette roles.** A warm stone page (`#f0eeeb`), white cards, warm ink (`#292826`) for text,
  warm greys (`#54524f` body, `#7f7d7a` quiet, `#d8d7d5` hairlines and the big illustration
  card). Two greens carry the brand: a deep forest green (`#1e4d2b`) for headings, outline
  buttons, text links, the pricing gate card, the active step and the whole footer; a bright
  lime (`#b2dd79`, hover `#d6f0b4`) for every filled CTA, with forest text on it. A burnt
  orange (`#ed6c30`) is the sparing third colour: the torn-tape labels, hand-drawn underlines
  under key phrases, and the progress rail. Review stars are a warm yellow (`#f7c33c`).
- **Type scale.** One neo-grotesk for everything (PP Neue Montreal), set tight and mostly
  500/600: hero 48px (40 on phones), section heads 40/44 (32/38 on phones), card heads 32,
  sub-heads 20/27, body 16/24, small 14/21, captions 12/18, tracking +0.2px on body sizes,
  slightly negative on big heads. Uppercase 14px labels in grey ("featured across…") and
  12–14px uppercase tag chips on white.
- **Spacing rhythm.** 32px gutters at 1440 (16 on phones), content 1376 wide; sections
  ~96–130px apart; cards gap 24–36px.
- **Layout grid.** Mostly a two-column split (text 1/2 or 1/3, media the rest) or a 3-up
  card row; full-bleed photo bands for the hero, the energy pitch and the closer.
- **Shapes.** 8px buttons and inputs, 16px media in the rail and plan cards, 20px review
  and step cards, 24px for the big illustration card and the quote banner, 32px for the
  pricing gate card. Pills for the grid toggle.
- **Depth.** Flat: almost no shadows (one soft `0 12px 32px /16%` under the pricing gate),
  depth comes from photos with dark scrims and the blurred pricing preview.

## Type

| Original | Kind | Ours | Why |
|---|---|---|---|
| PP Neue Montreal (400–700) | neo-grotesk sans, normal width, medium x-height, compact squarish bowls | **Hanken Grotesk Variable** | the open neo-grotesk closest on width, x-height and the tight, slightly geometric feel at 500/600; already in the workspace |
| Clarendon Wide 700 | wide bracketed slab serif (only the giant footer watermark and a tiny "built in" line) | Hanken Grotesk 900, wide tracking | see decisions: a third face has no token slot |
| Dahlia Blues | brush script (only inside the two orange tape labels) | Hanken Grotesk italic 600 | same reason |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | top bar | `basepowercompany-header` | 69px fixed (53 on phones) | wordmark + burger | wordmark, 5 nav items (4 with chevrons), Sign in outline, Get started lime | – | transparent with white ink over the hero, white bar with dark ink once scrolled; hover pills |
| 1 | hero | `basepowercompany-hero` | **90svh** (810/900, 760/844) | content on top, centred: rating, 40px h1 on 2 lines, sub, stacked zip input + full-width lime button, caption | content bottom-left (from y≈460): rating, 48px h1 one line, sub, one-row zip form 614 wide with button inside | full-bleed photo, cover | photo ken-burns 7s once; content slide-up 300ms on load |
| 2 | press strip | `basepowercompany-press` | content (≈258) | label, 2 names visible, marquee | label centred, 7 names in a row, marquee, edge fades | – | marquee loop 90s |
| 3 | quote banner | `basepowercompany-quote` | content (576 card) | 358×576 card: quote at top, person at bottom | 1376×576 card, quote + name + caption + Learn more on left 1/2 | photo, cover, r24 | button hover |
| 4 | how it works | `basepowercompany-grid-switch` | content | tape, 32 heading centred, sub, card: illustration 358×244 on top, toggle, 20 heading, text | tape, 40 heading centred, sub, card 1312×595 (#d8d7d5, r24): illustration left 872×595, right column toggle + 32 heading + text | illustration (contain) ×2 states | toggle switches grid on/off: knob slides, texts and slot crossfade |
| 5 | Core rail | `basepowercompany-rail` | **pinned, 460svh desktop / 520svh phone** | photo 358×203 on top, heading, list, stacked buttons | heading + list + buttons left 1/2, photo 676×665 right (r16) | 4 photos, cover, r16 | pinned; rail-in reveal (opacity 0→1, y 18→0); orange progress bar grows; active item turns green/20px and opens its text; photos crossfade with scale 1.05→1 |
| 6 | plans | `basepowercompany-plans` | content | heading 32 two lines, sub, full outline button; cards stacked, photo 358×269 | heading 40 + sub left, outline button right; 3 cards, photo 435×489 r16, icon tile + 32 title, sub, link | 3 photos, cover, r16 | photo hover scale 1.03; link chevron nudges |
| 7 | pricing gate | `basepowercompany-pricing-gate` | content (≈620) | blurred preview behind, green card full width | blurred two-panel pricing preview, centred green card 578 wide r32 with icon, 32 heading, sub, select | – | none |
| 8 | reviews | `basepowercompany-reviews` | content | heading 32 three lines, rating, link below; one card per view; arrows centred | heading 40, rating + link in a row; track of white review cards 380×280 r20 and dark story cards 560×280 r20; arrows left | story photos (dark) | arrows scroll the track (smooth); snap |
| 9 | steps | `basepowercompany-steps` | content | tag, 32 heading centred, lime CTA; cards stacked, active green card holds its photo | tag, 40 heading centred 2 lines, CTA; 3 step cards left (active green), photo 672×413 right r20 | 3 photos, cover, r20 | click a step: it opens green, its photo shows (crossfade) |
| 10 | extras | `basepowercompany-extras` | content | heading 32, sub, 358 squares stacked | heading 40, sub, 2 squares 676 r24 | 2 photos, cover, r24 | white bar on the photo opens its text on hover/focus, plus turns 45° |
| 11 | energy band | `basepowercompany-banner` | content (≈486) | full-bleed photo, tag, 32 heading with lime underline, text, stacked buttons | same, content left 1/3 | photo, cover + left scrim | button hovers |
| 12 | FAQ | `basepowercompany-faq` | content | tape, 32 green heading w/ orange underline, rows 18px | tape, 40 heading, rows 20px, first open | – | rows open/close; +/− swap |
| 13 | closer | `basepowercompany-banner` (second use) | content (370 / 400) | as 11 | as 11 | photo | as 11 |
| 14 | footer | `basepowercompany-footer` | content (≈1320) | 2-col links, badges, contact stacked, socials, watermark, legal | 5 link cols + badges, contact row + socials, giant watermark wordmark, rule, legal + badge, legal links + "built in" line | – | link hover opacity |

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header | scrubbed (scroll 0→80px) | background transparent→white, ink white→dark, Sign-in border white→green | linear over 80px | CSS `animation-timeline: scroll(root)` on colour vars; fallback always solid |
| header nav | hover | dropdown items: grey-5 pill fill, ink darkens, chevron rotates 180° | 0.3s cubic-bezier(.3,.3,.3,1) | Tailwind `hover:` + `group-hover:rotate-180` |
| buttons | hover | lime → pale lime; forest outline → darker; white outline → pale lime ink/border | 0.15s cubic-bezier(.4,0,.2,1) | Tailwind transitions in `basepowercompany-button` |
| hero photo | load | ken-burns: scale 1.08→1 | 7s ease-out, once | CSS keyframes on the slot wrapper |
| hero content | load | rise 16px + fade in | 300ms ease-out, stagger 80ms | CSS keyframes, fill both |
| press strip | loop | marquee slides left | 90s linear infinite (we use a shorter cycle for fewer names: 40s) | CSS keyframes, duplicated list |
| grid switch | click | knob slides, ON/OFF label swaps, two texts and two slots crossfade | 0.3s | checkbox + `has-checked:` classes (no JS) |
| rail | entering view | heading, list, photo card: opacity 0→1, y 18→0 | 0.7s cubic-bezier(.22,1,.36,1) feel → scrubbed over the first 240px | CSS view timeline on the wrapper, `entry` px range |
| rail | pinned | sticky screen for 4 steps | – | `position: sticky` in a 460svh (520svh phone) wrapper |
| rail | scrubbed | progress bar fills top→bottom | over the pinned stretch | `scaleY` 0→1 on the wrapper's timeline |
| rail | scrubbed (stepped) | active item: title grey 16→green 20, text opens; others close | at each quarter | per-item open/close keyframes with inline range vars (pinned-crossfade recipe) |
| rail | scrubbed (stepped) | photo k: opacity 0→1, scale 1.05→1; previous fades out | at each quarter | same, on the photo stack |
| plans | hover | photo scale 1.03, link chevron +2px, link opacity .8 | 0.3s / 0.15s | Tailwind `group-hover:` |
| reviews | click | track scrolls one card | smooth | `scrollBy` in a small effect (hydrate visible) |
| steps | click | chosen step turns green and opens; photo swaps | 0.3s | React state (hydrate visible) |
| extras | hover / focus | bar's text opens (grid rows 0fr→1fr), plus rotates 45° | 0.3s | Tailwind `group-hover:` / `group-focus-within:` |
| faq | click | row opens / closes, + becomes − | instant (native) | `<details name>` |

## Media slots → placeholders

All slots are `ReactNode` props; empty, each is a token-coloured surface of the same size,
radius and crop (`basepowercompany-media`): a translucent ink tint (`bg-muted-foreground/25`)
on light bands, and a mid-grey on a `bg-background` base inside dark-scoped photo bands
(hero, quote, story cards, banners) under the original's scrims.

- hero photo 1440×810 / 390×760 (cover, ken-burns)
- quote banner photo 1376×576 / 358×576, r24
- grid illustration 872×595 / 358×244 (contain) ×2 (grid on / grid off)
- rail photos 676×665 / 358×203, r16 ×4
- plan photos 435×489 / 358×269, r16 ×3
- review story photos 560×280, r20 (under a dark scrim)
- step photos 672×413 / 308×231, r20 ×3
- extras photos 676×676 / 358×358, r24 ×2
- energy band + closer photos, full-bleed

## Decisions

- **Light is the faithful mode.** The photo bands carry the `dark` class themselves so their
  white text and lime links follow tokens; the hero's zip form uses `bg-foreground
  text-background` inside that scope to stay light.
- **Token mapping.** `primary` = forest green (heads, outlines, links, gate card, active step,
  footer), `accent` = lime (filled CTAs; its hover mixes 55% lime with `card`), `highlight` =
  orange (tape, underlines, rail progress), `chart-4` = star yellow, `muted` = the `#d8d7d5`
  illustration card, `card` = white.
- **One typeface.** Clarendon Wide (footer watermark) and Dahlia Blues (tape labels) are
  decorative one-offs; tokens only have body/display/mono, and pointing `--typeface-display`
  or `--typeface-mono` at a slab or a script would wreck every other block shown under this
  theme. The watermark is Hanken 900 and the tape text Hanken italic. Suggestion for the user:
  a `--typeface-accent` token would let themes carry a third decorative face.
- **Gutter as a clamp** (`clamp(1rem, 2.25vw, 2rem)`): 16px on phones, 32px at 1440, so one
  token gives both measured gutters.
- **Hand-drawn underlines** are a small inline SVG stroke (`currentColor`, highlight or
  accent) under the chosen phrase: design chrome, not artwork.
- **No logos.** Press names are fictional publications set in plain text with different font
  treatments; the Google "G" becomes a small letter disc; app-store and BBB/SOC badges
  become plain outlined text badges.
- **Nav dropdowns** keep the hover look (pill + rotating chevron) but open no menus.
- **Reviews carousel** starts at the first card (the original opens centred on a story
  card with cards cut on both sides; it is a looping JS carousel).

## Comparison round 1

Page height 13685 vs 13829 (1440), 15670 vs 16483 (390; the original's footer small print is
much longer). The hero is window-sized (90svh) and the rail is pinned at 460svh / 520svh, both
as in the original. Fits at 360, 768 and 1024. Motion list: header colour scrub, hero zoom +
rise, press marquee, rail pinned + reveal + stepped open/close + photo crossfade with scale
1.05→1 all show up; hovers match (pill + chevron flip, lime fill, outline colour, chevron nudge).

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| all type | Hanken at 600 reads lighter than Neue Montreal 600; +0.2px tracking looks airy | same | – | yes: weights up one step (600→700, 500→600), tracking −0.005em on body, −0.025/−0.035em on heads |
| hero | zip field collapsed to 26px (flex-1 in a column) | – | ok | yes: flex-1 only on desktop |
| press | label wrapped to two lines | band ~50px taller than the original | ok | yes: shorter demo label, no bottom padding on desktop |
| quote | – | quote ran to five lines (the underlined phrase broke the line) | – | yes: shorter quote and phrase |
| grid switch | ok | text column touched the illustration (no 48px gap) | ok | yes: 872 / 48 / 344 + 48 columns |
| rail | ok | ok (item spacing within ±10px) | ok | – |
| extras | ok | subtitle wrapped (the original is one line) | – | yes |
| footer | – | badges of uneven width; footer shorter (less small print) | – | yes: fixed badge width, more demo small print |
| reviews | story card 280 tall vs 296 | carousel starts at the first card, not centred | ok | no: the original's looping, centred JS carousel is a deliberate simplification |

## Comparison round 2

Page height 13711 vs 13829 (1440), 15779 vs 16483 (390). Still fits at 360/768/1024; the same
motion rows and hovers show up in ours-design.md.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| all type | weights and tracking now read like the original's 600/500 neo-grotesk | same | – | – |
| hero | zip field 50px, button 46px, stacked as in the original | form, heading and rating line up (x 32, y 460–715) | zoom + rise ok | – |
| press | one-line label, two names in view | band height within 10px | marquee ok | – |
| quote | quote on top, person at the bottom of a 576 card | quote four lines, centred left half | – | – (the underlined phrase is an inline-block and never wraps, like the original's) |
| grid switch | ok | 872 / 48 / 344 columns, switch and heading positions match | toggle ok | – |
| rail | matches the original's frame for frame (heading, rail, active item, buttons, photo 676×665) | same | pinned, progress, open/close, crossfade ok | – |
| plans, gate, reviews, steps, extras, banners, faq, footer | layout, heights and rhythm match | same | hovers ok | – |

Left as is: the reviews carousel starts at the first card (the original opens on a centred,
looping JS carousel); the footer is shorter than the original's because its small print is
much longer; the footer watermark is a ten-letter name, so its letters are narrower than the
original's four.

**Re-theme check:** `basepowercompany-plans` and `basepowercompany-rail` under `sample-ember`
(light) pick up its serif heads, rust primary, peach accent buttons and its radius; nothing is
hard-coded. **Dark sibling:** works page-wide; the footer becomes a mid green with dark ink,
where the lime sign-off line is low-contrast (a theme choice to revisit if dark is ever used).

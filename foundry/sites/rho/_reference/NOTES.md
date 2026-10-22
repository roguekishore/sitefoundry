# rho — recreation notes

Original: https://rho.co/ (captured in advance; landing page only, no other pages asked for).
Fictional company used instead: **Ostra**, a finance platform for startups (own copy throughout).

## Design language

- **Two tones on one page.** Near-black (`#0f0f10`, header bar `#000`) and white. The whole
  page (header included) changes colour as you scroll: the hero is dark, the next four
  sections light, the fees/onboarding/safety run dark, testimonials and the closing band light,
  the footer dark. Every element carries a 0.62 s `cubic-bezier(.32,0,.24,1)` transition on
  colour, border and background, so the switch is a soft crossfade of the whole window.
- **Palette roles.** Text off-white `#f5f8f8` on dark / ink `oklch(.2 .004 165)` on light.
  One brand colour: a mint-teal `#6af3d9` (hover `#03e1c0`), on CTAs, eyebrow labels, the
  hero badge square and small "NEW" chips (ink text on it). Surfaces are a cool grey-teal at
  8 % (`rgba(129,165,169,.08)`): `#f5f8f8` on white, `#181b1c` on black. Hairlines are the same
  grey-teal at 12–30 %. Muted text `#7f9195` / `#a8a8a7`.
- **Type scale (1440 → 390).** Hero h1 80 → 48.5 px, line-height 1.1; section h2 60 → 36 px,
  line-height 1.0, weight 400; card titles 28 → 24 px; leads 20 → 18 px / 1.3–1.5; body 15 px;
  small 13 px; fine print 11 px. Mono labels 11–13 px uppercase, tracking .2–.66 px; the hero
  badge mono is bold. Headings are regular weight, never bold: the look is light and even.
- **Grid.** 1216 px content column (112 px margins at 1440), 12 px column gutter on the source,
  20 px gaps between cards; split sections are two 576 px halves with a 64 px gap. Header is
  full width with 40 px side padding, 72 px tall. Phones: 16–20 px gutters.
- **Rhythm.** Content sections ≈ 80 px top/bottom padding (720 px split sections are mostly the
  576 px media + padding). Headings sit 56–80 px above their content.
- **Shapes and depth.** 8 px radius on cards and media, 6 px on buttons/inputs/badges. Flat:
  no shadows except the hero product shot (`0 40px 120px rgba(0,0,0,.55)`). Cards are filled
  tints, sometimes with a 1 px hairline.

## Type

| Original | Classification | Width / x-height | Ours | Why |
|---|---|---|---|---|
| neueMontreal (PP Neue Montreal) 400/500/600 | neo-grotesk sans | normal, slightly narrow; tall x-height | **Instrument Sans Variable** | same neo-grotesk construction, slightly narrow proportions, tall x-height and a light-feeling regular; already in the workspace |
| apercuMono 400 (bold in badge) | monospace, grotesk-flavoured | normal | **DM Mono** (400/500) | low-contrast grotesk mono, the site itself loads DM Mono as a fallback |
| Rho wordmark (serif logo) | — | — | plain "Ostra" wordmark in the display face | no logos copied |

## Section map (1440 heights from the capture)

| # | section | block | height | 390 | 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | header (fixed, 72 px) | rho-header | content | wordmark + menu icon | wordmark, 4 nav links, Sign in / Book a demo / mint button | — | sticky; colour follows tone; link hover colour |
| 1 | hero | rho-hero | content (≈1490) | badge full width, 3-line h1, email field + 2 buttons in a row, fine print, product shot | centred badge, 2-line 80 px h1, lead, email+button / outline / light buttons, fine print, product shot 1094 wide | starfield canvas → soft glow; product shot 1.57 → placeholder | badge square blinks ×5 on load; product shot scales .9→1 scrubbed |
| 2 | logo strip (in hero section) | rho-logos | content (≈120) | mono label pill, marquee | same, five names visible | — | marquee loop 38 s |
| 3 | "easy to start" split | rho-split | 720 | text, then media | text left / media right 576×560 | video 1.03 → placeholder | words rise; text fades up |
| 4 | "why teams choose" stories | rho-stories | 845 | rail, one card + peek, arrows | 2 cards 638 wide, arrows below | video 16:9 per card | words rise; rail fades in; arrows .3 → 1 |
| 5 | bento "built to scale" | rho-bento | 2135 | horizontal rail, cards 320/652 × 365 | heading + mint button; 4 rows of 450 px cards (1+2, 1+1+1, 2+1, 3) | screenshot per card → inset panel placeholder | words rise; cards fade up 700 ms staggered |
| 6 | fees table | rho-fees | 1066 | rows: number, label, value | 2-line h2, lead, 7 rows of 79 px, fine print | — | words rise; table fades up; caret blinks after values; row hover tint |
| 7 | "up and running" split (media left) | rho-split | 736 | text then media | media left 576², text right | video 1:1 | words rise; text fades up |
| 8 | safety split + outline button | rho-split | 720 | text, button, media | text left / media right | video 1.03 | same |
| 9 | testimonials | rho-testimonials | 821 | rail of cards + arrows | 3×2 grid of 392×250 cards | avatars 40 px | words rise; cards fade up staggered |
| 10 | closing band | rho-cta | 450 | centred, email field | centred h2, lead, email field, fine print | — | words rise; text fades up |
| 11 | footer | rho-footer | 1551 | big dotted word, wordmark + socials row, 2-col links, legal | big dotted word, 5 columns, rule, legal paragraphs | starfield canvas → none; "LOCK IN" dot canvas → dotted type (CSS) | — |

Nothing on the page is sized by the window (capture marks no section so).

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| whole page | scrubbed by which section is mid-screen | page + header colours swap dark ↔ light | 0.62 s cubic-bezier(.32,0,.24,1) | `rho-tone-flow` component: IntersectionObserver on `[data-rho-tone]` sections (rootMargin −50 %), toggles `.dark` on the page wrapper; sections inherit its tokens; CSS transitions in `@layer base`. Static HTML: each section keeps its own tone. hydrate load |
| header | fixed | stays at top | — | `sticky top-0` |
| hero badge | load | mint square blinks ×5 | 1 s steps | CSS keyframes, 5 iterations |
| hero shot | scrubbed | scale .9 → 1 | scroll 0–600 px | `animation-timeline: view()`, range cover 10 %–45 % |
| logo strip | loop | translateX marquee | 38 s linear (27 s phones) | CSS keyframes, duplicated list |
| every h2 | entering view (later words lag, partly scrubbed) | each word rises 66 px (≈1.1 em) from under a line clip | ≈ half a screen of scroll | `rho-heading`: words in `overflow-clip` spans, `animation-timeline: view()` range cover 10 %–35 % + per-word offset |
| paragraphs, CTAs, fees table, fine print | entering view | opacity 0→1, rise 14 px | 520 ms | `rho-reveal` component: view timeline, range entry 0 %–cover 25 % |
| bento & testimonial cards | entering view | opacity 0→1, rise 14 px, staggered | 700 ms | `rho-reveal` with per-card range offset |
| rail arrows | entering view / at start | disabled arrow at .3 opacity | — | disabled state `opacity-30` |
| fees values | loop | block caret blinks after each value | 1 s | CSS keyframes |
| fees rows | hover | row tint (card surface) | .42 s | `transition-colors` + `hover:bg-card` |
| links / nav | hover | colour to mint (links) / slight dim (nav) | .16–.62 s | Tailwind `transition-colors` |
| mint button | hover | `#6af3d9` → `#03e1c0` | .16 s | `hover:bg-[color-mix(primary, foreground)]` |
| light button | hover | `#f5f8f8` → `#e4ebeb` | .16 s | color-mix toward muted |

Skipped: the floating "Ask your question" AI widget, the cookie shield and the fixed
"Human / Machine" page-mode toggle (overlays, not sections); WebGL starfields (media).

## Media slots

- hero starfield canvas (1440×1611) → `backdrop` slot; empty: a soft glow ellipse from `--glow` at low opacity where the arc of dots sits.
- hero product shot 1094×699 (1.57), radius 8, big shadow → `media` slot; empty: inverse surface (`bg-foreground/95`), the white panel the original shows on black.
- split videos 576×560 (1.03) / 576×576 → `media`; empty: a dark panel (`.dark bg-background`) with a hairline, like the original's black video frame.
- story videos 638×359 (16:9) → `media` per card; empty: `bg-muted`.
- bento screenshots (panels inside each card) → `media` per card; empty: an inset panel (`bg-background`, hairline, rounded top) filling the lower part of the card.
- testimonial avatars 40×40 radius 6 → `avatar` per quote; empty: `bg-muted` square with initials.
- footer "LOCK IN" dot canvas → rebuilt as typography: a big word in CSS dot texture (radial-gradient clipped to the text). Footer starfield → nothing.

## Decisions

- Light is the faithful mode: sections that are dark on the original carry `tone="dark"` (adds
  the theme's `.dark` set to that section). Under `mode=dark` the whole page stays dark.
- The colour flip needs JavaScript (which section is mid-screen); without it the page still
  shows the right tone per section with hard edges.
- Rails (stories, phone bento, phone testimonials) are scroll-snap lists with arrow buttons
  (`rho-rail`, hydrate visible) rather than a carousel library.

## Verification

Captures of ours: `preview.html?site=rho&theme=rho-theme&mode=light`. The section crops of
the original are unreliable for colour (the capture tool scrolls back to the top before
cropping, so most crops show the dark tone with reveals half-way): colour and tone were
compared on the scroll frames, sizes on the section list.

Process note: the shared gallery reloads whenever other sessions write files, which broke
`capture.mjs` mid-run three times; it was simply retried until a run went through.

### Round 1

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| all | — | content column 1184 px (max-w-page included the gutters) vs 1216 | — | yes: `--page-width` 78rem; rail padding adds the gutter |
| type | Instrument Sans wider than Neue Montreal ("Business banking" 639 vs 596 px at 80 px) | same | — | yes: width axis loaded (`standard.css`), `font-stretch: 94%` in the theme |
| hero badge | mint square missing after load | same | blink ended on its "off" frame (fill-mode both) | yes: no fill mode, ends visible |
| hero | 2-line h1 (original 3 lines: shorter copy) | matches; shot 0.9→1 by scroll 900 like the original | scale 0.91→1.00 seen | content only |
| split ×3 | matches | 704 vs 720 tall, media 560 vs 576 | words rise 66 px, fades 14 px | yes (column width) |
| stories | rail + peek, arrows | 866 vs 845; rail aligns at 112 px | rail fades up | close enough |
| bento | rail of 320/652 cards | 2136 vs 2135 | cards fade up, staggered | — |
| fees | matches | 1028 vs 1066 | caret blinks; row hover tint | — |
| testimonials | rail | 796 vs 821 | cards staggered | — |
| footer | matches | 1094 vs 1551: shorter legal copy, tighter link rows | — | partly: link rows 30 px apart, two more legal paragraphs; the rest is copy length |
| tone flow | dark → light → dark → light → dark sequence matches the original's frames | same | crossfade 0.62 s | — |
| overflow | fits at 360/768/1024 | | | |

### Round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| all | gutters 16 px, nothing overflows at 360/768/1024 | content column now 112–1328 px like the original | — | — |
| split ×3 | matches | 720 / 736 / 720, the original's heights exactly; media 576 wide | word rise 66 px, fade 14 px | — |
| hero | badge square back after its five blinks | hero + logo strip 1664 vs 1611 (taller lead line spacing) | shot scale 0.91→1.00 by scroll 900, like the original | left: within a screen's tolerance |
| stories / bento / fees / testimonials / cta | match | 866 / 2136 / 1028 / 796 / 455 vs 845 / 2135 / 1066 / 821 / 450 | all reveals present, same kinds and distances | — |
| footer | matches | 1231 vs 1551 | — | left: the gap is the original's longer legal copy (seven long paragraphs); the layout and rhythm match |

Motion checks pass: sticky header, scrubbed shot scale, marquee loop (38 s), word-by-word
rise on every h2, 14 px fade-ups (cards staggered), blinking carets, hover changes on links,
buttons, rows and badges; the tone crossfade follows the original's dark/light sequence.
No section of the original is window-sized, and none of ours is.

Re-theme check: `rho-bento` (sample-ember, light) and `rho-fees` (sample-ember, dark) both
take the other theme's colours and fonts cleanly.

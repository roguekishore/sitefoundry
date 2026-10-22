# neko — recreation notes

Original: https://www.nekohealth.com/ (precaptured 2026-10-21, landing page only; no other pages
asked for). Fictional stand-in: **Ardent Health**, a preventive body-check clinic in the UK
("Ardent Body Check"), with its own copy, clinic names and press names.

## Design language

- **Calm clinical luxury.** Mostly white, with two big washes of colour: a soft lemon yellow
  (oklch .958 .116 103) that the scan overview and the pinned tab section sit in, and a pale
  ice blue (oklch .948 .022 214) the footer fades into. A deep navy strip (oklch .228 .043 228)
  closes the page. Text is a blue-tinted charcoal (oklch .288 .009 220); secondary text a
  slate blue-grey (oklch .499 .039 213).
- **One brand colour**, a clear cyan-blue (oklch .649 .125 227) only on the "join" buttons and
  the quote marks. Every other action is a charcoal square.
- **Type:** a soft, tightly set display serif for every headline (68/80 desktop, 40/44 phone;
  100px for the hero line, 44px for the small one) and a neutral humanist sans for everything
  else (16/20 desktop, 14/20 phone). Eyebrows and labels are uppercase sans with 0.6px tracking.
- **Spacing:** a 40px gutter on desktop (20px on phones), 1360px content width, sections
  separated by generous 200px breathers (100px on phones) that carry a small "■ LABEL ———"
  divider row.
- **Shapes:** squircle-ish 12–14px buttons (60px tall desktop, 48px phone), 20px cards,
  29px photo frames, a 46–64px rounded bottom on the hero card and footer panel, pills for chips.
- **Depth:** flat. No shadows apart from the phone booking bar's upward one; layering comes
  from colour washes and photo frames.

## Type

| Original | Classification | Ours | Why |
|---|---|---|---|
| Orleans (display) | soft-contrast display serif, slightly narrow, moderate x-height, tight tracking | **Newsreader Variable** (opsz axis, weight 400, -0.02em) | open serif with a display optical size that has the same low-to-moderate contrast, wedge serifs and slightly narrow set; not as delicate as Cormorant, less quirky than Fraunces |
| IBM Plex Sans (body, 300–500 incl. 450) | humanist-grotesque sans, normal width, large x-height | **IBM Plex Sans Variable** | the original body face is open (OFL): same font, variable so 450 works |
| Neko Sans (numerals, footer wordmark) | custom geometric | IBM Plex Sans light, wide tracking | closed face; only the wordmark uses it |

## Section map

Heights: 1440 window 900, 390 window 844.

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | `neko-header` | 64 / 104, sticky, over the hero | logo square left, two-line menu button right | logo square left, three links centred, blue "join" button right | — | nav links fade and lift away once you scroll; button hovers |
| 2 | hero | `neko-hero` | **100svh** at 390; **175svh** pinned at 1440 | full-bleed media, 3-line headline centred, dark CTA at bottom | pinned: full-bleed first media + CTA, then the media shrinks into a card inset 40px with a 64px rounded bottom, a second media fades in and the 100px headline appears | 2 slots: first-screen still, scan-room loop (both window-sized, cover) | scrubbed shrink + crossfade + headline rise |
| 3 | scan overview | `neko-scan` | content (1647 / 2096) | centred eyebrow, 40px title, intro, 5 list rows (thumb + label), feature card (photo + bullets), dark CTA | same, 600px column centred | 5 thumbs 100×100 r16, feature photo 600×338 | none (the capture lists no motion here) |
| 4 | four tabs, pinned | `neko-focus-tabs` | **570svh** / **525svh**, sticky window card | card inset 20 → full bleed; media top (aspect 1.2), tabs with underline, 40px headline, body, arrow link | card inset 40 → full bleed; media left 600px full height, text right at x 726 | 4 slots 600×900 / 350×293 | card expands; each next media slides up from below; text panels crossfade with per-word rise; active tab darkens, underline fills |
| 5 | yellow→white fade | part of `neko-mission` | 200 / 100 | — | — | — | — |
| 6 | mission line | `neko-mission` | content (264 / 420) | left aligned 40px | right half (x 726), 68px | — | words go from 30% to full opacity one by one, scrubbed |
| 7–8 | divider "PREVENTIVE CARE" | `neko-section-label` (in `neko-photo-grid`) | 200+200 / 100+100 | ■ label + rule | same | — | rule draws in |
| 9 | photo grid | `neko-photo-grid` | content (956 / 935) | 2 small photos side by side (offset), big square below, text under | 4-col grid: wide photo, tall photo, square photo under, text column bottom right | 3 slots | labels fade in |
| 10–11 | divider "OUR LOCATIONS" | in `neko-locations` | | | | | |
| 12 | locations carousel | `neko-locations` | content (590 / 742) | 68 heading 40px, cards 295×434 swipe, arrows + progress | cards 322×474, 4.2 in view | 1 slot per card | card captions fade in; carousel scroll-snap |
| 13 | breather | — | | | | | |
| 14 | reviews | `neko-reviews` | content (861 / 481) | stacked quotes with hairlines | 3 columns | — | — |
| 15–16 | divider "PRESS AND MEDIA" | in `neko-press` | | | | | |
| 17 | latest news | `neko-press` | content (768 / 674) | heading, text, link, featured card 350×500 | text left half, featured card 674² right | 1 slot | — |
| 18 | press marquee | `neko-press-logos` | 60 / 100 | wordmark row loop | same | — | marquee loop 33s / 51s |
| 19 | footer | `neko-footer` | content (1906 / 1956) | centred CTA, label, 2-col link grid, navy strip stacked | CTA, label, tagline + 4 link columns, navy strip in one row | 1 small avatar slot | headline words rise on entering view |
| — | phone booking bar | `neko-book-bar` | fixed bottom, phones only | product + duration + blue button | hidden | — | slides up when you scroll back up past the hero |

## Motion inventory

| section | trigger | what changes | timing | build |
|---|---|---|---|---|
| header | scrubbed, first 450px of page scroll | centre nav opacity 1→0, translateY 0→-16px | linear with scroll | CSS `animation-timeline: scroll(root)`, range 0–450px |
| header / buttons | hover | blue bg → darker blue; charcoal → lighter charcoal; links → brand colour | 150ms cubic-bezier(.4,0,.2,1) | Tailwind `transition-colors duration-150` |
| hero (≥1024) | pinned + scrubbed | card inset 0→40px sides and ~24px at the foot, radius 0→64px; second media opacity 0→1; headline opacity 0→1 + rise 40px; the CTA stays put | over the 75svh of pinned scroll | sticky inner in a 175svh wrapper; named view timeline on the wrapper; CSS keyframes with `contain` ranges |
| focus tabs | entering view | card clip inset 40px → 0 (full bleed) | entry 40–100% | CSS view() on the wrapper |
| focus tabs | pinned + scrubbed | media n slides up 100%→0 over media n-1; text n-1 fades out, text n fades in with each word rising (farther words from further down: 10→92px) | one segment per tab | sticky + named view timeline; per-item `animation-range` from inline styles |
| focus tabs | pinned + scrubbed | active tab grey→charcoal; phone underline fills 0→100% under it | per segment | same timeline |
| focus tabs | hover | tab opacity 1→0.8 | 300ms | Tailwind |
| mission | scrubbed while entering | each word opacity .3→1, in reading order | entry, ~30px apart per word | named view timeline on the section, per-word ranges |
| dividers | entering view | rule scaleX 0→1 from the left, label fades in | entry 0–200px | CSS view() |
| photo grid | entering view | photo labels opacity 0→1 | ~1.4s feel, scrubbed | CSS view() |
| locations | entering view | card caption opacity 0→1 | scrubbed | CSS view() |
| locations | click / swipe | horizontal track, arrows, progress bar | smooth scroll | native overflow-x + snap; small JS for arrows/progress (`hydrate: visible`) |
| press logos | loop | marquee translateX | 51s (desktop) / 33s (phone), linear, infinite | CSS @keyframes |
| footer CTA | entering view | headline words rise 92→0px, staggered | entry | CSS view(), per-word delay in range |
| book bar | scroll up after the hero | translateY 100%→0 | 300ms | small JS (direction), `hydrate: idle` |
| all | reduced motion | everything off, end states shown | | `@media (prefers-reduced-motion: reduce)` in each .css |

Skipped: the dotted "wave" illustration behind the scan list (artwork, media's business), the
video loops themselves, the 1400ms opacity web animations that just run the same reveals.

## Media slots → placeholders

| slot | size | placeholder |
|---|---|---|
| hero first screen | window, cover | `bg-muted` |
| hero scan-room loop | window → inset card | soft gradient highlight → muted |
| scan thumbs ×5 | 100×100 r16 (78 phone) | `bg-muted` |
| scan feature photo | 600×338, top of card | `bg-muted` |
| focus tabs ×4 | 600×window / 350×293 | alternating muted / highlight-tinted surfaces |
| photo grid ×3 | 674×539, 331×539, 331×331 (phone 168×282, 168×225, 350²) | `bg-muted` with a darker scrim for the white label |
| location cards ×5 | 322×474 / 295×434, r29 | `bg-muted-foreground/45` so the white caption reads |
| press featured | 674² / 350×500, r29 | `bg-highlight/50` with the scrim |
| footer avatar | 72×72 r12 | `bg-secondary-foreground/15` |

## Decisions

- **Theme roles:** primary = brand blue; highlight = lemon wash; accent = ice blue (footer);
  secondary = the navy closing strip (secondary-foreground white). Charcoal buttons use
  `bg-foreground text-background`. Light is the faithful mode; dark is a night version (deep
  navy page, lemon becomes a dim olive wash, blue brightened).
- **Header sits in a zero-height sticky wrapper** so the hero starts at the top of the page under
  it, as on the original.
- **Hero pin only from 1024px.** The phone original is a plain 100svh hero; the desktop one is
  175svh and pinned, so the wrapper is `h-svh lg:h-[175svh]`.
- **Section dividers are a component** (`neko-section-label`) used inside the block that follows
  it (`label` prop), with the 200px/100px breather above it as the block's own top padding.
- **The dotted wave art** is left out (illustration); the yellow gradient it sits on is kept.
- Tabs in the pinned section are anchor links to invisible markers spaced down the tall wrapper,
  so clicking one scrolls to its panel without JavaScript.

## Round 1 (ours vs original)

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | matches (logo square, two-line menu) | matches; nav fades away over 450px | nav fade present (scroll timeline) | — |
| hero | headline broke "check-/up" over two lines | settled card left a 28% gap at the foot and the headline sat at the top, cut off once the pin ended; original keeps the card nearly full height with the headline centred and the CTA in place | shrink + crossfade + rise present | yes: card foot 24px, headline centred, CTA static; new copy without a hyphen |
| scan | matches (1612 vs 1647 tall) | matches | none in either | — |
| focus tabs | matches, 4811px tall exactly like the original; underline fills, tabs darken, words rise | text block ~80px too low (tabs at 31% vs 23.5% of the window) | pinned, clip-path open, slide-ups, crossfades present | yes: tabs at 23.5% |
| mission | matches | column started at x 619 (original 726) and ran to the right edge | word lighting present (13 words .3→1) | yes: column at 50.45%, 36rem measure |
| photo grid | matches (offset pair over a square) | matches | labels fade in | — |
| locations | card corners 29px, original ~20px on phones | matches | captions fade in | yes: 20px on phones |
| reviews | matches, hairlines between | matches | none in either | — |
| press | matches | matches | none in either | — |
| press marquee | matches | matches | loop present | — |
| footer | matches | wordmark too light (300 vs regular) | headline words rise | yes: 400 |
| fit | 360 / 768 / 1024 all fit, no sideways overflow | | | — |

## Round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | 3-line headline, no hyphen break; 100svh like the original | settled card ends 24px above the pin's end with the headline centred and the CTA in place, as the original's scroll-01; 1575px = 175% of the window, same as the original | shrink, crossfade, rise present | — |
| focus tabs | unchanged, matches | tabs at 23.5% of the window, heading under them, as the original; 4725px = 525% | as round 1 | — |
| mission | matches | column at x 726, four lines like the original | words light in order | — |
| locations (re-theme) | | under sample-ember (72rem page) the row was cut at the content edge instead of running to the window edge | | yes: track padding computed from the page width, row runs off the right edge |
| press / locations (dark) | | in dark mode the photo fade used foreground (light), greying out the white captions | | yes: dark mode fades to background |
| fit | 360 / 768 / 1024 fit | | | — |

Re-theme check: `neko-scan` and `neko-locations` under `sample-ember` (light) take its cream
page, brown text, serif and sage wash with no neko colours left; `neko-press` in neko dark reads.

Left as is (would not be mistaken at a glance): the hero headline sits ~20px higher than the
original's in the settled state; the dotted wave art behind the scan list is not drawn (artwork).

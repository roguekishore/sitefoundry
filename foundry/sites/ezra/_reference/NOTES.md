# Ezra recreation — notes

Original: https://ezra.com/ (landing page only; precaptured 2026-10-23, no other pages asked for).
Fictional stand-in: **Kestrel**, a preventive whole-body MRI clinic, shown in a co-brand lockup
with a made-up partner, **Alder** (the original shows its parent brand beside its own).

## Design language

- **Palette.** A warm butter-cream page (#fef9ef) with midnight ink (#2a2b2f). One terracotta
  (#b05a36) for every action (pill buttons, check icons) and for the italic accent words in
  the hero headline. Plain white (#fff) cards with a sandy hairline (#d1c9bf); outline pills use
  a paler grey hairline (#e1e1df) that darkens to ink on hover. Two midnight bands close the page
  (testimonials, footer) with cream text; the quote panel inside them is cream on midnight.
  The "Our scan" band sits on white with a very light neutral panel (#f8f7f5).
- **Type.** Two voices: a light (300) high-contrast display serif for every heading, with
  calligraphic italics for accent words, set tight (line-height 1–1.1, slight negative tracking
  on the biggest); and a neutral sans (Inter) at 400–500 for body, nav and buttons, 16px/1.6.
  Scale at 1440: hero 88px · stat quote 50px · section heading 64px · "Our scan" 45px ·
  payment 39px · step titles, footer heads, prices 34px · card titles 24px · body 16–18px ·
  eyebrows 12px caps. At 390: 32 · 36 · 48 · 31 · 24 · 32/29 · 22 · 16 · 12.
- **Spacing.** Generous and calm: ~100px section padding at desktop, ~48px on phones; content
  column 1260px with 20px phone gutters. Centered compositions (hero, stat card, payment line,
  pricing labels) alternate with one asymmetric split (Our scan) and left-aligned bands
  (testimonials, footer).
- **Shapes.** Pills (radius 9999) for every button; 12px radius for the hero notice card and the
  stat card; **square** corners on the pricing cards and the testimonial slide; the footer is a
  grid of hairline-bordered cells.
- **Depth.** Flat: hairlines, no shadows (the only shadows on the page belong to the cookie
  banner, which isn't recreated).

## Type

| Original | Classification | Width / x-height | Open stand-in | Why |
|---|---|---|---|---|
| Financier Display (Klim), 300 + italics | transitional/Scotch display serif, high contrast, sharp hairlines, calligraphic italic | normal width, moderate x-height | **Newsreader Variable** with its optical-size axis (opsz, set automatically from the size) at 300 | at large opsz Newsreader turns into a sharp high-contrast display serif with a lively italic; same normal width and moderate x-height. Fraunces is too soft and quirky; Cormorant's x-height is too small |
| Inter | neo-grotesk sans | normal, tall x-height | **Inter Variable** | the original uses it |
| Ftbase (card titles, prices), F37 Beckett (testimonial quote) | geometric-leaning grotesks | normal | Inter Variable (no third family token) | close enough in this role; prices/titles keep the original's 400 weight, the quote 500 |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | `ezra-header` | content: 70 / 90px | lockup left, burger right | lockup left; 4 links, user-icon "Sign in", terracotta pill right | — | sticky for the whole page |
| 2 | hero | `ezra-hero` | content: 1376 / 1667px | centred serif headline 32px with italic terracotta accent line, 16px sub, pill; full-width white notice card; tall portrait media slot anchored to the section bottom | same, headline 88px on 2 lines, sub 18px max 430px, notice card 576px; media 366×662 to the bottom edge | hand cut-out with drawn rings → portrait placeholder 23rem × aspect 366/662 (17rem on phones) | rings draw in top→down while scrolling (scrubbed, inside the media) |
| 3 | featured in | `ezra-press` | content: 318 / 213px | 12px caps label; names 2 per row | label; 6 names in a row, 2 centred below | press logos → plain-text fictional names | none |
| 4 | our scan | `ezra-scan` | content: 1087 / 591px | eyebrow, 31px heading, body, 2 full-width outline pills stacked; then a 375px image with a midnight "results" card overlapping its top, inset 59px from the left | white band; light panel (container left edge → 672px) with eyebrow, 45px heading, body, 2 outline pills side by side; image bleeds to the window's right edge; midnight card 500×188 pinned to the right edge, ~58% down | MRI machine photo → placeholder filling the right half | none |
| 5 | stat | `ezra-stat` | content: 528 / 430px | bordered cream card, 36px quote (4 lines), asterisk, small serif source | card 1150px wide, 50px quote on 2 lines | — | none (see below) |
| 6 | steps | `ezra-steps` | content: 1430 / 649px | 48px heading on 4 lines with a typed italic phrase + blinking cursor; steps stacked | heading 64px one line; 3 columns: "01" label, 128px icon, 34px title, body | 3 line icons 128×128 → square placeholders | typed phrases loop; cursor blinks 700ms |
| 7 | payment | `ezra-note` | content: 305 / 271px | centred 24px serif + 16px body | centred 39px serif + 16px body | — | none |
| 8–9 | pricing + trailing CTA | `ezra-pricing` | content: 3177+50 / 2217+50px | per group: 18px caps label with hairline, cards stacked; details folded behind "Show scan details ⌄" | MRI group 3 cards, CT group 2 cards centred (932px); white square cards, icon row, 24px title, body, 36px price, footnote, pill, time, "What's included" check list, note, underlined link; one centred pill after all groups | small organ icons (48px) → round placeholders, "+" between | hover on pills |
| 10 | testimonials | `ezra-stories` | content: 1005 / 899px | midnight band; 32px heading 3 lines; image 351×238 over cream quote panel; 2 grey round arrows | heading 34px max 530px; slide = image 794×538 + cream panel 466px; arrows below | member photo → placeholder (aspect 794/538) | slider (slide transform) on arrow click; arrow hover inverts |
| 11 | footer | `ezra-footer` | content: 1717 / 504px | lockup centred; each column a bordered box; copyright | top hairline; one row of 6 bordered cells (lockup + 5 columns, 34px serif heads, 16px links at 32px rhythm); copyright 12px centred | — | link hover |

## Motion inventory

| section | trigger | what changes | timing / easing | build |
|---|---|---|---|---|
| header | pinned | stays at the top for the whole page | — | `sticky top-0` |
| hero media | scrubbed with scroll | terracotta rings around the hand draw in one by one from the top while the hero scrolls up | linear with scroll, over ~1 screen | inside the media (not rebuilt); the placeholder gets a stand-in: a terracotta wash layer whose clip opens top→bottom on a CSS view timeline (`entry 0%` → `cover 50%`), inside `@supports`, off under reduced motion |
| steps heading | loop | italic phrase types in, pauses, deletes, next phrase | ~60ms/char type, ~30ms/char delete, ~1.6s hold | small JS typing loop (`useEffect` + timeouts); static HTML shows the first phrase whole; reduced motion: first phrase, no typing; `hydrate: visible` |
| steps cursor | loop | `|` blinks opacity 1↔0 | 700ms | CSS `@keyframes ezra-steps-blink`, off under reduced motion |
| buttons | hover | terracotta pill → midnight bg; outline pill border #e1e1df → ink; nav arrows grey → ink with cream chevron | Webflow default ~0.2s ease | Tailwind `transition-colors duration-200` + `hover:` |
| testimonials | click | slide row moves one slide | Webflow slider ~500ms ease | React state + `translateX`, `transition-transform duration-500`; `motion-reduce:transition-none` |
| — | reveal (GSAP split lines) | the capture lists a split-line mask reveal on a seat-belt quote that never shows in any crop or frame | — | skipped: no visible section carries it |

## Media slots

- Hero cut-out (hand + rings): portrait placeholder, soft highlight gradient, no frame.
- Our scan photo: fills the right half / a 375px band on phones; flat muted-ink surface.
- Step icons ×3: 128px squares, rounded.
- Pricing organ icons: 48px circles, "+" glyphs between kept as layout.
- Member photo: aspect 794/538 (351/238 on phones), square corners.

## Decisions

- Cookie banner and the chat launcher are third-party overlays: not recreated.
- Press logos are plain names of fictional publications, each set in one of the two theme
  families (serif or sans, a few in caps) to keep the varied-mastheads feel without logos.
- The co-brand lockup in header, hero card and footer is a `ezra-lockup` component (lucide mark
  + two wordmarks with a hairline between).
- Pricing details: on phones they fold behind a `<details>` "Show scan details", as the
  original; at lg they're always shown (rendered as a separate always-open list, the phone
  disclosure hidden).
- The original has a stray cream→white change at the Our-scan band's left edge (the panel
  starts at the container edge, white outside it); kept, since it's what gives the band its
  "card bleeding right" shape.
- `--section-y` is the desktop value (6.25rem); blocks use half of it on phones, as the
  original's fluid spacing does.

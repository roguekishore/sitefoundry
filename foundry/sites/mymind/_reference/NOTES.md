# mymind — recreation notes

Original: https://mymind.com/ (landing page only; precaptured 2026-10-23, no other pages asked for).
The capture found only one "section" (the header), so the map below is split by eye from the
full-page images, the scroll frames and pixel measurements of the 1440/390 full captures.

## Design language

- **Mood:** a quiet, private, slightly literary product page. Mostly white, with warm-grey
  and blush bands, one full-bleed tangerine band, and soft, out-of-focus light (orange → pink →
  lavender) around a huge white disc in the hero, behind "Welcome", behind the testimonials and
  behind the footer card.
- **Palette roles:** white page; near-black serif headlines; slate (#4a5465) reading text and
  a lighter slate-blue (#748297) for nav/UI; tangerine #ff5924 for buttons, eyebrows, the "NO"
  words, the search band and hover colour; blush #fff1f1 for the closing band; warm grey
  #f6f4f2 / beige #f3f0e7 for "It just works" and cards; pastel card tones (mist blue
  #e5eaf2, sage #dde9d3, rose #f4ecef, peach #ffece5, grey-blue #e1e6ea); five outlined tag
  colours (apricot, orchid, sky, coral, sunflower) whose dots also mark the nav links.
- **Type scale (1440 / 390):** hero 134px / 50px, line-height 0.875, tracking −0.044em;
  section headlines 96px / 48px (lh ~0.9, −0.044em); manifesto text 42/50 → 28/44; "NO" list
  52/66 → 28/34(+); closing manifesto 52/60 → 28/40; feature titles Inter 32px → 28px medium;
  body 16–20px Inter in slate; small capitals 15px Nunito, tracking 0.1em.
- **Spacing rhythm:** generous: sections ~120px top/bottom on desktop, ~80px on phones;
  content column 1308px (inside a 36px-inset white card on the feature section), text columns
  ~730px (manifesto) and ~560px (paragraphs).
- **Shapes:** full pills everywhere (buttons, tags, app links, speech bubbles); 16px cards;
  12px app-preview frame; a white card with 20px top corners floating on an orange-to-peach
  gradient; 1px hairline separators between install tiles.
- **Depth:** almost flat; one soft panel shadow (0 4 22 slate/14%), a pill-header shadow, and
  big blurred colour light instead of shadows.

## Type

| Original | Classification | Width / x-height | Ours | Why |
|---|---|---|---|---|
| Louize (205TF), Regular + Italic | oldstyle/Garalde-flavoured book serif, high-ish contrast, calligraphic italic | normal width, moderate x-height | **Newsreader Variable** (opsz + italic) | closest open Garalde-ish text serif with a display optical size and a lively italic; similar x-height and contrast. EB Garamond reads more antique and smaller; Instrument Serif is condensed. |
| Inter | neo-grotesk | normal, large x-height | **Inter Variable** | the original's own face (open) |
| Nunito (Regular/SemiBold) | rounded sans | normal, large x-height | **Nunito Variable** | the original's own face (open); added `@fontsource-variable/nunito` |
| Avenir, Maison Neue, FK Roman (loaded, little visible use) | — | — | not used | not seen in the visible sections |

Nunito isn't a token: the theme sets `--mymind-round`, and blocks write
`font-[family-name:var(--mymind-round,var(--typeface-body))]`, so under other themes they use
the body face.

## Section map

Heights measured on the 1440 (page 18994px) and 390 (16149px) full captures.

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | mymind-header | 87px fixed (10% of window) | white pill (inset 20px, 50px tall) with wordmark and a round menu button | full-width transparent bar at top: wordmark left, dot-marked links centre, "Log in" + orange pill right; after ~100px scroll it shrinks into a 980px white pill with a shadow | — | scrubbed with scroll (bar → pill) |
| 2 | hero | mymind-hero | content (~1510 / ~1050) | 4-line 50px serif headline, tag-pill sentence, one orange CTA; disc glow behind; preview frame 310×220 below | 2-line 134px headline over a 1050px white disc ringed with orange→pink→lavender light; tag-pill sentence; three app pills; 1098×779 preview frame overlapping the disc bottom with play button + "Watch the intro" | app preview video (aspect 1.41, radius 12px) | load: headline rise/fade; play button scale 0.5→1 + caption rise 30px on entering view |
| 3 | manifesto | mymind-manifesto | content (~1200) | label, italic drop-cap word, 28/44 paragraphs, bold last phrase, NO list | same in a 730px column, 42/50 | — | none (static in the original) |
| 4 | welcome | mymind-welcome | content (~800 / ~650) | big orange/peach glow; 2-line italic white serif, second line indented; small orange pill | same, wider glow | brand mark (optional) | none seen (static) |
| 5 | install row | mymind-install-row (component, inside welcome and closing) | content (~230) | hidden on phones (first one); shown in closing as 5 tiles in a row | five tiles split by hairlines: icon, serif name, orange small-capital action | store icons → lucide icons | hover: colour to orange |
| 6 | extension | mymind-extension | content (~1240) | 48px heading, paragraph, small collage, link | 96px two-line heading, 18px paragraph, 844×618 collage with coloured category pills around it, orange play link | collage image | link hover → orange 0.7s expo-out |
| 7 | it just works | mymind-ai | content (~1860 / ~1010) on warm grey | label, heading with outlined "AI" pill, paragraph, small 5-photo collage, link | same, collage ~1000×900 of five scattered photos with a "Save" chip | 5 photos | none seen |
| 8 | search | mymind-search | content (~1400 / ~900) on tangerine | label, black serif heading, white paragraph, white link, search line | same, search line 760px wide with typed chips and a caret | — | loop: chips type in, caret blinks |
| 9 | oasis | mymind-oasis | content (~5000 / ~4800) | white card inset 10px on an orange→peach gradient; label, heading; cards stacked | white card inset 36px with 20px top corners; bento rows 40/60, 57/43, full, 40/60, 57/43; cards 716px tall, 16px radius, pastel tones; then the tabbed panel | one media per card | hover: picture eases up 2% (the capture's "scale 1→1" on .video-button cards reads as a hover scale, not a reveal) |
| 10 | feature tabs | mymind-feature-tabs (inside oasis) | content (800 / ~700) | thin progress lines, title, text, media | four tab labels over hairlines, active one fills orange over ~6s and moves on; title + text left, media right | one media per tab | loop (auto-advance + progress line), hover on tabs |
| 11 | testimonials | mymind-testimonials | content (~1550 / ~1700) | pink glow; bubbles stacked and alternating left/right, heading between | five white speech bubbles scattered around a centred white serif heading, each with two tail dots and an avatar | avatar per quote | bubbles drift up 40–100px scrubbed with scroll |
| 12 | use cases | mymind-use-cases | content (~1100 / ~1000) | label, heading, "← Designers →" switcher, card with play button | label, heading, six tabs (active orange with a dot), 1300×410 tinted card: label, heading with italic second line, collage below | panel collage | tabs switch; panel content rises on entering view |
| 13 | closing | mymind-closing | content (~1900 / ~1500) on blush | mark, arc, 28px serif paragraphs, orange button, install row hidden | mark over a huge thin arc, 52/60 centred serif paragraphs, orange pill, install row, small link | brand mark | text drifts −20→20px scrubbed |
| 14 | footer | mymind-footer | content (~700 / ~1500) | white card on a vertical orange→pink→lavender wash: wordmark + slogan, big links, three columns, "See how it works" box, legal | card inset 70px: wordmark + italic slogan left, grey "how it works" box right; big links left, three link columns right; legal row | — | link hover |

## Motion inventory

| section | trigger | what changes | timing / easing | how we build it |
|---|---|---|---|---|
| header | scrubbed with page scroll | full-width bar → 980px pill: max-width, padding, white 85% fill, shadow | over the first ~120px | CSS `animation-timeline: scroll()` range 0–120px inside `@supports` |
| header (phone) | click | menu opens | 0.3s ease-out | React state, `hydrate: load` |
| hero | load | headline, sentence, pills rise 24px + fade in, staggered | ~0.9s expo-out | CSS keyframes, fill both |
| hero | entering view | play button scale 0.5→1 + fade; "Watch the intro" rises 30px + fades | ~ over 400px of scroll | CSS view timeline, `entry` px ranges |
| links (all) | hover | colour → tangerine | 0.7s cubic-bezier(0.19,1,0.22,1) | Tailwind transition classes |
| app pills / install tiles | hover | colour → tangerine | 0.7s expo-out | Tailwind |
| search | loop | chips pop in one by one (scale 0→1, 200ms "pop-out"), caret blinks | 7s loop | CSS keyframes |
| oasis cards | hover | picture scale 1→1.02 | 0.7s cubic-bezier(0.19,1,0.22,1) | Tailwind transition (inferred: the capture logged an unchanged scale on these cards) |
| feature tabs | loop / click | active tab's line fills left→right, then the next tab; panel crossfades | 6s per tab | React state + CSS keyframe on the line, `hydrate: visible` |
| testimonials | scrubbed | each bubble translateY 0 → −40/−85/−100/−42/−68px | across its time in view | CSS view timeline `cover` range |
| use cases | click / entering view | panel swaps; label + heading rise | 0.5s | React state; CSS view timeline |
| closing | scrubbed | paragraphs translateY −20 → 20px | across view | CSS view timeline `cover` |
| pills/buttons | hover | orange button darkens slightly; tabs fade colour | 0.2s linear | Tailwind |

Not rebuilt: motion inside the videos (the intro, the search demo, the phone screen).

## Media slots → placeholders

All via the shared `mymind-media` component: an empty slot is a token-tinted surface at the
original's size/aspect/radius (`bg-muted-foreground/15`, darker on dark cards).

- hero app preview (1098×779, 1.41, radius 12px, hairline) — with play button + caption over it
- extension collage (844×618, ~1.37) — category pills are built (they're UI)
- five "It just works" photos (scattered, ~0.66–1.5 aspects)
- feature cards: one media area per card (notes list, magazine stack, article, collection,
  phone photo (full card), portrait, linked text, serendipity, search) → placeholders
- feature tabs: one media per tab (~450×540)
- testimonial avatars (30px circles)
- use-case collage (1300×~410 band at the bottom of the tinted card)
- brand marks (welcome, closing) → optional slot; demo uses a lucide icon

## Decisions

- Fictional product: **nook** — "the quiet room for everything you keep". Copy is ours.
- The capture's only section is the header, so heights come from the full images (above).
- The first install row sits inside `mymind-welcome` (hidden on phones, as in the original);
  the second inside `mymind-closing`. Both use the `mymind-install-row` component.
- `mymind-feature-tabs` is its own block, placed inside the oasis card through the oasis
  block's `after` slot, so each works alone.
- Pastel card tones are opacity mixes of tokens (beige = secondary, blue = muted, peach =
  primary/10, sage = highlight/20, rose = chart-2/15, grey = muted-foreground/15), so they
  re-theme.
- No Lenis/smooth scroll: the capture shows GSAP ScrollTrigger only.

## Comparison round 1 (ours vs original, 1440 and 390)

Page height: ours 18461 / 15604 vs original 18994 / 16149. Motion list: hero veil/play/caption
reveal at 450–1350 (same as original), testimonial drifts −40/−85/−100/−42/−68 at 13050–14850
(original 13050–15300), use-case panel rise, header fixed + bar→pill. Overflow: 360 overflowed
(375px) because of the manifesto's lead word; 768/1024 fit.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | headline sits ~20px high; ring bottom lavender where the original turns orange on phones | headline ~25px high; serif reads heavier than Louize; ring bleed a bit wide | load rise + scroll reveal match | yes (pt, weight 350, bleed 11%); phone ring colour left |
| manifesto | lead word too long → page 375px wide at 360 | "NO" set smaller than the serif (original: same size, heavy); ~100px extra bottom padding | static, as original | yes (shorter lead, NO at serif size, pb) |
| welcome | ok | glow a compact ellipse; original is a wide bowl, pale pink centre, tangerine rim below | — | yes (wider radial with pale centre) |
| install row | hidden on phones, as original | matches | hover colour | — |
| extension | ok | headline heavier | link hover matches | yes (weight 350) |
| it just works | ok | band yellower than the original's neutral warm grey | — | yes (secondary/70) |
| search | ok | search line ~180px high, band ~400px short before the sheet | chip loop | yes (line mt 22rem, pb 26rem) |
| feature cards | ok | photo card renders black (dark-scoped placeholder) | hover | yes (dark placeholder mid-grey) |
| feature tabs | ok | ok | auto-advance seen in the Motion list (panel opacity changes) | — |
| testimonials | ok | avatars sit a bit close to the bubbles | drift matches | left (small) |
| use cases | ok | card tone yellow-green; original cool sage | rise on view | yes (teal = highlight mixed into muted) |
| closing | ok | text starts ~50px close to the arc; arc fades too early | drift | yes |
| footer | ok | colour wash behind the card too pale | — | yes (stronger radial wash) |

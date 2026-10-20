# TypeSomething — design notes

Source: https://typesomething.co/ (pre-captured 2026-10-20; this machine did not open the site).
Landing page only (no other pages were asked for). The recreation is for a fictional product,
**Quietpage**: a website you change by sending it a chat message.

**Capture caveat.** A cookie dialog with a blurred dark backdrop (`rgba(23,19,19,.42)`) covered
the first window of every capture, so the hero (and the header at rest) is only visible blurred.
The hero's layout below the typewriter line (paragraph, buttons) is read from the blurred
shapes, the 390 crop and the numbers; the two buttons are my reading, not certain.
Pixel sampling confirmed the hero ground is the warm paper colour (149,144,143 under the
backdrop = #efeae9), with a pink glow top-left and a lime glow top-right.

## Design language

**Warm paper, white cards, one acid colour.** A soft, friendly SaaS page: everything sits on
a warm off-white paper (#efeae9) or white, cards are white with a 1px hairline at 16% ink and
a 24px radius, and the only loud colour is an acid lime (#c8ff12) used for the CTA pills, the
active nav pill, the number badges and the "Something" half of the wordmark. A baby pink
(#ffc7d8) is the second colour: the user's chat bubbles, the hero glow, the hero icon dots.
Ink is a warm near-black (#171313), never pure black.

**Palette roles**
- page paper `#efeae9` (hero, steps, chat, reasons, CTA ground) → token `muted`
- white `#fff` (features section, all cards, chat window) → `background`, `card`
- ink `#171313` text; body copy ink at 72–75% → `foreground`, `muted-foreground`
- acid lime `#c8ff12` → `primary` (ink text on it), `glow`
- pink `#ffc7d8` → `highlight`
- footer warm grey `#b2aead` → `secondary`
- hairlines ink 14–25% → `border` (16%), `input` (25%)

**Type.** One family, Montserrat, everywhere. The voice is *light weight at big sizes*:
section headings are 400 weight at 44px (30px on phones) with −0.02em tracking and a loose
1.5 line height; the hero is 400 at ~88px (39px on phones), very tight (−0.055em, 1.05 lh).
Bold (700) appears only in the wordmark's first half, card titles of the "why" list and buttons.
- hero h1: 39px / 1.05 → 88px / 1.05, −0.055em, 400
- typewriter line: bold "Type" + light typed text + blinking "_" (32px → 64px)
- section h2: 30.4px / 1.5 → 44px / 1.5, −0.02em, 400; subtitle 17.6 → 18.4px, 75% ink
- card titles 18.4–20.8px 400; body 14.7–15.4px / 1.55, 72–75% ink
- small caps labels: 11.2px 700 uppercase +0.12em (footer headings, "PRIVACY")
- buttons 16px 700; nav 14px 500

**Spacing rhythm.** 1312px content column at 1440 (64px margins), 16px margins on phones.
Sections ~112px top/bottom on desktop, ~64px on phones. Cards 20–32px apart, 32–36px padding.

**Shapes.** 24px card radius; 48px on the dark CTA panel (24px on phones); pills (999px) for
buttons, nav items, the header bar and the announcement badge; 12px icon tiles; 9px number
badges; 50% avatars and social buttons.

**Depth.** Flat cards with hairlines. Two soft drop shadows: the hero feature strip and the
chat window (`0 28px 80px ink/10%`); avatars `0 4px 13px ink/14%` with a 2px white ring.

## Type

| Original | Class | Width | x-height | We use | Why |
|---|---|---|---|---|---|
| Montserrat Variable (100–900) | geometric sans | normal-wide | large | **Montserrat Variable** (`@fontsource-variable/montserrat`) | the original's own face is open (OFL), so no substitution |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | `typesomething-v2-header` | content (89 / 86px) | frosted pill: wordmark + lime round menu button | frosted pill full column: wordmark, centre nav with lime active pill, locale, lime CTA | — | sticky; shrinks narrower when scrolled; wordmark types/erases |
| 2 | hero | `typesomething-v2-hero` | content (950 / 921px) | badge, 2-line h1, typewriter line, paragraph, buttons, 3-row strip card | same, centred; strip card 3 cells with vertical dividers, overlapping the bottom | none | typewriter loop + blinking cursor; hover on badge/buttons |
| 3 | how it works | `typesomething-v2-steps` | content (1124 / 627px) | heading, 3 stacked white cards | heading, 3 cards in a row | — | none |
| 4 | chat demo | `typesomething-v2-chat` | content (906 / 837px) | browser-style white window, full width, bubbles nearly full width | 1312px window, 736px bubbles | 2 avatars (40px circles) | messages fade + rise 12px as they enter view |
| 5 | features | `typesomething-v2-features` | content (1979 / 968px) | white; heading with wordmark; 6 stacked cards | 3×2 grid | — | none |
| 6 | why | `typesomething-v2-reasons` | content (1195 / 639px) | paper; 3 stacked cards with lime number badge | 3 cards in a row | — | none |
| 7 | CTA | `typesomething-v2-cta` | content (536 / 774px) | dark 24px panel, 16px margins | dark 48px panel, pink-ish and lime glows | — | hover on button |
| 8 | footer | `typesomething-v2-footer` | content (761 / 442px) | grey; brand, social, 3 link groups stacked, bottom bar | brand column + 3 link columns; bottom bar | — | hover: underlines, ink fills; badge spark |

The capture marks the header "sized by the window (10%)": that is the header's scrolled state
(it shrinks to ~48px tall once the page moves), not a window-sized section. No section of the
page is window-sized.

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header | pinned | sticks to the top | — | `position: sticky; top: 0` |
| header | scrubbed with scroll (first ~120px) | bar narrows (1312 → ~1084px), top gap and height shrink | original: 0.22s ease toggle | CSS `animation-timeline: scroll()` over 0–140px on max-width / padding |
| header, footer | loop | wordmark: "Something" types out letter by letter, holds, erases; "_" cursor blinks | ~8s cycle; cursor ~1s | CSS `@keyframes` with `steps(n)` on max-width (`typesomething-v2-wordmark.css`) |
| hero | loop | typewriter: phrases type and erase after "Type" | ~70ms/char, 1.6s hold | small React effect (needs `hydrate: load`); static HTML shows the first phrase |
| hero | loop | typewriter "_" cursor blinks | 640ms | CSS `@keyframes` |
| chat | entering view | each message opacity 0→1, translateY 12→0 | 260ms each, staggered | CSS `animation-timeline: view()`, `entry 10% entry 70%` per message |
| buttons | hover | ink fill, white text, lift −2px | 0.16s ease | Tailwind `transition` + `hover:` |
| nav links | hover | ink/7% fill | 0.14s ease | Tailwind |
| header CTA, footer social, back-to-top | hover | ink fill, white icon/text | 0.16s | Tailwind |
| hero badge | hover | border turns ink | 0.18s | Tailwind |
| footer links | hover | lime underline, 0.3rem offset, thick | — | Tailwind `hover:underline decoration-primary` |
| footer "built with" badge | hover | border lime, faint fill, "Something" spark-pops | 0.45s | Tailwind + CSS keyframes |

## Media slots

- chat avatars (user photo, assistant mascot): 40px circles, 2px white ring, soft shadow →
  `avatar` prop per message; empty: a `bg-muted` (user) / `bg-secondary` (assistant) circle.
- header / footer mascot next to the wordmark (their logo) → not drawn; an optional `mark`
  slot, which the demo fills with a lucide icon.

## Decisions

- **Name:** Quietpage (wordmark "Quiet" bold + "page" lime light). Different word pattern
  from TypeSomething; the bold/light split is the design language we keep.
- **Tokens:** paper is `muted`, so sections use `bg-muted`; white is `background`/`card`.
  The footer grey is `secondary`.
- **Dark CTA panel** wears the `dark` class so it is dark in both modes (its look depends on
  being dark; noted in meta).
- **Header shrink** is scrubbed by scroll in CSS instead of a JS toggle: same start and end,
  no JavaScript; browsers without scroll timelines show the resting header.
- **Mobile menu** uses `<details>`: opens without JavaScript.
- **Hero buttons** (primary lime "start" + outline secondary) are an educated reading of the
  blurred capture.
- The original's cookie dialog is not part of the design and is not recreated.

## Comparison rounds

Heights in px, original → ours. The original's hero is only visible blurred (cookie backdrop).

### Round 1

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| page column | — | content 1280 wide vs 1312 (gutter counted inside `--page-width`) | — | yes: `--page-width` 84rem |
| header | 89 → 76: no bottom padding under the pill | 86 → 72 | sticky ✓; scrolled pill narrows to ~1088 like the original's ~1084 ✓; both captures flag the header "sized by the window" (its scrolled state) ✓ | yes: `pb-3`, `lg:pt-3.5` |
| hero | 950 → 990; the two buttons wrap onto two lines | 921 → 946: typewriter line, paragraph and strip each sit a little low | typewriter + 640ms cursor ✓ (cursor shows in Motion list) | yes: tighter `lg:` gaps; compact buttons below 640px so they share a row; typewriter size `min(2.2rem, 8.5vw)` so long phrases fit at 360 |
| steps | 1124 → 1111 ✓; subtitle two lines vs one | 627 → 624 ✓; number→title gap 47 vs 40 | — | yes: shorter subtitle, `mt-4` |
| chat | 906 → 1084: longer copy, 1.6 line height vs 1.55; link wraps instead of truncating | 837 → 793 ✓ | reveal opacity 0→1, rise 12→0 ✓ (5 messages, view timeline) — section crops show it blank because the full-page shot is taken from the top; scroll frames show it revealed | yes: 1.55 lh, truncate link, trimmed copy |
| features | 1979 → 2002 ✓ | 968 → 975 ✓; icon→title gap 28 vs 18 | — | yes: `mt-4` |
| reasons | 1195 → 1045 (shorter copy) | 639 → 605 ✓ | — | no (content length) |
| CTA | 536 → 632: heading three lines, paragraph five | 774 → 812: panel 603 vs 566 | — | yes: title wraps freely (ReactNode), shorter copy, `lg:py-[6.5rem]` |
| footer | 761 → 836 | 442 → 464: bottom bar 22px low | — | yes: `lg:mt-14`, small brand-column gaps |
| overflow | fits at 360 / 768 / 1024 ✓ | | | |

### Round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | 89 → 88 ✓ | 86 → 86 ✓ (both flagged "sized by the window" from the scrolled state) | sticky + scrubbed shrink ✓ | — |
| hero | 950 → 927 ✓; buttons share a row; strip card ends 57px above the paper like the original | 921 → 922 ✓; badge, headline, typewriter, strip in the original's places | typewriter + blink ✓ | — |
| steps | 1124 → 1099 ✓ | 627 → 620 ✓ | — | — |
| chat | 906 → 994 (copy a little longer) | 837 → 783 (long bubble wraps to fewer lines in the wider window) | reveal ✓ | no (content length) |
| features | 1979 → 1954 ✓ | 968 → 936 (copy wraps to fewer lines) | — | no |
| reasons | 1195 → 1045 | 639 → 605 | — | no (content length) |
| CTA | 536 → 557 ✓ | 774 → 788 ✓; panel 104px inset top and bottom like the original | — | — |
| footer | 761 → 828 (link groups 35px apart vs 33) | 442 → 440 ✓ | — | no |
| dark mode | hero glows too loud on ink | | | yes: `dark:` opacities on the two glows |
| re-theme | `typesomething-v2-hero` and `typesomething-v2-reasons` under `sample-ember`: take its serif, terracotta primary and greens; layout holds ✓ | | | |
| overflow | fits at 360 / 768 / 1024 ✓ | | | |

Stopping here: section pairs match in place, size and rhythm; the remaining height differences
come from our copy being a different length, and from the original's hero being visible only
blurred (its paragraph and button row are read from shapes).

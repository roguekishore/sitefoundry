# TypeSomething — design notes

Source: https://typesomething.co/ (captured in advance on 2026-10-20 by `precapture.mjs`; not
opened from this machine). Landing page only (no other pages were asked for).

The recreation is for a fictional product, **Paperkite**: a small-business website you run
by chatting with it instead of logging into a CMS. Wordmark "Paper" (bold) + "kite" (acid)
+ a blinking `_` cursor; a lucide `BotMessageSquare` stands in for their robot mascot.

**Capture caveat.** A fixed cookie-consent dialog sat over every capture with a blur
backdrop, so the header and the first screen (hero) are only visible blurred. Their layout,
colours and proportions are read from the blurred frames plus the numbers in
`original-design.md`; the hero's paragraph and buttons are hidden behind the dialog at 1440
and are inferred (a lead paragraph and two pills, the usual rhythm of the rest of the page).

## Design language

**Palette roles**
- ink `#171313` (warm near-black): all text, the assistant's chat bubbles, the CTA card,
  button hover fill
- white `#ffffff`: hero, feature band, cards
- paper `#efeae9` (warm light grey-pink): the "how it works", chat, "why" and CTA bands;
  icon tiles in the feature cards
- stone `#b2aead`: the footer band
- acid `#c8ff12`: the brand colour — CTA pills, the active nav pill, the second half of the
  wordmark, number tiles, the first window dot, links on dark
- blush `#ffc7d8`: the user's chat bubbles, the small round icons in the hero strip, and
  the hero's top-left glow
- text tints: ink at 75% (body), 55% (small print / numbers); white at 75% / 55% on the CTA
- hairlines: ink at 14–25% (`1px solid rgba(23,19,19,.16)` most often)

**Type.** One family everywhere: **Montserrat** (variable 100–900), a geometric sans of
normal width with a large x-height. Weights: 400 for almost everything, including big
headings (light-feeling, elegant); 700 for the bold half of the wordmark, card titles in
the "why" band, buttons, small uppercase labels.
- hero H1: ~96px at 1440 / 39px at 390, line-height ~1.0, tracking −0.055em
- typewriter line: "Type" 700 + rotating word 400 in a softer ink, ~64px / ~32px
- section H2: 44px/1.5 at 1440, 30.4px at 390, tracking −0.02em, weight 400
- subtitles 16.8–18.4px, card titles 20.8px/1.5 weight 400, card body 14.7–15.4px/1.55
- small caps labels: 11.2px 700 uppercase, tracking 0.12em (1.344px)

**Spacing rhythm.** Content column 1312px at 1440 (64px side margins), 16px gutters on
phones. Bands are content-sized: ~112px top/bottom at 1440, ~64px at 390. Heading → cards
gap ~56–64px. Card grids gap 20–32px.

**Shapes.** Cards 24px radius with a hairline border; icon / number tiles 12px; pills
999px; the CTA card 48px at 1440 (24px at 390); chat bubbles 24px with one 4.8px corner
pointing at the speaker's avatar.

**Depth.** Flat bands; depth only from three soft shadows: the hero strip and chat window
(`0 28px 80px ink/10`), the CTA (`0 28px 96px ink/28`), avatars (`0 4px 12.8px ink/14`).
The hero has two large soft glows (blush top-left, acid right); the CTA card two dim
radial lights (warm grey top-left, acid bottom-right, 288px).

## Type

| Original | Class | Width | x-height | Ours | Why |
|---|---|---|---|---|---|
| Montserrat Variable | geometric sans | normal (wide-ish rounds) | large | `@fontsource-variable/montserrat` | the original's face is itself open (OFL), so it's used as-is |
| Tahoma (only in a "built with" badge) | humanist sans | normal | large | Montserrat | three tiny labels; not worth a second family |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | `typesomething-header` | content (89 / 86 px incl. 14px top inset) | floating white-glass pill: wordmark + round acid menu button | floating pill: wordmark, centred nav with acid active pill, language, acid CTA pill | mascot → lucide icon | sticky; pill rises to the top and narrows on scroll; wordmark types itself on a loop; cursor blinks |
| 2 | hero | `typesomething-hero` | content (950 / 921) | badge, 2-line H1, typewriter line, lead, buttons, 3-item strip stacked in one card | same, centred; strip of 3 columns hanging over the white→paper edge | none | typewriter cycles words; cursor blinks 640ms |
| 3 | how it works | `typesomething-steps` | content (1124 / 627) | heading, 3 cards stacked | heading, 3 cards in a row | none | none seen |
| 4 | chat demo | `typesomething-chat` | content (906 / 837) | window card, bubbles nearly full width | window card 1312 wide, bubbles ~735 wide | 2 avatar slots (user photo, bot) | each message rises 12px and fades in (260ms) when it enters view, staggered |
| 5 | features | `typesomething-features` | content (1979 / 968) | heading with inline wordmark, 6 cards stacked | 3×2 grid of bordered cards | none (icon glyphs are text) | none seen |
| 6 | why | `typesomething-reasons` | content (1195 / 639) | heading, 3 white cards stacked | 3 cards in a row, acid number tile left of title | none | none seen |
| 7 | CTA | `typesomething-cta` | content (536 / 774) | dark card 24px radius, centred text | dark card 48px radius, 566 tall | none | none (hover on the pill) |
| 8 | footer | `typesomething-footer` | content (761 / 442) | wordmark, details, socials, columns stacked, bottom bar | 4 columns: brand block + 3 link columns; bottom bar | none | hover: links underline acid; socials/top button fill ink |

## Motion inventory

| section | trigger | what changes | timing | ours |
|---|---|---|---|---|
| header | pinned | header stays at the top | — | `position: sticky` |
| header | scroll state | pill moves from 14px inset to the top edge and narrows (1312 → ~1080 px at 1440) | 0.22s ease (class toggle) | CSS scroll-driven: `animation-timeline: scroll(root)` over the first 120px |
| header / footer | loop | wordmark's second half types in and erases, letter by letter; `_` cursor blinks | ~90ms/letter, cursor 640ms | `typesomething-typewriter` component (React effect; static HTML shows the full word) |
| hero | loop | rotating word after the bold verb types / erases; cursor blinks | 640ms blink | same component, word list as props |
| chat | entering view | each message: opacity 0→1, translateY 12→0, one after another | 260ms each | CSS view-timeline reveal, `entry 0px → entry 160px` + 40px per message, under `@supports` |
| buttons | hover | fill → ink, text → white, rise 2px | 0.16s ease | Tailwind `transition` + `hover:` |
| nav links | hover | faint ink 7% fill | 0.14s ease | Tailwind |
| footer links | hover | underline in acid, 0.3rem offset | — | Tailwind `hover:underline decoration-primary` |
| footer socials / top | hover | fill ink, icon white | 0.16s | Tailwind |
| hero badge | hover | border → ink | 0.18s | Tailwind |

## Media slots

- chat avatars: user (photo) → round `bg-muted` placeholder with the original's 2px white
  ring and soft shadow; bot (mascot illustration) → same frame with a lucide icon passed in
  by the demo.
- the robot mascot in the wordmark / footer → lucide icon prop.

## Decisions

- Light is the faithful mode. Dark is a sibling: ink page, warm charcoal cards, same acid
  and blush. The CTA card forces `.dark` so it stays an ink card on the light page.
- Token map: background = white, muted = paper, secondary = stone (footer), primary =
  acid, highlight = blush, glow = acid, accent = paper (hover surface).
- `--radius` = 1.5rem (the 24px cards = `rounded-lg`); 12px tiles use `rounded-[calc(var(--radius)/2)]`.
- `--section-y` = 4rem (phones); bands use `lg:py-28` for the 112px desktop padding.
- The header's scroll change is rebuilt with a scroll timeline instead of JS so the block
  stays CSS-only for that part; the typing wordmark is the one bit that needs JavaScript,
  so header, hero and footer carry `"hydrate"`.
- Mobile menu: a native `<details>` panel (works without JavaScript).

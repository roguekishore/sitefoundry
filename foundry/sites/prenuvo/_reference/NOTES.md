# prenuvo — recreation notes

Original: https://www.prenuvo.com/ (precaptured 2026-10-21; landing page only, no other pages asked
for). Every original scroll frame sits under a cookie banner and its 50% black scrim, so the
frames look darker and the text dimmer than the page really is; colours were read from
`original-design.md` and the section crops, which are not scrimmed.

Fictional company: **Oriel**, a whole-body imaging clinic (scan + blood panel memberships). All
copy, names, press titles and institutions are invented.

## Design language

- **Two halves.** The top half is night: pure black, a deep teal (`#033`), photo and video
  backdrops darkened for white text. The bottom half is day: white, a cool grey-blue fog
  (`#cfdadd` fading to white) and teal ink for headings. The footer returns to night (black →
  teal).
- **Arcs.** Almost every section after the first screen starts with a wide convex arc (a slice
  of a huge ellipse, ~25px drop at 390, ~50px at 1440) that overlaps the section before it, so
  the previous section shows in the corners. This is the signature shape.
- **Stacked panels.** Three full-bleed scan panels pin and slide over each other, each with a
  thin vertical timeline line and a glowing coloured dot at the left (green, blue, purple).
- **Colour roles.** Seafoam green `#4fe88c` for highlighted headline words, dots and quote marks;
  CTA pills are a green → teal gradient (`#0bb36c → #07ada7`), a few green → blue (`#00a5eb`);
  purple `#c686f8` as a third accent. Soft light pills: teal at 10% with a 60% teal hairline.
- **Type scale.** Display (Gilroy, semibold 600): 64/64 hero and section heads at 1440 (40–48 at
  390), 36/43 panel titles (32 at 390), 24 card titles. Body (Lato): 20/30 panel copy, 18/30
  section leads, 16/24 at 390, 14/21 card copy; quote in Lato bold italic 28/45. Small caps
  eyebrows 12px bold uppercase. Letter-spacing −1% on display.
- **Spacing.** 48px side margins at 1440 (content 1344 wide), 20px at 390. Sections breathe:
  ~110px top padding on light sections, ~64px at 390.
- **Shapes and depth.** Pills everywhere (80px radius); cards 20px (12px at 390); photos 12px.
  No shadows except the dots' 12px glow. Depth comes from layering (arcs, pinned panels).

## Type

| Original | Kind | Ours | Why |
|---|---|---|---|
| Gilroy (600/700, logo in its thin weight) | geometric sans, normal width, single-storey a, moderate x-height | **Urbanist Variable** | the closest open geometric with Gilroy's round single-storey `a`, flat terminals and similar x-height; its 200 weight carries the thin wordmark |
| Lato (400/700, italics) | humanist sans, normal width | **Lato** (`@fontsource/lato`, 400/700 + italics) | the original's own body face, OFL |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | nav | `prenuvo-header` | 64 / 80 | burger · wordmark · "Book your scan" pill | wordmark · 7 links · Book now pill · region | — | sticky; dark teal fill fades in after ~450px |
| 2 | hero | `prenuvo-hero` | **100svh** (pinned) | centred headline 40px, lead, pill | left column at x=145, headline 64/64, lead 24/36, pill | photo, cover, fills window | sticky; content fades 1→0 and backdrop drifts up 128px while the next section covers it; CSS load-in |
| 3 | MRI intro | `prenuvo-mri` | content (1037 / ~1020) | machine image 630×444 (overflows, centred) on top, three centred features below | machine image 1330×936 filling the window, three features in a row across its foot (inferred: hidden in every frame) | machine image | whole block fades 0.08→1 as it rises over the hero; features rise 80px + fade, staggered |
| 4 | scan panels | `prenuvo-panels` | **~429% of window** for three panels | each panel ~120svh: timeline + dot, title 32, copy, list, two pills | same, title 36/43, copy 20/30, column 470 wide; figure slot on the right | backdrop per panel 1440×1080 cover; figure 590×870 contain | arced panels pin and slide over each other (sticky); content rises 80px + fades on entering |
| 5 | testimonial | `prenuvo-testimonial` | content 622 / ~window 932 | headline 44, quote 20 italic, pill | headline 64 left, quote 28/45 bold italic | portrait photo backdrop, cover | arc over panels; text rises 96px + fades |
| 6 | clinical team | `prenuvo-team` | content 1005 / 1511 | headline 32, lead, note, soft pill; photo row 64×80; logos 3 per row | headline 48 (650 wide), beams top right; photo row 204×262 staggered 40px; logos 6 per row | 7 portraits radius 12; beam is CSS decoration | arc over testimonial; text rises 96px; photos fade in scrubbed, staggered; logos rise 64px |
| 7 | press strip | `prenuvo-press` | 116 / 148 | one row, marquee | one row, marquee, edge fades | — (names as text) | 50s CSS marquee loop |
| 8 | process | `prenuvo-process` | content 639 / 561 | headline 32, lead, full-width soft pill, video below | text left (590), video slot right 590×332 | looping UI video, 16:9 | text and video rise 80px + fade |
| 9 | memberships | `prenuvo-memberships` | content 1525 / 986 | headline 40 centred, lead, three stacked dark cards, pill | headline 64 centred, three dark cards in a row, pill | — (corner beams are CSS) | arc; cards rise 80px + fade, staggered |
| 10 | footer | `prenuvo-footer` | content 1818 / 693 | wordmark, stacked link groups, contact, socials, newsletter card, legal | wordmark + 4 columns + newsletter card (320) | newsletter photo | arc; link hover |

Shared components: `prenuvo-button` (gradient / blue gradient / outline / soft pills),
`prenuvo-arc` (the arced, overlapping section wrapper), `prenuvo-wordmark`.

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header | scrubbed (scroll position) | dark teal fill opacity 0→1 | by ~450px | CSS `animation-timeline: scroll(root)`, range 0–400px |
| header / buttons | hover | pill turns seafoam-tinted with a white rim; links dim | 0.2s ease | Tailwind `transition duration-200 ease-[ease]` + `hover:` |
| hero | load | headline, lead, pill settle in | — (not captured; Webflow) | CSS keyframes, fill both, staggered |
| hero | pinned | stays put while the MRI block slides over | whole first screen | `position: sticky; top: 0` on a 100svh hero |
| hero | scrubbed | content opacity 1→0; backdrop translateY 0→−128px | first ~half screen | CSS `scroll(root)` timeline, range 0–70svh |
| MRI | scrubbed on entering | whole block opacity 0.08→1 | as it covers the hero | CSS `view()`, `entry 0% entry 60%` |
| MRI features | entering view | opacity 0→1, rise 80px, staggered | ~half screen each | CSS `view()`, fixed px ranges + 40px stagger |
| panels | pinned | each panel sticks; the next arcs over it | ~1.4 windows per panel | sticky panels in one parent, `top: -12svh`, 40svh spacers |
| panel content | entering view | opacity 0→1, rise 80px | ~half screen | CSS `view()` |
| testimonial | entering view | rise 96px + fade | ~half screen | CSS `view()` |
| team text | entering view | rise 96px + fade | ~half screen | CSS `view()` |
| team photos | scrubbed | opacity 0→1, staggered left to right | over a screen | CSS `view()` with per-item range offsets |
| team logos | entering view | rise 64px + fade | ~half screen | CSS `view()` |
| press | loop | track translateX −50% | 50s linear infinite | CSS `@keyframes` |
| process | entering view | text and video rise 80px + fade, staggered | ~half screen | CSS `view()` |
| memberships | entering view | three cards rise 80px + fade, staggered | ~half screen | CSS `view()` |
| (site) | smooth scroll | Lenis | — | `prenuvo-smooth-scroll` component, `hydrate: load`, used by page.tsx |

Not rebuilt: the press strip's "scrubbed translateX" in the capture is the marquee loop itself
(sampled while scrolling); motion inside the videos.

## Media slots → placeholders

- hero backdrop (cover, fills the window) → `bg-muted` surface with a soft glow, under the same
  dark scrim the photo had.
- MRI machine image (1330×936 / 630×444, contain) → a muted rounded-top surface of that shape.
- each scan panel's backdrop (1440×1080 cover) → a token gradient (teal / sky / crimson tones).
- panel figure (590×870 contain, desktop only) → a faint `bg-foreground/5` box at that aspect.
- testimonial portrait backdrop → muted surface behind the left scrim.
- seven team portraits (204×262 / 64×80, radius 12) → `bg-muted` tiles.
- process video (590×332, 16:9) → `bg-muted` frame.
- newsletter photo (fills the card's lower half, radius 12) → glow-tinted surface.

## Decisions

- Light is the faithful theme mode (the day half and the gallery's page colour); the night blocks
  (hero, MRI, panels, testimonial, membership cards, footer) carry the `dark` class themselves.
- The arc is `clip-path: ellipse(300% R at 50% R)`: with the horizontal radius fixed at 3× the
  width, the edge drop is a constant 1.4% of R, so R = 1800px gives 25px and 3600px gives 50px
  at any width.
- The original's 1440 MRI-intro features never appear in a frame (they reveal late and the crops
  are taken at scroll 0); their desktop layout (a row of three across the image's foot) is
  inferred from the 390 layout and the media size.
- Lenis is in the capture, so the page uses a small smooth-scroll component.
- Region selector and the burger menu are `<details>` disclosures: no JavaScript needed.
- Social icons: lucide 1.x has no brand icons, so the demo passes generic lucide glyphs.

## Comparison round 1

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | matches (burger, wordmark, pill) | matches; links a touch lighter-looking than Gilroy 600 | fill fades in by ~420px ✓ | — |
| hero | matches, 100svh ✓ | lead ran to 3 lines (original 2) | pinned ✓, copy fades, backdrop drifts −128px ✓ | lead shortened and widened |
| MRI intro | machine placeholder invisible (muted ≈ black in dark) | same | fade 0.08→1 ✓, features rise 80px staggered ✓ | placeholder lightened (accent → black), plain rounded box |
| scan panels | matches (arc, timeline, dot, pills) | matches; stack 420% of window (original 429%) ✓ | pinned ✓, rise 80px ✓ | — |
| testimonial | matches | headline broke "150,000" onto its own line | rise 96px ✓ | demo headline reworded |
| clinical team | matches | partner names too large for their cells; portrait placeholders too faint on white | rise 96 ✓, portraits fade in staggered ✓, partners rise 64 ✓ | names smaller, portraits on `bg-accent` |
| press | matches | matches | 50s loop ✓ | — |
| process | matches | matches | rise 80px ✓ ×2 | — |
| memberships | matches | matches | cards rise 80px staggered ✓ | — |
| footer | matches | social icons fell onto the legal row; **page overflowed at 1024** (fixed columns + card) | — | socials placed under the columns; newsletter card moves beside the columns only from 1280 (xl) |

## Comparison round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | matches | links read lighter than the original's semibold | ✓ | links bold at 75% white |
| hero | matches | lead now two lines like the original ✓ | ✓ | — |
| MRI intro | machine placeholder now visible at the top ✓ | features sit across the machine's foot (inferred layout) | ✓ | — |
| footer | matches | socials under the contact lines, legal row clear ✓ | — | — |
| all | fits at 360 / 768 / 1024 ✓ | | every inventory row shows in ours' Motion list (sticky hero + panels, scroll-linked header fill, hero fade and −128px drift, 0.08→1 MRI fade, 64/80/96px rises, staggered portraits, 50s loop) | — |

Re-theme check: `prenuvo-memberships` and `prenuvo-panels` under `sample-ember` keep their
structure and pick up ember's colours and fonts (cards, beams, dots and pills all follow tokens).

Left as is: the original's media (MRI machine render, body scan figure, surf and blood-cell
videos, portraits, UI video, newsletter photo) are placeholders of the same size; the original's
per-panel stat overlays (small images over the photos) are media and are not rebuilt; Urbanist is
a little wider than Gilroy, so lines break slightly differently.

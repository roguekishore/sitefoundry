# ramp: recreation notes

Original: https://ramp.com/ (captured in advance; the landing page only, no other pages asked
for). Every capture frame has Ramp's newsletter pop-up over the middle of the screen; it is
a modal, not a section, and is not rebuilt.

Fictional company: **Kestrel** (a finance-automation platform: cards, bills, agents that do the
busywork). Customers are made-up names (Northwind Supply, Halden & Co, Pellucid…).

## Design language

- **Palette.** White page, a warm light grey (#f4f2f0) for every panel and quiet button, warm
  near-black ink (#0c0a08) and the same ink at 60% for "hushed" text. One loud colour: Ramp's
  acid lime-yellow (#e4f222) on the main CTAs only. Near-black (#1a1919) for the "Get started"
  button, the announcement bar and the footer. Hairlines are a cool light grey (#e4e7ea) on
  cards and a warmer #d2cecb on form fields.
- **Type.** One neo-grotesk at a single weight (400) everywhere; hierarchy comes from size and
  from the two-tone trick: a headline's first clause in ink, the rest in hushed grey. Mono
  (IBM Plex Mono) only for the live counters. Small uppercase sans for eyebrows/ticker labels.
  Scale at 1440: 64 (hero) · 48/50 (section heads) · 28/32 (row heads) · 24/28 (card heads) ·
  16/24 · 14/20 · 13 (ticker). At 390: 40 · 34/38 · 22/26 · 20/24 · 16 · 14 · 12.
- **Spacing.** 64px side margins at 1440 (1312 content), 16px on phones. Sections ~128px apart
  on desktop, ~72–80px on phones. Bento gaps 24px.
- **Layout.** Left-aligned hero and feature heads; centred heads for the "big statement"
  sections (pinned systems, intelligence, scale, receipts). Bento of 2 then 3 cards; 2-up duo;
  alternating 50/50 feature rows with a square media and a quote at the foot of the text column.
- **Shapes.** 12px radius on every panel and media; 16px on the testimonial cards; 6–8px on
  buttons and the small square arrow chips. The final CTA band has ~32px rounded bottom
  corners and sits on top of the dark footer.
- **Depth.** Flat: hairline borders, no shadows except a faint glass ring on "Watch video"
  pills. A light dot grid behind the hero.

## Type

| Original | Class | Width | x-height | Ours | Why |
|---|---|---|---|---|---|
| Lausanne (Weltkern, closed) 300–700, used at 400 | neo-grotesk sans | normal | large | **Instrument Sans Variable** (`@fontsource-variable/instrument-sans`) | open neo-grotesk, normal width, tall x-height, round bowls and straight-cut terminals close to Lausanne's; reads the same at 400 |
| IBM Plex Mono 400/500 | mono | normal | — | **IBM Plex Mono** (`@fontsource/ibm-plex-mono`) | the original's own face, open licence |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | announcement + nav | ramp-header | content (132 / 102) | dark 2-line bar + wordmark + square menu button | dark 40px bar, nav 62px: wordmark, 5 links w/ chevrons, Sign in, lime + dark buttons | — | sticky (fixed) top |
| 2 | hero | ramp-hero | content (782 / 1013) | eyebrow counter, 40px h1, sub, stacked email form, square media | eyebrow + live counter chip, 64px h1, sub, inline email form (500px), 1312×584 media, dot grid behind | media 356×356 / 1310×584 r12 | counter ticks; load fade |
| 2b | agent ticker | ramp-ticker | 40px bar | centred label over a scrolling counter row | label left, counters scroll | — | sticky to window bottom until its place; marquee loop; numbers tick |
| 3 | customer logos | ramp-logos | content (1087 / 635) | 2-tone 22px head, link, 3-col tile grid, photo stat card below | 28px head, link, 6×2 tiles + tall photo card at right | photo card 327×327 / 356×267 | tiles fade in staggered on entering view; hover arrow chip |
| 4 | platform bento | ramp-platform | content (2674 / 1256) | 34px head, 2 buttons, cards stacked | 48px head, 2 buttons, 2 cards (642×481) + 3 cards (419×524) | one per card | hover: media scale 1.02, arrow chip |
| 5 | recommendations | ramp-recommend | content (593 / 700) | full-width rounded panel, centred head, textarea card, disclaimer | 1440×700 panel r12, 40px head, 766×164 textarea | backdrop image → glow gradient | looping border trace (3.4s); typed prompt |
| 6 | systems → together | ramp-pinned | **300% of window at 1440** (sticky); 1600 at 390 | centred head + collage | sticky stage: head + wide collage, swaps to the ordered state halfway | before / after media | pinned; crossfade of heads and media with scroll |
| 7 | intelligence + stories | ramp-stories | content (2635 / 2834) | centred head + lime button; rows stacked: head, link, square media, quote | 3 alternating 50/50 rows: text column with quote at its foot, 753² media | square media per row | hover lift on video pill |
| 8 | demo strip | ramp-banner | content (192 / 179) | grey card, title, text, dark button stacked | 1312×179 grey card, text left, dark button right, lime light streaks at right | streaks → glow gradient | — |
| 9 | scale duo | ramp-duo | content (1087 / 871) | centred head, cards stacked w/ copy | 2 cards 644×515 + copy below | one per card | — |
| 10 | testimonials wall | ramp-testimonials | content (810 / 856) | eyebrow, head, button, 3 rows of cards running sideways | same, cards 320×192, faded edges | logo chip per card → initials | three rows scroll left at different speeds (loop) |
| 11 | final CTA | ramp-cta | content (301 / 370) | centred 20px head, stacked form | 24px head, inline form, round bottom corners over the dark footer | — | — |
| 12 | footer | ramp-footer | content (2127 / 1493) | company links, accordion groups, form, badges, legal | 6 link columns, rule, legal + address + socials, form | — | hover colour |

## Motion inventory

| section | trigger | what changes | timing | build |
|---|---|---|---|---|
| header | scroll | stays at top (fixed) | — | `position: sticky; top: 0` |
| hero | load | headline, form, media fade-rise 16px | 400ms ease-out, staggered | CSS `@keyframes`, fill both |
| hero eyebrow | loop | the % counter ticks up its last digits | every ~1.2s | `ramp-live-number` (React state, hydrate load) |
| ticker | scroll | sticks to the window bottom while the hero is taller than the window, then settles under it | — | `position: sticky; bottom: 0` |
| ticker | loop | counter row slides left forever | ~40s linear | CSS `@keyframes` marquee (duplicated list) |
| ticker | loop | counters tick up, changed digits roll in | ~2s | `ramp-live-number` |
| logos | entering view | tiles fade 0→1, staggered left-to-right/top-to-bottom | ~400ms each | `animation-timeline: view()`, per-tile range offset |
| logos / bento / stories | hover | tile arrow chip appears/darkens; media scales 1.02; arrow rotates | 0.3–0.4s ease | Tailwind `transition` + `group-hover:` |
| recommend | loop | a light traces around the textarea border | 3.4s linear infinite | CSS `@property` angle + conic-gradient border |
| recommend | loop | example prompt types itself, pauses, next | ~45ms/char | React state (hydrate visible); static HTML shows the first prompt |
| pinned | pinned | stage sticks under the nav for 300vh; head 1 + media 1 fade out, head 2 + media 2 fade in mid-way | scrubbed | sticky + `view-timeline` on the tall wrapper |
| testimonials | loop/scroll | three rows drift left at different speeds, edges faded | 60–90s linear | CSS marquee (duplicated row) + mask gradient |
| newsletter pop-up | load | modal fades in | 300ms | **skipped**: a modal over the page, not a section |

## Media slots

| slot | original | placeholder |
|---|---|---|
| hero product shot | 1310×584 (desktop) / 356×356 (phone), r12, border | muted surface + faint border, same frame |
| logos stat photo | 327×327, r12, text overlaid | muted→foreground soft gradient with the stat text on top |
| bento card art (5) | 642×481, 419×524; fills card under its title | soft highlight/glow gradient pane inside the card's lower area |
| recommend backdrop | full panel misty photo | `--muted` → `--foreground/40` radial gradients |
| pinned collage before/after | ~1100×630 | two muted frames, crossfading |
| story media (3) | 753×753 r12 | muted square with the glass "watch" pill |
| banner streaks | right third of the strip | glow gradient stripes (repeating-linear-gradient from `--glow`) |
| duo cards (2) | 644×515 r12 | muted card with dot texture |

## Decisions

- Faithful mode is **light**; the dark sibling uses the footer's near-black as the page.
- `--page-width` 90rem with a 1rem gutter; blocks widen the side padding to 4× gutter at `lg`
  so content is 1312px at 1440 like the original (64px margins).
- `--section-y` 4.5rem; big desktop gaps use `lg:py-[calc(var(--section-y)*1.75)]`.
- Mobile header menu is a native `<details>`; the announcement close button needs state, so the
  header hydrates on load.
- The pinned section is pinned at all widths (200svh on phones, 300svh from lg), since the
  phone capture shows the same before→after content in a 1600px-tall section.

## Verification

The shared gallery at :4400 live-reloads whenever another session edits a file, which broke
every run of `capture.mjs` (the page lost its probe mid-scroll). Captures of ours were made with
a temporary copy of the script outside the repo (`/tmp/rampcap/`) whose only change is
`context.routeWebSocket(/.*/, () => {})`, muting Vite's reload socket. Output is identical in
form.

### Round 1

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| all | gaps between sections ~144px vs ~80px | ~216px vs ~128px | — | yes: `--section-y` 4.5rem → 2.5rem (lg uses ×1.5) |
| hero | email field collapsed to ~20px (flex-1 in a column) | matches; dots showed through the form | load rise ✓, counter ✓ | yes: field `flex-none` on phones, opaque bar |
| ticker | ✓ | ✓ sticks to window bottom, settles under hero | marquee ✓ | — |
| logos | NORTHWIND wider than its tile | ✓ | staggered fade ✓ | yes: smaller wordmarks on phones |
| platform | ✓ | heading wrapped to 3 lines (orig. 2) | hover ✓ | yes: wider heading measure, shorter demo line |
| recommend | ✓ | ✓ 707 vs 700 | border trace ✓, typing ✓ | — |
| pinned | ✓ (200% window) | ✓ sized by window 300% (same as orig.), pinned | crossfade ✓ | — |
| stories | ✓ | ✓ alternating rows, quote at foot | — | — |
| banner / duo / cta | ✓ | ✓ (taller only from the gap above) | — | via rhythm fix |
| testimonials | ✓ | rows ran past the 1312 column to the window edge | three loops ✓ | yes: `min-w-0` on rows |
| footer | ✓ (shorter: less legal copy) | first column's links spread out (grid rows stretched) | — | yes: `content-start` |
| overflow | 360/768/1024 fit | | | — |

### Round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| all | section gaps now ~80px like the original | ~120–128px like the original | — | — |
| hero | email field full height, centred placeholder, stacked lime button ✓ | ✓ | ✓ | — |
| logos | wordmarks fit their tiles ✓ | ✓ | ✓ | — |
| platform | ✓ | heading on two lines ✓; cards 642×482 / 419×525 vs 642×481 / 419×524 | ✓ | — |
| testimonials | ✓ | rows stay inside the 1312 column with faded edges ✓ | ✓ | — |
| footer | ✓ (accordions, stacked form) | first column evenly spaced ✓ | — | — |
| pinned | 200% window | 300% window, pinned 3 half-screens (orig. 4) | crossfade ✓ | left: same height, a sampling difference |
| overflow | 360/768/1024 fit | | | — |

Still different, on purpose: media slots are placeholders (hero shot, stat photo, bento art,
recommend backdrop, pinned collages, story films, duo art); the dashed curves on the recommend
backdrop and the hero's animated dot canvas are art and are not drawn; the newsletter pop-up is
not rebuilt; the footer has less legal copy (shorter); content is Kestrel's, not Ramp's.

Re-theme: ramp-platform and ramp-footer look right under `sample-ember` (light): Fraunces
headings, terracotta primary, the footer's forced-dark band takes ember's dark tokens.

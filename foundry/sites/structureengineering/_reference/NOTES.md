# structureengineering — notes

Recreating the landing page of structureengineering.com.au (a Sydney structural engineering
practice) as **Lintel Consulting Engineers**, a fictional Brisbane practice. Captured in advance
(`precapture.json`, no extra pages asked for). Light is the faithful mode.

## Design language

- **Palette:** near-white paper `#F5F5F5` for most sections, pure white for one section (the
  "do it once" spread) and for the nav pills and project cards, black ink for text, buttons and
  the hovered/active state of everything (hover = full black/white inversion), and one muted
  olive-gold `#B9B36D` used as a whole band (the contact section) and as the text of the black
  submit button. Grey `#BEBEBE` hairlines between list rows and for the vertical divider.
  Photos are darkened (~35% black veil) under white type.
- **Type:** two families and almost nothing else. A neo-grotesk sans (Sequel Sans) at 400 for
  every heading, tight and large: 81.6px/1 at 1440 (59.2px at 390) for the hero and spread
  headings, 44.8px/1.2 (33.6px) for the scroll-lit statement, 20px/1.25 for leads, and 16–20px
  700 uppercase for small headings ("CREATIVITY", "FEATURE PROJECT", project names). A
  monospace (PP Fraktion Mono) at 400 for nav, labels, buttons (uppercase, 16px) and for the
  long body copy (16px/1.3, sentence case) — the mono body is the site's signature.
- **Spacing rhythm:** content sits in a 1252px column (94px inset at 1440), the header and
  footer use a 24px edge; phones use a tiny 8px gutter. Sections pad ~64–72px top and bottom;
  inside a section, big empty gaps (200px+) between a heading and its body.
- **Grid:** 2 columns at desktop, usually a heading column and a text column starting at the
  page's middle or two-thirds; phones stack.
- **Shapes:** almost square: 3.2px on nav pills, 4.8px on tags and cards. Buttons are boxes
  with a 1px border and a separate square arrow cell.
- **Depth:** flat. No shadows. Depth only from darkened full-bleed photos.

## Type

| Original | Kind | Width / x-height | Ours | Why |
|---|---|---|---|---|
| Sequel Sans (400, 700) | neo-grotesk sans | normal width, large x-height, tight default spacing | **Hanken Grotesk Variable** (installed) with `tracking-tight` on big sizes | closest open neo-grotesk on width and x-height; single-storey g like the original; needs a little negative tracking to match Sequel's tight set |
| PP Fraktion Mono (400) | grotesque monospace | normal width, light, low contrast, plain f and r | **Source Code Pro Variable 400** (installed) | light, neutral grotesque mono with plain letterforms; first tried DM Mono, but its curly f and r read as a different voice; IBM Plex Mono is heavier and more technical |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | fixed header | `structureengineering-header` | — (fixed overlay) | black 46px marquee bar with "contact us →" at right; under it logo + two white boxes (Menu ≡, Projects) | logo at 28px, row of 7 white mono pills (radius 3.2px, 2px apart) | — | marquee loop 20s; pills invert on hover 0.25s; logo inverts against what's under it |
| 1 | hero | `structureengineering-hero` | content, ≥ window (958 in 900; 936 in 844) | heading 59px over the lower half, "see our work" tags, "latest work" cards in a sideways row (second peeks) | heading 81.6px at left, bottom row: tags column (375px) + 3 white cards | full-bleed slideshow (6 slides, cover); 146×128 card thumbs | load: media scale-in, heading + bottom row rise 80px & fade; slides slide sideways every few seconds; cards invert on hover |
| 2 | intro | `structureengineering-intro` | content (3011 at 1440: ~2 screens pinned statement + content) | statement 33.6px, tabs, mono body, button, image 374×235 | statement 44.8px across the column; tabs in two 500px columns; mono body 365px left; image 618×388 right, lower | one image | statement pinned while its words light from 20% to full opacity, word by word, scrubbed; body fades up 48px |
| 3 | statement | `structureengineering-statement` | desktop **90% of the window**; phone content | heading 59px then mono text, over darkened photo | heading 81.6px left (5 lines), mono text right top | full-bleed backdrop | heading and text rise 48px & fade on entering view |
| 4 | principle | `structureengineering-principle` | content (1067) | heading, lead, mono body, drawing 374×248 | right column: heading 2 lines, big gap, lead 20px, mono body; left: drawing 478×317 bottom-aligned | one image (isometric drawing) | heading, lead, body rise 48px & fade |
| 5 | our work | `structureengineering-work` | content (1028 / 756) | heading, lead, tags, View all, then a sideways track of projects (title over 374×187 image) | left: heading top, lead + tags + View all bottom; 1px grey divider; right: list of rows (title left, 323×306 image right) clipped to ~900px | one image per project | list scrubbed with scroll: up 900px at desktop, sideways at phones; hovered row turns black with a "View project" button over the image |
| 6 | feature | `structureengineering-feature` | **window-sized**: 81% at desktop, 150% at phones | content at the bottom: label, mono name, button | one centred row: label left, mono name centre, Read more right | full-bleed backdrop | button hover |
| 7 | contact | `structureengineering-contact` | content (1332 / 1747) | heading 33.6px, "Let's collaborate →" black blocks, lead, single-column form | right: lead top; then left heading + black blocks, right two-column underlined form | — | blocks fade up 8px staggered; intro and form rise 48px |
| 8 | footer | `structureengineering-footer` | content (717 / 1037) | link groups stacked, giant wordmark, copyright, acknowledgement, credit | copyright + acknowledgement row, 4 link columns, giant wordmark ~975px wide with credit at right | — | columns rise 48px staggered |

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header (phone) | loop | marquee text translateX | 20s linear infinite | CSS `@keyframes` in `structureengineering-header.css` |
| header | hover | pill: white→black bg, black→white text | 0.25s ease | Tailwind `transition-colors duration-250 hover:` |
| header | scroll (position) | logo colour inverts over dark/light sections | instant | `mix-blend-mode: difference` on a white logo (CSS file) |
| hero | load | media scale 0.92→1 (phone) / from small (desktop preloader zoom) | ~1s | CSS keyframes, fill both; we use 0.92→1 at all sizes (the desktop 0.25 zoom belongs to a preloader we don't rebuild) |
| hero | load | heading wrap + bottom row: opacity 0→1, translateY 80→0 | ~0.9s, staggered | CSS keyframes, fill both, delays |
| hero | loop/timer | slideshow: slides slide −100% each | every ~5s, 0.7s slide | small `useEffect` timer + CSS transition (hydrate load) |
| hero | hover | card: white→black, text white | 0.25s | Tailwind transitions |
| intro | pinned + scrubbed | statement sticky; each word 0.2→1 opacity in reading order | over ~1 screen of scroll | `position: sticky` in a 200svh wrapper with a named `view-timeline`; each word's `animation-range` offset by its index |
| intro | entering view | body + image: opacity 0→1, rise 48px | ~450px of scroll | `structureengineering-reveal` (CSS view timeline) |
| intro | click | tabs switch the body | instant | React state (hydrate visible) |
| statement, principle | entering view | heading/lead/body: opacity 0→1, rise 48px | ~450px | reveal component, steps |
| work | scrubbed | list translateY 0→−900px (desktop) / translateX 0→−800px (phone) | over the section's pass | named `view-timeline` on the section; track animation from 0 to `-100% + clip` |
| work | hover | row black, title white, "View project" box appears | 0.25s | Tailwind `group-hover` |
| feature | hover | Read more: transparent → white fill, ink text | 0.2s | shared button component |
| contact | entering view | "Let's" / "collaborate" / arrow blocks: opacity 0→1, rise 8px, staggered | short | reveal component with rise 8, steps |
| contact | entering view | intro and form rise 48px | ~450px | reveal component |
| footer | entering view | link columns rise 48px, staggered | ~400px | reveal component, steps |
| buttons | hover | box inverts; arrow shakes side to side twice | 0.2–0.25s; shake 0.5s ease-in-out ×2 | Tailwind + CSS keyframes in the button's `.css` |

## Media slots and placeholders

All are flat token surfaces with the original's size and crop; none draw anything.
- hero slides: full-bleed, `bg-glow` (dark stone) with a 35% foreground veil like the original.
- hero card thumbs 146×128: `bg-muted`.
- intro image 618×388 (phone 374×235): `bg-muted`.
- statement and feature backdrops: full-bleed `bg-glow` with the veil.
- principle drawing 478×317 (phone 374×248): `bg-muted`.
- work images 323×306 (phone 374×187): `bg-muted`.

## Decisions

- The fixed header's pills change background on the white section in the original (they go
  transparent); ours stay white everywhere. Minor, and it would need section-aware JS.
- Desktop nav dropdowns (Sectors → Residential…) are not rebuilt; Sectors is a plain link.
- The original's preloader (a full-screen veil that fades) is not rebuilt; the hero's own
  scale-in carries the load.
- The phone "Menu" opens a full-screen ink panel of large links (React state).
- The logo goes white over the three photo sections (hero, statement, feature: they carry `data-tone="dark"`) and is ink elsewhere, checked under the logo on every scroll frame. The original swaps it with a CSS filter the same way. A difference blend was tried first but turned violet over the gold band.
- The logo is a plain letter "L" in the display face (not a drawn mark); the footer wordmark
  is the name "Lintel" typeset huge.
- Gold is mapped to `--highlight` (sparing emphasis: one band and the submit text);
  `--primary` is black (buttons, active states). `--glow` is the dark stone of photo
  placeholders.

## Comparison round 1

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| all | — | content inset 118px, the original's is 94px (page width set without the gutters) | — | yes: `--page-width` 81.25rem |
| all (mono) | DM Mono's curly f and r read as a different voice from Fraktion Mono | same | — | yes: Source Code Pro |
| page | 360/768 overflowed: the work track widened the one-column grid to its max-content | fits | — | yes: `grid-cols-[minmax(0,1fr)]` |
| header logo | — | the difference blend turned violet over the gold band (the original's goes black) | colour swap by section | yes: logo checks the section under it (`data-tone="dark"`) |
| intro | 2382px vs 2942px | 2788px vs 3011px | pinned stretch shorter than the original | yes: 235svh / 245svh wrappers |
| work | first card already slid half off when the section arrives | list starts moving before it's in view | the original starts the slide once the section is in | yes: ranges `entry 100% → exit 60%` (phones), `entry 60% → exit 40%` (desktop) |
| statement | 829px vs 982px (our heading is 4 lines, theirs 5; shorter copy) | 810 = 90% window ✓ | rise 48 ✓ | content only, left |
| hero | 936 ✓, cards row with peek ✓ | 958 ✓ (the capture marks ours window-sized 106%) | load scale + rise ✓; slides advance ✓ | — |
| feature | 150% window ✓ | 81% window ✓ | — | — |
| contact, footer | ✓ | ✓ (lead, ink callout blocks, underlined form; four ruled columns, giant wordmark) | staggered reveals ✓ | — |

## Comparison round 2

Section heights now: 390 — hero 936 (936), intro 2846 (2942), statement 829 (982), principle 1092 (1227), work 704 (756), feature 1266 = 150% window (1266), contact 1702 (1747), footer 1062 (1037). 1440 — hero 958 (958), intro 3013 (3011), statement 810 = 90% window (810), principle 1016 (1067), work 1028 (1028), feature 729 = 81% window (729), contact 1247 (1332), footer 745 (717). The leftovers come from our shorter copy. No overflow at 360, 768 or 1024.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | ✓ | heading was 2 lines (shorter copy) vs 3; the cards row stops 55px short of the original's right edge | ✓ | yes: copy as long as theirs; the cards column reaches 54px past the page column from 1400px |
| work | ✓ | ✓ | the capture called our list movement a "reveal" (it finished within ~850px); the original drifts over most of the page | yes: `cover 0% → cover 100%` at desktop, `entry 100% → exit 100%` on phones; both now read "scrubbed" |
| footer | wordmark only 60% of the width (ours is 6 letters, theirs 9) | ✓ height | ✓ | yes: 36vw on phones |
| intro | ✓ | ✓ | pinned (sticky) for 2 half-screens, like the original ✓; words 0.2 → 1 ✓ | — |
| header | ✓ marquee 20s, Menu + shortcut | ✓ pills | logo now black on paper and gold, white on photos ✓ | — |

Motion check against `original-design.md`: pinned intro ✓, word lighting ✓, rise-48 reveals in statement / principle / contact / footer ✓, staggered 8px callout blocks ✓, scrubbed work list (vertical at desktop, sideways on phones) ✓, hero load scale + 80px rise ✓, slideshow ✓, marquee loop ✓, hover inversions at 0.25s ✓ and arrow shake ✓.

Re-theme check: `structureengineering-work` under sample-ember light and `structureengineering-contact` under sample-ember dark both pick up that theme's serif, colours and radius and stay legible (the contact band takes ember's highlight). The hero in our own dark mode keeps light type on the dark placeholder.

## Left as they are

- The original's preloader veil and its 0.25→1 desktop zoom: we only do the hero's own 0.92→1 settle.
- Nav pills stay white over the white principle section (the original makes them transparent there).
- Sectors' dropdown on desktop.

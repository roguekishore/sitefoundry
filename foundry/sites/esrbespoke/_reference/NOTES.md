# esrbespoke — notes

Inspiration: https://esrbespoke.au/ (captured in advance, `precapture.json`), landing page plus the
pages asked for: services, partners, about, contact, careers, privacy-policy. All seven were found
in the precapture; none skipped.

Fictional company for the recreation: **Marlowe Coachworks**, a restoration and collision house
in Fremantle, est. 1991. Wordmark "MARLOWE" set plainly in the label face (no logo shape).
Marque names became body styles (Grand tourers, Roadsters…), partner brands became fictional
guilds (Halvard Lacquer Guild, Northwind Paint Systems).

## Design language

- **Palette:** pure white paper and pure black ink, with black full-bleed sections (services
  statement, menu) and a charcoal (rgb 25) page tone for careers and privacy. One pale grey
  (black at 10%) for the inactive marques and hairlines; one mid grey for secondary footer
  labels. A dark grey (rgb 43) small chip for the floating CONTACT/menu controls. No accent
  colour at all: the photographs carry the colour.
- **Type scale (two faces):** tiny uppercase labels 14px/14px tracked +0.09em at weight 300 (the
  "heading" face is really the label face); big text 62px/62 (hero), 62px/0.95 (page titles),
  92px/0.95 (marques list), 40px/40 statements, 20px/24 list items and prose; on phones 40/38/20/15.
  All big text is weight 500, tracked -0.01em.
- **Grid:** 12 columns, 16px gap, 32px gutter at 1440 (col 4 = 380px, col 7 = 728px, col 9 = 960px);
  on phones 2 columns, 18px gutter. Everything snaps to col 1, 4, 7 or 9.
- **Rhythm:** huge vertical air: label at the top of a section, the big paragraph ~360px lower.
  Sections are separated by full-width hairlines; rows of lists are separated by hairlines too.
- **Shapes/depth:** square everything (2px radius on the chips only), no shadows, no cards.
  Full-bleed photos/video and a small square image beside the marques list.

## Type

| Original | Role | Classification | Ours | Why |
|---|---|---|---|---|
| `__bodyFont` (500) | headlines, statements, list items, prose | neo-grotesk, normal-to-slightly-wide, large x-height | **Mona Sans Variable** at 500, `font-stretch: 106%` | neo-grotesk with a large x-height and a width axis, so it can be set a touch wide like the original |
| `__headingFont` (300) | all-caps 14px labels, nav, footer lines | squarish "techno" grotesk (Eurostile-like), narrow-ish, tall caps | **Saira Variable** at 400 | squared superellipse bowls, open licence, width axis; the closest open match to the squarish label face |

## Section map

### Landing (`page.tsx`)

| # | section | block | height | 390 | 1440 | media | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | `esrbespoke-header` | absolute bar | wordmark left, CONTACT chip + menu chip right | brand col1, tagline col4, nav list col9 (active marker), menu icon right | – | fixed CONTACT+menu chips fade in after ~half a screen (lg), rise out (-120px) when the footer arrives; menu overlay |
| 2 | hero | `esrbespoke-hero` | 100svh | title at 27%, link + sub row at 57%, unmute bottom | title + sub at 44%, unmute / our story bottom row | video, full bleed, cover | media drifts down at ~1/3 scroll (scrubbed) |
| 3 | statement | `esrbespoke-statement` | content | label, 185px air, 20px paragraph | label, ~340px air, 40px paragraph full width | – | – |
| 4 | showcase | `esrbespoke-showcase` | 488px / 100svh | full-bleed image 390×488, NEXT tile 82×97 at right | 100svh image, NEXT tile 216² at col 7 middle | slides (WebGL in original) | NEXT tile clip-reveals on entering view; NEXT crossfades slides |
| 5 | marques | `esrbespoke-marques` | content (1721 at 1440) | label + note row, 38px list, 90px image top-right | label col1 + note col9, 92px list, 216² image col9 sticky | one square per marque | active marque follows the scroll (item at the viewport middle), hover too; image crossfades |
| 6 | services | `esrbespoke-statement` (dark) + `esrbespoke-index` (dark) | content | label, 20px paragraph, numbered rows full width | 40px paragraph, full-width hairline, label col1, numbered rows col9 | – | – |
| 7 | footer | `esrbespoke-footer` | content / 100svh | brand + group text, email field, contact groups, handle/privacy, big wordmark | 3 cols top, wordmark col1 middle, contact col9, bottom row | – | revealed from under the page (sticky); its letters type on when it arrives |

### Services (`pages/services.tsx`)

| # | section | block | height | notes |
|---|---|---|---|---|
| 1 | page hero | `esrbespoke-page-hero` | 616px top + media (393/481 phones, 16/10 desktop) | title bottom-left, sub col9 + arrow; media parallax |
| 2 | What we offer | `esrbespoke-split` | content | heading col1-6, paragraph col7 |
| 3 | services accordion | `esrbespoke-accordion` | content | label col1, rows col7 with caret |
| 4 | full-bleed photo | `esrbespoke-media-band` | 100svh | parallax |
| 5 | marques | `esrbespoke-marques` | content | as landing |
| 6 | The details that drive us | `esrbespoke-media-statement` | 100svh / 140svh | heading top-left, caps note bottom col9 over photo; photo fades in, parallax |
| 7 | Exceptional standard | `esrbespoke-split` (heading only) | content | |
| 8 | the difference accordion | `esrbespoke-accordion` | content | |
| 9 | full-bleed photo | `esrbespoke-media-band` | 100svh | |
| 10 | footer | `esrbespoke-footer` | | |

### Partners (`pages/partners.tsx`)
page hero · split (heading only) · `esrbespoke-feature` ×2 (title col1, 4:3 media + lead + label/text rows col7) · footer.

### About (`pages/about.tsx`)
page hero · split "A trusted partner" · `esrbespoke-prose` (label col1, paragraphs col7) · split "The people" · `esrbespoke-table` (label col1, two-cell rows col7/col10) · footer.

### Contact (`pages/contact.tsx`)
page hero · split with label/value rows (Enquiries) · split with paragraph (Visit us) · `esrbespoke-feature` ×2 with address meta col4 and a sticky left column, list rows · footer.

### Careers (`pages/careers.tsx`, charcoal)
`esrbespoke-statement` page-top variant (40px paragraph at 300px) · `esrbespoke-table` (open positions, link rows with hover arrow) · media band · footer.

### Privacy policy (`pages/privacy-policy.tsx`, charcoal)
statement page-top variant (the title, 40px) · `esrbespoke-prose` with sub-headings · footer.

## Motion inventory

| section | trigger | what changes | timing | build |
|---|---|---|---|---|
| floating controls | scrubbed (scroll 0→~50svh) | opacity 0→1 (lg only; phones always shown) | linear with scroll | CSS `scroll(root)` timeline in `@supports` |
| floating controls | scrubbed at page end | translateY 0→-120px as the footer arrives | last ~25svh of the page | CSS `scroll(root)`, range `calc(100% - 25svh) 100%` |
| menu | click | full-screen overlay fades in | 0.5s cubic-bezier(.19,1,.22,1) | React state + Tailwind transition (hydrate load) |
| nav / links | hover | opacity 1→0.5 | 0.3s cubic-bezier(.19,1,.22,1) | Tailwind `transition-opacity` |
| hero UNMUTE | hover | opacity 1→0.7 | 0.3s cubic-bezier(.16,1,.3,1) | Tailwind |
| hero media | scrubbed | translateY 0→~33% of its height while the hero leaves | linear | CSS `view()` range `exit` |
| page hero media | scrubbed | inner media drifts -12%→+12% | linear | CSS `view()` range `cover` |
| page hero media | load | rise 16px→0, fade | 1s ease-out | CSS keyframes, fill both |
| page hero sub / footer lines | load / entering view | letters type on (opacity 0→1, staggered per letter) | ~12ms per letter | `esrbespoke-type-on` component (JS arms it after mount, static HTML shows text) |
| showcase NEXT tile | entering view | clip-path inset(100% 0 0 0)→inset(0) | entry 20%→cover 45% | CSS `view()` |
| showcase | click NEXT | slides crossfade | 0.8s cubic-bezier(.19,1,.22,1) | React state |
| marques | scroll position | active row opacity 0.1→1, others 0.1; image crossfade | 0.1s / 0.5s cubic-bezier(.19,1,.22,1) | JS scroll listener picks the row at the viewport middle (hydrate visible) |
| marques | hover | row opacity 0.1→1 | 0.1s cubic-bezier(.19,1,.22,1) | React state on pointerenter |
| marques image | pinned | sticks at the viewport middle beside the list | – | `position: sticky` |
| media band / media statement | scrubbed | inner media drifts down (parallax) | linear | CSS `view()` cover |
| media statement | entering view | media fades 0→1 | entry 0%→cover 30% | CSS `view()` |
| accordion | click | row opens (height 0→auto), caret flips | 0.5s cubic-bezier(.19,1,.22,1) | React state, grid 0fr→1fr |
| table link rows | hover | arrow opacity 0.25→1 | 0.3s | Tailwind group-hover |
| contact feature | pinned | left column (title + address) sticks while the right column scrolls | – | `position: sticky` |
| footer | pinned | the page lifts off the footer (footer sticky at bottom, page above it) | – | `sticky bottom-0` + `z` on main |
| whole page | wheel | Lenis smooth scroll | – | `esrbespoke-smooth-scroll` (hydrate load) |

## Media slots → placeholders

- hero video (full bleed, 100svh, cover) → `bg-muted` in the dark scope.
- page hero photos (390×477, 1440×900), media bands (100svh), media statement (140svh) → `bg-muted`.
- showcase slides (100svh at 1440, 390×488) and the NEXT tile → `bg-muted` and `bg-muted-foreground/30`.
- marques squares (216², 90²) → `bg-muted`, one per marque, stacked.
- partner/location photos 4:3 (680×510) → `bg-muted`.

## Decisions

- One `esrbespoke-split` block covers every "big heading left + paragraph or label/value rows right"
  section; one `esrbespoke-feature` covers both partner entries and contact locations.
- Section tone (`light` / `dark` / `charcoal`) is a prop on the blocks that the original shows on
  black or charcoal; `dark` adds the theme's `.dark` scope, `charcoal` adds `.dark` plus `bg-card`.
  The small helper lives in the `esrbespoke-tone` lib.
- Header is absolute at the page top (it scrolls away, as on the original); the CONTACT + menu chips
  are fixed. Header text colour follows the section under it via the `tone` prop (landing: dark).
- The menu overlay content is not in the capture; built as a black full-screen list of the same links
  at the 62px size (the capture counts 62px/40px elements beyond the visible ones, which fits).
- Lenis is on (the capture saw it) via `esrbespoke-smooth-scroll`.
- Marque active state follows the scroll with a JS listener rather than CSS, because "the row
  nearest the middle of the window" can't be expressed with a view timeline per row and also stay
  hoverable.

## Comparison round 1

Captured ours (landing + six pages, light) and compared section by section with the originals.
Media are placeholders on both sides of the comparison (the original's photos and film are grey slots in ours).

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | — | nav lines 24px apart instead of 17.5px (inline-block links on a 1.5 line box); brand wrapped to two lines (one column wide); menu icon dropped to the row's middle | chips fade in after ~30–50svh, lift -120px at the end: matches | yes: links `block`, brand spans 3 columns, icon `self-start` |
| labels (all) | Saira at 100% width runs ~20% wider than the original's narrow squarish face | same | — | yes: `font-stretch: 88%` on every label |
| hero | title wrapped "…to the / letter" (original breaks after ~13 letters) | same | film sinks ~33% while leaving: matches (0→297px) | yes: `max-w-[7em]` |
| statement | line-height 30px instead of 20px | 60px instead of 40px (tailwind-merge dropped `leading-none` when the size class came after it) | — | yes: size first, then leading |
| showcase | ok, 4:5 | ok; the NEXT tile reads blank in the section crop (clip reveal at its start), visible in the scroll frames | clip-path wipe while entering: matches the original's range | – |
| marques | ok (90px square at the top right) | ok; image sticks at 30svh, row at the window middle turns dark | active row follows the scroll, hover too: matches | – |
| services statement + index | ok | ok (numbered rows at column 9, full-width hairline) | – | – |
| footer | ok; wordmark at 16.6vw made the page 375px wide at 360 and 779px at 768 | ok; curtain reveal + letters typing on: matches | type-on 208 letters at the page end; sticky | yes: wordmark 14.5vw (fits at 360/768/1024 now) |
| page hero (inner) | ok | titles sat on one line where the original's wrap to two | note types on, photo rises and drifts | yes: `max-w-[8em]` |
| split / feature labels | address lines and row labels 20px apart instead of 14px (same tailwind-merge issue on the label's size override) | same | – | yes: explicit `leading-none` with the override |
| feature (contact) | ok | photo fades in, left column pinned: matches | fade 0→1 on entry; sticky | – |
| prose (policy) | sub-heading to first paragraph gap 76px instead of 18px (Tailwind 4 `space-y` puts the margin on the heading) | same | – | yes: flex column gaps, heading `mb-4` |
| careers | photo band placeholder light grey on a charcoal page; footer white | same; original's footer is charcoal on careers and black on privacy | – | yes: band in the dark scope, footer tone charcoal / dark |
| about, partners, services, contact | heights within a few px of the original's (hero 1093 / 1516, statement band 100svh / 140svh, bands 100svh) | same | parallax drifts on all bands | – |

Horizontal overflow after round 1: landing overflowed at 360 and 768 (footer wordmark), fixed; every inner page fit at 360/768/1024.

## Comparison round 2

Recaptured the landing page and every inner page after the round-1 fixes.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | ok | nav lines 17.5px apart, brand on one line, icon top-aligned; labels now the original's width | chips: fade-in (lg) + lift-away, scroll-linked | – |
| hero | two-line title, row of link + note at 57% | two-line title and note at 44% of the window | parallax 0→~33% | – |
| statements | 20px/20px | 40px/40px | – | – |
| contact feature | address lines solid (14px apart) | same; photo fades in, left column pinned | fade + sticky | – |
| policy prose | sub-heading 16px with the paragraph 16px below it, paragraphs ~52px apart | 18px sub-headings, 20px paragraphs | – | – |
| careers / privacy | charcoal page with dark photo band; footer charcoal (careers) and black (privacy) as on the original | same | type-on opening paragraph | – |
| overflow | every page fits at 360 / 768 / 1024 | | | – |

What still differs (accepted): our copy is our own, so line counts differ (e.g. the landing statement is 6 lines
where the original's is 7, and the privacy policy is shorter); the footer's wordmark is plain text in the label
face, not the original's logo, so it is wider and less tall; the menu overlay's design is inferred (not captured).
Media are placeholders everywhere; full-page captures show the fade-in photos and the type-on footer blank because
they are only revealed while scrolling (they appear in the scroll frames).

## Re-theme check

- `esrbespoke-marques` under `sample-ember` (light): serif display face, warm paper, pale rows at 10% ink, warm
  placeholder square: reads correctly.
- `esrbespoke-footer` under `sample-ember` (dark): mono label face, warm dark paper, grey group titles: reads correctly.
- The whole landing page in the esrbespoke theme's dark mode: paper turns black, every section stays legible.

# storeyarchitecture (storeyarchitecture.co.uk): recreation notes

Captured in advance (precapture.json, landing page only; no other pages were asked for).
Recreated as **Ashlar**, a fictional residential architecture studio in Frome, Somerset:
own name, own copy, own project and post titles, own address and numbers.

## Design language

- **Palette roles.** Pure black and pure white, nothing else of note. Most of the page is
  white (`#fff`, background) with black ink (`#000`); three whole bands flip to black with
  white text (the intro under the hero, the testimonial, the footer). Grey `#3d3d3d` is the
  form ink and the Submit button; `#bfbfbf` the hairlines between expertise rows; `#e6e6e6`
  the huge ghost numbers. Off-white paper (`#fefefe` over a paper texture, reads as a warm
  `#f4f3ef`) for the note cards and the brief form. Over photos the text is white.
- **Type scale.** One neo-grotesk at 400 (500 only in buttons), tracked tight (-3%), leading
  1.0–1.2, everything sized in **vw**, so the page is a scaled drawing at every width:
  - desktop (from 640px): ghost numbers 15vw, studio line 8vw, section heads 7vw, row and
    footer heads 2.2vw, body 1.6vw (lh 1.2), nav / buttons 1.1vw, mono 2.2vw / 1.1vw / 0.8vw;
  - phones: studio line 15vw, section heads 12vw, row heads 8vw, body 4.3vw (lh 1.2), mono 2.5vw.
  - A grotesk mono (tracked -10%) for form numbers, labels and the note cards.
- **Spacing rhythm.** Margin and gutter are both 1.3889vw (20px at 1440); on phones 16px
  (4.1vw). Sections sit tight to their content at the top (≈3.5vw) and leave very large
  empty fields of white or black below (15–55vw).
- **Grid.** 12 columns at desktop (col 7 = the half at 730px, col 9 at 967px, col 10 at
  1085px carry most copy), 6 columns on phones (col 2 at 62px is the indent of row text).
- **Shapes and depth.** Square everything (radius 0), flat, no shadows. Buttons are hard
  rectangles: label left, a small dotted ring icon right. Paper cards are the only "objects"
  (with a paperclip / binder clip, slightly rotated in the footer).

## Type

| Original | Kind | Open font used | Why |
|---|---|---|---|
| New Grotesk (400/500) | neo-grotesk sans, normal width, large x-height, tight default spacing, horizontal terminals | **Instrument Sans Variable** (`@fontsource-variable/instrument-sans`, already installed) | a neo-grotesk with the same normal width, a large x-height and flat terminals; with the original's -3% tracking it sets to nearly the same line lengths. Arimo (Arial metrics) was the other candidate but its angled terminals read as Arial, not as a modern grotesk |
| New Grotesk Mono (400/500) | grotesk monospace, narrow, light, slashed zero | **IBM Plex Mono** (`@fontsource/ibm-plex-mono`, already installed) | a grotesk-derived mono with a similar light, narrow look; DM Mono is rounder and more geometric |
| Biro (1 use) | handwriting | not used | it writes one line on the note card; the theme has no script token, so the line is set in the body face, italic (a decision, see below) |

No new packages were added.

## Section map

Heights from the capture (390 / 1440). "svh" = sized by the window.

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| – | header | `storeyarchitecture-header` | fixed overlay | wordmark 8vw left, "Menu" 8vw right | wordmark 2.2vw left, nav 1.1vw at col 7, black Contact button right | – | wordmark + nav invert against what is under them (difference blend); button stays black |
| 1 | hero | `storeyarchitecture-hero` | **110svh** both | slide progress bars, 4.3vw copy, white 16vw-tall button, bottom | bars + copy col 1–3 bottom-left, white button col 5–6 | slideshow, fills the window, 2 gradient scrims | load: slide fades + scales 1.1→1, copy lines rise; auto-advancing slides with a filling progress bar; exit: media drifts down ~20% and dims to 0.6 |
| 2 | intro (black) | `storeyarchitecture-intro` | **110svh** (390) / **120svh** (1440) | two paragraphs stacked at the top, black field below | paragraphs at col 7 and col 10; preview card (cream, mini window + mono link) sticky at top-right | scene (WebGL tiles in the original), mini preview | paragraphs rise 20–28px on entering; preview card slides up ~346px while entering and sticks |
| 3 | expertise | `storeyarchitecture-expertise` | content (1646 / 2148) | 12vw head, para; rows: number col 1 + 8vw title, para, 2:1 image (col 2–6) | 7vw head col 1–6, para col 9–12; rows ~40vw: title col 1, para col 7–11, ghost 15vw number bottom-left, 5:3 image col 7–9 | 3 images (+ a ruler-and-pencil cut-out, skipped) | head/para rise; desktop: each row, as it leaves, sinks 10vw and darkens to 40% black while the next row slides over it |
| 4 | studio | `storeyarchitecture-studio` | **160svh** both | 15vw line centred, white button, paragraphs col 3–6 at the bottom | 8vw line centred (3 lines), white button, two paragraphs col 7 / col 10 bottom | full-bleed image (oversized, parallax) | image drifts down 20% scrubbed; line + paragraphs rise |
| 5 | projects | `storeyarchitecture-projects` | content (1105 / 1940) | 3 images stacked (0.92, 1.15, 1.5) | two columns: tall 0.685 image left + 1.2 image right; note card (col 1, rotated paper) and 1.5 image right at the bottom | 3 images | images uncover (black cover fades out) on entering; inner parallax drift; hover: "Explore project" label follows the cursor |
| 6 | testimonial (black) | `storeyarchitecture-testimonial` | content (1036 / 1565) | slider image 4:3, bars, quote + thumb, then paragraphs stacked | paragraphs at col 7 / col 10 top; slider image 4:3 col 1–6, bars, quote col 1–3, thumb + name + mono company col 4–6; big black field | slide images, thumbnails | slides crossfade with scale 1.05→1 and a filling bar; paragraphs drift down ~27vw scrubbed |
| 7 | journal | `storeyarchitecture-journal` | content (2255 / 2380) | 12vw head, para, small black button; 4 posts stacked | 7vw head col 1–8, para + button col 9–12; 2×2 posts (1:1 + 4:3, 4:3 + 0.86), title + black Read button | 4 images | same uncover + parallax + follow label ("Read post") as projects |
| 8 | contact | `storeyarchitecture-contact` | content (1092 / 1784) | 12vw head, paper form card overlapping it, full width | 7vw head 5 lines col 1–5, para col 1–3; paper form card col 4 to the edge overlapping the head; numbered underlined fields, 2×2 checkboxes, grey Submit, mono footer row | – | form card drifts down 10vw scrubbed |
| 9 | footer (black) | `storeyarchitecture-footer` | content (895 / 876) | heads 8vw + links stacked, wordmark, full-bleed image with a tiny note card | Site index + Legal (col 1 / col 4), Get in touch + wordmark; image col 7 to the edge with a rotated note card and binder clip | 1 image, bottom scene strip | slides up 20vw→0 while entering; a 20vw strip stays below it |
| – | smooth scroll | `storeyarchitecture-smooth-scroll` | – | – | – | – | Lenis |

## Motion inventory

| section | trigger | what changes | timing / easing | build |
|---|---|---|---|---|
| page | wheel | eased smooth scrolling | Lenis | `storeyarchitecture-smooth-scroll` (lenis, hydrate load) |
| header | always | logo + nav invert against the backdrop | – | the logo/nav layer is its own fixed box with `mix-blend-mode: difference` and white ink |
| hero | load | first slide opacity 0→1, scale 1.1→1 | ~1.2s ease-out | state-driven Tailwind transitions; the first slide uses a CSS keyframe so it works before hydration |
| hero | load | copy rises 28px, button fades in | 0.9s cubic-bezier(.2,.7,.2,1), staggered | CSS `@keyframes`, fill both |
| hero | loop (timer) | slides crossfade (opacity + scale 1.1→1); active bar widens and fills | 6s per slide, 1.2s fade | React state (`hydrate: load`); bar fill is a CSS keyframe restarted per slide |
| hero | scrubbed, leaving | media translateY 0→20%, opacity 1→0.6 | linear with scroll | CSS view timeline, `exit` range |
| intro, expertise, studio, journal, contact, testimonial copy | entering view | translateY 28px→0, opacity 0→1 (the original masks each line; we move each paragraph) | over the first 220px of entry, 40px stagger | `storeyarchitecture-rise` (CSS view timeline) |
| intro | scrubbed, entering | preview card translateY 40svh→0, then sticky at top 20px | linear | CSS view timeline on the card + `position: sticky` |
| expertise | scrubbed, leaving (desktop) | row content translateY 0→10vw, a black veil 0→0.4; next row (opaque, later in the DOM) covers it | linear | CSS view timeline, `exit` range; rows are `relative` so later rows paint on top |
| studio | scrubbed (whole pass) | oversized media translateY 0→20% | linear | CSS view timeline, `cover` range |
| projects, journal | entering view | black cover over each image opacity 1→0 | first 300px of entry | `storeyarchitecture-frame` |
| projects, journal | scrubbed (whole pass) | inner media translateY 0→~15% of the frame | linear | `storeyarchitecture-frame` (oversized inner, `cover` range, `overflow-clip`) |
| projects, journal | hover | "Explore project" / "Read post" label follows the pointer | 0.2s | pointer handler writes CSS variables (hydrate visible); without JS the label shows at the top-left on hover |
| testimonial | timer | slide crossfade, scale 1.05→1, bar fills, quote + thumb change | 7s per slide, 0.8s fade | React state (`hydrate: visible`) |
| testimonial | scrubbed | paragraphs translateY 0→27vw (lag) | linear | CSS view timeline, `cover` range (desktop only) |
| contact | scrubbed | form card translateY 0→10vw | linear | CSS view timeline, `cover` range (desktop only) |
| footer | scrubbed, entering | panel translateY 20vw→0 | linear | CSS view timeline, `entry` range |
| buttons | hover | label slides 0.5vw right; ring turns 115° | 0.2s / 0.5s cubic-bezier(0.4,0,0.2,1) | Tailwind `group-hover` transitions |
| all | reduced motion | everything off | – | `@media (prefers-reduced-motion: no-preference)` around every animation; slideshows stop advancing |

Skipped: the page-wide fixed WebGL layer of floating, tumbling tiles (it is a 3D scene: the
intro and footer get a scene slot instead), the ruler-and-pencil cut-out that drifts past the
expertise rows (an illustration), and the hero header's brief fade-in while pinned (the
capture logged it once; every frame shows the header in place).

## Media slots and placeholders

| slot | original | placeholder |
|---|---|---|
| hero slides (5) | full-bleed photos, cover, 110svh | `bg-glow` surface with a top 20% black scrim and a bottom black gradient |
| intro scene | WebGL tiles over the black band | faint `bg-background/5` field, the full band |
| intro preview | 311×214 mini window inside the paper card | `bg-foreground` window |
| expertise images (3) | 5:3 at desktop, 2:1 on phones | `bg-muted` |
| studio media | full-bleed, 120% tall, parallax | `bg-glow` |
| projects (3), journal (4) | photos, cover, inner parallax | `bg-muted` inner surface, black uncovering veil |
| testimonial slides + thumbnails | 4:3 photos, 65px squares | `bg-background/15` |
| footer image | 710×444 bleeding to the right edge | `bg-muted` |
| footer scene strip | the fixed WebGL layer showing through | `bg-linear-to-b from-foreground/20 to-background` strip, 20vw |

## Decisions

- Breakpoint `sm` (640px) switches phone → desktop, as the original's class names show
  (`sm:col-span-3`). Every size is in vw like the original, so 768 and 1024 are the 1440
  layout scaled down.
- The original's logo mark (a ring of dots) also sits in every button. Both are its own
  shapes, so the wordmark is plain text and the buttons use lucide's `CircleDashed`.
- The theme's `--page-width` is `100%`: the original is a fluid, edge-to-edge drawing.
- Over-media text and white buttons use `text-background` / `bg-background` with `dark:`
  swaps to `foreground`, so the dark sibling still reads over its placeholders.
- The handwritten note line uses the body face in italic (no script token in the contract).

## Comparison rounds

The capture takes its section crops at scroll 0, after scrolling back up. The original's
reveals are one-shot JavaScript, so its crops show everything; ours are CSS scroll-driven
and reversible, so below-the-fold copy (and the footer's 20vw rise) shows in its pre-state
in `ours-*-section-*` crops. Those sections were compared on the scroll frames instead.

### Round 1

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | layout matches (bars, 4-line copy, 55vw button) | statement auto-placed into col 7 beside the bars instead of under them | sink 0→198px / opacity 0.6 matches; crossfade + bar fill present | yes: explicit `sm:col-start-1 sm:row-start-2` |
| all text | Instrument Sans at 400 and -3% reads thinner and more cramped than New Grotesk; word gaps close up at 16px | strokes visibly lighter in the 7vw heads | – | yes: weight 450 throughout (studio line 500), tracking -2% |
| intro | scene placeholder at 5% white made the band read dark grey, not black | same | rise + card ride (405→0, original 346→0) and sticky present | yes: 3% |
| expertise | heading 67px below the band (original ~35px) | rows 571px, ghost numeral baseline on the image's bottom edge, as the original | sink 0→144px + veil 0→0.4 over 2668–3568 (original 2698–3598) | yes: phone `--section-y` 16vw → 9vw |
| studio | – | content made the band 1450px, so it lost its "sized by the window" mark | drift 0→289px (original 288) | yes: `h-[160svh]`, paragraphs pinned to the bottom |
| contact | – | heading and paragraph pushed into implicit grid columns (the overlapping paper claimed row 1 first, and `sm:col-span` resets `col-start`), so the paper was 160px wide and the section 2104px | drift 0→143px matches | yes: explicit `sm:col-start-1` |
| footer | – | wordmark 8vw at desktop (no desktop size) | rise 288→0 matches | yes: `sm:text-[2.2vw]` |

### Round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| page | 11226px (original 11249) | 14068px (original 14174); every section within ~5% of the original's height; hero 110svh, intro 110/120svh, studio 160svh all marked window-sized | every inventory row shows up with the same kind, direction and distance | – |
| hero | matches | bars at 688, copy 712–875, button 826–878: the original's positions | – | – |
| contact | paper overlaps the head from 16vw, numbered underlines, 2×2 squares, mono foot in two rows as the original | paper from col 4 to the right gutter, brand at the top-right, Submit and footer as the original | – | – |
| contact / note cards | lucide paperclip sat diagonally and small | same | – | yes: turned upright and sized to the original's clip (11vw tall at desktop) |
| journal | 3-line 12vw head, small black button, posts 30vw apart | 2-line 7vw head, posts start ~490px below the head (original 517) | uncover + drift + pointer label present | – |
| testimonial | 874px vs 1036px: the original's crop includes the white strip under the projects; the band itself matches | matches; the lagging paragraphs leave the right side empty mid-band, as the original | lag 0→389px | – |
| overflow | fits at 360, 768, 1024 | – | – | – |

### Round 3 (after the paperclip fix): final checks

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| whole page | 11226px, window-sized sections as the original | 14068px, window-sized sections as the original | Motion list row for row: hero sink 0→198 / 0.6, intro card 405→0 (346), expertise 0→144 + veil 0.4, studio 0→289 (288), frames uncover + drift, testimonial 0→389 (391), contact 0→143 (143), footer 288→0 (288); button hover slides 7.2px, the original's value | – |
| footer | below the photo the scene strip is a pale fade; the original shows black there on phones (its WebGL layer doesn't draw on phones) | matches the original's pale strip | – | left: one strip for both sizes keeps the block simple |
| dark mode | bands swap (black page, pale bands); the Contact button vanishes on pale bands just as the original's black one does on black bands | same | the expertise veil pales rather than darkens (noted in meta) | – |
| re-theme | – | `storeyarchitecture-expertise` and `storeyarchitecture-journal` under `sample-ember`: rust button, cream surfaces, ember's own fonts; layout and motion intact | – | – |

Remaining differences, by choice: the WebGL tile layer, the ruler-and-pencil cut-out and the
photos are placeholders or skipped; paragraphs rise as blocks rather than line by line; the
handwritten note line is the body face in italic; Instrument Sans is a touch wider than New
Grotesk, so a few lines break one word earlier.

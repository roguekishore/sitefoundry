# Radiant (radiantnuclear.com) — recreation notes

Recreated as **Corvane Energy**, a made-up maker of a 1.2 MW transportable fission cell called
**Tessera**, with a made-up defence order called the **Keystone program**. No text, logo,
image or code of the original is used.

**Capture caveat:** the precapture only saw the site at 390 px. The 1440 capture is a
Cloudflare "verify you are human" page, so every desktop layout below is **(inferred)** from
the phone layout, the media sizes and the site's own `:root` variables (`--site-max: 2000px`,
`--gutter-step: 24px`, `--block-max-h: 1100px`, `--nav-clear: 80px`).

## Design language

- **Palette roles:** a warm paper cream page (`rgb(242 234 225)`, background), a warm
  near-white for the floating nav glass (`rgb(253 251 249)`, card), a soft charcoal for text
  (`rgb(43 41 42)`, foreground), one teal for the brand mark, the little ▶/▼ markers and the
  pre-scroll colour of the intro text (`rgb(0 126 162)`, primary), and a sandy tan
  (`rgb(186 146 100)`, secondary) for the stories band and the footer, always with white text.
  Photos and videos sit under a black-to-clear gradient (`to top, 70% → 10% → 20%`).
- **Buttons** are flat translucent dark washes with white text: charcoal (or a dark brown
  glass) at 40 %, going to 80 % on hover in 150 ms. No radius anywhere, no borders, no shadows.
- **Type scale (390):** hero 36/42 bold caps; section heads 30/30–34.5 bold caps; intro
  statements 20/23 bold; news titles 24/30 medium; dates 18; body 16/22–24 regular; buttons
  14/14 bold; nav 14 medium caps; fine print 10. Letter spacing normal throughout.
- **Rhythm:** a fixed 24 px gutter at every width (the gutter only grows on screens wider
  than 2000 px); sections open with ~88 px of top padding; ~60–70 px between stacked items.
- **Layout:** single column at 390, mostly full-bleed media (videos 390×220 edge to edge),
  text inset by the gutter. Window-sized blocks are capped at 1100 px tall.
- **Depth:** none besides the photo gradients and the frosted nav bar.

## Type

| Original | Classification | Open font used | Why |
|---|---|---|---|
| Avenir Next LT Pro (200/400/500/700/800) | geometric sans with humanist touches, normal width, fairly large x-height | **Nunito Sans Variable** | the closest open relative: geometric circles with humanist terminals, similar width and x-height, weights 200–1000; Avenir Next 500 "Medium" is matched with 600, 700 stays 700 |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 (inferred) | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | floating nav | `radiantnuclear-header` | none (floats) | bar inset 12 px, 56 px tall; logo + wordmark left, two caps links right | same bar, wider | — | backdrop fades 90 %→20 % over the first 422 px of scroll; link colour 0.4 s |
| 1 | hero | `radiantnuclear-hero` | 100svh (max 1100 px) | photo fills the window; heading, subline, right-aligned button and fine print stacked at the bottom | heading up to ~56 px in a 52 rem column, button under the subline, fine print bottom | full-window photo | none captured; button hover |
| 2 | intro statements | `radiantnuclear-intro` | content (800 px at 390) | four short bold statements top-left, a wide map picture cropped at the section bottom | statements 30 px in a left column; picture wide along the bottom | 988×480 picture, bottom-anchored and cropped | words scrub teal→charcoal while scrolling; picture rises 384 px→0 scrubbed |
| 3 | video stories | `radiantnuclear-stories` | content (1988 px at 390) | tan band: intro paragraph, then (video full-bleed 16:9 / caps heading / body / button) ×3 | intro in a 46 rem column; rows of video half + text half, alternating sides | 3 looping videos 390×220 | button hover only |
| 4 | Keystone pinned tour | `radiantnuclear-tour` | 400svh tall wrapper, sticky 100svh stage (max 1100 px) | heading + body at top, illustration centred, caption centred near the bottom, progress track with a teal ▼ marker | same, heading in a 40 rem column, stage up to 40 rem wide | one illustration per step (9 images in the original over 5 steps) | pinned; 5 steps crossfade (image opacity, caption opacity + rise 14 px); marker slides along the track; active segment steps |
| 5 | scale statement | `radiantnuclear-statement` | 100svh (max 1100 px) | full-bleed looping video, caps heading top-left | heading ~72 px | full-window video | heading lines rise and fade in on entering view |
| 6 | news | `radiantnuclear-news` | content (2518 px at 390) | caps heading left + button right, then 5 stacked cards: 1.8:1 photo, ▶ date, title, summary | 3-column card grid | 5 photos 342×190 | card hover: photo brightens, title underline grows |
| 7 | footer | `radiantnuclear-footer` | content (483 px) | tan: address, email, two link columns (left/right), 3 social icons centred, copyright | address left, links centre, icons right, copyright under a rule | — | link hover fade |

## Motion inventory

| section | trigger | what changes | timing | built with |
|---|---|---|---|---|
| header | scrubbed (page scroll 0–422 px) | glass backdrop opacity 0.9 → 0.2 | linear | CSS `animation-timeline: scroll(root)` |
| header | hover | link colour → charcoal | 0.4 s cubic-bezier(.4,0,.2,1) | Tailwind `transition-colors duration-400` |
| buttons | hover | dark wash 40 % → 80 % | 0.15 s | Tailwind `transition-colors duration-150` |
| intro | scrubbed (section entering) | each word teal → charcoal, in reading order | linear over ~35 % of the cover range | CSS `view()` timeline on the text, per-word range offset |
| intro | scrubbed (section entering) | map picture translateY 384 px → 0 | linear, cover 25 %→50 % (scroll 422–844 at 390) | CSS `view()` timeline, `overflow-clip` crop |
| tour | pinned | stage sticks for 3 screens | — | `position: sticky` in a 400svh wrapper |
| tour | scrubbed in the pin | each step's illustration crossfades | ~15 % of a step to fade | named view timeline, `contain` ranges per step (neko recipe) |
| tour | scrubbed in the pin | each step's caption opacity 0→1, rise 14 px→0, then out | same slices | same |
| tour | scrubbed in the pin | ▼ marker slides 10 % → 90 % along the track; active segment steps | linear | same timeline |
| statement | entering view | each heading line rises from its mask and fades in, staggered | entry 0–260 px (+60 px per line) | CSS `view()` timeline |
| news | hover | photo brightness 90 % → 100 %; title underline scaleX 0 → 1 | 0.3 s | Tailwind `group-hover:` |
| footer | hover | link opacity → 0.7 | 0.15 s | Tailwind |

Motion inside media (the videos themselves, the 3D map) is the placeholder's business.

## Media slots

All placeholders are plain token surfaces (`radiantnuclear-slot`), at the original's size and
crop: hero (window, cover), intro map (988×480 at 390, cropped by the section), three story
videos (16:9 full-bleed), five tour illustrations (2:1, centred), statement video (window,
cover), five news photos (1.8:1). Dark slots (`tone="night"`) are a charcoal gradient so the
white type over them reads.

## Decisions

- **Five tour steps**, not four: the capture lists five distinct caption pairs and the
  progress segment sits at 0–20 %, 20–40 %, 40–60 %, 80–100 % in the frames.
- **Text over photos uses `text-card` on a `foreground` gradient**, not white on black, so the
  blocks stay token-only. In dark mode the gradient and the night placeholder switch to the
  dark background colour and the type to `foreground`, so photo areas stay dark with light type
  (round 2: the first version inverted to a light wash and the floating nav lost contrast).
- **Buttons switch to a solid foreground wash in dark mode** (`dark:` with tokens) so the
  label keeps its contrast.
- **No Lenis:** nothing in the capture shows smooth scrolling.
- **Header has no phone menu:** the original shows both links inline at 390.
- **Desktop is inferred** (see the caveat at the top); kept close to the phone design, widened
  with two-column story rows and a three-column news grid.
- Social icons are generic lucide icons passed as props (lucide 1.x has no brand icons, and
  brand logos are out anyway).

## Comparison round 1

Ours vs original at 390 (the original's 1440 is blind, so 1440 is judged on its own: does it
read as the same design widened). Heights at 390: hero 844/844 (window), intro 825/800, stories
1943/1988, tour 3376/3376 (400% window, pinned 5 half-screens on both), statement 844/844
(window), news 2526/2518, footer 472/483. Motion list: header glass 0.90→0.20 at 422 px, intro
picture translateY 384→0 over 422–844 px, tour pinned with step crossfades at 4220 and 5908 px
and captions rising 14 px, statement lines rising on entry at 6752–7174 px: all the same kind,
direction and scroll position as the original's. Overflow: fits at 360/768/1024.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| intro | Nunito Sans runs ~8% wider than Avenir Next, so the demo's hard line breaks left an orphan ("cargo") | — | words scrub teal→charcoal (crop at scroll 0 is all teal, frame at 844 all charcoal, as the original) | yes: line breaks rebalanced for the wider face |
| intro | section 25 px taller (825 vs 800) | the 86rem picture stopped short of the window edges and read as a card | rise matches | yes: frame 21rem on phones; picture at least full width on desktop |
| tour | progress track 171 px vs 195 px (the original's is half the window, not half the content) | — | pointer glide and step thumbs match the frames | yes: track 50vw |
| tour | captions in the original sometimes show the body lighter than the lead (mid-fade) | — | ours fades the whole caption as one | no: same effect, mid-frame artefact |
| stories | 45 px shorter: the original's lead runs one line longer | — | — | no: content length |
| hero, statement, news, footer | match in place, size and rhythm; media are placeholders | inferred desktop reads as the same design widened | — | — |

## Comparison round 2

Heights at 390 now: intro 786/800 (one line fewer than the original's statements; within a
line), everything else as round 1. Motion list unchanged and still matching. Overflow: fits at
360/768/1024. Re-theme check: `radiantnuclear-tour` and `radiantnuclear-news` under
`sample-ember` keep their layout and pick up its colours and type (teal markers become ember).

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| intro | statements now wrap like the original (short deliberate lines) | picture now runs edge to edge | — | yes (round 1 fixes confirmed) |
| tour | track is half the window, as the original | — | pointer glide, thumb steps, caption rise all present | yes |
| hero, statement (dark mode) | the night placeholder and photo gradients inverted to a light wash; the floating nav's cream links got lost over it | same | — | yes: dark variants keep photo areas dark with light type |
| all | a quick glance mistakes each section pair for the other, apart from content and placeholders | desktop inferred | all inventory rows show up in ours' Motion list | done |

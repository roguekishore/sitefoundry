---
name: recreate-site
description: Recreate an inspiration website as foundry blocks in this repo — faithful to its design (layout, type, spacing, colour) and its motion (scroll reveals, parallax, pinned sections, hover), mobile-first, with original content and placeholders for 3D, video and images — as foundry/sites/<slug>/ (one block per section, page.tsx, and pages/<name>.tsx for any other pages asked for) and a <slug>-theme. The landing page by default; other pages (pricing, about…) only when named. Use when the user gives a website URL to recreate, e.g. "/recreate-site https://huly.io", "/recreate-site https://linear.app linear pricing about" or "recreate linear.app with its pricing page".
argument-hint: <url> [slug] [page…]
---

# Recreate a site

**The job is the design and its motion:** layout, grid and proportions, how tall each section
is, typefaces, type scale and weights, spacing rhythm, colour, radii, borders, depth, and how
things move (on load, while scrolling, on hover). Media is not the job: 3D/WebGL scenes,
videos, photos, illustrations and product screenshots become placeholders of the same size
and shape. Time goes into getting the design and motion right, not into rebuilding artwork.

Arguments: `$ARGUMENTS`: a URL, then optionally a slug, then optionally page names.
If no URL was given, ask for one and stop.

**Slug:** the second argument, or the site's name from its domain (`https://huly.io` →
`huly`, `https://www.linear.app/home` → `linear`); lowercase kebab-case.

**Pages:** the landing page (the URL given) is always the job. **Other pages only when the
user names them**: as further arguments (`pricing about`, `/company`) or in their words
("with the pricing and about pages"). Nothing named: landing page only. Don't add pages
the user didn't ask for.

**Existing slug:** if `foundry/sites/<slug>/` exists and pages are named, add those pages to
it (reuse its theme and blocks; don't redo the landing page). If it exists and no pages are
named, ask whether to continue that recreation or use another slug before doing anything else.
A folder holding only `_reference/` (captured in advance, see 1) counts as new.

Below, `<slug>` and `<url>` mean those values.

## Read first

`CLAUDE.md`, `CONTRACT.md` (binding: `pnpm check` enforces it), `foundry/tokens.md`.
Look at one existing site under `foundry/sites/` for the shape of a finished one, and at
`foundry/sites/clerk/clerk-logos/` for a block with its own CSS animation.

## 1. Capture and study

**Captured in advance?** If `foundry/sites/<slug>/_reference/precapture.json` exists, the
captures are already there (made by `tools/claude-batch/precapture.mjs`, and this machine may
not reach the site): don't run `capture.mjs` on the original and don't open it any other way.
Its `pages` list gives each page's label (`original-pricing`), or why it couldn't be found:
skip those and say so in the report. A page asked for that isn't in the list at all: skip it
and say so too. Then go on to the study below.

Otherwise, capture now:

```bash
node .claude/skills/recreate-site/capture.mjs <url> foundry/sites/<slug>/_reference
```

For each other page asked for, capture its URL with the page name in the label:
`… capture.mjs <page-url> foundry/sites/<slug>/_reference original-pricing`. Find page URLs
in the landing capture's "The site's own links" (a name like "pricing" may be under
"Get started"); if it isn't there, try `<origin>/<name>`; if that fails too, skip the page
and say so in the report.

What the capture gives you, at 390 and 1440 px:
- `original-<w>-section-NN.png`: **each section at full resolution. Compare these.** The
  full-page image (`-full`) shrinks when you look at it and hides detail.
- `original-<w>-scroll-NN.png`: frames taken while scrolling, one per screen. They show
  reveals mid-way, pinned sections, and what the page looks like in motion.
- `original-design.md`: fonts, sizes, weights, colours, radii, shadows, gradients,
  transitions, `:root` variables, and:
  - **Sections**, each with its height, and **"sized by the window"** when its height follows
    the browser window (a 100vh hero) rather than its content;
  - **Media slots**: size, aspect ratio, fit, radius, and whether it fills the window height;
  - **Motion**: libraries seen, what changed while scrolling (reveals, scrubbed parallax,
    pinned/sticky), looping animations, what changes on hover and with what timing;
  - **Horizontal overflow** at 360/768/1024, and **the site's own links**.

Look at every section crop and every scroll frame. The numbers tell you what; the pictures
tell you how it feels. Font names from Next.js sites are hashed (`__Inter_f367f3` = Inter).

Write `foundry/sites/<slug>/_reference/NOTES.md`:
- **Design language** in your words: palette roles, type scale, spacing rhythm, layout grid,
  shapes, depth.
- **Type:** each typeface the site uses, its classification (geometric / neo-grotesk /
  humanist sans, serif, mono…), width (condensed, normal, wide) and x-height. The open font
  you'll use is the one closest on those traits, named with the reason. Never fall back to
  Inter, Geist or another default unless the original uses it.
- **Section map**, one row per section (and per page):
  `# | section | block | height (window-sized e.g. 100svh / content) | layout at 390 | layout at 1440 | media slots | motion`.
  Big captured "sections" may hold several visual sections: split by what you see.
- **Motion inventory**, one row per effect from the capture's Motion list and the scroll
  frames: section, trigger (load / entering view / scrubbed with scroll / pinned / hover /
  loop), what changes (opacity 0→1, rise 40px, scale 1.1→1, clip…), timing and easing, and
  how you'll build it (see 4). Motion inside media (the 3D scene, the video itself) is
  not in it: that's the placeholder's business.
- **Media slots** and the placeholder each becomes.
- Decisions and their reasons.

Folders starting with `_` stay out of the registry. Don't save the site's HTML, CSS, JS
bundles, images or fonts, and don't scrape them with scripts of your own: `capture.mjs` is
the way to read the site.

## 2. Theme: `<slug>-theme`

Create the item `foundry/themes/<slug>/<slug>-theme/`:
- `meta.json` with `"type": "theme"` and `"site": "<slug>"`;
- one `theme.css` setting every token from `foundry/base/foundry-base/foundry.css`, in
  both `:root` and `.dark`.

Make whichever mode matches the original the faithful one, and the other a sibling in the
same spirit. Map the original's palette onto the token roles (background, card, primary,
muted, accent, border, highlight, glow…), and set typefaces, `--radius`, `--page-width`,
`--page-gutter` and `--section-y` from what you measured.

Fonts: open-licence `@fontsource` / `@fontsource-variable` packages only
(`pnpm add -w "<pkg>"`), imported at the top of theme.css; the choice from NOTES.md.

## 3. Blocks

One block per section (`<slug>-header`, `<slug>-hero`, … `<slug>-footer`), each a folder
`foundry/sites/<slug>/<slug>-<part>/` with `meta.json`, the `.tsx` entry and a
`.demo.tsx`. Sections only another page has are named after it: `<slug>-pricing-plans`.
Pull pieces used more than once (button, badge, card, section heading) out as
`"type": "component"` items and import them as `@foundry/<name>`.

Every block:
- **Works alone** and takes all content as typed, commented props (lists for repeated
  things). Sample content lives in the demo.
- **Uses tokens only.** It must still look right in the gallery under another theme. Where
  it can't (e.g. it depends on a dark backdrop), say so in `notes`.
- **Is mobile-first.** The 390 px version follows the original's 390 capture, which often
  rearranges rather than squeezes the desktop layout. Nothing sticks out sideways at 360,
  768 or 1024.
- **Is as tall as the original's section, by the same rule.** A section the capture marks
  "sized by the window" uses the window height (`min-h-svh`, `h-svh`, or
  `h-[calc(100svh-<gap>)]` when the original leaves a gap), never a fixed rem/px height that
  only happens to match one screen. Media that fills the window is cropped to it like
  `object-fit: cover`. Content-sized sections get their height from padding (`py-section`)
  and content.
- **Placeholders for media.** Every 3D scene, video, image, screenshot or illustration
  becomes a slot: a prop (`media?: ReactNode`, or one per slot) that a real image or video
  can fill later, and when empty a placeholder at the original's size, aspect ratio and
  frame: a token-coloured surface (`bg-muted`, or a soft gradient from the theme's
  `highlight`/`glow`) with the same radius, border and shadow. It is plainly a placeholder:
  no drawing of the product or object (no SVG art, no gradients shaped like it, no mock UI
  built from divs), no three.js/WebGL, no `<video>`. Small UI chrome that is part of the
  layout (buttons, badges, tabs, form fields, icons from lucide-react) is design and is built.
- **Moves like the original** (see 4) and respects reduced motion.
- **Has full meta:** `category`, `tags` (style words and motion words too: dark, glow,
  minimal, bento, parallax, sticky, reveal…), a description that says what it looks like and
  how it moves, `notes`, and `hydrate` when it needs JavaScript.

## 4. Motion

Rebuild every row of the motion inventory. Pick the simplest technique that does it:

| The original does | Build it with |
|---|---|
| hover / focus changes | Tailwind `transition-*` + `hover:` classes, with the capture's duration and easing |
| loops (marquee, pulse, spin) | CSS `@keyframes` in the block's own `.css` file (see `clerk-logos`) |
| load-in of the first screen | CSS `@keyframes` with `animation-fill-mode: both` |
| reveal on entering view (fade, rise, scale, clip; staggered lists) | CSS scroll-driven animation: `animation-timeline: view()` with an `animation-range` (e.g. `entry 0% cover 30%`), stagger with a per-item `animation-delay` or range offset |
| scrubbed with the scroll (parallax, scale, progress) | CSS `animation-timeline: view()` or `scroll()` with `animation-range` |
| pinned / sticky | `position: sticky` inside a taller wrapper; a pinned sequence = sticky + a view timeline on the wrapper |
| beyond CSS (scroll-driven horizontal track, counters, split text by scroll, physics) | the `motion` package (`motion/react`: `useScroll`, `useTransform`, `useInView`), already installed; `"hydrate"` in meta.json |
| smooth scrolling (Lenis, Locomotive) | only if the capture shows it: a small `<slug>-smooth-scroll` component item using `lenis` (`pnpm add -w "lenis"`), used by page.tsx, `"hydrate": "load"` |

Rules:
- **Static HTML shows the content.** CSS scroll-driven animations go inside
  `@supports (animation-timeline: view()) { … }`, so browsers without them show everything
  in place. Never write `opacity: 0` into the markup; a JS reveal needs `"hydrate"` (the
  checker enforces it).
- **Reduced motion:** every animation is off under `prefers-reduced-motion: reduce`
  (`motion-reduce:` classes, or a media query in the `.css`).
- In `.css` files, colours come from tokens (`var(--primary)`), and keyframe names start with
  the block's name (`halo-hero-rise`).
- **Crop with `overflow-clip`, not `overflow-hidden`,** around anything on a view timeline:
  `overflow: hidden` makes the box its own scroll container, the timeline then follows a box
  that never scrolls, and the animation freezes.
- Motion inside media slots isn't rebuilt; the placeholder may move as the original's frame
  does (a parallax drift, a scale-in).

## 5. Pages

- `foundry/sites/<slug>/page.tsx`: the landing page, built only from the blocks, with the
  demo content.
- Each other page asked for: `foundry/sites/<slug>/pages/<name>.tsx` (kebab-case: `pricing`,
  `about`), a default-exported component built the same way. Reuse the site's header,
  footer and components; new sections are new blocks.
- The gallery shows them at `#/site/<slug>` (pages as tabs); a page alone:
  `preview.html?site=<slug>&page=<name>&theme=<slug>-theme&mode=<light|dark>`.

## 6. Originality

Copy the design language: layout, rhythm, type, colour, depth, motion. **Never the content:**
- invent a fictional company and product, clearly different from the original: a name that
  isn't a near-copy of theirs (not a rhyme, a one-letter swap or the same word pattern), and
  your own headlines and copy in a similar voice and length, not their sentences reworded;
- no logos or logo shapes (a plain wordmark in the theme's font, or a lucide icon); press or
  customer logos become plain-text names of fictional publications;
- no text, product screenshots, illustrations, photos, videos, icon sets they made, or code
  from the original; media slots are placeholders (see 3).

## 7. Verify

1. `pnpm check <your item names…>`: 0 errors. Then `pnpm build:registry` succeeds.
2. Start `pnpm gallery` in the background (unless `http://localhost:4400` already answers:
   then use that one and leave it running), then capture yours the same way, per page:
   ```bash
   node .claude/skills/recreate-site/capture.mjs "http://localhost:4400/preview.html?site=<slug>&theme=<slug>-theme&mode=<light|dark>" foundry/sites/<slug>/_reference ours
   node .claude/skills/recreate-site/capture.mjs "http://localhost:4400/preview.html?site=<slug>&page=<name>&theme=<slug>-theme&mode=<light|dark>" foundry/sites/<slug>/_reference ours-<name>
   ```
   If the preview says "no such page" for a site or page you just created, a running gallery
   missed the new folder: `touch apps/gallery/src/catalog.ts` (no change to it) and capture again.
3. Compare **section by section**: `original-390-section-NN.png` with the matching
   `ours-390-section-NN.png`, then the same at 1440 (match by content if the numbering
   differs). Then compare `ours-design.md` with `original-design.md`:
   - every section the original marks "sized by the window" is marked so in yours;
   - every row of your motion inventory shows up in yours' Motion list (same kind: reveal,
     scrubbed, pinned; same direction and rough distance), and hover changes match;
   - yours fits at 360, 768 and 1024 (no horizontal overflow).
4. Add the round to NOTES.md as a table, `section | 390 | 1440 | motion | fixed?`, listing
   each difference in layout, proportion, height, spacing, type (font, scale, weight),
   colour, depth or motion. Fix them, capture again, and add the next round.
5. Do at least two rounds. Stop when a quick glance at each section pair would mistake one
   for the other (apart from content and media placeholders, which match in place, size and
   shape) and the motion checks in 3 pass.
6. Open two blocks in the gallery under a different theme (e.g. `sample-ember`) to confirm
   they re-theme.

## Git

Other agents may be working in this repo at the same time.
- Your paths: `foundry/sites/<slug>/`, `foundry/themes/<slug>/`, and `package.json` +
  `pnpm-lock.yaml` when you added packages.
- Use `git add -- <paths>` then `git commit -m "<slug>: <what>" -- <paths>`. Commit after
  the theme, after every few blocks, and after every comparison round.
- **Finish with a commit. The task isn't done while any of your work is uncommitted.**
  After the last `pnpm check` and `pnpm build:registry`, commit your paths, then the
  registry output in its own commit: `public/r/<slug>-*` (files and folders),
  `public/r/index.json`, `foundry.paths.json` and `tsconfig.paths.json`, with the message
  `registry: build <slug>`. Then run `git status --porcelain -- <your paths> public/r` and
  confirm nothing of yours is left. (Screenshots named `_reference/ours-*` are
  git-ignored; that's intended.)
- Never push, reset, stash, rebase or checkout. If git or pnpm is busy, wait and retry.
- Don't edit anything outside your folders. If the gallery, tools, base or tokens need a
  change, stop and say so in your report.

## Report

End with:
- the commits made (`git log --oneline`), and confirmation nothing of yours is uncommitted;
- the pages made, and the blocks and components, one line each;
- the motion rebuilt (one line per inventory row: how), and anything skipped and why;
- what still differs from the original and why, and the media slots left as placeholders;
- the fonts used (and any substitutions, with the reason);
- anything that needs the user's decision.

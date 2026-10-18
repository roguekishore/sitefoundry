---
name: recreate-site
description: Recreate an inspiration website's landing page as foundry blocks in this repo — faithful to its design (layout, type, spacing, colour), mobile-first, with original content and placeholders for 3D, video and images — as foundry/sites/<slug>/ (one block per section, plus page.tsx) and a <slug>-theme. Use when the user gives a website URL to recreate, e.g. "/recreate-site https://huly.io" or "recreate linear.app".
argument-hint: <url> [slug]
---

# Recreate a site

**The job is the design:** layout, grid and proportions, typefaces, type scale and
weights, spacing rhythm, colour, radii, borders and depth. Media is not the job: 3D/WebGL
scenes, videos, photos, illustrations and product screenshots become placeholders of the
same size and shape (see 3). Time goes into getting the design right, not into rebuilding
artwork.

Arguments: `$ARGUMENTS`: a URL, optionally followed by a slug. If no URL was given, ask
for one and stop.

**Slug:** the second argument, or the site's name from its domain (`https://huly.io` →
`huly`, `https://www.linear.app/home` → `linear`); lowercase kebab-case. If
`foundry/sites/<slug>/` already exists, ask whether to continue that recreation or use
another slug before doing anything else.

Below, `<slug>` and `<url>` mean those values.

## Read first

`CLAUDE.md`, `CONTRACT.md` (binding: `pnpm check` enforces it), `foundry/tokens.md`.
Look at one existing site under `foundry/sites/` for the shape of a finished one.

## 1. Study the original

```bash
node .claude/skills/recreate-site/capture.mjs <url> foundry/sites/<slug>/_reference
```

This writes full-page and first-screen screenshots at 390 and 1440 px, and
`original-design.md`: the fonts, sizes, weights, colours, backgrounds, radii, shadows,
gradients, `:root` variables and sections the page actually uses. Look at every
screenshot. The numbers tell you what; the pictures tell you how it feels.

- Big "sections" in the capture may hold several visual sections. Split by what you see.
- Font names from Next.js sites are hashed (`__Inter_f367f3` = Inter).
- Note each media slot (3D scene, video, image, screenshot, illustration): where it sits,
  its size and aspect ratio, and its frame (radius, border, shadow, glow behind it). That
  is all you take from it.
- Motion is secondary: note hover and transition styles from the screenshots or a quick
  look; don't study scroll choreography.

Write `foundry/sites/<slug>/_reference/NOTES.md`:
- the design language in your words (palette roles, type scale, spacing rhythm, layout
  grid, shapes, depth);
- the media slots and the placeholder each becomes;
- the section list you'll build, as `<slug>-<part>` names;
- decisions and their reasons.

Folders starting with `_` stay out of the registry. Don't save the site's HTML, JS bundles,
images or fonts.

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
(`pnpm add -w <pkg>`), imported at the top of theme.css. If the original font isn't open,
pick the closest open one and say so in NOTES.md.

## 3. Blocks

One block per section (`<slug>-header`, `<slug>-hero`, … `<slug>-footer`), each a folder
`foundry/sites/<slug>/<slug>-<part>/` with `meta.json`, the `.tsx` entry and a
`.demo.tsx`. Pull pieces used more than once (button, badge, card, section heading) out as
`"type": "component"` items and import them as `@foundry/<name>`.

Every block:
- **Works alone** and takes all content as typed, commented props (lists for repeated
  things). Sample content lives in the demo.
- **Uses tokens only.** It must still look right in the gallery under another theme. Where
  it can't (e.g. it depends on a dark backdrop), say so in `notes`.
- **Is mobile-first.** The 390 px version is designed properly, in the original's
  language. Not the desktop layout squashed down.
- **Placeholders for media.** Every 3D scene, video, image, screenshot or illustration
  becomes a slot: a prop (`media?: ReactNode`, or one per slot) that a real image or video
  can fill later, and when empty a placeholder at the original's size, aspect ratio and
  frame: a token-coloured surface (`bg-muted`, or a soft gradient from the theme's
  `highlight`/`glow`) with the same radius, border and shadow. No three.js/WebGL, no
  `<video>`, no hand-drawn SVG art, no detailed mock UI built from divs. Small UI chrome
  that is part of the layout (buttons, badges, tabs, form fields, icons from lucide-react)
  is design and is built.
- **Simple motion only:** CSS hover and transition states in the original's style.
  Skip scroll-driven sequences and JS animation. It respects reduced motion.
- **Has full meta:** `category`, `tags` (style words too: dark, glow, minimal, bento…),
  a description that says what it looks like, and `notes`.

## 4. The page

`foundry/sites/<slug>/page.tsx`: the whole recreation, built only from these blocks, with
the demo content.

## 5. Originality

Copy the design language: layout, rhythm, type, colour, depth, motion. **Never the
content:**
- no text, logos, product screenshots, illustrations, photos, videos, icon sets they
  made, or code from the original;
- write placeholder copy for a fictional product or business in a similar voice;
- media slots are placeholders (see 3); icons come from lucide-react.

## 6. Verify

1. `pnpm check`: 0 errors. Then `pnpm build:registry` succeeds.
2. Start `pnpm gallery` in the background, then capture yours the same way:
   ```bash
   node .claude/skills/recreate-site/capture.mjs "http://localhost:4400/preview.html?site=<slug>&theme=<slug>-theme&mode=<light|dark>" foundry/sites/<slug>/_reference ours
   ```
3. Compare `ours-*` with `original-*` at 390 and 1440 px, section by section. Fix
   differences in layout, proportion, spacing, type scale, weight, colour and depth.
   Repeat until a quick glance would mistake one for the other, apart from the content and
   the media (placeholders should match the original's in place, size and shape).
4. Open two blocks in the gallery under a different theme (e.g. `sample-ember`) to confirm
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
- the blocks and components made, one line each;
- what differs from the original and why, and the media slots left as placeholders;
- the fonts used (and any substitutions);
- anything that needs the user's decision.

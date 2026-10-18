---
name: recreate-site
description: Recreate an inspiration website's landing page as foundry blocks in this repo — faithful to its design language, mobile-first, with original content — as foundry/sites/<slug>/ (one block per section, plus page.tsx) and a <slug>-theme. Use when the user gives a website URL to recreate, e.g. "/recreate-site https://huly.io" or "recreate linear.app".
argument-hint: <url> [slug]
---

# Recreate a site

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
- For motion, open the page yourself with Playwright (hover, scroll positions) and note
  what moves, when, and how fast.

Write `foundry/sites/<slug>/_reference/NOTES.md`:
- the design language in your words (palette roles, type scale, spacing rhythm, shapes,
  depth, motion);
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
- **Moves like the original:** CSS first, `motion` when needed. It respects reduced
  motion, and sets `"hydrate"` if it needs JavaScript.
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
- make your own art: SVG or CSS shapes, gradients, mock UI built from divs, open-licence
  icons (lucide-react).

## 6. Verify

1. `pnpm check`: 0 errors. Then `pnpm build:registry` succeeds.
2. Start `pnpm gallery` in the background, then capture yours the same way:
   ```bash
   node .claude/skills/recreate-site/capture.mjs "http://localhost:4400/preview.html?site=<slug>&theme=<slug>-theme&mode=<light|dark>" foundry/sites/<slug>/_reference ours
   ```
3. Compare `ours-*` with `original-*` at 390 and 1440 px, section by section. Fix
   differences in proportion, spacing, type scale, colour and depth. Repeat until a quick
   glance would mistake one for the other (apart from the content).
4. Open two blocks in the gallery under a different theme (e.g. `sample-ember`) to confirm
   they re-theme.

## Git

Other agents may be working in this repo at the same time.
- Commit only `foundry/sites/<slug>/`, `foundry/themes/<slug>/`, and `package.json` +
  `pnpm-lock.yaml` when you added packages.
- Use `git add -- <paths>` then `git commit -m "<slug>: <what>" -- <paths>`. Commit after
  the theme, after every few blocks, and at the end.
- Don't commit `public/r/`, `foundry.paths.json` or `tsconfig.paths.json`; they're
  regenerated.
- Never push, reset, stash, rebase or checkout. If git or pnpm is busy, wait and retry.
- Don't edit anything outside your folders. If the gallery, tools, base or tokens need a
  change, stop and say so in your report.

## Report

End with:
- the blocks and components made, one line each;
- what differs from the original and why;
- the fonts used (and any substitutions);
- anything that needs the user's decision.

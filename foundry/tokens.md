# Tokens

The fixed list of names every block reads and every theme fills in. A block never contains
a colour, font or size of its own; it uses these names, so blocks from different sites
match when they're put on one page.

**Rule: names are only ever added, never renamed or given a new meaning.** A new name gets a
default in `foundry/base/foundry-base/foundry.css` in the same change, so older themes keep
working.

The colour names are shadcn's, so most shadcn-ecosystem components work with our themes
unchanged.

## Colours (defined in both `:root` and `.dark`)

| Token | Tailwind | Meaning |
|---|---|---|
| `--background` / `--foreground` | `bg-background` `text-foreground` | page background and main text |
| `--card` / `--card-foreground` | `bg-card` | raised panels |
| `--popover` / `--popover-foreground` | `bg-popover` | menus, dropdowns, overlays |
| `--primary` / `--primary-foreground` | `bg-primary` `text-primary-foreground` | the brand colour (CTAs) and text on it |
| `--secondary` / `--secondary-foreground` | `bg-secondary` | a quieter filled surface |
| `--muted` / `--muted-foreground` | `bg-muted` `text-muted-foreground` | subdued surfaces; secondary text |
| `--accent` / `--accent-foreground` | `bg-accent` | hover and highlight surfaces |
| `--destructive` / `--destructive-foreground` | `bg-destructive` | errors |
| `--border`, `--input`, `--ring` | `border-border` `ring-ring` | hairlines, form borders, focus rings |
| `--highlight` / `--highlight-foreground` | `text-highlight` | a second, sparing emphasis colour |
| `--glow` | `bg-glow` `shadow-glow/40` | the colour of glows and gradient light |
| `--chart-1` … `--chart-5` | `bg-chart-1` | data colours |
| `--sidebar`, `--sidebar-foreground`, `--sidebar-primary`, `--sidebar-primary-foreground`, `--sidebar-accent`, `--sidebar-accent-foreground`, `--sidebar-border`, `--sidebar-ring` | `bg-sidebar` … | shadcn sidebar set (for vault items) |

## Type, shape, layout (defined in `:root`)

| Token | Tailwind | Meaning |
|---|---|---|
| `--typeface-body` | `font-sans` | body text |
| `--typeface-display` | `font-display` | headings |
| `--typeface-mono` | `font-mono` | code, figures |
| `--radius` | `rounded-sm/md/lg/xl/2xl` | corner radius (`lg` = the token) |
| `--page-width` | `max-w-page` | widest content width |
| `--page-gutter` | `px-gutter` | side padding on phones and up |
| `--section-y` | `py-section` | vertical padding of a section |

Opacity works on every colour: `bg-primary/10`, `border-foreground/15`.

## Dark mode

Themes give values for `:root` (light) and `.dark`. A site that's dark-only still fills
in both; blocks use `dark:` only with token colours, never with palette colours.

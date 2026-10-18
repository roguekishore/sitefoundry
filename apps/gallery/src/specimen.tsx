// What a theme looks like: its colours, type, radius and a few buttons, all read from the tokens.
const COLOURS = [
  ["background", "foreground"],
  ["card", "card-foreground"],
  ["primary", "primary-foreground"],
  ["secondary", "secondary-foreground"],
  ["muted", "muted-foreground"],
  ["accent", "accent-foreground"],
  ["highlight", "highlight-foreground"],
  ["destructive", "destructive-foreground"],
] as const;

export function ThemeSpecimen() {
  return (
    <div className="space-y-8 p-gutter py-8">
      <div>
        <p className="font-display text-4xl font-semibold leading-tight tracking-tight">Display type, set in the theme.</p>
        <p className="mt-3 max-w-prose text-muted-foreground">
          Body text in the theme's body face. Muted text sits here, with a{" "}
          <span className="font-medium text-highlight">highlight</span> for sparing emphasis.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {COLOURS.map(([bg, fg]) => (
          <div key={bg} className="overflow-hidden rounded-lg border">
            <div className="flex h-16 items-end p-2 text-xs font-medium" style={{ background: `var(--${bg})`, color: `var(--${fg})` }}>
              Aa
            </div>
            <p className="px-2 py-1.5 font-mono text-[11px] text-muted-foreground">{bg}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Primary</span>
        <span className="rounded-lg border bg-background px-4 py-2 text-sm font-medium">Secondary</span>
        <span className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">Accent</span>
        <span className="size-10 rounded-full bg-glow/60 blur-md" title="glow" />
      </div>
      <div className="flex gap-3">
        {["rounded-sm", "rounded-md", "rounded-lg", "rounded-xl", "rounded-2xl"].map((r) => (
          <div key={r} className={`size-12 border-2 border-primary bg-primary/10 ${r}`} title={r} />
        ))}
      </div>
    </div>
  );
}

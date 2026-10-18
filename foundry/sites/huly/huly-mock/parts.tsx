// Small pieces shared by the mock vignettes.
import { cn } from "@foundry/foundry-utils";

const TONES = [
  "from-glow to-chart-5",
  "from-highlight to-chart-1",
  "from-chart-2 to-chart-3",
  "from-chart-4 to-highlight",
  "from-chart-3 to-glow",
  "from-chart-5 to-chart-1",
];

/** A person: initials in a gradient circle. */
export function Avatar({ initials, index = 0, className }: { initials: string; index?: number; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-linear-to-br text-[0.5625rem] font-semibold text-foreground ring-2 ring-background",
        TONES[index % TONES.length],
        className,
      )}
    >
      {initials}
    </span>
  );
}

export function AvatarStack({ people, more, className }: { people: string[]; more?: string; className?: string }) {
  return (
    <span className={cn("flex items-center", className)}>
      {people.map((p, i) => (
        <Avatar key={i} initials={p} index={i} className={i > 0 ? "-ml-2" : undefined} />
      ))}
      {more && <span className="ml-1.5 text-[0.625rem] text-current/60">{more}</span>}
    </span>
  );
}

/** Dotted halftone texture, faded by a mask. */
export function Halftone({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 bg-[radial-gradient(color-mix(in_oklab,var(--foreground)_14%,transparent)_0.6px,transparent_0.6px)] bg-size-[4px_4px]",
        className,
      )}
    />
  );
}

/** A soft coloured light. Position and colour come from className. */
export function Glow({ className }: { className?: string }) {
  return <div aria-hidden className={cn("pointer-events-none absolute rounded-full blur-3xl", className)} />;
}

export const panel = "rounded-xl border border-foreground/10 bg-popover/90 shadow-xl shadow-background/70 backdrop-blur";
export const lightPanel = "rounded-xl bg-foreground/85 text-background shadow-xl shadow-background/60 backdrop-blur";

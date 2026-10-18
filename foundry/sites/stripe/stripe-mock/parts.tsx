// Shared pieces for the stripe mock UI: window chrome, the floating-panel shadow, small rows.
import type { ReactNode } from "react";
import { Lock } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

/** Stripe's soft navy float: a long, tight shadow under the panel plus a closer one. */
export const float =
  "shadow-[0_30px_45px_-30px_color-mix(in_oklab,var(--foreground)_30%,transparent),0_18px_36px_-18px_color-mix(in_oklab,var(--foreground)_12%,transparent)]";

/** A browser window: three dots and a centred address pill above the content. */
export function BrowserWindow({ url, children, className }: { url?: string; children: ReactNode; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-lg border border-border bg-card text-card-foreground", float, className)}>
      <div className="flex h-7 items-center gap-1 border-b border-border bg-muted px-2.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="size-1.5 rounded-full bg-foreground/15" />
        ))}
        {url && (
          <span className="mx-auto flex h-4 min-w-0 items-center gap-1 truncate rounded-full bg-background px-3 text-[0.5rem] text-muted-foreground sm:w-1/2 sm:justify-center">
            <Lock className="size-2 shrink-0" />
            {url}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

/** A label and value on one line, divided from the next by a hairline. */
export function Row({ label, value, strong, className }: { label: ReactNode; value: ReactNode; strong?: boolean; className?: string }) {
  return (
    <div className={cn("flex items-center justify-between gap-2 border-b border-border py-1.5 last:border-0", strong && "font-normal text-foreground", className)}>
      <span className="truncate">{label}</span>
      <span className="shrink-0 tabular-nums">{value}</span>
    </div>
  );
}

/** A round initial in a soft gradient: stands in for a merchant or person's avatar. */
export function Initial({ letter, hue = 0, className }: { letter: string; hue?: number; className?: string }) {
  const fills = [
    "from-chart-1 to-chart-4",
    "from-chart-3 to-chart-2",
    "from-primary to-chart-5",
    "from-chart-2 to-chart-1",
    "from-chart-4 to-chart-1",
  ];
  return (
    <span
      className={cn(
        "flex size-3.5 shrink-0 items-center justify-center rounded-full bg-linear-to-br text-[0.45rem] font-normal text-primary-foreground",
        fills[hue % fills.length],
        className,
      )}
    >
      {letter}
    </span>
  );
}

/** Deterministic pseudo-random number in [0, 1) for decorative patterns (same on server and client). */
export function noise(i: number, seed = 1): number {
  const x = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

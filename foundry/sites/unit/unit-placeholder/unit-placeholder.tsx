import { cn } from "@foundry/foundry-utils";

const tones = {
  /** a quiet tinted surface: illustrations and article images */
  muted: "bg-muted",
  /** fades from the muted tint into the card: product illustrations that sit loose on a card */
  fade: "bg-linear-to-b from-muted to-muted/30",
  /** the lilac panel behind a customer story */
  accent: "bg-linear-to-br from-accent to-accent/50",
  /** pastel light washes: the aurora video behind the hero */
  aurora:
    "bg-background bg-[radial-gradient(40%_60%_at_12%_80%,color-mix(in_oklab,var(--highlight)_45%,transparent),transparent),radial-gradient(35%_55%_at_35%_30%,color-mix(in_oklab,var(--glow)_35%,transparent),transparent),radial-gradient(35%_60%_at_70%_75%,color-mix(in_oklab,var(--glow)_55%,transparent),transparent),radial-gradient(30%_50%_at_92%_60%,color-mix(in_oklab,var(--chart-1)_45%,transparent),transparent)] blur-2xl",
  /** a flat dark tile (network marks, seals) */
  solid: "bg-foreground",
  /** chart tones for coloured brand tiles */
  "chart-1": "bg-chart-1",
  "chart-2": "bg-chart-2",
  "chart-3": "bg-chart-3",
  "chart-4": "bg-chart-4",
  "chart-5": "bg-chart-5",
} as const;

export type UnitPlaceholderTone = keyof typeof tones;

export interface UnitPlaceholderProps {
  /** the surface */
  tone?: UnitPlaceholderTone;
  /** size, aspect ratio and radius */
  className?: string;
}

/** Stands in for media. Decorative: it never draws the thing it replaces. */
export function UnitPlaceholder({ tone = "muted", className }: UnitPlaceholderProps) {
  return <div aria-hidden className={cn(tones[tone], className)} />;
}

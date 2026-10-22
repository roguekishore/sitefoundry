import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

/** The soft colour that rises from the card's foot (the original: 40% clear, then 20% → 40% tint). */
const tints = {
  none: "",
  peach: "bg-linear-to-b from-transparent from-40% via-chart-1/20 via-90% to-chart-1/40",
  green: "bg-linear-to-b from-transparent from-40% via-chart-2/20 via-90% to-chart-2/40",
  blue: "bg-linear-to-b from-transparent from-40% via-chart-3/20 via-90% to-chart-3/40",
  pink: "bg-linear-to-b from-transparent from-40% via-chart-4/20 via-90% to-chart-4/40",
  teal: "bg-linear-to-b from-transparent via-chart-5/20 via-90% to-chart-5/40",
  lavender: "bg-linear-to-b from-transparent via-glow/40 via-90% to-glow/40",
} as const;

/** A glow that blooms from low on the right, as on the AI cards. */
const blooms = {
  none: "",
  peach: "bg-[radial-gradient(circle_at_75%_100%,color-mix(in_oklab,var(--chart-1)_45%,transparent),color-mix(in_oklab,var(--chart-1)_20%,transparent)_12%,transparent_64%)]",
  green: "bg-[radial-gradient(circle_at_75%_100%,color-mix(in_oklab,var(--chart-2)_40%,transparent),color-mix(in_oklab,var(--chart-2)_15%,transparent)_12%,transparent_64%)]",
  blue: "bg-[radial-gradient(circle_at_75%_100%,color-mix(in_oklab,var(--chart-3)_35%,transparent),color-mix(in_oklab,var(--chart-3)_12%,transparent)_12%,transparent_64%)]",
  pink: "bg-[radial-gradient(circle_at_75%_100%,color-mix(in_oklab,var(--chart-4)_55%,transparent),color-mix(in_oklab,var(--chart-4)_22%,transparent)_12%,transparent_64%)]",
  teal: "bg-[radial-gradient(circle_at_75%_100%,color-mix(in_oklab,var(--chart-5)_55%,transparent),color-mix(in_oklab,var(--chart-5)_22%,transparent)_12%,transparent_64%)]",
  lavender: "bg-[radial-gradient(circle_at_75%_100%,color-mix(in_oklab,var(--glow)_50%,transparent),color-mix(in_oklab,var(--glow)_30%,transparent)_14%,transparent_64%)]",
} as const;

export type BevelTint = keyof typeof tints;

export interface BevelCardProps {
  /** the soft colour rising from the foot of the card */
  tint?: BevelTint;
  /** rise: a straight wash up from the bottom edge; bloom: a round glow low on the right */
  wash?: "rise" | "bloom";
  /** the card's contents (it is a positioning context and clips them) */
  children?: ReactNode;
  /** size and padding */
  className?: string;
}

/**
 * The site's one surface: a pale blue-grey card with 32px corners that clips what it holds
 * (phones run off its edges), tinted softly from the foot.
 */
export function BevelCard({ tint = "none", wash = "rise", children, className }: BevelCardProps) {
  return (
    <div className={cn("relative isolate overflow-clip rounded-[calc(var(--radius)*2)] bg-card text-card-foreground", className)}>
      {tint !== "none" && <div aria-hidden className={cn("absolute inset-0 -z-10", wash === "rise" ? tints[tint] : blooms[tint])} />}
      {children}
    </div>
  );
}

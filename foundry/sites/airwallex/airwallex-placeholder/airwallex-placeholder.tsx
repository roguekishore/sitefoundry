import { cn } from "@foundry/foundry-utils";

const tones = {
  /** a cool-grey surface (photos, device shots) */
  soft: "bg-muted ring-1 ring-border ring-inset",
  /** a white floating UI shot with the original's soft shadow */
  shot: "bg-card ring-1 ring-border ring-inset shadow-[0_4px_16px_0_color-mix(in_oklab,var(--foreground)_12%,transparent)]",
  /** frosted white, for shots peeking out of the gradient cards */
  frost: "bg-card/85",
  /** a dim panel for the dark bands */
  dim: "bg-foreground/10 ring-1 ring-border ring-inset",
} as const;

export interface AirwallexPlaceholderProps {
  /** the surface */
  tone?: keyof typeof tones;
  /** size, aspect ratio and radius */
  className?: string;
}

/** Stands in for media. Decorative: it never draws the thing it replaces. */
export function AirwallexPlaceholder({ tone = "soft", className }: AirwallexPlaceholderProps) {
  return <div aria-hidden className={cn(tones[tone], className)} />;
}

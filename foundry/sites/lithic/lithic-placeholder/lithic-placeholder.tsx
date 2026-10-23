import { cn } from "@foundry/foundry-utils";

const tones = {
  /** full-panel artwork: a soft glow wash that fades to the panel */
  wash: "bg-radial-[at_70%_30%] from-glow/30 via-glow/10 to-transparent to-70%",
  /** a white floating card with the original's soft 0 16px 32px shadow */
  card: "bg-card shadow-[0_16px_32px_0_color-mix(in_oklab,var(--foreground)_10%,transparent)]",
  /** a dark frame for screenshots and app windows */
  ink: "bg-foreground/85 shadow-[0_16px_32px_0_color-mix(in_oklab,var(--foreground)_25%,transparent)]",
  /** a dim surface: renders on dark panels, avatars, badges */
  dim: "bg-foreground/10 ring-1 ring-border ring-inset",
} as const;

export interface LithicPlaceholderProps {
  /** the surface */
  tone?: keyof typeof tones;
  /** size, aspect ratio and radius */
  className?: string;
}

/** Stands in for media. Decorative: it never draws the thing it replaces. */
export function LithicPlaceholder({ tone = "dim", className }: LithicPlaceholderProps) {
  return <div aria-hidden className={cn(tones[tone], className)} />;
}

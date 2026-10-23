import { cn } from "@foundry/foundry-utils";

const tones = {
  /** a soft violet wash: the hero video and the migrate photo */
  violet: "bg-accent bg-linear-to-br from-secondary/70 via-accent to-highlight/25",
  /** the powder page colour: product art inside the violet band */
  powder: "bg-background",
  /** a muted photo tone: customer story photos */
  photo: "bg-muted bg-linear-to-b from-muted to-foreground/25",
} as const;

export interface PuzzlePlaceholderProps {
  /** the surface */
  tone?: keyof typeof tones;
  /** size, aspect ratio and radius */
  className?: string;
}

/** Stands in for media. Decorative: it never draws the thing it replaces. */
export function PuzzlePlaceholder({ tone = "violet", className }: PuzzlePlaceholderProps) {
  return <div aria-hidden className={cn(tones[tone], className)} />;
}

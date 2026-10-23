import { cn } from "@foundry/foundry-utils";

const tones = {
  /** a pale glassy panel for dark bands */
  "on-dark": "bg-secondary-foreground/10 ring-1 ring-secondary-foreground/20 ring-inset",
  /** a white screen panel set inside a coloured card */
  screen: "bg-card shadow-[0_1.5rem_3rem_-1.5rem] shadow-foreground/25 ring-1 ring-border",
  /** a soft wash for photos */
  photo: "bg-muted bg-linear-to-br from-glow/30 via-muted to-primary/15",
  /** a quiet flat surface */
  flat: "bg-muted",
} as const;

export interface PilotPlaceholderProps {
  /** the surface */
  tone?: keyof typeof tones;
  /** size, aspect ratio, radius and position */
  className?: string;
}

/** Stands in for media. Decorative: it never draws the thing it replaces. */
export function PilotPlaceholder({ tone = "photo", className }: PilotPlaceholderProps) {
  return <div aria-hidden className={cn(tones[tone], className)} />;
}

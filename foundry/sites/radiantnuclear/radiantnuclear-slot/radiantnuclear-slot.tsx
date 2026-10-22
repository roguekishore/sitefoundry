import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface RadiantnuclearSlotProps {
  /** the real image or video; leave empty for the placeholder */
  media?: ReactNode;
  /** placeholder colour: deeper cream, a pale teal wash, or a dark 'night' gradient (for slots under white type) */
  tone?: "paper" | "wash" | "night";
  /** lay a bottom-up darkening over the media, for type set on top of it */
  shade?: "soft" | "strong";
  className?: string;
  children?: ReactNode;
}

const tones = {
  paper: "bg-muted",
  wash: "bg-linear-to-br from-glow/45 via-muted to-muted",
  night: "bg-linear-to-b from-foreground/60 via-foreground/75 to-foreground/90 dark:from-muted dark:via-card dark:to-background",
};

// In dark mode both stay dark (built from the dark background), so light type still reads.
// The original's photo gradients: `to top, 70% → 10% → 20%` (videos) and `80% → 35% → 20%` (hero).
const shades = {
  soft: "bg-linear-to-t from-foreground/70 via-foreground/10 via-50% to-foreground/20 dark:from-background/70 dark:via-background/10 dark:to-background/20",
  strong: "bg-linear-to-t from-foreground/80 via-foreground/35 via-45% to-foreground/20 dark:from-background/80 dark:via-background/35 dark:to-background/20",
};

/** A media frame: whatever is passed fills it (cover); empty, it is a plain placeholder surface. */
export function RadiantnuclearSlot({ media, tone = "paper", shade, className, children }: RadiantnuclearSlotProps) {
  return (
    <div className={cn("relative overflow-clip", !media && tones[tone], className)}>
      {media && <div className="absolute inset-0 [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover">{media}</div>}
      {media && shade && <div aria-hidden className={cn("absolute inset-0", shades[shade])} />}
      {children}
    </div>
  );
}

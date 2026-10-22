import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface EightsleepMediaProps {
  /** an <img> or <video>; it is stretched to cover the frame */
  media?: ReactNode;
  /** placeholder look when empty: a muted-grey surface · sky (glow to pale) · night (black to navy) · faint (a light veil, for dark scopes) · inverse (a dark veil, for light cards inside dark scopes) */
  tone?: "muted" | "sky" | "night" | "faint" | "inverse";
  className?: string;
}

const tones = {
  muted: "bg-muted-foreground/25",
  sky: "bg-glow bg-linear-to-b from-transparent from-20% to-foreground/45",
  night: "bg-linear-to-b from-background via-secondary to-accent",
  faint: "bg-foreground/10",
  inverse: "bg-background/10",
};

export function EightsleepMedia({ media, tone = "muted", className }: EightsleepMediaProps) {
  return (
    <div className={cn("relative overflow-clip", !media && tones[tone], className)} aria-hidden={media ? undefined : true}>
      {media && <div className="absolute inset-0 [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover">{media}</div>}
    </div>
  );
}

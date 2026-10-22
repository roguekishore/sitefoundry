import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface NekoSlotProps {
  /** the real image or video; leave empty for the placeholder */
  media?: ReactNode;
  /** placeholder colour: muted grey, lemon wash, slate (dark enough for white text) or ice blue */
  tone?: "muted" | "lemon" | "slate" | "ice";
  className?: string;
  children?: ReactNode;
}

const tones = {
  muted: "bg-muted",
  lemon: "bg-linear-to-br from-highlight/70 to-muted",
  slate: "bg-linear-to-b from-muted-foreground/35 to-muted-foreground/60",
  ice: "bg-linear-to-br from-accent to-glow/40",
};

/** A media frame: whatever is passed fills it (cover); empty, it is a plain placeholder surface. */
export function NekoSlot({ media, tone = "muted", className, children }: NekoSlotProps) {
  return (
    <div className={cn("relative overflow-clip", !media && tones[tone], className)}>
      {media && <div className="absolute inset-0 [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover">{media}</div>}
      {children}
    </div>
  );
}

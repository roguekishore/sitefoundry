import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RollersRise } from "@foundry/rollers-rise";

export interface RollersBannerProps {
  /** the full-width 16:9 photo; a placeholder when empty */
  media?: ReactNode;
  className?: string;
}

/** A full-bleed 16:9 photo between bands, fading up as it arrives. */
export function RollersBanner({ media, className }: RollersBannerProps) {
  return (
    <section className={cn("bg-background", className)}>
      <RollersRise className="aspect-video overflow-clip bg-muted">{media}</RollersRise>
    </section>
  );
}

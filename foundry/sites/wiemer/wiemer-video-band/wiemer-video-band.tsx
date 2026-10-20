import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface WiemerVideoBandProps {
  /** the video (a <video autoPlay muted loop playsInline>, cover) or a still; empty shows a placeholder */
  media?: ReactNode;
  /** what the band shows, for screen readers when the media has no text of its own */
  label?: string;
  className?: string;
}

/** Edge-to-edge 16:9 band (9:16 on phones) for one product video. */
export function WiemerVideoBand({ media, label, className }: WiemerVideoBandProps) {
  return (
    <section aria-label={label} className={cn("bg-background", className)}>
      <div className="aspect-[9/16] w-full overflow-clip bg-muted md:aspect-video [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover">
        {media}
      </div>
    </section>
  );
}

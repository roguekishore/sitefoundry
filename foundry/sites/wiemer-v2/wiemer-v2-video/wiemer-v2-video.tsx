import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface WiemerV2VideoProps {
  /** the film (a muted, looping <video>, or an <img>); cropped to fill, a grey band when empty */
  media?: ReactNode;
  /** for screen readers: what the film shows */
  label: string;
  className?: string;
}

/**
 * A full-bleed film band with no frame: portrait 9:16 on phones, widescreen 16:9 from lg.
 * Made for a looping product film on a plain light ground.
 */
export function WiemerV2Video({ media, label, className }: WiemerV2VideoProps) {
  return (
    <section aria-label={label} className={cn("aspect-[9/16] w-full overflow-clip bg-muted lg:aspect-video [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover", className)}>
      {media}
    </section>
  );
}

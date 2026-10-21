import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./mrcresidencesbocaraton-picture.css";

export interface MrcresidencesbocaratonPictureProps {
  /** an <img> or <video>; it covers the frame. Empty: a placeholder */
  media?: ReactNode;
  /** desktop height: the window's height, or a wide 1440:753 frame */
  size?: "window" | "wide";
  /** tiny caption at the bottom left (what the picture shows) */
  caption?: string;
  /** tiny note at the bottom right (e.g. "artist's impression") */
  note?: string;
  className?: string;
}

export function MrcresidencesbocaratonPicture({ media, size = "window", caption, note, className }: MrcresidencesbocaratonPictureProps) {
  return (
    <section
      className={cn(
        "relative aspect-[390/293] w-full overflow-clip bg-muted",
        size === "window" ? "lg:aspect-auto lg:h-svh" : "lg:aspect-[1440/753]",
        className,
      )}
    >
      <div className="mrcresidencesbocaraton-picture-layer absolute inset-x-0 [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover">
        {media ?? <div aria-hidden className="size-full bg-linear-to-b from-muted via-highlight to-secondary/70" />}
      </div>
      {(caption || note) && (
        <div className="absolute inset-x-5 bottom-2.5 flex items-end justify-between gap-6 text-[9px] leading-[1.15] font-semibold text-primary-foreground uppercase lg:bottom-6">
          <span>{caption}</span>
          <span className="text-right">{note}</span>
        </div>
      )}
    </section>
  );
}

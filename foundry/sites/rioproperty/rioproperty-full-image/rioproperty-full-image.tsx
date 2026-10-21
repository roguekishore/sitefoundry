import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./rioproperty-full-image.css";

export interface RiopropertyFullImageProps {
  /** a photo or video; fills the frame like object-fit cover and drifts inside it. Empty: a
      placeholder */
  media?: ReactNode;
  /** a text alternative for the frame, read when the media is decorative */
  label?: string;
  className?: string;
}

export function RiopropertyFullImage({ media, label, className }: RiopropertyFullImageProps) {
  return (
    <section className={cn("overflow-clip bg-background py-20", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div role={label ? "img" : undefined} aria-label={label} className="rioproperty-full-image-frame relative aspect-[353/423] overflow-clip bg-muted sm:aspect-[3/2] lg:aspect-[2/1]">
          {/* taller than the frame, so it can drift without showing an edge */}
          <div className="rioproperty-full-image-media absolute inset-x-0 -top-[20%] -bottom-[20%]">{media}</div>
        </div>
      </div>
    </section>
  );
}

import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface M3PgMediaProps {
  /** an <img> or <video>; it covers the frame. Empty: a placeholder */
  media?: ReactNode;
  /** zoom the media to 1.1 when a parent with the class group/media is hovered */
  zoom?: boolean;
  /** size, aspect ratio and position of the frame */
  className?: string;
}

export function M3PgMedia({ media, zoom = false, className }: M3PgMediaProps) {
  return (
    <div className={cn("relative overflow-clip", className)}>
      <div
        className={cn(
          "absolute inset-0 [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover",
          zoom && "transition-transform duration-400 ease-[ease] group-hover/media:scale-110 motion-reduce:transition-none motion-reduce:group-hover/media:scale-100",
        )}
      >
        {media ?? <div aria-hidden className="size-full bg-muted" />}
      </div>
    </div>
  );
}

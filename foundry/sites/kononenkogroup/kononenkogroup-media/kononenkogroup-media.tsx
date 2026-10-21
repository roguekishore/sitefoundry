import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface KononenkogroupMediaProps {
  /** the image or video; it should fill the frame (e.g. an img with w-full h-full object-cover).
      Empty: a flat placeholder surface of the same size */
  media?: ReactNode;
  /** size and aspect of the frame, e.g. "aspect-[8/5]" */
  className?: string;
}

/**
 * A square-cornered media frame, flat and shadowless like the original's photos. Without media
 * it is a pale muted surface, plainly a placeholder.
 */
export function KononenkogroupMedia({ media, className }: KononenkogroupMediaProps) {
  return <div className={cn("relative overflow-clip bg-muted *:size-full *:object-cover", className)}>{media}</div>;
}

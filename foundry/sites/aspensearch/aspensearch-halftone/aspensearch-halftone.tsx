import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./aspensearch-halftone.css";

export interface AspensearchHalftoneProps {
  /** what fills the window: an image, a video, a canvas… Empty: a placeholder dot screen */
  media?: ReactNode;
  /** sizing and placement (the window takes the size it's given) */
  className?: string;
}

/**
 * A "window" tile for media. On the original these tiles are holes onto one fixed WebGL
 * halftone scene; here, when empty, it is a plain placeholder: a token-coloured dot screen
 * pinned to the browser window (background-attachment: fixed), so neighbouring windows read
 * as one still layer behind the scrolling grid, like the original's.
 */
export function AspensearchHalftone({ media, className }: AspensearchHalftoneProps) {
  return (
    <div className={cn("relative overflow-clip bg-background", className)}>
      {media ?? <div aria-hidden className="aspensearch-halftone-dots absolute inset-0" />}
    </div>
  );
}

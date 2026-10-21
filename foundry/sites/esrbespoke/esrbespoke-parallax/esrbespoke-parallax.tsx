import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./esrbespoke-parallax.css";

export interface EsrbespokeParallaxProps {
  /** the picture or video; it should fill its box (`h-full w-full object-cover`). Empty: a placeholder */
  media?: ReactNode;
  /** how the picture drifts: "cover" while the frame crosses the window, "exit" for a frame at the page top, "none" */
  drift?: "cover" | "exit" | "none";
  /** fade the picture in as the frame enters the window */
  fadeIn?: boolean;
  /** rise 16px into place on page load (the inner pages' hero photo) */
  rise?: boolean;
  /** sizes the frame: h-svh, aspect-[4/3], … */
  className?: string;
  /** classes for the placeholder surface when there is no media */
  placeholderClassName?: string;
}

/** A cropped media frame with a scrubbed parallax drift; a plain muted surface when empty. */
export function EsrbespokeParallax({ media, drift = "cover", fadeIn = false, rise = false, className, placeholderClassName }: EsrbespokeParallaxProps) {
  return (
    <div
      className={cn("esrbespoke-parallax relative overflow-clip bg-background", className)}
      data-fade={fadeIn || undefined}
      data-rise={rise || undefined}
    >
      <div className="esrbespoke-parallax-layer absolute inset-0" data-drift={drift}>
        <div className="esrbespoke-parallax-fade h-full w-full [&>*]:h-full [&>*]:w-full [&>img]:object-cover [&>video]:object-cover">
          {media ?? <div aria-hidden className={cn("h-full w-full bg-muted", placeholderClassName)} />}
        </div>
      </div>
    </div>
  );
}

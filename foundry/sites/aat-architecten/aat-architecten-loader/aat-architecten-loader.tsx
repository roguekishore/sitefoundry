import type { CSSProperties } from "react";
import { cn } from "@foundry/foundry-utils";
import "./aat-architecten-loader.css";

export interface AatArchitectenLoaderProps {
  /** how long the cover stays before it has fully faded, in seconds */
  duration?: number;
  className?: string;
}

/**
 * A full-window cover with a dot in the centre that fades away on its own after `duration`.
 * Sits at z-40, so a header at z-50 stays visible above it.
 */
export function AatArchitectenLoader({ duration = 1.2, className }: AatArchitectenLoaderProps) {
  return (
    <div
      aria-hidden
      style={{ "--aat-loader-duration": `${duration}s` } as CSSProperties}
      className={cn("aat-architecten-loader pointer-events-none fixed inset-0 z-40 flex items-center justify-center bg-background", className)}
    >
      <span className="aat-architecten-loader-dot size-5 rounded-full bg-foreground" />
    </div>
  );
}

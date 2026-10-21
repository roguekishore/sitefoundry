import type { ReactNode } from "react";
import { EsrbespokeParallax } from "@foundry/esrbespoke-parallax";
import { cn } from "@foundry/foundry-utils";

export interface EsrbespokeMediaBandProps {
  /** the photo or film (fills like object-fit: cover). Empty: a placeholder */
  media?: ReactNode;
  /** what the picture shows, for screen readers (when media is an image, give it its own alt) */
  label?: string;
  id?: string;
  className?: string;
}

/** Full-bleed, full-window photo with a scrubbed parallax drift. */
export function EsrbespokeMediaBand({ media, label, id, className }: EsrbespokeMediaBandProps) {
  return (
    <section id={id} aria-label={label} className={cn("bg-background", className)}>
      <EsrbespokeParallax media={media} className="h-svh" />
    </section>
  );
}

import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HermeusMedia } from "@foundry/hermeus-media";

export interface HermeusFilmProps {
  /** the film (a muted autoplay looping video) or a still; empty: a grey placeholder */
  media?: ReactNode;
  /** what the slot shows, for screen readers while it is empty */
  mediaLabel?: string;
  className?: string;
}

/** Edge-to-edge film slot, 5:4 on phones and 16:9 on desktop. */
export function HermeusFilm({ media, mediaLabel, className }: HermeusFilmProps) {
  return (
    <section className={cn("bg-background", className)}>
      <HermeusMedia media={media} label={mediaLabel} look="deep" className="aspect-[5/4] w-full lg:aspect-video" />
    </section>
  );
}

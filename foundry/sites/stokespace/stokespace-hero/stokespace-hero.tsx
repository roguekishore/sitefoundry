import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { StokespaceHeading } from "@foundry/stokespace-heading";
import { StokespacePlaceholder } from "@foundry/stokespace-placeholder";

export interface StokespaceHeroProps {
  /** the giant headline, laid over the bottom-left of the media */
  title: string;
  /** the full-bleed video or image (fills a 9:16 frame on phones, 16:9 from 768px; crop it like object-cover) */
  media?: ReactNode;
  className?: string;
}

/**
 * Full-bleed media hero: a portrait 9:16 frame on phones and a 16:9 frame from 768px, edge to
 * edge with no radius, and the extra-wide all-caps headline sitting over its bottom-left
 * corner. Static: no entrance animation.
 */
export function StokespaceHero({ title, media, className }: StokespaceHeroProps) {
  return (
    <section className={cn("pt-6 pb-section lg:pt-4", className)}>
      <div className="relative aspect-[9/16] overflow-clip md:aspect-video">
        <div className="absolute inset-0 [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover">
          {media ?? <StokespacePlaceholder />}
        </div>
        <div className="absolute inset-x-0 bottom-8 px-gutter md:bottom-[8.5%]">
          <StokespaceHeading as="h1" size="hero" className="md:max-w-[62%]">
            {title}
          </StokespaceHeading>
        </div>
      </div>
    </section>
  );
}

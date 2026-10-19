import type { ReactNode } from "react";
import { Play } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { HalodentalOpusButton } from "@foundry/halodental-opus-button";
import { HalodentalOpusHeading } from "@foundry/halodental-opus-heading";

export interface HalodentalOpusHeroProps {
  /** the giant word in the bottom-left corner (desktop), usually the brand name */
  wordmark?: string;
  /** the short line at the bottom (the page's h1) */
  tagline: string;
  /** the orange button with a play icon under the tagline (phones only, as in the original) */
  video?: { label: string; href: string };
  /** the full-panel backdrop (photo or video); defaults to a dark surface with a soft light */
  media?: ReactNode;
  className?: string;
}

/**
 * Halo Dental's hero: a black stage panel filling the first screen, inset from the edges
 * by a thin margin with 8px corners. A giant wordmark sits bottom-left and the tagline on
 * the 8th column; on phones the tagline sits at the bottom with an orange play button.
 * The panel always uses the theme's dark palette.
 */
export function HalodentalOpusHero({ wordmark, tagline, video, media, className }: HalodentalOpusHeroProps) {
  return (
    <section className={cn("p-1.5 lg:p-2.5", className)}>
      <div className="dark relative isolate flex h-[calc(100svh-0.75rem)] min-h-[36rem] flex-col justify-end overflow-hidden rounded-lg bg-card text-card-foreground lg:h-[calc(100svh-1.25rem)] lg:min-h-[44rem]">
        <div className="absolute inset-0 -z-10">
          {media ?? (
            // placeholder for the product photo/video: a soft light falling on black
            <div aria-hidden className="size-full bg-radial-[ellipse_45%_60%_at_50%_42%] from-foreground/16 via-foreground/5 to-transparent" />
          )}
        </div>

        <div className="grid grid-cols-1 gap-x-5 px-[calc(var(--page-gutter)-0.375rem)] pb-3 lg:grid-cols-12 lg:items-end lg:px-[calc(var(--page-gutter)-0.625rem)] lg:pb-5">
          {wordmark && (
            <p aria-hidden className="hidden font-display text-[17.5rem] leading-[0.74] tracking-[-0.045em] lg:col-span-7 lg:block lg:pb-1.5">
              {wordmark}
            </p>
          )}
          <div className="lg:col-span-5 lg:col-start-8">
            <HalodentalOpusHeading as="h1" title={tagline} className="lg:leading-[0.9]" />
            {video && (
              <HalodentalOpusButton href={video.href} lead={<Play aria-hidden className="size-4" strokeWidth={1.5} />} className="mt-1 w-[10.375rem] lg:hidden">
                {video.label}
              </HalodentalOpusButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

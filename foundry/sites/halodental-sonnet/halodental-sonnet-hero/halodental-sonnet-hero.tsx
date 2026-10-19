import type { ReactNode } from "react";
import { Play } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { HalodentalSonnetButton } from "@foundry/halodental-sonnet-button";

export interface HalodentalSonnetHeroProps {
  /** the giant brand word, bottom-left (desktop only) */
  wordmark: string;
  /** the tagline: bottom-right on desktop, bottom-left on phones */
  tagline: string;
  /** label and link of the orange play button (phones only); leave out to hide it */
  play?: { label: string; href: string };
  /** the product photo or video, filling the panel. Empty shows the placeholder. */
  media?: ReactNode;
  className?: string;
}

/**
 * The first screen: one black rounded panel inset from the page edge, filled by a media
 * slot, with the brand word set huge across the bottom.
 */
export function HalodentalSonnetHero({ wordmark, tagline, play, media, className }: HalodentalSonnetHeroProps) {
  return (
    <section className={cn("dark p-1.5 sm:p-2.5", className)}>
      <div className="relative min-h-[52rem] overflow-hidden rounded-lg bg-background text-foreground lg:min-h-[55rem]">
        <div className="absolute inset-0 [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover">
          {media ?? (
            <div className="size-full bg-gradient-to-b from-card/60 via-background to-background">
              <div className="mx-auto h-full w-[28%] min-w-24 bg-gradient-to-r from-card via-muted-foreground/25 to-card opacity-60" />
            </div>
          )}
        </div>

        <span aria-hidden className="absolute bottom-[-3.5rem] left-8 hidden font-display text-[17.5rem] leading-none tracking-[-0.03em] select-none lg:block">
          {wordmark}
        </span>

        <div className="absolute inset-x-5 bottom-5 flex flex-col items-start gap-1 lg:inset-x-0 lg:bottom-8 lg:left-[58.5%]">
          <h1 className="font-display text-[2.5rem] leading-none lg:text-[4rem]">{tagline}</h1>
          {play && (
            <HalodentalSonnetButton href={play.href} size="lg" className="mt-1 pl-0 lg:hidden">
              <span className="flex size-11 items-center justify-center bg-foreground/15">
                <Play aria-hidden className="size-4" />
              </span>
              <span className="pr-1">{play.label}</span>
            </HalodentalSonnetButton>
          )}
        </div>
      </div>
    </section>
  );
}

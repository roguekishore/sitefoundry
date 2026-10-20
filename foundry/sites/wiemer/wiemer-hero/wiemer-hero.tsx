import type { ReactNode } from "react";
import { wiemerReveal } from "@foundry/wiemer-reveal";
import { WiemerTeaserCard, type WiemerTeaserCardProps } from "@foundry/wiemer-teaser-card";
import { cn } from "@foundry/foundry-utils";
import "./wiemer-hero.css";

export interface WiemerHeroProps {
  /** the huge centred title (shown from md up) */
  title: string;
  /** one or two lines under the title */
  subline: string;
  /** the launch line at the bottom left; "\n" breaks the line */
  note: string;
  /** the teaser card at the bottom right */
  card: WiemerTeaserCardProps;
  /** the full-bleed photo (an <img>, cover); empty shows a dark gradient placeholder */
  media?: ReactNode;
  className?: string;
}

/** Window-tall photo hero with a huge light title and a bottom row. */
export function WiemerHero({ title, subline, note, card, media, className }: WiemerHeroProps) {
  return (
    <section
      className={cn(
        "wiemer-hero relative isolate flex h-svh flex-col overflow-clip text-background md:h-[150svh] dark:text-foreground",
        className,
      )}
    >
      <div className="wiemer-hero-photo absolute inset-x-0 -top-10 -z-10 h-[calc(100%+10rem)] bg-linear-to-b from-glow to-foreground/85 dark:to-background [&>img]:size-full [&>img]:object-cover">
        {media}
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-b from-foreground/35 to-transparent to-30% dark:from-background/50" />

      {/* first screen: title and subline */}
      <div className={cn(wiemerReveal("fadeout"), "hidden h-svh shrink-0 flex-col items-center pt-[8.5rem] text-center md:flex")}>
        <h1 className="font-display text-[12.5vw] leading-[0.9] font-medium tracking-[-0.03em]">{title}</h1>
        <p className="mt-[2vw] max-w-[29ch] text-[max(20px,1.6vw)] leading-[1.2] font-medium tracking-[-0.02em]">{subline}</p>
      </div>

      {/* bottom row */}
      <div className={cn(wiemerReveal("fadeout"), "mt-auto px-gutter pb-gutter md:pb-12")}>
        <div className="grid gap-6 border-t border-current/30 pt-6 md:grid-cols-12 md:gap-x-3.5">
          <p className="text-[max(20px,1.6vw)] leading-[1.2] font-medium tracking-[-0.03em] whitespace-pre-line md:col-span-7">{note}</p>
          <WiemerTeaserCard {...card} className="text-card-foreground md:col-span-5 lg:col-span-4 lg:col-start-9" />
        </div>
      </div>
    </section>
  );
}

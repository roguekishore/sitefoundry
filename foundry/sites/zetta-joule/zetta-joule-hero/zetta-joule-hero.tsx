import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ZettaJoulePlaceholder } from "@foundry/zetta-joule-placeholder";
import "./zetta-joule-hero.css";

export interface ZettaJouleHeroProps {
  /** first line of the headline (huge, featherlight) */
  lead: string;
  /** second line, left word: sits indented, in front of the render on desktop */
  middle: string;
  /** second line, right word: pushed to the right edge on desktop */
  tail: string;
  /** the short line under the headline (bottom-left with a hairline on desktop) */
  subtitle: string;
  /** the hero render (a transparent PNG of the product, taller than wide); empty shows a placeholder */
  media?: ReactNode;
  className?: string;
}

export function ZettaJouleHero({ lead, middle, tail, subtitle, media, className }: ZettaJouleHeroProps) {
  return (
    <section className={cn("dark relative h-[47.3rem] overflow-clip bg-linear-to-b from-glow to-chart-5 text-foreground lg:h-[56.25rem]", className)}>
      <div className="zetta-joule-hero-drift absolute inset-x-0 top-[20.5rem] -bottom-24 flex justify-center lg:top-[7.5rem]">
        {media ?? <ZettaJoulePlaceholder tone="veil" className="h-full w-[20.5rem] lg:w-[30.5rem]" />}
      </div>
      <div className="relative h-full px-gutter pt-24 lg:px-10 lg:pt-[17rem]">
        <h1 className="font-display text-[4rem] leading-none font-[250] tracking-[-0.03em] lg:text-[min(13.89vw,17rem)]">
          <span className="block">{lead}</span>
          <span className="flex gap-[0.22em] lg:justify-between lg:pr-[5vw] lg:pl-[14vw]">
            <span>{middle}</span>
            <span>{tail}</span>
          </span>
        </h1>
        <p className="mt-6 max-w-[13rem] font-display text-base leading-[1.3] font-light tracking-[-0.01em] lg:absolute lg:bottom-0 lg:left-10 lg:mt-0 lg:max-w-[21rem] lg:border-l lg:border-foreground/40 lg:pb-12 lg:pl-6 lg:text-2xl lg:leading-[1.2]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

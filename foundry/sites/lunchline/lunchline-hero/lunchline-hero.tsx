import type { ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { LunchlineLetterRise } from "@foundry/lunchline-letter-rise";
import "./lunchline-hero.css";

export interface LunchlineHeroProps {
  /** the big light headline; its letters rise in on load */
  heading: string;
  /** the lead line: under the headline on phones, bottom-right on the media on wide screens */
  lead: string;
  /** the looping video or photo: a 1.32 band on phones, the whole window on wide screens
      (cropped like object-fit: cover). Empty: a placeholder of the same size. */
  media?: ReactNode;
  /** wordmark lines for a cream splash that covers the page on load and fades away;
      leave empty for no splash */
  splash?: string[];
  /** the round-the-corner scroll button (wide screens): where it goes and its label */
  scrollHref?: string;
  scrollLabel?: string;
  /** section id, for in-page links */
  id?: string;
  className?: string;
}

export function LunchlineHero({ heading, lead, media, splash, scrollHref, scrollLabel, id, className }: LunchlineHeroProps) {
  // with a splash, the letters wait for it to clear
  const delay = splash?.length ? 900 : 150;
  return (
    <section id={id} className={cn("relative bg-background pt-[5.75rem] text-foreground lg:h-svh lg:min-h-[40rem] lg:pt-0", className)}>
      {splash && splash.length > 0 && (
        <div aria-hidden className="lunchline-hero-splash pointer-events-none fixed inset-0 z-[60] grid place-items-center bg-background motion-reduce:hidden">
          <p className="font-display text-[3rem] leading-[0.8] font-medium tracking-[-0.03em] lg:text-[5rem]">
            {splash.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      )}

      <div className="relative z-10 px-gutter lg:static lg:mx-auto lg:max-w-page">
        <LunchlineLetterRise
          as="h1"
          mode="load"
          delay={delay}
          drop={0.18}
          maxDrop={1.3}
          text={heading}
          className="max-w-[22rem] font-display text-5xl leading-[1.2] font-light tracking-[-0.02em] lg:absolute lg:top-[10.25rem] lg:z-10 lg:max-w-[40rem] lg:text-[5.125rem] lg:text-background"
        />
        <p className="lunchline-hero-fade mt-[1.1rem] max-w-[24rem] text-2xl leading-[1.2] font-light tracking-[-0.01em] lg:absolute lg:right-gutter lg:bottom-[3.6rem] lg:left-[58%] lg:z-10 lg:mt-0 lg:max-w-[32rem] lg:text-[2rem] lg:text-background">
          {lead}
        </p>
      </div>

      <div className="relative mt-6 aspect-[1.32] w-full overflow-clip lg:absolute lg:inset-0 lg:mt-0 lg:aspect-auto">
        <div className="absolute inset-0 [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover">
          {media ?? <div className="size-full bg-linear-to-br from-muted via-glow/70 to-primary/60" />}
        </div>
        {/* the original darkens its video so the white type reads */}
        <div aria-hidden className="absolute inset-0 hidden bg-foreground/55 lg:block" />
      </div>

      {scrollHref && scrollLabel && (
        <a
          href={scrollHref}
          aria-label={scrollLabel}
          className="lunchline-hero-scroller group absolute bottom-[3.6rem] left-gutter z-10 hidden size-12 place-items-center border border-background/70 text-background lg:grid"
        >
          <ArrowDown className="size-5 transition-transform duration-300 ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:translate-y-1 motion-reduce:transition-none" strokeWidth={1.5} />
        </a>
      )}
    </section>
  );
}

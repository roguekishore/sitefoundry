import type { ReactNode } from "react";
import { DiabrowserWaitlistBar, type DiabrowserWaitlistBarProps } from "@foundry/diabrowser-waitlist-bar";
import { cn } from "@foundry/foundry-utils";
import "./diabrowser-hero.css";

export interface DiabrowserHeroProps {
  /** the one-line statement over the light (break it for phones with <br className="lg:hidden" />) */
  headline: ReactNode;
  /** the giant name set behind the window, in capitals */
  wordmark: string;
  /** the browser window (a product clip or screenshot); empty shows a plain placeholder */
  media?: ReactNode;
  /** the full-bleed backdrop (photo or canvas, cropped like object-fit cover); empty shows a gold-and-butter gradient */
  backdrop?: ReactNode;
  /** the waitlist CTA and its small print, on the cream arc at the bottom */
  cta: DiabrowserWaitlistBarProps["cta"];
  /** small print under the CTA */
  note?: ReactNode;
  /** set when a diabrowser-waitlist-dock wraps the page: from lg the dock's bar takes over and the hero's own bar hides */
  docked?: boolean;
  className?: string;
}

/** A window-tall golden hero: white serif statement, a giant name, and a browser window rising out of a cream arc. */
export function DiabrowserHero({ headline, wordmark, media, backdrop, cta, note, docked = false, className }: DiabrowserHeroProps) {
  return (
    <section className={cn("relative h-svh min-h-[600px] overflow-clip bg-highlight", className)}>
      <div className="absolute inset-0 [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover">
        {backdrop ?? <div className="diabrowser-hero-backdrop size-full" />}
      </div>

      <div className="relative flex flex-col items-center px-4 pt-[100px] text-center lg:pt-[104px]">
        {/* the dark scope keeps this type light on the gold in both modes */}
        <h1 className="dark font-display text-[36px] leading-[38px] font-[420] tracking-[-0.045em] text-foreground lg:text-[54px] lg:leading-[60px]">
          {headline}
        </h1>
        <p
          aria-hidden
          className="dark mt-[96px] font-display text-[34vw] leading-[0.72] font-[380] tracking-[-0.04em] whitespace-nowrap text-foreground uppercase lg:mt-[100px] lg:text-[23vw] xl:text-[330px]"
        >
          {wordmark}
        </p>
        <div className="diabrowser-hero-window relative z-10 -mt-[8vw] w-full lg:-mt-[104px] lg:w-[min(1115px,100%)]">
          <div className="aspect-[1115/793] overflow-hidden rounded-[6px] border border-card/70 bg-card shadow-[0_24px_60px_-30px_color-mix(in_oklab,var(--foreground)_35%,transparent)] lg:rounded-xl [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover">
            {media}
          </div>
        </div>
      </div>

      <DiabrowserWaitlistBar cta={cta} note={note} className={cn("absolute inset-x-0 bottom-0 z-20", docked && "lg:hidden")} />
    </section>
  );
}

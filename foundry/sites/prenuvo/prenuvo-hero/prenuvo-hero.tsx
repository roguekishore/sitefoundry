import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PrenuvoButton } from "@foundry/prenuvo-button";
import "./prenuvo-hero.css";

export interface PrenuvoHeroProps {
  /** the headline; wrap the phrase to highlight in <em> */
  title: ReactNode;
  /** the lead under it */
  lead: ReactNode;
  /** the gradient pill */
  cta: { label: string; href: string };
  /** the backdrop that fills the window (a photo or video, cover); empty shows a placeholder */
  media?: ReactNode;
  className?: string;
}

export function PrenuvoHero({ title, lead, cta, media, className }: PrenuvoHeroProps) {
  return (
    <section className={cn("dark sticky top-0 h-svh overflow-clip bg-background text-foreground", className)}>
      {/* the backdrop is 128px taller than the window so it can drift up without a gap */}
      <div className="prenuvo-hero-drift absolute inset-x-0 top-0 h-[calc(100%+8rem)] [&>*]:size-full [&>*]:object-cover">
        {media ?? <div className="bg-[radial-gradient(ellipse_at_70%_35%,color-mix(in_oklab,var(--primary)_30%,var(--muted)),var(--muted)_70%)]" />}
      </div>
      {/* scrims: darker at the foot, and from the left on desktop where the copy sits */}
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--background)_35%,transparent),color-mix(in_oklab,var(--background)_15%,transparent)_45%,var(--background))]" />
      <div aria-hidden className="absolute inset-0 hidden bg-[linear-gradient(to_right,color-mix(in_oklab,var(--background)_45%,transparent),transparent_60%)] lg:block" />

      <div className="prenuvo-hero-fade relative mx-auto flex h-full max-w-page flex-col items-center justify-center px-gutter pb-[22svh] text-center lg:items-start lg:px-12 lg:pb-0 lg:text-left">
        <div className="lg:pl-24">
          <h1 className="prenuvo-hero-in max-w-[22rem] font-display text-[2.5rem] leading-none font-semibold tracking-[-0.01em] text-balance sm:max-w-xl lg:max-w-[36rem] lg:text-[4rem] [&_em]:text-highlight [&_em]:not-italic">
            {title}
          </h1>
          <p className="prenuvo-hero-in mx-auto mt-6 max-w-[21rem] font-display text-base leading-[1.6] text-muted-foreground sm:max-w-md lg:mx-0 lg:mt-10 lg:max-w-[34rem] lg:text-2xl lg:leading-normal" style={{ animationDelay: "120ms" }}>
            {lead}
          </p>
          <div className="prenuvo-hero-in mt-5 lg:mt-12" style={{ animationDelay: "240ms" }}>
            <PrenuvoButton href={cta.href}>{cta.label}</PrenuvoButton>
          </div>
        </div>
      </div>
    </section>
  );
}

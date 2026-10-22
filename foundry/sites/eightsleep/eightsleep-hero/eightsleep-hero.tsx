import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { EightsleepButton } from "@foundry/eightsleep-button";
import { EightsleepMedia } from "@foundry/eightsleep-media";
import { EightsleepRating, type EightsleepRatingProps } from "@foundry/eightsleep-rating";
import "./eightsleep-hero.css";

export interface EightsleepHeroProps {
  /** the tiny mono label over the title, e.g. "New" */
  eyebrow?: ReactNode;
  /** the product name, set enormous */
  title: ReactNode;
  /** one or two lines under the product */
  lede: ReactNode;
  /** a short bold line, e.g. the starting price */
  price?: ReactNode;
  /** the white button */
  cta: { label: ReactNode; href: string };
  /** the rating under the button */
  rating?: EightsleepRatingProps;
  /** the sky photo behind everything (cover); a glow-to-pale gradient when empty */
  sky?: ReactNode;
  /** the product cut-out or video (contain-fitted, transparent around it) */
  product?: ReactNode;
  className?: string;
}

export function EightsleepHero({ eyebrow, title, lede, price, cta, rating, sky, product, className }: EightsleepHeroProps) {
  return (
    <section className={cn("dark relative isolate overflow-clip text-foreground", className)}>
      <EightsleepMedia media={sky} tone="sky" className="absolute inset-0 -z-10" />
      <div className="eightsleep-hero-veil pointer-events-none absolute inset-0 -z-10 bg-background" />

      <div className="relative mx-auto flex max-w-page flex-col items-center px-gutter pb-[78px] lg:px-16 lg:pb-[96px]">
        {/* the stage: title at the top, product floating over it; window-sized on desktop */}
        <div className="relative flex h-[570px] w-full flex-col items-center pt-[124px] lg:h-[calc(82svh+165px)] lg:pt-[150px]">
          <div className="eightsleep-hero-drift-product pointer-events-none absolute top-[88px] left-1/2 -ml-[209px] h-[538px] w-[418px] lg:top-[96px] lg:-ml-[397.5px] lg:h-[1023px] lg:w-[795px]">
            {product ? (
              <div className="size-full [&>img]:size-full [&>img]:object-contain [&>video]:size-full [&>video]:object-contain">{product}</div>
            ) : (
              <div aria-hidden className="size-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--foreground)_30%,transparent),transparent)] [background-size:70%_42%] bg-center bg-no-repeat" />
            )}
          </div>
          <div className="eightsleep-hero-drift-words relative flex flex-col items-center">
            {eyebrow && (
              <span className="eightsleep-hero-copy font-mono text-[13px] font-medium tracking-[0.16em] uppercase lg:text-[14px]">{eyebrow}</span>
            )}
            <h1 className="eightsleep-hero-title mt-2 bg-linear-to-b from-foreground from-30% to-foreground/55 bg-clip-text pb-[0.08em] font-display text-[72px] leading-[0.95] font-medium tracking-[-0.04em] text-transparent sm:text-[120px] lg:text-[184px]">
              {title}
            </h1>
          </div>
        </div>

        <div className="eightsleep-hero-drift-words relative">
          <div className="eightsleep-hero-copy flex flex-col items-center text-center">
            <p className="max-w-[18ch] text-[22px] leading-[1.15] font-medium text-balance lg:max-w-[30ch] lg:text-[32px] lg:leading-[1.25]">{lede}</p>
            {price && <p className="mt-4 text-[16px] font-semibold lg:mt-8 lg:text-[20px]">{price}</p>}
            <EightsleepButton size="lg" href={cta.href} className="mt-6 lg:mt-9">
              {cta.label}
            </EightsleepButton>
            {rating && <EightsleepRating {...rating} className="mt-11" />}
          </div>
        </div>
      </div>
    </section>
  );
}

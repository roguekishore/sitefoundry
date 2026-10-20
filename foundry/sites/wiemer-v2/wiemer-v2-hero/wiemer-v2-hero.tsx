import type { ReactNode } from "react";
import { WiemerV2PromoCard, type WiemerV2PromoCardProps } from "@foundry/wiemer-v2-promo-card";
import { wiemerV2Reveal, wiemerV2RevealStyle } from "@foundry/wiemer-v2-reveal";
import { cn } from "@foundry/foundry-utils";

export interface WiemerV2HeroProps {
  /** the giant wordmark at the top */
  title: string;
  /** one or two lines under it */
  subline: string;
  /** the caption at the bottom left, under the hairline */
  caption: string;
  /** the small card at the bottom right */
  promo: WiemerV2PromoCardProps;
  /** the full-bleed photo or video (cropped like object-fit: cover); a dark placeholder when empty */
  media?: ReactNode;
  /** also show the wordmark, caption and card on phones (the original shows only the photo) */
  textOnPhones?: boolean;
  className?: string;
}

/**
 * A full-bleed photo hero, one window tall on phones and one and a half on desktop. A huge
 * light wordmark sits centred near the top with a two-line subline; at the bottom a thin light
 * hairline runs across, a caption on the left and a small promo card on the right. The photo
 * drifts down slowly as you scroll (parallax).
 */
export function WiemerV2Hero({ title, subline, caption, promo, media, textOnPhones = false, className }: WiemerV2HeroProps) {
  const show = textOnPhones ? "flex" : "hidden lg:flex";
  return (
    <section className={cn("relative h-svh overflow-clip bg-foreground text-background lg:h-[150svh]", className)}>
      <div className="absolute inset-0 overflow-clip">
        <div
          className={cn(wiemerV2Reveal("drift"), "absolute inset-x-0 -top-[4%] h-[112%] [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover")}
          style={wiemerV2RevealStyle(0, [-30, 113])}
        >
          {media ?? <div className="size-full bg-[radial-gradient(ellipse_at_50%_70%,color-mix(in_oklab,var(--glow)_45%,transparent),transparent_65%)] bg-foreground/90" />}
        </div>
      </div>

      <div className={cn(show, "relative flex-col items-center px-gutter pt-28 text-center lg:pt-[7.5rem]")}>
        <h1 className="font-display text-[24vw] leading-[0.9] font-medium tracking-[-0.02em] lg:text-[12.5vw] lg:tracking-[-0.004em]">{title}</h1>
        <p className="mt-6 max-w-[22rem] text-xl leading-[1.2] font-medium tracking-[-0.01em] lg:mt-9 lg:max-w-[30vw] lg:text-[1.6vw]">{subline}</p>
      </div>

      <div className={cn(show, "absolute inset-x-0 bottom-0 flex-col gap-6 px-gutter pb-6 lg:grid lg:grid-cols-3 lg:gap-x-4 lg:pb-12")}>
        <hr className="col-span-3 border-background/30 max-lg:hidden" />
        <p className="max-w-[34rem] text-xl leading-[1.2] font-medium tracking-[-0.02em] lg:col-span-2 lg:mt-6 lg:text-[1.6vw]">{caption}</p>
        <WiemerV2PromoCard {...promo} className="lg:mt-2" />
      </div>
    </section>
  );
}

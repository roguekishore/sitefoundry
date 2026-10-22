import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { EightsleepButton } from "@foundry/eightsleep-button";
import { EightsleepMedia } from "@foundry/eightsleep-media";

export interface EightsleepCloserProps {
  title: ReactNode;
  /** one sentence */
  text?: ReactNode;
  /** a bold line under it, e.g. the price */
  price?: ReactNode;
  cta: { label: ReactNode; href: string };
  /** the bedroom photo (cover) */
  media?: ReactNode;
  className?: string;
}

export function EightsleepCloser({ title, text, price, cta, media, className }: EightsleepCloserProps) {
  return (
    <section className={cn("dark relative isolate h-[560px] bg-background overflow-clip text-foreground md:aspect-[1440/899] md:h-auto", className)}>
      <EightsleepMedia media={media} className="absolute inset-0 -z-10 bg-muted-foreground/35" />
      <div className="flex flex-col items-center px-gutter pt-[80px] text-center lg:pt-[150px]">
        <h2 className="font-display text-[40px] leading-[1.05] font-normal tracking-[-0.02em] lg:text-[64px]">{title}</h2>
        {text && <p className="mt-4 text-[16px] leading-[1.35] lg:mt-6 lg:text-[18px]">{text}</p>}
        {price && <p className="text-[16px] leading-[1.35] font-bold lg:text-[18px]">{price}</p>}
        <EightsleepButton size="lg" href={cta.href} className="mt-8 lg:mt-9">
          {cta.label}
        </EightsleepButton>
      </div>
    </section>
  );
}

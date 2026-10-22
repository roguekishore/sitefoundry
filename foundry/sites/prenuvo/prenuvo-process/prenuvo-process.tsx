import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PrenuvoButton } from "@foundry/prenuvo-button";
import { PrenuvoReveal } from "@foundry/prenuvo-reveal";

export interface PrenuvoProcessProps {
  /** the headline */
  title: ReactNode;
  /** the lead under it */
  body: ReactNode;
  /** the wide soft pill */
  cta?: { label: string; href: string };
  /** the video or image on the right (16:9, cover); empty shows a placeholder */
  media?: ReactNode;
  /** an id for in-page links */
  id?: string;
  className?: string;
}

export function PrenuvoProcess({ title, body, cta, media, id, className }: PrenuvoProcessProps) {
  return (
    <section id={id} className={cn("relative z-10 bg-background pt-16 pb-16 text-foreground lg:py-28", className)}>
      <div className="mx-auto grid max-w-[74rem] items-center gap-10 px-gutter lg:grid-cols-2 lg:gap-5">
        <PrenuvoReveal>
          <h2 className="font-display text-[2rem] leading-[1.2] font-semibold tracking-[-0.01em] lg:text-4xl">{title}</h2>
          <p className="mt-6 max-w-[36rem] text-base leading-normal lg:mt-8 lg:text-lg lg:leading-[1.67]">{body}</p>
          {cta && (
            <PrenuvoButton href={cta.href} variant="soft" size="lg" block className="mt-10 lg:mt-12">
              {cta.label}
            </PrenuvoButton>
          )}
        </PrenuvoReveal>
        <PrenuvoReveal step={1} className="aspect-video w-full overflow-clip [&>*]:size-full [&>*]:object-cover">
          {media ?? <div className="bg-muted" />}
        </PrenuvoReveal>
      </div>
    </section>
  );
}

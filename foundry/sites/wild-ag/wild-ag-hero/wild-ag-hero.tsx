import type { ReactNode } from "react";
import { MoveDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { WildAgButton } from "@foundry/wild-ag-button";
import { WildAgMedia } from "@foundry/wild-ag-media";
import { WildAgReveal } from "@foundry/wild-ag-reveal";

export interface WildAgHeroPart {
  /** words of the headline */
  text: string;
  /** set in the light serif italic instead of the sans */
  serif?: boolean;
  /** start a new line after this part */
  breakAfter?: boolean;
}

export interface WildAgHeroProps {
  /** the headline, in parts that switch between sans and serif italic */
  headline: WildAgHeroPart[];
  /** one line under the headline */
  lead: string;
  /** the paper pill */
  cta: { label: string; href: string };
  /** a looping video or an image; fixed to the window. Empty: a placeholder */
  media?: ReactNode;
  /** where the down-arrow at the foot of the footage goes, and its screen-reader label */
  scrollCue?: { label: string; href: string };
  className?: string;
}

export function WildAgHero({ headline, lead, cta, media, scrollCue, className }: WildAgHeroProps) {
  return (
    <section className={cn("relative", className)}>
      <div className="relative">
        <WildAgMedia media={media} tone="soft" fixed className="h-svh w-full" />
        {scrollCue && (
          <a
            href={scrollCue.href}
            aria-label={scrollCue.label}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2 text-primary-foreground transition-transform duration-300 hover:translate-y-1 motion-reduce:transition-none lg:bottom-6"
          >
            <MoveDown className="size-11" strokeWidth={1} aria-hidden />
          </a>
        )}
      </div>

      <div className="relative z-10 rounded-b-[calc(var(--radius)*3.4)] bg-linear-15 from-primary to-highlight px-gutter pt-7 pb-12 text-center text-primary-foreground lg:rounded-b-[calc(var(--radius)*4.5)] lg:pt-6 lg:pb-[7.5rem]">
        <div className="mx-auto max-w-page">
          <WildAgReveal
            as="h1"
            className="text-[2.875rem] leading-[0.95] font-normal tracking-[-0.01em] uppercase lg:text-[3.8rem] lg:leading-[0.93]"
          >
            {headline.map((part, i) => (
              <span key={i}>
                <span className={part.serif ? "font-display font-light italic" : undefined}>{part.text}</span>
                {" "}
                {part.breakAfter && <br className="hidden lg:block" />}
              </span>
            ))}
          </WildAgReveal>
          <WildAgReveal as="p" step={1} className="mx-auto mt-5 max-w-[40rem] text-[1.0625rem] leading-[1.4] font-medium tracking-[-0.01em] lg:mt-5 lg:max-w-none">
            {lead}
          </WildAgReveal>
          <WildAgReveal step={2} className="mt-8 lg:mt-9">
            <WildAgButton href={cta.href}>{cta.label}</WildAgButton>
          </WildAgReveal>
        </div>
      </div>
    </section>
  );
}

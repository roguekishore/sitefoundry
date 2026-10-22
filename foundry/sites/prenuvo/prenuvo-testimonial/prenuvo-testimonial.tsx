import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PrenuvoArc } from "@foundry/prenuvo-arc";
import { PrenuvoButton } from "@foundry/prenuvo-button";
import { PrenuvoReveal } from "@foundry/prenuvo-reveal";

export interface PrenuvoTestimonialProps {
  /** the big claim at the top */
  title: ReactNode;
  /** the quote itself (without quote marks: the opening marks are drawn) */
  quote: ReactNode;
  /** who said it */
  name: string;
  /** a quiet label after the name */
  role?: string;
  /** the pill under the quote */
  cta?: { label: string; href: string };
  /** the backdrop photo or video (cover); empty shows a placeholder */
  media?: ReactNode;
  /** an id for in-page links */
  id?: string;
  className?: string;
}

export function PrenuvoTestimonial({ title, quote, name, role, cta, media, id, className }: PrenuvoTestimonialProps) {
  return (
    <PrenuvoArc id={id} className={cn("dark z-10 flex min-h-[38.875rem] flex-col bg-background text-foreground lg:min-h-[103svh] lg:justify-center", className)}>
      <div className="absolute inset-0 [&>*]:size-full [&>*]:object-cover">
        {media ?? <div className="bg-[radial-gradient(ellipse_at_72%_45%,color-mix(in_oklab,var(--glow)_22%,var(--muted)),var(--muted)_65%)]" />}
      </div>
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,var(--background),color-mix(in_oklab,var(--background)_55%,transparent)_40%,transparent_70%)] max-lg:bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--background)_60%,transparent),color-mix(in_oklab,var(--background)_30%,transparent))]" />

      <PrenuvoReveal rise={96} className="relative mx-auto w-full max-w-page px-gutter pt-24 pb-28 lg:px-12 lg:py-36">
        <h2 className="max-w-[23rem] font-display text-[2.75rem] leading-none font-semibold tracking-[-0.01em] lg:max-w-[30rem] lg:text-[4rem]">{title}</h2>
        <span aria-hidden className="mt-9 block font-display text-[3.5rem] leading-[0.6] font-bold text-highlight italic lg:mt-16 lg:text-[4.5rem]">
          {/* foundry-allow-text: decorative quote marks */}
          &ldquo;
        </span>
        <blockquote className="mt-2 max-w-[21.5rem] text-xl leading-[1.6] font-bold italic lg:mt-3 lg:max-w-[30rem] lg:text-[1.75rem]">
          {quote}
        </blockquote>
        <p className="mt-6 flex items-baseline gap-2 font-display">
          <span className="text-sm font-semibold">{name}</span>
          {role && <span className="text-xs text-muted-foreground">{role}</span>}
        </p>
        {cta && (
          <PrenuvoButton href={cta.href} variant="ocean" className="mt-10 h-[3.125rem] text-base lg:mt-14">
            {cta.label}
          </PrenuvoButton>
        )}
      </PrenuvoReveal>
    </PrenuvoArc>
  );
}

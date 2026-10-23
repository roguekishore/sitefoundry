import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { OuraringButton } from "@foundry/ouraring-button";
import { OuraringMedia } from "@foundry/ouraring-media";
import { OuraringReveal } from "@foundry/ouraring-reveal";

export interface OuraringFeatureProps {
  /** the small bold uppercase line over the title */
  eyebrow?: ReactNode;
  /** the title */
  title: ReactNode;
  /** the body paragraph */
  body: ReactNode;
  /** the dark pill */
  cta?: { label: ReactNode; href: string };
  /** the picture on the right (cover) */
  media?: ReactNode;
  className?: string;
}

export function OuraringFeature({ eyebrow, title, body, cta, media, className }: OuraringFeatureProps) {
  return (
    <section className={cn("overflow-x-clip bg-background py-section text-foreground", className)}>
      <div className="flex flex-col lg:flex-row-reverse lg:items-center">
        <OuraringReveal kind="blur" className="ml-gutter aspect-[366/275] lg:ml-0 lg:w-[58.3%] lg:shrink-0 lg:aspect-[839/629]">
          <OuraringMedia media={media} tone="deep" className="size-full overflow-clip rounded-l-[calc(var(--radius)*3)]" />
        </OuraringReveal>
        <OuraringReveal className="mt-16 px-gutter lg:mt-0 lg:flex-1 lg:pr-[60px] lg:pl-[max(var(--page-gutter),calc((100vw-var(--page-width))/2+var(--page-gutter)))]">
          {eyebrow && <p className="text-[16px] leading-[1.5] font-bold tracking-[0.08em] uppercase">{eyebrow}</p>}
          <h2 className="mt-5 font-display text-[40px] leading-[1.1] font-normal tracking-[-0.02em] lg:mt-8 lg:text-[56px]">{title}</h2>
          <p className="mt-3 max-w-[30rem] text-[19px] leading-[30px] tracking-[0.02em] hyphens-auto lg:text-[20px] lg:hyphens-none">{body}</p>
          {cta && (
            <OuraringButton href={cta.href} className="mt-8 lg:mt-11">
              {cta.label}
            </OuraringButton>
          )}
        </OuraringReveal>
      </div>
    </section>
  );
}

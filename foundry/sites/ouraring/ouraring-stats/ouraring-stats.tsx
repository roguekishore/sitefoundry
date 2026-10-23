import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { OuraringButton } from "@foundry/ouraring-button";
import { OuraringMedia } from "@foundry/ouraring-media";
import { OuraringReveal } from "@foundry/ouraring-reveal";

export interface OuraringStatsProps {
  /** the claim; a "\n" marks the desktop line break */
  title: string;
  /** a footnote mark after the claim, e.g. "1" */
  footnote?: string;
  /** the lede under the claim */
  lede: ReactNode;
  /** a small line under the lede, e.g. where the app runs */
  note?: ReactNode;
  /** the dark pill */
  cta?: { label: ReactNode; href: string };
  /** the wide picture under it (contain-fitted, e.g. a fan of app screens) */
  media?: ReactNode;
  className?: string;
}

export function OuraringStats({ title, footnote, lede, note, cta, media, className }: OuraringStatsProps) {
  const lines = title.split("\n");
  return (
    <section className={cn("overflow-x-clip bg-background text-foreground", className)}>
      <div className="mx-auto flex max-w-page flex-col items-center px-gutter pt-[60px] pb-[60px] text-center lg:pt-[72px] lg:pb-[80px]">
        <OuraringReveal>
          <h2 className="font-display text-[56px] leading-[1.1] font-normal tracking-[-0.03em] lg:text-[68px]">
            {lines.map((line, i) => (
              <span key={i}>
                {i > 0 && <br className="max-lg:hidden" />}
                {i > 0 && " "}
                {line}
              </span>
            ))}
            {footnote && <sup className="ml-1 align-super font-sans text-[14px] tracking-normal">{footnote}</sup>}
          </h2>
        </OuraringReveal>
        <OuraringReveal step={1} as="p" className="mt-8 max-w-[46rem] text-[24px] leading-[1.25] tracking-[-0.025em] lg:mt-[34px]">
          {lede}
        </OuraringReveal>
        {note && (
          <OuraringReveal kind="fade" step={2} as="p" className="mt-6 text-[14px] leading-[1.5]">
            {note}
          </OuraringReveal>
        )}
        {cta && (
          <OuraringReveal kind="fade" step={3} className="mt-6">
            <OuraringButton href={cta.href}>{cta.label}</OuraringButton>
          </OuraringReveal>
        )}
        <OuraringReveal kind="blur" step={1} className="mt-[60px] aspect-[1248/644] w-[140%] max-w-none shrink-0 sm:w-full sm:max-w-[1248px] lg:mt-20">
          <OuraringMedia media={media} fit="contain" className="size-full" />
        </OuraringReveal>
      </div>
    </section>
  );
}

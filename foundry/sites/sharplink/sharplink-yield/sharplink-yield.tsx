import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SharplinkButton } from "@foundry/sharplink-button";
import { SharplinkGuides } from "@foundry/sharplink-guides";
import { SharplinkLabel } from "@foundry/sharplink-label";
import { SharplinkRule } from "@foundry/sharplink-rule";
import { SharplinkTextReveal } from "@foundry/sharplink-text-reveal";
import "./sharplink-yield.css";

export interface SharplinkYieldStat {
  /** the figure's name, e.g. "Total held" */
  label: string;
  /** the figure as shown, e.g. "1,284,610" */
  value: string;
}

export interface SharplinkYieldFeature {
  /** the small number in the badge, e.g. "01" */
  index: string;
  /** the card's title */
  title: string;
  /** an illustration at the card's right; a faint placeholder when empty */
  media?: ReactNode;
}

export interface SharplinkYieldProps {
  /** the section title; "\n" breaks the line; its letters assemble as you scroll */
  title: string;
  /** the paragraph under the title */
  body: string;
  /** the figures at the top of the dark card (two read best) */
  stats: SharplinkYieldStat[];
  /** a chart inside the dark card; a dotted placeholder when empty */
  chart?: ReactNode;
  /** the tinted button at the bottom of the dark card */
  cta: { label: string; href: string };
  /** the numbered cards in the right column (three read best) */
  features: SharplinkYieldFeature[];
  className?: string;
}

/** Title + text, a dark stats card and numbered feature cards on a dotted three-column grid. */
export function SharplinkYield({ title, body, stats, chart, cta, features, className }: SharplinkYieldProps) {
  return (
    <section className={cn("relative isolate overflow-clip text-foreground", className)}>
      <SharplinkGuides />
      <div className="mx-auto grid max-w-page gap-y-10 px-gutter pt-20 pb-24 lg:grid-cols-3 lg:gap-x-gutter lg:py-[11rem]">
        <div className="flex flex-col lg:pt-[6.75rem]">
          <SharplinkRule />
          <SharplinkTextReveal
            text={title}
            className="mt-7 font-display text-[2.75rem] leading-[1.15] font-medium tracking-[-0.01em] lg:text-[4.25rem] lg:leading-[1.06] lg:tracking-[-0.02em]"
          />
          <SharplinkRule mark={false} className="mt-6 hidden lg:block" />
          <p className="mt-6 max-w-[18.5rem] text-base leading-[1.35] lg:mt-auto lg:border-t lg:border-dotted lg:border-foreground/20 lg:pt-7">{body}</p>
        </div>

        <div className="sharplink-yield-card dark relative flex flex-col bg-[linear-gradient(to_bottom,var(--background)_12%,color-mix(in_oklab,var(--glow)_45%,var(--background))_55%,var(--glow)_85%,color-mix(in_oklab,var(--glow)_55%,var(--foreground))_100%)] p-4 text-foreground lg:h-[37rem] lg:p-7">
          <span aria-hidden className="absolute top-0 left-0 size-1 bg-highlight" />
          <dl>
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-baseline justify-between gap-4 border-b border-dotted border-foreground/20 py-4 first:pt-1">
                <dt>
                  <SharplinkLabel>{stat.label}</SharplinkLabel>
                </dt>
                <dd className="overflow-clip text-[1.1875rem] leading-[1.35] font-medium tracking-[-0.01em] lg:text-2xl">
                  <span className="sharplink-yield-value block">{stat.value}</span>
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 min-h-[10.5rem] flex-1 [&>*]:h-full [&>*]:w-full">
            {chart ?? <div className="border border-dotted border-foreground/20 bg-foreground/5" />}
          </div>
          <SharplinkButton href={cta.href} variant="tint" fullWidth className="sharplink-yield-button mt-6">
            {cta.label}
          </SharplinkButton>
        </div>

        <ul className="grid content-start gap-2 lg:gap-gutter lg:pt-[6.75rem]">
          {features.map((feature, i) => (
            <li
              key={feature.index}
              className="sharplink-yield-feature relative flex min-h-[6rem] flex-col justify-center bg-foreground/[0.03] p-5 lg:h-[11.25rem] lg:justify-start"
              style={{ "--sl-i": i } as CSSProperties}
            >
              <span className="relative z-10 inline-flex h-[1.375rem] w-fit items-center gap-1 bg-foreground px-1.5 text-background">
                <span aria-hidden className="size-1 bg-background" />
                <span className="font-sans text-xs font-medium tracking-[0.06em] [font-stretch:80%]">{feature.index}</span>
              </span>
              <span className="relative z-10 mt-3 max-w-[60%] text-[1.1875rem] leading-[1.35] font-medium tracking-[-0.01em]">{feature.title}</span>
              <div className="absolute inset-y-3 right-3 w-[34%] lg:inset-y-4 lg:right-4 lg:w-[43%] [&>*]:h-full [&>*]:w-full [&>*]:object-contain">
                {feature.media ?? <div className="border border-dotted border-foreground/15" />}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

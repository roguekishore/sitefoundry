import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { GrowthbookV2Button } from "@foundry/growthbook-v2-button";
import { GrowthbookV2Heading } from "@foundry/growthbook-v2-heading";
import { GrowthbookV2RailAccent } from "@foundry/growthbook-v2-rail-accent";

export interface GrowthbookV2Stat {
  /** the number, e.g. "900B+" */
  value: string;
  /** the mono caption under it */
  label: string;
}

export interface GrowthbookV2DeployOption {
  /** the small 3D-style icon (image); empty = a soft placeholder square */
  icon?: ReactNode;
  /** the card's heading; \n for a line break */
  title: string;
  body: string;
  action: { label: string; href: string };
}

export interface GrowthbookV2DeployProps {
  /** up to three numbers across the top */
  stats: GrowthbookV2Stat[];
  /** two cards */
  options: GrowthbookV2DeployOption[];
  className?: string;
}

export function GrowthbookV2Deploy({ stats, options, className }: GrowthbookV2DeployProps) {
  return (
    <section className={cn("bg-linear-[156deg] from-primary to-foreground text-primary-foreground dark:to-background", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*2)] px-gutter">
        <div className="border-l border-primary-foreground/20 pt-14 pb-14 lg:pt-32 lg:pb-32">
          <dl className="grid lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="border-b border-primary-foreground/25 pt-12 pb-8 first:pt-6 lg:border-b-0 lg:border-l lg:px-5 lg:pt-5 lg:pb-5 lg:first:border-l-0 lg:first:pt-5"
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-[2.25rem]/[1.3] lg:text-[2.5rem]/[1.3]">{s.value}</dd>
                <dd className="mt-1 font-mono text-[0.9375rem]/[1.75] lg:max-w-[15rem] lg:text-base/[1.7]">{s.label}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-[4.5rem] grid gap-5 lg:mt-[4.5rem] lg:grid-cols-2">
            {options.map((o) => (
              <article key={o.title} className="relative overflow-clip rounded-xl bg-card px-6 pt-10 pb-6 text-card-foreground lg:px-14 lg:pt-[4.375rem] lg:pb-14">
                <GrowthbookV2RailAccent className="left-0 w-1.5" barClassName="h-full w-1.5 lg:h-full" />
                <div className="size-20 [&>*]:size-full [&>img]:object-contain">
                  {o.icon ?? <div aria-hidden className="size-full rounded-2xl bg-linear-to-br from-chart-5 via-glow/50 to-transparent opacity-80" />}
                </div>
                <GrowthbookV2Heading as="h3" size="card" className="mt-8 whitespace-pre-line max-lg:whitespace-normal lg:mt-12">
                  {o.title}
                </GrowthbookV2Heading>
                <p className="mt-6 text-lg/[1.5] lg:mt-10">{o.body}</p>
                <GrowthbookV2Button href={o.action.href} arrow className="mt-8 lg:mt-8">
                  {o.action.label}
                </GrowthbookV2Button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { GrowthbookButton } from "@foundry/growthbook-button";
import { GrowthbookRail } from "@foundry/growthbook-rail";

export interface GrowthbookDeployStat {
  /** the figure, e.g. "40B+" */
  value: string;
  /** mono caption under it */
  label: string;
}

export interface GrowthbookDeployOption {
  /** 80px illustration or icon; a soft gradient tile when empty */
  icon?: ReactNode;
  /** the heading; each string starts a new line on desktop */
  title: string[];
  body: string;
  /** violet button with an arrow */
  cta: { label: string; href: string };
}

export interface GrowthbookDeployProps {
  /** up to three figures across the top */
  stats: GrowthbookDeployStat[];
  /** two cards (one or three also lay out) */
  options: GrowthbookDeployOption[];
  className?: string;
}

export function GrowthbookDeploy({ stats, options, className }: GrowthbookDeployProps) {
  return (
    <section
      className={cn(
        "dark bg-linear-[147deg] from-primary from-0% to-background to-100% text-foreground",
        className,
      )}
    >
      <div className="mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*4)] px-gutter md:px-[calc(var(--page-gutter)*2)]">
        <div className="border-l border-border pb-20 lg:pt-32 lg:pb-32">
          <dl className="grid lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.value} className="border-b border-border pt-[5.5rem] pb-8 lg:h-[9.375rem] lg:border-b-0 lg:border-l lg:pt-0 lg:pb-0 lg:pl-5 lg:first:border-l-0">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-4xl leading-[1.2] lg:text-[2.5rem] lg:leading-[1.3]">{s.value}</dd>
                <dd className="mt-3 max-w-[15rem] font-mono text-sm leading-[1.75] lg:mt-2 lg:text-base">{s.label}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-[4.5rem] grid gap-5 lg:grid-cols-2">
            {options.map((o) => (
              <article key={o.title.join(" ")} className="relative overflow-clip rounded-lg bg-foreground px-6 pt-10 pb-6 text-background lg:px-14 lg:pt-[4.25rem] lg:pb-14">
                <GrowthbookRail fixed className="left-0 w-1" />
                <div className="size-20 [&>*]:size-full">
                  {o.icon ?? <div className="rounded-2xl bg-[radial-gradient(circle_at_40%_40%,var(--glow),transparent_70%)] opacity-60" />}
                </div>
                <h3 className="mt-6 font-display text-[1.75rem] leading-[1.25] font-normal lg:mt-10 lg:text-5xl lg:leading-[1.2]">
                  {o.title.map((line, i) => (
                    <span key={line} className="lg:block">
                      {line}
                      {i < o.title.length - 1 && " "}
                    </span>
                  ))}
                </h3>
                <p className="mt-8 text-base leading-[1.65] lg:mt-12 lg:text-lg lg:leading-[1.5]">{o.body}</p>
                <GrowthbookButton href={o.cta.href} arrow className="mt-8 lg:mt-7">
                  {o.cta.label}
                </GrowthbookButton>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

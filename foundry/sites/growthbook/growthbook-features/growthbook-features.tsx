import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { GrowthbookButton } from "@foundry/growthbook-button";
import { GrowthbookRail } from "@foundry/growthbook-rail";

export interface GrowthbookFeatureRow {
  /** mono label above the heading */
  eyebrow: string;
  /** small line icon before the eyebrow (lucide, 18px) */
  icon?: ReactNode;
  /** the row heading; each string starts a new line */
  title: string[];
  body: string;
  /** violet button with an arrow */
  cta?: { label: string; href: string };
  /** square image or video on the right; a soft gradient placeholder when empty */
  media?: ReactNode;
}

export interface GrowthbookFeaturesProps {
  /** the section heading; each string starts a new line */
  title: string[];
  rows: GrowthbookFeatureRow[];
  className?: string;
}

// placeholder washes, cycling: violet over mint, mint, blue-violet
const washes = [
  "bg-highlight/50 bg-[radial-gradient(ellipse_90%_60%_at_60%_0%,var(--primary),transparent_75%),radial-gradient(ellipse_50%_70%_at_100%_70%,var(--glow),transparent_70%)]",
  "bg-accent bg-[radial-gradient(ellipse_80%_80%_at_100%_100%,color-mix(in_oklab,var(--highlight)_45%,transparent),transparent_75%)]",
  "bg-glow bg-[radial-gradient(ellipse_60%_60%_at_0%_0%,color-mix(in_oklab,var(--chart-2)_40%,var(--card)),transparent_75%),radial-gradient(ellipse_60%_70%_at_100%_40%,var(--foreground),transparent_70%)]",
];

export function GrowthbookFeatures({ title, rows, className }: GrowthbookFeaturesProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*4)] px-gutter md:px-[calc(var(--page-gutter)*2)]">
        <div className="relative border-l border-border pt-14 pb-12 lg:pt-[8.5rem] lg:pb-20">
          <GrowthbookRail />
          <h2 className="pl-4 font-display text-4xl leading-[1.3] font-normal lg:pl-10 lg:text-[4.25rem] lg:leading-[1.1]">
            {title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <div className="mt-[6.5rem] grid gap-[6.25rem] lg:mt-[10.5rem] lg:gap-40">
            {rows.map((row, i) => (
              <article key={row.eyebrow} className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,36.125rem)] lg:gap-10">
                <div className="pl-4 lg:pt-2.5 lg:pl-9">
                  <p className="flex items-center gap-3 font-mono text-sm text-foreground [&_svg]:size-[1.125rem] [&_svg]:text-primary">
                    {row.icon}
                    {row.eyebrow}
                  </p>
                  <h3 className="mt-8 font-display text-4xl leading-[1.25] font-normal lg:mt-10 lg:text-[3.5rem] lg:leading-[1.2]">
                    {row.title.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>
                  <p className="mt-8 max-w-[33.75rem] text-sm leading-[1.65] text-foreground/85 lg:mt-11 lg:text-base">{row.body}</p>
                  {row.cta && (
                    <GrowthbookButton href={row.cta.href} arrow blockOnMobile className="mt-10 lg:mt-12">
                      {row.cta.label}
                    </GrowthbookButton>
                  )}
                </div>
                <div className="aspect-square overflow-clip rounded-2xl lg:rounded-lg [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover">
                  {row.media ?? <div className={cn("size-full", washes[i % washes.length])} />}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

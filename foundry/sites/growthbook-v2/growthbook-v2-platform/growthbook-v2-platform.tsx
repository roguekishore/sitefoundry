import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { GrowthbookV2Button } from "@foundry/growthbook-v2-button";
import { GrowthbookV2Eyebrow } from "@foundry/growthbook-v2-eyebrow";
import { GrowthbookV2Heading } from "@foundry/growthbook-v2-heading";
import { GrowthbookV2Panel } from "@foundry/growthbook-v2-panel";
import { GrowthbookV2RailAccent } from "@foundry/growthbook-v2-rail-accent";

export interface GrowthbookV2PlatformRow {
  /** the mono label above the heading */
  eyebrow: string;
  /** a small line icon for the eyebrow */
  icon?: ReactNode;
  /** the row's heading; \n for a line break */
  title: string;
  body: string;
  /** the violet button under the text (gets an arrow) */
  action: { label: string; href: string };
  /** the gradient frame's wash */
  tone?: "violet" | "mint" | "sky";
  /** the shot's shape when empty: a wide card in the middle, or a tall dark window cropped at the bottom */
  shot?: "card" | "window";
  /** a real image or video for the whole square; empty = gradient frame + shot placeholder */
  media?: ReactNode;
}

export interface GrowthbookV2PlatformProps {
  /** the large line before the rows; \n for a line break */
  intro: string;
  rows: GrowthbookV2PlatformRow[];
  className?: string;
}

const shots = {
  card: "inset-x-[6.5%] top-[22%] h-[55%] rounded-md bg-card shadow-[0_4px_20px_color-mix(in_oklab,var(--foreground)_12%,transparent)]",
  window: "inset-x-[16%] top-[11.5%] -bottom-2 rounded-t-lg bg-foreground",
};

export function GrowthbookV2Platform({ intro, rows, className }: GrowthbookV2PlatformProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*2)] px-gutter">
        <div className="relative border-l border-border pt-12 pb-[calc(var(--section-y)*0.6)] lg:pt-[calc(var(--section-y)*0.7)] lg:pb-section">
          <GrowthbookV2RailAccent />
          <GrowthbookV2Heading size="hero" className="pl-4 whitespace-pre-line max-md:text-[2.5rem]/[1.2] lg:pl-10 lg:text-pretty">
            {intro}
          </GrowthbookV2Heading>
          <div className="mt-24 flex flex-col gap-24 lg:mt-40 lg:gap-40">
            {rows.map((r) => (
              <article key={r.title} className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,36.125rem)] lg:gap-16">
                <div className="pl-4 lg:pt-1 lg:pl-9">
                  <GrowthbookV2Eyebrow icon={r.icon}>{r.eyebrow}</GrowthbookV2Eyebrow>
                  <GrowthbookV2Heading as="h3" className="mt-8 whitespace-pre-line lg:mt-9">
                    {r.title}
                  </GrowthbookV2Heading>
                  <p className="mt-8 max-w-[34rem] text-sm/[1.65] text-foreground/85 lg:mt-10 lg:text-base/[1.65]">{r.body}</p>
                  <GrowthbookV2Button href={r.action.href} arrow fullOnMobile className="mt-10 lg:mt-12">
                    {r.action.label}
                  </GrowthbookV2Button>
                </div>
                <GrowthbookV2Panel tone={r.tone ?? "violet"} grid media={r.media} className="aspect-square rounded-2xl lg:rounded-xl">
                  {!r.media && <div aria-hidden className={cn("absolute", shots[r.shot ?? "card"])} />}
                </GrowthbookV2Panel>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

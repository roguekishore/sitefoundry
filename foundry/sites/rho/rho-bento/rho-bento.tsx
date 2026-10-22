import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RhoButton } from "@foundry/rho-button";
import { RhoHeading } from "@foundry/rho-heading";
import { RhoRail } from "@foundry/rho-rail";
import { RhoReveal } from "@foundry/rho-reveal";

export interface RhoBentoItem {
  /** mono label at the top */
  label: string;
  /** small mint chip after the label, e.g. "New" */
  badge?: string;
  /** the card's title */
  title: string;
  /** one muted line under the title */
  body: string;
  /** how many of the three desktop columns the card spans */
  size?: 1 | 2 | 3;
  /** the screenshot; empty: an inset placeholder panel */
  media?: ReactNode;
}

export interface RhoBentoProps {
  /** the heading */
  title: string;
  /** the mint button beside the heading */
  action?: { label: string; href: string };
  /** the cards, in reading order */
  items: RhoBentoItem[];
  /** screen-reader labels for the phone rail's arrows */
  prevLabel: string;
  nextLabel: string;
  /** dark or light section */
  tone?: "dark" | "light";
  className?: string;
}

const spans = { 1: "lg:col-span-1", 2: "lg:col-span-2", 3: "lg:col-span-3" };

function BentoCard({ item }: { item: RhoBentoItem }) {
  return (
    <article className="flex h-full flex-col overflow-clip rounded-lg bg-card px-5 pt-5 text-card-foreground lg:px-6 lg:pt-6">
      <p className="flex items-center gap-2 font-mono text-[0.75rem] leading-none font-medium tracking-[0.04em] uppercase lg:text-[0.8125rem] dark:text-primary">
        {item.label}
        {item.badge && (
          <span className="rounded-[0.1875rem] bg-primary px-1.5 py-1 text-[0.6875rem] text-primary-foreground">{item.badge}</span>
        )}
      </p>
      <h3 className="mt-3 text-2xl leading-[1.15] tracking-[-0.01em] lg:text-[1.75rem]">{item.title}</h3>
      <p className="mt-1.5 max-w-[22rem] text-[0.9375rem] leading-[1.3] text-muted-foreground lg:text-base">{item.body}</p>
      <div className="mt-6 flex min-h-0 flex-1">
        {item.media ?? <div className="w-full rounded-t-md border border-b-0 border-border bg-background" />}
      </div>
    </article>
  );
}

export function RhoBento({ title, action, items, prevLabel, nextLabel, tone = "light", className }: RhoBentoProps) {
  // a running column count, so each card in a desktop row arrives a step after the one before
  let col = 0;
  const steps = items.map((item) => {
    const step = col;
    col = (col + (item.size ?? 1)) % 3;
    return step;
  });
  return (
    <section data-rho-tone={tone} className={cn(tone === "dark" && "dark", "bg-background py-14 text-foreground lg:py-section", className)}>
      <div className="mx-auto flex max-w-page flex-col items-start gap-6 px-gutter lg:flex-row lg:items-center lg:justify-between">
        <RhoHeading text={title} className="max-w-[22rem] lg:max-w-none" />
        {action && (
          <RhoReveal>
            <RhoButton href={action.href} size="md" className="h-11 px-5 text-[0.9375rem]">
              {action.label}
            </RhoButton>
          </RhoReveal>
        )}
      </div>
      {/* on phones the whole rail fades in; on desktop each card does instead */}
      <RhoReveal className="mt-10 lg:mt-14 lg:[animation:none]! motion-reduce:[animation:none]!">
        <RhoRail
          items={items.map((item, i) => (
            <RhoReveal key={item.title} step={steps[i]} className="h-full">
              <BentoCard item={item} />
            </RhoReveal>
          ))}
          prevLabel={prevLabel}
          nextLabel={nextLabel}
          gridOnDesktop
          itemClassName={(i) =>
            cn("h-[22.8rem] lg:h-[28.125rem] lg:w-auto", (items[i].size ?? 1) > 1 ? "w-[40.75rem] max-w-[92%] sm:max-w-none" : "w-[20rem] max-w-[85%] sm:max-w-none", spans[items[i].size ?? 1])
          }
          trackClassName="lg:mx-auto lg:grid lg:max-w-page lg:grid-cols-3 lg:overflow-visible lg:px-gutter"
          arrowsClassName="lg:hidden"
        />
      </RhoReveal>
    </section>
  );
}

import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { OndoButton } from "@foundry/ondo-button";
import { OndoHeading } from "@foundry/ondo-heading";
import { OndoPlaceholder } from "@foundry/ondo-placeholder";
import "./ondo-insights.css";

export interface OndoInsight {
  /** e.g. "Research" */
  category: string;
  /** the date as shown */
  date: string;
  /** the article title */
  title: string;
  /** where it links */
  href: string;
  /** a 16:10 image. A plain surface when empty */
  media?: ReactNode;
}

export interface OndoInsightsProps {
  /** heading, first line (ink) */
  lead: string;
  /** heading, second line (grey) */
  trail?: string;
  /** the button beside the heading */
  action?: { label: string; href: string };
  /** the articles, usually three */
  items: OndoInsight[];
  className?: string;
}

/** Heading + "view all", then three article cards. */
export function OndoInsights({ lead, trail, action, items, className }: OndoInsightsProps) {
  return (
    <section className={cn("bg-background py-section lg:py-[7.5rem]", className)}>
      <div className="mx-auto max-w-page px-gutter lg:px-[calc(var(--page-gutter)*2.75)]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <OndoHeading lead={lead} trail={trail} />
          {action && (
            <OndoButton href={action.href} size="md" className="self-start lg:self-auto">
              {action.label}
            </OndoButton>
          )}
        </div>
        <ul className="mt-12 grid gap-8 md:grid-cols-3 md:gap-3 lg:mt-16">
          {items.map((item, i) => (
            <li key={item.title} className="ondo-insights-card" style={{ ["--ondo-insights-n" as string]: i }}>
              <a href={item.href} className="group block">
                <div className="aspect-[16/10] overflow-clip rounded-2xl">
                  <div className="size-full transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none">
                    {item.media ?? <OndoPlaceholder />}
                  </div>
                </div>
                <p className="mt-4 flex items-center gap-2.5 text-sm text-muted-foreground">
                  <span>{item.category}</span>
                  <span aria-hidden className="size-1 rounded-full bg-muted-foreground" />
                  <span>{item.date}</span>
                </p>
                <h3 className="mt-2 font-display text-xl leading-[1.2] font-medium tracking-[-0.02em] text-foreground lg:text-2xl lg:leading-[1.15]">{item.title}</h3>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

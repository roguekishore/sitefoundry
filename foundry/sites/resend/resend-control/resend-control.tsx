import { useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ResendHeading } from "@foundry/resend-heading";
import { ResendPlaceholder } from "@foundry/resend-placeholder";

export interface ResendControlTab {
  label: string;
  /** a small line icon in the tab's square */
  icon: ReactNode;
  /** the screenshot shown for this tab; empty shows a placeholder */
  media?: ReactNode;
}

export interface ResendControlProps {
  /** the title; a list sets its desktop line breaks */
  title: string | string[];
  /** the lead; a list sets its desktop line breaks */
  text: string | string[];
  /** fills the icon slot above the title; empty shows a placeholder tile */
  media?: ReactNode;
  /** three tabs */
  tabs: ResendControlTab[];
  className?: string;
}

export function ResendControl({ title, text, media, tabs, className }: ResendControlProps) {
  const [active, setActive] = useState(0);
  return (
    <section className={cn("bg-background py-[calc(var(--section-y)*0.5)] text-foreground lg:py-section", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <ResendHeading tile media={media} title={title} text={text} />
        <div role="tablist" className="mt-8 grid gap-3 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {tabs.map((t, i) => (
            <button
              key={t.label}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={cn(
                "relative flex h-[3.75rem] items-center gap-3 overflow-clip rounded-lg border border-border bg-linear-to-b from-foreground/[0.03] to-transparent px-4 text-left transition-colors duration-200 motion-reduce:transition-none lg:h-[5.625rem] lg:gap-4 lg:px-6",
                i !== active && "hover:border-foreground/30",
              )}
            >
              <span
                className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-accent transition-colors duration-200 [&_svg]:size-4",
                  i === active ? "text-chart-2" : "text-foreground",
                )}
              >
                {t.icon}
              </span>
              <span className="font-display text-base tracking-[-0.02em] text-foreground">{t.label}</span>
              <span
                aria-hidden
                className={cn(
                  "absolute bottom-0 left-1/2 h-px w-2/5 -translate-x-1/2 bg-linear-to-r from-transparent via-chart-2 to-transparent shadow-[0_0_12px_var(--chart-2)] transition-opacity duration-300",
                  i === active ? "opacity-100" : "opacity-0",
                )}
              />
            </button>
          ))}
        </div>
        <div className="mt-3 grid aspect-[1232/659] w-full grid-cols-1 lg:mt-8">
          {tabs.map((t, i) => (
            <div
              key={t.label}
              aria-hidden={i !== active}
              className={cn(
                "overflow-clip rounded-lg [grid-area:1/1] transition-opacity duration-300 motion-reduce:transition-none",
                i === active ? "opacity-100" : "pointer-events-none opacity-0",
              )}
            >
              {t.media ?? <ResendPlaceholder className="size-full" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

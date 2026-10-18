import { useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ClerkCommand, type ClerkCommandProps } from "@foundry/clerk-command";
import { ClerkHeading } from "@foundry/clerk-heading";
import "./clerk-hero.css";

export interface ClerkHeroView {
  /** label in the segmented pill under the panel */
  label: string;
  /** what the panel shows (e.g. a clerk-auth-card) */
  content: ReactNode;
}

export interface ClerkHeroTab {
  /** label in the tab row on top of the panel */
  label: string;
  /** one or more views; the pill switches between them */
  views: ClerkHeroView[];
}

export interface ClerkHeroProps {
  /** the headline; pass a list to choose where the lines break on wide screens */
  title: string | string[];
  /** the line under it */
  text?: string;
  /** copyable agent prompt on the right (see clerk-command) */
  command?: ClerkCommandProps;
  /** the showcase panel's tabs */
  tabs: ClerkHeroTab[];
  className?: string;
}

function Dot({ on }: { on: boolean }) {
  return <span className={cn("size-1.5 shrink-0 rounded-full", on ? "bg-primary" : "ring-1 ring-foreground/25")} />;
}

export function ClerkHero({ title, text, command, tabs, className }: ClerkHeroProps) {
  const [tab, setTab] = useState(0);
  const [view, setView] = useState(0);
  const views = tabs[tab]?.views ?? [];
  const current = views[Math.min(view, views.length - 1)];

  // the faded neighbours: the views before and after this one, across all tabs
  const all = tabs.flatMap((t, ti) => t.views.map((v, vi) => ({ ti, vi, v })));
  const at = all.findIndex((x) => x.ti === tab && x.vi === Math.min(view, views.length - 1));
  const prev = all.length > 1 ? all[(at - 1 + all.length) % all.length] : undefined;
  const next = all.length > 2 ? all[(at + 1) % all.length] : undefined;

  return (
    <section className={cn("relative isolate overflow-x-clip bg-card pt-[4.5rem] pb-8 text-card-foreground lg:pt-[6.25rem]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <ClerkHeading as="h1" size="hero" title={title} text={text} textClassName="max-w-[15rem] sm:max-w-xl" />
          {command && <ClerkCommand {...command} className="lg:mb-2" />}
        </div>

        <div className="relative mt-14 rounded-[1.0625rem] bg-card shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_6%,transparent)] lg:mt-16">
          {/* tab row */}
          <div role="tablist" className="grid grid-cols-2 gap-1 border-b border-border p-1 lg:grid-cols-4">
            {tabs.map((t, i) => (
              <button
                key={t.label}
                role="tab"
                type="button"
                aria-selected={i === tab}
                onClick={() => {
                  setTab(i);
                  setView(0);
                }}
                className={cn(
                  "flex h-9 min-w-0 items-center gap-2.5 rounded-lg px-3 text-[0.8125rem] font-medium transition-colors duration-200 lg:justify-center",
                  i === tab ? "bg-muted text-foreground" : "text-foreground/80 hover:bg-muted/60",
                )}
              >
                <Dot on={i === tab} />
                <span className="truncate">{t.label}</span>
              </button>
            ))}
          </div>

          {/* stage */}
          <div className="relative flex min-h-[35rem] items-center justify-center overflow-hidden rounded-b-[1.0625rem] px-4 pt-12 pb-16 lg:min-h-[43.5rem]">
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,color-mix(in_oklab,var(--foreground)_2%,transparent))]" />
            {prev && (
              <div aria-hidden className="pointer-events-none absolute top-10 left-6 hidden w-[22.5rem] origin-top-left scale-95 opacity-30 blur-[1.5px] [mask-image:linear-gradient(to_right,black,transparent)] lg:block">
                {prev.v.content}
              </div>
            )}
            {next && (
              <div aria-hidden className="pointer-events-none absolute top-24 right-6 hidden w-[22.5rem] origin-top-right scale-95 opacity-30 blur-[1.5px] [mask-image:linear-gradient(to_left,black,transparent)] lg:block">
                {next.v.content}
              </div>
            )}
            <div className="relative flex w-full max-w-[22.5rem] justify-center">
              {/* the slowly turning glow behind the card */}
              <div aria-hidden className="absolute top-1/2 left-1/2 -z-10 size-[26rem] -translate-1/2 opacity-30 blur-3xl">
                <div className="clerk-hero-glow size-full rounded-full bg-conic from-glow via-chart-2 via-40% to-glow" />
              </div>
              <div key={`${tab}-${view}`} className="clerk-hero-in flex w-full justify-center">
                {current?.content}
              </div>
            </div>
          </div>

          {/* segmented pill hanging off the bottom edge */}
          {views.length > 0 && (
            <div className="absolute bottom-0 left-1/2 flex w-max max-w-[calc(100%-1rem)] -translate-x-1/2 translate-y-1/2 justify-center">
              <div role="tablist" className="flex gap-1 overflow-x-auto rounded-full bg-muted p-1 [scrollbar-width:none]">
                {views.map((v, i) => (
                  <button
                    key={v.label}
                    role="tab"
                    type="button"
                    aria-selected={i === view}
                    onClick={() => setView(i)}
                    className={cn(
                      "flex h-[1.875rem] shrink-0 items-center gap-2 rounded-full px-3.5 text-[0.8125rem] font-medium whitespace-nowrap transition-[background-color,color,box-shadow] duration-200",
                      i === view
                        ? "bg-card text-foreground shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_6%,transparent),0_1px_3px_color-mix(in_oklab,var(--foreground)_10%,transparent)]"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <Dot on={i === view} />
                    {v.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

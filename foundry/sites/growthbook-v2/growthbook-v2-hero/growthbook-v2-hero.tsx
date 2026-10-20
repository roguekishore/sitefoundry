import { useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { GrowthbookV2Button } from "@foundry/growthbook-v2-button";
import { GrowthbookV2Heading } from "@foundry/growthbook-v2-heading";
import { GrowthbookV2Panel } from "@foundry/growthbook-v2-panel";

export interface GrowthbookV2HeroTab {
  label: string;
  /** a small line icon before the label */
  icon?: ReactNode;
  /** the product shot shown while this tab is active (image or video); empty = placeholder */
  media?: ReactNode;
}

export interface GrowthbookV2HeroProps {
  /** the headline; use \n for the line breaks you want on desktop */
  title: string;
  /** one or two sentences under it */
  subtitle: string;
  /** usually two: outline first, then the primary one (gets an arrow) */
  actions: { label: string; href: string; variant?: "primary" | "outline" }[];
  /** the pill tabs on the frame; at least one */
  tabs: GrowthbookV2HeroTab[];
  /** a real image or video for the frame's backdrop; empty = the violet gradient */
  backdrop?: ReactNode;
  className?: string;
}

export function GrowthbookV2Hero({ title, subtitle, actions, tabs, backdrop, className }: GrowthbookV2HeroProps) {
  const [active, setActive] = useState(0);
  const shot = tabs[active]?.media;
  return (
    <section className={cn("bg-background pt-20 text-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*2)] px-gutter">
        <div className="mx-auto max-w-[62rem] text-center">
          <GrowthbookV2Heading as="h1" size="hero" className="whitespace-pre-line lg:text-pretty">
            {title}
          </GrowthbookV2Heading>
          <p className="mx-auto mt-4 max-w-[30rem] text-sm/[1.65] text-foreground/85 lg:mt-6 lg:text-lg/[1.5]">{subtitle}</p>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:justify-center">
            {actions.map((a) => (
              <GrowthbookV2Button
                key={a.label}
                href={a.href}
                variant={a.variant ?? "primary"}
                size="lg"
                arrow={(a.variant ?? "primary") === "primary"}
                className="w-full sm:w-44"
              >
                {a.label}
              </GrowthbookV2Button>
            ))}
          </div>
        </div>

        <GrowthbookV2Panel
          tone="violet"
          media={backdrop}
          className="-mx-gutter mt-10 h-[21.125rem] rounded-none md:mx-0 md:h-[28rem] md:rounded-xl lg:mt-16 lg:h-[37.1875rem]"
        >
          {tabs.length > 1 && (
            <div
              role="tablist"
              className="absolute top-12 left-1/2 hidden -translate-x-1/2 gap-1 rounded-full border-2 border-foreground bg-foreground/85 p-0.5 md:flex dark:border-card dark:bg-card/85"
            >
              {tabs.map((t, i) => (
                <button
                  key={t.label}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex h-12 items-center gap-2.5 rounded-full px-5 text-sm whitespace-nowrap transition-colors duration-300 motion-reduce:transition-none [&_svg]:size-5 [&_svg]:stroke-[1.5]",
                    i === active ? "bg-card text-card-foreground" : "bg-background/10 text-background hover:bg-foreground/20 dark:text-foreground",
                  )}
                >
                  {t.icon}
                  {t.label}
                </button>
              ))}
            </div>
          )}
          <div
            className={cn(
              "absolute top-7 left-[4%] h-[120%] w-[118%] overflow-clip rounded-t-xl md:top-28 md:left-1/2 md:w-[80%] md:-translate-x-1/2 lg:top-[9.5rem] lg:w-[67%]",
              !shot && "bg-card shadow-[0_4px_20px_color-mix(in_oklab,var(--foreground)_15%,transparent)]",
            )}
          >
            {shot && <div className="size-full [&>*]:size-full [&>img]:object-cover [&>img]:object-top">{shot}</div>}
          </div>
        </GrowthbookV2Panel>
      </div>
    </section>
  );
}

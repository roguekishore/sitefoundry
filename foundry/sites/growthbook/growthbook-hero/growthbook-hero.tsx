import { useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { GrowthbookButton } from "@foundry/growthbook-button";

export interface GrowthbookHeroTab {
  label: string;
  /** small line icon before the label (lucide, 20px) */
  icon?: ReactNode;
  /** the screenshot for this tab (img or video); a placeholder when empty */
  media?: ReactNode;
}

export interface GrowthbookHeroProps {
  /** the headline; each string is one line on desktop, the lines flow together on phones */
  title: string[];
  /** the lead under it */
  lead: string;
  /** outline button (left) */
  secondary?: { label: string; href: string };
  /** violet button with an arrow (right) */
  primary: { label: string; href: string };
  /** the segmented switch on the panel; one tab shows no switch */
  tabs: GrowthbookHeroTab[];
  /** fills the panel behind the screenshot (an image); a soft gradient when empty */
  backdrop?: ReactNode;
  className?: string;
}

export function GrowthbookHero({ title, lead, secondary, primary, tabs, backdrop, className }: GrowthbookHeroProps) {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-16 text-center md:px-[calc(var(--page-gutter)*2)] lg:pt-[4.5rem]">
        <h1 className="mx-auto max-w-[22rem] font-display text-[2.75rem] leading-[1.1] font-normal tracking-[-0.01em] sm:max-w-none lg:text-[4.25rem]">
          {title.map((line, i) => (
            <span key={i} className="lg:block">
              {line}
              {i < title.length - 1 && " "}
            </span>
          ))}
        </h1>
        <p className="mx-auto mt-7 max-w-[30rem] text-sm leading-[1.65] text-foreground/85 lg:text-base">{lead}</p>
        <div className="mt-12 flex flex-col gap-3 md:flex-row md:justify-center">
          {secondary && (
            <GrowthbookButton href={secondary.href} variant="outline" size="lg" blockOnMobile className="md:w-44 md:px-0">
              {secondary.label}
            </GrowthbookButton>
          )}
          <GrowthbookButton href={primary.href} size="lg" arrow blockOnMobile className="md:w-44 md:px-0">
            {primary.label}
          </GrowthbookButton>
        </div>
      </div>

      {/* the panel: full-bleed on phones, the 1280px container with a 12px radius from lg */}
      <div className="mt-10 lg:mx-auto lg:mt-16 lg:max-w-[calc(var(--page-width)+var(--page-gutter)*4)] lg:px-[calc(var(--page-gutter)*2)]">
        <div className="relative isolate h-[21.25rem] overflow-clip lg:h-[37.1875rem] lg:rounded-lg">
          <div className="absolute inset-0 -z-10 [&>*]:size-full [&>*]:object-cover">
            {backdrop ?? (
              <div className="bg-primary bg-[radial-gradient(ellipse_60%_70%_at_0%_100%,var(--highlight),transparent_70%),radial-gradient(ellipse_70%_80%_at_100%_0%,var(--foreground),transparent_70%),radial-gradient(ellipse_80%_60%_at_30%_0%,var(--glow),transparent_70%)] opacity-90" />
            )}
          </div>

          {tabs.length > 1 && (
            <div
              role="tablist"
              className="absolute top-12 left-1/2 hidden -translate-x-1/2 gap-1 rounded-full border-2 border-foreground/80 bg-foreground/70 p-1 backdrop-blur-sm lg:flex"
            >
              {tabs.map((t, i) => (
                <button
                  key={t.label}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex h-12 items-center gap-2.5 rounded-full px-5 text-[0.9375rem] whitespace-nowrap transition-[background-color,color] duration-300 ease-[ease] motion-reduce:transition-none [&_svg]:size-5",
                    i === active
                      ? "bg-background text-foreground"
                      : "bg-background/10 text-background hover:bg-foreground/20 hover:text-background/95",
                  )}
                >
                  {t.icon}
                  {t.label}
                </button>
              ))}
            </div>
          )}

          {/* the screenshot: 860×443 (1.94:1) rising from the bottom edge; on phones it starts
              inset from the left and runs off the right edge */}
          <div
            role={tabs.length > 1 ? "tabpanel" : undefined}
            className="absolute top-6 left-8 w-[46rem] lg:top-[9.5rem] lg:left-1/2 lg:w-[53.75rem] lg:-translate-x-1/2"
          >
            {tab.media ?? (
              <div className="aspect-[1.94] rounded-t-lg border border-foreground/10 bg-card shadow-[0_4px_16px_color-mix(in_oklab,var(--foreground)_15%,transparent)]" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

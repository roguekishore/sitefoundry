import { useRef, useState, type CSSProperties, type ReactNode } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RaycastHeading } from "@foundry/raycast-heading";
import { RaycastPlaceholder } from "@foundry/raycast-placeholder";
import "./raycast-extensions.css";

export interface RaycastExtensionCard {
  /** the extension's name */
  name: ReactNode;
  /** the one-line pitch */
  description: ReactNode;
  /** colour wash of the card: which chart token tints it (1–5) */
  tone: 1 | 2 | 3 | 4 | 5;
  /** the app tile (48px square); a placeholder tile when empty */
  icon?: ReactNode;
  /** where the card's arrow button goes */
  href: string;
  /** the artwork under the hairline; a placeholder panel when empty */
  media?: ReactNode;
}

export interface RaycastExtensionTab {
  /** the tab's name */
  label: string;
  /** the cards of this tab */
  cards: RaycastExtensionCard[];
}

export interface RaycastExtensionsProps {
  /** the white heading sentence */
  title: ReactNode;
  /** the grey heading sentence */
  subtitle?: ReactNode;
  /** the category tabs, each with its cards */
  tabs: RaycastExtensionTab[];
  /** the link at the bottom left */
  browse: { label: ReactNode; href: string };
  /** screen-reader labels of the two round arrows */
  arrowLabels?: { prev: string; next: string };
  /** screen-reader label of each card's arrow button */
  openLabel?: string;
  className?: string;
}

/** Heading + category pills + a track of tinted extension cards with round scroll arrows. */
export function RaycastExtensions({ title, subtitle, tabs, browse, arrowLabels, openLabel, className }: RaycastExtensionsProps) {
  const [tab, setTab] = useState(0);
  const track = useRef<HTMLDivElement>(null);
  const cards = tabs[tab]?.cards ?? [];
  const scrollBy = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * 416, behavior: "smooth" });
  return (
    <section className={cn("bg-background py-section text-foreground lg:py-56", className)}>
      <div className="mx-auto flex max-w-[calc(var(--page-width)+2*var(--page-gutter))] flex-col gap-12 px-gutter lg:flex-row lg:items-start lg:justify-between">
        <RaycastHeading title={title} subtitle={subtitle} align="left" className="max-w-[24rem] lg:max-w-[22rem]" />
        <div role="tablist" className="-mr-gutter flex max-w-none overflow-x-auto rounded-full bg-card/60 p-1.5 ring-1 ring-foreground/10 [scrollbar-width:none] lg:mr-0 lg:max-w-none lg:overflow-visible">
          {tabs.map((t, i) => (
            <button
              key={t.label}
              type="button"
              role="tab"
              aria-selected={i === tab}
              onClick={() => setTab(i)}
              className={cn(
                "shrink-0 rounded-full px-4 py-[0.6875rem] text-sm font-medium tracking-[0.2px] whitespace-nowrap transition-colors duration-200 motion-reduce:transition-none",
                i === tab
                  ? "bg-linear-to-b from-foreground/[0.14] to-foreground/[0.04] text-foreground shadow-[0_1px_0_0_color-mix(in_oklab,var(--foreground)_10%,transparent)_inset]"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={track}
        key={tab}
        className="raycast-extensions-track mx-auto mt-12 flex max-w-[calc(var(--page-width)+3rem)] snap-x snap-mandatory gap-6 overflow-x-auto scroll-pl-gutter px-gutter pb-16 lg:mt-[4.5rem] lg:gap-14 lg:pb-14"
      >
        {cards.map((card, i) => (
          <article
            key={i}
            style={{ ["--raycast-card-i" as string]: i, ["--tone" as string]: `var(--chart-${card.tone})` } as CSSProperties}
            className={cn(
              "raycast-extensions-card group relative flex h-[27.875rem] w-[18.75rem] shrink-0 snap-start flex-col rounded-[1.25rem] p-6 ring-1 ring-foreground/10 lg:h-[33.5rem] lg:w-[22.5rem]",
              "bg-card bg-[radial-gradient(ellipse_90%_55%_at_50%_45%,color-mix(in_oklab,var(--tone)_32%,transparent),transparent_80%)]",
              "transition-shadow duration-300 hover:shadow-[0_0_48px_8px_color-mix(in_oklab,var(--tone)_16%,transparent)] motion-reduce:transition-none",
            )}
          >
            <header className="flex items-center gap-3">
              <span className="flex size-12 shrink-0 items-center justify-center overflow-clip rounded-xl bg-background/60 ring-1 ring-foreground/25 [&_svg]:size-6">
                {card.icon ?? <RaycastPlaceholder tone="muted" className="size-full rounded-xl" />}
              </span>
              <h3 className="min-w-0 flex-1 truncate text-lg font-medium tracking-[0.2px]">{card.name}</h3>
              <a
                href={card.href}
                aria-label={openLabel}
                className="flex size-[2.375rem] shrink-0 items-center justify-center rounded-lg bg-background/30 ring-1 ring-foreground/20 transition-colors hover:bg-foreground/10 [&_svg]:size-4"
              >
                <ChevronRight />
              </a>
            </header>
            <p className="mt-6 text-base leading-[1.6] font-semibold tracking-[0.2px]">{card.description}</p>
            <div className="mt-5 flex min-h-0 flex-1 flex-col border-t border-foreground/10 pt-5 [&>*]:flex-1">
              {card.media ?? <RaycastPlaceholder tone="panel" className="rounded-xl" />}
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto flex max-w-[calc(var(--page-width)+2*var(--page-gutter))] items-center justify-between gap-4 px-gutter">
        <a href={browse.href} className="inline-flex items-center gap-1.5 text-base font-medium tracking-[0.2px] text-muted-foreground transition-colors duration-300 hover:text-foreground [&_svg]:size-4 [&_svg]:transition-transform hover:[&_svg]:translate-x-0.5">
          {browse.label}
          <ArrowRight />
        </a>
        <div className="flex gap-3.5">
          <button type="button" aria-label={arrowLabels?.prev} onClick={() => scrollBy(-1)} className="flex size-[2.875rem] items-center justify-center rounded-full bg-card/70 text-muted-foreground ring-1 ring-foreground/10 transition-colors hover:text-foreground lg:size-[3.625rem]">
            <ChevronLeft className="size-4" />
          </button>
          <button type="button" aria-label={arrowLabels?.next} onClick={() => scrollBy(1)} className="flex size-[2.875rem] items-center justify-center rounded-full bg-card/70 text-foreground ring-1 ring-foreground/10 transition-colors hover:bg-card lg:size-[3.625rem]">
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

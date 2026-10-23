import { useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SuperhumanCard, type SuperhumanCardProps } from "@foundry/superhuman-card";
import { SuperhumanSectionHeading, type SuperhumanSectionHeadingProps } from "@foundry/superhuman-section-heading";
import { SuperhumanTile, type SuperhumanTileProps } from "@foundry/superhuman-tile";

export interface SuperhumanPilotTab {
  /** the tab label */
  label: string;
  /** a lucide icon before the label */
  icon: ReactNode;
  /** the three cards shown under this tab */
  cards: SuperhumanCardProps[];
}

export interface SuperhumanPilotProps {
  /** the centred heading block */
  heading: SuperhumanSectionHeadingProps;
  /** the wide tile (teal) */
  wide: Omit<SuperhumanTileProps, "tone" | "layout">;
  /** the left half tile (maroon) */
  left: Omit<SuperhumanTileProps, "tone" | "layout">;
  /** the right half tile (stone) */
  right: Omit<SuperhumanTileProps, "tone" | "layout">;
  /** the tabs; the first is open at first */
  tabs: SuperhumanPilotTab[];
  className?: string;
}

export function SuperhumanPilot({ heading, wide, left, right, tabs, className }: SuperhumanPilotProps) {
  const [open, setOpen] = useState(0);
  return (
    <section className={cn("bg-background px-gutter py-10 text-foreground lg:py-section", className)}>
      <div className="mx-auto max-w-page">
        <SuperhumanSectionHeading {...heading} className="mb-10 lg:mb-24" />
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
          <SuperhumanTile {...wide} tone="teal" className="lg:col-span-2 lg:h-[20.5625rem]" />
          <SuperhumanTile {...left} tone="maroon" inset className="lg:h-[16.25rem]" />
          <SuperhumanTile {...right} tone="stone" inset className="lg:h-[16.25rem]" />
        </div>

        <div role="tablist" className="-mx-gutter mt-8 flex overflow-x-auto border-b border-border px-gutter lg:mx-0 lg:px-0 [scrollbar-width:none]">
          {tabs.map((t, i) => (
            <button
              key={t.label}
              type="button"
              role="tab"
              aria-selected={i === open}
              onClick={() => setOpen(i)}
              className={cn(
                "relative flex h-[3.625rem] shrink-0 items-center justify-center gap-2 px-6 text-[1.125rem]/[1.5] font-[460] whitespace-nowrap transition-colors duration-200 hover:bg-foreground/5 motion-reduce:transition-none lg:flex-auto [&_svg]:size-5",
                i === open ? "text-foreground after:absolute after:inset-x-0 after:bottom-[-1px] after:h-0.5 after:bg-foreground" : "text-foreground/65",
              )}
            >
              {t.icon}
              {t.label}
            </button>
          ))}
        </div>

        <div role="tabpanel" className="mt-16 grid gap-4 lg:grid-cols-3 lg:gap-8">
          {tabs[open].cards.map((c) => (
            <SuperhumanCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

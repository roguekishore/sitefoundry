import { useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SupabaseHeading, type SupabaseHeadingPart } from "@foundry/supabase-heading";
import { SupabasePlaceholder } from "@foundry/supabase-placeholder";

export interface SupabaseDashboardTab {
  /** the pill's label */
  label: string;
  /** the screenshot or looping video shown in the window for this tab */
  media?: ReactNode;
  /** screen-reader label for the empty slot */
  mediaLabel?: string;
}

export interface SupabaseDashboardProps {
  /** the two-tone title (ink phrase, then grey) */
  title: SupabaseHeadingPart[];
  /** the pill tabs; each swaps what the window shows */
  tabs: SupabaseDashboardTab[];
  className?: string;
}

/** A two-tone title, a row of pill tabs, and a wide browser window that runs off the bottom of the section. */
export function SupabaseDashboard({ title, tabs, className }: SupabaseDashboardProps) {
  const [active, setActive] = useState(0);
  const current = tabs[active] ?? tabs[0];
  return (
    <section className={cn("border-b border-border bg-background text-foreground", className)}>
      <div className="mx-auto box-content max-w-page px-gutter pt-section lg:pt-[5.5rem]">
        <SupabaseHeading parts={title} />
        <div role="tablist" className="mt-6 flex flex-wrap gap-2 lg:mt-8">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={cn(
                "h-[2.125rem] rounded-full border px-3.5 text-sm text-foreground transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none lg:h-[2.375rem] lg:px-8 lg:text-[0.9375rem]",
                i === active ? "border-foreground bg-card" : "border-border hover:border-muted-foreground",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* the window is cut off by the section's bottom edge, as on the original */}
        <div className="mt-8 aspect-[2/1] min-h-0 overflow-clip rounded-t-xl border border-b-0 border-border bg-card lg:aspect-[1088/596] lg:rounded-t-2xl">
          <div className="flex h-6 items-center gap-1.5 px-3 lg:h-8 lg:px-4" aria-hidden>
            <span className="size-1.5 rounded-full bg-foreground/12 lg:size-2" />
            <span className="size-1.5 rounded-full bg-foreground/12 lg:size-2" />
            <span className="size-1.5 rounded-full bg-foreground/12 lg:size-2" />
          </div>
          <div key={active} className="mx-1.5 aspect-video overflow-clip rounded-t-md lg:mx-2">
            {current?.media ?? <SupabasePlaceholder label={current?.mediaLabel} />}
          </div>
        </div>
      </div>
    </section>
  );
}

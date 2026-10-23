import { useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RaycastHeading } from "@foundry/raycast-heading";
import { RaycastPlaceholder } from "@foundry/raycast-placeholder";

export interface RaycastShowcaseItem {
  /** the name shown in the tooltip over the active key and used as the key's accessible label */
  label: string;
  /** a lucide icon for the dock key */
  icon: ReactNode;
  /** the window shot for this item; a placeholder panel when empty */
  media?: ReactNode;
  /** the bold opening of the caption under the frame */
  captionLead: ReactNode;
  /** the grey rest of the caption */
  caption: ReactNode;
}

export interface RaycastShowcaseProps {
  /** the white heading sentence */
  title: ReactNode;
  /** the grey heading sentence */
  subtitle?: ReactNode;
  /** the dock items (five fit) */
  items: RaycastShowcaseItem[];
  className?: string;
}

/** Heading, framed window with a keycap dock, caption. The dock chooses the window and caption. */
export function RaycastShowcase({ title, subtitle, items, className }: RaycastShowcaseProps) {
  const [active, setActive] = useState(0);
  const current = items[active] ?? items[0];
  return (
    <section className={cn("bg-background py-section text-foreground lg:py-56", className)}>
      <RaycastHeading title={title} subtitle={subtitle} className="px-gutter" />

      <div className="relative mx-auto mt-[4.5rem] max-w-page border-y border-foreground/10 bg-card/40 lg:mt-[4.25rem] lg:aspect-[1204/737] lg:rounded-xl lg:border">
        <div className="relative aspect-[390/386] overflow-clip lg:absolute lg:inset-0 lg:aspect-auto lg:rounded-xl [&>*]:size-full">
          {current.media ?? <RaycastPlaceholder tone="panel" className="rounded-none ring-0" />}
        </div>

        <div className="relative flex justify-center px-4 py-5 lg:absolute lg:inset-x-0 lg:bottom-8 lg:py-0">
          <div className="relative flex items-end gap-2 rounded-[1.25rem] bg-background/60 p-3 ring-1 ring-foreground/10 backdrop-blur-md">
            {items.map((item, i) => {
              const on = i === active;
              return (
                <button
                  key={item.label}
                  type="button"
                  aria-label={item.label}
                  aria-pressed={on}
                  onClick={() => setActive(i)}
                  className={cn(
                    "relative flex items-center justify-center text-muted-foreground transition-[width,height,color,background-color,box-shadow] duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none [&_svg]:size-5",
                    "shadow-[0_1.5px_0.5px_2.5px_color-mix(in_oklab,var(--background)_40%,transparent),0_0_0.5px_1px_var(--background),inset_0_2px_1px_1px_color-mix(in_oklab,var(--background)_25%,transparent),inset_0_1px_1px_1px_color-mix(in_oklab,var(--foreground)_20%,transparent)]",
                    on
                      ? "size-[4.25rem] rounded-[1.0625rem] bg-linear-to-b from-foreground/35 to-foreground/10 text-foreground [&_svg]:size-6"
                      : "size-[3.25rem] rounded-[0.8125rem] bg-linear-to-b from-foreground/[0.07] to-foreground/[0.03] hover:text-foreground",
                  )}
                >
                  {item.icon}
                  {on && (
                    <span className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 rounded-lg bg-card px-3 py-1.5 text-sm font-semibold tracking-[0.2px] whitespace-nowrap text-foreground ring-1 ring-foreground/15">
                      {item.label}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <p className="mx-auto mt-7 max-w-[22.5rem] px-gutter text-center text-base leading-[1.6] font-medium tracking-[0.2px] text-balance text-muted-foreground lg:mt-9 lg:max-w-[30rem] lg:leading-[1.65]">
        <strong className="font-semibold text-foreground">{current.captionLead}</strong> {current.caption}
      </p>
    </section>
  );
}

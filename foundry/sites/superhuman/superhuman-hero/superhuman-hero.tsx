import { useEffect, useState, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@foundry/foundry-utils";
import { SuperhumanButton } from "@foundry/superhuman-button";
import { SuperhumanLink } from "@foundry/superhuman-link";
import { SuperhumanPlaceholder } from "@foundry/superhuman-placeholder";
import "./superhuman-hero.css";

export interface SuperhumanHeroItem {
  /** the product name in the list */
  name: string;
  /** a lucide icon for the list row */
  icon: ReactNode;
  /** the one-line pitch in the list row (desktop) */
  tagline: string;
  /** the headline's grey first part */
  lead: string;
  /** the headline's bright second part (the product) */
  title: string;
  /** the lilac button */
  primary: { label: string; href: string };
  /** the lilac text link */
  secondary: { label: string; href: string };
  /** the screenshot or video for this product; empty shows a placeholder */
  media?: ReactNode;
}

export interface SuperhumanHeroProps {
  /** one entry per product; the hero rotates through them */
  items: SuperhumanHeroItem[];
  /** the small heading above the list */
  listLabel: string;
  /** index shown first */
  initialIndex?: number;
  /** milliseconds each product stays */
  interval?: number;
  className?: string;
}

export function SuperhumanHero({ items, listLabel, initialIndex = 0, interval = 10000, className }: SuperhumanHeroProps) {
  const [active, setActive] = useState(initialIndex);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || items.length < 2) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % items.length), interval);
    return () => clearTimeout(t);
  }, [active, interval, items.length, reduce]);

  const item = items[active];
  return (
    <section
      className={cn("bg-linear-to-b from-chart-5 to-chart-2 text-primary-foreground lg:bg-[linear-gradient(to_right,var(--chart-5)_50%,var(--chart-2)_50%)]", className)}
      style={{ "--superhuman-hero-interval": `${interval}ms` } as React.CSSProperties}
    >
      <div className="mx-auto grid max-w-[calc(var(--page-width)+2*var(--page-gutter))] px-gutter lg:min-h-[40.625rem] lg:grid-cols-2 lg:grid-rows-[1fr_auto]">
        <div key={`text-${active}`} className="superhuman-hero-dissolve pt-10 lg:pt-12 lg:pr-10">
          <h1 className="max-w-[40rem] text-[2rem]/[1.2] font-[460] tracking-[-0.0275em] lg:text-[3.0625rem]/[1.2]">
            <span className="text-primary-foreground/65">{item.lead}</span> {item.title}
          </h1>
          <div className="mt-7 flex items-center gap-4 lg:mt-8">
            <SuperhumanButton label={item.primary.label} href={item.primary.href} variant="secondary" size="sm" />
            <SuperhumanLink label={item.secondary.label} href={item.secondary.href} tone="soft" />
          </div>
        </div>

        <div key={`media-${active}`} className="superhuman-hero-dissolve mt-10 aspect-[4/5] overflow-clip rounded-lg lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:aspect-auto lg:rounded-none [&_img]:size-full [&_img]:object-cover [&_video]:size-full [&_video]:object-cover">
          {item.media ?? <SuperhumanPlaceholder tone="wash" className="size-full" />}
        </div>

        <div className="mt-5 pb-5 lg:mt-0 lg:pb-0">
          <p className="mb-6 hidden text-sm font-semibold text-primary-foreground/80 lg:block">{listLabel}</p>
          <ul className="grid grid-cols-3 gap-2 lg:block lg:gap-0">
            {items.map((it, i) => {
              const on = i === active;
              return (
                <li key={it.name} className="relative lg:border-t lg:border-primary-foreground/10">
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => setActive(i)}
                    className={cn(
                      "group relative flex w-full flex-col items-start gap-2 rounded-sm py-3 text-left text-base font-[540] transition-colors duration-200 hover:bg-linear-to-r hover:from-transparent hover:from-0% hover:via-primary-foreground/6 hover:via-10% hover:to-primary-foreground/6 motion-reduce:transition-none",
                      "lg:grid lg:h-[3.5625rem] lg:grid-cols-[1.5rem_4.5rem_1fr] lg:items-center lg:gap-x-3 lg:rounded-none lg:py-0 lg:pl-8",
                      on ? "text-primary-foreground" : "text-primary-foreground/65",
                    )}
                  >
                    <span className={cn("flex size-6 items-center justify-center rounded-[0.4rem] text-chart-5 [&_svg]:size-4", on ? "bg-primary-foreground" : "bg-primary-foreground/65")}>{it.icon}</span>
                    <span>{it.name}</span>
                    <span className={cn("hidden lg:block", on ? "text-primary-foreground" : "text-primary-foreground/80")}>{it.tagline}</span>
                    {on && !reduce && <span key={`bar-${active}`} aria-hidden className="superhuman-hero-progress absolute inset-x-0 top-0 h-0.5 bg-primary-foreground/80 lg:-top-px lg:h-px" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

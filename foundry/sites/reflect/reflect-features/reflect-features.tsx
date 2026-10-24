import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface ReflectFeature {
  /** a 32px line icon (e.g. lucide with strokeWidth 1.25) */
  icon: ReactNode;
  title: string;
  /** one short sentence */
  text: string;
}

export interface ReflectFeaturesProps {
  /** the cells, read left to right then down (eight in the original) */
  items: ReflectFeature[];
  /** accessible name of the list */
  label?: string;
  className?: string;
}

/** Hairline-ruled feature cells: a grid on desktop, a swipe row on phones. */
export function ReflectFeatures({ items, label, className }: ReflectFeaturesProps) {
  return (
    <section className={cn("relative bg-background text-foreground", className)}>
      <ul
        aria-label={label}
        className="mx-auto flex max-w-page snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] lg:grid lg:grid-cols-4 lg:overflow-visible lg:[&>li:nth-child(n+5)]:border-t"
      >
        {items.map((item) => (
          <li
            key={item.title}
            className="group relative w-[18.75rem] shrink-0 snap-start border-l border-border px-8 pt-6 pb-9 lg:w-auto lg:border-border/70 lg:last:border-r lg:[&:nth-child(4n)]:border-r"
          >
            {/* hover light from the top of the cell */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_130%_at_65%_-35%,color-mix(in_oklab,var(--glow)_16%,transparent),transparent),linear-gradient(180deg,transparent_55%,color-mix(in_oklab,var(--foreground)_4%,transparent))] opacity-0 transition-opacity duration-[450ms] ease-[cubic-bezier(0.6,0.6,0,1)] group-hover:opacity-100 motion-reduce:transition-none"
            />
            <div className="relative grid size-8 place-items-center text-foreground [&_svg]:size-8">{item.icon}</div>
            <h3 className="relative mt-9 text-base/6 font-medium">
              {/* the bright tick on the left rule */}
              <span aria-hidden className="absolute top-1 -left-8 h-4 w-px bg-foreground/35" />
              {item.title}
            </h3>
            <p className="relative mt-1 max-w-[15rem] text-base/6 text-muted-foreground">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

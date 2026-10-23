import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { UnitArrowCircle } from "@foundry/unit-arrow-circle";
import { UnitChip } from "@foundry/unit-chip";
import { UnitPlaceholder } from "@foundry/unit-placeholder";

export interface UnitProduct {
  /** the card's title, e.g. "Hold funds" */
  title: string;
  /** one or two lines under it */
  description: string;
  /** capability pills */
  chips: string[];
  /** where the card links to */
  href: string;
  /** the product illustration at the card's foot (626×398 on desktop); a placeholder when empty */
  media?: ReactNode;
}

export interface UnitProductsProps {
  /** the big two-line heading */
  heading: string;
  /** four cards read best (2×2) */
  products: UnitProduct[];
  className?: string;
}

/** Each card warms to its own pastel on hover: lilac, aqua, lime, mint. */
const tints = ["hover:bg-chart-1/20", "hover:bg-chart-2/25", "hover:bg-chart-3/35", "hover:bg-chart-4/30"];

/** A big heading over a 2×2 grid of pale, nearly square-cornered product cards, each with pills and an illustration at its foot. */
export function UnitProducts({ heading, products, className }: UnitProductsProps) {
  return (
    <section className={cn("bg-background font-sans text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-[4.25rem] pb-16 lg:pt-40 lg:pb-36">
        <h2 className="max-w-[22rem] font-display text-[1.75rem] leading-[1.12] tracking-[-0.02em] lg:max-w-[42rem] lg:text-5xl lg:leading-[1.1]">{heading}</h2>
        <ul className="mt-10 grid gap-6 lg:mt-20 lg:grid-cols-2">
          {products.map((p, i) => (
            <li key={p.title} className="flex">
              <a
                href={p.href}
                className={cn(
                  "group/card flex w-full flex-col overflow-clip rounded-[0.25rem] border border-border bg-card transition-colors duration-600 ease-[cubic-bezier(0.165,0.84,0.44,1)] motion-reduce:transition-none",
                  tints[i % tints.length],
                )}
              >
                <div className="px-5 pt-5 lg:px-8 lg:pt-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="pt-1 text-[1.203rem] leading-[1.2] tracking-[-0.01em] lg:text-[1.625rem]">{p.title}</h3>
                    <UnitArrowCircle />
                  </div>
                  <p className="mt-3 max-w-[28rem] text-[0.984rem] leading-[1.4] tracking-[0.01em] text-muted-foreground lg:mt-3.5 lg:text-lg lg:leading-[1.45]">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2 lg:mt-5">
                    {p.chips.map((c) => (
                      <UnitChip key={c}>{c}</UnitChip>
                    ))}
                  </div>
                </div>
                <div className="mt-auto pt-8 lg:pt-6">
                  <div className="aspect-[626/398] w-full overflow-clip">{p.media ?? <UnitPlaceholder tone="fade" className="size-full" />}</div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

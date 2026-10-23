import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PlaidButton } from "@foundry/plaid-button";
import { PlaidPlaceholder } from "@foundry/plaid-placeholder";
import "./plaid-products.css";

export interface PlaidProduct {
  /** the bold start of the title */
  lead: string;
  /** the rest of the title, in blue-grey */
  rest: string;
  /** where the card links to */
  href: string;
  /** the product picture rising from the bottom of the card. A placeholder when empty */
  media?: ReactNode;
}

export interface PlaidProductsProps {
  /** the big heading (two short sentences read best) */
  title: string;
  /** the near-black pill under it */
  action: { label: string; href: string };
  /** the cards: the first two are wide, the rest share the next row in threes */
  products: PlaidProduct[];
  /** screen-reader text added to each card's link, e.g. "Learn more" */
  linkLabel: string;
  className?: string;
}

// The rainbow, as a conic sweep through the theme's bright colours.
const rainbow =
  "bg-[conic-gradient(var(--chart-4),var(--highlight),var(--glow),var(--chart-3),var(--chart-2),var(--chart-5),var(--chart-4))]";

/** Plaid's product bento: soft cards whose rainbow rim spins in on hover. */
export function PlaidProducts({ title, action, products, linkLabel, className }: PlaidProductsProps) {
  return (
    <section className={cn("bg-background pt-20 pb-6 text-foreground lg:pt-[8.25rem] lg:pb-24", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <h2 className="max-w-[21rem] font-display text-[1.875rem]/[1.18] font-medium tracking-[-0.06em] lg:max-w-[66rem] lg:text-6xl/[1.1] lg:tracking-[-0.045em]">
          {title}
        </h2>
        <PlaidButton href={action.href} className="mt-6 lg:mt-9">
          {action.label}
        </PlaidButton>

        <ul className="mt-16 grid gap-6 lg:grid-cols-6">
          {products.map((p, i) => (
            <li key={p.lead} className={cn("lg:col-span-2", i < 2 ? "lg:col-span-3 lg:h-[36.4375rem]" : "lg:h-[38.6875rem]")}>
              <a
                href={p.href}
                className="plaid-products-card group relative isolate block h-[26rem] overflow-clip rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:h-full"
              >
                {/* the spinning rainbow, hidden by the surface until hover */}
                <span
                  aria-hidden
                  className={cn(
                    "plaid-products-rim absolute top-1/2 left-1/2 -z-20 aspect-square w-[160%] -translate-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100",
                    rainbow,
                  )}
                />
                <span
                  aria-hidden
                  className="plaid-products-surface absolute inset-0 -z-10 rounded-lg bg-card bg-linear-to-b from-glow/15 via-secondary/70 to-accent/60 transition-[inset,border-radius] duration-250 ease-out group-hover:inset-1 group-hover:rounded-[calc(var(--radius)-4px)] motion-reduce:transition-none"
                />

                <span className="flex items-start gap-4 p-4 pt-6 lg:p-6 lg:pt-6">
                  <span className={cn("flex-1 font-display text-xl/[1.4] font-medium tracking-[-0.02em] text-muted-foreground lg:text-[1.625rem]/[1.4]", i < 2 ? "lg:max-w-[25rem]" : "lg:max-w-[17rem]")}>
                    <span className="font-semibold text-foreground">{p.lead}</span> {p.rest}
                    <span className="sr-only"> · {linkLabel}</span>
                  </span>
                  <span
                    aria-hidden
                    className="plaid-products-arrow grid size-[2.625rem] shrink-0 place-items-center rounded-full border border-chart-3 text-foreground transition-colors duration-250 group-hover:border-transparent group-hover:bg-foreground group-hover:text-background motion-reduce:transition-none"
                  >
                    <ArrowRight className="size-4" strokeWidth={2.25} />
                  </span>
                </span>

                <span className="absolute inset-x-0 bottom-0 flex h-[50%] justify-center transition-transform duration-250 ease-out group-hover:-translate-y-2.5 motion-reduce:transition-none">
                  {p.media ?? <PlaidPlaceholder tone="panel" className="h-full w-[68%] max-w-[19rem] rounded-t-[1.25rem]" />}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

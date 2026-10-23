import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ZoeButton } from "@foundry/zoe-button";
import { ZoeHeading } from "@foundry/zoe-heading";
import { ZoePlaceholder } from "@foundry/zoe-placeholder";

export interface ZoeProduct {
  /** the product's name */
  name: string;
  /** one or two sentences */
  description: string;
  /** a small white badge in the image's top-right corner (e.g. a starting price) */
  badge?: string;
  /** the yellow button */
  cta: { label: string; href: string };
  /** the product shot (object-contain on the card colour); a placeholder when empty */
  media?: ReactNode;
}

export interface ZoeProductsProps {
  /** the heading above the grid */
  title: string;
  /** the cards, two per row on desktop */
  products: ZoeProduct[];
  /** small italic print under the grid */
  footnote?: string;
  className?: string;
}

/** Zoe's product card grid. */
export function ZoeProducts({ title, products, footnote, className }: ZoeProductsProps) {
  return (
    <section className={cn("py-section", className)}>
      <div className="mx-auto max-w-page px-gutter lg:px-[calc(var(--page-gutter)+1.5rem)]">
        <ZoeHeading title={title} />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-6 lg:mt-11 lg:gap-12">
          {products.map((p) => (
            <article key={p.name} className="flex flex-col overflow-clip rounded-2xl bg-card text-card-foreground">
              <div className="relative aspect-[600/465]">
                <div className="absolute inset-0 *:size-full *:object-contain">{p.media ?? <ZoePlaceholder tone="soft" />}</div>
                {p.badge && (
                  <span className="absolute top-5 right-8 rounded-[calc(var(--radius)/3)] bg-background px-2 py-0.5 text-sm text-foreground lg:top-8">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="px-6 pt-6 pb-6">
                <h3 className="font-display text-[2.125rem] leading-[1.05] font-light tracking-[-0.02em] lg:text-[2.5rem]">
                  {p.name}
                </h3>
                <p className="mt-6 text-lg leading-[1.2] lg:mt-5">{p.description}</p>
                <ZoeButton href={p.cta.href} className="mt-6 w-full sm:w-auto lg:mt-4">
                  {p.cta.label}
                </ZoeButton>
              </div>
            </article>
          ))}
        </div>
        {footnote && (
          <p className="mx-auto mt-12 max-w-[43rem] text-center text-sm leading-[1.35] text-muted-foreground italic">
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
}

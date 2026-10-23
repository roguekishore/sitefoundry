import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PaxosButton } from "@foundry/paxos-button";
import { PaxosHeading } from "@foundry/paxos-heading";
import { PaxosPlaceholder } from "@foundry/paxos-placeholder";

export interface PaxosProduct {
  /** the product's name */
  name: string;
  /** one line about it */
  summary: ReactNode;
  /** the pill under it */
  action: { label: string; href: string };
  /** the render in the grey frame; a plain grey frame when empty */
  media?: ReactNode;
}

export interface PaxosProductsProps {
  /** the section title */
  title: ReactNode;
  /** the products (two on the original) */
  products: PaxosProduct[];
  className?: string;
}

/** Title and a two-up row of product cards with large render frames. */
export function PaxosProducts({ title, products, className }: PaxosProductsProps) {
  return (
    <section className={cn("bg-background px-gutter py-16 lg:pt-[6.5rem] lg:pb-[7.5rem]", className)}>
      <div className="mx-auto max-w-page">
        <PaxosHeading title={title} />
        <ul className="mt-8 grid gap-20 lg:mt-[5.5rem] lg:grid-cols-2 lg:gap-[7.5rem]">
          {products.map((product) => (
            <li key={product.name} className="flex flex-col items-start">
              <div className="aspect-[350/400] w-full overflow-clip rounded-lg bg-muted lg:aspect-[560/400]">
                {product.media ?? <PaxosPlaceholder />}
              </div>
              <h3 className="mt-10 font-display text-2xl/[1.2] font-normal tracking-[-0.02em] text-foreground lg:mt-[2.6rem] lg:text-[2rem]/[1.19]">
                {product.name}
              </h3>
              <p className="mt-3 text-[0.9rem]/[1.4] tracking-[-0.01em] text-muted-foreground lg:mt-5 lg:text-base/[1.4]">{product.summary}</p>
              <PaxosButton href={product.action.href} className="mt-5 lg:mt-[1.1rem]">
                {product.action.label}
              </PaxosButton>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

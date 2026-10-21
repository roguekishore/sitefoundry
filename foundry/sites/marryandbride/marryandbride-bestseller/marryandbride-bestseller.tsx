import { cn } from "@foundry/foundry-utils";
import { MarryandbrideProductCard, type MarryandbrideProduct } from "@foundry/marryandbride-product-card";

export interface MarryandbrideBestsellerProps {
  /** the serif heading */
  title: string;
  /** the small link at the right of the heading */
  viewAll: { label: string; href: string };
  /** the products (four fill the desktop row) */
  products: MarryandbrideProduct[];
  className?: string;
}

/** Heading row plus four product tiles; a swipe row on phones. */
export function MarryandbrideBestseller({ title, viewAll, products, className }: MarryandbrideBestsellerProps) {
  return (
    <section className={cn("bg-background pt-section pb-12 text-foreground lg:pb-[3.25rem]", className)}>
      <div className="flex items-end justify-between px-gutter">
        <h2 className="font-display text-[1.63rem] leading-[1.35] font-[350] lg:text-[2.02rem]">{title}</h2>
        <a
          href={viewAll.href}
          className="pb-1.5 font-sans text-[0.78rem] leading-none tracking-[0.07em] uppercase transition-opacity duration-200 hover:opacity-70 lg:pb-1 lg:text-[0.863rem]"
        >
          {viewAll.label}
        </a>
      </div>
      <ul className="mt-4 flex snap-x snap-mandatory scroll-px-gutter gap-2 overflow-x-auto px-gutter [scrollbar-width:none] lg:mt-6 lg:grid lg:grid-cols-4 lg:gap-[0.5625rem] lg:overflow-visible">
        {products.map((product) => (
          <li key={product.href} className="w-[57.7vw] shrink-0 snap-start lg:w-auto">
            <MarryandbrideProductCard {...product} />
          </li>
        ))}
      </ul>
    </section>
  );
}

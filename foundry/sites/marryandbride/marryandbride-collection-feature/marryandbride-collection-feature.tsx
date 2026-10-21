import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { MarryandbrideLink } from "@foundry/marryandbride-link";
import { MarryandbrideProductCard, type MarryandbrideProduct } from "@foundry/marryandbride-product-card";

export interface MarryandbrideCollectionFeatureProps {
  /** the collection's serif title */
  title: string;
  /** one or two sentences about it */
  body: string;
  /** the underlined link under the text */
  cta: { label: string; href: string };
  /** two products from the collection */
  products: MarryandbrideProduct[];
  /** the big photo (4:5 on desktop) */
  media?: ReactNode;
  /** put the photo on the right from 1024px */
  reverse?: boolean;
  className?: string;
}

/** Half photo, half (two tiles + title, text, link); mirrored with `reverse`. */
export function MarryandbrideCollectionFeature({ title, body, cta, products, media, reverse = false, className }: MarryandbrideCollectionFeatureProps) {
  return (
    <section className={cn("bg-background text-foreground lg:grid lg:grid-cols-2", className)}>
      <div
        className={cn(
          "aspect-[39/42] bg-muted lg:aspect-[4/5] [&_img]:size-full [&_img]:object-cover",
          reverse && "lg:order-2",
        )}
      >
        {media}
      </div>
      <div
        className={cn(
          "flex flex-col px-gutter pb-11 lg:justify-between lg:pt-[2.1rem] lg:pb-[3.25rem]",
          reverse ? "lg:pr-[7.1vw]" : "lg:pl-[7.1vw]",
        )}
      >
        <div className="order-2 mt-10 grid grid-cols-2 gap-2 lg:order-1 lg:mt-0 lg:gap-[0.5625rem]">
          {products.map((product) => (
            <MarryandbrideProductCard key={product.href} {...product} />
          ))}
        </div>
        <div className="order-1 pt-9 lg:order-2 lg:pt-12">
          <h2 className="font-display text-[1.96rem] leading-[1.3] font-light lg:text-[2.5rem]">{title}</h2>
          <p className="mt-3 max-w-[31rem] font-sans text-[0.78rem] leading-[1.55] lg:mt-4 lg:text-[0.863rem]">{body}</p>
          <MarryandbrideLink
            href={cta.href}
            className="mt-9 inline-block font-sans text-[0.78rem] leading-none tracking-[0.07em] uppercase lg:mt-11 lg:text-[0.863rem]"
          >
            {cta.label}
          </MarryandbrideLink>
        </div>
      </div>
    </section>
  );
}

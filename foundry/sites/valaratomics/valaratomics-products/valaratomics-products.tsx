import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ValaratomicsIntro } from "@foundry/valaratomics-intro";
import { ValaratomicsPlaceholder } from "@foundry/valaratomics-placeholder";
import "./valaratomics-products.css";

export interface ValaratomicsProduct {
  /** the card's mono caps title, e.g. "Steam heat" */
  name: string;
  /** two to four lines about it */
  body: string;
  /** the card's background image or video (cropped like object-fit: cover); empty shows a placeholder */
  media?: ReactNode;
  /** optional link for the whole card */
  href?: string;
}

export interface ValaratomicsProductsProps {
  /** the section heading */
  title: string;
  /** the paragraph beside it */
  body: string;
  /** the product cards (four in the original) */
  items: ValaratomicsProduct[];
  className?: string;
}

/**
 * On a white band: a two-half intro, then a row of four tall dark picture cards (stacked
 * wide cards on phones) with a mono caps title at the top and a short paragraph lower down.
 * On desktop one card is lit at a time: the first at rest, the hovered one otherwise, while
 * the rest sit under a black veil.
 */
export function ValaratomicsProducts({ title, body, items, className }: ValaratomicsProductsProps) {
  return (
    <section className={cn("bg-card px-gutter py-section text-card-foreground", className)}>
      <div className="mx-auto max-w-page">
        <ValaratomicsIntro title={title} body={body} />
        <ul className="valaratomics-products-grid mt-9 grid gap-5 lg:mt-section lg:grid-cols-4">
          {items.map((item) => {
            const Tag = item.href ? "a" : "div";
            return (
              <li key={item.name} className="group/card">
                <Tag
                  {...(item.href ? { href: item.href } : {})}
                  className="dark relative isolate flex min-h-[14.375rem] flex-col overflow-clip rounded-sm bg-background p-[0.9375rem] text-foreground lg:aspect-[303/410]"
                >
                  <div className="absolute inset-0 -z-10 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/card:scale-[1.04] motion-reduce:transition-none [&>*]:size-full [&_img]:object-cover [&_video]:object-cover">
                    {item.media ?? <ValaratomicsPlaceholder tone="photo" />}
                  </div>
                  <h3 className="font-mono text-2xl leading-none font-medium uppercase">{item.name}</h3>
                  <p className="mt-[4.5rem] text-[1.375rem] leading-[1.06] tracking-[-0.02em] lg:mt-[10.75rem]">
                    {item.body}
                  </p>
                  <div
                    aria-hidden
                    className="valaratomics-products-veil pointer-events-none absolute inset-0 bg-background/75 opacity-0 transition-opacity duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none"
                  />
                </Tag>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

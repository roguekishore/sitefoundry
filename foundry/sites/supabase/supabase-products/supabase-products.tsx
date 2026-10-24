import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { SupabasePlaceholder } from "@foundry/supabase-placeholder";

export interface SupabaseProduct {
  /** a small line icon before the title (16px) */
  icon?: ReactNode;
  title: string;
  /** grey text; wrap the words to stress in <strong> and they turn ink */
  description: ReactNode;
  /** a short checked list at the bottom of a wide card */
  points?: string[];
  /** the illustration (desktop only); an empty slot shows a soft placeholder */
  media?: ReactNode;
  /** screen-reader label for the illustration slot */
  mediaLabel?: string;
  /** spans two columns on desktop, with text left and the illustration right */
  wide?: boolean;
  href?: string;
}

export interface SupabaseProductsProps {
  /** the cards, in reading order; seven fill two rows when the first is wide */
  products: SupabaseProduct[];
  /** the line under the grid; wrap the lead-in in <strong> to set it in ink */
  summary?: ReactNode;
  className?: string;
}

/** The product bento: a 4-column grid of 400px white cards on desktop, a plain stack of text cards on phones. */
export function SupabaseProducts({ products, summary, className }: SupabaseProductsProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto box-content max-w-page px-gutter pb-16 lg:pb-20">
        <ul className="grid gap-4 lg:grid-cols-4 lg:gap-3">
          {products.map((product) => {
            const Tag = product.href ? "a" : "div";
            return (
              <li key={product.title} className={cn(product.wide && "lg:col-span-2")}>
                <Tag
                  {...(product.href ? { href: product.href } : {})}
                  className={cn(
                    "relative flex h-full flex-col overflow-clip rounded-xl border border-border bg-card p-4 transition-shadow duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-md hover:shadow-foreground/8 motion-reduce:transition-none lg:h-[25rem] lg:rounded-2xl lg:p-6",
                    product.wide && "lg:grid lg:grid-cols-2 lg:gap-6",
                  )}
                >
                  <div className="relative z-10 flex flex-col lg:h-full">
                    <h3 className="flex items-center gap-2.5 text-base font-medium text-foreground lg:text-lg [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5]">
                      {product.icon}
                      {product.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground lg:mt-3 lg:text-[0.9375rem] lg:leading-[1.375rem] [&_strong]:font-[450] [&_strong]:text-foreground">
                      {product.description}
                    </p>
                    {product.points && (
                      <ul className="mt-auto hidden gap-1 pt-6 text-[0.9375rem] lg:grid">
                        {product.points.map((point) => (
                          <li key={point} className="flex items-center gap-2">
                            <Check className="size-3.5 shrink-0" strokeWidth={2} />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div
                    className={cn(
                      "hidden lg:block",
                      product.wide ? "lg:relative lg:my-auto lg:aspect-square lg:w-full" : "lg:absolute lg:inset-x-0 lg:bottom-0 lg:h-[55%]",
                    )}
                  >
                    {product.media ?? <SupabasePlaceholder tone="soft" label={product.mediaLabel} />}
                  </div>
                </Tag>
              </li>
            );
          })}
        </ul>
        {summary && (
          <p className="mt-7 max-w-[34rem] font-display text-[1.375rem] leading-[1.36] font-medium text-muted-foreground lg:max-w-none [&_strong]:font-medium [&_strong]:text-foreground">
            {summary}
          </p>
        )}
      </div>
    </section>
  );
}

import { Globe } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { StripeButton } from "@foundry/stripe-button";
import { StripeFrame } from "@foundry/stripe-frame";

export interface StripeFooterGroup {
  title: string;
  links: { label: string; href: string }[];
}

export interface StripeFooterProps {
  /** four columns, each with one or more link groups */
  columns: StripeFooterGroup[][];
  /** an indigo link at the end of the last column (e.g. sign in) */
  action?: { label: string; href: string };
  /** the region switcher link */
  locale?: { label: string; href: string };
  /** the copyright line */
  copyright: string;
  /** the brand's name, for the small mark at the bottom right (screen readers) */
  brand?: string;
  className?: string;
}

/**
 * Pale footer: four columns of slate links under small navy titles, divided by dashed
 * hairlines; a region link, the copyright and a small slanted brand mark along the bottom.
 */
export function StripeFooter({ columns, action, locale, copyright, brand, className }: StripeFooterProps) {
  return (
    <StripeFrame as="footer" rule="dashed" className={cn("bg-muted", className)} padded={false}>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {columns.map((groups, ci) => (
          <div
            key={ci}
            className={cn(
              "space-y-10 px-gutter py-10 lg:space-y-14 lg:py-14",
              ci > 0 && "lg:border-l lg:border-dashed lg:border-border",
              ci % 2 === 1 && "border-l border-dashed border-border",
            )}
          >
            {groups.map((g) => (
              <div key={g.title}>
                <h3 className="text-sm font-normal text-foreground lg:text-[0.9375rem]">{g.title}</h3>
                <ul className="mt-4 space-y-2 lg:space-y-1.5">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-sm font-light text-muted-foreground transition-colors hover:text-foreground lg:text-[0.9375rem]">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {action && ci === columns.length - 1 && (
              <StripeButton href={action.href} variant="link" className="text-[0.9375rem]">
                {action.label}
              </StripeButton>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-end justify-between border-t border-dashed border-border px-gutter py-8">
        <div>
          {locale && (
            <a href={locale.href} className="flex items-center gap-1.5 text-sm font-normal text-primary transition-colors hover:text-foreground">
              <Globe className="size-4" strokeWidth={1.75} />
              {locale.label}
            </a>
          )}
          <p className="mt-3 text-sm font-light text-foreground">{copyright}</p>
        </div>
        <span role="img" aria-label={brand} className="block h-8 w-11 bg-foreground [clip-path:polygon(0_22%,100%_0,100%_78%,0_100%)]" />
      </div>
    </StripeFrame>
  );
}

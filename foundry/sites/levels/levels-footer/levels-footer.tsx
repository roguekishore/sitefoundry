import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { LevelsWordmark } from "@foundry/levels-wordmark";

export interface LevelsFooterColumn {
  /** tracked grey heading */
  title: string;
  /** the column's links */
  links: { label: string; href: string }[];
}

export interface LevelsFooterProps {
  /** the company name, set as the wordmark */
  brand: string;
  /** the mailing-list form */
  newsletter?: {
    /** tracked label */
    title: string;
    /** one line of text */
    text?: ReactNode;
    /** placeholder inside the field */
    placeholder?: string;
    /** the button's text */
    button: string;
    /** screen-reader label for the field */
    fieldLabel?: string;
    /** form action URL */
    action?: string;
  };
  /** the link columns (three on the original) */
  columns: LevelsFooterColumn[];
  /** copyright line */
  copyright?: ReactNode;
  /** small links beside the copyright */
  legal?: { label: string; href: string }[];
  /** the grey small print at the bottom */
  disclaimer?: ReactNode;
  className?: string;
}

const linkClass =
  "text-sm leading-6 text-foreground/80 transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-foreground motion-reduce:transition-none";

/** Dark footer with a mailing-list form, link columns and small print. */
export function LevelsFooter({ brand, newsletter, columns, copyright, legal, disclaimer, className }: LevelsFooterProps) {
  return (
    <footer className={cn("dark bg-background px-gutter pt-16 pb-16 text-foreground lg:pt-20 lg:pb-20", className)}>
      <div className="mx-auto max-w-page border-t border-border pt-16 lg:pt-14">
        <div className="flex flex-col gap-16 lg:flex-row lg:justify-between lg:gap-12">
          <div className="lg:max-w-[28rem] lg:grow">
            <LevelsWordmark brand={brand} size="lg" />
            {newsletter ? (
              <form action={newsletter.action} className="mt-10">
                <p className="text-sm leading-5 font-semibold tracking-[0.187em] text-muted-foreground uppercase">{newsletter.title}</p>
                {newsletter.text ? <p className="mt-4 text-sm leading-7 text-foreground/80">{newsletter.text}</p> : null}
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    name="email"
                    aria-label={newsletter.fieldLabel}
                    placeholder={newsletter.placeholder}
                    className="h-12 min-w-0 grow rounded-full bg-foreground px-4 text-sm text-background outline-none placeholder:text-background/50 focus-visible:ring-2 focus-visible:ring-ring lg:max-w-[22.5rem]"
                  />
                  <button
                    type="submit"
                    className="h-12 rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-colors duration-150 hover:bg-foreground/90 motion-reduce:transition-none"
                  >
                    {newsletter.button}
                  </button>
                </div>
              </form>
            ) : null}
          </div>

          <div className="grid gap-12 lg:w-[38.75rem] lg:grid-cols-3 lg:gap-6">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-sm leading-5 font-semibold tracking-[0.187em] text-muted-foreground uppercase">{column.title}</p>
                <ul className="mt-7 flex flex-col gap-5 lg:mt-8">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className={linkClass}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-10 lg:mt-14">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {copyright ? <p className="text-sm leading-6 text-foreground/70">{copyright}</p> : null}
            {legal?.length ? (
              <ul className="flex gap-6">
                {legal.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={cn(linkClass, "text-foreground/70")}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          {disclaimer ? <p className="mt-6 max-w-[64rem] text-sm leading-7 text-muted-foreground lg:mt-8">{disclaimer}</p> : null}
        </div>
      </div>
    </footer>
  );
}

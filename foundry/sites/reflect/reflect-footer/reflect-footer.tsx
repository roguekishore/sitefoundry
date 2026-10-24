import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ReflectIconTile } from "@foundry/reflect-header";

export interface ReflectFooterLink {
  label: string;
  href: string;
}

export interface ReflectFooterColumn {
  title: string;
  links: ReflectFooterLink[];
}

export interface ReflectFooterProps {
  /** the product name next to the icon tile */
  name: string;
  /** the glyph inside the violet icon tile */
  icon: ReactNode;
  homeHref?: string;
  /** small icon links under the name (on phones, at the right of it) */
  socials?: (ReflectFooterLink & { icon: ReactNode })[];
  /** three link columns */
  columns: ReflectFooterColumn[];
  /** the sign-up row */
  newsletter?: {
    title: string;
    text?: string;
    /** placeholder of the email field */
    placeholder: string;
    /** accessible name of the email field */
    fieldLabel: string;
    button: string;
    /** where the form posts */
    action?: string;
  };
  /** legal links at the bottom left, separated by dots */
  legal?: ReflectFooterLink[];
  /** e.g. "© 2026 Nocturne Labs" */
  copyright?: string;
  className?: string;
}

const linkClass =
  "text-[0.9375rem]/6 text-muted-foreground transition-colors duration-[450ms] ease-[cubic-bezier(0.6,0.6,0,1)] hover:text-foreground/70 motion-reduce:transition-none";

/** Name and socials, three link columns, a newsletter row and the legal line, split by hairlines. */
export function ReflectFooter({ name, icon, homeHref = "#", socials, columns, newsletter, legal, copyright, className }: ReflectFooterProps) {
  return (
    <footer
      className={cn(
        "relative border-t border-border bg-background bg-[radial-gradient(40%_50%_at_50%_0%,color-mix(in_oklab,var(--glow)_8%,transparent),transparent)] text-foreground",
        className,
      )}
    >
      <div className="mx-auto max-w-[70.5rem] px-[2.75rem] pt-10 pb-24 sm:px-gutter lg:px-0 lg:pt-20 lg:pb-[6.5rem]">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-between lg:flex-col lg:items-start lg:justify-start lg:gap-[7.5rem]">
            <a href={homeHref} className="flex items-center gap-3 text-[1.0625rem]/6 font-medium">
              <ReflectIconTile icon={icon} />
              {name}
            </a>
            {socials && (
              <ul className="flex items-center gap-6">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} aria-label={s.label} className={cn(linkClass, "block [&_svg]:size-5")}>
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-0">
            {columns.map((col) => (
              <div key={col.title} className="lg:w-[13.1875rem] lg:last:w-[13.5rem]">
                <h2 className="text-[0.9375rem]/6 font-medium">{col.title}</h2>
                <ul className="mt-3.5 flex flex-col gap-[0.9375rem] lg:mt-4 lg:gap-4">
                  {col.links.map((link) => (
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

        {newsletter && (
          <div className="mt-8 flex flex-col gap-8 border-y border-border py-10 lg:mt-[5.5rem] lg:flex-row lg:items-center lg:justify-between lg:py-[4.25rem]">
            <div>
              <h2 className="font-display text-2xl/8 font-[560]">{newsletter.title}</h2>
              {newsletter.text && <p className="mt-2 text-sm/5 text-muted-foreground">{newsletter.text}</p>}
            </div>
            <form action={newsletter.action} className="flex flex-col gap-2 lg:flex-row">
              <input
                type="email"
                name="email"
                required
                aria-label={newsletter.fieldLabel}
                placeholder={newsletter.placeholder}
                className="h-[2.375rem] rounded-lg border border-foreground/10 bg-foreground/[0.02] px-3 text-sm/5 text-foreground transition-colors duration-[450ms] ease-[cubic-bezier(0.6,0.6,0,1)] outline-none placeholder:text-muted-foreground hover:bg-foreground/6 focus:border-highlight/40 motion-reduce:transition-none lg:w-[18.5rem]"
              />
              <button
                type="submit"
                className="h-[2.375rem] rounded-lg border border-foreground/10 bg-secondary px-4 text-sm/5 font-medium text-secondary-foreground transition-colors duration-[450ms] ease-[cubic-bezier(0.6,0.6,0,1)] hover:bg-accent motion-reduce:transition-none"
              >
                {newsletter.button}
              </button>
            </form>
          </div>
        )}

        <div className="mt-10 flex flex-col gap-7 text-[0.9375rem]/6 text-muted-foreground lg:mt-14 lg:flex-row lg:items-center lg:justify-between">
          {legal && (
            <ul className="flex flex-wrap items-center gap-x-4">
              {legal.map((link, i) => (
                <li key={link.label} className="flex items-center gap-4">
                  {i > 0 && <span aria-hidden className="size-0.5 rounded-full bg-muted-foreground" />}
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {copyright && <p className="lg:pr-4">{copyright}</p>}
        </div>
      </div>
    </footer>
  );
}

import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface ModerntreasuryFooterColumn {
  /** the column's white heading */
  title: string;
  /** its links */
  links: { label: string; href: string }[];
}

export interface ModerntreasuryFooterProps {
  /** the newsletter row: a bold line, a muted line, the field's placeholder and the button */
  newsletter?: { title: string; text: string; placeholder: string; button: string; action?: string };
  /** the link columns; six fill the row on desktop */
  columns: ModerntreasuryFooterColumn[];
  /** the copyright line */
  copyright: string;
  /** small links beside the copyright */
  legal?: { label: string; href: string }[];
  /** social links on the right; label is for screen readers */
  socials?: { label: string; href: string; icon: ReactNode }[];
  className?: string;
}

/** Modern Treasury's footer: newsletter, six link columns, a legal row; always on dark green. */
export function ModerntreasuryFooter({ newsletter, columns, copyright, legal = [], socials = [], className }: ModerntreasuryFooterProps) {
  return (
    <footer className={cn("dark bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-20 pb-9">
        {newsletter && (
          <div className="flex flex-col gap-10 border-b border-border pb-8 lg:flex-row lg:items-center lg:justify-between lg:pb-9">
            <div className="text-base leading-6">
              <p className="font-bold">{newsletter.title}</p>
              <p className="text-muted-foreground">{newsletter.text}</p>
            </div>
            <form action={newsletter.action} method="post" className="flex gap-4">
              <input
                type="email"
                name="email"
                aria-label={newsletter.placeholder}
                placeholder={newsletter.placeholder}
                className="h-[2.625rem] w-[12.125rem] min-w-0 rounded-[calc(var(--radius)/4)] bg-foreground px-3 text-base text-background placeholder:text-background/50 focus-visible:outline-2 focus-visible:outline-ring"
              />
              <button
                type="submit"
                className="h-[2.625rem] shrink-0 rounded-[calc(var(--radius)/4)] bg-primary px-4 text-base font-semibold text-primary-foreground transition-colors duration-150 hover:bg-primary/85 motion-reduce:transition-none"
              >
                {newsletter.button}
              </button>
            </form>
          </div>
        )}

        <nav className="grid grid-cols-2 gap-x-4 gap-y-10 pt-10 lg:grid-cols-6 lg:gap-x-12 lg:pt-12">
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm leading-[1.5] font-bold">{c.title}</p>
              <ul className="mt-2 space-y-2 text-sm leading-[1.5]">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm leading-[1.5] text-muted-foreground transition-colors duration-150 hover:text-foreground motion-reduce:transition-none">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mt-10 flex flex-col gap-6 border-t border-border pt-8 lg:mt-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-6 text-sm leading-[1.5] lg:flex-row lg:gap-6">
            <p>{copyright}</p>
            {legal.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-muted-foreground">
                {l.label}
              </a>
            ))}
          </div>
          {socials.length > 0 && (
            <ul className="flex gap-5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} aria-label={s.label} className="flex text-foreground/60 transition-colors duration-150 hover:text-foreground motion-reduce:transition-none [&_svg]:size-5">
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}

import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { MeowMark, type MeowMarkProps } from "@foundry/meow-mark";

export interface MeowFooterGroup {
  /** the group's name, e.g. "Products" */
  title: string;
  links: { label: string; href: string }[];
}

export interface MeowFooterProps {
  /** up to four link groups */
  groups: MeowFooterGroup[];
  /** the logo */
  mark: MeowMarkProps;
  /** the copyright line */
  copyright: ReactNode;
  /** disclosure paragraphs under the rule */
  legal?: ReactNode[];
  className?: string;
}

/** Link columns, the mark and copyright, a rule, then the disclosures. */
export function MeowFooter({ groups, mark, copyright, legal, className }: MeowFooterProps) {
  return (
    <footer className={cn("dark bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-12 pb-16 lg:pt-[4.7rem] lg:pb-20">
        <div className="px-1 lg:px-6">
          <div className="grid gap-y-10 lg:grid-cols-4 lg:gap-x-5">
            {groups.map((g) => (
              <nav key={g.title} aria-label={g.title}>
                <h2 className="text-base/6 font-semibold">{g.title}</h2>
                <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4 lg:mt-6 lg:grid-cols-1">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="block text-sm/5 tracking-[0.01em] text-foreground transition-opacity duration-150 hover:opacity-70 motion-reduce:transition-none">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="mt-[4.5rem] flex flex-col gap-5 lg:mt-[5.5rem] lg:flex-row lg:items-center lg:justify-between">
            <MeowMark {...mark} size="lg" />
            <p className="text-sm/5">{copyright}</p>
          </div>

          <hr className="mt-12 border-foreground/90 lg:mt-14" />

          {legal?.length ? (
            <div className="mt-11 flex flex-col gap-4 text-base/6 lg:mt-12 [&_a]:underline [&_strong]:font-semibold">
              {legal.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </footer>
  );
}

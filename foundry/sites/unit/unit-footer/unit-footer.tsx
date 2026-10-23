import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { UnitPlaceholder } from "@foundry/unit-placeholder";

export interface UnitFooterLink {
  label: string;
  href: string;
}

export interface UnitFooterProps {
  /** link groups: four per row on desktop, two on phones */
  groups: { title: string; links: UnitFooterLink[] }[];
  /** the newsletter field at the top of the right column */
  newsletter: { title: string; placeholder: string; submitLabel: string; action?: string };
  /** the social row */
  social: { title: string; links: (UnitFooterLink & { icon: ReactNode })[] };
  /** the certifications row: seals are small round badges; placeholders when empty */
  certified?: { title: string; seals?: ReactNode[]; count?: number };
  /** the big wordmark in the bottom bar */
  brand: string;
  /** legal links at the right of the bottom bar */
  legal: UnitFooterLink[];
  /** fine-print paragraphs under the bottom bar */
  notes?: string[];
  /** the copyright line */
  copyright: string;
  className?: string;
}

const rowClass = "flex items-center justify-between gap-4 border-t border-border py-5 lg:py-[1.3rem]";
const smallClass = "text-[0.875rem] leading-[1.3] tracking-[0.01em] text-muted-foreground/80";

/** A white footer: link columns, a right column with newsletter, social and seals, then a wordmark bar and grey fine print. */
export function UnitFooter({ groups, newsletter, social, certified, brand, legal, notes, copyright, className }: UnitFooterProps) {
  const seals = certified ? (certified.seals ?? Array.from({ length: certified.count ?? 2 }, () => null)) : [];
  return (
    <footer className={cn("bg-background font-sans text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-16 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_25.8rem] lg:gap-16">
          <nav className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-20">
            {groups.map((g) => (
              <div key={g.title}>
                <p className={smallClass}>{g.title}</p>
                <ul className="mt-5 flex flex-col gap-2.5 lg:mt-6 lg:gap-3">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-[0.9375rem] leading-[1.25] tracking-[0.01em] transition-opacity duration-300 hover:opacity-60 motion-reduce:transition-none lg:text-base"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div>
            <p className={smallClass}>{newsletter.title}</p>
            <form action={newsletter.action} className="mt-6 flex h-14 items-center rounded-[0.25rem] bg-muted pl-5">
              <input
                type="email"
                name="email"
                aria-label={newsletter.placeholder}
                placeholder={newsletter.placeholder}
                className="min-w-0 flex-1 bg-transparent text-[0.9375rem] tracking-[0.01em] text-foreground placeholder:text-muted-foreground focus:outline-none lg:text-sm"
              />
              <button
                type="submit"
                aria-label={newsletter.submitLabel}
                className="flex h-full w-14 items-center justify-center rounded-r-[0.25rem] transition-colors duration-[325ms] ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-highlight/40 motion-reduce:transition-none"
              >
                <ArrowRight aria-hidden className="size-4" strokeWidth={2} />
              </button>
            </form>
            <div className="mt-9">
              <div className={rowClass}>
                <p className={smallClass}>{social.title}</p>
                <ul className="flex gap-3">
                  {social.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        aria-label={l.label}
                        className="flex size-7 items-center justify-center rounded-[0.25rem] transition-colors duration-[325ms] hover:bg-foreground/10 motion-reduce:transition-none [&_svg]:size-5"
                      >
                        {l.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {certified && (
                <div className={cn(rowClass, "border-b")}>
                  <p className={smallClass}>{certified.title}</p>
                  <div className="flex gap-5">
                    {seals.map((s, i) => (
                      <div key={i} className="size-12 overflow-clip rounded-full">
                        {s ?? <UnitPlaceholder tone={i % 2 ? "chart-5" : "chart-4"} className="size-full opacity-80" />}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 border-y border-border py-8 lg:mt-[5.5rem] lg:flex-row lg:justify-between lg:py-7">
          <p className="font-display text-[2.75rem] leading-[0.85] font-bold tracking-[-0.05em] lg:text-[3rem]">{brand}</p>
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 lg:gap-x-5">
            {legal.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-[0.9375rem] tracking-[0.01em] text-muted-foreground transition-colors duration-300 hover:text-foreground motion-reduce:transition-none lg:text-base">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-9 flex flex-col gap-7 lg:mt-20">
          {notes?.map((n) => (
            <p key={n} className={cn(smallClass, "leading-[1.38]")}>
              {n}
            </p>
          ))}
          <p className={smallClass}>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}

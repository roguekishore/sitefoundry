import type { ReactNode } from "react";
import { ArrowRight, ChevronDown, Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface EightsleepFooterColumn {
  title: ReactNode;
  links: { label: ReactNode; href: string }[];
}

export interface EightsleepFooterProps {
  /** the small brand mark top-left */
  brand: ReactNode;
  /** the region picker's content, e.g. a flag or "US" */
  region?: ReactNode;
  /** payment marks, shown as white chips */
  payments?: ReactNode[];
  /** the newsletter sign-up */
  newsletter?: {
    title: ReactNode;
    sub?: ReactNode;
    /** the field's placeholder text */
    placeholder: string;
    /** screen-reader label for the arrow button */
    submitLabel?: string;
    fine?: ReactNode;
  };
  /** four link columns */
  columns: EightsleepFooterColumn[];
  /** contact block: a title and a line (e.g. a phone number) */
  contact?: { title: ReactNode; line: ReactNode; href?: string };
  /** social links with their icons */
  socials?: { icon: ReactNode; href: string; label: string }[];
  copyright: ReactNode;
  /** small print lines at the very bottom */
  footnotes?: ReactNode[];
  className?: string;
}

const linkClass = "text-[17px] leading-[1.2] text-muted-foreground/90 transition-colors duration-200 hover:text-foreground";

export function EightsleepFooter({ brand, region, payments, newsletter, columns, contact, socials, copyright, footnotes, className }: EightsleepFooterProps) {
  return (
    <footer className={cn("dark bg-background pt-[60px] pb-[170px] text-foreground lg:pt-[56px] lg:pb-[145px]", className)}>
      <div className="mx-auto max-w-page px-[30px] lg:px-[75px]">
        <div className="grid grid-cols-[1fr_auto] gap-y-6 lg:gap-y-4">
          <div className="col-start-1 row-start-1 font-display text-[34px] leading-none font-semibold lg:row-span-2 lg:row-start-1 lg:self-end">{brand}</div>
          {region && (
            <span className="col-start-2 row-start-1 flex items-center gap-1 justify-self-end text-[13px]">
              {region}
              <ChevronDown className="size-4" strokeWidth={1.5} />
            </span>
          )}
          {payments && (
            <ul className="col-span-2 col-start-1 row-start-2 flex flex-wrap gap-[5px] lg:col-span-1 lg:col-start-2 lg:row-start-2 lg:justify-end">
              {payments.map((p, i) => (
                <li key={i} className="flex h-8 min-w-[54px] items-center justify-center rounded-[calc(var(--radius)/4)] bg-foreground px-3 text-[13px] font-semibold text-background lg:h-10 lg:min-w-[68px] lg:text-[15px]">
                  {p}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-10 grid gap-14 lg:mt-[128px] lg:grid-cols-[minmax(0,440px)_1fr] lg:gap-0">
          {newsletter && (
            <form className="max-w-[330px] lg:max-w-[400px]" action="#">
              <h2 className="text-[20px] leading-[1.2] lg:text-[18px]">{newsletter.title}</h2>
              {newsletter.sub && <p className="mt-1 text-[16px] leading-[1.4] lg:text-[15px]">{newsletter.sub}</p>}
              <label className="mt-8 flex max-w-[330px] items-center border-b border-foreground/80 pb-2 lg:mt-12 lg:max-w-[272px]">
                <input
                  type="email"
                  placeholder={newsletter.placeholder}
                  className="min-w-0 flex-1 bg-transparent text-[16px] text-foreground outline-none placeholder:text-muted-foreground"
                />
                <button type="submit" aria-label={newsletter.submitLabel} className="transition-opacity hover:opacity-70">
                  <ArrowRight className="size-5" strokeWidth={1.25} />
                </button>
              </label>
              {newsletter.fine && <p className="mt-6 text-[11px] leading-[1.8] text-muted-foreground lg:mt-8">{newsletter.fine}</p>}
            </form>
          )}

          {/* desktop: open columns */}
          <div className="hidden justify-between lg:flex">
            {columns.map((col, i) => (
              <div key={i}>
                <h3 className="text-[18px]">{col.title}</h3>
                <ul className="mt-6 flex flex-col gap-5">
                  {col.links.map((l, j) => (
                    <li key={j}>
                      <a href={l.href} className={linkClass}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* phones: accordions */}
          <div className="border-b border-border lg:hidden">
            {columns.map((col, i) => (
              <details key={i} className="group border-t border-border">
                <summary className="flex h-[85px] cursor-pointer list-none items-center justify-between text-[20px] [&::-webkit-details-marker]:hidden">
                  {col.title}
                  <Plus className="size-6 transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none" strokeWidth={1.25} />
                </summary>
                <ul className="flex flex-col gap-4 pb-7">
                  {col.links.map((l, j) => (
                    <li key={j}>
                      <a href={l.href} className={linkClass}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-[72px] flex items-start justify-between gap-6 lg:mt-[112px]">
          {contact && (
            <div>
              <h3 className="text-[20px] lg:text-[20px]">{contact.title}</h3>
              <a href={contact.href} className="mt-4 block text-[16px] lg:mt-5 lg:text-[15px]">
                {contact.line}
              </a>
            </div>
          )}
          {socials && (
            <ul className="flex items-center gap-5 lg:gap-6">
              {socials.map((s, i) => (
                <li key={i}>
                  <a href={s.href} aria-label={s.label} className="flex transition-opacity duration-200 hover:opacity-70 [&_svg]:size-6 lg:[&_svg]:size-7">
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-12 border-t border-border pt-8 text-[16px] leading-[1.4] lg:mt-12 lg:text-[15px]">{copyright}</div>

        {footnotes && (
          <ul className="mx-auto mt-16 flex max-w-[1170px] flex-col gap-2 px-6 text-[11px] leading-[1.35] text-muted-foreground lg:mt-20 lg:px-0">
            {footnotes.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
}

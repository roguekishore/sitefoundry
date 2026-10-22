import { Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { AndurilWordmark, type AndurilWordmarkProps } from "@foundry/anduril-wordmark";

export interface AndurilFooterLink {
  label: string;
  href: string;
}

export interface AndurilFooterColumn {
  /** the small all-caps label over the links */
  label: string;
  links: AndurilFooterLink[];
}

export interface AndurilFooterProps {
  /** the logo, top left */
  wordmark: AndurilWordmarkProps;
  /** the link columns (three in the original) */
  columns: AndurilFooterColumn[];
  /** the contact block, bottom right: a label and one link (e.g. an email address) */
  contact: { label: string; link: AndurilFooterLink };
  /** the all-caps copyright line */
  copyright: string;
  /** the small legal links under it */
  legal: AndurilFooterLink[];
  className?: string;
}

const label = "text-[0.875rem] leading-none font-medium tracking-[0.02em] text-muted-foreground uppercase md:text-[0.75rem]";
const bigLink = "text-[1.125rem] leading-[1.53] tracking-[-0.02em] transition-colors duration-300 ease-out hover:text-muted-foreground motion-reduce:transition-none";

/** Black footer: wordmark, link columns from the half-way line, copyright and contact below. */
export function AndurilFooter({ wordmark, columns, contact, copyright, legal, className }: AndurilFooterProps) {
  const groups = [...columns, { label: contact.label, links: [contact.link] }];
  return (
    <footer className={cn("bg-background px-gutter pt-12 pb-14 text-foreground md:pt-[3.625rem]", className)}>
      <div className="grid gap-[1.125rem] md:grid-cols-2">
        <AndurilWordmark {...wordmark} className="self-start md:hidden" />
        <AndurilWordmark {...wordmark} size="lg" className="hidden self-start md:inline-flex" />

        {/* desktop columns */}
        <div className="hidden grid-cols-3 gap-[1.125rem] md:mt-2.5 md:grid">
          {columns.map((c) => (
            <div key={c.label}>
              <p className={label}>{c.label}</p>
              <ul className="mt-[3.25rem] text-[1.125rem] leading-[1.53]">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className={bigLink}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* phone accordion */}
        <div className="mt-3 md:hidden">
          {groups.map((g) => (
            <details key={g.label} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between py-[1.875rem] [&::-webkit-details-marker]:hidden">
                <span className={label}>{g.label}</span>
                <Plus aria-hidden className="size-5 transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none" strokeWidth={1.5} />
              </summary>
              <ul className="pb-6 text-[1.125rem] leading-[1.53]">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className={bigLink}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>

      <div className="mt-24 grid gap-[1.125rem] md:mt-[6.25rem] md:grid-cols-2">
        <div>
          <p className="text-[0.8125rem] leading-none font-semibold tracking-[0.01em] uppercase md:text-[0.75rem]">{copyright}</p>
          <ul className="mt-4 text-[0.8125rem] leading-[1.3] md:mt-[1.125rem] md:text-[0.75rem] md:leading-[1.38]">
            {legal.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="font-medium text-muted-foreground transition-colors duration-300 ease-out hover:text-foreground motion-reduce:transition-none">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden grid-cols-3 gap-[1.125rem] md:grid">
          <div className="col-start-3 min-w-0">
            <p className={label}>{contact.label}</p>
            <a href={contact.link.href} className={cn(bigLink, "mt-9 inline-block [overflow-wrap:anywhere]")}>
              {contact.link.label}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

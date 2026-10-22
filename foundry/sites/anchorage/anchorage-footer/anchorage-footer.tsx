import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { AnchorageMark, type AnchorageMarkProps } from "@foundry/anchorage-mark";

export interface AnchorageFooterEntry {
  text: string;
  /** makes the entry a link */
  href?: string;
  /** for entries without href: group (small grey caps) or label (smaller grey caps, a sub-group) */
  level?: "group" | "label";
}

export interface AnchorageFooterColumn {
  /** the grey column heading */
  title: string;
  /** links and the group labels between them, in order */
  entries: AnchorageFooterEntry[];
}

export interface AnchorageFooterProps {
  /** the logo (the footer shows the emblem alone) */
  mark: AnchorageMarkProps;
  /** five columns on desktop */
  columns: AnchorageFooterColumn[];
  /** the contact table: an icon, a label and one or more values per row */
  contact?: { title: string; rows: { icon: ReactNode; label: string; values: { text: string; href?: string }[] }[] };
  /** the row of social icons */
  social?: { title: string; links: { label: string; href: string; icon: ReactNode }[] };
  /** paragraphs of fine print */
  legal?: string[];
  /** the copyright line */
  copyright: string;
  /** the legal links at the bottom right */
  bottomLinks?: { label: string; href: string }[];
  className?: string;
}

const linkHover = "transition-colors duration-300 ease-[ease] hover:text-primary motion-reduce:transition-none";

function Entry({ entry, first }: { entry: AnchorageFooterEntry; first: boolean }) {
  if (entry.href)
    return (
      <li>
        <a href={entry.href} className={cn("font-display text-base leading-[1.65] font-semibold text-foreground lg:text-[0.7rem] lg:leading-[2.4]", linkHover)}>
          {entry.text}
        </a>
      </li>
    );
  return (
    <li
      className={cn(
        "text-muted-foreground uppercase",
        entry.level === "label" ? "pt-2 text-[0.675rem] leading-[1.7] lg:pt-1" : "text-xs leading-[1.8] lg:text-[0.75rem]",
        entry.level !== "label" && !first && "pt-6",
      )}
    >
      {entry.text}
    </li>
  );
}

/** Black footer: emblem, five link columns, contact table, socials, fine print, bottom line. */
export function AnchorageFooter({ mark, columns, contact, social, legal, copyright, bottomLinks, className }: AnchorageFooterProps) {
  return (
    <footer className={cn("bg-background px-gutter pt-11 pb-10 text-foreground lg:pt-12 lg:pb-8", className)}>
      <div className="mx-auto grid max-w-page gap-12 lg:grid-cols-[minmax(0,10fr)_minmax(0,18.2fr)_minmax(0,15.7fr)_minmax(0,12.6fr)_minmax(0,10.4fr)_minmax(0,9.6fr)] lg:gap-0">
        <div className="lg:pl-[1.4rem]">
          <AnchorageMark {...mark} lines={[]} className="[&>span]:size-12" />
        </div>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title} className="lg:pr-6">
            <h2 className="font-display text-base font-medium text-muted-foreground">{col.title}</h2>
            <ul className="mt-4 lg:mt-3">
              {col.entries.map((e, i) => (
                <Entry key={`${e.text}-${i}`} entry={e} first={i === 0} />
              ))}
            </ul>
          </nav>
        ))}

        {/* everything below lines up with the first link column */}
        <div className="grid gap-12 lg:col-span-5 lg:col-start-2 lg:mt-12 lg:grid-cols-[minmax(0,30.625rem)_1fr] lg:gap-x-[1.375rem]">
          {contact && (
            <div>
              <h2 className="font-display text-base font-medium text-muted-foreground">{contact.title}</h2>
              <dl className="mt-5">
                {contact.rows.map((r, i) => (
                  <div key={r.label} className={cn("flex flex-col gap-1 py-3 lg:flex-row lg:items-start lg:justify-between lg:py-4", i < contact.rows.length - 1 && "border-b border-border")}>
                    <dt className="flex items-center gap-3 text-xs font-semibold">
                      <span aria-hidden className="[&>svg]:size-4">
                        {r.icon}
                      </span>
                      {r.label}
                    </dt>
                    <dd className="flex flex-col font-display text-base font-semibold lg:items-end lg:text-xs lg:leading-[1.6]">
                      {r.values.map((v) =>
                        v.href ? (
                          <a key={v.text} href={v.href} className={linkHover}>
                            {v.text}
                          </a>
                        ) : (
                          <span key={v.text}>{v.text}</span>
                        ),
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
          {social && (
            <div className="px-5 lg:px-0">
              <h2 className="font-display text-base font-medium text-muted-foreground">{social.title}</h2>
              <ul className="mt-5 flex items-center gap-7">
                {social.links.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} aria-label={s.label} className="flex text-primary transition-opacity duration-300 hover:opacity-60 motion-reduce:transition-none [&>svg]:size-6">
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {legal && (
          <div className="flex max-w-[61.5rem] flex-col gap-5 text-[0.8125rem] leading-[1.55] text-muted-foreground lg:col-span-5 lg:col-start-2 lg:mt-14 lg:gap-4 lg:text-[0.78rem] lg:leading-[1.3]">
            {legal.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        )}

        <div className="mt-8 flex flex-col-reverse items-center gap-5 lg:col-span-5 lg:col-start-2 lg:mt-[4.5rem] lg:flex-row lg:justify-between">
          <p className="text-xs font-medium lg:text-[0.8125rem]">{copyright}</p>
          {bottomLinks && (
            <ul className="flex flex-wrap items-center justify-center lg:pr-6">
              {bottomLinks.map((l, i) => (
                <li key={l.label} className={cn("px-2.5 text-xs leading-none font-medium lg:text-[0.8125rem]", i > 0 && "border-l border-foreground/70")}>
                  <a href={l.href} className={linkHover}>
                    {l.label}
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

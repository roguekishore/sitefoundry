import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface ZoeFooterGroup {
  /** the group's small bold heading */
  title: string;
  /** links (leave out for a plain-text group such as an address) */
  links?: { label: string; href: string }[];
  /** plain lines of text (e.g. an address) */
  lines?: string[];
  /** put the next group in the same column, under this one */
  stackWithNext?: boolean;
}

export interface ZoeFooterProps {
  /** the line above the social icons */
  followLabel: string;
  /** social links as icons (e.g. lucide icons at size-6) */
  socials: { label: string; href: string; icon: ReactNode }[];
  /** the link groups, in order */
  groups: ZoeFooterGroup[];
  /** the copyright line */
  copyright: string;
  /** the region picker on the right: a label and an optional flag or icon before it */
  region?: { label: string; icon?: ReactNode };
  className?: string;
}

const link = "transition-opacity duration-200 ease-in-out hover:opacity-70 motion-reduce:transition-none";

function Group({ group }: { group: ZoeFooterGroup }) {
  return (
    <div>
      <h3 className="text-sm font-semibold">{group.title}</h3>
      {group.links && (
        <ul className="mt-4 space-y-4 text-sm leading-[1.2] opacity-90">
          {group.links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className={link}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
      {group.lines && (
        <p className="mt-4 text-sm leading-[1.2] opacity-90">
          {group.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}

/** Zoe's plum footer. */
export function ZoeFooter({ followLabel, socials, groups, copyright, region, className }: ZoeFooterProps) {
  // fold groups marked stackWithNext together into one column
  const columns: ZoeFooterGroup[][] = [];
  groups.forEach((g, i) => {
    if (i > 0 && groups[i - 1].stackWithNext) columns[columns.length - 1].push(g);
    else columns.push([g]);
  });

  return (
    <footer className={cn("bg-secondary pb-24 text-secondary-foreground lg:pb-36", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="border-t border-secondary-foreground/25 pt-24 lg:pt-12">
          <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[1.6fr_1fr_1.3fr_1fr] lg:gap-6 xl:grid-cols-[27rem_13.5rem_20.25rem_1fr] xl:gap-0">
            <div>
              <p className="-mt-1 text-lg font-light">{followLabel}</p>
              <ul className="mt-3 flex gap-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} aria-label={s.label} className={cn(link, "grid size-6 place-items-center")}>
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {columns.map((col) => (
              <div key={col[0].title} className="flex flex-col gap-10 lg:max-w-[12rem] lg:gap-8">
                {col.map((g) => (
                  <Group key={g.title} group={g} />
                ))}
              </div>
            ))}
          </div>

          <div className="mt-16 flex items-center justify-between gap-6 border-t border-secondary-foreground/25 pt-6 text-sm font-medium lg:mt-12">
            <p>{copyright}</p>
            {region && (
              <button type="button" className={cn(link, "inline-flex items-center gap-1.5")}>
                {region.icon}
                {region.label}
                <ChevronDown aria-hidden className="ml-1 size-4" strokeWidth={1.5} />
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

import { cn } from "@foundry/foundry-utils";

export interface PilotFooterLink {
  label: string;
  href: string;
}

export interface PilotFooterGroup {
  /** the group's title */
  title: string;
  /** its links */
  links: PilotFooterLink[];
  /** 2 to split a long group over two columns (the second has no title) */
  columns?: 1 | 2;
}

export interface PilotFooterProps {
  /** the lowercase wordmark */
  brand: { name: string; href: string };
  /** the contact email at the top right */
  email: string;
  /** the link groups */
  groups: PilotFooterGroup[];
  /** the copyright line, first in the legal row */
  copyright: string;
  /** the legal links */
  legal: PilotFooterLink[];
  /** the small grey disclaimer; \n starts a new line */
  disclaimer?: string;
  className?: string;
}

function LinkList({ links }: { links: PilotFooterLink[] }) {
  return (
    <ul className="mt-6 space-y-5">
      {links.map((l) => (
        <li key={l.label}>
          <a href={l.href} className="text-base leading-[1.6] transition-colors duration-150 hover:text-primary motion-reduce:transition-none">
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Pilot's footer: wordmark and email, five link columns, mono legal row and disclaimer. */
export function PilotFooter({ brand, email, groups, copyright, legal, disclaimer, className }: PilotFooterProps) {
  return (
    <footer className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-[70.5rem] px-5 pt-14 pb-12 lg:px-gutter lg:pt-20">
        <div className="flex items-center justify-between gap-6">
          <a href={brand.href} className="font-display text-[1.875rem] leading-none font-medium tracking-[-0.04em] text-foreground/90 lowercase">
            {brand.name}
          </a>
          <a href={`mailto:${email}`} className="text-base transition-colors duration-150 hover:text-primary motion-reduce:transition-none">
            {email}
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-20 lg:mt-20 lg:grid-cols-5 lg:gap-x-10">
          {groups.map((g) => {
            const half = Math.ceil(g.links.length / 2);
            return g.columns === 2 ? (
              <div key={g.title} className="col-span-2 grid grid-cols-2 gap-x-6 lg:gap-x-10">
                <div>
                  <h3 className="text-xl leading-[1.3] font-semibold text-foreground/90">{g.title}</h3>
                  <LinkList links={g.links.slice(0, half)} />
                </div>
                <div className="pt-[1.625rem]">
                  <LinkList links={g.links.slice(half)} />
                </div>
              </div>
            ) : (
              <div key={g.title}>
                <h3 className="text-xl leading-[1.3] font-semibold text-foreground/90">{g.title}</h3>
                <LinkList links={g.links} />
              </div>
            );
          })}
        </div>

        <div className="mt-8 border-t border-border pt-8 lg:mt-6 lg:pt-12">
          <ul className="flex flex-col gap-6 font-mono text-sm leading-none lg:flex-row lg:flex-wrap lg:gap-10">
            <li>{copyright}</li>
            {legal.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors duration-150 hover:text-primary motion-reduce:transition-none">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          {disclaimer && <p className="mt-8 font-mono text-sm leading-[1.25] whitespace-pre-line text-muted-foreground/80 lg:mt-14">{disclaimer}</p>}
        </div>
      </div>
    </footer>
  );
}

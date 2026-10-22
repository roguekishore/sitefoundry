import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface ColumnFooterGroup {
  title: string;
  links: { label: string; href: string }[];
  /** split the links over two columns on desktop (the second has no heading) */
  columns?: 1 | 2;
}

export interface ColumnFooterProps {
  /** the wordmark, set large and faint */
  brand: ReactNode;
  /** the link columns */
  groups: ColumnFooterGroup[];
  /** a small line at the very bottom, e.g. legal text */
  legal?: string;
  /** continue the panel above (column-cta); off: a panel of its own */
  open?: boolean;
  className?: string;
}

function Links({ links }: { links: ColumnFooterGroup["links"] }) {
  return (
    <ul className="mt-5 flex flex-col">
      {links.map((l) => (
        <li key={l.label}>
          <a href={l.href} className="block py-[0.8125rem] lg:py-[0.9375rem] text-[0.9375rem]/[1.1] text-muted-foreground transition-colors duration-200 ease-[ease] hover:text-foreground lg:text-sm/[1.1]">
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function ColumnFooter({ brand, groups, legal, open = true, className }: ColumnFooterProps) {
  return (
    <footer className={cn("bg-background px-3 pb-3", !open && "pt-3", className)}>
      <div className={cn("border border-border bg-muted px-[1.3125rem] pt-24 pb-16 text-foreground lg:pt-[7.5rem] lg:pb-[9.5rem]", open ? "rounded-b-xl border-t-0" : "rounded-xl")}>
        <div className="mx-auto max-w-page lg:grid lg:grid-cols-[18.75rem_1fr]">
          <div className="font-display text-[1.75rem] font-semibold tracking-[-0.045em] text-muted-foreground/25 [text-shadow:0_1px_0_var(--secondary)] lg:-mt-2 lg:text-[2.125rem]">{brand}</div>
          <div className="mt-12 grid gap-11 lg:mt-0 lg:grid-cols-4 lg:gap-0">
            {groups.map((g) => {
              const half = Math.ceil(g.links.length / 2);
              return g.columns === 2 ? (
                <div key={g.title} className="lg:col-span-2">
                  <p className="text-[0.9375rem] font-medium lg:text-sm">{g.title}</p>
                  <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-0">
                    <Links links={g.links.slice(0, half)} />
                    <Links links={g.links.slice(half)} />
                  </div>
                </div>
              ) : (
                <div key={g.title}>
                  <p className="text-[0.9375rem] font-medium lg:text-sm">{g.title}</p>
                  <Links links={g.links} />
                </div>
              );
            })}
          </div>
        </div>
        {legal && <p className="mx-auto mt-16 max-w-page text-xs text-muted-foreground/80">{legal}</p>}
      </div>
    </footer>
  );
}

import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface AttioFooterLink {
  label: string;
  href: string;
  /** a small blue pill after the label (e.g. "New") */
  tag?: string;
  /** opens elsewhere: adds a small ↗ */
  external?: boolean;
}

export interface AttioFooterGroup {
  title: string;
  links: AttioFooterLink[];
}

export interface AttioFooterProps {
  /** the brand's name: the home link's label for screen readers */
  brand: string;
  /** the wordmark */
  logo: ReactNode;
  homeHref?: string;
  /**
   * link groups, poured into four columns on desktop and two on phones; give `column`
   * on each to choose its desktop column (0–3)
   */
  groups: (AttioFooterGroup & { column?: number; phoneColumn?: number })[];
  /** small icon links at the bottom left (lucide icons work well) */
  socials?: { label: string; href: string; icon: ReactNode }[];
  /** the copyright line */
  copyright: string;
  /** legal links after it */
  legal?: AttioFooterLink[];
  className?: string;
}

function Links({ links }: { links: AttioFooterLink[] }) {
  return (
    <ul className="mt-2 space-y-1.5">
      {links.map((l) => (
        <li key={l.label}>
          <a href={l.href} className="inline-flex items-center gap-1.5 text-sm leading-[1.6] font-medium text-foreground/80 transition-colors duration-150 hover:text-foreground motion-reduce:transition-none">
            {l.label}
            {l.external && <ArrowUpRight aria-hidden className="size-3 text-muted-foreground" />}
            {l.tag && <span className="rounded-full bg-highlight px-1.5 py-px text-[0.6875rem] leading-4 font-semibold text-highlight-foreground">{l.tag}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}

/**
 * The dark footer: the wordmark at the top left, link groups in four columns on the right
 * (two on phones) with small "new" pills and ↗ marks, then social icons and a quiet
 * copyright and legal row along the bottom.
 */
export function AttioFooter({ brand, logo, homeHref = "/", groups, socials, copyright, legal, className }: AttioFooterProps) {
  const columns = (count: number, key: "column" | "phoneColumn") =>
    Array.from({ length: count }, (_, c) => groups.filter((g, i) => (g[key] ?? i % count) === c));

  const group = (g: AttioFooterGroup) => (
    <div key={g.title}>
      <p className="text-sm font-medium text-muted-foreground/80">{g.title}</p>
      <Links links={g.links} />
    </div>
  );

  return (
    <footer data-header-tone="dark" className={cn("dark border-t border-border bg-background text-foreground", className)}>
      <div className="px-gutter pt-20 pb-10 lg:px-8 lg:pt-[5.25rem] lg:pb-11">
        <div className="lg:grid lg:grid-cols-[1fr_minmax(0,58rem)]">
          <a href={homeHref} aria-label={brand} className="inline-flex self-start text-foreground [&_svg]:h-6 [&_svg]:w-auto">
            {logo}
          </a>

          <div className="mt-14 grid grid-cols-2 gap-x-5 lg:hidden">
            {columns(2, "phoneColumn").map((col, c) => (
              <div key={c} className="space-y-12">{col.map(group)}</div>
            ))}
          </div>
          <div className="hidden grid-cols-4 gap-x-8 lg:grid lg:pl-2">
            {columns(4, "column").map((col, c) => (
              <div key={c} className="space-y-12">{col.map(group)}</div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-10 lg:mt-[8.25rem] lg:flex-row lg:items-center lg:justify-between">
          {socials && (
            <ul className="flex items-center gap-4">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} aria-label={s.label} className="block text-muted-foreground transition-colors duration-150 hover:text-foreground [&_svg]:size-[1.125rem]">
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <div className="flex flex-col gap-6 text-[0.8125rem] font-medium text-muted-foreground lg:flex-row lg:items-center lg:gap-6">
            <p>{copyright}</p>
            {legal && (
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {legal.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="transition-colors duration-150 hover:text-foreground">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

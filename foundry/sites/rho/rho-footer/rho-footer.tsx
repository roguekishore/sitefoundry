import { useId, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface RhoFooterLink {
  /** visible text */
  label: string;
  /** where it goes */
  href: string;
}

export interface RhoFooterColumn {
  /** mono heading */
  title: string;
  /** the links */
  links: RhoFooterLink[];
}

export interface RhoFooterBadge {
  /** small line, e.g. "Download on" */
  caption: string;
  /** main line, e.g. the store's name */
  label: string;
  /** where it goes */
  href: string;
  /** a small icon on the left */
  icon?: ReactNode;
}

export interface RhoFooterProps {
  /** the huge dotted word at the top (keep it short: 5–8 letters) */
  bigWord: string;
  /** the company name, set as a wordmark */
  brand: string;
  /** social links under (desktop) or beside (phones) the wordmark */
  socials: RhoFooterLink[];
  /** link columns */
  columns: RhoFooterColumn[];
  /** the contact column: a heading and plain lines (phone, email, address) */
  contact?: { title: string; lines: string[] };
  /** app-store style badges under the contact lines */
  badges?: RhoFooterBadge[];
  /** paragraphs of legal print */
  legal: string[];
  /** the copyright line */
  copyright: string;
  /** anything behind the footer; empty: nothing */
  backdrop?: ReactNode;
  /** dark (as the original) or light */
  tone?: "dark" | "light";
  className?: string;
}

const linkClass = "transition-colors duration-[160ms] hover:text-primary motion-reduce:transition-none";
const headClass = "font-mono text-[0.75rem] font-medium tracking-[0.04em] text-muted-foreground uppercase lg:text-[0.8125rem]";

export function RhoFooter({
  bigWord,
  brand,
  socials,
  columns,
  contact,
  badges,
  legal,
  copyright,
  backdrop,
  tone = "dark",
  className,
}: RhoFooterProps) {
  const dots = useId().replace(/[^a-zA-Z0-9-]/g, "");
  return (
    <footer
      data-rho-tone={tone}
      className={cn(tone === "dark" && "dark", "relative overflow-clip border-t border-border bg-background text-foreground", className)}
    >
      {backdrop && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {backdrop}
        </div>
      )}
      <div className="relative mx-auto max-w-page px-gutter pt-10 pb-12 lg:pt-16 lg:pb-[4.25rem]">
        {/* the big word: SVG text stretched to the full width, filled with a 6px dot grid */}
        <svg viewBox="0 0 1000 190" className="block w-full text-foreground" role="img" aria-label={bigWord}>
          <defs>
            <pattern id={`${dots}-dots`} width="5" height="5" patternUnits="userSpaceOnUse">
              <circle cx="2.5" cy="2.5" r="1.25" fill="currentColor" />
            </pattern>
          </defs>
          <text
            x="0"
            y="178"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fill={`url(#${dots}-dots)`}
            className="font-display text-[15.5rem] font-bold uppercase"
          >
            {bigWord}
          </text>
        </svg>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:mt-14 lg:grid-cols-[0.93fr_1fr_1fr_1fr_0.86fr] lg:gap-x-0">
          <div className="col-span-2 flex items-center justify-between lg:col-span-1 lg:block">
            <p className="font-display text-[2.25rem] leading-none tracking-[-0.04em]">{brand}</p>
            <ul className="flex gap-4 text-[0.875rem] lg:mt-6 lg:block lg:space-y-2 lg:text-[0.9375rem]">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className={linkClass}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className={headClass}>{col.title}</p>
              <ul className="mt-5 space-y-2 text-[0.875rem] lg:mt-6 lg:space-y-[0.6rem] lg:text-[0.9375rem]">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className={linkClass}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          {contact && (
            <div>
              <p className={headClass}>{contact.title}</p>
              <ul className="mt-5 space-y-2 text-[0.875rem] lg:mt-6 lg:space-y-[0.6rem] lg:text-[0.9375rem]">
                {contact.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              {badges && (
                <div className="mt-5 flex flex-col items-start gap-2.5 lg:flex-row lg:flex-wrap">
                  {badges.map((b) => (
                    <a
                      key={b.label}
                      href={b.href}
                      className="flex items-center gap-1.5 rounded-md border border-input px-2 py-1 transition-colors duration-[160ms] hover:bg-card [&_svg]:size-4"
                    >
                      {b.icon}
                      <span className="leading-none">
                        <span className="block text-[0.5rem] uppercase">{b.caption}</span>
                        <span className="block text-[0.875rem] font-medium">{b.label}</span>
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-12 space-y-4 border-t border-border pt-8 text-[0.6875rem] leading-[1.45] text-foreground/80 lg:mt-10 lg:space-y-5 lg:pt-10 lg:text-xs">
          {legal.map((p, i) => (
            <p key={i} className="max-w-[69rem]">
              {p}
            </p>
          ))}
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}

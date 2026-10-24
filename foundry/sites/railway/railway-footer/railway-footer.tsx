import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface RailwayFooterFeature {
  /** bold start of the card's title */
  title: string;
  /** the violet end of the title */
  accent?: string;
  text: string;
  /** the underlined link at the end of the text */
  link: { label: string; href: string };
}

export interface RailwayFooterGroup {
  title: string;
  links: { label: string; href: string }[];
}

export interface RailwayFooterProps {
  /** small label above the featured cards */
  featuredLabel: string;
  /** one or two announcement cards (desktop only) */
  featured: RailwayFooterFeature[];
  /** six link groups, laid out three across on desktops and two on phones */
  groups: RailwayFooterGroup[];
  /** small compliance marks under the cards (desktop only): text or images */
  badges?: ReactNode[];
  /** the brand mark in the bottom row */
  mark?: ReactNode;
  /** the green mono status line, e.g. "All systems normal" */
  status?: { label: string; href: string };
  /** the copyright line */
  copyright: string;
  className?: string;
}

/**
 * A quiet dark footer: announcement cards with a violet title ending on the left, six link
 * groups in a 3×2 grid on the right, compliance marks, then a hairline and a bottom row with
 * the brand mark, a green mono status line and the copyright. Phones get two link columns
 * and a centred bottom row.
 */
export function RailwayFooter({ featuredLabel, featured, groups, badges, mark, status, copyright, className }: RailwayFooterProps) {
  return (
    <footer className={cn("text-foreground", className)}>
      <div className="mx-auto max-w-[74rem] px-12 pt-14 pb-20 lg:px-gutter lg:pb-24">
        <div className="lg:grid lg:grid-cols-[minmax(0,24.8rem)_minmax(0,41rem)] lg:justify-between lg:gap-12">
          <div className="hidden flex-col lg:flex">
            <p className="text-sm font-semibold">{featuredLabel}</p>
            <ul className="mt-6 grid gap-4">
              {featured.map((f) => (
                <li key={f.title} className="rounded-xl border border-border bg-card/60 px-6 py-5 text-sm leading-5">
                  <p className="font-semibold">
                    {f.title} {f.accent && <span className="text-ring">{f.accent}</span>}
                  </p>
                  <p className="mt-1 text-muted-foreground">
                    {f.text}{" "}
                    <a href={f.link.href} className="underline underline-offset-2 transition-colors duration-150 hover:text-foreground motion-reduce:transition-none">
                      {f.link.label}
                    </a>
                  </p>
                </li>
              ))}
            </ul>
            {badges && badges.length > 0 && (
              <ul className="mt-auto flex items-center gap-4 pt-16 text-muted-foreground">
                {badges.map((badge, i) => (
                  <li key={i}>{badge}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-16">
            {groups.map((group) => (
              <div key={group.title}>
                <p className="text-sm font-semibold">{group.title}</p>
                <ul className="mt-5 grid gap-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm leading-5 text-muted-foreground transition-colors duration-150 hover:text-foreground motion-reduce:transition-none">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-5 border-t border-border pt-8 text-center lg:flex-row lg:gap-8 lg:text-left">
          {mark && <span className="flex size-8 items-center justify-center [&_svg]:size-8">{mark}</span>}
          {status && (
            <a href={status.href} className="flex items-center gap-1 font-mono text-[0.8125rem] text-chart-2 transition-opacity duration-150 hover:opacity-80 motion-reduce:transition-none">
              {status.label}
              <ArrowUpRight className="size-3.5 text-muted-foreground" />
            </a>
          )}
          <p className="text-[0.8125rem] text-muted-foreground lg:ml-auto">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}

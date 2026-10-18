import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface MercuryFooterGroup {
  /** the small muted heading */
  title: string;
  links: { label: string; href: string }[];
}

export interface MercuryFooterProps {
  /** link columns: four across on desktop, two on phones, wrapping into more rows */
  groups: MercuryFooterGroup[];
  /** the small label beside the fine print, e.g. "Notes and disclosures" */
  legalTitle?: string;
  /** an unnumbered paragraph before the numbered notes */
  legalIntro?: ReactNode;
  /** numbered notes, matching footnote marks used up the page */
  notes?: ReactNode[];
  className?: string;
}

/**
 * Mercury's footer: plain link columns (muted heading, links in the text colour) with lots
 * of air, then a hairline and the fine print: a small label on the left, numbered notes on
 * the right.
 */
export function MercuryFooter({ groups, legalTitle, legalIntro, notes, className }: MercuryFooterProps) {
  const hasLegal = Boolean(legalTitle || legalIntro || notes?.length);
  return (
    <footer className={cn("pt-[calc(var(--section-y)*1.2)] pb-section lg:pt-[calc(var(--section-y)*1.6)]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <nav className="grid grid-cols-2 gap-x-4 gap-y-14 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="text-sm text-muted-foreground lg:text-base">{g.title}</h2>
              <ul className="mt-3 space-y-2.5 lg:space-y-1.5">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-base leading-[1.1] text-foreground transition-colors hover:text-muted-foreground motion-reduce:transition-none lg:leading-[1.4]">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {hasLegal && (
          <div className="mt-24 grid gap-10 border-t border-border pt-6 lg:mt-[12.5rem] lg:grid-cols-3 lg:gap-8 lg:pt-10">
            {legalTitle && <h2 className="text-[0.625rem] font-[560] text-foreground lg:text-xs">{legalTitle}</h2>}
            <div className="space-y-4 text-[0.625rem] leading-[1.4] tracking-[0.02em] text-foreground/90 lg:col-span-2 lg:col-start-2 lg:text-xs">
              {legalIntro && <p>{legalIntro}</p>}
              {notes && notes.length > 0 && (
                <ol className="list-decimal space-y-4 pl-4">
                  {notes.map((n, i) => (
                    <li key={i}>{n}</li>
                  ))}
                </ol>
              )}
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}

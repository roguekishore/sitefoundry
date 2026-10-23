import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { BridgeWordmark } from "@foundry/bridge-wordmark";

export interface BridgeFooterLink {
  label: string;
  href: string;
  /** underlines it as the page you're on */
  current?: boolean;
}

export interface BridgeFooterProps {
  /** the wordmark: company name, small icon and parent-company tagline */
  brand: { name: string; href: string; icon?: ReactNode; tagline?: string };
  /** the link columns (two in the original) */
  columns: BridgeFooterLink[][];
  /** the small-print paragraphs; may hold links */
  finePrint: ReactNode[];
  /** the two links at the bottom right */
  legal: { label: string; href: string }[];
  className?: string;
}

const linkClass =
  "text-[0.9375rem]/[1.4] tracking-[-0.02em] transition-colors duration-250 hover:text-muted-foreground motion-reduce:transition-none";

/** Bridge's sparse footer with link columns and small print. */
export function BridgeFooter({ brand, columns, finePrint, legal, className }: BridgeFooterProps) {
  return (
    <footer className={cn("bg-background pt-[6.25rem] pb-12 text-foreground lg:pt-[6.5rem]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="grid grid-cols-[8.875rem_6.8rem_1fr] lg:grid-cols-[16.8rem_17.75rem_1fr]">
          <BridgeWordmark {...brand} layout="stacked" className="self-start" />
          {columns.map((col, i) => (
            <ul key={i} className="flex flex-col items-start gap-[1.375rem]">
              {col.map((l) => (
                <li key={l.label} className="flex">
                  <a
                    href={l.href}
                    aria-current={l.current ? "page" : undefined}
                    className={cn(linkClass, l.current && "border-b border-foreground pb-0.5")}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="mt-[8.5rem] flex flex-col gap-14 lg:mt-[12.25rem] lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-[35rem] flex-col gap-4 text-[0.8125rem]/[1.15] tracking-[-0.02em] [&_a]:underline [&_a]:underline-offset-2">
            {finePrint.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <ul className="flex justify-between gap-12 lg:justify-end">
            {legal.map((l) => (
              <li key={l.label}>
                <a href={l.href} className={cn(linkClass, "text-[0.8125rem]")}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

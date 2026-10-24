import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface DiabrowserFooterColumn {
  /** the column's title */
  title: string;
  links: { label: string; href: string }[];
}

export interface DiabrowserFooterProps {
  /** up to four link columns (two per row on phones) */
  columns: DiabrowserFooterColumn[];
  /** a small mark at the far right on desktop (a symbol or stacked wordmark) */
  mark?: ReactNode;
  /** the bottom-left words, e.g. ["Copyright", "© 2026"] */
  copyright: string[];
  /** the centred credit, one entry per line */
  credit: string[];
  className?: string;
}

/** A spare footer set entirely in uppercase mono: grey link columns under ink titles, a hairline, copyright and a centred credit. */
export function DiabrowserFooter({ columns, mark, copyright, credit, className }: DiabrowserFooterProps) {
  return (
    <footer className={cn("bg-background px-[10px] pt-1 pb-5 font-mono text-[13px] leading-4 tracking-[0.1em] text-foreground uppercase lg:px-gutter lg:pt-[100px]", className)}>
      <div className="mx-auto max-w-page">
        <div className="grid grid-cols-2 gap-x-[10px] gap-y-[45px] lg:grid-cols-[199px_191px_254px_minmax(0,1fr)_auto] lg:gap-x-0">
          {columns.map((column) => (
            <div key={column.title}>
              <p>{column.title}</p>
              <ul className="mt-[10px] flex flex-col gap-[10px]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-muted-foreground transition-colors duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-foreground">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {mark && <div className="col-start-5 hidden justify-self-end lg:block">{mark}</div>}
        </div>

        <div className="mt-[26px] flex flex-col items-center gap-[26px] border-t border-border pt-[26px] text-center lg:mt-[22px] lg:grid lg:grid-cols-3 lg:items-start lg:gap-0 lg:pt-[25px] lg:text-left">
          <p className="flex gap-10 lg:order-1 lg:pt-4">
            {copyright.map((part) => (
              <span key={part}>{part}</span>
            ))}
          </p>
          <p className="-order-1 lg:order-2 lg:text-center">
            {credit.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}

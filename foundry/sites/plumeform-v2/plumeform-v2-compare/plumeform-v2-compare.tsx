import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformV2Eyebrow, PlumeformV2Heading } from "@foundry/plumeform-v2-heading";
import { PlumeformV2Reveal } from "@foundry/plumeform-v2-reveal";

export interface PlumeformV2CompareRow {
  /** one cell per column; the first is the name */
  cells: string[];
  /** invert the row to solid ink (your own product) */
  highlight?: boolean;
  /** a small mint marker beside the name in the highlighted row */
  tag?: string;
}

export interface PlumeformV2CompareProps {
  eyebrow?: string;
  /** a heading above the table (optional: the landing page shows only the eyebrow) */
  title?: ReactNode;
  columns: string[];
  rows: PlumeformV2CompareRow[];
  /** small print under the table */
  footnote?: ReactNode;
  /** a line of underlined links under the footnote */
  links?: { lead: string; items: { label: string; href: string }[] };
  id?: string;
  className?: string;
}

export function PlumeformV2Compare({ eyebrow, title, columns, rows, footnote, links, id, className }: PlumeformV2CompareProps) {
  return (
    <section id={id} className={cn("bg-background px-gutter pt-16 pb-[calc(var(--section-y)*0.85)] text-foreground lg:pb-section", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)-2*var(--page-gutter))]">
        {title ? (
          <PlumeformV2Heading eyebrow={eyebrow} title={title} className="max-w-3xl" />
        ) : (
          eyebrow && <PlumeformV2Eyebrow className="text-[0.6875rem]">{eyebrow}</PlumeformV2Eyebrow>
        )}
        <PlumeformV2Reveal className={cn("rounded-2xl border border-border bg-card shadow-[0_1px_2px_color-mix(in_oklab,var(--foreground)_5%,transparent)]", title ? "mt-10" : "mt-6")}>
          <div className="overflow-x-auto rounded-2xl">
            <table className="w-full min-w-[40rem] text-left text-[0.9375rem]">
              <thead>
                <tr className="bg-muted/70 text-[0.625rem] font-bold tracking-[0.2em] text-muted-foreground uppercase">
                  {columns.map((c) => (
                    <th key={c} scope="col" className="px-3 py-3.5 font-bold first:pl-3 lg:first:w-[24%]">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.cells[0]} className={cn(row.highlight ? "bg-foreground font-bold text-background" : "border-t border-border text-muted-foreground")}>
                    {row.cells.map((cell, i) =>
                      i === 0 ? (
                        <th key={i} scope="row" className={cn("px-3 py-4 font-bold", !row.highlight && "text-foreground")}>
                          {cell}
                          {row.highlight && row.tag && <span className="ml-2 text-xs font-semibold text-highlight italic">{row.tag}</span>}
                        </th>
                      ) : (
                        <td key={i} className="px-3 py-4">
                          {cell}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </PlumeformV2Reveal>
        {footnote && <p className="mt-5 text-xs leading-relaxed text-muted-foreground">{footnote}</p>}
        {links && (
          <p className="mt-8 text-sm text-muted-foreground">
            {links.lead}{" "}
            {links.items.map((l, i) => (
              <span key={l.href}>
                {i > 0 && <span aria-hidden> · </span>}
                <a href={l.href} className="border-b-2 border-primary font-bold text-foreground transition-colors hover:text-primary">
                  {l.label}
                </a>
              </span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}

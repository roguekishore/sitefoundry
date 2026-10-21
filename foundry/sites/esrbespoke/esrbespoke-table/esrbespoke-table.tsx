import { ArrowUpRight } from "lucide-react";
import { EsrbespokeLabel } from "@foundry/esrbespoke-label";
import { toneClass, type EsrbespokeTone } from "@foundry/esrbespoke-tone";
import { cn } from "@foundry/foundry-utils";

export interface EsrbespokeTableRow {
  /** the two cells, e.g. name and role */
  cells: [string, string];
  /** makes the row a link (with a small arrow) */
  href?: string;
}

export interface EsrbespokeTableProps {
  /** the tiny label at the left */
  label: string;
  /** the rows */
  rows: EsrbespokeTableRow[];
  /** "md": 20px rows; "sm": 18px rows */
  size?: "sm" | "md";
  tone?: EsrbespokeTone;
  id?: string;
  className?: string;
}

/** Label at the left, two-cell hairline rows from column 7. */
export function EsrbespokeTable({ label, rows, size = "sm", tone = "light", id, className }: EsrbespokeTableProps) {
  const text = cn(
    size === "md" ? "text-[0.9375rem] leading-[1.2] lg:text-[1.25rem]" : "text-[1.125rem] leading-[1.3]",
    "font-display font-medium tracking-[-0.01em] font-stretch-[106%]",
  );
  return (
    <section id={id} className={cn(toneClass(tone), "pb-28 lg:pb-36", className)}>
      <div className="mx-gutter grid grid-cols-2 gap-x-4 border-t border-border lg:grid-cols-12">
        <EsrbespokeLabel as="h2" className="col-span-2 pt-8 lg:col-span-3">{label}</EsrbespokeLabel>
        <ul className="col-span-2 mt-[7.5rem] lg:col-span-6 lg:col-start-7 lg:mt-0 lg:pt-6">
          {rows.map((row, i) => {
            const cells = (
              <>
                <span className={cn(text, "lg:col-span-3")}>{row.cells[0]}</span>
                <span className={cn(text, "flex items-start justify-between gap-4 lg:col-span-3")}>
                  {row.cells[1]}
                  {row.href && (
                    <ArrowUpRight
                      aria-hidden
                      className="mt-0.5 size-4 shrink-0 opacity-25 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"
                      strokeWidth={1.25}
                    />
                  )}
                </span>
              </>
            );
            const grid = "grid grid-cols-2 gap-x-4 py-2 lg:grid-cols-6";
            return (
              <li key={i} className="border-b border-border last:border-b-0">
                {row.href ? (
                  <a href={row.href} className={cn("group", grid)}>{cells}</a>
                ) : (
                  <div className={grid}>{cells}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

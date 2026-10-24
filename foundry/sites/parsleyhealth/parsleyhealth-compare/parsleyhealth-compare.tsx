import type { CSSProperties } from "react";
import { Check, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ParsleyhealthHeading } from "@foundry/parsleyhealth-heading";

/** true: a check · false: a cross · text: a short word or two */
export type ParsleyhealthCompareValue = boolean | string;

export interface ParsleyhealthCompareRow {
  /** what is compared */
  label: string;
  /** one value per rival, in the order of `rivals` */
  rivals: ParsleyhealthCompareValue[];
  /** the company's own value */
  ours: ParsleyhealthCompareValue;
}

export interface ParsleyhealthCompareProps {
  /** small capitals above the title */
  eyebrow?: string;
  /** the title */
  title: string;
  /** the rival column headings (three on the original; phones show the first two) */
  rivals: string[];
  /** the company's own column heading */
  ours: string;
  /** the rows */
  rows: ParsleyhealthCompareRow[];
  /** screen-reader words for the marks */
  yesLabel?: string;
  noLabel?: string;
  className?: string;
}

function Value({ value, yes, no }: { value: ParsleyhealthCompareValue; yes?: string; no?: string }) {
  if (value === true) {
    return <Check role="img" aria-label={yes} className="size-6 text-primary" strokeWidth={1.25} />;
  }
  if (value === false) {
    return <X role="img" aria-label={no} className="size-6 text-muted-foreground/70" strokeWidth={1} />;
  }
  return <span className="text-lg leading-[1.6] font-medium text-primary lg:text-[1.3125rem] lg:leading-[1.5]">{value}</span>;
}

/** Labels, rivals and a mint "us" column. */
export function ParsleyhealthCompare({ eyebrow, title, rivals, ours, rows, yesLabel, noLabel, className }: ParsleyhealthCompareProps) {
  const vars = { "--rivals": rivals.length, "--rivals-phone": Math.min(rivals.length, 2) } as CSSProperties;
  const grid =
    "grid grid-cols-[repeat(var(--rivals-phone),minmax(0,1fr))_minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_repeat(var(--rivals),8.625rem)_8.625rem]";
  const phoneHidden = (i: number) => (i >= 2 ? "max-lg:hidden" : "");
  return (
    <section className={cn("bg-background px-gutter py-[calc(var(--section-y)*0.55)] lg:py-section", className)}>
      <ParsleyhealthHeading
        eyebrow={eyebrow}
        title={title}
        align="center"
        className="[&>p]:text-primary"
        titleClassName="mx-auto max-w-[17rem] lg:max-w-[36rem]"
      />
      <div role="table" style={vars} className="mx-auto mt-9 max-w-page text-center lg:mt-[4.5rem]">
        <div role="row" className={cn(grid, "border-b border-foreground/15")}>
          <span role="columnheader" className="max-lg:hidden" />
          {rivals.map((rival, i) => (
            <span
              role="columnheader"
              key={rival}
              className={cn("flex items-center justify-center px-2 py-6 text-[0.9375rem] leading-[1.6] text-primary lg:h-35 lg:text-lg", phoneHidden(i))}
            >
              {rival}
            </span>
          ))}
          <span role="columnheader" className="flex items-center justify-center bg-accent px-2 py-6 text-[0.9375rem] leading-[1.6] text-accent-foreground lg:h-35 lg:text-lg">
            {ours}
          </span>
        </div>
        {rows.map((row) => (
          <div role="row" key={row.label} className={cn(grid, "border-b border-foreground/15 last:border-0")}>
            <span role="rowheader" className="flex items-center justify-center px-4 text-lg leading-[1.6] text-primary max-lg:hidden lg:text-[1.3125rem]">
              {row.label}
            </span>
            {row.rivals.map((value, i) => (
              <span role="cell" key={i} className={cn("flex min-h-[5.6rem] items-center justify-center px-2 py-4 lg:min-h-[6.125rem]", phoneHidden(i))}>
                <Value value={value} yes={yesLabel} no={noLabel} />
              </span>
            ))}
            <span role="cell" className="flex min-h-[5.6rem] flex-col items-center justify-center gap-2 bg-accent px-2 py-3 lg:min-h-[6.125rem] lg:py-4">
              <span className="text-xs leading-[1.4] text-foreground lg:hidden">{row.label}</span>
              <Value value={row.ours} yes={yesLabel} no={noLabel} />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

import { cn } from "@foundry/foundry-utils";
import { RhoHeading } from "@foundry/rho-heading";
import { RhoReveal } from "@foundry/rho-reveal";
import "./rho-fees.css";

export interface RhoFeeRow {
  /** what the fee is for */
  label: string;
  /** what it costs, e.g. "$0" */
  value: string;
  /** a footnote mark after the value, e.g. "*" */
  mark?: string;
}

export interface RhoFeesProps {
  /** the heading */
  title: string;
  /** the sentence under it */
  lead: string;
  /** the rows; they are numbered 01, 02… */
  rows: RhoFeeRow[];
  /** small print under the table */
  footnote?: string;
  /** dark (as the original) or light */
  tone?: "dark" | "light";
  className?: string;
}

export function RhoFees({ title, lead, rows, footnote, tone = "dark", className }: RhoFeesProps) {
  return (
    <section data-rho-tone={tone} className={cn(tone === "dark" && "dark", "bg-background py-14 text-foreground lg:py-section", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <RhoHeading text={title} className="max-w-[38rem]" />
        <RhoReveal as="p" className="mt-6 max-w-[34rem] text-[1.125rem] leading-[1.3] lg:mt-8 lg:text-xl lg:leading-[1.3]">
          {lead}
        </RhoReveal>
        <RhoReveal className="mt-10 border-t border-border lg:mt-14">
          <ol>
            {rows.map((row, i) => (
              <li
                key={row.label}
                className="grid h-[3.25rem] grid-cols-[2.25rem_1fr_auto] items-center border-b border-border pr-1 pl-1 transition-colors duration-[420ms] ease-[cubic-bezier(0.32,0,0.24,1)] hover:bg-card lg:h-[4.9375rem] lg:grid-cols-[5.25rem_1fr_auto]"
              >
                <span className="font-mono text-[0.6875rem] font-medium">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[0.8125rem] font-semibold tracking-[-0.01em] lg:text-xl">{row.label}</span>
                <span className="flex items-center text-xl font-bold tracking-[-0.02em]">
                  {row.value}
                  <span aria-hidden="true" className="rho-fees-caret ml-0.5 inline-block h-[0.8em] w-[0.3em] bg-foreground" />
                  {row.mark && <sup className="ml-0.5 text-[0.625rem] font-normal">{row.mark}</sup>}
                </span>
              </li>
            ))}
          </ol>
        </RhoReveal>
        {footnote && (
          <RhoReveal as="p" className="mt-8 max-w-[68rem] text-[0.6875rem] leading-[1.3] text-foreground/85 lg:mt-10">
            {footnote}
          </RhoReveal>
        )}
      </div>
    </section>
  );
}

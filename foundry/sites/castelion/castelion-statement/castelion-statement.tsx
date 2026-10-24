import { cn } from "@foundry/foundry-utils";
import { CastelionLines } from "@foundry/castelion-lines";

export interface CastelionStatementProps {
  /** the statements, one entry per desktop line */
  lines: string[];
  className?: string;
}

/** Navy band of centred bold statements with an elliptical bottom edge. */
export function CastelionStatement({ lines, className }: CastelionStatementProps) {
  return (
    <section className={cn("bg-background", className)}>
      <div className="dark bg-secondary px-gutter pt-3 pb-[4.5rem] text-center text-foreground [clip-path:ellipse(130%_100%_at_50%_0%)] lg:pt-0 lg:pb-[7.375rem] lg:[clip-path:ellipse(66%_100%_at_50%_0%)]">
        <CastelionLines
          as="h2"
          lines={lines}
          className="mx-auto max-w-page font-display text-[clamp(1.8125rem,1.279rem+2.19vw,3.25rem)]/[1.22] font-bold tracking-[0.02em] lg:leading-[1.29]"
        />
      </div>
    </section>
  );
}

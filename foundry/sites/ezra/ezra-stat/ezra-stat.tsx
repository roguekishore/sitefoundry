import { cn } from "@foundry/foundry-utils";

export interface EzraStatProps {
  /** the claim, one or two sentences */
  statement: string;
  /** the mark between claim and source (a single asterisk) */
  mark?: string;
  /** where the figure comes from; a line break is allowed (use \n) */
  source?: string;
  className?: string;
}

/** A centred serif claim in a wide hairline card. */
export function EzraStat({ statement, mark, source, className }: EzraStatProps) {
  return (
    <section className={cn("bg-background px-gutter pt-16 text-foreground", className)}>
      <div className="mx-auto max-w-[71.875rem] rounded-lg border border-border px-6 py-25 text-center lg:px-12">
        <p className="mx-auto max-w-[66rem] font-display text-[2.25rem] leading-[1.45] font-light tracking-[-0.03em] lg:text-[3.125rem] lg:leading-[1.1]">
          {statement}
        </p>
        {mark && <p className="mt-10 font-display text-2xl leading-none lg:mt-11">{mark}</p>}
        {source && <p className="mt-4 font-display text-sm leading-[1.3] whitespace-pre-line">{source}</p>}
      </div>
    </section>
  );
}

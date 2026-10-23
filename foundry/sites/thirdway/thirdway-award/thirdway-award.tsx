import { cn } from "@foundry/foundry-utils";
import { ThirdwayReveal } from "@foundry/thirdway-reveal";

export interface ThirdwayAwardProps {
  /** the accolade, in the grotesk */
  title: string;
  /** the line under it, in the light serif */
  detail: string;
  className?: string;
}

/** A centred accolade: a grotesk line over a lighter serif line, rising into view. */
export function ThirdwayAward({ title, detail, className }: ThirdwayAwardProps) {
  return (
    <section className={cn("bg-background px-gutter py-[4.25rem] text-center text-foreground md:px-[calc(var(--page-gutter)*2)] md:py-[6.5rem]", className)}>
      <ThirdwayReveal className="mx-auto max-w-[75rem]">
        <h2 className="[word-spacing:-0.07em] text-[2rem] leading-[1] font-[560] tracking-[-0.06em] text-balance md:text-[clamp(2rem,4.4vw,4rem)] md:leading-[0.98]">{title}</h2>
        <p className="mx-auto mt-1 max-w-[61rem] font-[family-name:var(--typeface-serif,Georgia,serif)] text-[2rem] leading-[1.1] font-[350] tracking-[-0.04em] text-balance md:text-[clamp(2rem,4.4vw,4rem)] md:leading-[0.98]">{detail}</p>
      </ThirdwayReveal>
    </section>
  );
}

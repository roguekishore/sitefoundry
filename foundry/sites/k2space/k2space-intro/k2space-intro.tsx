import { cn } from "@foundry/foundry-utils";
import { K2spaceLineReveal } from "@foundry/k2space-line-reveal";

export interface K2spaceIntroProps {
  /** the statement (about four lines on desktop) */
  text: string;
  className?: string;
}

/** A big statement on black that reveals line by line as it scrolls up. */
export function K2spaceIntro({ text, className }: K2spaceIntroProps) {
  return (
    <section
      className={cn(
        "bg-background px-gutter pt-[174px] pb-24 text-foreground [font-stretch:var(--k2space-stretch,100%)] lg:pt-[14.6vw] lg:pb-[10.55vw]",
        className,
      )}
    >
      <K2spaceLineReveal
        as="p"
        text={text}
        className="font-display text-[34px]/none font-[560] lg:max-w-[69vw] lg:text-[3.307vw]/none"
      />
    </section>
  );
}

import { cn } from "@foundry/foundry-utils";

export interface ImpulsespaceIntroProps {
  /** the statement, a few sentences */
  text: string;
  className?: string;
}

/** A 22px statement in a narrow centred column under 240px of air. */
export function ImpulsespaceIntro({ text, className }: ImpulsespaceIntroProps) {
  return (
    <section className={cn("bg-background px-gutter pt-60 text-foreground", className)}>
      <p className="mx-auto max-w-[39.125rem] font-display text-[1.375rem] leading-[1.3] font-semibold">{text}</p>
    </section>
  );
}

import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface LinearIntroProps {
  /** the white lead sentence */
  lead: ReactNode;
  /** the grey continuation, on the same line */
  rest: ReactNode;
  className?: string;
}

/** A big two-tone statement: white lead, grey rest. */
export function LinearIntro({ lead, rest, className }: LinearIntroProps) {
  return (
    <section className={cn("bg-background pb-[4.5rem] text-foreground lg:pb-[8.5rem]", className)}>
      <h2 className="mx-auto max-w-[calc(var(--page-width)+2*var(--page-gutter))] px-gutter font-display text-2xl leading-[1.33] font-[510] tracking-[-0.012em] lg:text-5xl lg:leading-none lg:tracking-[-0.022em]">
        <span className="block max-w-[23.5em] lg:max-w-[23.5em]">
          <span className="text-foreground">{lead}</span> <span className="text-muted-foreground">{rest}</span>
        </span>
      </h2>
    </section>
  );
}

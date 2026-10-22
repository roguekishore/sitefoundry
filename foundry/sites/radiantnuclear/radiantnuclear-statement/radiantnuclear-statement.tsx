import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RadiantnuclearSlot } from "@foundry/radiantnuclear-slot";
import "./radiantnuclear-statement.css";

export interface RadiantnuclearStatementProps {
  /** the statement, one entry per line (each line rises on its own) */
  lines: string[];
  /** the looping video or photo filling the band; empty shows a dark placeholder */
  media?: ReactNode;
  className?: string;
}

export function RadiantnuclearStatement({ lines, media, className }: RadiantnuclearStatementProps) {
  return (
    <section className={cn("radiantnuclear-statement relative isolate h-svh max-h-[68.75rem] min-h-[30rem] overflow-clip font-sans text-card dark:text-foreground", className)}>
      <RadiantnuclearSlot media={media} tone="night" shade="soft" className="absolute inset-0 -z-10" />
      <div className="mx-auto max-w-page px-gutter pt-section">
        <h2 className="text-[2.25rem] leading-[1.1667] font-bold uppercase lg:text-[4.5rem] lg:leading-[1.05]">
          {lines.map((line, i) => (
            // each line sits in its own mask, so it slides up from behind the line above
            <span key={i} className="block overflow-clip">
              <span className="radiantnuclear-statement-line block" style={{ "--rns-i": i } as CSSProperties}>
                {line}
              </span>
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}

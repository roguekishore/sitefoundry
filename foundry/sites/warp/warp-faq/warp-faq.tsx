import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { WarpSection } from "@foundry/warp-section";

export interface WarpFaqItem {
  question: string;
  answer: ReactNode;
}

export interface WarpFaqProps {
  id?: string;
  title: string;
  items: WarpFaqItem[];
  className?: string;
}

/** Prompt-style questions in a ruled list; each opens in place. */
export function WarpFaq({ id, title, items, className }: WarpFaqProps) {
  return (
    <WarpSection id={id} title={title} className={className} contentClassName="pb-16 lg:pb-14">
      <div className="-mt-2 border-t border-border lg:-mt-3">
        {items.map((item) => (
          <details key={item.question} className="group border-b border-border">
            <summary className="flex cursor-pointer list-none items-start gap-4 py-3.5 pl-1 [&::-webkit-details-marker]:hidden">
              <span className="flex-1 text-sm leading-[1.65] tracking-[calc(0.04em_-_var(--warp-squeeze,0em))] transition-colors duration-150 group-hover:text-primary motion-reduce:transition-none">
                <span aria-hidden className="mr-[1ch] text-primary">
                  {">"}
                </span>
                {item.question}
              </span>
              <span aria-hidden className="pt-0.5 pr-1 font-mono text-[0.625rem] text-muted-foreground/70">
                <span className="group-open:hidden">[+]</span>
                <span className="hidden group-open:inline">[−]</span>
              </span>
            </summary>
            <div className={cn("pr-10 pb-5 pl-[calc(2ch+0.25rem)] text-[0.8125rem] leading-[1.65] tracking-[calc(0.03em_-_var(--warp-squeeze,0em))] text-muted-foreground")}>{item.answer}</div>
          </details>
        ))}
      </div>
    </WarpSection>
  );
}

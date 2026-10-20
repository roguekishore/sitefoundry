import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { hhhusherEase } from "@foundry/hhhusher-button";

export interface HhhusherFaqItem {
  question: string;
  answer: string;
}

export interface HhhusherFaqGroup {
  /** the big number, e.g. "01" */
  index: string;
  /** the group's name */
  label: string;
  items: HhhusherFaqItem[];
}

export interface HhhusherFaqProps {
  /** two or more groups of questions; the big list on the left switches between them */
  groups: HhhusherFaqGroup[];
  /** the id other links jump to */
  id?: string;
  className?: string;
}

/**
 * Questions on cream in two halves. Left, a big numbered list of groups (the chosen one full
 * strength, the others at 15%) that stays in view while you scroll; right, the chosen group's
 * questions between thin rules, each with a square plus button that fills dark on hover and
 * opens the answer below. Phones put the group list on top.
 */
export function HhhusherFaq({ groups, id, className }: HhhusherFaqProps) {
  const [group, setGroup] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const items = groups[group]?.items ?? [];

  return (
    <section id={id} className={cn("bg-background pt-section pb-[7rem] text-foreground lg:pb-[10rem]", className)}>
      <div className="mx-auto grid max-w-page gap-8 px-gutter lg:grid-cols-2 lg:gap-10">
        <ul className="flex flex-col gap-1 self-start lg:sticky lg:top-30 lg:max-w-[30.3rem]">
          {groups.map((g, i) => (
            <li key={i}>
              <button
                type="button"
                aria-pressed={i === group}
                onClick={() => {
                  setGroup(i);
                  setOpen(null);
                }}
                className={cn(
                  "flex w-full items-baseline justify-between font-display text-[1.82rem] leading-[1.2] font-medium tracking-[-0.01em] transition-opacity duration-400 lg:text-[2.6875rem] lg:leading-[1.45]",
                  hhhusherEase,
                  i === group ? "opacity-100" : "opacity-15 hover:opacity-40",
                )}
              >
                <span>{g.index}</span>
                <span>{g.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <ul className="border-b-2 border-border lg:border-b-0">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={`${group}-${i}`} className="border-t-2 border-border">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-center justify-between gap-6 py-[1.3rem] text-left lg:py-5"
                >
                  <span className="font-display text-[1.04rem] leading-[1.3] font-medium tracking-[-0.01em] lg:text-2xl lg:leading-[1.3]">{item.question}</span>
                  <span
                    aria-hidden
                    className={cn(
                      "flex size-[2.6rem] shrink-0 items-center justify-center rounded-lg border-2 border-foreground transition-colors duration-300 group-hover:bg-foreground group-hover:text-background lg:size-10",
                      hhhusherEase,
                    )}
                  >
                    {isOpen ? <Minus className="size-5" strokeWidth={1.75} /> : <Plus className="size-5" strokeWidth={1.75} />}
                  </span>
                </button>
                <div className={cn("grid transition-[grid-template-rows] duration-400 motion-reduce:transition-none", hhhusherEase, isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <div className="overflow-hidden">
                    <p className="max-w-[36rem] pb-6 text-[1.04rem] leading-[1.3] font-medium text-muted-foreground lg:text-base">{item.answer}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

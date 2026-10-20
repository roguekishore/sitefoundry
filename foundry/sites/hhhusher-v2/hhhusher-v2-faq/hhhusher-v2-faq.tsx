import type { CSSProperties } from "react";
import { Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { hhhusherV2Ease } from "@foundry/hhhusher-v2-button";
import "./hhhusher-v2-faq.css";

export interface HhhusherV2Question {
  question: string;
  answer: string;
}

export interface HhhusherV2FaqGroup {
  /** the group's name in the index (e.g. "Product") */
  name: string;
  questions: HhhusherV2Question[];
}

export interface HhhusherV2FaqProps {
  /** one or more groups; the index lists them with numbers */
  groups: HhhusherV2FaqGroup[];
  id?: string;
  className?: string;
}

const pad = (n: number) => String(n + 1).padStart(2, "0");
const timeline = (i: number) => `--hhhusher-v2-faq-${i}`;

export function HhhusherV2Faq({ groups, id, className }: HhhusherV2FaqProps) {
  const scope = { "--hh-faq-scope": groups.map((_, i) => timeline(i)).join(", ") } as CSSProperties;
  return (
    <section id={id} className={cn("hhhusher-v2-faq bg-background py-section text-foreground", className)} style={scope}>
      <div className="mx-auto grid max-w-page gap-10 px-gutter lg:grid-cols-[minmax(0,35.7%)_minmax(0,1fr)] lg:gap-[15.6%]">
        {/* the index: pinned on desktop */}
        <div>
          <ol className="font-display text-[1.82rem] leading-[1.25] font-[570] tracking-[-0.02em] lg:sticky lg:top-[7.5rem] lg:text-[2.6875rem] lg:leading-[1.47]">
            {groups.map((group, i) => (
              <li key={group.name} className="hhhusher-v2-faq-entry flex justify-between" style={{ "--hh-faq-name": timeline(i) } as CSSProperties}>
                <a href={`#${id ?? "faq"}-${i + 1}`}>{pad(i)}</a>
                <a href={`#${id ?? "faq"}-${i + 1}`}>{group.name}</a>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col">
          {groups.map((group, i) => (
            <div key={group.name} id={`${id ?? "faq"}-${i + 1}`} className="hhhusher-v2-faq-group scroll-mt-28 pb-16 last:pb-0 lg:pb-24" style={{ "--hh-faq-name": timeline(i) } as CSSProperties}>
              {group.questions.map((q) => (
                <details key={q.question} className="group border-t-2 border-border">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 lg:py-5 [&::-webkit-details-marker]:hidden">
                    <span className="font-display text-[1.04rem] leading-[1.3] font-[570] tracking-[-0.02em] lg:text-[1.5rem] lg:leading-[1.3]">{q.question}</span>
                    <span
                      className={cn(
                        "flex size-[2.55rem] shrink-0 items-center justify-center rounded-lg border-2 border-foreground transition-colors group-hover:bg-foreground group-hover:text-background lg:size-10",
                        hhhusherV2Ease,
                      )}
                    >
                      <Plus className="size-6 transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none" strokeWidth={1.5} />
                    </span>
                  </summary>
                  <p className="max-w-[36rem] pb-7 font-display text-[1rem] leading-[1.4] font-[570] text-foreground/75 lg:text-[1.125rem]">{q.answer}</p>
                </details>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

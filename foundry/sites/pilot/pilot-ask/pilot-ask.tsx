import type { ReactNode } from "react";
import { Sparkle } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PilotBrushNote } from "@foundry/pilot-brush-note";
import { PilotLines } from "@foundry/pilot-heading";
import { PilotPlaceholder } from "@foundry/pilot-placeholder";
import "./pilot-ask.css";

export interface PilotAskProps {
  /** the heading; \n sets the desktop line breaks */
  title: string;
  /** the quoted questions, one per line */
  questions: string[];
  /** the line after the questions */
  answer: string;
  /** the handwritten closing line */
  note?: string;
  /** the callout pill on the chat window */
  callout: string;
  /** the chat window's content (a screenshot); a placeholder when empty */
  media?: ReactNode;
  /** chat screens that take turns in the window (up to three) */
  frames?: ReactNode[];
  className?: string;
}

/** Pilot's AI section: questions on the left, a pink-ringed chat window with a callout on the right. */
export function PilotAsk({ title, questions, answer, note, callout, media, frames, className }: PilotAskProps) {
  return (
    <section className={cn("overflow-x-clip bg-background text-foreground", className)}>
      <div className="relative isolate mx-auto grid max-w-page border-border px-gutter pt-16 pb-20 lg:grid-cols-[minmax(0,33rem)_minmax(0,1fr)] lg:gap-[7.5rem] lg:overflow-x-clip lg:border-x lg:pt-[7.5rem] lg:pr-0 lg:pb-[7.5rem] lg:pl-[1.5625rem]">
        {/* the pale pink wash on the right */}
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 -z-10 w-1/4 bg-linear-to-l from-glow/15 to-transparent lg:w-[62%] lg:[mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
        />

        <div>
          <h2 className="font-display text-[2.25rem] leading-[1.05] font-bold tracking-[-0.02em] lg:text-[2.5rem]">
            <PilotLines text={title} />
          </h2>
          <div className="mt-8 text-lg leading-normal lg:mt-11 lg:text-xl">
            {questions.map((q) => (
              <p key={q}>{q}</p>
            ))}
            <p className="mt-6 lg:mt-7">{answer}</p>
          </div>
          {note && <PilotBrushNote variant="script" stroke="glow" align="left" text={note} className="mt-12 items-center text-center lg:mt-14 lg:max-w-[28rem] lg:items-start lg:text-left" />}
        </div>

        <div className="relative mt-16 lg:mt-0 lg:self-start">
          <div className="relative aspect-[342/264] overflow-clip rounded-2xl bg-card ring-[6px] ring-glow/25 lg:aspect-auto lg:h-[33rem] lg:w-[calc(100%+3.5rem)]">
            {frames?.length ? (
              <div className="absolute inset-0">
                {frames.slice(0, 3).map((f, i) => (
                  <div key={i} className="pilot-ask-frame absolute inset-0">
                    {f}
                  </div>
                ))}
              </div>
            ) : (
              (media ?? <PilotPlaceholder tone="flat" className="absolute inset-0 bg-linear-to-b from-card to-muted" />)
            )}
          </div>
          <p className="absolute -bottom-5 left-8 flex max-w-[calc(100%-4rem)] items-center gap-3 rounded-2xl bg-glow px-4 py-3 text-xs leading-[1.3] font-medium text-foreground ring-4 ring-glow/30 lg:-bottom-6 lg:left-16 lg:gap-6 lg:rounded-[1.75rem] lg:px-7 lg:py-5 lg:text-xl lg:leading-[1.15] dark:text-background">
            <Sparkle aria-hidden className="size-6 shrink-0 fill-current lg:size-9" strokeWidth={1} />
            <span className="max-w-[17rem]">{callout}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

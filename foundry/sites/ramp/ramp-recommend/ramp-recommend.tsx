import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RampHeading } from "@foundry/ramp-heading";
import "./ramp-recommend.css";

export interface RampRecommendProps {
  /** the headline's first line, in ink */
  title: string;
  /** a second headline line, in ink too (optional) */
  titleLine2?: string;
  /** the grey line under it */
  subtitle?: string;
  /** example requests that type themselves into the box, one after another */
  prompts: string[];
  /** screen-reader label for the box */
  fieldLabel: string;
  /** screen-reader label for the send button */
  sendLabel: string;
  /** where the form posts (optional) */
  action?: string;
  /** the fine print at the foot (may hold a link) */
  disclaimer?: ReactNode;
  /** the backdrop photo; empty shows a misty gradient */
  backdrop?: ReactNode;
  className?: string;
}

/** Types each prompt out, holds it, then moves on to the next. */
function useTypedPrompt(prompts: string[]) {
  const [text, setText] = useState(prompts[0] ?? "");
  useEffect(() => {
    if (!prompts.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let p = 0;
    let i = 0;
    let timer = 0;
    const tick = () => {
      const full = prompts[p];
      if (i <= full.length) {
        setText(full.slice(0, i));
        i += 1;
        timer = window.setTimeout(tick, 45);
      } else {
        timer = window.setTimeout(() => {
          p = (p + 1) % prompts.length;
          i = 0;
          tick();
        }, 2200);
      }
    };
    tick();
    return () => window.clearTimeout(timer);
  }, [prompts]);
  return text;
}

/** Ramp's "tell us about your business" panel: a prompt box on a misty full-width backdrop. */
export function RampRecommend({ title, titleLine2, subtitle, prompts, fieldLabel, sendLabel, action, disclaimer, backdrop, className }: RampRecommendProps) {
  const typed = useTypedPrompt(prompts);
  return (
    <section className={cn("relative isolate overflow-clip rounded-lg bg-muted text-foreground", className)}>
      <div aria-hidden className="absolute inset-0 -z-10">
        {backdrop ?? <div className="ramp-recommend-mist size-full" />}
      </div>
      <div className="mx-auto flex max-w-page flex-col items-center px-gutter pt-[7.5rem] pb-8 lg:min-h-[43.75rem] lg:pt-[11.5rem]">
        <RampHeading
          size="section"
          align="center"
          lead={title}
          rest={titleLine2}
          breakBeforeRest
          className="text-[1.75rem]/[1.15] lg:text-[2.5rem]/[1.05] [&>span]:text-foreground"
        />
        {subtitle && <p className="mt-3 max-w-[23rem] text-center text-base/[1.4] text-muted-foreground">{subtitle}</p>}

        <form action={action} className="ramp-recommend-trace mt-5 w-full max-w-[48rem] rounded-[calc(var(--radius)-6px)] p-px">
          <div className="relative h-[12.75rem] rounded-[calc(var(--radius)-7px)] bg-card lg:h-[10.25rem]">
            <label className="contents">
              <span className="sr-only">{fieldLabel}</span>
              <textarea
                name="prompt"
                placeholder={typed}
                className="size-full resize-none rounded-[inherit] bg-transparent px-6 pt-5 pb-14 text-base/6 text-foreground outline-none placeholder:text-muted-foreground"
              />
            </label>
            <button
              type="submit"
              aria-label={sendLabel}
              className="absolute right-1.5 bottom-1.5 grid size-8 place-items-center rounded-[calc(var(--radius)-8px)] bg-muted text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background motion-reduce:transition-none"
            >
              <ArrowRight aria-hidden className="size-4" strokeWidth={1.5} />
            </button>
          </div>
        </form>

        {disclaimer && (
          <p className="mt-auto max-w-[40rem] pt-16 text-center text-sm/5 text-background italic [&_a]:underline [&_a]:underline-offset-2 lg:pt-36">
            {disclaimer}
          </p>
        )}
      </div>
    </section>
  );
}

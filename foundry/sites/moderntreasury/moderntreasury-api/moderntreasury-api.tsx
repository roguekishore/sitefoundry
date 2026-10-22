import { useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ModerntreasuryHeading } from "@foundry/moderntreasury-heading";

export interface ModerntreasuryApiSample {
  /** the toggle's label, e.g. "Business" (shown in capitals) */
  label: string;
  /** HTTP method, e.g. "POST" */
  method: string;
  /** the endpoint, e.g. "/v2/customers" */
  path: string;
  /** the request body, as it should be printed */
  request: string;
  /** the response body, as it should be printed */
  response: string;
  /** the response pane's caption, e.g. "201 Response" */
  responseLabel: string;
  /** exact bits of the code to mark with a mint background (each occurrence) */
  highlight?: string[];
}

export interface ModerntreasuryApiStep {
  /** the mono number over the title, e.g. "01" */
  number: string;
  /** the step's name */
  title: string;
  /** a short line under the title (desktop only) */
  text: string;
  /** the code shown for this step; more than one adds the toggle */
  samples: ModerntreasuryApiSample[];
}

export interface ModerntreasuryApiProps {
  /** the section title; a list of lines sets the desktop line breaks */
  title: string | string[];
  /** the lead under it */
  lead?: string;
  /** the steps, left to right; four fill the timeline */
  steps: ModerntreasuryApiStep[];
  /** the request pane's caption */
  requestLabel: string;
  /** screen-reader labels for the phone's prev/next buttons */
  prevLabel: string;
  nextLabel: string;
  className?: string;
}

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Prints code with the listed bits wrapped in a mint mark. */
function marked(code: string, marks: string[] = []): ReactNode[] {
  if (!marks.length) return [code];
  const re = new RegExp(`(${marks.map(escape).join("|")})`, "g");
  return code.split(re).map((part, i) =>
    marks.includes(part) ? (
      <mark key={i} className="rounded-[1px] bg-highlight/25 text-foreground">
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

/** A ring on the timeline: green when active, a soft ping on the next one. */
function Ring({ active, next }: { active: boolean; next: boolean }) {
  return (
    <span className="relative flex size-4 shrink-0">
      {next && <span aria-hidden className="absolute -inset-1 animate-ping rounded-full bg-highlight/20 motion-reduce:animate-none" />}
      <span
        className={cn(
          "relative size-4 rounded-full bg-background transition-colors duration-150",
          active ? "border-[5px] border-highlight" : "border-2 border-foreground/25",
        )}
      />
    </span>
  );
}

/** Modern Treasury's API walkthrough: a four-step timeline driving a request/response panel. */
export function ModerntreasuryApi({ title, lead, steps, requestLabel, prevLabel, nextLabel, className }: ModerntreasuryApiProps) {
  const [current, setCurrent] = useState(0);
  const [variant, setVariant] = useState(0);
  const step = steps[current];
  const sample = step?.samples[variant] ?? step?.samples[0];
  const go = (i: number) => {
    setCurrent(Math.max(0, Math.min(steps.length - 1, i)));
    setVariant(0);
  };

  const code = "font-mono text-[0.71875rem] leading-[1.1875rem] whitespace-pre lg:text-[0.8125rem] lg:leading-[1.375rem]";
  const caption = "font-mono text-[0.625rem] tracking-[0.04em] text-foreground/45 uppercase";

  return (
    <section className={cn("bg-background py-[calc(var(--section-y)*0.66)] text-foreground lg:py-section", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <ModerntreasuryHeading title={title} lead={lead} />

        {/* desktop timeline */}
        <ol className="relative mt-12 hidden grid-cols-4 lg:mt-14 lg:grid" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}>
          <span aria-hidden className="absolute top-2 h-px bg-foreground/15" style={{ left: `${50 / steps.length}%`, right: `${50 / steps.length}%` }} />
          {steps.map((s, i) => (
            <li key={s.number}>
              <button
                type="button"
                onClick={() => go(i)}
                aria-current={i === current ? "step" : undefined}
                className="group flex w-full flex-col items-center px-4 text-center"
              >
                <Ring active={i === current} next={i === current + 1} />
                <span className={cn("mt-4 font-mono text-[0.6875rem] leading-[1.5]", i === current ? "text-highlight" : "text-foreground/45")}>{s.number}</span>
                <span
                  className={cn(
                    "mt-1.5 text-base leading-6 font-semibold transition-colors duration-150 motion-reduce:transition-none",
                    i === current ? "text-foreground" : "text-foreground/60 group-hover:text-foreground/80",
                  )}
                >
                  {s.title}
                </span>
                <span className="mt-1 max-w-[17rem] text-sm leading-[1.5] text-foreground/60">{s.text}</span>
              </button>
            </li>
          ))}
        </ol>

        {/* phone timeline: dots, then prev / current / next */}
        <div className="mt-10 lg:hidden">
          <ol className="relative flex justify-between">
            <span aria-hidden className="absolute inset-x-2 top-2 h-px bg-foreground/15" />
            {steps.map((s, i) => (
              <li key={s.number}>
                <button type="button" onClick={() => go(i)} aria-label={s.title} aria-current={i === current ? "step" : undefined} className="flex">
                  <Ring active={i === current} next={i === current + 1} />
                </button>
              </li>
            ))}
          </ol>
          <div className="mt-5 grid grid-cols-[2.5rem_1fr_2.5rem] items-center gap-4">
            <button
              type="button"
              onClick={() => go(current - 1)}
              disabled={current === 0}
              aria-label={prevLabel}
              className="flex size-10 items-center justify-center rounded-[calc(var(--radius)/4)] border border-foreground/15 text-foreground disabled:text-foreground/25"
            >
              <ChevronLeft aria-hidden className="size-4" />
            </button>
            <p>
              <span className="block font-mono text-[0.6875rem] leading-[1.5] text-highlight">{step?.number}</span>
              <span className="block text-base leading-6 font-semibold">{step?.title}</span>
            </p>
            <button
              type="button"
              onClick={() => go(current + 1)}
              disabled={current === steps.length - 1}
              aria-label={nextLabel}
              className="flex size-10 items-center justify-center rounded-[calc(var(--radius)/4)] border border-foreground/15 text-foreground disabled:text-foreground/25"
            >
              <ChevronRight aria-hidden className="size-4" />
            </button>
          </div>
        </div>

        {sample && (
          <div className="mt-6 overflow-clip rounded-[calc(var(--radius)/2)] border border-foreground/15 lg:mt-12">
            <div className="flex flex-col gap-3 border-b border-foreground/15 bg-muted px-4 py-3 lg:h-11 lg:flex-row lg:items-center lg:justify-between lg:px-5 lg:py-0">
              <p className="font-mono text-[0.8125rem] leading-[1.5]">
                <span className="mr-2.5 text-[0.6875rem] text-foreground/70 uppercase">{sample.method}</span>
                {sample.path}
              </p>
              {step.samples.length > 1 && (
                <div className="grid auto-cols-fr grid-flow-col gap-1.5 lg:flex">
                  {step.samples.map((v, i) => (
                    <button
                      key={v.label}
                      type="button"
                      aria-pressed={i === variant}
                      onClick={() => setVariant(i)}
                      className={cn(
                        "h-6 rounded-[calc(var(--radius)/4)] px-2 font-mono text-[0.6875rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-150 motion-reduce:transition-none",
                        i === variant
                          ? "bg-highlight text-highlight-foreground"
                          : "bg-background font-normal text-foreground/50 ring-1 ring-foreground/15 ring-inset hover:text-foreground",
                      )}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="grid lg:grid-cols-[3fr_2fr]">
              <div className="min-w-0 bg-background p-4 lg:p-5">
                <p className={caption}>{requestLabel}</p>
                <pre className={cn(code, "mt-4 overflow-x-auto lg:mt-5")}>{marked(sample.request, sample.highlight)}</pre>
              </div>
              <div className="min-w-0 border-t border-foreground/15 bg-accent p-4 lg:border-t-0 lg:border-l lg:p-5">
                <p className={caption}>{sample.responseLabel}</p>
                <pre className={cn(code, "mt-4 overflow-x-auto lg:mt-5")}>{marked(sample.response, sample.highlight)}</pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

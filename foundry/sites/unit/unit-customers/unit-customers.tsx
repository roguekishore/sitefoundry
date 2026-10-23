import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { UnitChip } from "@foundry/unit-chip";
import { UnitPlaceholder } from "@foundry/unit-placeholder";
import "./unit-customers.css";

export interface UnitCustomerStory {
  /** the customer's name: the tab label, set like a wordmark */
  company: string;
  /** what they built, in one or two sentences */
  statement: string;
  /** the products they use, as pills */
  chips: string[];
  /** a short quote */
  quote: string;
  /** who said it */
  person: { name: string; role: string; avatar?: ReactNode };
  /** the story's picture (522×480 on desktop); a lilac placeholder when empty */
  media?: ReactNode;
}

export interface UnitCustomersProps {
  /** the centred heading */
  heading: string;
  /** two to five stories; four fit the desktop row */
  stories: UnitCustomerStory[];
  /** seconds each story stays before the next one comes up */
  seconds?: number;
  className?: string;
}

/** Customer stories on a tinted band: a row of name tabs whose underline fills as each story plays, over one white card. */
export function UnitCustomers({ heading, stories, seconds = 8, className }: UnitCustomersProps) {
  const [active, setActive] = useState(0);
  const row = useRef<HTMLDivElement>(null);
  const ease = "duration-[625ms] ease-[cubic-bezier(0.625,0.05,0,1)] motion-reduce:transition-none";

  // keep the active tab in view in the phone's sideways row (without scrolling the page)
  useEffect(() => {
    const el = row.current;
    const tab = el?.children[active] as HTMLElement | undefined;
    if (el && tab && el.scrollWidth > el.clientWidth) {
      el.scrollTo({ left: Math.max(0, tab.offsetLeft - el.offsetLeft), behavior: "smooth" });
    }
  }, [active]);

  return (
    <section
      className={cn("unit-customers bg-muted font-sans text-foreground", className)}
      style={{ "--unit-customers-time": `${seconds}s` } as CSSProperties}
    >
      <div className="mx-auto max-w-page px-gutter py-16 lg:pt-32 lg:pb-36">
        <h2 className="text-center font-display text-[1.640625rem] leading-[1.15] tracking-[-0.02em] lg:text-[2.5rem]">{heading}</h2>

        <div ref={row} role="tablist" className="relative mt-8 -mr-gutter flex snap-x overflow-x-auto [scrollbar-width:none] lg:mt-16 lg:mr-0 lg:grid lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))] lg:overflow-visible">
          {stories.map((s, i) => (
            <button
              key={s.company}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={cn(
                "relative flex h-[3.25rem] w-[30%] shrink-0 snap-start items-center justify-center border-b border-foreground/10 text-[0.9375rem] font-semibold tracking-[-0.02em] whitespace-nowrap transition-opacity lg:h-[4.875rem] lg:w-auto lg:text-xl",
                ease,
                i === active ? "opacity-100" : "opacity-40 hover:opacity-70",
              )}
            >
              {s.company}
              {i === active && (
                <span
                  key={active}
                  aria-hidden
                  className="unit-customers-fill absolute inset-x-0 -bottom-px h-0.5 bg-foreground"
                  onAnimationEnd={() => setActive((a) => (a + 1) % stories.length)}
                />
              )}
            </button>
          ))}
        </div>

        <div className="mt-8 grid rounded-lg bg-background p-3 lg:mt-8">
          {stories.map((s, i) => (
            <article
              key={s.company}
              role="tabpanel"
              aria-hidden={i !== active}
              className={cn(
                "col-start-1 row-start-1 grid gap-6 transition-opacity lg:grid-cols-[minmax(0,32.625rem)_1fr] lg:gap-12",
                ease,
                i === active ? "opacity-100" : "pointer-events-none invisible opacity-0",
              )}
            >
              <div className="aspect-[326/300] overflow-clip rounded-[0.25rem] lg:aspect-[522/480]">{s.media ?? <UnitPlaceholder tone="accent" className="size-full" />}</div>
              <div className="flex flex-col px-1 pb-4 lg:px-0 lg:pt-8 lg:pr-10 lg:pb-10">
                <p className="max-w-[31rem] text-[1.203rem] leading-[1.25] tracking-[-0.01em] lg:text-[1.625rem] lg:leading-[1.2]">{s.statement}</p>
                <div className="mt-5 flex max-w-[31rem] flex-wrap gap-2 lg:mt-5">
                  {s.chips.map((c) => (
                    <UnitChip key={c}>{c}</UnitChip>
                  ))}
                </div>
                <blockquote className="mt-10 max-w-[28rem] text-[0.984rem] leading-[1.4] tracking-[0.01em] lg:mt-auto lg:text-lg lg:leading-[1.3]">{s.quote}</blockquote>
                <div className="mt-5 flex items-center gap-3">
                  <div className="size-10 shrink-0 overflow-clip rounded-[0.25rem]">{s.person.avatar ?? <UnitPlaceholder tone="muted" className="size-full" />}</div>
                  <div className="text-sm leading-[1.5] tracking-[0.01em]">
                    <p>{s.person.name}</p>
                    <p className="text-muted-foreground">{s.person.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

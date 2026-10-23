import { useState, type CSSProperties, type ReactNode } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { BrexButton } from "@foundry/brex-button";
import { BrexPlaceholder } from "@foundry/brex-placeholder";
import "./brex-testimonials.css";

export interface BrexStory {
  /** the customer's name on the tab / accordion row */
  tab: string;
  /** the customer's mark in orange above the quote: a name or a logo node */
  logo: ReactNode;
  /** the quote, without quotation marks */
  quote: string;
  /** who said it */
  person: string;
  /** their role and company, after the name */
  role: string;
  /** the orange link under the attribution */
  link: { label: string; href: string };
  /** the photo or video frame. A placeholder when empty */
  media?: ReactNode;
}

export interface BrexTestimonialsProps {
  /** two or three customer stories */
  stories: BrexStory[];
  /** seconds each story stays before the next opens */
  seconds?: number;
  className?: string;
}

/** Customer stories: tabs on desktop, an accordion on phones, with autoplay. */
export function BrexTestimonials({ stories, seconds = 8, className }: BrexTestimonialsProps) {
  const [active, setActive] = useState(0);
  const next = () => setActive((i) => (i + 1) % stories.length);
  return (
    <section
      className={cn("brex-testimonials bg-muted px-gutter pt-12 pb-12 lg:px-[calc(var(--page-gutter)*3)] lg:pt-[5.5rem]", className)}
      style={{ "--brex-testimonials-time": `${seconds}s` } as CSSProperties}
    >
      <div className="mx-auto max-w-page">
        <div role="tablist" className="mx-auto hidden max-w-[65.5rem] grid-cols-3 lg:grid">
          {stories.map((s, i) => (
            <div key={s.tab} className="relative flex justify-center">
              <button
                type="button"
                role="tab"
                id={`brex-story-tab-${i}`}
                aria-selected={i === active}
                aria-controls={`brex-story-panel-${i}`}
                onClick={() => setActive(i)}
                className={cn(
                  "relative px-0 pb-3 text-sm transition-colors duration-150 ease-linear motion-reduce:transition-none",
                  i === active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {s.tab}
                <span aria-hidden className={cn("absolute inset-x-0 bottom-0 h-0.5 bg-foreground", i !== active && "hidden")} />
              </button>
              {i === active && (
                <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 opacity-0">
                  <span key={active} onAnimationEnd={next} className="brex-testimonials-fill block size-full bg-foreground" />
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="lg:mt-12">
          {stories.map((s, i) => {
            const open = i === active;
            return (
              <div key={s.tab} className={cn("relative border-t border-border lg:border-0", i === stories.length - 1 && "border-b lg:border-b-0")}>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`brex-story-panel-${i}`}
                  onClick={() => setActive(i)}
                  className="relative flex w-full items-center justify-between py-5 text-left text-sm font-medium text-foreground lg:hidden"
                >
                  {s.tab}
                  <ChevronDown aria-hidden className={cn("size-4 text-muted-foreground transition-transform duration-200", open && "rotate-180")} strokeWidth={1.75} />
                  {open && (
                    <span aria-hidden className="pointer-events-none absolute -top-px inset-x-0 h-0.5 bg-glow">
                      <span key={active} onAnimationEnd={next} className="brex-testimonials-fill block size-full bg-primary" />
                    </span>
                  )}
                </button>
                <div
                  role="tabpanel"
                  id={`brex-story-panel-${i}`}
                  aria-labelledby={`brex-story-tab-${i}`}
                  className={cn("brex-testimonials-panel", open ? "block lg:grid" : "hidden", "gap-12 pb-10 lg:grid-cols-[1fr_0.93fr] lg:items-center lg:pb-0")}
                >
                  <div className="lg:max-w-[40.5rem]">
                    {s.media ?? <BrexPlaceholder tone="panel" className="aspect-[648/482] w-full rounded-xl" />}
                  </div>
                  <div className="mt-10 lg:mt-0">
                    <div className="font-display text-2xl/7 font-bold tracking-[0.04em] text-primary uppercase">{s.logo}</div>
                    <blockquote className="mt-10 font-[family-name:var(--typeface-serif,Georgia)] text-2xl/[1.625rem] text-foreground lg:mt-14 lg:text-[2rem]/10">
                      {/* foundry-allow-text: typographic quotation marks around the quote prop */}
                      <p>&ldquo;{s.quote}&rdquo;</p>
                    </blockquote>
                    <p className="mt-6 text-base/6 text-muted-foreground lg:mt-8">
                      {/* foundry-allow-text: dash before the attribution */}
                      &mdash; <span className="underline underline-offset-2">{s.person}</span>, {s.role}
                    </p>
                    <BrexButton href={s.link.href} variant="link" className="mt-8">
                      {s.link.label}
                    </BrexButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

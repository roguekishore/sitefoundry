import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./roveia-industries.css";

export interface RoveiaIndustry {
  /** small index shown before the name ("01") */
  index: string;
  name: string;
  href?: string;
  /** the paragraph on the phone card */
  body?: string;
  /** client names (or small wordmarks) along the foot of the phone card */
  clients?: ReactNode[];
  /** the square illustration on the phone card; a placeholder when empty */
  media?: ReactNode;
}

export interface RoveiaIndustriesProps {
  heading: string;
  items: RoveiaIndustry[];
  className?: string;
}

/**
 * "Who we work with": on desktop a heading over a list of huge, light (80px / 300) sector
 * names with a tiny index at their baseline, each turning blue on hover. On phones each sector
 * becomes a dark card with a blue corner glow: square illustration, "01 · Name", a paragraph
 * and client names. The heading and rows fade in as they scroll into view.
 */
export function RoveiaIndustries({ heading, items, className }: RoveiaIndustriesProps) {
  return (
    <section className={cn("roveia-industries bg-background py-16 text-foreground lg:py-section", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <h2 className="roveia-industries-reveal text-[2rem] leading-[1.2] font-normal tracking-[-0.03em] lg:pl-8 lg:text-[2.5rem]">{heading}</h2>

        {/* desktop: the big list */}
        <ul className="mt-18 hidden flex-col lg:flex">
          {items.map((item, i) => (
            <li key={item.name} className="roveia-industries-reveal" style={{ ["--i" as string]: i }}>
              <a
                href={item.href ?? "#"}
                className="group inline-flex items-baseline gap-4 transition-colors duration-300 hover:text-primary motion-reduce:transition-none"
              >
                <span className="w-4 text-sm leading-none opacity-80">{item.index}</span>
                <span className="text-[5rem] leading-[1.2] font-light tracking-[-0.01em]">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* phones: dark cards */}
        <ul className="mt-14 flex flex-col gap-4 lg:hidden">
          {items.map((item) => (
            <li key={item.name} className="roveia-industries-reveal">
              <a
                href={item.href ?? "#"}
                className="dark flex flex-col overflow-clip rounded-lg bg-background bg-[linear-gradient(165deg,color-mix(in_oklab,var(--primary)_30%,transparent),transparent_69%)] px-6 pt-6 pb-6 text-foreground"
              >
                <div className="size-[10.3rem] overflow-clip rounded-lg">
                  {item.media ?? <div className="size-full bg-primary/15" />}
                </div>
                <h3 className="mt-6 text-[1.75rem] leading-[1.3] font-light tracking-[-0.02em]">
                  {item.index} · {item.name}
                </h3>
                {item.body && <p className="mt-6 text-base leading-6 tracking-[-0.02em] text-muted-foreground">{item.body}</p>}
                {item.clients && item.clients.length > 0 && (
                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-lg text-foreground/90">
                    {item.clients.map((c, k) => (
                      <span key={k}>{c}</span>
                    ))}
                  </div>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

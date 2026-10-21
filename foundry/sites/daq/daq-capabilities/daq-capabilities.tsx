import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { DaqEyebrow } from "@foundry/daq-eyebrow";
import "./daq-capabilities.css";

export interface DaqCapability {
  /** the card's big title */
  title: string;
  /** a short line under the title */
  description: string;
  /** monospace tech tags at the card's top right (shown uppercase) */
  tags: string[];
  /** where the card links to */
  href: string;
  /** the tab label under the row (shown uppercase); the title when left out */
  tab?: string;
}

export interface DaqCapabilitiesProps {
  /** the eyebrow, e.g. "02 / What we build" */
  eyebrow: string;
  /** the heading's thin first line and heavy second line (shown uppercase) */
  lead: string;
  payoff: string;
  /** the cards, in order */
  items: DaqCapability[];
  /** the small link label on every card, e.g. "Explore" */
  linkLabel: string;
  className?: string;
}

const pct = (n: number) => `${Math.min(100, Math.max(0, n)).toFixed(2)}%`;

// Each card's share of the pinned stretch: its title fills as it slides towards the left,
// and its tab and border light up while it is the current one.
function cardRange(i: number, count: number): CSSProperties {
  const step = 100 / Math.max(count - 1, 1);
  const fillFrom = Math.max(0, (i - 0.6) * step);
  return {
    "--daq-cap-fill-from": pct(fillFrom),
    "--daq-cap-fill-to": pct(Math.max(fillFrom + 2, (i + 0.1) * step)),
    "--daq-cap-on-from": pct((i - 0.5) * step),
    "--daq-cap-on-to": pct((i + 0.5) * step),
  } as CSSProperties;
}

export function DaqCapabilities({ eyebrow, lead, payoff, items, linkLabel, className }: DaqCapabilitiesProps) {
  return (
    <section className={cn("daq-capabilities relative overflow-x-clip bg-background lg:h-[430svh]", className)}>
      <div className="py-section lg:sticky lg:top-0 lg:flex lg:h-svh lg:flex-col lg:pt-[6.5rem] lg:pb-0">
        <div className="px-gutter">
          <DaqEyebrow label={eyebrow} rule="short" ruleFillClassName="daq-capabilities-progress hidden lg:block" />
          <h2 className="mt-5 font-display text-[clamp(2.4rem,4.8vw,6rem)] leading-[1.04] tracking-[-0.03em] uppercase lg:mt-9">
            <span className="block font-thin">{lead}</span>
            <span className="block font-bold">{payoff}</span>
          </h2>
        </div>

        <ul className="daq-capabilities-track mt-8 flex flex-col gap-4 px-gutter lg:mt-9 lg:w-max lg:flex-row lg:gap-[3vw]">
          {items.map((item, i) => (
            <li key={item.title} className="lg:w-[50.7vw]" style={cardRange(i, items.length)}>
              <a
                href={item.href}
                className="daq-capabilities-card group/card relative flex h-full flex-col border border-border bg-foreground/2 p-6 transition-colors duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-foreground/40 hover:bg-foreground/4 lg:h-[max(22rem,46svh)] lg:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono text-[0.5625rem] font-bold tracking-[0.2em] text-foreground/58">{String(i + 1).padStart(2, "0")}</span>
                  <ul className="flex flex-col items-end gap-2 text-right font-mono text-[0.5625rem] leading-snug font-bold tracking-[0.2em] text-foreground/58 uppercase lg:flex-row lg:flex-wrap lg:justify-end lg:gap-x-0 lg:gap-y-1">
                    {item.tags.map((tag, t) => (
                      <li key={tag} className="flex items-center">
                        {t > 0 && (
                          <span aria-hidden className="mx-2 hidden size-0.5 rounded-full bg-foreground/40 lg:inline-block" />
                        )}
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 lg:my-auto lg:pt-8">
                  {/* a dim copy of the title, with a white copy over it that is uncovered left to right */}
                  <h3 className="relative w-max max-w-full text-[1.9rem] leading-[1.1] tracking-[-0.03em] lg:text-[3.2vw]">
                    <span className="text-foreground/30">{item.title}</span>
                    <span aria-hidden className="daq-capabilities-fill absolute inset-0 text-foreground">
                      {item.title}
                    </span>
                  </h3>
                  <p className="mt-4 max-w-[22.5rem] text-sm leading-relaxed text-foreground/72 lg:mt-5 lg:text-[0.9375rem]">{item.description}</p>
                </div>

                <span className="mt-12 flex items-center gap-3 font-mono text-[0.5625rem] font-bold tracking-[0.25em] text-foreground/58 uppercase transition-colors duration-300 group-hover/card:text-foreground lg:mt-8">
                  {linkLabel}
                  <ArrowUpRight aria-hidden strokeWidth={1.75} className="size-3 transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
                </span>

                <span aria-hidden className="absolute right-6 bottom-4 text-[4.5rem] leading-none font-thin tracking-[-0.04em] text-foreground/20 lg:right-10 lg:bottom-8 lg:text-[7.2rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* desktop: a progress line over the tab labels */}
        <div className="mx-gutter mt-8 hidden lg:block">
          <div className="relative h-px bg-border">
            <span aria-hidden className="daq-capabilities-progress absolute inset-0 origin-left bg-foreground/80" />
          </div>
          <ol className="flex justify-between pt-5">
            {items.map((item, i) => (
              <li
                key={item.title}
                className="daq-capabilities-tab font-mono text-[0.625rem] font-bold tracking-[0.2em] text-foreground/58 uppercase"
                style={cardRange(i, items.length)}
              >
                {String(i + 1).padStart(2, "0")} {item.tab ?? item.title}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RoveiaV2Heading } from "@foundry/roveia-v2-heading";
import "./roveia-v2-industries.css";

export interface RoveiaV2Industry {
  /** the sector's name, set very large on desktop */
  title: string;
  /** where the row links */
  href?: string;
  /** the paragraph on the phone card */
  description?: string;
  /** client wordmarks along the bottom of the phone card (text or small logos) */
  clients?: ReactNode[];
  /** the illustration on the phone card; a placeholder tile shows when empty */
  media?: ReactNode;
}

export interface RoveiaV2IndustriesProps {
  /** the small label above the list */
  heading: string;
  /** the sectors, numbered 01, 02, … */
  items: RoveiaV2Industry[];
  className?: string;
}

export function RoveiaV2Industries({ heading, items, className }: RoveiaV2IndustriesProps) {
  return (
    <section className={cn("bg-background pt-14 pb-10 text-foreground lg:pt-[7.5rem] lg:pb-32", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <RoveiaV2Heading size="label" className="roveia-v2-industries-fade lg:pl-8">
          {heading}
        </RoveiaV2Heading>

        {/* desktop: a numbered list of very large names that turn blue on hover */}
        <ul className="mt-[5.5rem] hidden lg:block">
          {items.map((item, i) => (
            <li key={item.title} className="roveia-v2-industries-rise">
              <a href={item.href ?? "#"} className="group inline-flex items-baseline gap-4 text-foreground transition-colors duration-300 hover:text-primary motion-reduce:transition-none">
                <span className="w-4 text-base tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[5rem] leading-[1.2] font-normal tracking-[-0.025em]">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* phones: dark cards with a blue glow from the top-left */}
        <ul className="mt-14 space-y-4 lg:hidden">
          {items.map((item, i) => (
            <li key={item.title} className="roveia-v2-industries-rise dark">
              <a
                href={item.href ?? "#"}
                className="block rounded-lg bg-background bg-[linear-gradient(165deg,color-mix(in_oklab,var(--primary)_30%,transparent),transparent_69%)] px-6 pt-6 pb-6 text-foreground"
              >
                <div className="size-[10.3rem] overflow-clip rounded-lg [&>*]:size-full [&>*]:object-contain">
                  {item.media ?? <div className="size-full bg-glow/10" />}
                </div>
                <p className="mt-6 text-[2rem] leading-[1.2] font-light tracking-[-0.03em]">
                  {String(i + 1).padStart(2, "0")} · {item.title}
                </p>
                {item.description && <p className="mt-6 text-base leading-6 tracking-[-0.03em] text-muted-foreground">{item.description}</p>}
                {item.clients && item.clients.length > 0 && (
                  <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-lg text-foreground/90">
                    {item.clients.map((c, k) => (
                      <li key={k}>{c}</li>
                    ))}
                  </ul>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

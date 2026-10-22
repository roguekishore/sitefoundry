import { useRef, useState, type ReactNode } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@foundry/foundry-utils";
import { AspensearchButton } from "@foundry/aspensearch-button";
import { AspensearchHalftone } from "@foundry/aspensearch-halftone";
import { AspensearchLabel } from "@foundry/aspensearch-label";
import { AspensearchRevealText } from "@foundry/aspensearch-reveal-text";

export interface AspensearchClient {
  /** the firm's name, shown large in the list */
  name: string;
  /** a mono tag beside it, e.g. "Quant finance" */
  sector: string;
  /** its logo for the colour panel (desktop); empty: the name in mono as a placeholder */
  logo?: ReactNode;
}

export interface AspensearchClientsProps {
  /** the giant word top left, e.g. "Firms" */
  word: string;
  /** the "■ LABEL" tag */
  label: string;
  /** the paragraph beside the label */
  text: string;
  /** the ink button under it */
  action: { label: string; href: string };
  /** the firms, one row each */
  clients: AspensearchClient[];
  /** media for the window beside the giant word; empty: halftone placeholder */
  media?: ReactNode;
  /** anchor id for header links */
  id?: string;
  className?: string;
}

const panelTones = ["bg-chart-1", "bg-chart-2", "bg-chart-3", "bg-chart-4", "bg-chart-5"];
const ease = "duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none";
const pad = (n: number) => String(n).padStart(2, "0");

/**
 * A client list that follows the scroll. A giant word and a halftone window, then a label with
 * a running counter, a paragraph and button, and a stack of colour panels (one per client) on
 * the left; on the right a list of firms in 38px rows. As the list scrolls up the window the
 * active row fills with ink from the bottom, and the panel and counter follow it; hovering a
 * row makes it active too. Phones: window, label, word, paragraph, button, then the list.
 */
export function AspensearchClients({ word, label, text, action, clients, media, id, className }: AspensearchClientsProps) {
  const listRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.75", "end 0.6"] });
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    setActive(Math.min(clients.length - 1, Math.max(0, Math.floor(p * clients.length))));
  });
  const current = clients[active];

  return (
    <section id={id} className={cn("grid border-t border-border bg-background font-sans tracking-[-0.04em] text-foreground lg:grid-cols-4", className)}>
      <AspensearchHalftone media={media} className="aspect-square lg:order-2 lg:col-span-2 lg:aspect-auto lg:h-[40.6vw] lg:border-l lg:border-border" />

      <div className="px-3 pt-5 lg:order-1 lg:col-span-2 lg:px-5 lg:pt-0">
        <AspensearchLabel className="lg:hidden">{label}</AspensearchLabel>
        <AspensearchRevealText as="h2" variant="display" text={word} className="mt-14 font-display text-[13.8vw]/none lg:mt-0 lg:text-[12.5vw]/none" />
      </div>

      {/* Left half of the lower row: label + counter, the colour panels, and the paragraph. */}
      <div className="order-3 grid lg:col-span-2 lg:grid-cols-2 lg:border-t lg:border-border">
        <div className="hidden lg:flex lg:flex-col">
          <div className="flex h-[29.2vw] flex-col justify-between border-b border-border px-5 pt-5 pb-5">
            <AspensearchLabel>{label}</AspensearchLabel>
            <p className="flex items-center justify-between font-mono text-xs/none tracking-normal uppercase">
              <span>{current.name}</span>
              <span className="text-muted-foreground">
                {pad(active + 1)} - {pad(clients.length)}
              </span>
            </p>
          </div>
          <div className="relative h-[29.2vw] overflow-clip">
            <div className={cn("flex h-full flex-col transition-transform", ease)} style={{ transform: `translateY(${-active * 100}%)` }}>
              {clients.map((c, i) => (
                <div key={c.name} className={cn("flex h-full shrink-0 items-center justify-center text-background", panelTones[i % panelTones.length])}>
                  {c.logo ?? <span className="font-mono text-xs tracking-normal uppercase opacity-80">{c.name}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="px-3 pt-16 pb-6 lg:border-l lg:border-border lg:px-5 lg:pt-7">
          <AspensearchRevealText text={text} className="text-base/[1.3]" />
          <div className="mt-48 flex justify-end lg:mt-16 lg:justify-start">
            <AspensearchButton href={action.href}>{action.label}</AspensearchButton>
          </div>
        </div>
      </div>

      <ul ref={listRef} className="order-4 border-t border-border lg:col-span-2 lg:border-l">
        {clients.map((c, i) => (
          <li key={c.name}>
            <button
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={cn(
                "relative isolate flex h-[26vw] w-full items-end justify-between border-b border-border px-3 pb-4 text-left transition-colors lg:grid lg:h-[8.4vw] lg:grid-cols-2 lg:pb-3",
                ease,
                i === active && "text-background",
              )}
            >
              <span aria-hidden className={cn("absolute inset-0 -z-10 origin-bottom bg-foreground transition-transform", ease, i === active ? "scale-y-100" : "scale-y-0")} />
              <span className="text-2xl/none lg:text-[2.63vw]/none">{c.name}</span>
              <span className={cn("pb-0.5 font-mono text-xs/none tracking-normal uppercase lg:pl-5", i === active ? "text-background/70" : "text-muted-foreground")}>{c.sector}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

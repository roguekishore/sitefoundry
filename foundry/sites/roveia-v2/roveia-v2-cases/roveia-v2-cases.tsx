import type { MouseEvent, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./roveia-v2-cases.css";

export interface RoveiaV2Case {
  /** the client's name */
  title: string;
  /** what was done and what came of it */
  description: string;
  /** where the full story lives */
  href?: string;
  /** the video or picture filling the card; a placeholder shows when empty */
  media?: ReactNode;
}

export interface RoveiaV2CasesProps {
  /** the stories, stacked in order */
  cases: RoveiaV2Case[];
  /** the blue pill that follows the cursor over a card */
  pillLabel?: string;
  className?: string;
}

// the pill follows the pointer: its position is kept in two CSS variables on the card
function follow(e: MouseEvent<HTMLAnchorElement>) {
  const box = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--roveia-v2-cases-x", `${e.clientX - box.left}px`);
  e.currentTarget.style.setProperty("--roveia-v2-cases-y", `${e.clientY - box.top}px`);
}

export function RoveiaV2Cases({ cases, pillLabel, className }: RoveiaV2CasesProps) {
  return (
    <section className={cn("relative bg-background px-5 pt-5 pb-10 lg:px-9 lg:pt-0 lg:pb-0", className)}>
      {cases.map((c, i) => (
        <a
          key={c.title}
          href={c.href ?? "#"}
          onMouseMove={follow}
          className={cn(
            "roveia-v2-cases-card group dark sticky top-20 mb-8 flex h-[25rem] flex-col justify-end overflow-clip rounded-lg bg-background text-foreground",
            "lg:top-4 lg:mb-8 lg:h-[calc(100svh-2rem)] lg:min-h-[36rem] lg:rounded-2xl",
            i === cases.length - 1 && "lg:mb-0",
          )}
        >
          <div className="absolute inset-0 [&>*]:size-full [&>*]:object-cover">
            {c.media ?? <div className="bg-muted bg-[radial-gradient(ellipse_at_70%_30%,color-mix(in_oklab,var(--glow)_22%,transparent),transparent_60%)]" />}
          </div>
          {/* the original's wash: 40% black all over, deepening to 90% at the foot */}
          <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_54%,color-mix(in_oklab,var(--background)_50%,transparent)),linear-gradient(color-mix(in_oklab,var(--background)_40%,transparent),color-mix(in_oklab,var(--background)_40%,transparent))]" />

          <div className="relative px-6 pb-6 lg:max-w-[44rem] lg:px-[6.25rem] lg:pb-20">
            <h3 className="text-[2rem] leading-[1.2] font-normal tracking-[-0.03em] lg:text-[2.5rem]">{c.title}</h3>
            <p className="mt-2 text-sm leading-5 tracking-[-0.03em] text-foreground/75 lg:mt-6 lg:text-base lg:leading-6">{c.description}</p>
          </div>

          {pillLabel && (
            <span
              aria-hidden
              className="pointer-events-none absolute top-[var(--roveia-v2-cases-y,50%)] left-[var(--roveia-v2-cases-x,50%)] hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-base tracking-[-0.03em] text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none lg:flex"
            >
              {pillLabel}
              <ArrowUpRight className="size-3.5" strokeWidth={2} />
            </span>
          )}
        </a>
      ))}
    </section>
  );
}

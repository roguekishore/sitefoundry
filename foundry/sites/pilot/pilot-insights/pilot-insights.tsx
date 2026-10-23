import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface PilotInsight {
  /** a line icon or small illustration (about 60px) */
  icon?: ReactNode;
  /** the guide's title */
  title: string;
  /** one short line under it */
  text: string;
  /** the link label, e.g. "Read more" */
  cta: string;
  /** where the row goes */
  href: string;
}

export interface PilotInsightsProps {
  /** the heading; \n sets the line breaks */
  title: string;
  /** the paragraph under it */
  lede?: string;
  /** the guide rows */
  items: PilotInsight[];
  className?: string;
}

const dots =
  "bg-[radial-gradient(circle,color-mix(in_oklab,var(--foreground)_22%,transparent)_1px,transparent_1.5px)] bg-[size:1.5625rem_1.5625rem] bg-[position:0.75rem_0.75rem]";

/** Pilot's free-insights band: heading left, a dotted column of guide rows right. */
export function PilotInsights({ title, lede, items, className }: PilotInsightsProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto grid max-w-page border-border pt-16 pb-16 lg:grid-cols-2 lg:border-x lg:py-0">
        <div className="px-gutter lg:px-[1.5625rem] lg:pt-[7.5rem] lg:pb-[7.5rem]">
          <h2 className="font-display text-[2.25rem] leading-[1.05] font-semibold tracking-[-0.02em] whitespace-pre-line lg:text-[2.5rem]">{title}</h2>
          {lede && <p className="mt-5 max-w-[28rem] text-base leading-[1.6] lg:mt-8 lg:text-xl lg:leading-normal">{lede}</p>}
        </div>

        <div className="mx-gutter mt-14 border border-border lg:mx-0 lg:mt-0 lg:flex lg:flex-col lg:border-y-0 lg:border-r-0">
          <div aria-hidden className={cn("hidden h-[7.5rem] lg:block", dots)} />
          <ul className="divide-y divide-border lg:border-y lg:border-border">
            {items.map((it) => (
              <li key={it.title}>
                <a
                  href={it.href}
                  className="group flex gap-6 px-5 py-6 transition-colors duration-200 ease-in-out hover:bg-muted motion-reduce:transition-none lg:gap-8 lg:px-8"
                >
                  {it.icon && <span className="flex size-16 shrink-0 items-start justify-center pt-1 text-foreground [&_svg]:size-14">{it.icon}</span>}
                  <span className="block min-w-0">
                    <span className="block font-display text-2xl leading-[1.2] font-medium">{it.title}</span>
                    <span className="mt-1.5 block max-w-[28rem] text-sm leading-[1.5] tracking-[0.01em] text-muted-foreground">{it.text}</span>
                    <span className="mt-5 inline-block font-mono text-base leading-none text-primary uppercase underline underline-offset-[3px]">{it.cta}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div aria-hidden className={cn("hidden min-h-[7.5rem] flex-1 lg:block", dots)} />
        </div>
      </div>
    </section>
  );
}

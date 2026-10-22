import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { BasepowercompanyMedia } from "@foundry/basepowercompany-media";

export interface BasepowercompanyExtra {
  /** the title on the white bar */
  title: string;
  /** the text that opens on the bar on hover or focus */
  body: string;
  /** where the card links */
  href: string;
  /** the square photo */
  media?: ReactNode;
  /** describes the placeholder for screen readers */
  mediaLabel?: string;
}

export interface BasepowercompanyExtrasProps {
  /** the section heading */
  title: string;
  /** a line under it */
  subtitle?: string;
  /** the cards, two across on desktop */
  items: BasepowercompanyExtra[];
  className?: string;
}

const ease = "duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none";

/*
 * Add-ons: a left-aligned heading and line, then big square photo cards. A white bar sits
 * inside the foot of each photo with a title and a plus; on hover or focus the bar grows
 * upward to show a short text and the plus turns into a cross.
 */
export function BasepowercompanyExtras({ title, subtitle, items, className }: BasepowercompanyExtrasProps) {
  return (
    <section className={cn("bg-background px-gutter pt-12 pb-16 text-foreground lg:pt-0", className)}>
      <div className="mx-auto max-w-page">
        <h2 className="max-w-[14ch] font-display text-[2rem] leading-[1.2] font-bold tracking-[-0.025em] sm:max-w-none lg:text-[2.5rem] lg:leading-[1.1]">{title}</h2>
        {subtitle && <p className="mt-6 max-w-[34rem] text-base lg:max-w-none leading-6 tracking-[-0.005em] text-muted-foreground lg:mt-8">{subtitle}</p>}

        <ul className="mt-16 grid gap-6 lg:mt-[3.75rem] lg:grid-cols-2">
          {items.map((it) => (
            <li key={it.title}>
              <a href={it.href} className="group relative block outline-none">
                <BasepowercompanyMedia media={it.media} label={it.mediaLabel} className="aspect-square rounded-[calc(var(--radius)*3)]" />
                <div className="absolute inset-x-3 bottom-3 rounded-[calc(var(--radius)*2.5)] bg-card px-5 py-[1.0625rem] text-card-foreground group-focus-visible:ring-2 group-focus-visible:ring-ring">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-xl leading-[1.35] font-bold tracking-[-0.025em]">{it.title}</h3>
                    <Plus aria-hidden className={cn("size-6 shrink-0 stroke-[1.25] transition-transform group-hover:rotate-45 group-focus-visible:rotate-45", ease)} />
                  </div>
                  <div className={cn("grid grid-rows-[0fr] transition-[grid-template-rows] group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]", ease)}>
                    <div className="min-h-0 overflow-hidden">
                      <p className="pt-3 pb-1 text-base leading-6 tracking-[-0.005em] text-muted-foreground">{it.body}</p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

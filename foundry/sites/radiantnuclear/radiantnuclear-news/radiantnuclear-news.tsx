import type { ReactNode } from "react";
import { Play } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RadiantnuclearButton } from "@foundry/radiantnuclear-button";
import { RadiantnuclearSlot } from "@foundry/radiantnuclear-slot";

export interface RadiantnuclearNewsItem {
  /** the date as it should read, e.g. "March 3, 2026" */
  date: string;
  /** the story's title */
  title: string;
  /** a line or two under the title */
  summary?: string;
  /** where the story lives */
  href: string;
  /** the 1.8:1 photo; empty shows a placeholder */
  media?: ReactNode;
}

export interface RadiantnuclearNewsProps {
  /** the bold all-caps heading */
  title: string;
  /** the button beside the heading, e.g. to the news page */
  cta?: { label: string; href: string };
  /** the stories, newest first */
  items: RadiantnuclearNewsItem[];
  id?: string;
  className?: string;
}

export function RadiantnuclearNews({ title, cta, items, id, className }: RadiantnuclearNewsProps) {
  return (
    <section id={id} className={cn("bg-background py-section font-sans text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="flex items-center justify-between gap-6">
          <h2 className="max-w-[9ch] text-[1.875rem] leading-[1.15] font-bold uppercase lg:max-w-none lg:text-[2.75rem] lg:leading-[1.1]">{title}</h2>
          {cta && (
            <RadiantnuclearButton href={cta.href} className="min-w-[8.5rem] shrink-0">
              {cta.label}
            </RadiantnuclearButton>
          )}
        </div>

        <ul className="mt-12 grid gap-y-20 lg:mt-16 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-24">
          {items.map((it) => (
            <li key={it.href}>
              <a href={it.href} className="group block">
                <RadiantnuclearSlot
                  media={it.media}
                  className="aspect-[1.8] w-full brightness-90 transition-[filter] duration-300 group-hover:brightness-100 motion-reduce:transition-none"
                />
                <p className="mt-6 flex items-center gap-2 text-lg leading-[1.5]">
                  <Play aria-hidden className="size-3 fill-primary text-primary" />
                  {it.date}
                </p>
                <h3 className="mt-3 text-2xl leading-[1.25] font-semibold">
                  {/* the underline grows from the left on hover */}
                  <span className="bg-linear-to-r from-foreground to-foreground bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_2px] motion-reduce:transition-none">
                    {it.title}
                  </span>
                </h3>
                {it.summary && <p className="mt-3 text-base leading-[1.5]">{it.summary}</p>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

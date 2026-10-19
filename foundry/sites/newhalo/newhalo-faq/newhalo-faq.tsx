import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { NewhaloAccordion, type NewhaloAccordionItem } from "@foundry/newhalo-accordion";
import { NewhaloTiles } from "@foundry/newhalo-tiles";

export interface NewhaloFaqTopic {
  /** the tile label */
  label: string;
  /** the 64px heading over its questions (defaults to the label) */
  title?: string;
  items: NewhaloAccordionItem[];
}

export interface NewhaloFaqProps {
  /** one tile and one question list per topic */
  topics: NewhaloFaqTopic[];
  /** the "can't find it?" prompt at the end on phones (the page hero shows it on desktop) */
  aside?: { title: string; link: { label: string; href: string } };
  className?: string;
}

/**
 * A help centre on paper: topic tiles on the left (a sideways row on phones), and the chosen
 * topic's 64px heading with its hairline accordion on the right.
 */
export function NewhaloFaq({ topics, aside, className }: NewhaloFaqProps) {
  const [active, setActive] = useState(0);
  const topic = topics[active];
  return (
    <section className={cn("bg-background pt-1.5 pb-section text-foreground lg:pt-section", className)}>
      <div className="mx-auto grid max-w-page px-gutter lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:col-span-4">
          <NewhaloTiles items={topics.map((t) => ({ label: t.label }))} activeIndex={active} onSelect={setActive} />
        </div>
        <div className="mt-[4.4rem] lg:col-span-7 lg:col-start-6 lg:mt-0">
          <h2 className="font-display text-[2.5rem] leading-[1.1] tracking-[-0.01em] lg:text-[4rem] lg:leading-none">{topic.title ?? topic.label}</h2>
          <NewhaloAccordion key={active} items={topic.items} group={`newhalo-faq-${active}`} className="mt-7 lg:mt-9" />
        </div>
        {aside && (
          <div className="mt-20 lg:hidden">
            <p className="font-display text-[1.3rem] leading-[1.1]">{aside.title}</p>
            <a href={aside.link.href} className="mt-6 inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm">
              {aside.link.label}
              <ArrowRight aria-hidden strokeWidth={1} className="size-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

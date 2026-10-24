import { useRef, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ParsleyhealthButton } from "@foundry/parsleyhealth-button";
import { ParsleyhealthArrow, useParsleyhealthCarousel } from "@foundry/parsleyhealth-carousel";
import { ParsleyhealthHeading } from "@foundry/parsleyhealth-heading";
import { ParsleyhealthPlaceholder } from "@foundry/parsleyhealth-placeholder";

export interface ParsleyhealthCondition {
  /** the condition area */
  title: string;
  /** the symptoms or conditions it covers */
  text: string;
  /** the link at the foot of the card */
  link: { label: string; href: string };
  /** the round thumbnail (an img, sized to fill); a placeholder when empty */
  media?: ReactNode;
}

export interface ParsleyhealthConditionsProps {
  /** the title */
  title: string;
  /** the pill under the title */
  action?: { label: string; href: string };
  /** the cards */
  items: ParsleyhealthCondition[];
  /** screen-reader labels of the arrows */
  prevLabel?: string;
  nextLabel?: string;
  className?: string;
}

/** Title and arrows beside a card track that bleeds off the right edge. */
export function ParsleyhealthConditions({ title, action, items, prevLabel, nextLabel, className }: ParsleyhealthConditionsProps) {
  const track = useRef<HTMLUListElement>(null);
  const { prev, next, atStart, atEnd } = useParsleyhealthCarousel(track);

  const arrows = (
    <div className="flex shrink-0 gap-4">
      <ParsleyhealthArrow direction="prev" label={prevLabel ?? ""} disabled={atStart} onClick={prev} />
      <ParsleyhealthArrow direction="next" label={nextLabel ?? ""} disabled={atEnd} onClick={next} />
    </div>
  );

  return (
    <section
      className={cn(
        "overflow-clip bg-background py-[calc(var(--section-y)*0.55)] lg:pt-section lg:pb-[calc(var(--section-y)*1.27)]",
        // desktop: the left edge lines up with the page column, the right runs to the window edge
        "lg:pl-[max(var(--page-gutter),calc((100%-var(--page-width))/2))]",
        className,
      )}
    >
      <div className="grid grid-cols-[minmax(0,1fr)] items-stretch gap-10 lg:grid-cols-[24.25rem_minmax(0,1fr)] lg:gap-12">
        <div className="flex flex-col px-gutter lg:px-0 lg:pt-12">
          <ParsleyhealthHeading title={title} align="phone-center" titleClassName="mx-auto max-w-[18rem] lg:mx-0 lg:max-w-[24rem]" />
          {action ? (
            <ParsleyhealthButton href={action.href} variant="secondary" size="sm" arrow className="mt-12 self-start max-lg:hidden">
              {action.label}
            </ParsleyhealthButton>
          ) : null}
          <div className="mt-auto hidden justify-end pt-12 lg:flex">{arrows}</div>
        </div>

        <div>
          <ul
            ref={track}
            className="flex snap-x snap-mandatory scroll-px-gutter gap-6 overflow-x-auto overscroll-x-contain px-gutter [scrollbar-width:none] lg:scroll-px-0 lg:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item) => (
              <li
                key={item.title}
                className="group flex h-[22.5rem] w-[18.75rem] shrink-0 snap-start flex-col rounded-xl border border-border p-6 transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-primary motion-reduce:transition-none lg:h-[26.125rem] lg:w-[20.75rem]"
              >
                <div className="size-[3.75rem] overflow-clip rounded-full lg:size-[5.625rem] [&>img]:size-full [&>img]:object-cover">
                  <div className="size-full transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105 motion-reduce:transition-none [&>img]:size-full [&>img]:object-cover">
                    {item.media ?? <ParsleyhealthPlaceholder />}
                  </div>
                </div>
                <h3 className="mt-6 text-[1.2375rem] leading-[1.273] font-medium text-primary lg:mt-7 lg:text-[1.4438rem]">{item.title}</h3>
                <p className="mt-4 text-[1.1688rem] leading-[1.409] text-foreground/75 lg:text-[1.2375rem] lg:leading-[1.455]">{item.text}</p>
                <a
                  href={item.link.href}
                  className="group/link mt-auto inline-flex items-center gap-2.5 self-start pl-0.5 text-[0.9625rem] text-secondary"
                >
                  <span className="underline decoration-1 underline-offset-[0.3rem]">{item.link.label}</span>
                  <ArrowRight
                    aria-hidden
                    className="size-4 transition-transform duration-200 group-hover/link:translate-x-1 motion-reduce:transition-none"
                    strokeWidth={1.5}
                  />
                </a>
              </li>
            ))}
            {/* a little room after the last card */}
            <li aria-hidden className="w-px shrink-0 lg:w-12" />
          </ul>
          <div className="mt-8 flex items-center gap-4 px-gutter lg:hidden">
            {arrows}
            {action ? (
              <ParsleyhealthButton href={action.href} variant="secondary" size="sm" arrow className="flex-1">
                {action.label}
              </ParsleyhealthButton>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

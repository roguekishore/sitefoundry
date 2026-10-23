import { useId, useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { WhoopButton } from "@foundry/whoop-button";
import { WhoopPlaceholder } from "@foundry/whoop-placeholder";
import { WhoopSectionHeading } from "@foundry/whoop-section-heading";

export interface WhoopStyle {
  /** the tab's label */
  tab: string;
  /** the panel's title */
  title: string;
  /** the panel's paragraph */
  body: string;
  /** the panel's button */
  cta: { label: string; href: string };
  /** the photo, filling the square (object-cover); a grey placeholder when empty */
  media?: ReactNode;
}

export interface WhoopStylesProps {
  /** the big heading */
  heading: string;
  /** one tab and panel per style */
  styles: WhoopStyle[];
  /** screen-reader name of the tab row */
  label: string;
  className?: string;
}

/** Heading, pill tabs and a crossfading photo-and-text panel per tab. */
export function WhoopStyles({ heading, styles, label, className }: WhoopStylesProps) {
  const [active, setActive] = useState(0);
  const id = useId();

  return (
    <section className={cn("bg-background pt-[3.4rem] pb-14 text-foreground lg:py-24", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <WhoopSectionHeading heading={heading} />
      </div>
      <div
        role="tablist"
        aria-label={label}
        className="mt-10 flex gap-2.5 overflow-x-auto px-[max(var(--page-gutter),calc((100%_-_var(--page-width))/2_+_var(--page-gutter)))] [scrollbar-width:none] lg:mt-14 [&::-webkit-scrollbar]:hidden"
      >
        {styles.map((s, i) => (
          <button
            key={s.tab}
            type="button"
            role="tab"
            id={`${id}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`${id}-panel-${i}`}
            onClick={() => setActive(i)}
            className={cn(
              "h-[3.125rem] shrink-0 rounded-full border-2 px-[1.375rem] text-base font-bold whitespace-nowrap",
              "transition-colors duration-125 ease-in-out motion-reduce:transition-none",
              i === active
                ? "border-primary bg-primary text-primary-foreground"
                : "border-foreground/40 text-foreground/40 hover:border-foreground hover:text-foreground",
            )}
          >
            {s.tab}
          </button>
        ))}
      </div>
      <div className="mx-auto mt-6 grid max-w-page px-gutter lg:mt-12">
        {styles.map((s, i) => (
          <div
            key={s.tab}
            role="tabpanel"
            id={`${id}-panel-${i}`}
            aria-labelledby={`${id}-tab-${i}`}
            className={cn(
              "[grid-area:1/1] transition-[opacity,visibility] duration-300 ease-out motion-reduce:transition-none lg:grid lg:grid-cols-2 lg:items-center lg:gap-20",
              i === active ? "visible opacity-100" : "invisible opacity-0",
            )}
          >
            <div className="aspect-square overflow-clip rounded-[1.875rem] *:size-full *:object-cover">
              {s.media ?? <WhoopPlaceholder tone="photo" />}
            </div>
            <div className="mt-10 lg:mt-0 lg:max-w-[30rem]">
              <h3 className="text-[1.875rem] leading-[1.2] font-semibold tracking-[-0.01em] lg:text-[2.5rem]">{s.title}</h3>
              <p className="mt-4 text-base leading-[1.85] lg:text-lg">{s.body}</p>
              <WhoopButton href={s.cta.href} className="mt-5 lg:mt-8">
                {s.cta.label}
              </WhoopButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

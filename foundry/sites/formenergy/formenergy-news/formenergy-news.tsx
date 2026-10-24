import { cn } from "@foundry/foundry-utils";
import { FormenergyHeading } from "@foundry/formenergy-heading";

export interface FormenergyNewsItem {
  /** the small orange tag above the card (shown uppercase), e.g. a kind of post */
  tag: string;
  /** who published it */
  source: string;
  /** the headline */
  title: string;
  /** the date as shown */
  date: string;
  /** where the card links */
  href: string;
}

export interface FormenergyNewsProps {
  /** anchor id */
  id?: string;
  /** the title (shown uppercase) */
  title: string;
  /** the cards, four to a row on desktop */
  items: FormenergyNewsItem[];
  /** the centred link under the cards (shown uppercase) */
  more?: { label: string; href: string };
  className?: string;
}

/** Ruled title over a row of tagged news cards and a centred "more" link. */
export function FormenergyNews({ id, title, items, more, className }: FormenergyNewsProps) {
  return (
    <section id={id} className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <FormenergyHeading title={title} />
        <ul className="mt-8 grid gap-y-3 md:grid-cols-2 md:gap-x-3 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.title + item.date} className="flex flex-col items-start">
              <span className="rounded-t-[3px] bg-primary px-2 py-[0.35rem] font-mono text-[0.7rem] leading-none font-medium tracking-[0.083em] text-primary-foreground uppercase lg:py-1.5 lg:text-xs">
                {item.tag}
              </span>
              <div className="relative flex h-[13.6rem] w-full flex-col rounded-[5px] rounded-tl-none bg-card px-[0.95rem] pt-[1.1rem] pb-[1.15rem] text-card-foreground lg:h-[21.875rem] lg:px-5 lg:pt-[1.3rem] lg:pb-5">
                <p className="font-mono text-[0.7rem] leading-none font-medium lg:text-sm">{item.source}</p>
                <h3 className="mt-[1.6rem] text-[1.1rem] leading-none font-medium tracking-[-0.005em] lg:mt-[1.85rem] lg:text-[1.375rem]">
                  <a href={item.href} className="after:absolute after:inset-0 focus-visible:outline-none">
                    {item.title}
                  </a>
                </h3>
                <p className="mt-auto font-mono text-[0.7rem] leading-none lg:text-xs">{item.date}</p>
              </div>
            </li>
          ))}
        </ul>
        {more && (
          <div className="mt-[3.4rem] text-center lg:mt-[3.75rem]">
            <a
              href={more.href}
              className="font-mono text-[1.1rem] leading-none font-medium tracking-[0.2em] uppercase transition-colors duration-300 hover:text-primary motion-reduce:transition-none lg:text-xl"
            >
              {more.label}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

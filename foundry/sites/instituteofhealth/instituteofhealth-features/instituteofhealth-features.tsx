import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { InstituteofhealthButton } from "@foundry/instituteofhealth-button";
import { InstituteofhealthIconButton } from "@foundry/instituteofhealth-icon-button";
import "./instituteofhealth-features.css";

export interface InstituteofhealthFeature {
  /** short name shown in the switcher pill */
  tab: string;
  /** the statement for this tab */
  title: string;
  /** a few lines under it */
  body: string;
  /** the big picture (cropped like object-fit: cover); empty shows a placeholder */
  media?: ReactNode;
  /** a small version for the thumbnail column; falls back to a placeholder */
  thumb?: ReactNode;
}

export interface InstituteofhealthFeaturesProps {
  /** the centred heading above everything */
  heading: string;
  /** the tabs, in order */
  features: InstituteofhealthFeature[];
  /** the dark button under the text (same for every tab) */
  action?: { label: string; href: string };
  /** screen-reader labels for the arrows */
  prevLabel?: string;
  nextLabel?: string;
  /** milliseconds per tab when playing by itself */
  interval?: number;
  className?: string;
}

export function InstituteofhealthFeatures({
  heading,
  features,
  action,
  prevLabel = "Previous",
  nextLabel = "Next",
  interval = 6000,
  className,
}: InstituteofhealthFeaturesProps) {
  const [active, setActive] = useState(0);
  const [touched, setTouched] = useState(false);
  const n = features.length;
  const go = (i: number) => {
    setTouched(true);
    setActive(((i % n) + n) % n);
  };

  // Plays through the tabs until someone picks one. Off under reduced motion.
  useEffect(() => {
    if (touched || n < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % n), interval);
    return () => window.clearInterval(id);
  }, [touched, n, interval]);

  const f = features[active];

  const switcher = (
    <div className="flex h-[3.2rem] items-center justify-between rounded-lg bg-muted px-1.5 lg:h-12 lg:w-[21.6rem]">
      <InstituteofhealthIconButton icon="prev" label={prevLabel} onClick={() => go(active - 1)} className="size-10 lg:size-9" />
      <span key={active} className="ioh-features-line text-[0.975rem] leading-none font-medium tracking-[-0.03em] lg:text-[0.81rem]">
        {f.tab}
      </span>
      <InstituteofhealthIconButton icon="next" label={nextLabel} onClick={() => go(active + 1)} className="size-10 lg:size-9" />
    </div>
  );

  const text = (
    <div key={active} className="text-center lg:text-left">
      <h3 className="ioh-features-line font-display text-[1.71rem] leading-[1.2] font-medium tracking-[-0.03em] lg:max-w-[24rem] lg:text-[2.07rem] lg:leading-none">
        {f.title}
      </h3>
      <p className="ioh-features-line mt-4 text-[0.975rem] leading-[1.25] font-medium tracking-[-0.02em] [animation-delay:0.12s] lg:max-w-[20rem] lg:text-[0.81rem] lg:leading-[1.3]">
        {f.body}
      </p>
    </div>
  );

  return (
    <section className={cn("bg-background py-section text-foreground lg:pt-[5.6rem] lg:pb-[5.75rem]", className)}>
      <h2 className="mx-auto max-w-[21rem] px-gutter text-center font-display text-[2.07rem] leading-none font-medium tracking-[-0.035em] lg:max-w-[30rem] lg:text-[3.15rem]">
        {heading}
      </h2>

      <div className="mt-[1.7rem] grid gap-4 px-gutter lg:mt-[2.85rem] lg:grid-cols-2 lg:gap-0">
        {/* Left on desktop: switcher at the top, text and button in the middle. Phones: under the pictures. */}
        <div className="order-2 flex flex-col lg:order-1 lg:h-full">
          {switcher}
          <div className="flex flex-1 flex-col items-center pt-[2.1rem] lg:items-start lg:justify-center lg:pt-0 lg:pb-[2.5rem]">
            {text}
            {action && (
              <InstituteofhealthButton href={action.href} className="mt-8 lg:mt-[1.9rem] lg:w-[17rem]">
                {action.label}
              </InstituteofhealthButton>
            )}
          </div>
        </div>

        {/* Right on desktop: thumbnail column + main picture. */}
        <div className="order-1 flex gap-2 lg:order-2">
          <ul className="flex w-[3.9rem] shrink-0 flex-col gap-1 lg:w-[4.5rem]">
            {features.map((x, i) => (
              <li key={x.tab}>
                <button
                  type="button"
                  aria-label={x.tab}
                  aria-current={i === active}
                  onClick={() => go(i)}
                  className={cn(
                    "block aspect-[72/89] w-full overflow-clip rounded-md border-[3px] transition-[opacity,border-color] duration-[550ms] ease-[ease] motion-reduce:transition-none [&>*]:size-full [&>*]:object-cover",
                    i === active ? "border-foreground/25 opacity-100" : "border-transparent opacity-65 hover:opacity-100",
                  )}
                >
                  {x.thumb ?? <span className="block bg-muted" />}
                </button>
              </li>
            ))}
          </ul>
          <div className="relative aspect-[288/436] flex-1 overflow-clip rounded-lg lg:aspect-[608/720]">
            <div key={active} className="ioh-features-fade absolute inset-0 [&>*]:size-full [&>*]:object-cover">
              {f.media ?? <div className="bg-muted" />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

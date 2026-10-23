import { useId, type ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { AirwallexButton } from "@foundry/airwallex-button";
import { AirwallexPlaceholder } from "@foundry/airwallex-placeholder";
import "./airwallex-hero.css";

export interface AirwallexHeroProps {
  /** the headline, in parts; parts marked `accent` are set in violet */
  title: { text: string; accent?: boolean }[];
  /** the grey lede under the headline */
  lede: string;
  /** the violet text link under the lede (desktop) */
  tour?: { label: string; href: string };
  /** where the email form posts */
  formAction?: string;
  /** the email field's label, for screen readers */
  emailLabel: string;
  /** the field's placeholder */
  emailPlaceholder: string;
  /** the button's label */
  submitLabel: string;
  /** the consent line beside the tick box; leave out for none */
  consent?: string;
  /** the device shots that take turns (made for three); empty for placeholders */
  slides?: ReactNode[];
  className?: string;
}

const DOT_DELAYS = ["0s", "-10s", "-5s"];

/** Headline, email capture and a rotating device shot. */
export function AirwallexHero({
  title,
  lede,
  tour,
  formAction = "#",
  emailLabel,
  emailPlaceholder,
  submitLabel,
  consent,
  slides,
  className,
}: AirwallexHeroProps) {
  const shots: ReactNode[] = slides?.length ? slides : [0, 1, 2].map((i) => <AirwallexPlaceholder key={i} className="size-full rounded-xl" />);
  const rotates = shots.length === 3;
  const emailId = useId();
  return (
    <section className={cn("overflow-clip bg-background text-foreground", className)}>
      <div className="mx-auto grid max-w-page gap-9 px-gutter pt-[3.75rem] pb-9 lg:grid-cols-[minmax(0,31.5rem)_minmax(0,1fr)] lg:items-center lg:gap-12 lg:px-12 lg:pt-12 lg:pb-7">
        <div className="lg:pb-6">
          <h1 className="font-display text-2xl leading-[1.3] font-bold tracking-[-0.01em] lg:text-5xl lg:leading-[1.25]">
            {title.map((part, i) => (
              <span key={i} className={part.accent ? "text-primary" : undefined}>
                {part.text}
              </span>
            ))}
          </h1>
          <p className="mt-6 text-base leading-6 text-foreground/80 lg:mt-12 lg:text-xl lg:leading-[1.5]">{lede}</p>
          {tour && (
            <a href={tour.href} className="group mt-10 hidden items-center gap-1.5 text-base font-semibold text-primary lg:inline-flex">
              {tour.label}
              <ChevronRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" strokeWidth={2.5} />
            </a>
          )}
          <form action={formAction} className="mt-8 flex flex-col gap-4 lg:mt-6 lg:flex-row lg:gap-0 lg:rounded-md lg:border lg:border-border lg:bg-card lg:p-1">
            <label className="sr-only" htmlFor={emailId}>
              {emailLabel}
            </label>
            <input
              id={emailId}
              type="email"
              name="email"
              placeholder={emailPlaceholder}
              className="h-12 min-w-0 flex-1 rounded-md border border-border bg-muted/60 px-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-2 focus:outline-ring lg:h-10 lg:border-0 lg:bg-transparent lg:focus:outline-none"
            />
            <AirwallexButton type="submit" size="lg" className="h-10 w-full lg:w-auto">
              {submitLabel}
            </AirwallexButton>
          </form>
          {consent && (
            <label className="mt-4 flex items-start gap-2.5 text-xs leading-[1.5] text-muted-foreground lg:text-[0.8125rem]">
              <input type="checkbox" name="consent" defaultChecked className="mt-0.5 size-4 shrink-0 accent-primary" />
              {consent}
            </label>
          )}
        </div>
        <div className="lg:w-[min(50rem,calc(100%+3rem))]">
          <div className={cn("grid aspect-[10/7] lg:aspect-[3/2]", rotates && "airwallex-hero-rotates")}>
            {shots.map((shot, i) => (
              <div key={i} className="airwallex-hero-slide [grid-area:1/1]" style={{ animationDelay: DOT_DELAYS[i] }}>
                {shot}
              </div>
            ))}
          </div>
          {rotates && (
            <div aria-hidden className={cn("mt-4 hidden items-center justify-center gap-2 lg:flex", "airwallex-hero-rotates")}>
              {shots.map((_, i) => (
                <span
                  key={i}
                  className={cn("airwallex-hero-dot relative h-2 overflow-clip rounded-full bg-input", i === 0 ? "w-9" : "w-2")}
                  style={{ animationDelay: DOT_DELAYS[i] }}
                >
                  <span className="airwallex-hero-fill absolute inset-0 origin-left scale-x-0 rounded-full bg-muted-foreground/70" style={{ animationDelay: DOT_DELAYS[i] }} />
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

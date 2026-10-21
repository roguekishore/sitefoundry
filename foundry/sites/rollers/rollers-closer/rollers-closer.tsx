import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RollersBand } from "@foundry/rollers-band";
import { RollersButton } from "@foundry/rollers-button";
import { RollersEyebrow } from "@foundry/rollers-eyebrow";
import { RollersWords, type RollersWordsSegment } from "@foundry/rollers-words";

export interface RollersCloserQuote {
  /** the headline sentence of the quote */
  quote: string;
  /** the rest of it */
  body: string;
  /** who said it */
  name: string;
  /** their company or role, set in capitals */
  role: string;
  /** the round client logo or portrait (80px); initials on a charcoal circle when empty */
  avatar?: ReactNode;
  /** shown in the empty avatar */
  initials: string;
}

export interface RollersCloserProps {
  /** the client quotes, cycling in the orange card */
  quotes: RollersCloserQuote[];
  /** screen-reader label for each dot: "Show quote" + its number */
  dotLabel: string;
  /** the chip of the white card */
  eyebrow: string;
  /** the white card's heading as parts: orange first (tone: "accent"), then charcoal */
  heading: RollersWordsSegment[];
  /** the orange paragraph under it */
  text: string;
  /** the charcoal pill, then the orange button */
  secondaryAction: { label: string; href: string };
  primaryAction: { label: string; href: string };
  /** an in-page anchor */
  id?: string;
  className?: string;
}

/** A charcoal band holding two cards side by side: an orange card whose client quotes slide
    across every six seconds (dots to pick one), and a wide white card with a centred two-tone
    heading, an orange paragraph and a button pair. */
export function RollersCloser({
  quotes,
  dotLabel,
  eyebrow,
  heading,
  text,
  secondaryAction,
  primaryAction,
  id,
  className,
}: RollersCloserProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || quotes.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((i) => (i + 1) % quotes.length), 6000);
    return () => window.clearInterval(timer);
  }, [paused, quotes.length]);

  return (
    <RollersBand id={id} className={cn("px-gutter pt-7.5 pb-7.5 md:pt-section md:pb-section", className)}>
      <div className="flex flex-col gap-7.5 lg:flex-row lg:gap-10">
        {/* the quotes */}
        <div
          className="flex flex-col overflow-clip bg-primary text-primary-foreground lg:w-[32.5rem] lg:shrink-0"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex flex-1 transition-transform duration-700 ease-[cubic-bezier(0.42,0,0.58,1)] motion-reduce:transition-none"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {quotes.map((q, i) => (
              <figure
                key={q.name}
                aria-hidden={i !== active}
                className="flex w-full shrink-0 flex-col px-7.5 pt-10 md:px-10 md:pt-14"
              >
                <blockquote>
                  <p className="font-display text-[1.25rem] leading-[1.25] md:text-[2rem] md:leading-[1.2]">{q.quote}</p>
                  <p className="mt-6 font-display text-[0.875rem] leading-[1.5] md:mt-8 md:text-[1.125rem]">{q.body}</p>
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-5 pt-14">
                  <span className="flex size-20 shrink-0 items-center justify-center overflow-clip rounded-full bg-secondary font-display text-[1.25rem] text-secondary-foreground">
                    {q.avatar ?? q.initials}
                  </span>
                  <span>
                    <span className="block font-display text-[1.5rem] leading-[1.3]">{q.name}</span>
                    <span className="block font-display text-[0.875rem] leading-[1.4] uppercase md:text-[1.125rem]">{q.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="flex justify-center gap-1.5 pt-5 pb-7.5 md:pb-10">
            {quotes.map((q, i) => (
              <button
                key={q.name}
                type="button"
                aria-label={`${dotLabel} ${i + 1}`}
                aria-current={i === active ? "true" : undefined}
                onClick={() => setActive(i)}
                className={cn(
                  "size-2 rounded-full border border-primary-foreground transition-colors duration-300",
                  i === active && "bg-primary-foreground",
                )}
              />
            ))}
          </div>
        </div>

        {/* the call to action: a white card inside the charcoal band */}
        <div className="flex flex-1 flex-col items-start bg-foreground px-7.5 py-10 text-background md:px-10 lg:items-center lg:justify-center lg:py-10 lg:text-center">
          <RollersEyebrow className="bg-background text-foreground">{eyebrow}</RollersEyebrow>
          <RollersWords
            segments={heading}
            className="mt-5 max-w-[37.5rem] font-display text-[2.05rem] leading-[1.1] font-[550] tracking-[-0.015em] md:text-[3.25rem] lg:mt-6 lg:text-[4.25rem]"
          />
          <p className="mt-5 max-w-[40rem] font-display text-[0.875rem] leading-[1.25] text-primary md:mt-8 md:text-[1.5rem] md:leading-[1.2]">{text}</p>
          <div className="mt-6 flex md:mt-8">
            <RollersButton href={secondaryAction.href} variant="pill" className="bg-background text-foreground">
              {secondaryAction.label}
            </RollersButton>
            <RollersButton href={primaryAction.href}>{primaryAction.label}</RollersButton>
          </div>
        </div>
      </div>
    </RollersBand>
  );
}

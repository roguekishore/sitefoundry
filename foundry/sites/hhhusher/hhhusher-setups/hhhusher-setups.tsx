import { useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HhhusherButton, hhhusherEase, hhhusherLabel } from "@foundry/hhhusher-button";
import "./hhhusher-setups.css";

export interface HhhusherSetup {
  /** the number in the small square, e.g. "01" */
  index: string;
  /** the setup's name, in mono capitals */
  label: string;
  /** the paragraph shown while this setup is selected */
  text: string;
  /** a photo for this setup (falls back to the section's media) */
  media?: ReactNode;
}

export interface HhhusherSetupsProps {
  /** the small heading, one entry per line */
  title: string[];
  /** the selectable list */
  setups: HhhusherSetup[];
  /** the yellow button under the paragraph */
  primary?: { label: string; href: string };
  /** the photo filling the section behind the list */
  media?: ReactNode;
  /** the id other links jump to */
  id?: string;
  className?: string;
}

/**
 * A dark, full-bleed photo section with a column on the left: a small two-line heading, a list
 * of numbered setups (grey squares; the chosen one and the hovered one turn yellow), the chosen
 * setup's paragraph and a yellow button. The rows fade in one after another as it enters.
 */
export function HhhusherSetups({ title, setups, primary, media, id, className }: HhhusherSetupsProps) {
  const [active, setActive] = useState(0);
  const current = setups[active] ?? setups[0];
  const shown = current?.media ?? media;

  return (
    <section
      id={id}
      className={cn("dark relative flex min-h-svh items-center overflow-clip bg-background text-foreground lg:min-h-0 lg:aspect-[1.49]", className)}
    >
      <div className="absolute inset-0 [&>*]:size-full [&>*]:object-cover">
        {shown ?? <div aria-hidden className="bg-muted bg-[radial-gradient(ellipse_60%_70%_at_70%_40%,var(--card),var(--background))]" />}
      </div>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent" />

      <div className="relative mx-auto w-full max-w-page px-gutter py-10 lg:py-20">
        <h2 className="font-display text-[2.08rem] leading-[1] font-medium tracking-[-0.01em] lg:text-[2rem] lg:leading-[1.05]">
          {title.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h2>

        <ul className="mt-[1.1rem] flex flex-col gap-2.5 lg:mt-10">
          {setups.map((setup, i) => {
            const on = i === active;
            return (
              <li key={i} className="hhhusher-setups-row" style={{ "--hhhusher-row": i } as CSSProperties}>
                <button type="button" aria-pressed={on} onClick={() => setActive(i)} className="group flex items-center gap-[0.9rem] text-left lg:gap-[0.8rem]">
                  <span
                    className={cn(
                      hhhusherLabel,
                      "flex size-8 shrink-0 items-center justify-center rounded-sm border font-medium transition-[background-color,border-color,color] duration-300 lg:size-[1.875rem]",
                      hhhusherEase,
                      on
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-transparent bg-muted-foreground/70 text-background group-hover:bg-primary group-hover:text-primary-foreground",
                    )}
                  >
                    {setup.index}
                  </span>
                  <span
                    className={cn(
                      hhhusherLabel,
                      "transition-colors duration-300",
                      hhhusherEase,
                      on ? "text-primary" : "text-muted-foreground group-hover:text-primary",
                    )}
                  >
                    {setup.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {current && (
          <p key={active} className="hhhusher-setups-text mt-10 max-w-[45rem] text-[0.86rem] leading-[1.35] font-medium lg:mt-12 lg:text-base lg:leading-[1.3]">
            {current.text}
          </p>
        )}

        {primary && (
          <HhhusherButton href={primary.href} className="mt-12 lg:mt-12">
            {primary.label}
          </HhhusherButton>
        )}
      </div>
    </section>
  );
}

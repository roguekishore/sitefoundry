import { type CSSProperties, type ReactNode, useState } from "react";
import { Power } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { LedupButton } from "@foundry/ledup-button";
import { LedupHeading } from "@foundry/ledup-heading";
import { LedupReveal } from "@foundry/ledup-reveal";
import "./ledup-about.css";

export interface LedupZone {
  /** the switch's caption ("Zone 1") */
  label: string;
  /** the scene with this zone lit, laid over the photo when switched on; empty shows a soft glow wash */
  media?: ReactNode;
}

export interface LedupAboutProps {
  /** the small label above the headline */
  label?: string;
  /** the headline */
  title: ReactNode;
  /** the paragraph (desktop only, as on the original) */
  text?: ReactNode;
  /** the outline pill button */
  cta?: { label: string; href: string };
  /** the photo of the scene, unlit; empty shows a muted placeholder */
  media?: ReactNode;
  /** the caption above the switches */
  switchesLabel?: string;
  /** one switch per zone (five in the original) */
  zones: LedupZone[];
  className?: string;
}

export function LedupAbout({ label, title, text, cta, media, switchesLabel, zones, className }: LedupAboutProps) {
  const [on, setOn] = useState<boolean[]>(() => zones.map(() => false));

  return (
    <section className={cn("overflow-x-clip bg-background pt-section pb-4 font-sans text-foreground lg:pt-[8.5rem] lg:pb-[10.5rem]", className)}>
      <div className="mx-auto flex max-w-page flex-col items-center px-gutter">
        <LedupHeading label={label} title={title} text={text} size="lg" />
        {cta && (
          <LedupReveal className="mt-6 lg:mt-10">
            <LedupButton href={cta.href} variant="outline" className="h-9 px-5 text-base lg:text-sm">
              {cta.label}
            </LedupButton>
          </LedupReveal>
        )}
      </div>

      <figure className="ledup-about-figure mt-6 overflow-clip rounded-lg lg:mt-[7.5rem]">
        <div className="relative isolate aspect-[390/450] bg-muted lg:aspect-[2/1] [&>*]:absolute [&>*]:inset-0 [&>*]:size-full [&>*]:object-cover">
          {media}
          {zones.map((zone, i) => (
            <div
              key={zone.label}
              aria-hidden
              className={cn("transition-opacity duration-500 ease-out motion-reduce:transition-none", on[i] ? "opacity-100" : "opacity-0")}
            >
              {zone.media ?? (
                <div
                  className="size-full bg-[radial-gradient(28%_70%_at_var(--ledup-about-x)_35%,color-mix(in_oklch,var(--glow)_65%,transparent),transparent)]"
                  style={{ "--ledup-about-x": `${((i + 0.5) / zones.length) * 100}%` } as CSSProperties}
                />
              )}
            </div>
          ))}
        </div>

        <figcaption className="ledup-about-switches bg-secondary px-4 pt-2 pb-3 text-center text-secondary-foreground lg:pt-6 lg:pb-5">
          <div>
            {switchesLabel && <p className="text-sm text-muted-foreground">{switchesLabel}</p>}
            <div className="mt-1.5 flex justify-center gap-[1.125rem] lg:mt-2 lg:gap-[1.375rem]">
              {zones.map((zone, i) => (
                <div key={zone.label} className="flex flex-col items-center gap-1.5 lg:gap-2">
                  <button
                    type="button"
                    role="switch"
                    aria-checked={on[i]}
                    aria-label={zone.label}
                    onClick={() => setOn((s) => s.map((v, j) => (j === i ? !v : v)))}
                    className={cn(
                      "flex h-[1.875rem] w-[3.25rem] items-center rounded-full p-[3px] transition-colors duration-300 lg:h-[2.125rem] lg:w-[4.375rem] motion-reduce:transition-none",
                      on[i] ? "bg-highlight" : "bg-foreground/75",
                    )}
                  >
                    <span
                      className={cn(
                        "grid size-6 place-items-center rounded-full transition-[translate,background-color] duration-[400ms] ease-out lg:size-7 motion-reduce:transition-none",
                        on[i] ? "translate-x-[1.375rem] bg-background text-highlight lg:translate-x-9" : "bg-background/25 text-background",
                      )}
                    >
                      <Power strokeWidth={2} className="size-3" />
                    </span>
                  </button>
                  <span className="text-[0.6875rem] text-muted-foreground uppercase lg:text-xs">{zone.label}</span>
                </div>
              ))}
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}

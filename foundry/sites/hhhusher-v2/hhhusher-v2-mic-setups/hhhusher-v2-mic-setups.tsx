import { useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HhhusherV2Button, hhhusherV2Ease } from "@foundry/hhhusher-v2-button";
import { HhhusherV2RevealText, hhhusherV2Reveal, hhhusherV2RevealStyle } from "@foundry/hhhusher-v2-reveal";

export interface HhhusherV2Setup {
  /** the list label, in mono caps */
  label: string;
  /** the paragraph shown while it's chosen */
  text: string;
  /** the setup's photo, full-bleed behind; a placeholder when empty */
  media?: ReactNode;
}

export interface HhhusherV2MicSetupsProps {
  heading: string;
  /** the setups; the first starts chosen */
  setups: HhhusherV2Setup[];
  /** the yellow button under the paragraph */
  buy?: { label: string; href: string };
  id?: string;
  className?: string;
}

const pad = (n: number) => String(n + 1).padStart(2, "0");

export function HhhusherV2MicSetups({ heading, setups, buy, id, className }: HhhusherV2MicSetupsProps) {
  const [active, setActive] = useState(0);
  const current = setups[active] ?? setups[0];
  return (
    <section id={id} className={cn("dark relative isolate flex min-h-svh flex-col justify-center overflow-clip bg-card text-foreground lg:min-h-0", className)}>
      {setups.map((setup, i) => (
        <div
          key={setup.label}
          aria-hidden
          className={cn("absolute inset-0 -z-20 transition-opacity duration-700 ease-[cubic-bezier(0.32,0.94,0.6,1)] motion-reduce:transition-none [&>*]:size-full [&>*]:object-cover", i === active ? "opacity-100" : "opacity-0")}
        >
          {setup.media ?? <div className="size-full bg-muted" />}
        </div>
      ))}
      {/* a wash on the text side so it reads over any photo */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-card/70 via-card/30 to-transparent" />

      <div className="mx-auto w-full max-w-page px-gutter py-16 lg:pt-[13.9rem] lg:pb-[13.5rem]">
        <HhhusherV2RevealText as="h2" text={heading} className="max-w-[12rem] font-display text-[2.08rem] leading-[1.03] font-[570] tracking-[-0.02em] lg:max-w-[11rem] lg:text-[2rem] lg:leading-[1.07]" />

        <ul className="mt-3 flex flex-col gap-3 lg:mt-10 lg:gap-2.5">
          {setups.map((setup, i) => (
            <li key={setup.label} className={hhhusherV2Reveal("rise")} style={hhhusherV2RevealStyle(i * 0.6, 14)}>
              <button type="button" onClick={() => setActive(i)} aria-pressed={i === active} className="group flex items-center gap-3.5 text-left font-mono text-[0.78rem] font-bold uppercase lg:text-[0.75rem]">
                <span
                  className={cn(
                    "flex size-[1.95rem] shrink-0 items-center justify-center rounded-md border transition-colors lg:size-[1.875rem]",
                    hhhusherV2Ease,
                    i === active ? "border-primary bg-primary text-primary-foreground" : "border-transparent bg-muted-foreground/80 text-background group-hover:bg-primary",
                  )}
                >
                  {pad(i)}
                </span>
                <span className={cn("transition-colors", hhhusherV2Ease, i === active ? "text-primary" : "text-muted-foreground group-hover:text-primary")}>{setup.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <p key={active} className="mt-10 max-w-[45rem] font-display text-[0.875rem] leading-[1.45] font-[570] lg:mt-14 lg:text-base lg:leading-[1.3]">
          {current.text}
        </p>
        {buy && (
          <HhhusherV2Button href={buy.href} className="mt-12 lg:mt-14">
            {buy.label}
          </HhhusherV2Button>
        )}
      </div>
    </section>
  );
}

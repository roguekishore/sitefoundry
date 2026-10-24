import type { ReactNode } from "react";
import { DiabrowserButton } from "@foundry/diabrowser-button";
import { cn } from "@foundry/foundry-utils";
import "./diabrowser-waitlist-bar.css";

export interface DiabrowserWaitlistBarProps {
  /** the black CTA; phoneLabel replaces the label below lg (the original asks for a download link on phones) */
  cta: { label: string; href: string; phoneLabel?: string };
  /** one quiet line under the button (platforms) */
  note?: ReactNode;
  /** class names of wrappers around the button, outermost first (the dock animates these) */
  buttonLayers?: string[];
  className?: string;
}

/** The cream arc that carries the waitlist CTA: 200px tall on phones, 152px from lg. */
export function DiabrowserWaitlistBar({ cta, note, buttonLayers = [], className }: DiabrowserWaitlistBarProps) {
  let button: ReactNode = (
    <DiabrowserButton size="lg" href={cta.href} className="w-full lg:w-[443px]">
      {cta.phoneLabel ? (
        <>
          <span className="lg:hidden">{cta.phoneLabel}</span>
          <span className="max-lg:hidden">{cta.label}</span>
        </>
      ) : (
        cta.label
      )}
    </DiabrowserButton>
  );
  // wrap from the inside out, so the first class name ends up outermost
  for (const layer of [...buttonLayers].reverse()) {
    button = <div className={cn("w-full lg:w-auto", layer)}>{button}</div>;
  }

  return (
    <div className={cn("relative h-[200px] w-full lg:h-[152px]", className)}>
      <div aria-hidden className="diabrowser-waitlist-bar-arc pointer-events-none absolute inset-0" />
      <div className="relative flex flex-col items-center px-4 pt-[74px] lg:pt-[42px]">
        {button}
        {note && <p className="mt-[13px] text-[13px] leading-4 tracking-[0.01em] text-foreground/55">{note}</p>}
      </div>
    </div>
  );
}

import type { ReactNode } from "react";
import { DiabrowserHeading } from "@foundry/diabrowser-heading";
import { DiabrowserWaitlistBar, type DiabrowserWaitlistBarProps } from "@foundry/diabrowser-waitlist-bar";
import { cn } from "@foundry/foundry-utils";
import "./diabrowser-waitlist-dock.css";

export interface DiabrowserWaitlistDockProps {
  /** the page sections the bar rides along with (hero to the last section before the closer) */
  children?: ReactNode;
  /** the closing serif line the bar settles under */
  heading: ReactNode;
  /** the black CTA on the arc */
  cta: DiabrowserWaitlistBarProps["cta"];
  /** small print under the CTA */
  note?: ReactNode;
  className?: string;
}

/**
 * Wraps the page so its waitlist bar stays docked at the bottom of the window on desktop,
 * shrinking once you scroll and growing back as it settles under the closing heading.
 * Phones: the closing heading followed by the bar, in place.
 */
export function DiabrowserWaitlistDock({ children, heading, cta, note, className }: DiabrowserWaitlistDockProps) {
  return (
    <div className={cn("diabrowser-waitlist-dock relative bg-background text-foreground", className)}>
      {children}
      <section className="diabrowser-waitlist-dock-fade px-gutter pb-[96px] lg:pt-[30px]">
        <DiabrowserHeading className="diabrowser-waitlist-dock-heading">{heading}</DiabrowserHeading>
      </section>
      {/* must stay the wrapper's last child: sticky bottom holds only while its own spot is below the fold */}
      <div className="z-40 lg:sticky lg:bottom-0">
        <div className="diabrowser-waitlist-dock-slide-a">
          <div className="diabrowser-waitlist-dock-slide-b">
            <DiabrowserWaitlistBar cta={cta} note={note} buttonLayers={["diabrowser-waitlist-dock-scale-a", "diabrowser-waitlist-dock-scale-b"]} />
          </div>
        </div>
      </div>
    </div>
  );
}

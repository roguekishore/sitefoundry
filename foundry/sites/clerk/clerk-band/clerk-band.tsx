import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./clerk-band.css";

export interface ClerkBandProps {
  children: ReactNode;
  /** step the top edge in (the section above dips into the band) */
  notchTop?: boolean;
  /** step the bottom edge in (the section below rises into the band) */
  notchBottom?: boolean;
  /** colour of the section above, shown inside the top notch */
  edgeTop?: "background" | "card";
  /** colour of the section below, shown inside the bottom notch */
  edgeBottom?: "background" | "card";
  /** dark forces the dark colours (as on the original); inherit follows the page */
  tone?: "dark" | "inherit";
  id?: string;
  className?: string;
}

const edge = { background: "bg-background", card: "bg-card" };

export function ClerkBand({
  children,
  notchTop = true,
  notchBottom = true,
  edgeTop = "card",
  edgeBottom = "background",
  tone = "dark",
  id,
  className,
}: ClerkBandProps) {
  return (
    <section id={id} className="relative isolate">
      {/* the neighbours' colours, showing through the notches */}
      {notchTop && <div aria-hidden className={cn("absolute inset-x-0 top-0 -z-10 h-12", edge[edgeTop])} />}
      {notchBottom && <div aria-hidden className={cn("absolute inset-x-0 bottom-0 -z-10 h-12", edge[edgeBottom])} />}
      <div
        className={cn(
          "clerk-band relative overflow-hidden bg-background text-foreground",
          tone === "dark" && "dark",
          notchTop && "clerk-band-top pt-11",
          notchBottom && "clerk-band-bottom pb-11",
          notchTop && notchBottom && "clerk-band-both",
          className,
        )}
      >
        {children}
      </div>
    </section>
  );
}

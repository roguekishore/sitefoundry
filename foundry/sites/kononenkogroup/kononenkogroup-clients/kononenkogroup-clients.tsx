import type { CSSProperties } from "react";
import { KononenkogroupLines } from "@foundry/kononenkogroup-lines";
import { cn } from "@foundry/foundry-utils";
import "./kononenkogroup-clients.css";

export interface KononenkogroupClientsProps {
  /** the big centred serif heading */
  heading: string;
  /** client names, each set in a circle on the ring (16–20 suit it) */
  clients: string[];
  className?: string;
}

/**
 * Clients on black: a huge centred serif heading inside an oval ring of white circles, each
 * holding a client's name. The circles are brightest and largest at the bottom of the ring and
 * fade and shrink towards the top; the ring fades in and turns into place as the section
 * scrolls through. Phones show the heading alone, as the original does.
 */
export function KononenkogroupClients({ heading, clients, className }: KononenkogroupClientsProps) {
  return (
    <section
      className={cn(
        "kononenkogroup-clients dark relative flex items-center justify-center overflow-clip bg-background px-gutter py-[30vw] text-foreground lg:min-h-[62.7vw] lg:py-section",
        className,
      )}
    >
      <ul className="kononenkogroup-clients-ring absolute inset-0" aria-label={heading}>
        {clients.map((client, i) => (
          <li
            key={client}
            className="kononenkogroup-clients-mark flex items-center justify-center rounded-full bg-foreground p-[1vw] text-center font-display text-[0.9vw] leading-[1.05] tracking-[-0.01em] text-background"
            style={{ "--kononenkogroup-clients-at": `${(360 / clients.length) * i}deg` } as CSSProperties}
          >
            {client}
          </li>
        ))}
      </ul>
      <KononenkogroupLines
        as="h2"
        text={heading}
        className="relative max-w-[84vw] text-center font-display text-[9.6vw] leading-[0.9] tracking-[-0.03em] lg:max-w-[58vw] lg:text-[9.115vw] lg:leading-[0.817]"
      />
    </section>
  );
}

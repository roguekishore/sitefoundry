import type { CSSProperties } from "react";
import { cn } from "@foundry/foundry-utils";
import { ThirdwayHeading } from "@foundry/thirdway-heading";
import { ThirdwayReveal } from "@foundry/thirdway-reveal";
import "./thirdway-clients.css";

export type ThirdwayClientStyle = "sans" | "serif" | "caps" | "mono" | "bold" | "italic";

export interface ThirdwayClient {
  /** the client's name, set as a plain wordmark in one of the styles */
  name: string;
  /** how to set it (default sans) */
  style?: ThirdwayClientStyle;
}

export interface ThirdwayClientsProps {
  heading: string;
  text: string;
  clients: ThirdwayClient[];
  className?: string;
}

const looks: Record<ThirdwayClientStyle, string> = {
  sans: "text-2xl font-[560] tracking-[-0.06em] lg:text-3xl",
  serif: "font-[family-name:var(--typeface-serif,Georgia,serif)] text-2xl font-[350] tracking-[-0.02em] lg:text-3xl",
  caps: "text-sm font-[560] tracking-[0.28em] uppercase lg:text-base",
  mono: "font-mono text-base font-[560] tracking-tight lg:text-xl",
  bold: "text-3xl font-bold tracking-[-0.07em] lg:text-4xl",
  italic: "text-sm font-bold tracking-[0.22em] uppercase italic lg:text-lg",
};

function Tiles({ clients, hidden }: { clients: ThirdwayClient[]; hidden?: boolean }) {
  return clients.map((c, i) => (
    <li
      key={i}
      aria-hidden={hidden || undefined}
      className={cn("flex size-32 shrink-0 items-center justify-center rounded-[2px] bg-foreground/4 px-3 text-center leading-none lg:size-auto lg:aspect-square", looks[c.style ?? "sans"])}
    >
      {c.name}
    </li>
  ));
}

/**
 * Heading and paragraph beside three drifting groups of client tiles. From lg up the groups are
 * columns that glide vertically with the scroll (the middle one the other way) behind a fade;
 * on phones they are three rows gliding sideways. Clients are plain wordmarks, not logos.
 */
export function ThirdwayClients({ heading, text, clients, className }: ThirdwayClientsProps) {
  const groups = [0, 1, 2].map((k) => clients.filter((_, i) => i % 3 === k));
  return (
    <section className={cn("thirdway-clients relative overflow-clip bg-background py-section text-foreground lg:flex lg:h-[42.8rem] lg:items-center lg:py-0", className)}>
      <div className="grid gap-10 lg:h-full lg:w-full lg:grid-cols-2 lg:gap-x-4 lg:px-8">
        <div className="px-gutter lg:flex lg:flex-col lg:justify-center lg:px-0">
          <ThirdwayHeading text={heading} />
          <ThirdwayReveal className="mt-6 max-w-[32rem] lg:mt-8">
            <p className="text-base leading-[1.3] font-[560] tracking-[-0.04em] lg:text-lg">{text}</p>
          </ThirdwayReveal>
        </div>
        <div className="thirdway-clients-field relative flex flex-col gap-3 overflow-clip lg:grid lg:h-full lg:grid-cols-3 lg:grid-rows-[100%] lg:gap-4">
          {groups.map((g, k) => (
            <div
              key={k}
              className={cn(
                "thirdway-clients-group flex w-max gap-3 lg:w-auto lg:flex-col lg:gap-4",
                k === 1 ? "thirdway-clients-down -mr-[4.9rem] self-end lg:mr-0 lg:mb-[3.9rem]" : "thirdway-clients-up -ml-[3.9rem] lg:-mt-[11.3rem] lg:ml-0",
              )}
            >
              <ul className="contents">
                <Tiles clients={g} />
                <Tiles clients={g} hidden />
                <Tiles clients={g} hidden />
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

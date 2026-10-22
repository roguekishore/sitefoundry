import type { CSSProperties } from "react";
import { cn } from "@foundry/foundry-utils";
import "./anchorage-logos.css";

export interface AnchorageLogo {
  /** the company's name, typeset as a wordmark (and the image's label) */
  name: string;
  /** how the name is typeset: plain · spaced (wide caps) · heavy (black italic caps) · stacked (one word per line) */
  look?: "plain" | "spaced" | "heavy" | "stacked";
  /** a real logo image instead of the typeset name */
  src?: string;
}

export interface AnchorageLogosProps {
  /** the small heading above the row, e.g. "Backed by" */
  title?: string;
  /** the logos, in order; they loop */
  logos: AnchorageLogo[];
  /** seconds for one full lap of the row */
  speed?: number;
  className?: string;
}

const looks = {
  plain: "font-display text-[2.375rem] font-semibold tracking-[-0.03em]",
  spaced: "font-display text-[2.25rem] font-normal tracking-[0.18em] uppercase",
  heavy: "font-sans text-[2.5rem] font-black tracking-[-0.04em] uppercase italic",
  stacked: "max-w-min font-display text-[1.375rem] leading-[0.9] font-bold tracking-[-0.02em]",
};

function Row({ logos, copy }: { logos: AnchorageLogo[]; copy?: boolean }) {
  return (
    <ul aria-hidden={copy || undefined} className={cn("flex shrink-0 items-center", copy && "anchorage-logos-copy")}>
      {logos.map((logo) => (
        <li key={logo.name} className="flex h-14 shrink-0 items-center px-6 text-foreground lg:px-12">
          {logo.src ? (
            <img src={logo.src} alt={copy ? "" : logo.name} className="h-10 w-auto" />
          ) : (
            <span className={cn("leading-none whitespace-nowrap", looks[logo.look ?? "plain"], logo.look === "stacked" && "whitespace-normal")}>{logo.name}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

/** A heading over an endless, slowly sliding row of wordmarks. */
export function AnchorageLogos({ title, logos, speed = 45, className }: AnchorageLogosProps) {
  return (
    <section className={cn("py-10 text-foreground lg:py-16", className)}>
      {title && <h2 className="px-gutter text-center text-xl leading-[1.3] font-semibold lg:text-[1.69rem]">{title}</h2>}
      <div className="anchorage-logos-viewport mt-7 overflow-x-clip lg:mt-10">
        <div className="anchorage-logos-track flex w-max" style={{ "--anchorage-logos-speed": `${speed}s` } as CSSProperties}>
          <Row logos={logos} />
          <Row logos={logos} copy />
        </div>
      </div>
    </section>
  );
}

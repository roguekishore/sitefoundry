import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./neko-press-logos.css";

export interface NekoPressName {
  /** the publication's name (also read out when a logo is given) */
  name: string;
  /** how the plain-text name is set: grotesk (heavy sans), serif, caps (spaced capitals), condensed */
  voice?: "grotesk" | "serif" | "caps" | "condensed";
  /** a real logo instead of the typeset name */
  logo?: ReactNode;
}

export interface NekoPressLogosProps {
  names: NekoPressName[];
  className?: string;
}

const voices = {
  grotesk: "font-sans font-bold tracking-[-0.03em]",
  serif: "font-display font-semibold tracking-[-0.02em]",
  caps: "font-sans font-medium tracking-[0.22em] uppercase",
  condensed: "font-sans font-semibold tracking-[-0.06em] [font-stretch:80%]",
};

function Row({ names, hidden }: { names: NekoPressName[]; hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-16 pr-16 lg:gap-32 lg:pr-32">
      {names.map((n) => (
        <li key={n.name} className={cn("text-2xl whitespace-nowrap text-foreground lg:text-[2.5rem]", voices[n.voice ?? "grotesk"])}>
          {n.logo ?? n.name}
        </li>
      ))}
    </ul>
  );
}

export function NekoPressLogos({ names, className }: NekoPressLogosProps) {
  return (
    <section className={cn("overflow-clip bg-background py-8 lg:py-14", className)}>
      <div className="neko-press-logos-run flex w-max">
        <Row names={names} />
        <Row names={names} hidden />
      </div>
    </section>
  );
}

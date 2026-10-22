import type { ReactNode } from "react";
import { WarpSection } from "@foundry/warp-section";
import "./warp-logos.css";

export interface WarpLogo {
  /** the company's name, for screen readers */
  name: string;
  /** the wordmark (an svg, img or styled text) */
  logo: ReactNode;
}

export interface WarpLogosProps {
  /** the small line above the row; wrap a part in <span> to colour it */
  caption: ReactNode;
  logos: WarpLogo[];
  className?: string;
}

/** A caption and a slow marquee of grey wordmarks, faded at the edges; scrolling speeds it up. */
export function WarpLogos({ caption, logos, className }: WarpLogosProps) {
  const row = (copy: number) =>
    logos.map((l) => (
      <li key={`${copy}-${l.name}`} aria-hidden={copy > 0 || undefined} className="flex shrink-0 items-center px-6 text-foreground/55 lg:px-[1.875rem]">
        <span role="img" aria-label={copy > 0 ? undefined : l.name} className="flex items-center [&_svg]:h-6 [&_svg]:w-auto">
          {l.logo}
        </span>
      </li>
    ));
  return (
    <WarpSection marks={false} className={className} contentClassName="pt-7 pb-11 lg:pb-[3.25rem]">
      <p className="font-mono text-xs tracking-[calc(0.03em_-_var(--warp-squeeze,0em))] text-foreground/40">{caption}</p>
      <div className="mt-5 overflow-clip mask-x-from-85% mask-x-to-100% lg:mt-6">
        <div className="warp-logos-drift w-max">
          <ul className="warp-logos-track flex h-10 w-max items-center">
            {row(0)}
            {row(1)}
            {row(2)}
          </ul>
        </div>
      </div>
    </WarpSection>
  );
}

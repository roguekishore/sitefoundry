import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { NewhaloButton } from "@foundry/newhalo-button";
import { NewhaloMedia } from "@foundry/newhalo-media";
import { newhaloReveal, newhaloRevealStyle } from "@foundry/newhalo-reveal";
import "./newhalo-footer.css";

export interface NewhaloFooterGroup {
  /** the 28px column heading */
  title: string;
  links: { label: string; href: string }[];
}

export interface NewhaloFooterProps {
  /** two or three link columns */
  groups: NewhaloFooterGroup[];
  /** the outlined button (first) and the orange one (second), top right */
  ctas: { label: string; href: string }[];
  /** small links along the bottom left */
  legal: { label: string; href: string }[];
  /** the copyright line, bottom right */
  copyright: string;
  /** the wide line drawing across the middle; empty shows a glow placeholder */
  art?: ReactNode;
  className?: string;
}

/**
 * A black panel inset 6–10px from the window with 8px corners. It clips in from full-bleed as
 * it enters view; link columns fade in and the art strip rises. Columns top left, two buttons
 * top right, a wide art slot in the middle, legal links and copyright along the bottom.
 */
export function NewhaloFooter({ groups, ctas, legal, copyright, art, className }: NewhaloFooterProps) {
  const [outline, primary] = ctas;
  return (
    <footer className={cn("dark", className)} style={{ "--newhalo-footer-inset": "clamp(6px, 0.7vw, 10px)" } as CSSProperties}>
      <div className="newhalo-footer-panel relative flex min-h-[50rem] flex-col overflow-clip bg-background px-gutter py-7 text-foreground lg:min-h-[31rem] lg:p-10">
        <div className="relative z-10 flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:flex lg:gap-0">
            {groups.map((g, i) => (
              <div key={g.title} className={cn("lg:w-[14.4rem]", newhaloReveal("fade"))} style={newhaloRevealStyle(i)}>
                <h2 className="font-display text-[1.56rem] leading-[1.1] lg:text-[1.75rem]">{g.title}</h2>
                <ul className={cn("mt-3 space-y-1.5", i === 2 ? "text-lg lg:text-base" : "text-base")}>
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="transition-colors duration-300 hover:text-primary">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start gap-2.5 lg:flex-row">
            {outline && <NewhaloButton label={outline.label} href={outline.href} variant="outline" className="border-foreground hover:border-primary" />}
            {primary && <NewhaloButton label={primary.label} href={primary.href} />}
          </div>
        </div>

        <NewhaloMedia
          tone="glow"
          className={cn("mx-auto my-10 aspect-square w-full max-w-[19rem] lg:absolute lg:top-[36%] lg:right-[10%] lg:left-[32%] lg:my-0 lg:aspect-[4] lg:w-auto lg:max-w-none", newhaloReveal("rise"))}
        >
          {art}
        </NewhaloMedia>

        <div className="relative z-10 mt-auto flex flex-col items-center gap-4 text-xs text-foreground/80 lg:flex-row lg:justify-between">
          <ul className="flex gap-5 lg:gap-10">
            {legal.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors duration-300 hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}

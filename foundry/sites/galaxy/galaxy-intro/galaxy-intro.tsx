import { cn } from "@foundry/foundry-utils";
import type { GalaxyTone } from "@foundry/galaxy-button";

export interface GalaxyIntroPart {
  /** the words, spaces included */
  text: string;
  /** colour these words: highlight (green), chart-1 (orange), chart-2 (blue) */
  tone?: GalaxyTone;
}

export interface GalaxyIntroProps {
  /** the small uppercase line over the heading */
  eyebrow?: string;
  /** the heading, one array of parts per line (lines break only where you put them) */
  lines: GalaxyIntroPart[][];
  /** xl: 40px → 72px · lg: 36px → 60px */
  size?: "xl" | "lg";
  /** the paragraph under the heading */
  lead?: string;
  className?: string;
}

const tones: Record<GalaxyTone, string> = {
  highlight: "text-highlight",
  "chart-1": "text-chart-1",
  "chart-2": "text-chart-2",
};

export function GalaxyIntro({ eyebrow, lines, size = "xl", lead, className }: GalaxyIntroProps) {
  return (
    <section className={cn("bg-background py-section text-center text-foreground lg:pt-16 lg:pb-[4.5rem]", className)}>
      <div className="mx-auto flex max-w-page flex-col items-center px-gutter">
        {eyebrow && <p className="mb-3 text-xs leading-[1.5] tracking-[0.1em] uppercase lg:mb-[1.125rem] lg:text-sm lg:leading-5">{eyebrow}</p>}
        <h2
          className={cn(
            "font-display font-[560] tracking-[-0.035em] [font-stretch:var(--galaxy-stretch,100%)]",
            size === "xl" ? "text-[2.5rem] leading-[1.1] lg:text-[4.5rem] lg:leading-[1.0555]" : "text-4xl leading-[1.1] lg:text-[3.75rem] lg:leading-[1.0667]",
          )}
        >
          {lines.map((line, i) => (
            <span key={i} className="block">
              {line.map((part, j) => (
                <span key={j} className={part.tone && tones[part.tone]}>
                  {part.text}
                </span>
              ))}
            </span>
          ))}
        </h2>
        {lead && <p className="mt-5 max-w-[48rem] text-base leading-6 lg:mt-6 lg:text-lg lg:leading-[1.5]">{lead}</p>}
      </div>
    </section>
  );
}

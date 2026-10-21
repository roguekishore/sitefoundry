import type { CSSProperties } from "react";
import { cn } from "@foundry/foundry-utils";
import { DaqEyebrow } from "@foundry/daq-eyebrow";
import "./daq-manifesto.css";

export interface DaqManifestoPart {
  /** a run of the statement (shown uppercase); keep the spaces between runs in the text */
  text: string;
  /** a key word: hollow at first, filled as you scroll */
  key?: boolean;
}

export interface DaqManifestoProps {
  /** the bold label at the top left */
  label: string;
  /** the keyword tags at the top right, in the order the key words fill */
  tags?: string[];
  /** the statement, split into plain and key runs */
  parts: DaqManifestoPart[];
  className?: string;
}

// The key words fill one after another between 5% and 65% of the pinned stretch.
const FILL_START = 5;
const FILL_SPAN = 60;

function slice(i: number, count: number): CSSProperties {
  const step = FILL_SPAN / Math.max(count, 1);
  return {
    "--daq-manifesto-from": `${FILL_START + i * step}%`,
    "--daq-manifesto-to": `${FILL_START + (i + 1) * step}%`,
  } as CSSProperties;
}

export function DaqManifesto({ label, tags = [], parts, className }: DaqManifestoProps) {
  const keyCount = parts.filter((p) => p.key).length;
  let keyIndex = 0;

  return (
    <section className={cn("daq-manifesto relative h-[250svh]", className)}>
      {/* the page frame: hairlines down both gutters */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 inset-x-gutter border-x border-foreground/5" />

      <div className="sticky top-0 flex h-svh flex-col justify-center px-gutter">
        <div className="daq-manifesto-body">
          <div className="flex items-center justify-between gap-8">
            <DaqEyebrow label={label} strong rule="short" className="flex-1 lg:flex-none" />
            {tags.length > 0 && (
              <ul className="hidden items-center gap-7 lg:flex">
                {tags.map((tag, i) => (
                  <li
                    key={tag}
                    className="daq-manifesto-tag flex items-center gap-3 font-mono text-[0.625rem] leading-none font-bold tracking-[0.2em] uppercase"
                    style={slice(i, tags.length)}
                  >
                    <span aria-hidden className="h-px w-5 bg-foreground" />
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <p className="mt-8 max-w-[82vw] font-display text-[clamp(1.7rem,4.8vw,6.5rem)] leading-[1.04] font-extralight tracking-[-0.025em] text-foreground/70 uppercase lg:mt-12 lg:max-w-[90vw]">
            {parts.map((part, i) =>
              part.key ? (
                <span key={i} className="daq-manifesto-key font-bold text-foreground" style={slice(keyIndex++, keyCount)}>
                  {part.text}
                </span>
              ) : (
                <span key={i}>{part.text}</span>
              ),
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

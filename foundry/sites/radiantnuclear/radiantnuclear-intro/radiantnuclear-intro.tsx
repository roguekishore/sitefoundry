import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RadiantnuclearSlot } from "@foundry/radiantnuclear-slot";
import "./radiantnuclear-intro.css";

export interface RadiantnuclearIntroProps {
  /** short bold statements, one paragraph each; "\n" makes a deliberate line break */
  statements: string[];
  /** the very wide picture along the bottom edge; empty shows a placeholder */
  media?: ReactNode;
  className?: string;
}

export function RadiantnuclearIntro({ statements, media, className }: RadiantnuclearIntroProps) {
  // number every word across all statements, so the colour runs through them in reading order
  const total = statements.reduce((n, s) => n + s.split(/\s+/).filter(Boolean).length, 0);
  let index = 0;

  return (
    <section className={cn("radiantnuclear-intro relative overflow-clip bg-background pt-section font-sans text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="flex max-w-[22rem] flex-col gap-[1.4375rem] text-xl leading-[1.15] font-bold sm:max-w-[34rem] lg:max-w-[46rem] lg:gap-8 lg:text-[2rem] lg:leading-[1.15]">
          {statements.map((s, i) => (
            <p key={i}>
              {s.split("\n").map((line, l) => (
                <span key={l}>
                  {l > 0 && <br />}
                  {line
                    .split(/\s+/)
                    .filter(Boolean)
                    .map((w, j) => {
                      const at = total > 1 ? index++ / (total - 1) : 0;
                      return (
                        <span key={j}>
                          {j > 0 && " "}
                          <span className="radiantnuclear-intro-word" style={{ "--rni-at": at.toFixed(3) } as CSSProperties}>
                            {w}
                          </span>
                        </span>
                      );
                    })}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>

      {/* the picture is wider than the window and cropped by this frame, like the original's 988x480 map */}
      <div className="relative mt-10 h-[21rem] overflow-clip lg:mt-16 lg:h-[34rem]">
        <RadiantnuclearSlot
          media={media}
          tone="wash"
          className="radiantnuclear-intro-media absolute top-0 left-1/2 h-[30rem] w-[61.75rem] -translate-x-1/2 lg:h-[42rem] lg:w-[max(100%,86rem)]"
        />
      </div>
    </section>
  );
}

import { Fragment, type CSSProperties, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { OnEnergyButton } from "@foundry/on-energy-button";
import "./on-energy-showcase.css";

export interface OnEnergyShowcaseProps {
  /** the title over the scene; a "\n" breaks the line. Its letters blur away one by one as you scroll */
  title: string;
  /** the glass button under the title (fades out with it) */
  cta?: { label: string; href: string };
  /** the first words of the bottom copy, in full foreground */
  lead?: string;
  /** the rest of the bottom copy, in the quieter grey */
  copy?: string;
  /** the full-window scene (video, image sequence or 3D canvas); a placeholder surface when empty */
  media?: ReactNode;
  /** how long the scene stays pinned, in window heights (the original: 8) */
  screens?: number;
  className?: string;
}

/**
 * A pinned scroll scene: the section is several windows tall and its full-window stage
 * sticks while you scroll through it. Over the stage, a title and button sit on the left at
 * mid-height and a short copy at the bottom. As you scroll, the title's letters blur and fade
 * away one after another, the button fades, and the media slowly pulls back.
 */
export function OnEnergyShowcase({ title, cta, lead, copy, media, screens = 8, className }: OnEnergyShowcaseProps) {
  let index = 0;
  return (
    <section
      className={cn("on-energy-showcase relative bg-background text-foreground", className)}
      style={{ height: `${screens * 100}svh` }}
    >
      <div className="sticky top-0 h-svh overflow-clip">
        <div className="on-energy-showcase-media absolute inset-0">
          {media ?? (
            <div className="size-full bg-background bg-[radial-gradient(70%_45%_at_50%_62%,color-mix(in_oklab,var(--foreground)_28%,transparent),transparent)]" />
          )}
        </div>

        <div className="on-energy-showcase-title relative flex h-full flex-col justify-center px-gutter pb-[6vh]">
          <h2
            aria-label={title.replace(/\n/g, " ")}
            className="font-display text-[1.82rem]/[1.142] font-light tracking-[-0.02em] lg:text-5xl/[1.167] lg:tracking-[-0.04em]"
          >
            {title.split("\n").map((line, l) => (
              <Fragment key={l}>
                {l > 0 && <br />}
                {line.split(" ").map((word, w) => (
                  <Fragment key={w}>
                    {w > 0 && " "}
                    <span aria-hidden className="inline-block whitespace-nowrap">
                      {[...word].map((ch, c) => (
                        <span key={c} className="on-energy-showcase-letter inline-block" style={{ "--on-energy-showcase-i": index++ } as CSSProperties}>
                          {ch}
                        </span>
                      ))}
                    </span>
                  </Fragment>
                ))}
              </Fragment>
            ))}
          </h2>
          {cta && (
            <div className="on-energy-showcase-cta mt-7">
              <OnEnergyButton href={cta.href}>{cta.label}</OnEnergyButton>
            </div>
          )}
        </div>

        {(lead || copy) && (
          <p className="absolute right-gutter bottom-6 left-gutter max-w-[24rem] text-[0.91rem]/[1.375] font-light tracking-[-0.02em] lg:bottom-10 lg:text-base/[1.375]">
            {lead && <span className="text-foreground">{lead} </span>}
            {copy && <span className="text-muted-foreground">{copy}</span>}
          </p>
        )}
      </div>
    </section>
  );
}

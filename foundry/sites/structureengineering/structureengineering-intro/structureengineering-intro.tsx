import { useId, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { StructureengineeringButton } from "@foundry/structureengineering-button";
import { StructureengineeringMedia } from "@foundry/structureengineering-media";
import { StructureengineeringReveal } from "@foundry/structureengineering-reveal";
import "./structureengineering-intro.css";

export interface StructureengineeringIntroTab {
  /** the tab's label (bold uppercase) */
  label: string;
  /** the mono paragraphs shown when it's chosen */
  paragraphs: string[];
}

export interface StructureengineeringIntroProps {
  /** the large statement that lights up word by word while it's pinned */
  statement: string;
  /** two (or more) tabs, each with its own paragraphs */
  tabs: StructureengineeringIntroTab[];
  /** the button under the paragraphs */
  cta: { label: string; href: string };
  /** the image at the right. Empty: a placeholder */
  media?: ReactNode;
  className?: string;
}

// Two parts on paper. First a large statement, pinned in the middle of the window for about a
// screen of scrolling while its words go from pale (20%) to full ink in reading order. Then a
// row of tabs ruled at the top when chosen, the chosen tab's mono paragraphs and an outline
// button at the left, and an image at the lower right.
export function StructureengineeringIntro({ statement, tabs, cta, media, className }: StructureengineeringIntroProps) {
  const [active, setActive] = useState(0);
  const id = useId();
  const words = statement.split(/\s+/).filter(Boolean);
  const share = 90 / words.length;
  const panel = tabs[active] ?? tabs[0];

  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="structureengineering-intro-pin relative h-[235svh] lg:h-[245svh]">
        <div className="sticky top-0 flex h-svh items-center">
          <div className="mx-auto w-full max-w-page px-gutter">
            <p className="font-display text-[2.1rem] leading-[1.2] font-medium tracking-[-0.03em] lg:text-[2.8rem]">
              {words.map((word, i) => (
                <span
                  key={i}
                  className="structureengineering-intro-word"
                  style={{ "--se-from": `${i * share}%`, "--se-to": `${(i + 1) * share}%` } as CSSProperties}
                >
                  {word}{" "}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-page px-gutter pt-8 pb-section lg:pt-12">
        <div role="tablist" className="flex gap-5 lg:gap-20">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              type="button"
              role="tab"
              id={`${id}-tab-${i}`}
              aria-selected={i === active}
              aria-controls={`${id}-panel`}
              onClick={() => setActive(i)}
              className={cn(
                "border-t pt-4 text-left text-base leading-tight font-bold tracking-tight uppercase transition-colors duration-250 lg:w-[31.25rem]",
                i === active ? "border-foreground" : "border-transparent hover:border-border",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-10 lg:mt-48 lg:grid-cols-2 lg:gap-6">
          <StructureengineeringReveal>
            <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`} className="max-w-[23rem] space-y-6 font-mono text-base leading-[1.3]">
              {panel?.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <StructureengineeringButton href={cta.href} className="mt-12 lg:mt-20">
              {cta.label}
            </StructureengineeringButton>
          </StructureengineeringReveal>
          <StructureengineeringReveal step={1} className="lg:self-end lg:justify-self-end lg:w-full lg:max-w-[38.6rem]">
            <StructureengineeringMedia media={media} className="aspect-[618/388]" />
          </StructureengineeringReveal>
        </div>
      </div>
    </section>
  );
}

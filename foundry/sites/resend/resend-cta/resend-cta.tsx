import { cn } from "@foundry/foundry-utils";
import { ResendButton } from "@foundry/resend-button";
import "./resend-cta.css";

export interface ResendCtaProps {
  /** the title; each entry is a line on wide screens */
  title: string[];
  /** the graphite button */
  action: { label: string; href: string };
  /** a giant faint wordmark under the button, cropped by the band's edge (desktop only) */
  wordmark?: string;
  className?: string;
}

export function ResendCta({ title, action, wordmark, className }: ResendCtaProps) {
  return (
    <section className={cn("bg-background pt-12 text-foreground lg:pt-24", className)}>
      <div className="mx-auto flex max-w-page flex-col items-center px-gutter pb-[4.5rem] text-center lg:pb-0">
        <h2 className="bg-linear-to-br from-foreground from-30% to-foreground/50 bg-clip-text pb-2 font-[family-name:var(--resend-serif,var(--typeface-display))] text-[4rem] leading-none font-normal tracking-[-0.035em] text-balance text-transparent lg:text-[4.8rem]">
          {title.map((line, i) => (
            <span key={i} className="lg:block">
              {line}
              {i < title.length - 1 && " "}
            </span>
          ))}
        </h2>
        <ResendButton href={action.href} chevron className="mt-10 w-full lg:mt-9 lg:w-auto">
          {action.label}
        </ResendButton>
        {wordmark && (
          <div aria-hidden className="resend-cta-wordmark mt-24 hidden w-full lg:block">
            <svg viewBox="0 0 1000 150" className="block w-full fill-foreground/[0.06]">
              <text
                x="0"
                y="235"
                textLength="1000"
                lengthAdjust="spacingAndGlyphs"
                className="font-display"
                style={{ fontSize: 300, fontWeight: 700, letterSpacing: "-0.04em" }}
              >
                {wordmark}
              </text>
            </svg>
          </div>
        )}
      </div>
    </section>
  );
}

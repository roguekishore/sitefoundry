import type { ReactNode } from "react";
import { Users } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { HalodentalGeminiButton } from "@foundry/halodental-gemini-button";

export interface HalodentalGeminiMissionProps {
  /** oversized warm-gradient display heading (can span two lines) */
  title: string;
  /** white paragraph next to the square portrait */
  description: string;
  /** primary vermilion button below the paragraph */
  cta: { label: string; href: string };
  /** square portrait media slot (defaults to a token-styled studio placeholder) */
  media?: ReactNode;
  /** force dark tokens (as on the original) or inherit from page */
  tone?: "dark" | "inherit";
  className?: string;
}

/**
 * Halo Dental's dark brand statement ("Rebranding dentistry"): pure black full-width band
 * with a 100px amber-to-vermilion horizontal gradient headline, a 210px square portrait
 * card on the left, and white body copy + orange rectangular button on the right.
 */
export function HalodentalGeminiMission({
  title,
  description,
  cta,
  media,
  tone = "dark",
  className,
}: HalodentalGeminiMissionProps) {
  return (
    <section
      className={cn(
        "bg-background py-20 text-foreground lg:py-28",
        tone === "dark" && "dark",
        className,
      )}
    >
      <div className="mx-auto max-w-page px-gutter lg:px-10">
        <h2 className="max-w-[11ch] bg-[linear-gradient(90deg,var(--highlight)_0%,var(--primary)_52%,var(--glow)_100%)] bg-clip-text font-display text-[2.475rem] font-normal leading-[1.06] tracking-[-0.03em] text-transparent sm:text-[3.5rem] lg:text-[6.25rem] lg:leading-[0.95]">
          {title}
        </h2>

        <div className="mt-10 flex flex-col items-start gap-8 sm:flex-row sm:items-center lg:mt-20 lg:gap-14">
          {/* Square team portrait slot */}
          <div className="mx-auto aspect-square w-44 shrink-0 overflow-hidden rounded-lg border border-border/30 bg-secondary sm:mx-0 lg:w-52">
            {media ?? (
              <div className="relative flex size-full flex-col items-center justify-end overflow-hidden bg-[linear-gradient(155deg,var(--foreground)_0%,var(--muted-foreground)_48%,var(--secondary)_100%)] p-4">
                <div className="mb-auto flex w-full items-center justify-between opacity-35">
                  <span className="h-1.5 w-10 rounded-xs bg-background" />
                  <span className="size-2 rounded-full bg-background" />
                </div>
                <Users aria-hidden className="mb-3 size-14 text-background/85" strokeWidth={1.35} />
                <div className="h-2 w-2/3 rounded-full bg-background/50" />
              </div>
            )}
          </div>

          {/* Copy + primary button */}
          <div className="flex max-w-[23rem] flex-col items-start">
            <p className="text-[0.9125rem] leading-[1.35] text-foreground lg:text-base lg:leading-[1.25]">
              {description}
            </p>
            <div className="mt-5 lg:mt-6">
              <HalodentalGeminiButton variant="primary" href={cta.href}>
                {cta.label}
              </HalodentalGeminiButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

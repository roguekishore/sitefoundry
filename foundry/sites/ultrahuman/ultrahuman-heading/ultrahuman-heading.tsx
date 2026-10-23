import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { UltrahumanReveal } from "@foundry/ultrahuman-reveal";

export interface UltrahumanHeadingProps {
  /** the section title */
  title: ReactNode;
  /** one or two lines under it, in muted ink */
  body?: ReactNode;
  /** buttons under the copy (optional) */
  actions?: ReactNode;
  /** heading level for the title */
  level?: "h1" | "h2";
  /** max width of the body copy, so it breaks like the original */
  bodyWidth?: "sm" | "md";
  className?: string;
}

/** Centred section intro: a tight 40px title, quiet body line, optional pill buttons; rises into view.
 *  Takes its ink colour from the section around it. */
export function UltrahumanHeading({ title, body, actions, level = "h2", bodyWidth = "md", className }: UltrahumanHeadingProps) {
  return (
    <div className={cn("flex flex-col items-center px-gutter text-center", className)}>
      <UltrahumanReveal
        as={level}
        className="max-w-[16ch] text-[1.75rem] leading-[1.18] font-normal tracking-[-0.035em] text-balance sm:max-w-none lg:text-[2.5rem] lg:leading-[3rem] lg:tracking-[-0.025em]"
      >
        {title}
      </UltrahumanReveal>
      {body && (
        <UltrahumanReveal
          as="p"
          rise="sm"
          className={cn(
            "mt-3 text-base leading-[1.375rem] tracking-[-0.0175em] text-pretty text-current/60 lg:mt-4",
            bodyWidth === "sm" ? "max-w-[16.5rem] lg:max-w-[40rem]" : "max-w-[33rem]",
          )}
        >
          {body}
        </UltrahumanReveal>
      )}
      {actions && (
        <UltrahumanReveal step={1} className="mt-8 flex flex-wrap justify-center gap-2 lg:mt-6">
          {actions}
        </UltrahumanReveal>
      )}
    </div>
  );
}

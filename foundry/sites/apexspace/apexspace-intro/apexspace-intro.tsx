import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ApexspaceHeading } from "@foundry/apexspace-heading";

export interface ApexspacePillar {
  /** a thin line icon, drawn at 40px */
  icon: ReactNode;
  /** the sub-head; a \n starts a new line */
  title: string;
  text: string;
}

export interface ApexspaceIntroProps {
  /** the big statement at the top */
  title: string;
  /** the pillars, three in a row on desktop */
  pillars: ApexspacePillar[];
  className?: string;
}

/** Big uppercase statement over three hairline-topped pillars. */
export function ApexspaceIntro({ title, pillars, className }: ApexspaceIntroProps) {
  return (
    <section className={cn("bg-background px-gutter pt-section pb-section text-foreground lg:pb-[7.25rem]", className)}>
      <ApexspaceHeading text={title} className="max-w-[50rem]" />
      <ul className="mt-[5.25rem] grid lg:mt-[7.75rem] lg:grid-cols-3 lg:gap-2">
        {pillars.map((p) => (
          <li key={p.title} className="border-t border-border pt-4 pb-8 last:pb-0 lg:pb-0">
            <span aria-hidden className="flex size-10 items-center [&>svg]:size-full">
              {p.icon}
            </span>
            <ApexspaceHeading as="h3" size="sub" text={p.title} className="mt-6 lg:mt-[1.9rem]" />
            <p className="mt-4 max-w-[26.5rem] text-[length:clamp(0.875rem,0.82rem_+_0.19vw,1rem)] leading-[1.4]">{p.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { TypesomethingV2Button } from "@foundry/typesomething-v2-button";

export interface TypesomethingV2CtaProps {
  /** the heading; it wraps freely, so a wordmark at the end drops to its own line */
  title: ReactNode;
  description: string;
  action: { label: string; href: string };
  /** the small reassurance line under the button */
  fineprint?: string;
  /** anchor id for in-page links */
  id?: string;
  className?: string;
}

export function TypesomethingV2Cta({ title, description, action, fineprint, id, className }: TypesomethingV2CtaProps) {
  return (
    <section id={id} className={cn("bg-muted py-14 lg:py-[6.5rem]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        {/* dark by design: the dark class keeps it dark under a light theme too */}
        <div className="dark relative overflow-clip rounded-lg bg-background px-6 py-12 text-center text-foreground lg:rounded-[calc(var(--radius)*2)] lg:py-[6.5rem]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,color-mix(in_oklab,var(--highlight)_18%,transparent),transparent_18rem),radial-gradient(circle_at_85%_80%,color-mix(in_oklab,var(--glow)_16%,transparent),transparent_18rem)]"
          />
          <div className="relative mx-auto flex max-w-[40rem] flex-col items-center">
            <h2 className="font-display text-[1.9rem] leading-[1.5] font-normal tracking-[-0.02em] lg:text-[2.75rem] lg:leading-[1.75]">
              {title}
            </h2>
            <p className="mt-5 max-w-[33rem] text-[1.05rem] leading-[1.5] text-muted-foreground text-pretty lg:mt-5 lg:text-[1.1rem]">{description}</p>
            <TypesomethingV2Button href={action.href} className="mt-7">
              {action.label}
            </TypesomethingV2Button>
            {fineprint && <p className="mt-6 text-[0.72rem] leading-[1.6] tracking-[0.04em] text-foreground/55">{fineprint}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

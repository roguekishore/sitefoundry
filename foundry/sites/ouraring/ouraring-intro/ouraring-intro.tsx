import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { OuraringButton } from "@foundry/ouraring-button";
import { OuraringReveal } from "@foundry/ouraring-reveal";

export interface OuraringIntroProps {
  /** the statement, one line on desktop */
  title: ReactNode;
  /** the lede under it */
  lede: ReactNode;
  /** one or two dark pills */
  actions: { label: ReactNode; href: string }[];
  className?: string;
}

export function OuraringIntro({ title, lede, actions, className }: OuraringIntroProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto flex max-w-page flex-col items-center px-gutter pt-[60px] pb-[40px] text-center lg:pt-[112px] lg:pb-[68px]">
        <OuraringReveal as="div">
          <h2 className="font-display text-[56px] leading-[1.1] font-normal tracking-[-0.03em] text-balance lg:text-[68px]">{title}</h2>
        </OuraringReveal>
        <OuraringReveal step={1} as="p" className="mt-6 max-w-[48rem] text-[24px] leading-[1.25] tracking-[-0.025em] lg:mt-7">
          {lede}
        </OuraringReveal>
        <OuraringReveal step={2} className="mt-11 flex flex-col items-center gap-4 lg:mt-10 lg:flex-row">
          {actions.map((a, i) => (
            <OuraringButton key={i} href={a.href}>
              {a.label}
            </OuraringButton>
          ))}
        </OuraringReveal>
      </div>
    </section>
  );
}

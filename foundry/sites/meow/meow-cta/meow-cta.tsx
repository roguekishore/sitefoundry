import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { MeowEmailForm, type MeowEmailFormProps } from "@foundry/meow-email-form";

export interface MeowCtaProps {
  /** the title */
  title: ReactNode;
  /** one line under it */
  text?: ReactNode;
  /** the sign-up field */
  form: Omit<MeowEmailFormProps, "surface">;
  className?: string;
}

/** A centred grey band with a title, a line and the email sign-up. */
export function MeowCta({ title, text, form, className }: MeowCtaProps) {
  return (
    <section className={cn("bg-muted text-foreground", className)}>
      <div className="mx-auto flex max-w-page flex-col items-center px-gutter py-10 text-center lg:py-16">
        <h2 className="font-display text-2xl/8 font-semibold tracking-[-0.015em] text-balance lg:text-[2rem]/10 lg:tracking-[-0.025em]">{title}</h2>
        {text && <p className="mt-4 text-lg/6 lg:mt-3">{text}</p>}
        <MeowEmailForm tone="accent" {...form} surface="card" className="mt-9 max-w-[30.625rem] lg:mt-8" />
      </div>
    </section>
  );
}

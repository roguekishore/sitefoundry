import type { ReactNode } from "react";
import { WiemerDotField } from "@foundry/wiemer-dot-field";
import { WiemerConsent, WiemerField, WiemerSubmit } from "@foundry/wiemer-field";
import { WiemerSplitText, wiemerReveal } from "@foundry/wiemer-reveal";
import { WiemerTag } from "@foundry/wiemer-tag";
import { cn } from "@foundry/foundry-utils";

export interface WiemerWaitlistPrice {
  /** the price, set in mono, e.g. "€219" */
  price: string;
  /** what it buys */
  name: string;
  /** a small note, e.g. tax and shipping */
  note: string;
}

export interface WiemerWaitlistProps {
  /** small mono label above the heading */
  tag: string;
  /** the huge centred heading */
  title: string;
  /** the paragraph under the heading */
  text: string;
  /** the heading inside the card */
  formTitle: string;
  /** one or two prices shown in the card */
  prices: WiemerWaitlistPrice[];
  /** the email field */
  email: { label: string; placeholder: string };
  /** the consent sentence next to the checkbox; may hold a link */
  consent: ReactNode;
  /** the submit button text */
  submit: string;
  /** where the form posts */
  action?: string;
  /** anchor id */
  id?: string;
  className?: string;
}

/** Launch heading and a signup card on a dotted field. */
export function WiemerWaitlist({ tag, title, text, formTitle, prices, email, consent, submit, action, id = "waitlist", className }: WiemerWaitlistProps) {
  return (
    <section id={id} className={cn("bg-muted py-section text-foreground", className)}>
      <div className="mx-auto flex max-w-page flex-col items-center px-gutter text-center">
        <div className={wiemerReveal("fade")}>
          <WiemerTag>{tag}</WiemerTag>
        </div>
        <WiemerSplitText text={title} className="mt-5 font-display text-[40px] leading-[1.1] font-medium tracking-[-0.025em] md:mt-8 md:text-[9vw]" />
        <p className="mt-2 max-w-[30rem] text-[max(16px,1.2vw)] leading-[1.3] font-medium tracking-[-0.015em] md:mt-4">{text}</p>
      </div>

      <div className="mx-auto mt-12 max-w-page px-gutter lg:mt-16">
        <WiemerDotField>
          <form action={action} method="post" className="mx-auto w-full max-w-[30rem] rounded-xl bg-card p-6 text-card-foreground md:rounded-2xl md:p-8">
            <h3 className="text-[max(20px,1.6vw)] leading-[1.2] font-medium tracking-[-0.03em]">{formTitle}</h3>
            <dl className="mt-5 grid gap-6 rounded-lg bg-muted p-6 sm:grid-cols-2">
              {prices.map((p) => (
                <div key={p.name}>
                  <dt className="font-mono text-[22px] leading-none">{p.price}</dt>
                  <dd className="mt-3.5 text-[15px] leading-[1.2] font-medium tracking-[-0.015em] whitespace-pre-line">
                    {p.name}
                    {"\n"}
                    {p.note}
                  </dd>
                </div>
              ))}
            </dl>
            <WiemerField label={email.label} name="email" type="email" placeholder={email.placeholder} required className="mt-10" />
            <WiemerConsent label={consent} className="mt-6" />
            <WiemerSubmit label={submit} className="mt-8" />
          </form>
        </WiemerDotField>
      </div>
    </section>
  );
}

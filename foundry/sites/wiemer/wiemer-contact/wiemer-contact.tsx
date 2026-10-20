import type { ReactNode } from "react";
import { WiemerDotField } from "@foundry/wiemer-dot-field";
import { WiemerConsent, WiemerField, WiemerSubmit } from "@foundry/wiemer-field";
import { WiemerTag } from "@foundry/wiemer-tag";
import { cn } from "@foundry/foundry-utils";

export interface WiemerContactField {
  /** the label above the field */
  label: string;
  /** hint text inside the empty field */
  placeholder: string;
}

export interface WiemerContactProps {
  /** small mono label above the heading */
  tag: string;
  /** the heading */
  title: string;
  /** one line under the heading */
  text: string;
  /** the three fields */
  fields: { name: WiemerContactField; email: WiemerContactField; message: WiemerContactField };
  /** the consent sentence next to the checkbox; may hold a link */
  consent: ReactNode;
  /** the submit button text */
  submit: string;
  /** where the form posts */
  action?: string;
  className?: string;
}

/** Centred heading and a contact card on a dotted field. */
export function WiemerContact({ tag, title, text, fields, consent, submit, action, className }: WiemerContactProps) {
  return (
    <section className={cn("bg-muted py-section text-foreground", className)}>
      <div className="mx-auto flex max-w-page flex-col items-center px-gutter text-center">
        <WiemerTag>{tag}</WiemerTag>
        <h1 className="mt-5 font-display text-[40px] leading-[1.1] font-medium tracking-[-0.035em] md:mt-6 md:text-[max(40px,4vw)]">{title}</h1>
        <p className="mt-3 max-w-[28rem] text-[max(16px,1.2vw)] leading-[1.3] font-medium tracking-[-0.015em] md:mt-5 md:max-w-none">{text}</p>
      </div>

      <div className="mx-auto mt-12 max-w-page px-gutter lg:mt-16">
        <WiemerDotField>
          <form action={action} method="post" className="mx-auto flex w-full max-w-[26rem] flex-col gap-8 rounded-xl bg-card p-6 text-card-foreground md:rounded-2xl md:p-8 md:pb-12">
            <WiemerField label={fields.name.label} name="name" placeholder={fields.name.placeholder} required />
            <WiemerField label={fields.email.label} name="email" type="email" placeholder={fields.email.placeholder} required />
            <WiemerField label={fields.message.label} name="message" placeholder={fields.message.placeholder} required multiline />
            <WiemerConsent label={consent} />
            <WiemerSubmit label={submit} />
          </form>
        </WiemerDotField>
      </div>
    </section>
  );
}

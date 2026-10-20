import { WiemerV2DotField } from "@foundry/wiemer-v2-dot-field";
import { WiemerV2FormCard, type WiemerV2FormField } from "@foundry/wiemer-v2-form-card";
import { WiemerV2Tag } from "@foundry/wiemer-v2-tag";
import { cn } from "@foundry/foundry-utils";
import type { ReactNode } from "react";

export interface WiemerV2KontaktFormProps {
  /** the small tag above the heading */
  tag: string;
  /** the heading */
  heading: string;
  /** one line under it */
  text: string;
  /** the form's fields, top to bottom */
  fields: WiemerV2FormField[];
  /** the consent line next to the checkbox */
  consent?: ReactNode;
  /** the button's text */
  submitLabel: string;
  /** where the form posts to */
  action?: string;
  /** rows of dots behind the card on desktop (default 9) */
  dotRows?: number;
  className?: string;
}

/**
 * A contact page's opening band on grey: a centred accent tag, a mid-size heading and one
 * line of text, then a narrow form card (name, email, message, consent, button) centred over
 * a field of big pale perforation dots on desktop.
 */
export function WiemerV2KontaktForm({ tag, heading, text, fields, consent, submitLabel, action, dotRows = 9, className }: WiemerV2KontaktFormProps) {
  return (
    <section className={cn("bg-muted pt-14 pb-section text-foreground lg:pt-22", className)}>
      <div className="flex flex-col items-center px-gutter text-center">
        <WiemerV2Tag>{tag}</WiemerV2Tag>
        <h1 className="mt-5 font-display text-[2.5rem] leading-[1.2] font-medium tracking-[-0.02em] lg:text-[4vw] lg:tracking-[-0.013em]">{heading}</h1>
        <p className="mt-4 max-w-[19rem] text-base leading-[1.3] lg:mt-6 lg:max-w-none lg:text-[1.2vw]">{text}</p>
      </div>
      <WiemerV2DotField rows={dotRows} className="mt-12 lg:mt-12">
        <WiemerV2FormCard fields={fields} consent={consent} submitLabel={submitLabel} action={action} className="w-full lg:w-[26rem]" />
      </WiemerV2DotField>
    </section>
  );
}

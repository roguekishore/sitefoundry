import { WiemerV2DotField } from "@foundry/wiemer-v2-dot-field";
import { WiemerV2FormCard, type WiemerV2FormField } from "@foundry/wiemer-v2-form-card";
import { wiemerV2Reveal } from "@foundry/wiemer-v2-reveal";
import { WiemerV2SplitHeading } from "@foundry/wiemer-v2-split-heading";
import { WiemerV2Tag } from "@foundry/wiemer-v2-tag";
import { cn } from "@foundry/foundry-utils";
import type { ReactNode } from "react";

export interface WiemerV2Price {
  /** the figure, set in mono */
  price: string;
  /** what it is */
  label: string;
  /** a small line under it (taxes, delivery) */
  note?: string;
}

export interface WiemerV2WaitlistProps {
  /** anchor id, so links like #reserve land here */
  id?: string;
  /** the small status tag */
  tag: string;
  /** the big centred heading */
  heading: string;
  /** two or three centred lines under it */
  text: string;
  /** the heading inside the form card */
  formTitle: string;
  /** the prices shown in the grey box in the card */
  prices: WiemerV2Price[];
  /** the form's fields (usually just an email) */
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
 * A grey sign-up band: a centred accent tag, a very large heading and a short paragraph, then
 * a form card with a grey price box, an email field, consent and a full-width button, centred
 * over a field of large pale perforation dots (desktop) that darken under the pointer.
 */
export function WiemerV2Waitlist({ id, tag, heading, text, formTitle, prices, fields, consent, submitLabel, action, dotRows = 9, className }: WiemerV2WaitlistProps) {
  return (
    <section id={id} className={cn("bg-muted pt-section pb-section text-foreground", className)}>
      <div className="flex flex-col items-center px-gutter text-center">
        <div className={wiemerV2Reveal("fade")}>
          <WiemerV2Tag>{tag}</WiemerV2Tag>
        </div>
        <WiemerV2SplitHeading text={heading} className="mt-5 font-display text-[2.5rem] leading-[1.1] font-medium tracking-[-0.02em] lg:mt-6 lg:text-[9vw] lg:tracking-[-0.008em]" />
        <p className={cn(wiemerV2Reveal("rise"), "mt-3 max-w-[22rem] text-base leading-[1.3] tracking-[-0.01em] lg:mt-6 lg:max-w-[33vw] lg:text-[1.2vw]")}>{text}</p>
      </div>

      <WiemerV2DotField rows={dotRows} className="mt-12 lg:mt-12">
        <WiemerV2FormCard
          title={formTitle}
          intro={
            <div className="grid gap-6 rounded-md bg-muted p-6 sm:grid-cols-2">
              {prices.map((p) => (
                <div key={p.label}>
                  <p className="font-mono text-xl leading-none font-medium lg:text-[max(1.25rem,1.6vw)]">{p.price}</p>
                  <p className="mt-3 text-[0.9375rem] leading-[1.25]">
                    {p.label}
                    {p.note && (
                      <>
                        <br />
                        {p.note}
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          }
          fields={fields}
          consent={consent}
          submitLabel={submitLabel}
          action={action}
          className="w-full lg:w-[30rem]"
        />
      </WiemerV2DotField>
    </section>
  );
}

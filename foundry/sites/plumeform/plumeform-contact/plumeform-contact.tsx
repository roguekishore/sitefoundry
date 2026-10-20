import { useId, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformButton } from "@foundry/plumeform-button";
import { PlumeformHeading } from "@foundry/plumeform-heading";
import { PlumeformPanel } from "@foundry/plumeform-panel";
import { PlumeformReveal } from "@foundry/plumeform-reveal";

export interface PlumeformContactField {
  /** the form field name */
  name: string;
  label: string;
  /** quieter text after the label, e.g. "(optional)" */
  hint?: string;
  placeholder?: string;
  type?: "email" | "text" | "textarea";
  required?: boolean;
}

export interface PlumeformContactProps {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  /** pills to pick what the message is about (a radio group); the first starts selected */
  topics?: { name: string; options: string[] };
  /** a short dotted list under the pills */
  bullets?: string[];
  /** where the form posts */
  action?: string;
  fields: PlumeformContactField[];
  submitLabel: string;
  /** small centred text under the button */
  note?: ReactNode;
  id?: string;
  className?: string;
}

/** Copy, topic pills and a short list on the left; a glass form card over colour clouds on the right. */
export function PlumeformContact({ eyebrow, title, body, topics, bullets, action, fields, submitLabel, note, id, className }: PlumeformContactProps) {
  const autoId = useId();
  const formId = `${id ?? autoId}-form`;
  return (
    <section id={id} className={cn("overflow-x-clip bg-background py-section text-foreground", className)}>
      <div className="mx-auto grid max-w-[60rem] items-start gap-12 px-gutter lg:grid-cols-[1fr_27rem] lg:gap-16">
        <div>
          <PlumeformHeading eyebrow={eyebrow} title={title} className="max-w-[28rem]">
            {body && <div className="text-lg leading-[1.6]">{body}</div>}
          </PlumeformHeading>
          {topics && (
            <PlumeformReveal step={1} className="mt-8 flex flex-wrap gap-2">
              {topics.options.map((opt, i) => (
                <label
                  key={opt}
                  className="inline-flex h-10 cursor-pointer items-center rounded-full border border-border bg-secondary px-4 text-[0.8125rem] font-bold text-secondary-foreground transition-colors duration-200 hover:bg-accent has-[:checked]:border-primary has-[:checked]:bg-primary has-[:checked]:text-primary-foreground has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring"
                >
                  <input type="radio" name={topics.name} value={opt} defaultChecked={i === 0} form={formId} className="sr-only" />
                  {opt}
                </label>
              ))}
            </PlumeformReveal>
          )}
          {bullets && (
            <PlumeformReveal step={2} as="div" className="mt-9">
              <ul className="space-y-3.5 text-[0.9375rem] text-muted-foreground">
                {bullets.map((b) => (
                  <li key={b} className="relative pl-4 before:absolute before:top-[0.55rem] before:left-0 before:size-1.5 before:rounded-full before:bg-highlight">
                    {b}
                  </li>
                ))}
              </ul>
            </PlumeformReveal>
          )}
        </div>

        <PlumeformReveal step={1}>
          <PlumeformPanel clouds="c">
            <form id={formId} action={action} method="post" className="space-y-5">
              {fields.map((f) => {
                const inputClass =
                  "mt-2 block w-full rounded-[calc(var(--radius)/2)] border border-input bg-card px-4 text-[0.9375rem] font-normal text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-highlight focus:outline-none focus:ring-3 focus:ring-highlight/15";
                return (
                  <label key={f.name} className="block text-[0.8125rem] font-bold">
                    {f.label}
                    {f.hint && <span className="font-normal text-muted-foreground"> {f.hint}</span>}
                    {f.type === "textarea" ? (
                      <textarea name={f.name} placeholder={f.placeholder} required={f.required} rows={5} className={cn(inputClass, "resize-y py-3 leading-6")} />
                    ) : (
                      <input name={f.name} type={f.type ?? "text"} placeholder={f.placeholder} required={f.required} className={cn(inputClass, "h-[3.125rem]")} />
                    )}
                  </label>
                );
              })}
              <PlumeformButton type="submit" block arrow size="lg" className="h-[2.625rem] text-[0.9375rem] font-bold">
                {submitLabel}
              </PlumeformButton>
              {note && <p className="text-center text-xs text-muted-foreground">{note}</p>}
            </form>
          </PlumeformPanel>
        </PlumeformReveal>
      </div>
    </section>
  );
}

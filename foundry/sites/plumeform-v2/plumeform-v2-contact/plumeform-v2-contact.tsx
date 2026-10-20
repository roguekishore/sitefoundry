import { useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformV2Button } from "@foundry/plumeform-v2-button";
import { PlumeformV2Heading } from "@foundry/plumeform-v2-heading";
import { PlumeformV2Panel } from "@foundry/plumeform-v2-panel";
import { PlumeformV2Reveal } from "@foundry/plumeform-v2-reveal";
import "./plumeform-v2-contact.css";

export interface PlumeformV2ContactChoice {
  label: string;
  /** the points listed under the pills while this choice is picked */
  points: string[];
  /** the label and placeholder of the message field for this choice */
  messageLabel: string;
  messagePlaceholder?: string;
}

export interface PlumeformV2ContactField {
  name: string;
  label: string;
  /** shown after the label in a lighter weight, e.g. "(optional)" */
  hint?: string;
  type?: "email" | "text";
  placeholder?: string;
  required?: boolean;
}

export interface PlumeformV2ContactProps {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  /** the pill choices; the first is picked to begin with */
  choices: PlumeformV2ContactChoice[];
  /** the label of the choice group, for screen readers */
  choicesLabel?: string;
  /** short fields above the message */
  fields: PlumeformV2ContactField[];
  /** the message field's name */
  messageName?: string;
  submitLabel: string;
  /** a small line under the button */
  note?: string;
  /** where the form posts */
  action?: string;
  id?: string;
  className?: string;
}

const input =
  "w-full rounded-[calc(var(--radius)/2)] border border-input bg-card px-4 text-base text-foreground placeholder:text-muted-foreground/70 transition-[border-color,box-shadow] duration-150 focus:border-primary focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--ring)_20%,transparent)] focus:outline-none";

export function PlumeformV2Contact({
  eyebrow,
  title,
  body,
  choices,
  choicesLabel = "What it's about",
  fields,
  messageName = "message",
  submitLabel,
  note,
  action,
  id,
  className,
}: PlumeformV2ContactProps) {
  const [picked, setPicked] = useState(0);
  const choice = choices[picked];
  return (
    <section id={id} className={cn("overflow-x-clip bg-background px-gutter py-[calc(var(--section-y)*0.75)] text-foreground", className)}>
      <div className="mx-auto grid max-w-[calc(var(--page-width)-2*var(--page-gutter))] gap-14 lg:grid-cols-2 lg:gap-x-24">
        <div className="max-w-xl">
          <PlumeformV2Heading eyebrow={eyebrow} title={title} body={body} />
          <PlumeformV2Reveal step={1} className="mt-8">
            <div role="group" aria-label={choicesLabel} className="flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap">
              {choices.map((c, i) => (
                <button
                  key={c.label}
                  type="button"
                  aria-pressed={i === picked}
                  onClick={() => setPicked(i)}
                  className={cn(
                    "h-10 rounded-full px-4 text-[0.8125rem] font-bold transition-colors duration-200",
                    i === picked ? "bg-foreground text-background" : "border border-border bg-secondary text-secondary-foreground hover:bg-accent",
                  )}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <ul key={picked} className="plumeform-v2-contact-swap mt-7 space-y-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {choice.points.map((p) => (
                <li key={p} className="relative pl-4">
                  <span aria-hidden className="absolute top-[0.6em] left-0 size-1 rounded-full bg-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </PlumeformV2Reveal>
        </div>

        <PlumeformV2Reveal step={1} className="mx-0 sm:mx-auto sm:w-full sm:max-w-md lg:max-w-none">
          <PlumeformV2Panel fog="mint" padding="lg">
            <form action={action} method="post" className="grid gap-4">
              {fields.map((f) => (
                <label key={f.name} className="grid gap-2">
                  <span className="text-xs font-bold">
                    {f.label}
                    {f.hint && <span className="font-normal text-muted-foreground"> {f.hint}</span>}
                  </span>
                  <input name={f.name} type={f.type ?? "text"} placeholder={f.placeholder} required={f.required} className={cn(input, "h-12")} />
                </label>
              ))}
              <label className="grid gap-2">
                <span key={picked} className="plumeform-v2-contact-swap text-xs font-bold">
                  {choice.messageLabel}
                </span>
                <textarea name={messageName} rows={5} placeholder={choice.messagePlaceholder} className={cn(input, "min-h-[9.5rem] py-3 leading-relaxed")} />
              </label>
              <PlumeformV2Button type="submit" block size="lg" arrow className="mt-1">
                {submitLabel}
              </PlumeformV2Button>
              {note && <p className="text-center text-xs text-muted-foreground">{note}</p>}
            </form>
          </PlumeformV2Panel>
        </PlumeformV2Reveal>
      </div>
    </section>
  );
}

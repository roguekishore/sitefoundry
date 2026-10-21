import { useId } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RiopropertyArrowLink } from "@foundry/rioproperty-arrow-link";
import { RiopropertyRiseText } from "@foundry/rioproperty-rise-text";
import "./rioproperty-contact.css";

export interface RiopropertyContactField {
  /** the form field name */
  name: string;
  /** the capital placeholder that doubles as its label */
  label: string;
  type?: "text" | "email" | "tel";
}

export interface RiopropertyContactProps {
  /** the big yellow capital heading */
  heading: string;
  /** the lavender capital line under it */
  subhead: string;
  /** where the form posts */
  action?: string;
  /** the plain one-line fields (name, e-mail, phone…) */
  fields: RiopropertyContactField[];
  /** the drop-down: its label and its choices */
  select: { name: string; label: string; options: string[] };
  /** the tick-any-that-apply row */
  choices: { name: string; legend: string; options: string[] };
  /** the message box */
  message: { name: string; label: string };
  /** the send button's label */
  submitLabel: string;
  className?: string;
}

const row = "rioproperty-contact-field block border-b border-primary-foreground/25 transition-colors duration-200 focus-within:border-highlight";
const control =
  "w-full bg-transparent pt-10 pb-3 text-primary-foreground uppercase outline-none placeholder:text-primary-foreground/75";

export function RiopropertyContact({ heading, subhead, action, fields, select, choices, message, submitLabel, className }: RiopropertyContactProps) {
  const id = useId();
  return (
    <section className={cn("overflow-clip bg-background py-8", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="rioproperty-contact-panel bg-primary text-primary-foreground">
          <div className="rioproperty-contact-inner grid gap-2 px-6 pt-16 pb-8 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-16">
            <div className="flex flex-col lg:justify-center">
              <RiopropertyRiseText
                text={heading}
                className="font-display text-[clamp(2.9rem,2.4rem+2.4vw,4.625rem)] leading-[0.966] font-semibold text-highlight uppercase"
              />
              <p className="mt-6 max-w-[12rem] text-lg leading-normal text-accent uppercase sm:max-w-none lg:mt-10 lg:text-2xl">{subhead}</p>
            </div>

            <form action={action} method="post" className="flex flex-col">
              {fields.map((field) => (
                <label key={field.name} className={row}>
                  <input name={field.name} type={field.type ?? "text"} placeholder={field.label} aria-label={field.label} className={cn(control, "pt-8 lg:pt-10")} />
                </label>
              ))}

              <label className={cn(row, "relative")}>
                <select name={select.name} aria-label={select.label} defaultValue="" className={cn(control, "cursor-pointer appearance-none pr-10")}>
                  <option value="" disabled>
                    {select.label}
                  </option>
                  {select.options.map((option) => (
                    <option key={option} value={option} className="bg-primary text-primary-foreground normal-case">
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown aria-hidden strokeWidth={2} className="pointer-events-none absolute right-6 bottom-4 size-4" />
              </label>

              <fieldset className="rioproperty-contact-rise pt-10 pb-4">
                <legend className="float-left w-full text-primary-foreground/85 uppercase">{choices.legend}</legend>
                <div className="clear-left flex flex-wrap gap-x-8 gap-y-3 pt-5">
                  {choices.options.map((option, i) => (
                    <label key={option} htmlFor={`${id}-${i}`} className="group/choice flex cursor-pointer items-center gap-2 text-primary-foreground/85">
                      <input
                        id={`${id}-${i}`}
                        type="checkbox"
                        name={choices.name}
                        value={option}
                        className="size-2.5 cursor-pointer appearance-none rounded-full border border-highlight transition-colors duration-200 checked:bg-highlight"
                      />
                      <span className="transition-colors duration-200 group-hover/choice:text-highlight">{option}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className={cn(row, "rioproperty-contact-rise")}>
                <textarea name={message.name} rows={2} placeholder={message.label} aria-label={message.label} className={cn(control, "resize-none")} />
              </label>

              <div className="flex justify-end pt-10 pr-1.5">
                <RiopropertyArrowLink type="submit" tone="highlight">
                  {submitLabel}
                </RiopropertyArrowLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

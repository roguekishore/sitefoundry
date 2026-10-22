import { ChevronsUpDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ModerntreasuryButton } from "@foundry/moderntreasury-button";
import { ModerntreasuryHeading } from "@foundry/moderntreasury-heading";

export interface ModerntreasuryField {
  /** the visible label */
  label: string;
  /** the form field's name */
  name: string;
  /** text-like input, or a select */
  type?: "text" | "email" | "tel" | "select";
  /** the select's choices */
  options?: string[];
  /** the select's empty first line, e.g. "Select an option" */
  placeholder?: string;
  /** marks the label with an asterisk */
  required?: boolean;
  /** half width: two half fields share a row */
  half?: boolean;
}

export interface ModerntreasuryContactProps {
  /** the section title */
  title: string | string[];
  /** the line under it */
  lead?: string;
  /** the form's fields, in order */
  fields: ModerntreasuryField[];
  /** the submit button's label */
  submitLabel: string;
  /** where the form posts to */
  action?: string;
  className?: string;
}

/** A centred title over a pale card with a plain, square-cornered sales form. */
export function ModerntreasuryContact({ title, lead, fields, submitLabel, action, className }: ModerntreasuryContactProps) {
  return (
    <section className={cn("bg-background pt-[calc(var(--section-y)*0.66)] pb-[calc(var(--section-y)*1.1)] text-foreground lg:pt-section lg:pb-[calc(var(--section-y)*1.5)]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <ModerntreasuryHeading title={title} lead={lead} />
        <form action={action} method="post" className="mt-12 rounded-lg bg-muted px-6 pt-7 pb-10 lg:mt-[3.25rem]">
          <div className="grid grid-cols-2 gap-x-4 gap-y-4">
            {fields.map((f) => {
              const id = `moderntreasury-contact-${f.name}`;
              return (
                <div key={f.name} className={cn(f.half ? "col-span-1" : "col-span-2")}>
                  <label htmlFor={id} className="block text-base leading-6 font-semibold text-foreground/75">
                    {f.label}
                    {f.required && <span className="text-foreground/40">*</span>}
                  </label>
                  {f.type === "select" ? (
                    <div className="relative mt-1">
                      <select
                        id={id}
                        name={f.name}
                        required={f.required}
                        defaultValue=""
                        className="h-11 w-full appearance-none bg-background px-3 pr-10 text-base text-foreground outline-offset-0 focus-visible:outline-2 focus-visible:outline-ring"
                      >
                        <option value="" disabled>
                          {f.placeholder}
                        </option>
                        {f.options?.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                      <ChevronsUpDown aria-hidden className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2" strokeWidth={1.75} />
                    </div>
                  ) : (
                    <input
                      id={id}
                      name={f.name}
                      type={f.type ?? "text"}
                      required={f.required}
                      className="mt-0.5 h-[2.625rem] w-full border border-input bg-background px-3 text-base text-foreground focus-visible:border-ring focus-visible:outline-none"
                    />
                  )}
                </div>
              );
            })}
          </div>
          <ModerntreasuryButton type="submit" arrow className="mt-10 h-[2.625rem] px-4">
            {submitLabel}
          </ModerntreasuryButton>
        </form>
      </div>
    </section>
  );
}

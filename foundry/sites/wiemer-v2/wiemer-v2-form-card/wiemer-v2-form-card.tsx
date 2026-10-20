import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface WiemerV2FormField {
  /** the field's name in the submitted form */
  name: string;
  /** the label above the field */
  label: string;
  /** text, email or a multi-line message */
  type?: "text" | "email" | "textarea";
  /** grey hint text inside the empty field */
  placeholder?: string;
  /** marks the label with an accent asterisk */
  required?: boolean;
}

export interface WiemerV2FormCardProps {
  /** optional heading at the top of the card */
  title?: string;
  /** anything between the heading and the fields (a price box, say) */
  intro?: ReactNode;
  /** the fields, top to bottom */
  fields: WiemerV2FormField[];
  /** the consent line next to the checkbox (may hold a link) */
  consent?: ReactNode;
  /** the button's text */
  submitLabel: string;
  /** where the form posts to */
  action?: string;
  className?: string;
}

/**
 * An off-white form card with 14px corners: optional heading and intro, labelled white
 * fields with hairline borders, a consent checkbox and a full-width accent button.
 */
export function WiemerV2FormCard({ title, intro, fields, consent, submitLabel, action, className }: WiemerV2FormCardProps) {
  const field = "w-full rounded-sm border border-input bg-card px-4 text-base text-card-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none";
  return (
    <form action={action} method="post" className={cn("rounded-lg bg-background p-6 text-foreground lg:rounded-xl lg:p-8", className)}>
      {title && <h3 className="text-xl leading-[1.2] font-medium tracking-[-0.01em] lg:text-[max(1.25rem,1.6vw)]">{title}</h3>}
      {intro && <div className="mt-5">{intro}</div>}
      <div className={cn("space-y-8", (title || intro) && "mt-8")}>
        {fields.map((f) => (
          <label key={f.name} className="block">
            <span className="block text-[0.9375rem]">
              {f.label}
              {f.required && <span className="text-primary"> *</span>}
            </span>
            {f.type === "textarea" ? (
              <textarea name={f.name} required={f.required} placeholder={f.placeholder} rows={5} className={cn(field, "mt-2 block min-h-36 py-3")} />
            ) : (
              <input name={f.name} type={f.type ?? "text"} required={f.required} placeholder={f.placeholder} className={cn(field, "mt-2 block h-[3.125rem]")} />
            )}
          </label>
        ))}
      </div>
      {consent && (
        <label className="mt-8 flex items-start gap-2.5 text-sm leading-[1.2]">
          <input type="checkbox" required className="mt-px size-[1.125rem] shrink-0 appearance-none rounded-[3px] border border-foreground bg-card checked:bg-foreground" />
          <span className="[&_a]:underline [&_a]:underline-offset-2">
            {consent}
            <span className="text-primary">*</span>
          </span>
        </label>
      )}
      <button
        type="submit"
        className="mt-8 h-11 w-full rounded-sm bg-primary text-[0.9375rem] font-medium text-primary-foreground transition-all duration-200 ease-out hover:bg-primary/90 active:scale-[0.98] motion-reduce:transition-none"
      >
        {submitLabel}
      </button>
    </form>
  );
}

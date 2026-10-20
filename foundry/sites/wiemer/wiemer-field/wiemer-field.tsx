import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface WiemerFieldProps {
  /** the label above the field */
  label: string;
  /** the field's name in the submitted form */
  name: string;
  /** input type (text, email, tel…); ignored when multiline */
  type?: string;
  /** hint text inside the empty field */
  placeholder?: string;
  /** required fields get a blue star */
  required?: boolean;
  /** a tall message box instead of a one-line field */
  multiline?: boolean;
  className?: string;
}

const box =
  "w-full rounded-lg border border-input bg-popover px-4 text-base text-popover-foreground tracking-[-0.01em] outline-none transition-colors duration-200 placeholder:text-muted-foreground focus:border-highlight";

/** Label + white field with a hairline border. */
export function WiemerField({ label, name, type = "text", placeholder, required, multiline, className }: WiemerFieldProps) {
  const id = `wiemer-${name}`;
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-[15px] font-medium tracking-[-0.015em]">
        {label}
        {required && <span className="ml-1 text-highlight" aria-hidden="true">*</span>}
      </label>
      {multiline ? (
        <textarea id={id} name={name} placeholder={placeholder} required={required} rows={5} className={cn(box, "min-h-36 py-3")} />
      ) : (
        <input id={id} name={name} type={type} placeholder={placeholder} required={required} className={cn(box, "h-[50px]")} />
      )}
    </div>
  );
}

export interface WiemerConsentProps {
  /** the consent sentence; may hold a link */
  label: ReactNode;
  /** the checkbox's name in the submitted form */
  name?: string;
  required?: boolean;
  className?: string;
}

/** Checkbox with a small consent sentence. */
export function WiemerConsent({ label, name = "consent", required = true, className }: WiemerConsentProps) {
  return (
    <label className={cn("flex items-start gap-2.5 text-sm leading-[1.2] font-medium tracking-[-0.01em] [&_a]:underline [&_a]:underline-offset-2", className)}>
      <input type="checkbox" name={name} required={required} className="mt-px size-[18px] shrink-0 rounded-[3px] accent-highlight" />
      <span>
        {label}
        {required && <span className="text-highlight" aria-hidden="true">*</span>}
      </span>
    </label>
  );
}

export interface WiemerSubmitProps {
  /** the button text */
  label: string;
  className?: string;
}

/** Full-width blue submit bar. */
export function WiemerSubmit({ label, className }: WiemerSubmitProps) {
  return (
    <button
      type="submit"
      className={cn(
        "h-11 w-full rounded-lg bg-highlight text-[15px] font-semibold tracking-[-0.02em] text-highlight-foreground transition-all duration-200 hover:scale-[0.98] hover:bg-highlight/90 motion-reduce:transition-none",
        className,
      )}
    >
      {label}
    </button>
  );
}

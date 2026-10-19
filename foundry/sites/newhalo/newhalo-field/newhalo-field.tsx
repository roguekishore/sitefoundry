import { ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface NewhaloFieldProps {
  /** the small label that sits in a gap of the top border */
  label: string;
  /** the form field's name */
  name: string;
  /** text-like input types, a multi-line textarea, or a select */
  kind?: "text" | "email" | "tel" | "textarea" | "select";
  /** for kind "select": the choices */
  options?: string[];
  /** grey hint inside the empty field (for select: the first, empty choice) */
  placeholder?: string;
  /** marks it required and puts an asterisk before the label */
  required?: boolean;
  className?: string;
}

const control =
  "w-full bg-transparent px-[0.9375rem] text-base text-foreground placeholder:text-foreground/60 focus:outline-none";

/**
 * An outlined form field whose label is set into the top border (a fieldset legend). The
 * border is a 30% hairline that darkens on hover and turns the ring colour on focus.
 */
export function NewhaloField({ label, name, kind = "text", options = [], placeholder, required, className }: NewhaloFieldProps) {
  return (
    <fieldset
      className={cn(
        "relative -mt-2 rounded-sm border border-input transition-colors duration-300 ease-[cubic-bezier(0.32,0.94,0.6,1)] hover:border-foreground focus-within:border-ring motion-reduce:transition-none",
        className,
      )}
    >
      <legend className="ml-2.5 px-1 text-xs leading-none">
        <label htmlFor={`newhalo-${name}`}>
          {required && "*"}
          {label}
        </label>
      </legend>
      {kind === "textarea" ? (
        <textarea id={`newhalo-${name}`} name={name} required={required} placeholder={placeholder} rows={5} className={cn(control, "-mt-1 block min-h-32 resize-y py-2")} />
      ) : kind === "select" ? (
        <div className="relative">
          <select id={`newhalo-${name}`} name={name} required={required} defaultValue="" className={cn(control, "h-9 appearance-none pb-1 text-foreground/70")}>
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          <ChevronDown aria-hidden strokeWidth={1.25} className="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-[60%]" />
        </div>
      ) : (
        <input id={`newhalo-${name}`} name={name} type={kind} required={required} placeholder={placeholder} className={cn(control, "h-9 pb-1")} />
      )}
    </fieldset>
  );
}

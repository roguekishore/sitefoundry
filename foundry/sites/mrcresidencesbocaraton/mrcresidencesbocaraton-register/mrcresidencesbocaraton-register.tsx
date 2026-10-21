import type { ReactNode } from "react";
import { ChevronDown, Wine } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./mrcresidencesbocaraton-register.css";

/** one cell of the form grid */
export type MrcresidencesbocaratonRegisterField =
  | {
      kind: "text";
      name: string;
      /** shown inside the field until something is typed */
      label: string;
      type?: "text" | "email" | "tel";
      required?: boolean;
    }
  | {
      kind: "select";
      name: string;
      /** shown as the empty choice */
      label: string;
      options: string[];
      required?: boolean;
    }
  | {
      kind: "choices";
      name: string;
      /** the group's heading */
      label: string;
      /** one square checkbox each */
      options: string[];
    };

export interface MrcresidencesbocaratonRegisterProps {
  /** the small mark at the top; empty: a thin lucide glass icon */
  mark?: ReactNode;
  /** the centred invitation, one string per line */
  intro: string[];
  /** the fields, in order (rows of two on desktop) */
  fields: MrcresidencesbocaratonRegisterField[];
  /** the pill's label */
  submitLabel: string;
  action?: string;
  method?: "get" | "post";
  id?: string;
  className?: string;
}

const line = "w-full border-b border-primary bg-transparent text-[16px] text-primary outline-none dark:text-foreground";

function Field({ field }: { field: MrcresidencesbocaratonRegisterField }) {
  if (field.kind === "text") {
    return (
      <input
        name={field.name}
        type={field.type ?? "text"}
        required={field.required}
        placeholder={field.label}
        aria-label={field.label}
        className={cn(line, "h-[42px] pb-2 placeholder:text-primary focus:border-b-2 dark:placeholder:text-foreground")}
      />
    );
  }
  if (field.kind === "select") {
    return (
      <div className="relative mt-[18px]">
        <select
          name={field.name}
          required={field.required}
          aria-label={field.label}
          defaultValue=""
          className={cn(line, "h-[42px] cursor-pointer appearance-none pr-8 pb-2 focus:border-b-2")}
        >
          <option value="" disabled>
            {field.label}
          </option>
          {field.options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <ChevronDown aria-hidden strokeWidth={1.25} className="pointer-events-none absolute top-2.5 right-2.5 size-5 text-primary dark:text-foreground" />
      </div>
    );
  }
  return (
    <fieldset className="mt-[28px] text-primary dark:text-foreground">
      <legend className="text-[16px]">{field.label}</legend>
      <div className="mt-[14px] flex flex-col gap-[18px]">
        {field.options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center gap-2.5 text-[16px] leading-[22px]">
            <input
              type="checkbox"
              name={field.name}
              value={option}
              className="size-[18px] shrink-0 cursor-pointer appearance-none border border-primary transition-colors duration-300 checked:bg-primary dark:border-foreground dark:checked:bg-foreground"
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function MrcresidencesbocaratonRegister({ mark, intro, fields, submitLabel, action, method = "post", id, className }: MrcresidencesbocaratonRegisterProps) {
  return (
    <section
      id={id}
      className={cn("relative bg-background px-[25px] pt-[60px] pb-[60px] text-primary lg:px-gutter lg:pt-20 lg:pb-[136px] dark:text-foreground", className)}
    >
      <div className="mrcresidencesbocaraton-register-reveal mx-auto max-w-[825px]">
        <div className="flex justify-center [&>svg]:h-16 [&>svg]:w-auto lg:[&>svg]:h-[100px]">
          {mark ?? <Wine aria-hidden strokeWidth={0.75} />}
        </div>
        <p className="mt-6 text-center text-[16px] leading-[1.4] lg:mt-8 lg:leading-[1.5]">
          {intro.map((part, i) => (
            <span key={i} className="block">
              {part}
            </span>
          ))}
        </p>

        <form action={action} method={method} className="mt-[52px] lg:mt-[48px]">
          <div className="grid gap-x-[33px] gap-y-2 lg:grid-cols-2 lg:gap-y-[28px]">
            {fields.map((field) => (
              <Field key={field.name} field={field} />
            ))}
          </div>
          <button
            type="submit"
            className="mt-[22px] h-10 w-full rounded-full border border-primary bg-primary text-[16px] font-bold text-primary-foreground uppercase transition-colors duration-500 ease-in-out hover:bg-transparent hover:text-primary motion-reduce:transition-none lg:mt-[70px] lg:h-[54px] lg:text-[18px] dark:hover:text-foreground"
          >
            {submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}

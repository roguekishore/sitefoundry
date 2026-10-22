import { cn } from "@foundry/foundry-utils";

export interface RhoEmailFormProps {
  /** placeholder inside the field */
  placeholder: string;
  /** label of the button inside the box */
  buttonLabel: string;
  /** screen-reader label for the field */
  inputLabel: string;
  /** where the form submits to */
  action?: string;
  /** name of the email field */
  name?: string;
  className?: string;
}

export function RhoEmailForm({ placeholder, buttonLabel, inputLabel, action, name = "email", className }: RhoEmailFormProps) {
  return (
    <form
      action={action}
      className={cn(
        "flex h-12 w-full items-center gap-2 rounded-md border border-border bg-background/40 p-1 pl-4",
        "transition-colors duration-[160ms] focus-within:border-input hover:border-input motion-reduce:transition-none",
        className,
      )}
    >
      <label className="sr-only" htmlFor={`rho-email-${name}`}>
        {inputLabel}
      </label>
      <input
        id={`rho-email-${name}`}
        type="email"
        name={name}
        placeholder={placeholder}
        className="h-full min-w-0 flex-1 bg-transparent text-[0.9375rem] text-foreground outline-none placeholder:text-foreground/85"
      />
      <button
        type="submit"
        className="h-full shrink-0 rounded-[0.3125rem] bg-primary px-4 text-[0.9375rem] text-primary-foreground transition-[filter] duration-[160ms] hover:brightness-[0.93] hover:saturate-[1.6] motion-reduce:transition-none"
      >
        {buttonLabel}
      </button>
    </form>
  );
}

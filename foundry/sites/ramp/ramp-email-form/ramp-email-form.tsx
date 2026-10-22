import { cn } from "@foundry/foundry-utils";

export interface RampEmailFormProps {
  /** the field's placeholder, e.g. "Your work email" */
  placeholder: string;
  /** the button's label */
  buttonLabel: string;
  /** screen-reader label for the field */
  fieldLabel: string;
  /** where the form posts (optional) */
  action?: string;
  /** centre the form in its column */
  center?: boolean;
  className?: string;
}

/** The sign-up bar Ramp repeats in the hero, the closing band and the footer. */
export function RampEmailForm({ placeholder, buttonLabel, fieldLabel, action, center, className }: RampEmailFormProps) {
  return (
    <form
      action={action}
      className={cn(
        "flex w-full max-w-[31.25rem] flex-col gap-2 sm:h-[3.875rem] sm:flex-row sm:gap-0 sm:rounded-[calc(var(--radius)-2px)] sm:border sm:border-foreground/12 sm:bg-[color-mix(in_oklab,var(--foreground)_3%,var(--background))] sm:p-1 dark:sm:bg-[color-mix(in_oklab,var(--foreground)_10%,var(--background))] dark:sm:border-foreground/20",
        center && "mx-auto",
        className,
      )}
    >
      <label className="contents">
        <span className="sr-only">{fieldLabel}</span>
        <input
          type="email"
          name="email"
          placeholder={placeholder}
          className="h-[2.625rem] min-w-0 flex-none rounded-[calc(var(--radius)-6px)] border border-foreground/12 bg-[color-mix(in_oklab,var(--foreground)_3%,var(--background))] px-5 text-center text-base text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring sm:h-auto sm:flex-1 sm:border-0 sm:bg-transparent sm:text-left dark:bg-[color-mix(in_oklab,var(--foreground)_10%,var(--background))]"
        />
      </label>
      <button
        type="submit"
        className="h-[2.625rem] shrink-0 rounded-[calc(var(--radius)-6px)] bg-primary px-5 text-base text-primary-foreground transition-colors duration-300 hover:bg-[color-mix(in_oklab,var(--primary)_88%,var(--foreground))] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none sm:h-auto"
      >
        {buttonLabel}
      </button>
    </form>
  );
}

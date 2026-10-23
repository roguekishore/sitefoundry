import { cn } from "@foundry/foundry-utils";

export interface SlashEmailFieldProps {
  /** placeholder inside the field ("Work email") */
  placeholder: string;
  /** accessible label for the field */
  label: string;
  /** the button's text */
  button: string;
  /** where the form posts */
  action?: string;
  /** box: 10px field with a 6px white button (hero); pill: rounded field and button (closing CTA) */
  shape?: "box" | "pill";
  className?: string;
}

/** An email field with the submit button sitting inside it, on the right. */
export function SlashEmailField({ placeholder, label, button, action = "#", shape = "box", className }: SlashEmailFieldProps) {
  const pill = shape === "pill";
  return (
    <form
      action={action}
      className={cn(
        "flex items-center border transition-colors duration-150 focus-within:border-muted-foreground motion-reduce:transition-none",
        pill
          ? "h-14 rounded-full border-foreground/10 bg-foreground/10 p-1.5 pl-6"
          : "h-11 rounded-lg border-foreground/15 bg-foreground/5 p-1 pl-3.5 lg:h-12",
        className,
      )}
    >
      <input
        type="email"
        name="email"
        aria-label={label}
        placeholder={placeholder}
        className="h-full min-w-0 flex-1 bg-transparent text-base tracking-[-0.02em] text-foreground outline-none placeholder:text-muted-foreground"
      />
      <button
        type="submit"
        className={cn(
          "h-full shrink-0 bg-primary font-medium tracking-[-0.02em] text-primary-foreground transition-colors duration-150 hover:bg-primary/80 motion-reduce:transition-none",
          pill ? "rounded-full px-6 text-base" : "rounded-md px-3 text-[0.9375rem] lg:px-[1.125rem]",
        )}
      >
        {button}
      </button>
    </form>
  );
}

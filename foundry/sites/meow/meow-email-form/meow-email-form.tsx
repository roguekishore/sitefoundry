import { cn } from "@foundry/foundry-utils";
import { MeowButton } from "@foundry/meow-button";

export interface MeowEmailFormProps {
  /** the hint inside the field, e.g. "Your work email" */
  placeholder: string;
  /** the field's label for screen readers */
  label: string;
  /** the button's text */
  button: string;
  /** where the form is sent (GET) */
  action?: string;
  /** frost: light, see-through box for dark backdrops · card: white box with a hairline */
  surface?: "frost" | "card";
  /** the button's colour: primary (orange) or accent (blue) */
  tone?: "primary" | "accent";
  className?: string;
}

/** One field and a button in a single box, as under Meow's hero and in its closing band. */
export function MeowEmailForm({ placeholder, label, button, action, surface = "card", tone = "primary", className }: MeowEmailFormProps) {
  return (
    <form
      action={action}
      method="get"
      className={cn(
        "flex h-[3.625rem] w-full items-center gap-2 rounded-lg border p-1 pl-4",
        surface === "frost"
          ? "border-foreground/40 bg-foreground/80 text-background"
          : "border-border bg-card text-card-foreground",
        className,
      )}
    >
      <label className="min-w-0 flex-1">
        <span className="sr-only">{label}</span>
        <input
          type="email"
          name="email"
          required
          placeholder={placeholder}
          className={cn(
            "h-12 w-full bg-transparent text-base outline-none",
            surface === "frost" ? "placeholder:text-background/80" : "placeholder:text-card-foreground/90",
          )}
        />
      </label>
      <MeowButton type="submit" size="lg" variant={tone === "accent" ? "accent" : "primary"}>
        {button}
      </MeowButton>
    </form>
  );
}

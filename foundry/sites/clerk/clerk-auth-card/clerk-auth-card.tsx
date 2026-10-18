import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ClerkButton } from "@foundry/clerk-button";
import "./clerk-auth-card.css";

export interface ClerkAuthProvider {
  label: string;
  icon?: ReactNode;
  /** small tag hanging off the top-right corner (e.g. "Last used") */
  badge?: string;
}

export interface ClerkAuthField {
  label: string;
  placeholder: string;
  /** shown typed into the field; with `typing` it types itself in, letter by letter */
  value?: string;
  typing?: boolean;
}

export interface ClerkAuthCardProps {
  title: string;
  subtitle?: string;
  /** one button per sign-in provider */
  providers?: ClerkAuthProvider[];
  /** word on the rule between providers and fields (e.g. "or") */
  divider?: string;
  fields?: ClerkAuthField[];
  /** label of the graphite submit button */
  submit: string;
  /** grey strip under the card: text plus a link label */
  footer?: { text: string; link: string };
  className?: string;
}

export function ClerkAuthCard({ title, subtitle, providers = [], divider, fields = [], submit, footer, className }: ClerkAuthCardProps) {
  return (
    <div
      className={cn(
        "w-full max-w-[22.5rem] overflow-hidden rounded-xl bg-muted text-left font-sans text-foreground",
        "shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_7%,transparent),0_5px_15px_color-mix(in_oklab,var(--foreground)_8%,transparent),0_15px_35px_-5px_color-mix(in_oklab,var(--foreground)_10%,transparent)]",
        className,
      )}
    >
      <div className="rounded-b-xl bg-card px-8 pt-8 pb-10 shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_6%,transparent)] max-sm:px-6">
        <p className="text-center text-[1.0625rem] leading-6 font-bold">{title}</p>
        {subtitle && <p className="mt-1 text-center text-xs leading-[1.125rem] text-muted-foreground">{subtitle}</p>}

        {providers.length > 0 && (
          <div className="mt-6 space-y-2">
            {providers.map((p) => (
              <div key={p.label} className="relative">
                <ClerkButton variant="outline" block icon={p.icon} className="h-8 font-medium">
                  {p.label}
                </ClerkButton>
                {p.badge && (
                  <span className="absolute -top-2.5 right-0 rounded-md bg-muted px-1.5 py-0.5 text-[0.6875rem] leading-4 text-muted-foreground ring-1 ring-border">
                    {p.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}

        {divider && (
          <div className="my-6 flex items-center gap-4 text-[0.8125rem] text-muted-foreground">
            <span className="h-px flex-1 bg-border" />
            {divider}
            <span className="h-px flex-1 bg-border" />
          </div>
        )}

        <div className="space-y-6">
          {fields.map((f) => (
            <div key={f.label}>
              <p className="text-[0.8125rem] leading-6 font-medium">{f.label}</p>
              <div className="mt-1.5 flex h-8 items-center overflow-hidden rounded-md bg-card px-3 text-[0.8125rem] shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_11%,transparent),0_1px_1px_color-mix(in_oklab,var(--foreground)_4%,transparent)]">
                {f.value ? (
                  <span
                    className={cn("whitespace-nowrap", f.typing && "clerk-typing motion-reduce:animate-none")}
                    style={f.typing ? ({ "--chars": f.value.length } as CSSProperties) : undefined}
                  >
                    {f.value}
                  </span>
                ) : (
                  <span className="text-muted-foreground">{f.placeholder}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <ClerkButton caret block className="mt-8">
          {submit}
        </ClerkButton>
      </div>
      {footer && (
        <p className="py-4 text-center text-[0.8125rem] text-muted-foreground">
          {footer.text} <span className="font-medium text-foreground">{footer.link}</span>
        </p>
      )}
    </div>
  );
}

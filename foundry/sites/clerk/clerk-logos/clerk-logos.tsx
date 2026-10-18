import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./clerk-logos.css";

export interface ClerkLogo {
  /** the company's name, for screen readers */
  name: string;
  /** the wordmark (an svg, img or styled text) */
  logo: ReactNode;
}

export interface ClerkLogosProps {
  /** up to ten logos; logo n and n+5 share a slot and take turns */
  logos: ClerkLogo[];
  /** colour behind the strip: card (white, continuing the hero) or background */
  surface?: "card" | "background";
  className?: string;
}

export function ClerkLogos({ logos, surface = "card", className }: ClerkLogosProps) {
  const slots = Array.from({ length: 5 }, (_, i) => [logos[i], logos[i + 5]] as const).filter(([a]) => a);
  return (
    <section className={cn(surface === "card" ? "bg-card" : "bg-background", "text-foreground", className)}>
      <ul className="mx-auto grid max-w-page grid-cols-2 px-gutter pt-10 pb-16 lg:grid-cols-5 lg:py-12">
        {slots.map(([a, b], i) => (
          <li key={a!.name} className={cn("relative grid h-[4.75rem] place-items-center lg:h-24", i === 4 && "hidden lg:grid")}>
            <span
              className={cn("flex items-center [grid-area:1/1] [&_svg]:h-7 [&_svg]:w-auto", b && "clerk-logo-a")}
              style={b ? { animationDelay: `${i * 0.2}s` } : undefined}
              aria-label={a!.name}
              role="img"
            >
              {a!.logo}
            </span>
            {b && (
              <span
                className="clerk-logo-b flex items-center [grid-area:1/1] [&_svg]:h-7 [&_svg]:w-auto"
                style={{ animationDelay: `${i * 0.2 - 6}s` }}
                aria-label={b.name}
                role="img"
              >
                {b.logo}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

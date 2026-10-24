import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ResendButton } from "@foundry/resend-button";
import { ResendFrame } from "@foundry/resend-frame";

export interface ResendLogo {
  /** the company's name, for screen readers */
  name: string;
  /** the wordmark (an svg, img or styled text) */
  logo: ReactNode;
}

export interface ResendLogosProps {
  /** the line above the logos; each entry is a line */
  text: string[];
  /** up to twelve logos (six on phones) */
  logos: ResendLogo[];
  /** the grey link under the grid */
  link?: { label: string; href: string };
  className?: string;
}

export function ResendLogos({ text, logos, link, className }: ResendLogosProps) {
  return (
    <section className={cn("bg-background px-0 text-foreground lg:px-gutter", className)}>
      <ResendFrame>
        <div className="flex flex-col items-center px-gutter pt-[3.75rem] pb-14 lg:pt-[6.25rem] lg:pb-24">
          <p className="text-center text-base leading-[1.7] text-muted-foreground">
            {text.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </p>
          <ul className="mt-10 grid w-full max-w-[63rem] grid-cols-2 lg:mt-12 lg:grid-cols-6">
            {logos.slice(0, 12).map((l, i) => (
              <li key={l.name} className={cn("flex h-24 items-center justify-center", i >= 6 && "hidden lg:flex")}>
                <span role="img" aria-label={l.name} className="flex items-center text-foreground [&_svg]:h-8 [&_svg]:w-auto">
                  {l.logo}
                </span>
              </li>
            ))}
          </ul>
          {link && (
            <ResendButton href={link.href} variant="ghost" chevron className="mt-8 lg:mt-10">
              {link.label}
            </ResendButton>
          )}
        </div>
      </ResendFrame>
    </section>
  );
}

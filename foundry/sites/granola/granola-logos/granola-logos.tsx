import { Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./granola-logos.css";

export interface GranolaLogo {
  /** the customer's name, set in type */
  name: string;
  /** which face sets the name, for a little variety along the wall */
  face?: "sans" | "serif" | "mono";
}

export interface GranolaLogosProps {
  /** the huge serif line on white above the band (sized to the window width) */
  headline: string;
  /** the small serif line at the top of the dark band */
  title: string;
  /** the customer names: 3 per row on phones, 6 per row from lg */
  logos: GranolaLogo[];
  className?: string;
}

const faces = {
  sans: "font-sans font-semibold tracking-[-0.03em]",
  serif: "font-display font-medium tracking-[-0.01em]",
  mono: "font-mono font-medium tracking-[-0.04em]",
};

export function GranolaLogos({ headline, title, logos, className }: GranolaLogosProps) {
  const lastRowStart = logos.length - (logos.length % 6 || 6);
  return (
    <section className={cn("granola-logos relative overflow-clip bg-background text-foreground", className)}>
      {/* the headline sits under the band and slides down beneath it as the section scrolls away */}
      <div className="relative z-0 px-gutter pt-6 lg:pt-8">
        <h2 className="granola-logos-headline text-center font-display text-[12.3vw] leading-[1.3] tracking-[-0.01em] whitespace-nowrap lg:text-[min(11.3vw,12rem)] lg:leading-[1.05]">
          {headline}
        </h2>
      </div>

      <div className="dark relative z-10 bg-background pt-[4.5rem] pb-4 text-foreground lg:pb-0">
        <p className="text-center font-display text-xl leading-tight font-medium">
          <span className="granola-logos-shimmer inline-block">{title}</span>
        </p>
        <ul className="mx-auto grid w-full max-w-[calc(var(--page-width)_+_2*var(--page-gutter))] grid-cols-3 px-gutter lg:grid-cols-6">
          {logos.map((logo, i) => (
            <li key={logo.name} className="relative flex h-24 items-center justify-center lg:h-[12.5rem]">
              <span className={cn("text-lg whitespace-nowrap text-foreground lg:text-[1.375rem]", faces[logo.face ?? "sans"])}>{logo.name}</span>
              {/* a faint + where four cells meet (desktop) */}
              {i % 6 !== 5 && i < lastRowStart && (
                <Plus aria-hidden className="absolute -right-2 -bottom-2 hidden size-4 stroke-1 text-foreground/40 lg:block" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

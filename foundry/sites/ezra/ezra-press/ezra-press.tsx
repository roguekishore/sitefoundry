import { cn } from "@foundry/foundry-utils";

const styles = {
  /** a bold, tight serif masthead */
  serif: "font-display text-[1.1875rem] font-bold tracking-[-0.02em] sm:text-[1.375rem] lg:text-[1.5rem]",
  /** a light, wide-set serif */
  light: "font-display text-[1.3125rem] font-light sm:text-[1.5rem] lg:text-[1.75rem]",
  /** an italic serif */
  italic: "font-display text-[1.1875rem] font-medium italic sm:text-[1.375rem] lg:text-[1.5rem]",
  /** small spaced capitals */
  caps: "font-display text-[0.875rem] font-medium tracking-[0.06em] uppercase sm:text-[1.0625rem] lg:text-[1.125rem]",
  /** a heavy condensed-looking sans */
  sans: "font-sans text-[1.0625rem] font-extrabold tracking-[-0.04em] uppercase sm:text-[1.25rem] lg:text-[1.375rem]",
} as const;

export interface EzraPressName {
  /** the publication's name */
  name: string;
  /** how its masthead is set */
  style?: keyof typeof styles;
}

export interface EzraPressProps {
  /** the tiny caps label above ("As seen in") */
  label: string;
  /** the publications, in order; they wrap into centred rows */
  names: EzraPressName[];
  className?: string;
}

/** A centred row of publication names under a tiny caps label. */
export function EzraPress({ label, names, className }: EzraPressProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto box-content max-w-[66rem] px-gutter pt-12 pb-11 text-center lg:pt-7 lg:pb-9">
        <p className="text-xs uppercase">{label}</p>
        <ul className="mx-auto mt-9 grid max-w-[22rem] grid-cols-2 items-center justify-items-center gap-x-4 gap-y-8 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-x-12 sm:gap-y-12 lg:mt-5">
          {names.map((item) => (
            <li key={item.name} className={cn("leading-none whitespace-nowrap", styles[item.style ?? "serif"])}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

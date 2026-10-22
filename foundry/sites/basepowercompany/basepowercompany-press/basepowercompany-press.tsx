import { cn } from "@foundry/foundry-utils";
import "./basepowercompany-press.css";

export interface BasepowercompanyPressName {
  /** the publication's name, set as plain text */
  name: string;
  /** how the name is set, so the row reads like a mix of mastheads */
  look?: "caps" | "heavy" | "italic" | "light" | "stacked";
}

export interface BasepowercompanyPressProps {
  /** the small uppercase line above the row */
  label: string;
  /** the publications; the row repeats them in an endless slide */
  names: BasepowercompanyPressName[];
  /** seconds for one full pass of the list */
  duration?: number;
  className?: string;
}

const looks = {
  caps: "text-[0.9375rem] font-bold tracking-[0.14em] uppercase",
  heavy: "text-[1.625rem] font-black tracking-[-0.05em]",
  italic: "text-xl font-bold tracking-[-0.025em] italic",
  light: "text-2xl font-light tracking-[0.02em]",
  stacked: "max-w-[7rem] text-center text-[0.9375rem] leading-[0.95] font-bold tracking-[0.04em] uppercase",
};

function Row({ names, hidden }: { names: BasepowercompanyPressName[]; hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0">
      {names.map((n, i) => (
        <li key={`${n.name}-${i}`} className="flex h-16 w-[12.25rem] shrink-0 items-center justify-center px-4 text-muted-foreground/80">
          <span className={cn("font-display whitespace-nowrap", looks[n.look ?? "caps"], n.look === "stacked" && "whitespace-normal")}>{n.name}</span>
        </li>
      ))}
    </ul>
  );
}

/* A stone band under the hero: a quiet uppercase label and a row of press names sliding left
   for ever, faded out at both edges. */
export function BasepowercompanyPress({ label, names, duration = 40, className }: BasepowercompanyPressProps) {
  return (
    <section className={cn("bg-background pt-10 pb-4 text-foreground lg:pb-0", className)}>
      <p className="px-gutter text-center text-sm leading-[1.5] tracking-[-0.005em] text-muted-foreground uppercase">{label}</p>
      <div className="relative mx-auto mt-6 max-w-page overflow-clip">
        <div className="bp-press-track flex w-max" style={{ animationDuration: `${duration}s` }}>
          <Row names={names} />
          <Row names={names} hidden />
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-background to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-background to-transparent" />
      </div>
    </section>
  );
}

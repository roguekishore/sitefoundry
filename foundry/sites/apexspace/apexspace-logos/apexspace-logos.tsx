import { cn } from "@foundry/foundry-utils";
import "./apexspace-logos.css";

export interface ApexspaceCustomer {
  /** the customer's name, shown as a text mark */
  name: string;
  /** how the name is set: sans (bold), display (wide caps) or mono (small caps) */
  style?: "sans" | "display" | "mono";
}

export interface ApexspaceLogosProps {
  /** the line above the strip */
  text: string;
  /** the customers, one tile each */
  customers: ApexspaceCustomer[];
  className?: string;
}

const nameStyles = {
  sans: "font-sans text-[1.0625rem] leading-[1.1] font-bold tracking-[-0.01em]",
  display: "font-display text-[1.375rem] leading-none font-medium tracking-[0.08em] uppercase",
  mono: "font-mono text-[0.75rem] leading-[1.4] tracking-[0.14em] uppercase",
};

function Tiles({ customers, hidden }: { customers: ApexspaceCustomer[]; hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className={cn("flex shrink-0 lg:w-full", hidden && "lg:hidden")}>
      {customers.map((c) => (
        <li key={c.name} className="mr-px flex size-[11.875rem] shrink-0 items-center justify-center bg-card px-6 text-center text-card-foreground lg:size-auto lg:aspect-square lg:flex-1 lg:last:mr-0">
          <span className={nameStyles[c.style ?? "sans"]}>{c.name}</span>
        </li>
      ))}
    </ul>
  );
}

/** One line of text over an edge-to-edge strip of black name tiles; loops sideways on phones. */
export function ApexspaceLogos({ text, customers, className }: ApexspaceLogosProps) {
  return (
    <section className={cn("bg-background py-section text-foreground", className)}>
      <p className="max-w-[48rem] px-gutter text-[length:clamp(1.125rem,1.05rem_+_0.18vw,1.25rem)] leading-[1.4]">{text}</p>
      <div className="mt-9 overflow-clip motion-reduce:overflow-x-auto lg:motion-reduce:overflow-clip">
        <div className="apexspace-logos-track flex w-max lg:w-full">
          <Tiles customers={customers} />
          <Tiles customers={customers} hidden />
        </div>
      </div>
    </section>
  );
}

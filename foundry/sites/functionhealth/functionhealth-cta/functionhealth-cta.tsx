import { cn } from "@foundry/foundry-utils";
import { FunctionhealthButton } from "@foundry/functionhealth-button";
import { FunctionhealthHeading, type HeadingPart } from "@foundry/functionhealth-heading";

export interface FunctionhealthCtaProps {
  title: HeadingPart[];
  text: string;
  /** two pills: the first solid, the second an outline */
  actions: { label: string; href: string }[];
  className?: string;
}

export function FunctionhealthCta({ title, text, actions, className }: FunctionhealthCtaProps) {
  return (
    <section className={cn("bg-card py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <FunctionhealthHeading title={title} text={text} textClassName="mt-5 text-lg lg:text-xl" />
        <div className="mt-10 flex flex-wrap justify-center gap-3 lg:mt-[4.25rem] lg:gap-4">
          {actions.map((a, i) => (
            <FunctionhealthButton key={a.href + a.label} href={a.href} variant={i === 0 ? "solid" : "outline"}>
              {a.label}
            </FunctionhealthButton>
          ))}
        </div>
      </div>
    </section>
  );
}

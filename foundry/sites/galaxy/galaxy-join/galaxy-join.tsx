import { cn } from "@foundry/foundry-utils";

export interface GalaxyJoinPanel {
  /** the panel's title */
  title: string;
  /** one or two lines of grey copy */
  text: string;
  /** the underlined link */
  link: { label: string; href: string };
}

export interface GalaxyJoinProps {
  /** the panels (two on the original) */
  panels: GalaxyJoinPanel[];
  className?: string;
}

export function GalaxyJoin({ panels, className }: GalaxyJoinProps) {
  return (
    <section className={cn("bg-background py-section text-foreground lg:pt-16 lg:pb-28", className)}>
      <div className="mx-auto grid max-w-page gap-12 px-gutter lg:grid-cols-2 lg:gap-0">
        {panels.map((panel, i) => (
          <div key={panel.title} className={cn("px-4 lg:px-8 lg:py-9", i > 0 && "lg:border-l lg:border-border lg:pl-20")}>
            <h2 className="font-display text-2xl leading-[1.3] font-[560] tracking-[-0.02em] lg:text-[2rem] lg:leading-[1.25]">{panel.title}</h2>
            <p className="mt-2 text-lg leading-6 text-muted-foreground lg:text-xl lg:leading-7">{panel.text}</p>
            <a
              href={panel.link.href}
              className="mt-4 inline-block text-base leading-6 underline underline-offset-2 transition-colors duration-300 ease-in-out hover:text-muted-foreground motion-reduce:transition-none"
            >
              {panel.link.label}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

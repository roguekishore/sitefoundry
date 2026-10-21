import { EsrbespokeTypeOn } from "./esrbespoke-type-on";

export default function Demo() {
  return (
    <div className="flex min-h-svh flex-col gap-10 bg-background p-8 text-foreground">
      <EsrbespokeTypeOn
        as="p"
        className="max-w-[16rem] font-mono text-[0.875rem] leading-none tracking-[0.09em] uppercase"
        text="Three decades of putting fine cars back the way they left the works."
      />
      <EsrbespokeTypeOn as="p" className="font-display text-[2.5rem] leading-none font-medium" text="Letters arrive one by one." step={30} delay={400} />
    </div>
  );
}

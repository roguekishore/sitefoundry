import { ZettaJouleReveal } from "./zetta-joule-reveal";

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-24 text-foreground">
      <div className="h-[60svh]" />
      <ZettaJouleReveal variant="lines" as="p" className="max-w-2xl font-display text-3xl font-[250] leading-tight">
        Steady heat for the plants that make everything else, delivered from a reactor that never sleeps.
      </ZettaJouleReveal>
      <ZettaJouleReveal className="mt-8 w-fit rounded-sm border border-border px-4 py-3 text-sm font-medium">A rising card</ZettaJouleReveal>
      <div className="h-[60svh]" />
    </div>
  );
}

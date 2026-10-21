import { EsrbespokeParallax } from "./esrbespoke-parallax";

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <EsrbespokeParallax drift="exit" className="h-svh" />
      <div className="h-[50svh]" />
      <EsrbespokeParallax className="aspect-[393/481] lg:aspect-[16/10]" fadeIn />
      <div className="h-[50svh]" />
      <EsrbespokeParallax className="mx-gutter aspect-[4/3]" drift="none" />
      <div className="h-[50svh]" />
    </div>
  );
}

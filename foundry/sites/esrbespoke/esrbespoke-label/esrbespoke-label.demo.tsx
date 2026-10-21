import { EsrbespokeLabel } from "./esrbespoke-label";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6 bg-background p-8 text-foreground">
      <EsrbespokeLabel as="h2">Tailored work</EsrbespokeLabel>
      <EsrbespokeLabel className="max-w-[16rem] leading-[1.1]">Three decades of putting fine cars back the way they left the works.</EsrbespokeLabel>
      <EsrbespokeLabel quiet>Workshop</EsrbespokeLabel>
    </div>
  );
}

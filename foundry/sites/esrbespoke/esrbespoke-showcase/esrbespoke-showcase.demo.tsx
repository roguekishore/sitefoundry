import { EsrbespokeShowcase, type EsrbespokeShowcaseProps } from "./esrbespoke-showcase";

export const showcaseSample: EsrbespokeShowcaseProps = {
  nextLabel: "Next",
  slides: [
    { label: "The workshop entrance at dusk" },
    { label: "A bonnet under the inspection lights" },
    { label: "The paint booth, doors open" },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <div className="h-[60svh]" />
      <EsrbespokeShowcase {...showcaseSample} />
      <div className="h-[60svh]" />
    </div>
  );
}

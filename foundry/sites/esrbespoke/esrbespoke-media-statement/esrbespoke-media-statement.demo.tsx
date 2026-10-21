import { EsrbespokeMediaStatement, type EsrbespokeMediaStatementProps } from "./esrbespoke-media-statement";

export const detailsSample: EsrbespokeMediaStatementProps = {
  title: "The small things that matter",
  note: "Every repair and every part we fit is guaranteed for as long as you own the car. Genuine parts only, so the maker's warranty stays whole and ours sits on top of it.",
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <div className="h-[50svh]" />
      <EsrbespokeMediaStatement {...detailsSample} />
      <div className="h-[50svh]" />
    </div>
  );
}

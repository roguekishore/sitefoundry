import { EsrbespokeIndex, type EsrbespokeIndexProps } from "./esrbespoke-index";

export const indexSample: EsrbespokeIndexProps = {
  label: "What we do",
  tone: "dark",
  items: [
    { title: "Insurer-approved repairs" },
    { title: "Claim handling, start to finish" },
    { title: "Private restoration commissions" },
    { title: "Paint correction, ceramic and clear-film protection" },
    { title: "Enclosed transport and collection" },
    { title: "Loan cars of a matching standard" },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <EsrbespokeIndex {...indexSample} />
      <EsrbespokeIndex {...indexSample} tone="light" />
    </div>
  );
}

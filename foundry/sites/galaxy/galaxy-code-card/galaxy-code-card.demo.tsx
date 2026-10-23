import { GalaxyCodeCard, type GalaxyCodeCardProps } from "./galaxy-code-card";

export const codeCardSample: GalaxyCodeCardProps = {
  label: "// brightrail.ledger",
  lines: [
    [{ text: "// a payout, cleared onchain", kind: "comment" }],
    [
      { text: "clear(" },
      { text: "amount", kind: "key" },
      { text: ": " },
      { text: '"EUR"', kind: "string" },
      { text: ", " },
      { text: "via", kind: "key" },
      { text: ": " },
      { text: '"ledger"', kind: "string" },
      { text: ")" },
    ],
    [
      { text: "→ ", kind: "muted" },
      { text: "settled in " },
      { text: "moments", kind: "string" },
      { text: ", fee " },
      { text: "< €0.02", kind: "muted" },
    ],
  ],
  indented: [2],
};

export default function Demo() {
  return (
    <div className="bg-background p-8">
      <GalaxyCodeCard {...codeCardSample} className="max-w-[35rem]" />
    </div>
  );
}

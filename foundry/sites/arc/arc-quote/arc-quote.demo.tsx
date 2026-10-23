import { ArcQuote, type ArcQuoteProps } from "./arc-quote";

export const quoteSample: ArcQuoteProps = {
  quote:
    "Basin changed how we run money. We closed a growth credit line in under three weeks, swept it straight into reserves and now earn on every idle dollar, while the analyst agent drafts our board reporting before I ask for it.",
  attribution: "Mira Okafor, CFO and co-founder of Lattice Lane",
  footnote: "6",
};

export default function Demo() {
  return <ArcQuote {...quoteSample} />;
}

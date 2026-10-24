import type { K2spaceQuoteProps } from "./k2space-quote";
import { K2spaceQuote } from "./k2space-quote";

export const quoteSample: K2spaceQuoteProps = {
  quote: "Everyone was shrinking spacecraft. We wanted to see what room to spare would buy.",
  attribution: "Ines Varga, Head of Engineering",
  action: { label: "Read more", href: "#company" },
};

export default function Demo() {
  return <K2spaceQuote {...quoteSample} />;
}

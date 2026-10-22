import { BasepowercompanySwash } from "@foundry/basepowercompany-swash";
import { BasepowercompanyQuote, type BasepowercompanyQuoteProps } from "./basepowercompany-quote";

export const quoteSample: BasepowercompanyQuoteProps = {
  quote: (
    <>
      “I came for the backup and stayed for the bill. Since switching, I'm <BasepowercompanySwash>paying a fifth less</BasepowercompanySwash> for power at
      our place in Galveston.”
    </>
  ),
  name: "Marisol Vega",
  lines: ["Two-time state softball champion", "Porchlight backer and member"],
  cta: { label: "Read more", href: "#marisol" },
  mediaLabel: "A woman leaning against a garden wall beside a home battery",
};

export default function Demo() {
  return <BasepowercompanyQuote {...quoteSample} />;
}

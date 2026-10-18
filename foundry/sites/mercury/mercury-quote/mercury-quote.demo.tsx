// Sample content lives here (gallery only); the page reuses it.
import { MercuryQuote, type MercuryQuoteProps } from "./mercury-quote";

export const quoteSample: MercuryQuoteProps = {
  quote: "“Larkspur reset what I expect a bank to do. The care in the product is far beyond anything a traditional bank has offered us.”",
  name: "Mira Lindqvist",
  role: "Founder and CEO, Quillmark",
};

export default function Demo() {
  return (
    <div className="bg-background">
      <MercuryQuote {...quoteSample} />
    </div>
  );
}

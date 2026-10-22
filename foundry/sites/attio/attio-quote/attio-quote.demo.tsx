// Sample content lives here (gallery only); the page reuses it. The person is made up.
import { AttioQuote, type AttioQuoteProps } from "./attio-quote";

export const quoteSample: AttioQuoteProps = {
  quote: "“Ten minutes into the trial I knew we had stopped shopping for a CRM and started using one.”",
  name: "Odile Marchetti",
  role: "VP Revenue Operations · Kestrel",
};

export default function Demo() {
  return <AttioQuote {...quoteSample} />;
}

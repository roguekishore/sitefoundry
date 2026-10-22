// Sample content lives here (gallery only); the page reuses it. Fernwick and Ada Lin are made up.
import { Leaf } from "lucide-react";
import { MeowQuote, type MeowQuoteProps } from "./meow-quote";

export const quoteSample: MeowQuoteProps = {
  company: (
    <span className="flex items-center gap-2">
      <Leaf aria-hidden className="size-5" strokeWidth={2.5} />
      Fernwick
    </span>
  ),
  quote:
    "\u201cWe moved four bank logins and two treasury tools into Tallyhold in an afternoon. Support answers in minutes, and for the first time our whole finance picture fits on a single screen\u201d",
  author: "Ada Lin, co-founder of Fernwick",
  fineprint:
    "Tallyhold is a software company, not a bank. Customer stories reflect one customer's experience and opinion; results differ from business to business. Stories were picked for reasons unrelated to how well each account performed.",
};

export default function Demo() {
  return <MeowQuote {...quoteSample} />;
}

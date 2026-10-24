import type { ParsleyhealthQuoteProps } from "./parsleyhealth-quote";
import { ParsleyhealthQuote } from "./parsleyhealth-quote";

export const quoteSample: ParsleyhealthQuoteProps = {
  quote:
    "\u201cTwelve years of specialists and elimination diets got me nowhere. My Halden team found the reason in two months, and I finally wake up rested.\u201d",
  author: "Dana R.",
  starsLabel: "Rated 5 out of 5",
  action: { label: "Become a member", href: "#" },
};

export default function Demo() {
  return <ParsleyhealthQuote {...quoteSample} />;
}

// Sample content (gallery only); the companies and people are made up.
import { ModerntreasuryQuote, type ModerntreasuryQuoteProps } from "./moderntreasury-quote";

export const quoteSample: ModerntreasuryQuoteProps = {
  prevLabel: "Previous story",
  nextLabel: "Next story",
  stories: [
    {
      company: "Brightkeel.",
      quote: "Our drivers expect to be paid the moment a job closes, by whichever rail they picked. With Kestrel we wrote the payout once and it goes out over all of them.",
      name: "Teodora Vance",
      role: "VP of Finance, Brightkeel",
      link: { label: "See the case study", href: "#" },
    },
    {
      company: "Oakhollow",
      quote: "We replaced three bank portals and a weekly spreadsheet with one ledger. Month-end close went from five days to an afternoon.",
      name: "Marcus Iwu",
      role: "Controller, Oakhollow",
      link: { label: "See the case study", href: "#" },
    },
  ],
};

export default function Demo() {
  return <ModerntreasuryQuote {...quoteSample} />;
}

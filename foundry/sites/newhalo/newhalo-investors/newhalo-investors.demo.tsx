import { Orbit } from "lucide-react";
import { NewhaloInvestors, type NewhaloInvestorsProps } from "./newhalo-investors";

export const investorsSample: NewhaloInvestorsProps = {
  brand: "Brio",
  brandIcon: <Orbit strokeWidth={2.25} />,
  eyebrow: "Investor room",
  title: "Pick a document.",
  intro: "Each file sits behind its own access code.",
  documents: [
    { title: "The deck", text: "A short tour of Brio, Lumen One, the platform around it and where it can go.", href: "#deck", linkLabel: "Open the deck →" },
    { title: "The memo", text: "The longer read, linked to the supporting files in the data room.", href: "#memo", linkLabel: "Open the memo →" },
  ],
  note: "Brio Instruments",
};

export default function Demo() {
  return <NewhaloInvestors {...investorsSample} />;
}

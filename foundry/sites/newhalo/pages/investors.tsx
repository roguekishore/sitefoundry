// Investor access page (recreating halodental.com/investors/): a standalone card.
import { NewhaloInvestors } from "@foundry/newhalo-investors";
import { investorsSample } from "../newhalo-investors/newhalo-investors.demo";

export default function InvestorsPage() {
  return <NewhaloInvestors {...investorsSample} />;
}

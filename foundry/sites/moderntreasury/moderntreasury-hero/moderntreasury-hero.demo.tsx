import { ModerntreasuryHero, type ModerntreasuryHeroProps } from "./moderntreasury-hero";

export const heroSample: ModerntreasuryHeroProps = {
  title: "The Rails Behind Your Product",
  lead: "Ship in a week with one API to verify customers, hold balances and move money over bank rails and stablecoins, with risk checks and a ledger built in.",
  primary: { label: "Book a call", href: "#" },
  secondary: { label: "Get API keys", href: "#" },
  mediaLabel: "Diagram of payment rails meeting at one API",
};

export default function Demo() {
  return <ModerntreasuryHero {...heroSample} />;
}

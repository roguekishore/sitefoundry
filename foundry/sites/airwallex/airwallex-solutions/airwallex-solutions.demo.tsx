// Sample content lives here (gallery only); the page reuses it. Fernhold is made up.
import { Blocks, CreditCard, Landmark, ReceiptText, Wallet } from "lucide-react";
import { AirwallexSolutions, type AirwallexSolutionsProps } from "./airwallex-solutions";

export const solutionsSample: AirwallexSolutionsProps = {
  eyebrow: "Why Fernhold?",
  title: "Money tools built for companies that cross borders",
  intro:
    "From a two-person studio selling abroad to a marketplace paying thousands of sellers, Fernhold gives you the same fast rails, honest rates and automation, so growing into a new country feels like opening a new tab.",
  items: [
    { title: "Wallets", description: "Hold and move money in 40 currencies", href: "#", icon: <Wallet aria-hidden strokeWidth={2.5} />, tone: "orange" },
    { title: "Spend", description: "Cards, bills and expenses in one flow", href: "#", icon: <CreditCard aria-hidden strokeWidth={2.5} />, tone: "violet" },
    { title: "Collect", description: "Get paid in local methods everywhere", href: "#", icon: <Landmark aria-hidden strokeWidth={2.5} />, tone: "blue" },
    { title: "Invoicing", description: "Bill on time and chase less", href: "#", icon: <ReceiptText aria-hidden strokeWidth={2.5} />, tone: "teal" },
    { title: "Build", description: "Put money movement in your own app", href: "#", icon: <Blocks aria-hidden strokeWidth={2.5} />, tone: "magenta" },
  ],
};

export default function Demo() {
  return <AirwallexSolutions {...solutionsSample} />;
}

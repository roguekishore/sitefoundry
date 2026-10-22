// Sample content lives here (gallery only); the page reuses it. Tallyhold is made up.
import { MeowFeatureRows, type MeowFeatureRowsProps } from "./meow-feature-rows";

export const featureRowsSample: MeowFeatureRowsProps = {
  title: "A checking account that pulls its weight",
  fineprint:
    "Tallyhold is a software company, not a bank. Accounts are held at our partner banks; deposit cover protects you only if a partner bank fails.***",
  rows: [
    {
      title: "Wires that cost nothing",
      text: "We don't charge for wires or bank transfers, at home or abroad. What you send is what arrives.",
      points: ["No transfer fees, local or cross-border", "Free cheque writing and cheque deposits"],
      link: { label: "See the details", href: "#" },
    },
    {
      title: "Spending, kept on a leash",
      text: "Give each person a sending limit and route big payments through an approval step. You stay in charge without chasing anyone.",
      points: ["Pick who can start and who can approve payments", "Set card limits for each person, virtual or plastic"],
      link: { label: "See the details", href: "#" },
    },
    {
      title: "Get your afternoons back",
      text: "Scheduled payments, bulk payouts from a spreadsheet and rules that run themselves, so money admin stops eating the week.",
      points: ["Repeat transfers, wires and invoices on a schedule", "Every company you run, behind one login"],
      link: { label: "See the details", href: "#" },
    },
  ],
};

export default function Demo() {
  return <MeowFeatureRows {...featureRowsSample} />;
}

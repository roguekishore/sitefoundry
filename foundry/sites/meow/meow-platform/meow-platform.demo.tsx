// Sample content lives here (gallery only); the page reuses it. Tallyhold is made up.
import { MeowPlatform, type MeowPlatformProps } from "./meow-platform";

export const platformSample: MeowPlatformProps = {
  title: "Everything a company account should do.",
  rows: [
    {
      cards: [
        { title: "Spend cards", text: "Hand out virtual and plastic cards with a limit for each person. No annual fee, no credit check.*" },
        { title: "Transfers without fees", text: "Schedule one-off and repeat payments by bank transfer or wire, and send paper cheques free." },
        { title: "Bills and invoices", text: "Send invoices in your own colours, with your logo, and get paid by transfer or card." },
      ],
      fineprint:
        "Tallyhold is a software company, not a bank. Spend cards are issued by our card partner under licence from the card network. Accounts are held at our partner banks.",
    },
    {
      cards: [
        { title: "Connections", text: "Plug into the payroll, books and expense tools you already pay for." },
        { title: "Approvals", text: "Choose who can start, who must sign off, and how much each person may send." },
        { title: "Credit lines", text: "Ask our lending partners for term loans, credit lines and growth capital." },
      ],
      fineprint:
        "Tallyhold does not lend money or make credit decisions. Loans come from our partners and depend on their approval; your terms may differ.",
    },
  ],
};

export default function Demo() {
  return <MeowPlatform {...platformSample} />;
}

import { BrexFeatures, type BrexFeaturesProps } from "./brex-features";

export const featuresSample: BrexFeaturesProps = {
  title: "Turbocharge how your team handles money.",
  subtitle: "Get the most from every dollar with smart limits, payments and bookkeeping.",
  features: [
    {
      title: "Set limits before money moves.",
      text: "Give every team a budget and let the card enforce it. Watch spending in real time and change a limit in a few taps when plans shift.",
      link: { label: "Explore the cards", href: "#" },
    },
    {
      title: "Make expense reports a non-event.",
      text: "Receipts attach themselves, an assistant fills in the memo and managers approve from their phone. Nobody chases anybody.",
      link: { label: "Explore expense tracking", href: "#" },
    },
    {
      title: "Put idle cash to work.",
      text: "Hold balances that earn, send money across borders in a day and keep a safety net of insured accounts behind it all.",
      link: { label: "Explore accounts", href: "#" },
    },
    {
      title: "Pay vendors without the paper.",
      text: "Invoices are read for you, routed to the right approver and paid on the due date. Issue a one-off card for any supplier.",
      link: { label: "Explore bill pay", href: "#" },
    },
    {
      title: "Close the books before lunch.",
      text: "Suggested codes, hundreds of ledger connections and one-click accruals keep the month-end checklist short.",
      link: { label: "Explore bookkeeping", href: "#" },
    },
  ],
};

export default function Demo() {
  return <BrexFeatures {...featuresSample} />;
}

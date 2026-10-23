// Sample content lives here (gallery only); the page reuses it. Fernhold is made up.
import { AirwallexFeature, type AirwallexFeatureProps } from "./airwallex-feature";

const action = { label: "Open account", href: "#" };

export const featureSamples: AirwallexFeatureProps[] = [
  {
    title: "Run every market from a single dashboard",
    body: "Stop stitching together a bank, a card provider, an FX desk and three spreadsheets. Fernhold puts accounts, cards, payments and reporting in one place, so the tools keep pace as the company grows.",
    action,
    side: "left",
  },
  {
    title: "Cut the cost of every transfer",
    body: "Collect in local currencies, send money in hours rather than days, keep revenue in the currency it arrived in and convert only when the rate suits you, with no markup hidden in card spend.",
    action,
    side: "right",
  },
  {
    title: "Close the books with less typing",
    body: "Receipts, categories and approvals flow straight into your ledger. Smart suggestions fill the fields, sync runs every hour, and month-end becomes a review instead of a scramble.",
    action,
    side: "left",
  },
];

export default function Demo() {
  return (
    <>
      {featureSamples.map((f) => (
        <AirwallexFeature key={f.title} {...f} />
      ))}
    </>
  );
}

// Sample content (gallery only); the page reuses it. The API and ids are made up.
import { ColumnDevelopers, type ColumnDevelopersProps } from "./column-developers";

export const developersSample: ColumnDevelopersProps = {
  eyebrow: "Built for builders",
  title: "A bank whose every surface is an API",
  lead: "Our engineers wrote it because the banks we used kept getting in the way.",
  action: { label: "Browse the API", href: "#" },
  notes: [
    {
      title: "No middlemen",
      body: "We wrote our own core, ledger and settlement stack, and plug straight into the central bank, the clearing houses and the card networks. You get the controls, not a reseller.",
    },
    {
      title: "Grows with you",
      body: "From the first test payout to a regulated lender's full book, one charter, one team and one balance sheet stay with you the whole way.",
    },
  ],
  codeLabel: "Response",
  code: `{
  "id": "pay_7HcR2nVq0Lw8ZkTe4mXo",
  "reversed_at": null,
  "direction": "OUTBOUND",
  "amount": 128450,
  "state": "QUEUED",
  "recipient_id": "rcp_51kTzQe8WvLm03YbPa2",
  "account_holder": "TIDEWELL NA",
  "internal": false,
  "same_day": true,
  "trace_number": "0219844713",
  "created_at": "2026-10-02T14:08:31Z",
  "settled_at": null,
  "updated_at": "2026-10-02T14:08:33Z",
  "rail": "ACH"
}`,
};

export default function Demo() {
  return <ColumnDevelopers {...developersSample} />;
}

import { RhoFees, type RhoFeesProps } from "./rho-fees";

export const feesSample: RhoFeesProps = {
  title: "Keep what you earn. Skip the fine print.",
  lead: "No seat licences, no platform subscription. Ostra grows with your headcount without growing your bill.",
  rows: [
    { label: "Outgoing domestic transfers", value: "$0", mark: "*" },
    { label: "Monthly account fee", value: "$0" },
    { label: "Low-balance penalties", value: "$0" },
    { label: "Card issuing and replacements", value: "$0" },
    { label: "Extra team members", value: "$0" },
    { label: "Payments in 30+ currencies", value: "0.8%" },
    { label: "Stop-payment requests", value: "$0" },
  ],
  footnote:
    "*Sample pricing for a fictional product, written for this demo. Real providers may charge for expedited delivery, currency conversion or intermediary-bank handling; nothing here is an offer.",
};

export default function Demo() {
  return <RhoFees {...feesSample} />;
}

// Sample content lives here (gallery only); the page reuses it.
import { Gem } from "lucide-react";
import { AnchoragePlatform, type AnchoragePlatformProps } from "./anchorage-platform";

export const platformSample: AnchoragePlatformProps = {
  title: ["One ledger.", "Every desk."],
  intro:
    "Quit wiring vendors together. Strata Reserve puts supervised custody, trading and settlement under one roof, so treasury teams move digital assets the way they move cash.",
  cards: [
    { title: ["Run every", "position calmly"], body: "Watch balances, approvals and wallets from one console built for audit trails." },
    { title: ["Issue, earn, settle", "— in one place"], body: "One login covers brokerage, payment rails and token programmes, with the same controls across them." },
  ],
  wide: {
    title: ["Oversight", "you can audit"],
    body: "Examined every year by federal supervisors, with reporting that a risk committee can read in one sitting.",
    figure: { value: "$218,450.06", icon: <Gem /> },
    checks: ["Identity verified", "Sanctions cleared", "Ready for review"],
  },
};

export default function Demo() {
  return (
    <div className="bg-background">
      <AnchoragePlatform {...platformSample} />
    </div>
  );
}

// Sample content lives here (gallery only); the page reuses it. All figures are made up.
import { Loader } from "lucide-react";
import { RampTicker, type RampTickerProps } from "./ramp-ticker";

export const tickerSample: RampTickerProps = {
  label: "Agents on shift today:",
  icon: <Loader aria-hidden strokeWidth={2} />,
  items: [
    { label: "Receipts matched", number: { start: 52_318, step: 7 } },
    { label: "Vendor replies", number: { start: 2_904, step: 3 } },
    { label: "Expenses checked", number: { start: 288_160, step: 21 } },
    { label: "Spend sorted", number: { start: 17_745, step: 5 } },
    { label: "Bills drafted", number: { start: 46_092, step: 6 } },
    { label: "Policy flags", number: { start: 0, step: 1, every: 9000 } },
    { label: "Total agent actions", number: { start: 8_127_530, step: 60 } },
  ],
};

export default function Demo() {
  return (
    <div className="bg-muted pt-24">
      <RampTicker {...tickerSample} sticky={false} />
    </div>
  );
}

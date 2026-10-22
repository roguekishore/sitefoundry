// Sample content lives here (gallery only); the page reuses it. All figures are made up.
import { AttioScale, type AttioScaleProps } from "./attio-scale";

export const scaleSample: AttioScaleProps = {
  badge: "Built for load",
  lead: "Grows with you.",
  rest: "Hardened for people and agents alike.",
  stats: [
    { value: "41M", label: "agent actions a month" },
    { value: "3.1B", label: "API calls a month" },
    { value: "58k", label: "agents running for customers" },
    { value: "19M", label: "messages synced a day" },
  ],
};

export default function Demo() {
  return <AttioScale {...scaleSample} />;
}

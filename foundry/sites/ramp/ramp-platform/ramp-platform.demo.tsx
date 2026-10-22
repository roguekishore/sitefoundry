// Sample content lives here (gallery only); the page reuses it.
import { RampPlatform, type RampPlatformProps } from "./ramp-platform";

export const platformSample: RampPlatformProps = {
  lead: "Every ledger in one place.",
  rest: "Agents that close the books overnight.",
  primary: { label: "Move over in a week", href: "#" },
  secondary: { label: "See it run", href: "#" },
  cards: [
    { lead: "Cards", rest: "that file their own receipts", href: "#" },
    { lead: "Purchasing", rest: "that never waits on a signature", href: "#" },
    { lead: "Bookkeeping", rest: "that ends the month-end scramble", href: "#" },
    { lead: "Treasury", rest: "that keeps idle cash earning", href: "#" },
    { lead: "180+ connections", rest: "to the apps you run today", href: "#" },
  ],
};

export default function Demo() {
  return <RampPlatform {...platformSample} />;
}

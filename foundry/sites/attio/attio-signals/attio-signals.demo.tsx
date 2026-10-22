// Sample content lives here (gallery only); the page reuses it. Tessel is a made-up CRM.
import { AttioSignals, type AttioSignalsProps } from "./attio-signals";

export const signalsSample: AttioSignalsProps = {
  badge: "Signals",
  lead: "Every hint, none of the chatter.",
  rest: "Sorted and ready to use.",
  action: { label: "Learn more", href: "#signals" },
  tabs: [
    { title: "Memory", text: "Threads, calls, records, product use and connected apps, always current." },
    { title: "Agents and flows", text: "Hand the busywork to agents and chain them into flows that run themselves." },
    { title: "Integrations", text: "Your tools feed in, and Tessel feeds them back." },
  ],
  mediaLabel: "Signals pulled into one place",
};

export default function Demo() {
  return <AttioSignals {...signalsSample} />;
}

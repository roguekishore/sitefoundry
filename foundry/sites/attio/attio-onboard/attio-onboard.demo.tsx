// Sample content lives here (gallery only); the page reuses it. Tessel is a made-up CRM.
import { AttioOnboard, type AttioOnboardProps } from "./attio-onboard";

export const onboardSample: AttioOnboardProps = {
  badge: "Sets itself up",
  lead: "Useful on the first morning.",
  rest: "Plug in your mail and your calendar. Tessel reads how your team works and lays out the records, stages and fields before an agent lifts a finger.",
  action: { label: "Try it free", href: "#start" },
  mediaLabel: "A contact record filled in automatically",
};

export default function Demo() {
  return <AttioOnboard {...onboardSample} />;
}

// Sample content lives here (gallery only); the page reuses it. All copy is ours.
import { MymindAi, type MymindAiProps } from "./mymind-ai";

export const aiSample: MymindAiProps = {
  eyebrow: "No effort needed",
  before: "Simply keep it. The",
  badge: "AI",
  after: "quietly does the sorting.",
  text: "Keep anything in one tap and carry on with your day. nook works out what it is and notes the details worth remembering, so you don't have to.",
  chip: "Keep in nook",
  link: { label: "How keeping things works", href: "#" },
};

export default function Demo() {
  return <MymindAi {...aiSample} />;
}

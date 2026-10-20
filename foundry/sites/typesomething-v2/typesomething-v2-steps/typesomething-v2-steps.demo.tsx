import type { TypesomethingV2StepsProps } from "./typesomething-v2-steps";
import { TypesomethingV2Steps } from "./typesomething-v2-steps";

export const stepsSample: TypesomethingV2StepsProps = {
  id: "steps",
  title: "How does it run?",
  subtitle: "Three messages to a site you never tend.",
  steps: [
    {
      number: "01",
      title: "Tell us what you sell",
      text: "Answer a short questionnaire or point us at the site you have now. We study your trade, your customers and your rivals, then hand-build fast, simple pages around them.",
    },
    {
      number: "02",
      title: "Change it by message",
      text: "No panels, no logins to forget. When something changes, write it down in the thread. A draft of the new page comes back for you to look over before anyone else sees it.",
    },
    {
      number: "03",
      title: "Approve and it's live",
      text: "One tap publishes the change. What goes out is lean, tidy code with nothing to patch and nothing to break, so pages open quickly on any phone.",
    },
  ],
};

export default function Demo() {
  return <TypesomethingV2Steps {...stepsSample} />;
}

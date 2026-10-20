// Sample content lives here (gallery only); the page reuses it.
import { RoveiaV2Steps, type RoveiaV2StepsProps } from "./roveia-v2-steps";

export const stepsSample: RoveiaV2StepsProps = {
  heading: "Three Moves to Steady Growth",
  steps: [
    { label: "Move 1", title: "A Close Look Inside", description: "Goals, numbers, patients, product: what is working and what isn't" },
    { label: "Move 2", title: "A Plan Worth Funding", description: "Channels, creative and budgets set out for the next quarter" },
    { label: "Move 3", title: "Turn It Up", description: "Launch, learn every week and put money behind what wins" },
  ],
};

export default function Demo() {
  return <RoveiaV2Steps {...stepsSample} />;
}

// Sample content lives here (gallery only); the page reuses it.
import { RoveiaSteps, type RoveiaStepsProps } from "./roveia-steps";

export const stepsSample: RoveiaStepsProps = {
  heading: "A Three-Part Growth Plan",
  steps: [
    { label: "Step 1", title: "Deep-Dive Review", description: "Map the goals, numbers, customers and offer" },
    { label: "Step 2", title: "Plan and Prioritise", description: "Choose the few bets worth making first" },
    { label: "Step 3", title: "Grow It", description: "Run the plan and widen what works" },
  ],
};

export default function Demo() {
  return <RoveiaSteps {...stepsSample} />;
}

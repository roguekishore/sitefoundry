import { SuperpowerSteps, type SuperpowerStepsProps } from "./superpower-steps";

export const stepsSample: SuperpowerStepsProps = {
  id: "how",
  title: "The year, step by step",
  lead: "It begins with one thorough blood panel, and keeps going from there.",
  steps: [
    { title: "Set your starting point", text: "A single draw maps where your health stands today.", mediaLabel: "Photo: a sleeve rolled up for a blood draw" },
    { title: "Read what counts", text: "Your results page shows what's on track, what's drifting, and what to look at first.", mediaLabel: "Photo: results on a phone" },
    { title: "Make a plan", text: "Wren, our AI guide, and your clinicians shape changes to food, sleep, supplements and care.", mediaLabel: "Photo: a runner at dusk" },
    { title: "Retest and adjust", text: "Your care team follows the trend and tells you what to change next.", mediaLabel: "Photo: a member resting at home" },
  ],
};

export default function Demo() {
  return <SuperpowerSteps {...stepsSample} />;
}

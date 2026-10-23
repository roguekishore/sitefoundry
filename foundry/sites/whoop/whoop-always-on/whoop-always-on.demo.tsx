import { WhoopAlwaysOn, type WhoopAlwaysOnProps } from "./whoop-always-on";

export const alwaysOnSample: WhoopAlwaysOnProps = {
  heading: "Made to stay on, day and night",
  steps: [
    {
      title: "Read everything that matters",
      body: "Kairos tracks the signals that shape your health most: sleep, effort, stress, recovery and heart rhythm.",
    },
    {
      title: "Get a clear next step",
      body: "Each reading turns into one plain suggestion for today, from bedtime to how hard to train.",
    },
    {
      title: "Wear it without noticing",
      body: "No screen, no buzzing, a week-plus battery and a charger that slides on while you wear it.",
    },
    {
      title: "Watch the change add up",
      body: "Weekly and monthly reports show how small habits move your numbers, so the good ones stick.",
    },
  ],
  labels: { track: "How Kairos works", dot: "Show step" },
};

export default function Demo() {
  return <WhoopAlwaysOn {...alwaysOnSample} />;
}

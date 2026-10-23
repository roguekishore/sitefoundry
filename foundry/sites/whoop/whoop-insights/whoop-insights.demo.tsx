import { WhoopInsights, type WhoopInsightsProps } from "./whoop-insights";

export const insightsSample: WhoopInsightsProps = {
  heading: "See the whole story of your body",
  body: "Round-the-clock readings of sleep, effort and stress add up to one clear picture, so each morning you know what your body can take on today.",
  items: [
    {
      title: "Know how ready you are today",
      detail: "A single readiness score each morning, built from overnight heart-rate rhythm, resting pulse and sleep, tells you whether to push or hold back.",
    },
    {
      title: "Sleep that works harder",
      detail: "Light, deep and dream sleep stages, a bedtime suggestion and a quiet wrist alarm that wakes you in your lightest phase.",
    },
    {
      title: "Effort, measured fairly",
      detail: "Every walk, lift and match is scored against your own fitness, so a hard day for you counts as a hard day.",
    },
    {
      title: "Stress you can see",
      detail: "A live stress reading through the day, with short breathing sessions when it climbs higher than usual.",
    },
    {
      title: "Your body's real age",
      detail: "A yearly-pace figure from fitness, sleep and heart health that shows whether your habits are adding years or taking them back.",
    },
  ],
  labels: { track: "What Kairos measures", dot: "Show card", open: "Read more", close: "Close" },
};

export default function Demo() {
  return <WhoopInsights {...insightsSample} />;
}

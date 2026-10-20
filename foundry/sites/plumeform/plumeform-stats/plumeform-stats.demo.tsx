// Sample content lives here (gallery only); the page reuses it. Tidewell is made up.
import { PlumeformStats, type PlumeformStatsProps } from "./plumeform-stats";

export const statsSample: PlumeformStatsProps = {
  eyebrow: "In short",
  title: "Start with 150 free answers a month.",
  stats: [
    { label: "free student answers, every month", value: "150", caption: "then quizzes pause until the month turns", shape: "tall" },
    { label: "answer types free, 28 on Plus", value: "19", caption: "uploads and the deeper tools are Plus" },
    { label: "for 8,000 answers / mo", value: "$12", caption: "billed monthly, cancel any time" },
    { label: "student sign-ups, ever", value: "0", caption: "students answer with a class code, no account", shape: "wide" },
  ],
};

export default function Demo() {
  return <PlumeformStats {...statsSample} />;
}

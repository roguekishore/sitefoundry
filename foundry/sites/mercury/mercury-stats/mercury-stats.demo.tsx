// Sample content lives here (gallery only); the page reuses it.
import { MercuryStats, type MercuryStatsProps } from "./mercury-stats";

export const statsSample: MercuryStatsProps = {
  title: ["You're building something to last.", "We are too."],
  stats: [
    { value: "120K+", label: "Founders bank with us" },
    { value: "1 in 4", label: "New startups pick Larkspur" },
    { value: "$9B+", label: "Moved through accounts each month" },
    { value: "4.8", label: "Average app store rating" },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background">
      <MercuryStats {...statsSample} />
    </div>
  );
}

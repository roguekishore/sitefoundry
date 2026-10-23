import { SlashStats, type SlashStatsProps } from "./slash-stats";

export const statsSample: SlashStatsProps = {
  stats: [
    { value: "$18bn", suffix: "+", label: "moved every year" },
    { value: "4m", suffix: "+", label: "cards issued" },
    { value: "8k", suffix: "+", label: "companies" },
    { value: "$60m", suffix: "+", label: "returned as cash back" },
  ],
};

export default function Demo() {
  return <SlashStats {...statsSample} />;
}

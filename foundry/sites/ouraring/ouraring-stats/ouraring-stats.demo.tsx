// Sample content lives here (gallery only); the page reuses it. Tessel and its numbers are made up.
import { OuraringStats, type OuraringStatsProps } from "./ouraring-stats";

export const statsSample: OuraringStatsProps = {
  title: "91% of Tessel members\nsay they sleep better",
  footnote: "1",
  lede: "Follow more than 40 body signals and get guidance on rest, movement, stress and recovery, all in one calm app.",
  note: "On iPhone and Android.",
  cta: { label: "See Membership", href: "#" },
};

export default function Demo() {
  return <OuraringStats {...statsSample} />;
}

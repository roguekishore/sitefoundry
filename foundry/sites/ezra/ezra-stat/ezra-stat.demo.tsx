import { EzraStat, type EzraStatProps } from "./ezra-stat";

export const statSample: EzraStatProps = {
  statement: "Found early, 8 in 10 cancers are survivable; found late, under 2 in 10.",
  mark: "*",
  source: "Figures from the National\nRegistry of Oncology",
};

export default function Demo() {
  return <EzraStat {...statSample} />;
}

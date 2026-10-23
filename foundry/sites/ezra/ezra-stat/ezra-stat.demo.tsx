import { EzraStat, type EzraStatProps } from "./ezra-stat";

export const statSample: EzraStatProps = {
  statement: "Found early, most cancers are survivable; found late, the odds of the same diagnosis can drop below one in five.",
  mark: "*",
  source: "Figures from the National\nRegistry of Oncology",
};

export default function Demo() {
  return <EzraStat {...statSample} />;
}

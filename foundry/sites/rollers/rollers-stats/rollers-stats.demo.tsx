import { RollersStats, type RollersStatsProps } from "./rollers-stats";

export const statsSample: RollersStatsProps = {
  items: [
    { value: "Est. 1987", caption: "three generations on the tools" },
    { value: "450+", caption: "machines on the books" },
    { value: "Three states", caption: "depots within a day's drive" },
  ],
};

export const yardSample: RollersStatsProps = {
  id: "guides",
  items: [{ value: "Notes" }, { value: "from" }, { value: "site" }],
};

export default function Demo() {
  return (
    <>
      <RollersStats {...statsSample} />
      <RollersStats {...yardSample} />
    </>
  );
}

import { EightsleepSolo, type EightsleepSoloProps } from "./eightsleep-solo";

export const soloSample: EightsleepSoloProps = {
  title: "Single-side Mantles, from $1,849",
  sub: "The same Mantle 4, now made for one sleeper on one side of the bed.",
  cta: { label: "Shop single sizes", href: "#" },
  cards: [{ caption: "Made for one sleeper, on their side of the bed" }, { caption: "New narrow sizes for guest rooms and teens" }],
};

export default function Demo() {
  return <EightsleepSolo {...soloSample} />;
}

import type { K2spaceListProps } from "./k2space-list";
import { K2spaceList } from "./k2space-list";

export const listSample: K2spaceListProps = {
  items: [
    {
      number: "01",
      title: "Raw Power",
      body: "Each Atlas bus feeds its payloads twelve times the power of a typical small platform (24 kW against 2 kW), so the instruments decide the mission, not the budget.",
    },
    {
      number: "02",
      title: "Hardened Build",
      body: "Shielded electronics, doubled flight computers and a deep propellant reserve keep every bus working through storms, debris and long years aloft.",
    },
    {
      number: "03",
      title: "Line Ready",
      body: "Drawn for a production line from the first sketch, and built on a floor that makes nearly every part itself.",
    },
  ],
  link: { label: "See the platforms", href: "#platforms" },
};

export default function Demo() {
  return <K2spaceList {...listSample} />;
}

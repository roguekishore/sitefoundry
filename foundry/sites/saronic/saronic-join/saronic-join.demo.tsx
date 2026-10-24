import type { SaronicJoinProps } from "./saronic-join";
import { SaronicJoin } from "./saronic-join";

export const joinSample: SaronicJoinProps = {
  eyebrow: "Crew up with us",
  title: "Our yard keeps growing. Come help us put a new kind of fleet to sea.",
  cta: { label: "Open roles", href: "#", external: true },
};

export default function Demo() {
  return <SaronicJoin {...joinSample} />;
}

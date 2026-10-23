import { BridgeCta, type BridgeCtaProps } from "./bridge-cta";

export const ctaSample: BridgeCtaProps = {
  title: "Ship on Orrery this quarter.",
  text: "Book half an hour with an engineer and map out your first corridor together.",
  link: { label: "Start building", href: "#" },
};

export default function Demo() {
  return <BridgeCta {...ctaSample} />;
}

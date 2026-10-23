import { UnitCta, type UnitCtaProps } from "./unit-cta";

export const ctaSample: UnitCtaProps = {
  heading: "Launch money features on rails that have been proven",
  cta: { label: "Book a walkthrough", href: "#" },
};

export default function Demo() {
  return <UnitCta {...ctaSample} />;
}

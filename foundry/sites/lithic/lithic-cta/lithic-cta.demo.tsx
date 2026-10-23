import { LithicCta, type LithicCtaProps } from "./lithic-cta";

export const ctaSample: LithicCtaProps = {
  title: "Want payments that simply keep working?",
  button: { label: "Talk to us", href: "#" },
};

export default function Demo() {
  return <LithicCta {...ctaSample} />;
}

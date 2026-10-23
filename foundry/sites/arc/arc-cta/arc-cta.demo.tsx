import { ArcCta, type ArcCtaProps } from "./arc-cta";

export const ctaSample: ArcCtaProps = {
  title: "Give your runway the treasury desk and banker it deserves.",
  subtitle: "No balance minimums and no per-transfer fees.",
  cta: { label: "Open an account", href: "#" },
};

export default function Demo() {
  return <ArcCta {...ctaSample} />;
}

import { GranolaCta, type GranolaCtaProps } from "./granola-cta";

export const ctaSample: GranolaCtaProps = {
  title: "Keep every call. Pay nothing.",
  body: "Note as many meetings as you like. Upgrade when you want notes from further back than a month.",
  primary: { label: "Get it free", href: "#download" },
  secondary: { label: "See plans", href: "#plans" },
};

export default function Demo() {
  return <GranolaCta {...ctaSample} />;
}

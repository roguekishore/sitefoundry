import { BrexCta, type BrexCtaProps } from "./brex-cta";

export const ctaSample: BrexCtaProps = {
  title: "See what Kiln can do for you.",
  text: "Find out how a calmer finance stack helps your company spend wisely and move faster.",
  button: { label: "Get started", href: "#" },
};

export default function Demo() {
  return <BrexCta {...ctaSample} />;
}

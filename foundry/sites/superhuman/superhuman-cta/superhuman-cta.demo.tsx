import { SuperhumanCta, type SuperhumanCtaProps } from "./superhuman-cta";

export const ctaSample: SuperhumanCtaProps = {
  title: "Start your calmest workday",
  button: { label: "Get started", href: "#" },
};

export default function Demo() {
  return <SuperhumanCta {...ctaSample} />;
}

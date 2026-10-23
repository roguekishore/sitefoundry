import { SuperhumanEnterprise, type SuperhumanEnterpriseProps } from "./superhuman-enterprise";

export const enterpriseSample: SuperhumanEnterpriseProps = {
  eyebrow: "Wayfinder for enterprise",
  title: "Friendly to people, ready for scale",
  description: "Wayfinder joins up the tools your organisation already relies on, so every team does its best work.",
  primary: { label: "Book a demo", href: "#" },
  secondary: { label: "Learn more", href: "#" },
};

export default function Demo() {
  return <SuperhumanEnterprise {...enterpriseSample} />;
}

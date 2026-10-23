import { ZettaJouleCta, type ZettaJouleCtaProps } from "./zetta-joule-cta";

export const ctaSample: ZettaJouleCtaProps = {
  lead: "Talk to us.",
  text: "Our team is ready to share the details of our technology and what it can do for your site.",
  cta: { label: "Contact Our Team", href: "#" },
};

export default function Demo() {
  return <ZettaJouleCta {...ctaSample} />;
}

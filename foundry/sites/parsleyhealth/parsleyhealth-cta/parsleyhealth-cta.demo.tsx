import type { ParsleyhealthCtaProps } from "./parsleyhealth-cta";
import { ParsleyhealthCta } from "./parsleyhealth-cta";

export const ctaSample: ParsleyhealthCtaProps = {
  title: "Ready to be listened to properly?",
  primary: { label: "Become a member", href: "#" },
  secondary: { label: "Talk to our team", href: "#" },
};

export default function Demo() {
  return <ParsleyhealthCta {...ctaSample} />;
}

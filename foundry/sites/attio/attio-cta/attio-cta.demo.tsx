// Sample content lives here (gallery only); the page reuses it. Tessel is a made-up CRM.
import { AttioCta, type AttioCtaProps } from "./attio-cta";

export const ctaSample: AttioCtaProps = {
  title: "Sell more. Type less.",
  secondary: { label: "Book a walkthrough", href: "#walkthrough" },
  primary: { label: "Try it free", href: "#start" },
  form: { placeholder: "Work email", submitLabel: "Send me a tour" },
};

export default function Demo() {
  return <AttioCta {...ctaSample} />;
}

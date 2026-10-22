// Sample content lives here (gallery only); the page reuses it. Tallyhold is made up.
import { MeowCta, type MeowCtaProps } from "./meow-cta";

export const ctaSample: MeowCtaProps = {
  title: "Open your account before lunch",
  text: "Twelve thousand companies already keep their money here.",
  form: { placeholder: "Your work email", label: "Work email", button: "Open account" },
};

export default function Demo() {
  return <MeowCta {...ctaSample} />;
}

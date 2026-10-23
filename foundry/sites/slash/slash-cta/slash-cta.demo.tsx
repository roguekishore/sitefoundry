import { SlashCta, type SlashCtaProps } from "./slash-cta";

export const ctaSample: SlashCtaProps = {
  heading: ["Open an account in under ten minutes"],
  sub: "Join 8,000+ companies already banking with Ferro.",
  email: { placeholder: "Work email", label: "Work email", button: "Start free" },
};

export default function Demo() {
  return <SlashCta {...ctaSample} />;
}

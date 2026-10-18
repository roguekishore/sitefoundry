// Sample content lives here (gallery only); the page reuses it.
import { FileCode2, Tag } from "lucide-react";
import { StripeCta, type StripeCtaProps } from "./stripe-cta";

export const ctaSample: StripeCtaProps = {
  title: "Ready when you are.",
  text: "Open an account in minutes, or talk to us about a plan built around your business.",
  action: { label: "Talk to us", href: "/talk" },
  columns: [
    {
      icon: <Tag />,
      title: "Know what you'll pay",
      text: "Simple per-payment pricing, nothing hidden.",
      link: { label: "See pricing", href: "/pricing" },
    },
    {
      icon: <FileCode2 />,
      title: "Start building",
      text: "Take your first test payment in about ten minutes.",
      link: { label: "Ways to integrate", href: "/integrate" },
    },
  ],
};

export default function Demo() {
  return <StripeCta {...ctaSample} />;
}

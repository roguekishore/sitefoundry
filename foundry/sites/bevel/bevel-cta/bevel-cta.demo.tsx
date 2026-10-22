// Sample content (gallery only); the page reuses it.
import { Smartphone } from "lucide-react";
import { BevelCta, type BevelCtaProps } from "./bevel-cta";

export const ctaSample: BevelCtaProps = {
  title: "Start Wherever You Are",
  lead: "One habit, one log, one morning at a time. Juniper meets you there and helps you keep going with a clear head.",
  cta: { label: "Get the app", href: "#", icon: <Smartphone strokeWidth={2.25} /> },
};

export default function Demo() {
  return <BevelCta {...ctaSample} />;
}

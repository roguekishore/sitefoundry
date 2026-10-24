import type { ReflectCtaProps } from "./reflect-cta";
import { ReflectCta } from "./reflect-cta";

export const ctaSample: ReflectCtaProps = {
  eyebrow: "Begin tonight",
  title: "Write tonight, think clearly",
  lead: "Every note and idea, right where you left it.",
  action: { label: "Get Nocturne 2", href: "#" },
  mediaLabel: "A glowing horizon (looping video)",
};

export default function Demo() {
  return <ReflectCta {...ctaSample} />;
}

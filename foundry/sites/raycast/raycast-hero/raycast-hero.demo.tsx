import { ArrowRight, Download } from "lucide-react";
import { RaycastHero, type RaycastHeroProps } from "./raycast-hero";

export const heroSample: RaycastHeroProps = {
  title: "Every tool, one keystroke away.",
  lead: "A tidy bundle of fast helpers inside one launcher that opens before you finish the thought.",
  cta: { label: "Get Tessel for Windows", href: "#", icon: <Download /> },
  notes: ["Windows 11 or newer (x64 or ARM64)", "Or install with winget"],
  pill: { label: "Meet the Tessel pad", href: "#", icon: <ArrowRight /> },
};

export default function Demo() {
  return <RaycastHero {...heroSample} />;
}

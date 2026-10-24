import { ArrowDown, ArrowRight } from "lucide-react";
import type { CursorHeroProps } from "./cursor-hero";
import { CursorHero } from "./cursor-hero";

export const heroSample: CursorHeroProps = {
  title: "Fernwork is the coding agent for teams building careful software.",
  primaryAction: {
    label: (
      <>
        Install for macOS <ArrowDown aria-hidden strokeWidth={1.75} />
      </>
    ),
    mobileLabel: (
      <>
        Start free <ArrowRight aria-hidden strokeWidth={1.75} />
      </>
    ),
    href: "#",
  },
  secondaryAction: {
    label: (
      <>
        Book a walkthrough <ArrowRight aria-hidden strokeWidth={1.75} />
      </>
    ),
    href: "#",
  },
  mediaLabel: "The Fernwork app over a painted landscape",
};

export default function Demo() {
  return <CursorHero {...heroSample} />;
}

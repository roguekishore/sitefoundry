import { ArrowDown, ArrowRight } from "lucide-react";
import type { CursorCtaProps } from "./cursor-cta";
import { CursorCta } from "./cursor-cta";

export const ctaSample: CursorCtaProps = {
  title: "Ship it today.",
  action: {
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
};

export default function Demo() {
  return <CursorCta {...ctaSample} />;
}

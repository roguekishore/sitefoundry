import type { ParsleyhealthFloatingCtaProps } from "./parsleyhealth-floating-cta";
import { ParsleyhealthFloatingCta } from "./parsleyhealth-floating-cta";

export const floatingCtaSample: ParsleyhealthFloatingCtaProps = {
  label: "Check my coverage",
  href: "#",
};

export default function Demo() {
  return (
    <div className="h-[200svh] bg-background">
      <ParsleyhealthFloatingCta {...floatingCtaSample} />
    </div>
  );
}

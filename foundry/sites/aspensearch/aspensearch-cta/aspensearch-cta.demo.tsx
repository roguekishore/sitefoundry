import { AspensearchCta, type AspensearchCtaProps } from "./aspensearch-cta";

export const ctaSample: AspensearchCtaProps = {
  lineOne: ["Book", "Your", "First"],
  lineTwo: "Introduction",
  href: "#contact",
};

export default function Demo() {
  return <AspensearchCta {...ctaSample} />;
}

import type { HelionenergyCareersProps } from "./helionenergy-careers";
import { HelionenergyCareers } from "./helionenergy-careers";

export const careersSample: HelionenergyCareersProps = {
  eyebrow: "Work with us",
  title: ["Help light", "the first plant"],
  ctaLabel: "See open roles",
  ctaHref: "#",
};

export default function Demo() {
  return <HelionenergyCareers {...careersSample} />;
}

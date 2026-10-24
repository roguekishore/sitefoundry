// Sample content (gallery only).
import { RailwayCta, type RailwayCtaProps } from "./railway-cta";

export const ctaSample: RailwayCtaProps = {
  title: "The doors are open. Bring your code.",
  lead: "Launch your first service in under a minute and see where it takes you.",
  action: { label: "Step inside", href: "#" },
};

export default function Demo() {
  return <RailwayCta {...ctaSample} className="bg-background" />;
}

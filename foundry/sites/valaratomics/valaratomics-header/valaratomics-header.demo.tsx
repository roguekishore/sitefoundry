// Sample content (gallery only); the page reuses it. Tallgrass Fission is made up.
import { Wheat, WavesHorizontal, X } from "lucide-react";
import { ValaratomicsHeader, type ValaratomicsHeaderProps } from "./valaratomics-header";

export const headerSample: ValaratomicsHeaderProps = {
  wordmark: ["Tallgrass", "Fission"],
  mark: <Wheat strokeWidth={2.25} />,
  homeLabel: "Tallgrass Fission home",
  homeHref: "#top",
  links: [
    { label: "Reactor", href: "#reactor" },
    { label: "Prairie One", href: "#prairie-one" },
    { label: "Field sites", href: "#sites" },
    { label: "Why heat", href: "#mission" },
    { label: "Manual", href: "#manual" },
    { label: "Work here", href: "#careers" },
  ],
  menuIcon: <WavesHorizontal />,
  closeIcon: <X />,
  menuLabel: "Menu",
};

export default function Demo() {
  return (
    <div className="min-h-[60rem]">
      <ValaratomicsHeader {...headerSample} />
      <div className="dark h-[30rem] bg-background" />
      <div className="h-[30rem] bg-background" />
    </div>
  );
}

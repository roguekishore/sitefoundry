// Sample content (gallery only); the page reuses it. Tallgrass Fission is made up.
import { Mail, MoveRight, Rss } from "lucide-react";
import { ValaratomicsFooter, type ValaratomicsFooterProps } from "./valaratomics-footer";

export const footerSample: ValaratomicsFooterProps = {
  title: ["Join", "the crew"],
  actions: [
    { label: "Work here", href: "#careers" },
    { label: "Buy our heat", href: "#offtake" },
    { label: "Get in touch", href: "#contact" },
  ],
  arrow: <MoveRight />,
  links: [
    { label: "Reactor", href: "#reactor" },
    { label: "Why heat", href: "#mission" },
    { label: "Manual", href: "#manual" },
  ],
  badge: { label: "Press kit", href: "#press-kit" },
  socials: [
    { label: "Newsletter", href: "#newsletter", icon: <Mail /> },
    { label: "Field log feed", href: "#feed", icon: <Rss /> },
  ],
  tagline: "Built on the Great Plains",
  copyright: "©2026 Tallgrass Fission",
  rights: "All rights reserved",
};

export default function Demo() {
  return <ValaratomicsFooter {...footerSample} />;
}

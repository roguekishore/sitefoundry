import { AtSign, Camera } from "lucide-react";
import { WildAgFooter, type WildAgFooterProps } from "./wild-ag-footer";

export const footerSample: WildAgFooterProps = {
  brand: "Talgrund",
  homeHref: "#top",
  copyright: "© 2026 All rights reserved",
  credit: {
    lead: "Site:",
    links: [
      { label: "Studio Feldkante", href: "#credit-1" },
      { label: "Halbton", href: "#credit-2" },
    ],
  },
  followLabel: "Follow us:",
  socials: [
    { label: "Talgrund on a professional network", href: "#social-1", icon: <AtSign aria-hidden /> },
    { label: "Talgrund on a photo network", href: "#social-2", icon: <Camera aria-hidden /> },
  ],
};

export default function Demo() {
  return <WildAgFooter {...footerSample} />;
}

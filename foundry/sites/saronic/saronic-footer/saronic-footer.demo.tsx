import { AtSign, Navigation, Navigation2, Rss } from "lucide-react";
import type { SaronicFooterProps } from "./saronic-footer";
import { SaronicFooter } from "./saronic-footer";

export const footerSample: SaronicFooterProps = {
  mark: <Navigation2 aria-hidden strokeWidth={0} fill="currentColor" className="rotate-45" />,
  markLabel: "Ternway home",
  groups: [
    {
      title: "Hardware",
      links: [
        { label: "Hulls", href: "#" },
        { label: "Helmline", href: "#" },
      ],
    },
    {
      title: "About us",
      links: [
        { label: "Purpose", href: "#" },
        { label: "Crew", href: "#" },
        { label: "Dispatches", href: "#" },
        { label: "Reach us", href: "#" },
      ],
    },
  ],
  mobileTitle: "Also",
  socialTitle: "Follow",
  social: [
    { label: "Ternway on the fediverse", href: "#", icon: <AtSign aria-hidden strokeWidth={1.5} /> },
    { label: "Ternway dispatches feed", href: "#", icon: <Rss aria-hidden strokeWidth={1.5} /> },
  ],
  join: {
    eyebrow: "Crew up with us",
    text: "See what's open and help us build the quieter, safer sea lanes.",
    cta: { label: "See open roles", href: "#", external: true },
  },
  place: "Launched in Louisiana",
  legal: [{ label: "Privacy notice", href: "#" }],
  copyright: "© 2026 Ternway Marine",
  readout: { x: "X", y: "Y" },
  cornerGlyph: <Navigation aria-hidden strokeWidth={0} fill="currentColor" className="rotate-[100deg]" />,
};

export default function Demo() {
  return <SaronicFooter {...footerSample} />;
}

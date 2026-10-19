import { HalodentalVagueFlashFooter, type HalodentalVagueFlashFooterProps } from "./halodental-vague-flash-footer";

export const footerSample: HalodentalVagueFlashFooterProps = {
  columns: [
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Careers", href: "#careers" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Contact", href: "#contact" },
        { label: "FAQ", href: "#faq" },
        { label: "Media Room", href: "#media" },
      ],
    },
    {
      title: "Follow us",
      links: [
        { label: "Linkedin", href: "#linkedin" },
        { label: "Instagram", href: "#instagram" },
      ],
    },
  ],
  secondaryCta: {
    label: "Discover the Sola Optical Loupe",
    href: "#discover",
  },
  primaryCta: {
    label: "Reserve now",
    href: "#reserve",
  },
  legalLinks: [
    { label: "Terms of use", href: "#terms" },
    { label: "Privacy policy", href: "#privacy" },
  ],
  copyright: "© 2026 Sola Clinical Optics, All Rights Reserved.",
};

export default function Demo() {
  return <HalodentalVagueFlashFooter {...footerSample} />;
}

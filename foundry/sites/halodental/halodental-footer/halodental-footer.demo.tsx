import { HalodentalFooter, type HalodentalFooterProps } from "./halodental-footer";

export const footerSample: HalodentalFooterProps = {
  columns: [
    {
      heading: "Practice",
      links: [
        { label: "Story", href: "#story" },
        { label: "Careers", href: "#careers" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Contact", href: "#contact" },
        { label: "FAQ", href: "#faq" },
        { label: "Press Kit", href: "#press" },
      ],
    },
    {
      heading: "Channels",
      links: [
        { label: "LinkedIn", href: "#linkedin" },
        { label: "Instagram", href: "#instagram" },
      ],
    },
  ],
  secondaryCta: {
    label: "Discover the Velo Optical Probe",
    href: "#discover",
  },
  primaryCta: {
    label: "Pre-order now",
    href: "#preorder",
  },
  legalLinks: [
    { label: "Terms of service", href: "#terms" },
    { label: "Privacy notice", href: "#privacy" },
  ],
  copyright: "© 2026 Velo Optics Technologies Inc. All Rights Reserved.",
};

export default function Demo() {
  return <HalodentalFooter {...footerSample} />;
}

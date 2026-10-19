import { HalodentalGeminiHeader, type HalodentalGeminiHeaderProps } from "./halodental-gemini-header";

export const headerSample: HalodentalGeminiHeaderProps = {
  brandName: "Velo",
  brandHref: "#",
  links: [
    { label: "Instrument", href: "#instrument" },
    { label: "Onboarding", href: "#onboarding" },
    { label: "Practice", href: "#practice" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
    { label: "Partners", href: "#partners" },
  ],
  cta: {
    label: "Pre-order now",
    mobileLabel: "Pre-order",
    href: "#preorder",
  },
  localeLabel: "Fr",
  localeHref: "#fr",
  a11yLabel: "Accessibility options",
  menuLabel: "Toggle navigation menu",
};

export default function Demo() {
  return (
    <div className="dark min-h-36 bg-background">
      <HalodentalGeminiHeader {...headerSample} overlay={false} />
    </div>
  );
}

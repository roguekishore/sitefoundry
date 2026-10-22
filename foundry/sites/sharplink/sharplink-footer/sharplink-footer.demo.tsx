import { Landmark } from "lucide-react";
import { SharplinkFooter, type SharplinkFooterProps } from "./sharplink-footer";

export const footerSample: SharplinkFooterProps = {
  signupTitle: "Stay in the loop:",
  emailPlaceholder: "Your email address",
  signupButton: "Subscribe",
  navLabel: "Navigation",
  nav: [
    { label: "Home", href: "#top" },
    { label: "Contact", href: "#contact" },
    { label: "Thesis", href: "#thesis" },
    { label: "About", href: "#about" },
    { label: "Shareholders", href: "#shareholders" },
    { label: "LMN ledger", href: "#ledger" },
  ],
  socialLabel: "Elsewhere",
  social: [
    { label: "LinkedIn", href: "#linkedin" },
    { label: "Newsletter", href: "#newsletter" },
    { label: "Press kit", href: "#press" },
  ],
  backToTop: { label: "Back to top", href: "#top" },
  exchange: (
    <span className="flex items-center gap-1.5 text-base font-medium tracking-[-0.02em]">
      <Landmark strokeWidth={2} /> Northgate
    </span>
  ),
  listing: (
    <>
      Ferrowell trades on the <strong>Northgate Exchange</strong>
      <br />
      under the ticker <strong>FRWL</strong>
    </>
  ),
  legal: [
    { label: "Privacy", href: "#privacy" },
    { label: "Terms", href: "#terms" },
  ],
  copyright: "© 2026 Ferrowell Holdings. All rights reserved",
  wordmark: "Ferrowell",
};

export default function Demo() {
  return (
    <div className="relative isolate bg-background">
      <div className="h-[40vh]" />
      <SharplinkFooter {...footerSample} />
    </div>
  );
}

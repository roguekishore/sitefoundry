import { IconBrandLinkedinFilled } from "@tabler/icons-react";
import { LunchlineFooter, type LunchlineFooterProps } from "./lunchline-footer";

export const footerSample: LunchlineFooterProps = {
  brand: ["ferrybank", "holdings"],
  links: [
    { label: "Home", href: "#home" },
    { label: "Story", href: "#story" },
    { label: "Beliefs", href: "#beliefs" },
    { label: "Method", href: "#method" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Notice", href: "#privacy" },
    { label: "Terms of Use", href: "#terms" },
  ],
  social: { label: "Ferrybank on LinkedIn", href: "#linkedin", icon: <IconBrandLinkedinFilled /> },
  copyright: "© 2026 ferrybank holdings. All rights reserved.",
  credit: { before: "Site by ", label: "Tidewater Studio", href: "#studio" },
  backToTop: { label: "Back to top", href: "#home" },
};

export default function Demo() {
  return (
    <>
      <div className="h-[40vh] bg-background" />
      <LunchlineFooter {...footerSample} />
    </>
  );
}

import { ZettaJouleFooter, type ZettaJouleFooterProps } from "./zetta-joule-footer";

export const footerSample: ZettaJouleFooterProps = {
  heading: "Clean Heat\nfor Heavy Industry",
  groups: [
    [
      { label: "Company", href: "#" },
      { label: "Technology", href: "#" },
      { label: "Applications", href: "#" },
      { label: "Our Edge", href: "#" },
      { label: "Investors", href: "#" },
    ],
    [
      { label: "People", href: "#" },
      { label: "Newsroom", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
    [
      { label: "LinkedIn", href: "#" },
      { label: "Follow Us on X", href: "#" },
    ],
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
  ],
  brand: "Hearthgrid",
  copyright: "© 2026 Hearthgrid. All rights reserved.",
};

export default function Demo() {
  return <ZettaJouleFooter {...footerSample} />;
}

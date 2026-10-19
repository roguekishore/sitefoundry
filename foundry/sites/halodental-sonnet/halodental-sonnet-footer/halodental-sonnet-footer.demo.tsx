// Sample content lives here (gallery only); the page reuses it.
import { HalodentalSonnetFooter, type HalodentalSonnetFooterProps } from "./halodental-sonnet-footer";

export const footerSample: HalodentalSonnetFooterProps = {
  columns: [
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Contact", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Media Room", href: "#" },
      ],
    },
    {
      title: "Follow us",
      links: [
        { label: "Linkedin", href: "#" },
        { label: "Instagram", href: "#" },
      ],
    },
  ],
  secondary: { label: "Discover the Gleam mirror", href: "#" },
  primary: { label: "Reserve now", href: "#" },
  legal: [
    { label: "Terms of use", href: "#" },
    { label: "Privacy policy", href: "#" },
  ],
  copyright: "© 2026 Gleam Dental Co. All Rights Reserved.",
};

export default function Demo() {
  return (
    <div className="bg-background">
      <HalodentalSonnetFooter {...footerSample} />
    </div>
  );
}

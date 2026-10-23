import { ThirdwayFooter, type ThirdwayFooterProps } from "./thirdway-footer";

export const footerSample: ThirdwayFooterProps = {
  cta: "If you're planning an exceptional workplace,",
  ctaLink: { label: "let's talk.", href: "#" },
  wordmark: "Hollin",
  scrolledPrefix: "You've scrolled",
  scrolledUnit: "cm",
  addressLabel: "Find us",
  address: ["18 Wren Yard,", "London, N1 7QT"],
  emailLabel: "Email",
  email: { label: "studio@hollin.example", href: "#" },
  socialLabel: "Follow us",
  social: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
  exploreLabel: "Explore",
  explore: [
    { label: "Approach", href: "#" },
    { label: "Services", href: "#" },
    { label: "People", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Values", href: "#" },
    { label: "Our Studio", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Journal", href: "#" },
  ],
  legal: [
    { label: "Careers", href: "#" },
    { label: "Governance", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookies", href: "#" },
    { label: "Modern Slavery Statement", href: "#" },
    { label: "Equal Opportunities", href: "#" },
  ],
  copyright: "© 2026 Hollin",
  credits: [
    { prefix: "Identity by", link: { label: "Plainfield", href: "#" } },
    { prefix: "Built by", link: { label: "Orchard & Reed", href: "#" } },
  ],
};

export default function Demo() {
  return <ThirdwayFooter {...footerSample} />;
}

// Sample content (gallery only). Kestrel is a made-up company.
import { IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconBrandYoutube } from "@tabler/icons-react";
import { ModerntreasuryFooter, type ModerntreasuryFooterProps } from "./moderntreasury-footer";

const links = (...labels: string[]) => labels.map((label) => ({ label, href: "#" }));

export const footerSample: ModerntreasuryFooterProps = {
  newsletter: {
    title: "Get the Kestrel dispatch",
    text: "New features, rail updates and plain-English explainers on how money moves.",
    placeholder: "Email",
    button: "Sign up",
  },
  columns: [
    { title: "Platform", links: links("Transfers", "Ledger", "Stablecoins") },
    { title: "Learn", links: links("Guides", "Blog", "Payments glossary", "Press") },
    { title: "Use cases", links: links("Marketplace payouts", "User accounts", "Lending", "Payroll", "Loyalty rewards", "Stablecoin routing", "Stablecoin wallets", "Virtual sub-accounts") },
    { title: "Developers", links: links("Transfers API", "Ledger API", "Reference", "Changelog") },
    { title: "Stories", links: links("All stories", "Brightkeel", "Oakhollow", "Tidewell", "Sundry & Co") },
    { title: "Company", links: links("About", "Jobs", "Trust", "Privacy", "Terms") },
  ],
  copyright: "© Kestrel Rails, Inc.",
  legal: links("Your privacy choices"),
  socials: [
    { label: "X", href: "#", icon: <IconBrandX stroke={1.5} /> },
    { label: "LinkedIn", href: "#", icon: <IconBrandLinkedin stroke={1.5} /> },
    { label: "Instagram", href: "#", icon: <IconBrandInstagram stroke={1.5} /> },
    { label: "YouTube", href: "#", icon: <IconBrandYoutube stroke={1.5} /> },
  ],
};

export default function Demo() {
  return <ModerntreasuryFooter {...footerSample} />;
}

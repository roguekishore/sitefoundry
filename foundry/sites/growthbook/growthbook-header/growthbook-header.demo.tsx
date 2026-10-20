// Sample content (gallery only); the page reuses it. Northvane is a made-up company.
import { IconBrandGithubFilled } from "@tabler/icons-react";
import { Navigation } from "lucide-react";
import { GrowthbookHeader, type GrowthbookHeaderProps } from "./growthbook-header";

export const headerSample: GrowthbookHeaderProps = {
  announcement: { text: "Office hours every Thursday | Bring a test plan, leave with a launch", linkLabel: "Save a seat", href: "#" },
  brand: "Northvane",
  brandIcon: <Navigation strokeWidth={2.25} />,
  links: [
    { label: "Platform", href: "#", menu: true },
    { label: "Use cases", href: "#", menu: true },
    { label: "Learn", href: "#", menu: true },
    { label: "Plans", href: "#" },
    { label: "Docs", href: "#" },
  ],
  stars: { icon: <IconBrandGithubFilled />, count: "6,904", href: "#", label: "Northvane on GitHub: 6,904 stars" },
  signIn: { label: "Log in", href: "#" },
  secondary: { label: "Talk to us", href: "#" },
  primary: { label: "Try it free", href: "#" },
  menuLabel: "Open menu",
  closeLabel: "Close menu",
};

export default function Demo() {
  return (
    <div className="min-h-[60svh] bg-background">
      <GrowthbookHeader {...headerSample} />
    </div>
  );
}

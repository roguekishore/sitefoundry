import { Hexagon } from "lucide-react";
import { LithicHeader, type LithicHeaderProps } from "./lithic-header";

export const headerSample: LithicHeaderProps = {
  wordmark: "Corvane",
  mark: <Hexagon aria-hidden className="size-4" strokeWidth={3} />,
  links: [
    { label: "Products", href: "#" },
    { label: "Use cases", href: "#" },
    { label: "Builders", href: "#" },
    { label: "Learn", href: "#" },
  ],
  secondary: { label: "Talk to sales", href: "#" },
  action: { label: "Console", href: "#" },
  menuLabel: "Open menu",
};

export default function Demo() {
  return <LithicHeader {...headerSample} />;
}

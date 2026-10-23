import { TreeDeciduous } from "lucide-react";
import { PuzzleHeader, type PuzzleHeaderProps } from "./puzzle-header";

export const headerSample: PuzzleHeaderProps = {
  announcement: {
    lead: "Oakbook Connect is out:",
    text: "ask your ledger from any AI assistant.",
    shortText: "your ledger in any AI",
    link: { label: "See how", href: "#" },
  },
  closeLabel: "Hide announcement",
  brand: { name: "Oakbook", href: "#", icon: <TreeDeciduous strokeWidth={2} /> },
  links: [
    { label: "Product", href: "#", menu: true },
    { label: "Who it's for", href: "#", menu: true },
    { label: "Learn", href: "#", menu: true },
    { label: "For bookkeepers", href: "#" },
    { label: "Switching guide", href: "#" },
    { label: "Plans", href: "#" },
  ],
  demo: { label: "Get a walkthrough", href: "#" },
  trial: { label: "Start free", href: "#" },
  signIn: { label: "Log in", href: "#" },
  menuLabel: "Open menu",
};

export default function Demo() {
  return (
    <div className="min-h-[24rem] bg-background">
      <PuzzleHeader {...headerSample} />
    </div>
  );
}

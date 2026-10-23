import { PilotHeader, type PilotHeaderProps } from "./pilot-header";

export const headerSample: PilotHeaderProps = {
  announcement: {
    text: "Meet Ledgerline.",
    link: { label: "The close-the-books copilot for CPA teams", href: "#" },
  },
  brand: { name: "tallyhouse", href: "#" },
  links: [
    { label: "How it works", href: "#" },
    { label: "Services", href: "#", menu: true },
    { label: "Who we serve", href: "#", menu: true },
    { label: "Plans", href: "#" },
    { label: "Learn", href: "#", menu: true },
    { label: "Ledgerline", href: "#" },
  ],
  signIn: { label: "Log in", href: "#" },
  primary: { label: "Get going", href: "#" },
  secondary: { label: "Try a month free", href: "#" },
  menuLabel: "Open menu",
};

export default function Demo() {
  return (
    <div className="min-h-96 bg-background">
      <PilotHeader {...headerSample} />
    </div>
  );
}

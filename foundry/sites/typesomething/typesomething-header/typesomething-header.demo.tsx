import { BotMessageSquare } from "lucide-react";
import { TypesomethingHeader, type TypesomethingHeaderProps } from "./typesomething-header";

export const headerSample: TypesomethingHeaderProps = {
  brand: { lead: "Paper", tail: "kite" },
  brandIcon: <BotMessageSquare strokeWidth={2.25} />,
  homeLabel: "Paperkite home",
  homeHref: "#",
  links: [
    { label: "Home", href: "#", active: true },
    { label: "Product", href: "#product" },
    { label: "How it works", href: "#how" },
    { label: "Journal", href: "#journal" },
    { label: "Contact", href: "#contact" },
  ],
  language: { label: "EN", href: "#lang" },
  cta: { label: "Get started", href: "#start" },
  menuLabel: "Open the menu",
};

export default function Demo() {
  return (
    <div className="min-h-[24rem] bg-muted">
      <TypesomethingHeader {...headerSample} />
    </div>
  );
}

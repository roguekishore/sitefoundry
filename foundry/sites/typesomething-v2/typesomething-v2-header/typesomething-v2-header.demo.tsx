import { MessagesSquare } from "lucide-react";
import type { TypesomethingV2HeaderProps } from "./typesomething-v2-header";
import { TypesomethingV2Header } from "./typesomething-v2-header";

export const headerSample: TypesomethingV2HeaderProps = {
  brand: { lead: "Quiet", tail: "page", href: "#", mark: <MessagesSquare strokeWidth={2} /> },
  links: [
    { label: "Home", href: "#", active: true },
    { label: "How it runs", href: "#steps" },
    { label: "What you get", href: "#features" },
    { label: "Journal", href: "#" },
    { label: "Talk to us", href: "#" },
  ],
  locale: { label: "EN", href: "#" },
  cta: { label: "Begin", href: "#" },
  menuLabel: "Open menu",
};

export default function Demo() {
  return (
    <div className="min-h-[60vh] bg-muted">
      <TypesomethingV2Header {...headerSample} />
    </div>
  );
}

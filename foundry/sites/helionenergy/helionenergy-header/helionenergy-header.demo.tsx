import { Atom } from "lucide-react";
import type { HelionenergyHeaderProps } from "./helionenergy-header";
import { HelionenergyHeader } from "./helionenergy-header";

export const headerSample: HelionenergyHeaderProps = {
  mark: <Atom aria-hidden strokeWidth={1.5} />,
  brandLabel: "Vantor",
  links: [
    { label: "About", href: "#" },
    { label: "Science", href: "#" },
    { label: "Kiln", href: "#" },
    { label: "Basin", href: "#" },
    { label: "News", href: "#" },
    { label: "Journal", href: "#" },
    { label: "Questions", href: "#" },
  ],
  cta: { label: "Careers", href: "#" },
  menuLabel: "Open the menu",
};

export default function Demo() {
  return (
    <div className="dark min-h-[24rem] bg-card">
      <HelionenergyHeader {...headerSample} position="static" fadeMark={false} />
    </div>
  );
}

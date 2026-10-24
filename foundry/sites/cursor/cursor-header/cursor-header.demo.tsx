// Sample content lives here (gallery only); the page reuses it. Fernwork is made up.
import { Leaf } from "lucide-react";
import type { CursorHeaderProps } from "./cursor-header";
import { CursorHeader } from "./cursor-header";

export function FernworkWordmark() {
  return (
    <span className="flex items-center gap-1.5 font-display text-[1.0625rem] font-bold tracking-[0.04em] uppercase">
      <Leaf aria-hidden className="size-[1.375rem] fill-foreground" strokeWidth={1.5} />
      Fernwork
    </span>
  );
}

export const headerSample: CursorHeaderProps = {
  logo: <FernworkWordmark />,
  logoLabel: "Fernwork home",
  links: [
    { label: "Agents", href: "#" },
    { label: "Platform", href: "#" },
    { label: "Teams", href: "#" },
    { label: "Plans", href: "#" },
    { label: "Learn", href: "#" },
  ],
  signIn: { label: "Log in", href: "#" },
  secondaryAction: { label: "Talk to us", href: "#" },
  action: { label: "Install", href: "#" },
  menuLabel: "Open menu",
};

export default function Demo() {
  return <CursorHeader {...headerSample} />;
}

import { ArcHeader, type ArcHeaderProps } from "./arc-header";

export const headerSample: ArcHeaderProps = {
  brand: { name: "basin", href: "#" },
  links: [
    { label: "Accounts", href: "#" },
    { label: "About us", href: "#" },
    { label: "Fees", href: "#" },
  ],
  login: { label: "Sign in", href: "#" },
  cta: { label: "Open an account", href: "#" },
  menuLabel: "Open menu",
};

export default function Demo() {
  return (
    <div className="min-h-[150svh] bg-background">
      <ArcHeader {...headerSample} />
    </div>
  );
}

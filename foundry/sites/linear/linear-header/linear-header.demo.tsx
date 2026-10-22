// Sample content lives here (gallery only); the page reuses it. "Kestrel" is made up.
import { Bird } from "lucide-react";
import { LinearHeader, type LinearHeaderProps } from "./linear-header";

export const kestrelLogo = (
  <span className="flex items-center gap-2.5">
    <Bird aria-hidden className="size-[22px]" strokeWidth={2.25} />
    <span className="font-display text-xl font-[510] tracking-[-0.02em]">Kestrel</span>
  </span>
);

export const headerSample: LinearHeaderProps = {
  brand: "Kestrel",
  logo: kestrelLogo,
  links: [
    { label: "Platform", href: "#platform" },
    { label: "Guides", href: "#guides" },
    { label: "Stories", href: "#stories" },
    { label: "Plans", href: "#plans" },
    { label: "Lately", href: "#lately" },
    { label: "Talk to us", href: "#talk" },
  ],
  secondary: { label: "Log in", href: "#login" },
  primary: { label: "Sign up", href: "#signup" },
};

export default function Demo() {
  return <LinearHeader {...headerSample} />;
}

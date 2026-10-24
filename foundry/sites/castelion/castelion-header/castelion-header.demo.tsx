// Sample content lives here (gallery only); the page reuses it. Pellworth is made up.
import type { CastelionHeaderProps } from "./castelion-header";
import { CastelionHeader } from "./castelion-header";

export const headerSample: CastelionHeaderProps = {
  brand: "Pellworth",
  homeHref: "#",
  menuLabel: "Menu",
  links: [
    { label: "Who We Are", href: "#" },
    { label: "Dispatches", href: "#" },
    { label: "Skylark", href: "#" },
    { label: "Join Us", href: "#" },
  ],
};

export default function Demo() {
  return (
    <div className="dark min-h-[60svh] bg-muted">
      <CastelionHeader {...headerSample} />
    </div>
  );
}

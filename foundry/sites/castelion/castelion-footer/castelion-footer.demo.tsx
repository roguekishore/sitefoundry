// Sample content lives here (gallery only); the page reuses it. Pellworth is made up.
import type { CastelionFooterProps } from "./castelion-footer";
import { CastelionFooter } from "./castelion-footer";

export const footerSample: CastelionFooterProps = {
  brand: "Pellworth",
  homeHref: "#",
  columns: [
    [
      { label: "Who We Are", href: "#" },
      { label: "Dispatches", href: "#" },
    ],
    [
      { label: "Join Us", href: "#" },
      { label: "Suppliers", href: "#" },
    ],
    [
      { label: "Get in Touch", href: "#" },
      { label: "Press Kit", href: "#" },
    ],
  ],
  addresses: ["Mesa Verde, NM", "Dunmore, OH"],
  legal: [
    { label: "Terms of Use", href: "#" },
    { label: "Privacy", href: "#" },
  ],
  copyright: "Pellworth Aeronautics © 2026",
};

export default function Demo() {
  return <CastelionFooter {...footerSample} />;
}

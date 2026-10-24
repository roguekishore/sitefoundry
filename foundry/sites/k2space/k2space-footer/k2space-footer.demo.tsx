import type { K2spaceFooterProps } from "./k2space-footer";
import { K2spaceFooter } from "./k2space-footer";

export const footerSample: K2spaceFooterProps = {
  brand: { name: "Hecto", suffix: "Orbital" },
  columns: [
    {
      groups: [
        [
          { label: "Home", href: "#" },
          { label: "Platforms", href: "#platforms" },
          { label: "Company", href: "#company" },
          { label: "Careers", href: "#careers" },
          { label: "People", href: "#people" },
          { label: "Partners", href: "#partners" },
        ],
      ],
    },
    {
      groups: [
        [
          { label: "LinkedIn", href: "#" },
          { label: "X", href: "#" },
        ],
      ],
    },
    {
      groups: [
        [
          { label: "hi@hecto.space", href: "mailto:hi@hecto.space" },
          { label: "press@hecto.space", href: "mailto:press@hecto.space" },
        ],
        [{ label: "880 Anvil Road" }, { label: "Long Beach 90810" }],
      ],
    },
  ],
  copyright: "© Hecto Orbital, all rights reserved",
};

export default function Demo() {
  return <K2spaceFooter {...footerSample} />;
}

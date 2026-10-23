import { OndoNexus, type OndoNexusProps } from "./ondo-nexus";

export const nexusSample: OndoNexusProps = {
  eyebrow: "Keystone",
  lead: "Our Rails,",
  trail: "Your Assets",
  text: "Keystone lets issuers of tokenized funds and dollar tokens offer their clients same-minute minting and redemption.",
  action: { label: "Get in touch", href: "#" },
};

export default function Demo() {
  return <OndoNexus {...nexusSample} />;
}

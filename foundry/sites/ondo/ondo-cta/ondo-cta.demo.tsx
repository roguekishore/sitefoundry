import { OndoCta, type OndoCtaProps } from "./ondo-cta";

export const ctaSample: OndoCtaProps = {
  lead: "Markets Without",
  trail: "Opening Hours",
  action: { label: "Open the app", href: "#" },
};

export default function Demo() {
  return <OndoCta {...ctaSample} className="pb-16" />;
}

import { MrcresidencesbocaratonFooter, type MrcresidencesbocaratonFooterProps } from "./mrcresidencesbocaraton-footer";

export const footerSample: MrcresidencesbocaratonFooterProps = {
  start: [
    { label: "Call", href: "tel:+19415550142" },
    { label: "Email", href: "mailto:hello@velloro.example" },
  ],
  end: [
    { label: "Terms of use", href: "#terms" },
    { label: "Privacy", href: "#privacy" },
    { lead: "©2026 Velloro" },
    { lead: "Site by", label: "Fieldnote Studio", href: "#studio" },
  ],
};

export default function Demo() {
  return <MrcresidencesbocaratonFooter {...footerSample} />;
}

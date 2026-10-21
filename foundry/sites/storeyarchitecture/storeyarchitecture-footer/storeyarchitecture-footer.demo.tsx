import { StoreyarchitectureFooter, type StoreyarchitectureFooterProps } from "./storeyarchitecture-footer";

export const footerSample: StoreyarchitectureFooterProps = {
  groups: [
    {
      title: "On this site",
      links: [
        { label: "Home", href: "#top" },
        { label: "Houses", href: "#houses" },
        { label: "Practice", href: "#practice" },
        { label: "Notes", href: "#notes" },
      ],
    },
    {
      title: "The small print",
      links: [
        { label: "Privacy", href: "#privacy" },
        { label: "Terms", href: "#terms" },
        { label: "Cookies", href: "#cookies" },
      ],
    },
  ],
  contact: {
    title: "Write or call",
    links: [
      { label: "studio@ashlar-studio.co.uk", href: "mailto:studio@ashlar-studio.co.uk" },
      { label: "01373 400 218", href: "tel:01373400218" },
      { label: "4 Tanner's Row, Frome, BA11 3QX", href: "" },
    ],
  },
  brand: "Ashlar",
  note: {
    heading: ["A word from", "Ashlar"],
    brand: "Ashlar",
    labels: ["AS / FRM", "With thanks", "Ashlar"],
  },
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <div className="h-[60svh]" />
      <StoreyarchitectureFooter {...footerSample} />
    </div>
  );
}

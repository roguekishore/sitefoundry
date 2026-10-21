import { LunchlinePartners, type LunchlinePartnersProps } from "./lunchline-partners";

export const partnersSample: LunchlinePartnersProps = {
  id: "partners",
  heading: "the founding pair",
  partners: [
    {
      name: "Theo Lindqvist",
      role: "Founding partner",
      bio: "Raised on the northern coast, Theo co-founded Ferrybank and sits on the boards of Kestrel Early Years, Harbour Row Property and Lantern Tutoring. Before that he spent six years backing media and software companies at a growth fund, and began his career in corporate finance. He studied economics and rowed for his university's first eight.",
      link: { label: "Profile", href: "#theo" },
      tag: "meet theo",
      x: 36,
      y: 47.4,
      side: "left",
    },
    {
      name: "Marcus Adeyemi",
      role: "Founding partner",
      bio: "Marcus grew up inland and co-founded Ferrybank after a decade in buyouts. He chairs Northgate Cover and Willowmere Home Care and serves on the boards of Kestrel Early Years and Saltmarsh Moorings. He trained as an engineer, still keeps a set of spanners in the car, and coaches a junior football side on Saturdays.",
      link: { label: "Profile", href: "#marcus" },
      tag: "meet marcus",
      x: 64.3,
      y: 41.6,
      side: "right",
    },
  ],
};

export default function Demo() {
  return <LunchlinePartners {...partnersSample} />;
}

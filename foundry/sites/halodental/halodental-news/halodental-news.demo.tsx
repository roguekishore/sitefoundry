import { HalodentalNews, type HalodentalNewsProps } from "./halodental-news";

export const newsSample: HalodentalNewsProps = {
  title: "Latest news",
  headerCta: {
    label: "View Media Room",
    href: "#media-room",
  },
  items: [
    {
      title: "An AI-assisted clinical loupe engineered in Montreal",
      excerpt:
        "Founded in 2021, the optics studio has developed a smart intraoral scope that enables clinicians and hygienists to work with greater precision while sharing real-time views chairside.",
      href: "#news-1",
      placeholderStyle: "studio-dark",
    },
    {
      title: "Sola Optics : Mirror, Intelligent Scope",
      excerpt:
        "Transforming the everyday diagnostic instrument used by clinicians for over a century into a wireless smart scope that streams high-definition video with coaxial illumination.",
      href: "#news-2",
      placeholderStyle: "press-stacked",
      placeholderLabel: "LA REVUE",
    },
    {
      title: "Sola Clinical Optics Wins Red Dot Award for Intraoral Loupe",
      excerpt:
        "Sola Clinical Optics, pushing chairside ergonomics and patient communication forward through its digital loupe, has been honored with the Red Dot Award for Design Concept.",
      href: "#news-3",
      placeholderStyle: "press-serif",
      placeholderLabel: "CLINICAL TODAY",
    },
    {
      title: "A New Era in Chairside Optics That Transforms Patient Care",
      excerpt:
        "In a move that opens a new hardware category in clinical dentistry, Sola Clinical Optics announces the launch of its wireless illuminated intraoral scope.",
      href: "#news-4",
      placeholderStyle: "press-tech",
      placeholderLabel: "MEDTECH JOURNAL",
    },
  ],
  moreCta: {
    label: "View more",
    href: "#more-news",
  },
  fadeLast: true,
};

export default function Demo() {
  return <HalodentalNews {...newsSample} />;
}

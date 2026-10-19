import { HalodentalGeminiNews, type HalodentalGeminiNewsProps } from "./halodental-gemini-news";

export const newsSample: HalodentalGeminiNewsProps = {
  title: "Latest dispatches",
  headerCta: {
    label: "Open Press Kit",
    href: "#press-kit",
  },
  moreCta: {
    label: "Load more",
    href: "#more-news",
  },
  items: [
    {
      title: "An AI-ready intraoral probe engineered in Montreal",
      summary:
        "Founded in 2022, the med-tech studio has developed a smart optical probe that helps clinicians work with clearer coaxial illumination while streaming real-time HD visuals to patients.",
      href: "#news-1",
      mediaTone: "dark-studio",
    },
    {
      title: "Velo Optics : Coaxial Mirror, Intelligent Vision",
      summary:
        "Transforming the primary examination instrument used by dentists and hygienists for over a century into a wireless diagnostic probe with integrated HD optics and active defogging.",
      href: "#news-2",
      mediaTone: "press-card",
      publicationMark: "LE COURRIER",
      publicationSub: "SCIENCES & SANTÉ",
    },
    {
      title: "Velo Optics Receives Industrial Design Laureate for Smart Probe",
      summary:
        "Velo Optics Technologies, advancing chairside ergonomics and patient communication in modern practices, has been honoured with the 2026 Design Concept Laureate.",
      href: "#news-3",
      mediaTone: "press-card",
      publicationMark: "CLINICAL TODAY",
      publicationSub: "DENTAL JOURNAL",
    },
    {
      title: "A New Optical Standard That Elevates Chairside Patient Trust",
      summary:
        "Opening a new category in Featherweight diagnostic hardware, Velo Optics announces the clinical rollout of its anti-fog sapphire illumination system.",
      href: "#news-4",
      mediaTone: "press-card",
      publicationMark: "MEDTECH PULSE",
      publicationSub: "HARDWARE REVIEW",
    },
  ],
};

export default function Demo() {
  return <HalodentalGeminiNews {...newsSample} />;
}

// Sample content lives here (gallery only); the page reuses it. Tessel and every publication are made up.
import { OuraringNews, type OuraringNewsProps } from "./ouraring-news";

export const newsSample: OuraringNewsProps = {
  eyebrow: "In the press",
  featured: {
    badge: "From our journal",
    title: "Inside the lab where Tessel tests its sleep staging",
    cta: { label: "Read the story", href: "#" },
  },
  items: [
    { title: "The Northline Review: Tessel Loop 3 sets a new bar for everyday comfort", href: "#" },
    { title: "Field & Form: A week with the thinnest ring we've ever worn, and why we kept it on", href: "#" },
    { title: "Signal Weekly: Why the Loop 3 became our daily pick", href: "#" },
  ],
  footnotes: [
    <>
      <sup>1</sup>From a 2026 poll of 2,840 Tessel members after 45 days of wear.
    </>,
    <>
      <sup>2</sup>Early Notice is a general wellness feature. It does not diagnose, treat or prevent any condition and is not medical
      advice. Don't use it to replace care from a clinician or to change treatment you've been given. If you're worried about your
      health, talk to your doctor; in an emergency, call your local emergency number.
    </>,
  ],
};

export default function Demo() {
  return <OuraringNews {...newsSample} />;
}

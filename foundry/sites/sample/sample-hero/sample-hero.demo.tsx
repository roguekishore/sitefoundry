import { SampleHero } from "./sample-hero";

const photo =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"><rect width="400" height="500" fill="#d9d4cc"/><circle cx="200" cy="210" r="90" fill="#bfb8ad"/><rect x="90" y="330" width="220" height="120" rx="60" fill="#bfb8ad"/></svg>`,
  );

export default function Demo() {
  return (
    <SampleHero
      eyebrow="RS Puram · since 2009"
      title="Gentle dentistry, on your schedule."
      subtitle="Same-week appointments, clear prices before we start, and a team that explains every step."
      primary={{ label: "Book a visit", href: "#book" }}
      secondary={{ label: "See treatments", href: "#treatments" }}
      image={{ src: photo, alt: "Placeholder portrait" }}
    />
  );
}

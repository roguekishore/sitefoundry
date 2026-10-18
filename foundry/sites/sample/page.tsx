// The whole recreated page, built only from this site's blocks. Shown in the gallery as "sample — full page".
import { SampleHeader } from "@foundry/sample-header";
import { SampleHero } from "@foundry/sample-hero";

export default function Page() {
  return (
    <>
      <SampleHeader
        brand="Nila Dental"
        links={[
          { label: "Treatments", href: "#treatments" },
          { label: "Doctors", href: "#doctors" },
          { label: "Prices", href: "#prices" },
        ]}
        cta={{ label: "Book a visit", href: "#book" }}
      />
      <SampleHero
        eyebrow="RS Puram · since 2009"
        title="Gentle dentistry, on your schedule."
        subtitle="Same-week appointments, clear prices before we start, and a team that explains every step."
        primary={{ label: "Book a visit", href: "#book" }}
        secondary={{ label: "See treatments", href: "#treatments" }}
      />
    </>
  );
}

import { SampleHeader } from "./sample-header";

export default function Demo() {
  return (
    <SampleHeader
      brand="Nila Dental"
      links={[
        { label: "Treatments", href: "#treatments" },
        { label: "Doctors", href: "#doctors" },
        { label: "Prices", href: "#prices" },
        { label: "Visit", href: "#visit" },
      ]}
      cta={{ label: "Book a visit", href: "#book" }}
    />
  );
}

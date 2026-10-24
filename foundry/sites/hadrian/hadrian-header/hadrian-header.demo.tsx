// Sample content (gallery only); the page reuses it. Kestrel Works and its plants are made up.
import { HadrianHeader, type HadrianHeaderProps } from "./hadrian-header";

export const headerSample: HadrianHeaderProps = {
  brand: "Kestrel",
  homeHref: "#top",
  clocks: [
    { code: "OH", time: "06:14AM EDT", timeZone: "America/New_York" },
    { code: "TX", time: "05:14AM CDT", timeZone: "America/Chicago" },
    { code: "UT", time: "04:14AM MDT", timeZone: "America/Denver" },
    { code: "WA", time: "03:14AM PDT", timeZone: "America/Los_Angeles" },
  ],
  menuLabel: "Menu",
  closeLabel: "Close",
  links: [
    { label: "About", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Journal", href: "#journal" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Demo() {
  return (
    <div className="min-h-[60rem] bg-background">
      <HadrianHeader {...headerSample} />
    </div>
  );
}

import { LithicDevelopers, type LithicDevelopersProps } from "./lithic-developers";

export const developersSample: LithicDevelopersProps = {
  title: "Hand your engineers tools that keep up",
  text: (
    <>
      While building our first product, <strong>Tollgate</strong>, we found the card platforms on offer were slow, thinly documented and hard to change. So we made Corvane: clean APIs, thorough guides and processing fast enough to match.
    </>
  ),
  links: [
    { label: "Read the guides", href: "#" },
    { label: "Open the test bench", href: "#" },
  ],
};

export default function Demo() {
  return <LithicDevelopers {...developersSample} />;
}

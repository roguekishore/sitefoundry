// Sample content lives here (gallery only); the page reuses it.
import { MercuryArt } from "@foundry/mercury-art";
import { logosSample } from "../mercury-logos/mercury-logos.demo";
import { MercuryStories, type MercuryStoriesProps } from "./mercury-stories";

export const storiesSample: MercuryStoriesProps = {
  title: ["Trusted by 120K+ of the", "most stubborn founders", "we've ever met"],
  logos: logosSample.logos,
  stories: [
    {
      tag: "Software",
      quote: "“A bank that behaves like good software. Most things take a minute, and nothing needs a phone call.”",
      name: "Noor Haddad",
      role: "Co-founder, Orbitly",
      media: <MercuryArt variant="studio" />,
      label: "Story from Orbitly",
    },
    {
      tag: "Retail",
      quote: "“We moved every account over in a week and haven't thought about banking since.”",
      name: "Tomás Reyes",
      role: "Founder, Fernhouse",
      media: <MercuryArt variant="valley" />,
      label: "Story from Fernhouse",
    },
    {
      tag: "Services",
      quote: "“Cards for the whole crew, limits per job, receipts that match themselves. It just runs.”",
      name: "Ada Okafor",
      role: "Owner, Crateful",
      media: <MercuryArt variant="lens" />,
      label: "Story from Crateful",
    },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background">
      <MercuryStories {...storiesSample} />
    </div>
  );
}

import { AtSign, Camera, Play, Rss } from "lucide-react";
import { GalaxyFooter, type GalaxyFooterProps } from "./galaxy-footer";

const l = (label: string) => ({ label, href: "#" });

export const footerSample: GalaxyFooterProps = {
  brandLabel: "Brightrail home",
  groups: [
    { title: "Brightrail businesses", links: [l("Trading Desk"), l("Funds"), l("Ledger Services"), l("Brightrail App"), l("Compute Campus")] },
    { title: "About Brightrail", links: [l("Our Story"), l("Clients"), l("Leadership"), l("Jobs"), l("Press"), l("Events")] },
    { title: "Research", links: [l("All Research"), l("Reports"), l("Opinion"), l("Podcasts"), l("Talks & Webinars"), l("→ Newsletter")] },
    { title: "Get in touch", links: [l("→ Open an Account"), l("→ Press Desk"), l("→ Shareholders")] },
    { title: "Learn", links: [l("Onchain Basics"), l("Security & Audits"), l("Market Data"), l("Glossary")] },
  ],
  socials: [
    { label: "Newsletter", href: "#", icon: <AtSign aria-hidden strokeWidth={1.75} /> },
    { label: "Feed", href: "#", icon: <Rss aria-hidden strokeWidth={1.75} /> },
    { label: "Photos", href: "#", icon: <Camera aria-hidden strokeWidth={1.75} /> },
    { label: "Videos", href: "#", icon: <Play aria-hidden strokeWidth={1.75} /> },
  ],
  postsTitle: "Latest research",
  posts: [
    { href: "#", category: "Talks", date: "October 21, 2026", title: "Desk Notes: Why Order Books Thicken as AI Trades More", tags: ["AI", "Markets"], mediaLabel: "Talk thumbnail" },
    { href: "#", category: "Opinion", date: "October 18, 2026", title: "What We Learned Running a Validator Upgrade at Scale", mediaLabel: "Article image" },
  ],
  podcastTitle: "The Brightrail podcast",
  podcast: { href: "#", category: "Podcasts", date: "October 20, 2026", title: "Ledgers & Lunch with Imogen Sato", mediaLabel: "Podcast cover" },
  copyright: "© 2026 Brightrail. All rights reserved.",
  copyrightLink: l("Cookie settings"),
  legal: [
    [
      { text: "Terms of use", href: "#" },
      { text: ". " },
      { text: "Privacy notice", href: "#" },
      { text: ". Brokerage services are offered by Brightrail Markets LLC, a member of " },
      { text: "the regulator", href: "#" },
      { text: ". Derivatives disclosures." },
    ],
    [{ text: "Certain payment services are provided by Brightrail Payments LLC (licence 4471902). See where we are licensed and how to reach each state's regulator at " }, { text: "our licences page", href: "#" }, { text: "." }],
    [{ text: "Read our warning about scams and fake emails · report a problem with this site.", href: "#" }],
  ],
};

export default function Demo() {
  return <GalaxyFooter {...footerSample} />;
}

import { GalaxyPostGrid, type GalaxyPostGridProps } from "./galaxy-post-grid";

export const researchSample: GalaxyPostGridProps = {
  title: "Research & Notes",
  viewAll: { label: "See everything", href: "#" },
  columns: 3,
  posts: [
    { href: "#", category: "Research", date: "October 15, 2026", title: "Who Owns a Model's Output?", tags: ["AI"], mediaLabel: "Article image" },
    { href: "#", category: "Podcasts", date: "October 12, 2026", title: "Ledger Hour at One Year: Quantum Risk and the New Paper Markets", mediaLabel: "Episode image" },
    { href: "#", category: "Research", date: "September 29, 2026", title: "How Forecast-Market Traders Behave", tags: ["Forecast Markets"], mediaLabel: "Article image" },
  ],
};

export const newsSample: GalaxyPostGridProps = {
  title: "Company News",
  viewAll: { label: "See everything", href: "#" },
  columns: 4,
  posts: [
    { href: "#", date: "August 06, 2026", title: "Brightrail and Harbor Trust Partner on Tokenised Deposits", mediaLabel: "Announcement image" },
    { href: "#", date: "July 30, 2026", title: "Brightrail Adds a 620-Acre Compute Campus Outside Amarillo, Texas", mediaLabel: "Campus photo" },
    { href: "#", date: "July 19, 2026", title: "Brightrail signs a stadium naming deal with Westvale State", mediaLabel: "Announcement image" },
    { href: "#", date: "August 12, 2026", title: "Nordbank Picks Brightrail to Bring Digital Asset Trading to Its Clients", mediaLabel: "Announcement image" },
  ],
};

export default function Demo() {
  return (
    <>
      <GalaxyPostGrid {...researchSample} />
      <GalaxyPostGrid {...newsSample} />
    </>
  );
}

import { GalaxyCodeCard } from "@foundry/galaxy-code-card";
import { codeCardSample } from "../galaxy-code-card/galaxy-code-card.demo";
import { GalaxySplit, type GalaxySplitProps } from "./galaxy-split";

export const letterSample: GalaxySplitProps = {
  eyebrow: "A note from our founder",
  title: "Wren Achterberg on why ledgers and GPUs belong together",
  body: "Our founder sets out the case for the software economy: why settlement and compute are converging, and why Brightrail runs both halves of it.",
  action: { label: "Read the note", href: "#" },
  mediaSide: "left",
  mediaShape: "square",
  mediaLabel: "Portrait video",
};

export const moneySample: GalaxySplitProps = {
  eyebrow: "Clearing money",
  title: "Onchain Money",
  titleSize: "lg",
  body: "The plumbing institutions need to run onchain: credit, trading, safekeeping and the ledgers underneath, plus an app for everyday savers.",
  mediaSide: "right",
  mediaShape: "art",
  narrowText: true,
  mediaLabel: "Abstract artwork",
  links: [
    { title: "Trading Desk", text: "Deep liquidity across spot, credit and derivatives.", href: "#" },
    { title: "Funds", text: "Research-led strategies with long horizons.", href: "#" },
    { title: "Ledger Services", text: "Safekeeping and staking built for institutions.", href: "#" },
    { title: "Brightrail App", text: "Institutional rails, sized for personal savers.", href: "#" },
  ],
};

export const computeSample: GalaxySplitProps = {
  eyebrow: "Running compute",
  title: "Compute Campus",
  titleSize: "lg",
  body: "The power the coming generation of models will draw on: grid-scale campuses and dense GPU halls, built ahead of demand.",
  action: { label: "Tour the campus", href: "#" },
  mediaSide: "left",
  mediaShape: "art",
  narrowText: true,
  mediaLabel: "Abstract artwork",
};

export const featuredSample: GalaxySplitProps = {
  eyebrow: "Featured episode",
  title: "Stablecoins and power grids with Tomás Ferreira",
  action: { label: "Play episode", href: "#" },
  mediaSide: "right",
  mediaShape: "wide",
  mediaLabel: "Episode artwork",
};

export const railsSample: GalaxySplitProps = {
  title: "Here is the code laying new tracks for money.",
  body: "Brightrail works with banks, networks and developers to stand up settlement rails and speed up adoption, pairing core infrastructure with the reach of our trading desk.",
  action: { label: "See the rails", href: "#" },
  mediaSide: "right",
  mediaShape: "card",
  narrowText: true,
  media: <GalaxyCodeCard {...codeCardSample} />,
};

export default function Demo() {
  return (
    <>
      <GalaxySplit {...letterSample} />
      <GalaxySplit {...moneySample} />
      <GalaxySplit {...railsSample} />
    </>
  );
}

import { GalaxyJoin, type GalaxyJoinProps } from "./galaxy-join";

export const joinSample: GalaxyJoinProps = {
  panels: [
    { title: "Work at Brightrail", text: "Curious builders who move quickly, putting the software economy together.", link: { label: "Browse open roles", href: "#" } },
    { title: "For shareholders", text: "Filings, earnings decks and share information: BRTL on the exchange.", link: { label: "Shareholder centre", href: "#" } },
  ],
};

export default function Demo() {
  return <GalaxyJoin {...joinSample} />;
}

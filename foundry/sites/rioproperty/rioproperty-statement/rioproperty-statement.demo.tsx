import { RiopropertyStatement, type RiopropertyStatementProps } from "./rioproperty-statement";

export const statementSample: RiopropertyStatementProps = {
  heading: "You came for the track record. Fair enough.",
  body: "We work only in commercial property, in Salt Bay and the towns along its coast road. Shops, warehouses and offices: we sell them, let them and value them for owners, builders, funds and lenders.",
  link: { label: "Browse closed deals", href: "#deals" },
  wide: true,
};

export const offMarketSample: RiopropertyStatementProps = {
  heading: "Most of what we handle never goes online.",
  subhead: "The big listing sites see a slice of it, and we keep it that way.",
  body: "Listing sites have their place, and we post there too. But plenty of our stock changes hands quietly, between people who asked first. Say what you need and we'll open the drawer.",
  link: { label: "Talk to us", href: "#contact" },
};

export default function Demo() {
  return (
    <>
      <RiopropertyStatement {...statementSample} />
      <RiopropertyStatement {...offMarketSample} />
    </>
  );
}

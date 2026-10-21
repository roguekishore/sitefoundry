import { KononenkogroupClients, type KononenkogroupClientsProps } from "./kononenkogroup-clients";

export const clientsSample: KononenkogroupClientsProps = {
  heading: "Councils, Builders and Families Who Plan With Us",
  clients: [
    "Norrland Estates",
    "Calder Homes",
    "Vireo Hotels",
    "Brightwater",
    "Oakhurst",
    "Halden Group",
    "Meridel",
    "Linnet & Co",
    "Saltmarsh",
    "Corvid Retail",
    "Ashgrove",
    "Tessel",
    "Fenwick Yard",
    "Quarry Lane",
    "Pellam Living",
    "Rowan Civic",
    "Kestrel Bay",
    "Umber Works",
  ],
};

export default function Demo() {
  return (
    <div className="dark bg-background">
      <div className="h-[60svh]" />
      <KononenkogroupClients {...clientsSample} />
      <div className="h-[60svh]" />
    </div>
  );
}

import { ThirdwayClients, type ThirdwayClientsProps } from "./thirdway-clients";

export const clientsSample: ThirdwayClientsProps = {
  heading: "In good company",
  text: "Many of our projects come from clients who return to us again and again. Others arrive through the professional relationships we have built over the years. From household names to the most trusted names in property, we aim to stay in touch long after handover.",
  clients: [
    { name: "Lumen & Co", style: "serif" },
    { name: "NORTHBANK", style: "caps" },
    { name: "kestrel", style: "bold" },
    { name: "Aldous Pike", style: "serif" },
    { name: "marlow bank", style: "bold" },
    { name: "TERRAMORE", style: "italic" },
    { name: "quill.", style: "sans" },
    { name: "Fennick", style: "mono" },
    { name: "OSTLER HALL", style: "caps" },
    { name: "Brightwell", style: "sans" },
    { name: "Calloway Group", style: "serif" },
    { name: "HALDANE", style: "italic" },
  ],
};

export default function Demo() {
  return <ThirdwayClients {...clientsSample} />;
}

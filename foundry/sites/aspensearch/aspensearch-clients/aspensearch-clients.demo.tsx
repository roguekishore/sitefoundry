import { AspensearchClients, type AspensearchClientsProps } from "./aspensearch-clients";

export const clientsSample: AspensearchClientsProps = {
  id: "clients",
  word: "Firms",
  label: "Who we hire for",
  text: "Most of our client ties go back well over a decade. They aren't names we collected — they're teams we've helped grow through several hiring cycles, from a lone quant researcher to whole engineering groups. We work with firms that pay at the top of the market, run serious research and treat hiring as a long game.",
  action: { label: "Hire with us", href: "#contact" },
  clients: [
    { name: "Halcyon Quant", sector: "Quant finance" },
    { name: "Brightline Capital", sector: "Quant finance" },
    { name: "Ostrander Labs", sector: "AI" },
    { name: "Kepler Systematic", sector: "Quant finance" },
    { name: "Torrent Research", sector: "Quant finance" },
    { name: "Vellum AI", sector: "AI" },
  ],
};

export default function Demo() {
  return <AspensearchClients {...clientsSample} />;
}

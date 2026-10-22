// Sample content lives here (gallery only); the page reuses it. All names are fictional.
import { ApexspaceLogos, type ApexspaceLogosProps } from "./apexspace-logos";

export const logosSample: ApexspaceLogosProps = {
  text: "Flying today for civil agencies, defence programmes and commercial operators",
  customers: [
    { name: "Several prime contractors", style: "sans" },
    { name: "Halden", style: "display" },
    { name: "Larkspur Systems", style: "sans" },
    { name: "Civil Orbit Office", style: "mono" },
    { name: "Northline Guard", style: "mono" },
    { name: "Tessera", style: "display" },
    { name: "Brightwater & Co", style: "sans" },
  ],
};

export default function Demo() {
  return <ApexspaceLogos {...logosSample} />;
}

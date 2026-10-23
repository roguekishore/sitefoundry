import { BrexLogos, type BrexLogosProps } from "./brex-logos";

export const logosSample: BrexLogosProps = {
  title: "Trusted by 9,000+ growing companies.",
  logos: ["Parcelo", "Northwind Labs", "Tidemark", "Basalt", "Oakridge", "Lumio", "Fennel", "Quarry", "Halcyon", "Mosaic", "Vantage", "Ironleaf"],
};

export default function Demo() {
  return <BrexLogos {...logosSample} />;
}

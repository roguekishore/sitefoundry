import { GalaxyStats, type GalaxyStatsProps } from "./galaxy-stats";

export const statsSample: GalaxyStatsProps = {
  stats: [
    { value: "$6.3B", label: "Client balances held, Q3 2026" },
    { value: "$2.1B", label: "Average credit book, Q3 2026" },
    { value: "940 MW", label: "Contracted compute power" },
    { value: "41", label: "Markets cleared every day" },
  ],
};

export default function Demo() {
  return <GalaxyStats {...statsSample} />;
}

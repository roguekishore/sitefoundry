import { KononenkogroupStats, type KononenkogroupStatsProps } from "./kononenkogroup-stats";

export const statsSample: KononenkogroupStatsProps = {
  stats: [
    { value: "16+", label: "Years in practice" },
    { value: "320+", label: "Buildings delivered" },
    { value: "38", label: "Architects and makers" },
    { value: "55K", label: "Square metres built" },
  ],
};

export default function Demo() {
  return <KononenkogroupStats {...statsSample} />;
}

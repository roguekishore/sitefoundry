import { SuperhumanLogos, type SuperhumanLogosProps } from "./superhuman-logos";

export const logosSample: SuperhumanLogosProps = {
  caption: "Trusted by the most inventive teams in the world",
  logos: [
    { name: "Quillbase", mark: <span className="text-xl font-extrabold tracking-[-0.03em]">Quillbase</span> },
    { name: "halcyon", mark: <span className="text-xl font-light tracking-[0.02em]">halcyon</span> },
    { name: "NORTHPIER", mark: <span className="text-sm font-medium tracking-[0.3em]">NORTHPIER</span> },
    { name: "Parcelry", mark: <span className="text-2xl font-bold tracking-[-0.04em]">Parcelry</span> },
    { name: "tandem", mark: <span className="text-xl font-semibold tracking-[-0.05em]">tandem</span> },
    { name: "MOSAIC", mark: <span className="text-base font-semibold tracking-[0.18em]">MOSAIC</span> },
  ],
};

export default function Demo() {
  return <SuperhumanLogos {...logosSample} />;
}


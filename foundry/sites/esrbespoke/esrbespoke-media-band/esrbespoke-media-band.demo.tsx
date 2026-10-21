import { EsrbespokeMediaBand, type EsrbespokeMediaBandProps } from "./esrbespoke-media-band";

export const floorBandSample: EsrbespokeMediaBandProps = { label: "The workshop floor, lights on" };
export const loungeBandSample: EsrbespokeMediaBandProps = { label: "The client lounge" };
export const careersBandSample: EsrbespokeMediaBandProps = { label: "A finished car on the handover bay" };

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <div className="h-[50svh]" />
      <EsrbespokeMediaBand {...floorBandSample} />
      <div className="h-[50svh]" />
    </div>
  );
}

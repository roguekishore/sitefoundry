import { MrcresidencesbocaratonPicture, type MrcresidencesbocaratonPictureProps } from "./mrcresidencesbocaraton-picture";

export const facadeSample: MrcresidencesbocaratonPictureProps = {
  caption: "Bayfront elevation",
  note: "Rendering for illustration only",
};

export const poolSample: MrcresidencesbocaratonPictureProps = {
  caption: "Lanai pool deck",
  note: "Rendering for illustration only",
};

export const sailSample: MrcresidencesbocaratonPictureProps = {
  size: "wide",
  note: "A sloop leaving the city marina at dusk, five minutes from Velloro.",
};

export default function Demo() {
  return (
    <div className="bg-background py-[30svh]">
      <MrcresidencesbocaratonPicture {...facadeSample} />
      <div className="h-[30svh]" />
      <MrcresidencesbocaratonPicture {...sailSample} />
    </div>
  );
}

import { ParsleyhealthArrow } from "./parsleyhealth-carousel";

export default function Demo() {
  return (
    <div className="flex items-center gap-4 bg-background p-8">
      <ParsleyhealthArrow direction="prev" label="Previous" disabled />
      <ParsleyhealthArrow direction="next" label="Next" />
      <ParsleyhealthArrow direction="prev" label="Previous" variant="solid" />
      <ParsleyhealthArrow direction="next" label="Next" variant="solid" />
      <ParsleyhealthArrow direction="next" label="Next" variant="dot" />
    </div>
  );
}

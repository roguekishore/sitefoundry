import { WiemerV2Reveal } from "./wiemer-v2-reveal";

const paragraphs = [
  "Each paragraph lifts 25px and fades in as it comes into view.",
  "The next one follows a little later in the same scroll.",
  "And the third a little later again.",
];

export default function Demo() {
  return (
    <div className="bg-background px-gutter pt-[70vh] pb-[40vh] text-foreground">
      <div className="max-w-md space-y-5 text-lg">
        {paragraphs.map((p, i) => (
          <WiemerV2Reveal key={p} as="p" effect="rise" step={i}>
            {p}
          </WiemerV2Reveal>
        ))}
      </div>
      <div className="mt-16 aspect-[2/3] max-w-sm overflow-clip rounded-xl">
        <WiemerV2Reveal effect="drift" drift={[-46, 46]} className="-my-12 h-[calc(100%+6rem)] bg-muted" />
      </div>
    </div>
  );
}

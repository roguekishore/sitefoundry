import { ZoeBento, type ZoeBentoProps } from "./zoe-bento";

export const bentoSample: ZoeBentoProps = {
  tiles: [
    { kind: "photo" },
    { kind: "photo" },
    { kind: "figure", tone: "ink", title: "90+", caption: "Published studies" },
    { kind: "feature", tone: "cream", title: "40 plants in one scoop" },
    { kind: "feature", tone: "sun", title: "A top-ranked food science podcast" },
    { kind: "figure", tone: "sage", title: "250k+", caption: "Gut samples analysed" },
    { kind: "photo" },
    { kind: "photo" },
  ],
};

export default function Demo() {
  return <ZoeBento {...bentoSample} />;
}

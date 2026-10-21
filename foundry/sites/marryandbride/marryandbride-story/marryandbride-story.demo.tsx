import { MarryandbrideStory, type MarryandbrideStoryProps } from "./marryandbride-story";

export const storySample: MarryandbrideStoryProps = {
  paragraphs: [
    "Loop by loop and row by row, each piece is worked slowly by hand in our studio, until it sits on your shoulders exactly as it should on the day.",
    "We knit with what feels like a cloud: undyed alpaca, brushed kid mohair and a whisper of mulberry silk, spun by mills that can tell us where every fleece came from.",
  ],
};

export default function Demo() {
  return <MarryandbrideStory {...storySample} />;
}

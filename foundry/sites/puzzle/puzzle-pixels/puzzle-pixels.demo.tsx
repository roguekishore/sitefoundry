import { PuzzlePixels } from "./puzzle-pixels";

export default function Demo() {
  return (
    <div className="relative h-[28rem] overflow-clip bg-primary">
      <PuzzlePixels className="absolute top-0 right-0" />
      <PuzzlePixels pattern="block" className="absolute bottom-0 left-6" />
      <PuzzlePixels pattern="step" className="absolute top-24 left-1/2 [--pixel:3rem]" />
    </div>
  );
}

import { PuzzleButton } from "./puzzle-button";

export default function Demo() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="flex flex-wrap items-center gap-4">
        <PuzzleButton href="#" size="sm">Get a walkthrough</PuzzleButton>
        <PuzzleButton href="#" size="sm" variant="violet">Start free</PuzzleButton>
        <PuzzleButton href="#">Get a walkthrough</PuzzleButton>
        <PuzzleButton href="#" variant="outline">Watch the tour</PuzzleButton>
        <PuzzleButton href="#" size="lg" variant="card" arrow>Start free</PuzzleButton>
      </div>
      <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-primary p-8">
        <PuzzleButton href="#" variant="violet">Get a walkthrough</PuzzleButton>
        <PuzzleButton href="#" variant="outline-on-dark">Watch the tour</PuzzleButton>
        <PuzzleButton href="#" size="lg" variant="light" arrow>See the plans</PuzzleButton>
      </div>
    </div>
  );
}

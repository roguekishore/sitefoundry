import { LedupButton } from "./ledup-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-4 bg-background p-10 font-sans">
      <LedupButton href="#contact">Talk to us</LedupButton>
      <LedupButton href="#about" variant="outline">
        Read more
      </LedupButton>
    </div>
  );
}

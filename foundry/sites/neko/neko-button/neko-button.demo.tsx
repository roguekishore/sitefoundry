import { NekoButton } from "./neko-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-4 bg-background p-10">
      <NekoButton variant="primary" href="#">Book a visit</NekoButton>
      <NekoButton href="#">Explore the Ardent Body Check</NekoButton>
      <NekoButton size="sm" variant="primary">Book a visit</NekoButton>
    </div>
  );
}

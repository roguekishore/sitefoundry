import { AspensearchSmoothScroll } from "./aspensearch-smooth-scroll";

const tiles = Array.from({ length: 10 }, (_, i) => i);

export default function Demo() {
  return (
    <div className="grid grid-cols-2 bg-background">
      <AspensearchSmoothScroll />
      {tiles.map((n) => (
        <div key={n} className={n % 3 === 0 ? "h-60 bg-highlight" : n % 3 === 1 ? "h-60 bg-foreground" : "h-60 bg-muted"} />
      ))}
    </div>
  );
}

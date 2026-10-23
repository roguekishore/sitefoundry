import { ThirdwaySmoothScroll } from "./thirdway-smooth-scroll";

export default function Demo() {
  return (
    <div className="bg-background p-8 text-foreground">
      <ThirdwaySmoothScroll />
      {Array.from({ length: 12 }, (_, n) => (
        <div key={n} className="mb-4 h-40 rounded-[2px] bg-muted" />
      ))}
    </div>
  );
}

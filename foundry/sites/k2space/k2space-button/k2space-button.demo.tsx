import { K2spaceButton } from "./k2space-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-6 bg-background p-10 text-foreground">
      <K2spaceButton href="#">Read more</K2spaceButton>
      <div className="flex gap-1">
        <K2spaceButton variant="arrow" direction="left" ariaLabel="Previous" />
        <K2spaceButton variant="arrow" ariaLabel="Next" />
      </div>
      <K2spaceButton variant="link" href="#">
        Explore the buses
      </K2spaceButton>
    </div>
  );
}

import { ThirdwayCarousel } from "./thirdway-carousel";
import { ThirdwayCountPill } from "@foundry/thirdway-count-pill";
import { ThirdwayPlaceholder } from "@foundry/thirdway-placeholder";

export default function Demo() {
  return (
    <div className="bg-background py-16 text-foreground">
      <ThirdwayCarousel
        prevLabel="Previous"
        nextLabel="Next"
        label={
          <>
            <ThirdwayCountPill value="06" />
            <span>Teams</span>
          </>
        }
        itemClassName="w-[19.5rem] md:w-[20.5rem]"
      >
        {Array.from({ length: 6 }, (_, i) => (
          <ThirdwayPlaceholder key={i} className="aspect-[3/4] w-full" />
        ))}
      </ThirdwayCarousel>
    </div>
  );
}

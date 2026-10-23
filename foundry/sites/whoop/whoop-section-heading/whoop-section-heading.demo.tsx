import { WhoopSectionHeading } from "./whoop-section-heading";

export default function Demo() {
  return (
    <div className="space-y-0">
      <div className="bg-background px-gutter py-section text-foreground">
        <WhoopSectionHeading
          heading="See the whole story of your body"
          body="Round-the-clock readings of sleep, effort and stress, turned into one clear picture you can act on each morning."
        />
      </div>
      <div className="bg-foreground px-gutter py-section text-background dark:bg-card dark:text-card-foreground">
        <WhoopSectionHeading heading="Pick your band" />
      </div>
    </div>
  );
}

import { ReckonerButton } from "./reckoner-button";

export default function Demo() {
  return (
    <div className="flex flex-col gap-10 text-foreground">
      <div className="flex flex-wrap items-center gap-4 bg-background p-10">
        <ReckonerButton href="#">Explore</ReckonerButton>
        <ReckonerButton href="#" variant="outline">
          Our funds
        </ReckonerButton>
        <ReckonerButton href="#" variant="primary">
          Speak with us
        </ReckonerButton>
        <ReckonerButton size="lg">Subscribe</ReckonerButton>
      </div>
      <div className="dark flex flex-wrap items-center gap-4 bg-background p-10 text-foreground">
        <ReckonerButton href="#">Our approach</ReckonerButton>
        <ReckonerButton href="#" variant="outline">
          Our funds
        </ReckonerButton>
        <ReckonerButton href="#" variant="primary">
          Speak with us
        </ReckonerButton>
      </div>
    </div>
  );
}

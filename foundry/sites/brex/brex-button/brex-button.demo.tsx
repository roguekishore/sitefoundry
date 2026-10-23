import { BrexButton } from "./brex-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-4 bg-background p-8">
      <BrexButton href="#">Open an account</BrexButton>
      <BrexButton href="#" size="md">
        Get going
      </BrexButton>
      <BrexButton href="#" size="lg">
        Talk to sales
      </BrexButton>
      <BrexButton href="#" variant="link">
        Explore the cards
      </BrexButton>
    </div>
  );
}

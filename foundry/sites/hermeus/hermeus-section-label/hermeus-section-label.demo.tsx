// Gallery only: a plain label and one with a button, below a screen of space so the
// scroll-in shows.
import { HermeusButton } from "@foundry/hermeus-button";
import { HermeusSectionLabel } from "./hermeus-section-label";

export default function Demo() {
  return (
    <div className="bg-background px-gutter pt-[70svh] pb-[80svh] text-foreground">
      <HermeusSectionLabel index="01" label="Purpose" />
      <div className="h-24" />
      <HermeusSectionLabel index="04" label="Latest" action={<HermeusButton label="All news" href="#" />} />
    </div>
  );
}

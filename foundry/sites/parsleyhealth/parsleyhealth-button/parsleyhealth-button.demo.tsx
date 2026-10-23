import { ParsleyhealthButton } from "./parsleyhealth-button";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6 bg-background p-8">
      <div className="flex flex-wrap items-center gap-4">
        <ParsleyhealthButton href="#">Start today</ParsleyhealthButton>
        <ParsleyhealthButton href="#" variant="outline">
          Compare plans
        </ParsleyhealthButton>
        <ParsleyhealthButton href="#" variant="secondary" arrow>
          Book a first visit
        </ParsleyhealthButton>
        <ParsleyhealthButton href="#" variant="highlight" size="sm">
          Read every story
        </ParsleyhealthButton>
        <ParsleyhealthButton size="xs">Check my plan</ParsleyhealthButton>
      </div>
      {/* inside a .dark scope (the nav bar, the footer) primary turns bone */}
      <div className="dark flex flex-wrap items-center gap-4 bg-background p-6">
        <ParsleyhealthButton href="#" size="sm">
          Become a member
        </ParsleyhealthButton>
        <ParsleyhealthButton href="#" variant="outline" size="sm">
          Become a member
        </ParsleyhealthButton>
      </div>
    </div>
  );
}

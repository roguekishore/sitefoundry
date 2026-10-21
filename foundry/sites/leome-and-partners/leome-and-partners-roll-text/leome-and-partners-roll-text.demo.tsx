import { LeomeAndPartnersRollText } from "./leome-and-partners-roll-text";

export default function Demo() {
  return (
    <div className="flex flex-col items-start gap-6 bg-background p-10 font-sans text-foreground">
      <a href="#" className="group/roll text-2xl font-medium">
        <LeomeAndPartnersRollText text="Practice areas" />
      </a>
      <a href="#" className="group/roll text-xs font-medium uppercase">
        <LeomeAndPartnersRollText text="Privacy policy" />
      </a>
    </div>
  );
}

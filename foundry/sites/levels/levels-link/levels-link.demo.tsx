import { LevelsLink } from "./levels-link";

export default function Demo() {
  return (
    <div className="flex flex-col items-start gap-5 bg-background p-8">
      <LevelsLink href="#">See what your meals are doing</LevelsLink>
      <LevelsLink href="#" size="sm">
        Read the findings
      </LevelsLink>
      <LevelsLink href="#" size="sm" tone="ink">
        Details
      </LevelsLink>
    </div>
  );
}

import { InstituteofhealthIconButton } from "./instituteofhealth-icon-button";

export default function Demo() {
  return (
    <div className="flex items-center gap-3 bg-muted p-8">
      <InstituteofhealthIconButton icon="prev" label="Previous" />
      <InstituteofhealthIconButton icon="next" label="Next" />
      <InstituteofhealthIconButton icon="prev" label="Previous" size="md" />
      <InstituteofhealthIconButton icon="next" label="Next" size="md" />
      <InstituteofhealthIconButton icon="plus" label="Open" />
    </div>
  );
}

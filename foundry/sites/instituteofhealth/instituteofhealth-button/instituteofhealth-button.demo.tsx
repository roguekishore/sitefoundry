import { InstituteofhealthButton } from "./instituteofhealth-button";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6 bg-background p-8">
      <div className="flex flex-wrap gap-4">
        <InstituteofhealthButton href="#">Browse programmes</InstituteofhealthButton>
        <InstituteofhealthButton href="#" variant="light" className="bg-muted border-muted">Book an intro call</InstituteofhealthButton>
      </div>
      <div className="flex flex-wrap gap-4 rounded-lg bg-muted-foreground p-6">
        <InstituteofhealthButton href="#" variant="glass">Read more</InstituteofhealthButton>
        <InstituteofhealthButton href="#" variant="light">Book an intro call</InstituteofhealthButton>
      </div>
    </div>
  );
}

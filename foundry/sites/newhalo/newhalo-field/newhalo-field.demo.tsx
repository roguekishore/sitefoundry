import { NewhaloField } from "./newhalo-field";

export default function Demo() {
  return (
    <form className="grid max-w-md gap-6 bg-background p-8 text-foreground">
      <NewhaloField label="Your name" name="name" required />
      <NewhaloField label="Topic" name="topic" kind="select" placeholder="Pick one" options={["Clinics", "Press", "Partners"]} required />
      <NewhaloField label="Notes" name="notes" kind="textarea" placeholder="A few lines are plenty" />
    </form>
  );
}

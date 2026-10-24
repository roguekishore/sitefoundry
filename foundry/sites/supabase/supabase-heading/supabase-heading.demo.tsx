import { SupabaseHeading } from "./supabase-heading";

export default function Demo() {
  return (
    <div className="grid gap-10 bg-background p-8">
      <SupabaseHeading as="h1" size="title" stack="always" parts={[{ text: "Start on a Sunday" }, { text: "Serve a nation", tone: "brand" }]} />
      <SupabaseHeading parts={[{ text: "Run your whole backend" }, { text: "from one quiet console", tone: "muted" }]} />
      <SupabaseHeading size="large" parts={[{ text: "Built where you can see it" }]} />
    </div>
  );
}

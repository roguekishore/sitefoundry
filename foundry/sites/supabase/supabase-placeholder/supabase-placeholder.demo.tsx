import { SupabasePlaceholder } from "./supabase-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-8 bg-background p-8 sm:grid-cols-3">
      <div className="aspect-video">
        <SupabasePlaceholder label="Dashboard video" />
      </div>
      <div className="aspect-square">
        <SupabasePlaceholder tone="soft" label="Card illustration" />
      </div>
      <div className="size-10">
        <SupabasePlaceholder tone="avatar" label="Portrait" />
      </div>
    </div>
  );
}

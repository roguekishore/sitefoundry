import { ArrowUpRight } from "lucide-react";
import { SupabaseButton } from "./supabase-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3 bg-background p-8">
      <SupabaseButton href="#">Open a pool</SupabaseButton>
      <SupabaseButton href="#" variant="outline">
        Book a walkthrough
      </SupabaseButton>
      <SupabaseButton href="#" size="sm">
        Open a pool
      </SupabaseButton>
      <SupabaseButton href="#" size="sm" variant="outline">
        Log in
      </SupabaseButton>
      <SupabaseButton href="#" size="sm" variant="outline" pill>
        Read the guide <ArrowUpRight />
      </SupabaseButton>
    </div>
  );
}

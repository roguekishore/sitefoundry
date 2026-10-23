import { Apple } from "lucide-react";
import { UltrahumanButton } from "./ultrahuman-button";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-8">
      <div className="flex flex-wrap gap-4">
        <UltrahumanButton href="#">Buy now</UltrahumanButton>
        <UltrahumanButton href="#" variant="ink">See the research</UltrahumanButton>
        <UltrahumanButton href="#" variant="outline">
          App Store <Apple aria-hidden className="size-4" />
        </UltrahumanButton>
      </div>
      <div className="dark flex flex-wrap gap-4 rounded-lg bg-muted-foreground/60 p-6">
        <UltrahumanButton href="#" variant="light" size="lg">Shop now</UltrahumanButton>
        <UltrahumanButton href="#" variant="glass">See more</UltrahumanButton>
      </div>
    </div>
  );
}

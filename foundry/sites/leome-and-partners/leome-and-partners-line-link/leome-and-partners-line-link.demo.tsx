import { LeomeAndPartnersLineLink } from "./leome-and-partners-line-link";

export default function Demo() {
  return (
    <div className="flex gap-10 bg-background p-10 text-foreground">
      <LeomeAndPartnersLineLink label="All practice areas" href="#" />
      <LeomeAndPartnersLineLink label="Meet the team" href="#" />
    </div>
  );
}

import { M3PgLink } from "./m3-pg-link";

export default function Demo() {
  return (
    <div className="flex flex-col items-start gap-6 bg-background p-10 text-foreground">
      <M3PgLink href="#more" className="text-lg">Read more</M3PgLink>
      <M3PgLink href="#all" className="text-2xl">All projects</M3PgLink>
      <M3PgLink href="#nav" variant="nav">Studio</M3PgLink>
    </div>
  );
}

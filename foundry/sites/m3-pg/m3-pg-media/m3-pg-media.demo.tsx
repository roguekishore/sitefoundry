import { M3PgMedia } from "./m3-pg-media";

export default function Demo() {
  return (
    <div className="grid gap-5 bg-background p-5 sm:grid-cols-2">
      <M3PgMedia className="aspect-[1.75]" />
      <a href="#zoom" className="group/media block">
        <M3PgMedia zoom className="aspect-[1.77]" />
      </a>
    </div>
  );
}

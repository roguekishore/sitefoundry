import { M3PgBand, type M3PgBandProps } from "./m3-pg-band";

export const bandSample: M3PgBandProps = {};

export default function Demo() {
  return (
    <div className="bg-background pt-16">
      <M3PgBand {...bandSample} />
      <div className="relative z-10 h-[120svh] border-t border-border bg-background" />
    </div>
  );
}

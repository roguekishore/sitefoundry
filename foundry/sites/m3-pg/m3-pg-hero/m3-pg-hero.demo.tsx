import { M3PgHero, type M3PgHeroProps } from "./m3-pg-hero";

export const heroSample: M3PgHeroProps = {
  id: "top",
};

export default function Demo() {
  return <M3PgHero {...heroSample} />;
}

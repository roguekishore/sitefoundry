// Sample content lives here (gallery only); the page reuses it.
import type { HermeusFilmProps } from "./hermeus-film";
import { HermeusFilm } from "./hermeus-film";

export const filmSample: HermeusFilmProps = {
  mediaLabel: "Film: a wing panel flexing under load on the test rig",
};

export default function Demo() {
  return <HermeusFilm {...filmSample} />;
}

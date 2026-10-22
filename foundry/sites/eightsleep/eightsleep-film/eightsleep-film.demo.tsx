import { EightsleepFilm, type EightsleepFilmProps } from "./eightsleep-film";

export const filmSample: EightsleepFilmProps = {
  title: "Watch a night with Mantle 4",
  cta: { label: "Play the film", href: "#" },
  toggleLabel: "Pause the background video",
};

export default function Demo() {
  return <EightsleepFilm {...filmSample} />;
}

import { WildAgFilm, type WildAgFilmProps } from "./wild-ag-film";

export const filmSample: WildAgFilmProps = { tuck: true };

export default function Demo() {
  return (
    <div className="bg-background pb-24">
      <div className="relative z-10 h-[40svh] rounded-b-[calc(var(--radius)*3.4)] bg-linear-15 from-primary to-highlight lg:rounded-b-[calc(var(--radius)*4.5)]" />
      <WildAgFilm {...filmSample} />
    </div>
  );
}

import { ZoeStatement, type ZoeStatementProps } from "./zoe-statement";

export const statementSample: ZoeStatementProps = {
  title: "Your gut runs the show",
  paragraphs: [
    "Most diet advice is years behind the research: the trillions of microbes in your gut shape your energy, mood and long-term health. We study them at scale, and we turn what we find into food and tools anyone can use.",
    "Tillwell is on your side against fad diets, quick fixes and the noise of people selling them.",
  ],
};

export default function Demo() {
  return <ZoeStatement {...statementSample} />;
}

import { BasepowercompanyRating } from "./basepowercompany-rating";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <BasepowercompanyRating score="4.9 stars" sourceInitial="R" sourceName="Rated on Roofline Reviews" />
      <BasepowercompanyRating score="4.9 stars" sourceInitial="R" sourceName="Rated on Roofline Reviews" size="sm" />
    </div>
  );
}

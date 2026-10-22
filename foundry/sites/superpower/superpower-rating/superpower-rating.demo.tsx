import { SuperpowerRating } from "./superpower-rating";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6 bg-background p-8 text-foreground">
      <SuperpowerRating score="4.8 out of 5" source="Verdict reviews" />
      <SuperpowerRating
        stars="boxed"
        score="4.8"
        source="on Verdict"
        extra="52,000+ members"
        avatars={[undefined, undefined, undefined, undefined]}
        className="text-muted-foreground"
      />
    </div>
  );
}

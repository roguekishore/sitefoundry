import { LunchlineScribbleLink } from "./lunchline-scribble-link";

export default function Demo() {
  return (
    <div className="flex gap-10 bg-background px-gutter py-16 text-foreground">
      <LunchlineScribbleLink href="#profile" external>
        Profile
      </LunchlineScribbleLink>
      <LunchlineScribbleLink type="submit">Send</LunchlineScribbleLink>
    </div>
  );
}

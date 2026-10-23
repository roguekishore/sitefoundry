import { ThirdwayArrowLink } from "./thirdway-arrow-link";

export default function Demo() {
  return (
    <div className="grid gap-8 bg-background p-8">
      <ThirdwayArrowLink label="Meet the practice" href="#" />
      <ThirdwayArrowLink label="View all" href="#" size="sm" chip={false} />
      <div className="dark -m-4 bg-background p-4">
        <ThirdwayArrowLink label="Let's talk" href="#" size="sm" />
      </div>
    </div>
  );
}

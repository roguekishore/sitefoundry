import { RiopropertyArrowLink } from "./rioproperty-arrow-link";

export default function Demo() {
  return (
    <div className="flex flex-col gap-10 bg-background p-gutter">
      <RiopropertyArrowLink href="#deals">Browse closed deals</RiopropertyArrowLink>
      <div className="bg-primary p-8">
        <RiopropertyArrowLink tone="highlight" type="submit">
          Send it
        </RiopropertyArrowLink>
      </div>
    </div>
  );
}

import { MrcresidencesbocaratonUnderlineLink } from "./mrcresidencesbocaraton-underline-link";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-12 bg-primary p-gutter py-16 text-primary-foreground">
      <MrcresidencesbocaratonUnderlineLink href="#residences" className="text-[14.4px] font-semibold tracking-[0.07em] uppercase" lineClassName="-bottom-1.5">
        See the residences
      </MrcresidencesbocaratonUnderlineLink>
      <MrcresidencesbocaratonUnderlineLink href="#story" behaviour="grow" duration={300} className="text-sm font-semibold uppercase">
        Our story
      </MrcresidencesbocaratonUnderlineLink>
    </div>
  );
}

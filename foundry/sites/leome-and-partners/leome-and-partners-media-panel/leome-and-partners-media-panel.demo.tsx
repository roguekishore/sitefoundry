import { LeomeAndPartnersMediaPanel } from "./leome-and-partners-media-panel";

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <div className="h-[50svh]" />
      <LeomeAndPartnersMediaPanel>
        <p className="max-w-[29em] text-[1.25rem] leading-[1.4] font-medium lg:text-[1.75rem]">
          A full-bleed photo panel: the photo drifts with the scroll, the lower half darkens, and the content sits bottom-left.
        </p>
      </LeomeAndPartnersMediaPanel>
      <div className="h-[50svh]" />
    </div>
  );
}

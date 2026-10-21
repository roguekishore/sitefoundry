import { RiopropertyFullImage, type RiopropertyFullImageProps } from "./rioproperty-full-image";

export const fullImageSample: RiopropertyFullImageProps = {
  label: "Looking up between two brick towers",
};

export default function Demo() {
  return (
    <div className="bg-background">
      <div className="h-[70vh]" />
      <RiopropertyFullImage {...fullImageSample} />
      <div className="h-[70vh]" />
    </div>
  );
}

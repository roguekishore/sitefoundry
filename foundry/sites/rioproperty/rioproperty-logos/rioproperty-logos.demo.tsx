import { RiopropertyLogos, type RiopropertyLogosProps } from "./rioproperty-logos";

export const logosSample: RiopropertyLogosProps = {
  heading: "A few of the names we've done deals for",
  names: ["Tidewater", "Calder & Moss", "Brightline", "Ostrich Lane", "Pell & Co", "Northfold", "Kiln Coffee", "Marrow"],
};

export default function Demo() {
  return (
    <div className="bg-background">
      <div className="h-[60vh]" />
      <RiopropertyLogos {...logosSample} />
      <div className="h-[60vh]" />
    </div>
  );
}

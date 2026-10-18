// Rebuilt from React Bits' src/demo/Components/GlassIconsDemo.jsx: the component with the props its preview uses.
import GlassIcons from "./GlassIcons"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <GlassIcons size={82} gap={66} columns={3} roundness={0.6} refraction={0.8} bevel={0.6} dispersion={0} frost={0.2} shine={0.85} tint={"#dfdfdf"} tintOpacity={0.2} plate={"tilt"} tilt={30} spread={0.5} hover={"press"} parallax={1} labels={"hover"} intro={true} iconColor={"#ffffff"} items={[{ color: "blue", label: "Files" }, { color: "purple", label: "Books" }, { color: "red", label: "Health" }, { color: "indigo", label: "Weather" }, { color: "orange", label: "Notes" }, { color: "green", label: "Stats" }]} theme={"light"} />
    </div>
  )
}

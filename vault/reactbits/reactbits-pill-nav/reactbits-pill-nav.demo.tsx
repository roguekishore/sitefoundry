// Rebuilt from React Bits' src/demo/Components/PillNavDemo.jsx: the component with the props its preview uses.
import PillNav from "./PillNav"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <PillNav logoAlt="React Bits" items={[{ label: "Home", href: "#home" }, { label: "Journal", href: "#journal" }, { label: "Photos", href: "#photos" }, { label: "About", href: "#about" }]} theme={"light"} layout={"split"} itemStyle={"pill"} hoverEffect={"fill"} indicator={"dot"} surface={"glass"} size={"md"} bounce={0.3} stretch={0.5} collapse={"auto"} intro={true} />
    </div>
  )
}

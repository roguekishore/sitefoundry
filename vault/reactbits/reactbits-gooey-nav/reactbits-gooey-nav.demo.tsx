// Rebuilt from React Bits' src/demo/Components/GooeyNavDemo.jsx: the component with the props its preview uses.
import GooeyNav from "./GooeyNav"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <GooeyNav items={[{ label: "Home", href: "#" }, { label: "Work", href: "#" }, { label: "About", href: "#" }, { label: "Contact", href: "#" }]} theme={"light"} colors={[]} particleCount={15} spread={56} timeVariance={300} animationTime={600} gooeyness={0.5} wobble={0.5} size={"md"} frame={true} hoverEffect={true} />
    </div>
  )
}

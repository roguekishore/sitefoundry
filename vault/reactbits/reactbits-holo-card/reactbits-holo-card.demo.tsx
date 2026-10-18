// Rebuilt from React Bits' src/demo/Components/HoloCardDemo.jsx: the component with the props its preview uses.
import HoloCard from "./HoloCard"

export default function Demo() {
  return (
    <div className="relative flex h-[620px] w-full items-center justify-center overflow-hidden">
      <HoloCard alt={"Pikachu trading card"} preset={"bursts"} foilColor={"#e2e6ec"} intensity={0.85} scale={1} edgeSparkle={0.8} frame={4} glare={0.5} tiltMax={14} hoverScale={1.04} radius={14} width={320} idle={true} shadow={true} />
    </div>
  )
}

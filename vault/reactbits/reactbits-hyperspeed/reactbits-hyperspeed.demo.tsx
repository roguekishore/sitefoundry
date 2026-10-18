// Rebuilt from React Bits' src/demo/Backgrounds/HyperspeedDemo.jsx: the component with the props its preview uses.
import Hyperspeed from "./Hyperspeed"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <Hyperspeed tailColors={["#d856bf","#6750a2","#c247ac"]} headColors={["#03b3c3","#0e5ea5","#324555"]} poleColors={["#03b3c3"]} roadColor={"#08080a"} lineColor={"#25252d"} curve={"winding"} curvature={1} speed={1} boost={3} fov={90} boostFov={130} lanes={3} roadWidth={10} medianWidth={2} density={40} trailLength={1} lightSize={1} poles={20} dust={100} glow={0.6} reflections={0.5} roadOpacity={0.1} steer={0.35} interactive={true} theme={"light"} />
    </div>
  )
}

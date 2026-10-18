// Rebuilt from React Bits' src/demo/Backgrounds/LiquidEtherDemo.jsx: the component with the props its preview uses.
import LiquidEther from "./LiquidEther"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <LiquidEther colors={["#5227FF","#FF9FFC","#B497CF"]} intensity={1} mouseForce={20} cursorSize={100} persistence={0.75} viscosity={0} resolution={0.5} autoDemo={true} autoSpeed={0.5} autoIntensity={2.2} clickBurst={true} bounceEdges={false} intro={true} lightMode={false} />
    </div>
  )
}

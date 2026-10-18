// Rebuilt from React Bits' src/demo/Backgrounds/MoltenMetalDemo.jsx: the component with the props its preview uses.
import MoltenMetal from "./MoltenMetal"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <MoltenMetal colors={["#5227FF","#FF9FFC"]} coreColor={"#FFFFFF"} lightMode={false} speed={0.35} scale={4} detail={3} glow={1.6} thickness={1} swirl={1} turbulence={0.2} haze={0.75} brightness={1.3} colorMode={"molten"} rotation={0} offsetX={0} offsetY={0} grain={0.05} opacity={1} drift={0.3} intro={true} mouseInteraction={true} mouseStrength={0.5} flareOnClick={true} paused={false} />
    </div>
  )
}

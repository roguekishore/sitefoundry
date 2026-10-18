// Rebuilt from React Bits' src/demo/Backgrounds/TopographyDemo.jsx: the component with the props its preview uses.
import Topography from "./Topography"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <Topography color={"#4f7cff"} lineCount={22} lineWidth={1.2} majorLines={true} elevation={1} foreground={0.2} scale={1} detail={0.35} tilt={32} speed={0.25} direction={"forward"} morph={0.2} glow={0.6} depthOfField={0.4} fog={0.35} brightness={1} hoverEffect={"lift"} clickEffect={"pulse"} markers={"none"} glitch={0} opacity={1} mouseInteraction={true} mouseRadius={1} mouseStrength={0.6} trail={0.3} parallax={0.5} intro={true} lightMode={false} />
    </div>
  )
}

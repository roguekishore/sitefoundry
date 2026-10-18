// Rebuilt from React Bits' src/demo/Backgrounds/FloatingLinesDemo.jsx: the component with the props its preview uses.
import FloatingLines from "./FloatingLines"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <FloatingLines linesGradient={["#e945f5","#ffffff"]} lineStyle={"solid"} lineCount={10} lineDistance={6} lineWidth={1} glow={1} brightness={1} animationSpeed={1} amplitude={1} depthOfField={0.5} edgeFade={0} enabledWaves={["top","middle","bottom"]} interactive={true} bendRadius={5} bendStrength={-0.5} parallax={true} parallaxStrength={0.2} clickSwirl={true} intro={true} lightMode={false} />
    </div>
  )
}

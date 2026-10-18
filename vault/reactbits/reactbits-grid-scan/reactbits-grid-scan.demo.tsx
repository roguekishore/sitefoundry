// Rebuilt from React Bits' src/demo/Backgrounds/GridScanDemo.jsx: the component with the props its preview uses.
import GridScan from "./GridScan"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <GridScan linesColor={"#4d4757"} scanColor={"#7dd3fc"} cells={8} lineThickness={1} lineStyle={"solid"} depth={3} depthFade={0.6} shading={0.7} reflection={0.35} points={true} scanDirection={"forward"} scanDuration={2.4} scanDelay={1.6} scanWidth={1} trail={0.5} glow={0.6} parallax={1} autoScan={true} interactive={true} clickEffect={"ping"} enableWebcam={false} showPreview={true} intro={true} lightMode={false} />
    </div>
  )
}

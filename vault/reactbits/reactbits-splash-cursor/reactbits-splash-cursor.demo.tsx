// Rebuilt from React Bits' src/demo/Animations/SplashCursorDemo.jsx: the component with the props its preview uses.
import SplashCursor from "./SplashCursor"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <SplashCursor theme={"light"} colors={["#9333ea"]} rainbow={false} colorSpeed={1} intensity={1} size={1} force={1} swirl={3} trail={1} momentum={1} shading={1} glow={0} quality={"high"} clickSplash={true} intro={true} contained={false} />
    </div>
  )
}

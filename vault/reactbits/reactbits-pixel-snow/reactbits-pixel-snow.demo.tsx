// Rebuilt from React Bits' src/demo/Backgrounds/PixelSnowDemo.jsx: the component with the props its preview uses.
import PixelSnow from "./PixelSnow"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <PixelSnow color={"#ffffff"} variant={"snowflake"} density={0.5} speed={1} wind={0.25} sway={0.5} flakeSize={1} pixelSize={3} glow={0.8} twinkle={0.35} accumulate={false} depth={0.6} brightness={1} fade={0} opacity={1} mouseInteraction={true} intro={true} lightMode={false} />
    </div>
  )
}

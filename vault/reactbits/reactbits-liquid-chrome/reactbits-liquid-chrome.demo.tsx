// Rebuilt from React Bits' src/demo/Backgrounds/LiquidChromeDemo.jsx: the component with the props its preview uses.
import LiquidChrome from "./LiquidChrome"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <LiquidChrome color={"#ffffff"} speed={0.2} amplitude={0.3} frequencyX={3} frequencyY={3} detail={4} thickness={1} depth={1} roughness={0.3} exposure={1} interactive={true} rippleStrength={1} rippleSize={1} tilt={1} intro={true} lightMode={false} />
    </div>
  )
}

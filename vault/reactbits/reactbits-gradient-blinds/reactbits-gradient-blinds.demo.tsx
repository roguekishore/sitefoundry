// Rebuilt from React Bits' src/demo/Backgrounds/GradientBlindsDemo.jsx: the component with the props its preview uses.
import GradientBlinds from "./GradientBlinds"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <GradientBlinds gradientColors={["#FF9FFC","#5227FF"]} angle={20} noise={0.3} blindCount={16} blindMinWidth={60} spotlightRadius={0.5} spotlightSoftness={1} spotlightOpacity={1} shineDirection={"left"} lightColor={"#ffffff"} shine={0.4} relief={0.5} glow={0.4} sway={0.35} speed={1} hoverTilt={0.6} perspective={0} gradientSpeed={0} distortAmount={0} mirrorGradient={false} mouseDampening={0.15} clickEffect={"ripple"} idle={"drift"} intro={true} lightMode={false} />
    </div>
  )
}

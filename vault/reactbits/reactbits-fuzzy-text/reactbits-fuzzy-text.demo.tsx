// Rebuilt from React Bits' src/demo/TextAnimations/FuzzyTextDemo.jsx: the component with the props its preview uses.
import FuzzyText from "./FuzzyText"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <FuzzyText colorSplit={0} trigger={"hover"} direction={"horizontal"} baseIntensity={0.2} hoverIntensity={0.5} fuzzRange={30} sliceSize={1} fps={60} transitionDuration={0} intro={true} introDuration={1400} clickEffect={false} glitchMode={false} glitchInterval={2000} glitchDuration={200} letterSpacing={0} enableHover={true} fontSize={140}>
      {"404"}
      </FuzzyText>
    </div>
  )
}

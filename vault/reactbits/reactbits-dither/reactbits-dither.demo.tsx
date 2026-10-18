// Rebuilt from React Bits' src/demo/Backgrounds/DitherDemo.jsx: the component with the props its preview uses.
import Dither from "./Dither"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <Dither waveColor={"#bcbcbc"} backgroundColor={"#120f17"} ditherMode={"bayer"} palette={[]} colorNum={4} pixelSize={2} scale={1} waveSpeed={0.05} waveFrequency={3} waveAmplitude={0.3} contrast={1} brightness={0} mouseEffect={"erase"} mouseRadius={0.3} mouseStrength={1} trail={0.5} enableMouseInteraction={true} clickRipple={true} intro={true} disableAnimation={false} />
    </div>
  )
}

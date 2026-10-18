// Rebuilt from React Bits' src/demo/TextAnimations/ASCIITextDemo.jsx: the component with the props its preview uses.
import ASCIIText from "./ASCIIText"

export default function Demo() {
  return (
    <div className="relative flex h-[440px] w-full items-center justify-center overflow-hidden">
      <ASCIIText text={"Hey!"} charset={" .'`^\",:;Il!i~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$"} colors={["#ff6188","#fc9867","#ffd866"]} asciiFontSize={8} textScale={1} blocks={0.9} waves={1} waveSpeed={1} chroma={1} tilt={1} hueShift={1} scramble={0.6} clickRipple={true} idle={true} interactive={true} theme={"light"} />
    </div>
  )
}

// Rebuilt from React Bits' src/demo/Backgrounds/LetterGlitchDemo.jsx: the component with the props its preview uses.
import LetterGlitch from "./LetterGlitch"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <LetterGlitch glitchColors={["#ffffff","#61dca3"]} baseColor={"#ffffff"} fontSize={14} spacing={0.6} density={0.9} baseOpacity={0.16} glitchAmount={0.5} speed={1} flow={0.5} smooth={true} edgeFade={0} centerFade={0} interactive={true} cursorRadius={140} clickEffect={"tear"} intro={true} lightMode={false} />
    </div>
  )
}

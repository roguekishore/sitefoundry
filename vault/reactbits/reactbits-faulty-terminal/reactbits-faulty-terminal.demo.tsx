// Rebuilt from React Bits' src/demo/Backgrounds/FaultyTerminalDemo.jsx: the component with the props its preview uses.
import FaultyTerminal from "./FaultyTerminal"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <FaultyTerminal tint={"#A7EF9E"} glyphs={"blocks"} scale={1.5} digitSize={1.2} timeScale={0.5} brightness={0.75} glow={0.5} persistence={0.5} mouseStrength={0.5} mouseGlow={0.6} scramble={0.5} scanlineIntensity={0.5} glitchAmount={1} flickerAmount={1} noiseAmp={1} chromaticAberration={0} curvature={0.1} vignette={0.25} clickEffect={"glitch"} mouseReact={true} pageLoadAnimation={true} pause={false} lightMode={false} />
    </div>
  )
}

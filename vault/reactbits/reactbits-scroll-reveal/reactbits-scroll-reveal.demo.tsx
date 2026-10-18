// Rebuilt from React Bits' src/demo/TextAnimations/ScrollRevealDemo.jsx: the component with the props its preview uses.
import ScrollReveal from "./ScrollReveal"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <ScrollReveal mode={"scrub"} splitBy={"words"} effect={"fade"} stagger={0.05} duration={0.8} smoothing={0} baseOpacity={0.1} baseRotation={3} baseOffset={0} enableBlur={true} blurStrength={4} highlightColor={""}>
      {"When does a man die? When he is hit by a bullet? No! When he suffers a disease? No! When he ate a soup made out of a poisonous mushroom? No! A man dies when he is forgotten!"}
      </ScrollReveal>
    </div>
  )
}

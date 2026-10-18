// Rebuilt from React Bits' src/demo/Components/CardNavDemo.jsx: the component with the props its preview uses.
import CardNav from "./CardNav"

export default function Demo() {
  return (
    <div className="relative flex h-[480px] w-full items-center justify-center overflow-hidden">
      <CardNav logoAlt="React Bits" items={[{ label: "About", description: "The people and the story behind the studio.", links: [{"label":"Company","href":"#company"},{"label":"Careers","href":"#careers"}] }, { label: "Projects", description: "Selected work from the last few years.", links: [{"label":"Featured","href":"#featured"},{"label":"Case studies","href":"#case-studies"}] }, { label: "Contact", description: "Say hello, we read everything.", links: [{"label":"Email","href":"#email"},{"label":"X","href":"#x"},{"label":"LinkedIn","href":"#linkedin"}] }]} cta={{ label: "Get started" }} theme={"light"} cardEffect={"rise"} openOn={"click"} surface={"glass"} stagger={0.12} bounce={0.2} menuLabel={true} speed={1} cardHeight={176} maxWidth={800} intro={true} />
    </div>
  )
}

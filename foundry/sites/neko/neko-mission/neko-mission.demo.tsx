// Sample content lives here (gallery only); the page reuses it. Ardent Health is made up.
import { NekoMission, type NekoMissionProps } from "./neko-mission";

export const missionSample: NekoMissionProps = {
  text: "We help people stay well by finding problems while they are still small",
  link: { label: "Our story", href: "#story" },
};

export default function Demo() {
  return (
    <div className="pb-40">
      <NekoMission {...missionSample} />
    </div>
  );
}

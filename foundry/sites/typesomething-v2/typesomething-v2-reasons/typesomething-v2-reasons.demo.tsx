import type { TypesomethingV2ReasonsProps } from "./typesomething-v2-reasons";
import { TypesomethingV2Reasons } from "./typesomething-v2-reasons";

export const reasonsSample: TypesomethingV2ReasonsProps = {
  id: "story",
  title: "Why make it like this?",
  subtitle: "We kept losing weekends to simple site chores, so we built the helper we wanted.",
  reasons: [
    {
      number: "01",
      title: "Simple pages last (and stay safe)",
      text: "Sites used to be plain files on a server. Nobody broke into them and nothing needed patching every week. Most small businesses still need exactly that, so we took the old idea and gave it modern tooling.",
    },
    {
      number: "02",
      title: "Admin panels eat the day",
      text: "We watched shop owners spend whole afternoons in clunky dashboards and page builders, just to fix one opening time or swap one photo, instead of running their shop.",
    },
    {
      number: "03",
      title: "We needed it first",
      text: "We wanted a site that looks after itself and listens when asked. Nothing like it existed, so we made it, and then friends asked to use it too.",
    },
  ],
};

export default function Demo() {
  return <TypesomethingV2Reasons {...reasonsSample} />;
}

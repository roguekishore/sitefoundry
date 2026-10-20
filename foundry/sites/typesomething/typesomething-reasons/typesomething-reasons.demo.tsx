import { TypesomethingReasons, type TypesomethingReasonsProps } from "./typesomething-reasons";

export const reasonsSample: TypesomethingReasonsProps = {
  id: "about",
  title: "Where Paperkite came from",
  subtitle: "We were fixing websites when we should have been running a business. So we stopped.",
  reasons: [
    {
      number: "01",
      title: "Static, so there's nothing to break",
      text: "Early websites were plain files, and nobody ever had to patch them on a Sunday night. Most small businesses still need exactly that, so we kept the idea and gave it a modern engine.",
    },
    {
      number: "02",
      title: "Dashboards eat afternoons",
      text: "We watched shop owners lose whole afternoons to page builders and plugin updates, just to change opening hours or swap one photo.",
    },
    {
      number: "03",
      title: "We needed it first",
      text: "We wanted a site that looks after itself and listens when we ask for something. Nothing like it existed, so we made it for ourselves, then for everyone else.",
    },
  ],
};

export default function Demo() {
  return <TypesomethingReasons {...reasonsSample} />;
}

import { ZoeStories, type ZoeStoriesProps } from "./zoe-stories";

export const storiesSample: ZoeStoriesProps = {
  eyebrow: "Member stories",
  title: "Small changes, big differences",
  stories: [
    { quote: "“I can’t believe how quickly it picks out what’s on my plate.”", name: "Priya" },
    { quote: "“My stomach is calmer than it’s been in years, and I haven’t cut out a thing.”", name: "Tomasz" },
    {
      quote:
        "“I sleep better and I’m not crashing at four o’clock any more. Seeing my scores climb week after week keeps me going.”",
      name: "Ngozi",
    },
    {
      quote: "“It changed how I shop. More energy for my runs, and I actually enjoy cooking again.”",
      name: "Callum",
    },
  ],
  labels: { region: "Member stories", prev: "Previous story", next: "Next story" },
};

export default function Demo() {
  return <ZoeStories {...storiesSample} />;
}

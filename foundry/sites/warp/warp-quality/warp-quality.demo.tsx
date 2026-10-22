// Sample content (gallery only); the page reuses it. Lathe is a made-up company.
import { WarpQuality, type WarpQualityProps } from "./warp-quality";

export const qualitySample: WarpQualityProps = {
  id: "scoring",
  tag: "Scoring",
  status: "online",
  title: "Scoring and tuning, part of every run",
  lead: "Graders, trial runs and tuning loops turn changes into numbers you can compare.",
  caption: "fig. 3 · scoring · one week",
  figureLabel: "fig. b2 · scoring · one week",
  figureMeta: "3 tracks · hover to inspect",
  metrics: [
    {
      label: "Grade",
      badge: "pass",
      subtitle: "Graded on your own jobs",
      value: "94%",
      chartLabel: "Grade over four months, rising",
      rows: [
        { label: "10/02 09:14", verdict: "fail", ok: false, value: "0.5" },
        { label: "10/02 09:11", verdict: "pass", ok: true, value: "0.9" },
        { label: "10/02 09:10", verdict: "pass", ok: true, value: "0.8" },
      ],
    },
    {
      label: "Trial",
      badge: "top",
      subtitle: "Trials across models",
      value: "1.00X",
      chartLabel: "Relative score of three models",
      rows: [
        { label: "Model north 4", verdict: "pass", ok: true, value: "1.00X" },
        { label: "Model ridge 2", verdict: "pass", ok: true, value: "0.92X" },
        { label: "Model vale mini", verdict: "fail", ok: false, value: "0.86X" },
      ],
    },
    {
      label: "Tune",
      badge: "auto",
      subtitle: "Tuning loops",
      value: "+4.1",
      chartLabel: "Score gained from tuning",
      rows: [
        { label: "Recall refreshed", verdict: "pass", ok: true, value: "+0.3" },
        { label: "Playbooks edited", verdict: "pass", ok: true, value: "+2.8%" },
        { label: "Slip spotted", verdict: "fail", ok: false, value: "-0.2" },
      ],
    },
  ],
};

export default function Demo() {
  return <WarpQuality {...qualitySample} />;
}

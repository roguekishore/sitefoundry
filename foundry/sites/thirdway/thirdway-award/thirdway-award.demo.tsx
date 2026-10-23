import { ThirdwayAward, type ThirdwayAwardProps } from "./thirdway-award";

export const awardSample: ThirdwayAwardProps = {
  title: "Workplace Practice of the Year",
  detail: "Two million square feet delivered each year across six specialist teams.",
};

export default function Demo() {
  return <ThirdwayAward {...awardSample} />;
}

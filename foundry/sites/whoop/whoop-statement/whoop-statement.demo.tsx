import { WhoopStatement, type WhoopStatementProps } from "./whoop-statement";

export const statementSample: WhoopStatementProps = {
  heading: "Wear it daily, live a little longer",
  body: "People who keep Kairos on around the clock move 80 more minutes a week, sleep two extra hours and see their resting heart rate settle. Small, steady changes add up to a body that keeps pace with your plans.*",
  showMedia: true,
};


export default function Demo() {
  return <WhoopStatement {...statementSample} />;
}

import { HhhusherPageTitle, type HhhusherPageTitleProps } from "./hhhusher-page-title";

export const termsTitleSample: HhhusherPageTitleProps = { title: "Terms of sale" };

export default function Demo() {
  return <HhhusherPageTitle {...termsTitleSample} />;
}

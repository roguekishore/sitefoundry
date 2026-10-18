// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartRadarLabelCustom as Main } from "./chart-radar-label-custom"

export interface ShadcnChartRadarLabelCustomProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartRadarLabelCustom({ className }: ShadcnChartRadarLabelCustomProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartRadarLabelCustom

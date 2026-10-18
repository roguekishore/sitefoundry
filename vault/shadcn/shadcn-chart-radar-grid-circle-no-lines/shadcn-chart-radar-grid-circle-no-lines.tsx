// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartRadarGridCircleNoLines as Main } from "./chart-radar-grid-circle-no-lines"

export interface ShadcnChartRadarGridCircleNoLinesProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartRadarGridCircleNoLines({ className }: ShadcnChartRadarGridCircleNoLinesProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartRadarGridCircleNoLines

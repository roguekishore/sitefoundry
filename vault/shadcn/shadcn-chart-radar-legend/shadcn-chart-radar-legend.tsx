// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartRadarLegend as Main } from "./chart-radar-legend"

export interface ShadcnChartRadarLegendProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartRadarLegend({ className }: ShadcnChartRadarLegendProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartRadarLegend

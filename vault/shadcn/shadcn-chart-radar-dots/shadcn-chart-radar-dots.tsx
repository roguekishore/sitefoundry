// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartRadarDots as Main } from "./chart-radar-dots"

export interface ShadcnChartRadarDotsProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartRadarDots({ className }: ShadcnChartRadarDotsProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartRadarDots

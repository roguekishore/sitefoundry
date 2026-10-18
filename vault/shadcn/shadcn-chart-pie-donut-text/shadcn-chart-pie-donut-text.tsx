// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartPieDonutText as Main } from "./chart-pie-donut-text"

export interface ShadcnChartPieDonutTextProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartPieDonutText({ className }: ShadcnChartPieDonutTextProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartPieDonutText

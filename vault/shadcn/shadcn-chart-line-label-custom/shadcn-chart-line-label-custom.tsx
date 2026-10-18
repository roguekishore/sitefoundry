// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartLineLabelCustom as Main } from "./chart-line-label-custom"

export interface ShadcnChartLineLabelCustomProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartLineLabelCustom({ className }: ShadcnChartLineLabelCustomProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartLineLabelCustom

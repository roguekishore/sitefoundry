// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartPieLabelCustom as Main } from "./chart-pie-label-custom"

export interface ShadcnChartPieLabelCustomProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartPieLabelCustom({ className }: ShadcnChartPieLabelCustomProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartPieLabelCustom

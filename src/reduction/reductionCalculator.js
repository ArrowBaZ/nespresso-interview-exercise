import standardReductionCalculator from "./standardReductionCalculator"
import reduction from './reduction'

const reductionCalculator = (reductionType, cost) => {
    if (reductionType === reduction.STANDARD) {
        return standardReductionCalculator(cost)
    } else {
        return 0
    }
}

export default reductionCalculator

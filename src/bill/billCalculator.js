import taxCalculator from '../tax/taxCalculator'
import reductionCalculator from '../reduction/reductionCalculator'
import discount from '../discount/discount';
import discountCalculator from '../discount/discountCalculator'

const billCalculator = (
    priceArr,
    quantityArr,
    country,
    reductionType,
    discountConstraint = 0,
    discountType = discount.NONE
) => {
    const priceWithTax = taxCalculator(priceArr, quantityArr, country)
    const discountPrice = discountCalculator(priceWithTax, discountConstraint, discountType)
    const reductionCost = reductionCalculator(reductionType, discountPrice)
    return {
        total: Number(discountPrice - reductionCost).toFixed(2)
    }
}

export default billCalculator

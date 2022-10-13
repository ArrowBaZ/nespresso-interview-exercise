import getDiscount from './discountFactory'

const discountCalculator = (bill, discountConstraint, discountType) => {
    return getDiscount(discountType).calculateDiscount(bill, discountConstraint)
}
export default discountCalculator

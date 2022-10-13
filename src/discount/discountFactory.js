import discount from './discount'
import flatDiscount from './FlatDiscount'
import PercentDiscount from './PercentDiscount'
import noDiscount from './NoDiscount'
const getDiscount = discountType => {
    switch (true) {
        case discountType === discountType.FLAT:
            return new flatDiscount()
            break
        case discountType === discountType.PERCENT:
            return new PercentDiscount()
        default:
            return new noDiscount()
            break
    }
}

export default getDiscount

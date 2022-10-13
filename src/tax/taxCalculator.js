import taxByCountry from './taxBasedOnCountry'
import totalPriceCalculator from '../bill/totalPriceCalculator'

const taxCalculator = (priceArr, quantityArr, country) => {
    const priceOfAllProducts = totalPriceCalculator(priceArr, quantityArr)

    let taxForCountry = taxByCountry[country]
    let totalPrice = (priceOfAllProducts * taxForCountry) / 100
    let totalPriceWithTax = parseFloat((totalPrice + priceOfAllProducts).toFixed(2))
    return totalPriceWithTax
}

export default taxCalculator

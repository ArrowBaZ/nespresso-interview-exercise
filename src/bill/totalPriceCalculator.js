const totalPriceCalculator = (priceArr, quantityArr) => {
    if (priceArr.length !== quantityArr.length) {
        return console.error('priceArr length and quantityArr length is not same')
    }
    let totalPrice = 0
    let iterateLength = priceArr.length

    for (let i = 0; i < iterateLength; i++) {
        totalPrice += priceArr[i] * quantityArr[i]
    }
    return totalPrice
}

export default totalPriceCalculator;

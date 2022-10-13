class PercentDiscount {
    calculateDiscount(bill, discountPercent) {
        return bill - ((bill * discountPercent) / 100);
    }
}

export default PercentDiscount

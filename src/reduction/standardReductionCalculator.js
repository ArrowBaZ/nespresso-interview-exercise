const standardReductionCalculator = cost => {
    switch (true) {
        case cost >= 50000:
            return (cost * 15) / 100
            break
        case cost >= 10000:
            return (cost * 10) / 100
            break
        case cost >= 7000:
            return (cost * 7) / 100
            break
        case cost >= 5000:
            return (cost * 5) / 100
            break
        case cost >= 1000:
            return (cost * 3) / 100
            break
        default:
            return 0
            break
    }
}

export default standardReductionCalculator

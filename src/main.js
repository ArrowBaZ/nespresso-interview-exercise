// const response = await fetch('http://localhost:8080/api/orders')
// const json = await response.json()
// console.log(json)

import data from './../api/orders.get'

console.log(data)

import billCalculator from './bill/billCalculator'

data.map(orderDetail => {
    let output = billCalculator(
        orderDetail.prices,
        orderDetail.quantities,
        orderDetail.country,
        orderDetail.reduction
    )
    return console.log(output)
})

// console.log(billCalculator([15.99], [1], 'ES', 'STANDARD'))
// console.log(billCalculator([4.1, 8.03, 86.83, 65.62, 44.82], [10, 3, 5, 4, 5], 'FR', 'STANDARD'))

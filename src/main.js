// this part should be placed in separate file. like variable.js
const taxes = {
    ES: {
        name: 'Spain',
        taxes: 19,
    },
    FR: {
        name: 'France',
        taxes: 20,
    }
    ,
    DE: {
        name: 'Germany',
        taxes: 20,
    }
    ,
    UK: {
        name: 'United Kingdom',
        taxes: 21,
    }
    ,
    IT: {
        name: 'Italy',
        taxes: 25,
    }
};
  
const discounts = {
1000: 3,
5000: 5,
7000: 7,
10000: 10,
50000: 15,
};
const discountPrices = Object.keys(discounts);
const discountStartsFrom = 1000;
// end

const response = await fetch('http://localhost:3000/api/orders')
// const json = await response.json()
const ordersData = await response.json()
const results = [];

for(let i = 0; i < ordersData.length; i++) {
    const {country, prices, quantities} = ordersData[i];
    const sum = prices.reduce((acc, cur, index) => acc + cur * quantities[index], 0);
    const sumWithTaxes = sum +  (sum * taxes[country].taxes / 100);
    let discount = 0;
    if (sumWithTaxes >= discountStartsFrom) {
        const getDiscountRange = discountPrices.find(el => el > sumWithTaxes);
        const discountPercent = discounts[getDiscountRange];
        if (discountPercent) {
            discount = (sumWithTaxes * (discountPercent / 100));
        }
    }
    results.push({
        orderPrice: sum,
        priceWithTaxes: sumWithTaxes,
        discount: discount,
        finalPrice: sumWithTaxes - discount,
    });
}

console.log(results); 

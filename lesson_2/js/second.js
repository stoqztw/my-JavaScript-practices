'use strict';

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 60000
}

function isBudgetEnough(data) {
    let totalArea = 0,
        totalVolume = 0,
        priceOfPer = 0;
    shoppingMallData.shops.forEach((item) => {
        totalArea += item['width'] * item['length'];
    });
    totalVolume = totalArea * data.height;
    priceOfPer = totalVolume * data.moneyPer1m3;
    if (priceOfPer <= data.budget) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    };
}

console.log(isBudgetEnough(shoppingMallData))
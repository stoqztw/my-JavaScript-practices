'use strict';

const funds = [
	{ amount: -1400 },
	{ amount: 2400 },
	{ amount: -1000 },
	{ amount: 500 },
	{ amount: 10400 },
	{ amount: -11400 }
];

const getPositiveIncomeAmount = (data) => {
	return data.reduce((sum, cur) => sum + (cur.amount >= 0 ? cur.amount : 0), 0);
};

const getTotalIncomeAmount = (data) => {
	return data.some(item => item.amount < 0) ?
		data.reduce((sum, cur) => sum + cur.amount, 0) : getPositiveIncomeAmount(data);
};

console.log(getTotalIncomeAmount(funds));
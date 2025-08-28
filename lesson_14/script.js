'use strict';

const shops = [
	{rice: 500},
	{oil: 200},
	{bread: 50}
];

const budget = [5000, 15000, 20000];

const testMap = new Map();

// testMap.set(shops[0], 5000);
// testMap.set(shops[1], 15000);
// testMap.set(shops[2], 20000);

shops.forEach((item, id) => {
	testMap.set(shops[id], budget[id ])
})

console.log(testMap.get(shops[0]));

console.log(testMap.has(shops[0]));
console.log(testMap.delete(shops[0]));
console.log(testMap.clear())
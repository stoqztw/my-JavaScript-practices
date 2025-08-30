'use strict';

const user = {
	name: 'Alex',
	surname: 'Smith',
	birthday: '20/08/2002',
	showMyPubyicData: function () {
		console.log(`${this.name} ${this.surname}`)
	}
}

const userMap = new Map(Object.entries(user));

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);
// console.log(user);

const shops = [
	{ rice: 500 },
	{ oil: 500 },
	{ bread: 50 }
];

const budget = [5000, 10000, 12222];

const map = new Map([
	[{ paper: 400 }, 8000]
]);

shops.forEach((item, id) => {
	map.set(item, budget[id]);
})


// console.log(map);

// map.keys();

// const goods = [];
// for (let shop of map.keys()) {
// 	goods.push(Object.keys(shop)[0]);
// }

// console.log(goods)

// for (let [shop, price] of map.entries()) {
// 	console.log(shop, price)
// }


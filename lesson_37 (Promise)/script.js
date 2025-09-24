'use strict';

// console.log('Запрос данных...');

// const req = new Promise(function (resolve, reject) {
// 	setTimeout(() => {
// 		console.log('Подготовка данных...');

// 		const product = {
// 			name: 'TV',
// 			price: 2000
// 		}

// 		resolve(product);
// 	}, 2000);
// });

// req.then((product) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			product.status = 'order';
// 			resolve(product);
// 		}, 2000);
// 	});
// }).then(data => {
// 	data.modify = true;
// 	return data;
// }).then(data => {
// 	console.log(data);
// }).catch(() => {
// 	console.error('Произошла ошибка!');
// }).catch(() => {
// 	console.log('Произошла ошибка!');
// }).finally(() => {
// 	console.log('finally');
// });

const test = time => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), time);
	});
}

// test(5000).then(() => {
// 	console.log('1000 ms');
// });

// test(10000).then(() => {
// 	console.log('2000 ms');
// });

Promise.all([test(3000), test(6000)]).then(() => {
	console.log('Done');
});

Promise.race([test(3000), test(6000)]).then(() => {
	console.log('Done');
});
'use strict';

function amountOfPages(summary) {
	let arrOfNum = [];
	for (let i = 0; i < summary; i++) {
		arrOfNum.push(i + 1)
		if (arrOfNum.join('').length == summary) {
			break;
		}
	}

	return arrOfNum.reverse()[0];
}

// function amountOfPages(summary) {
// 	let result = '';
// 	let n = 0;

// 	for (let i = 1; i <= summary; i++) {
// 		result += i;
// 		if (result.length === summary) {
// 			n = i;
// 			break;
// 		}
// 	}

// 	return n;
// }


console.log(amountOfPages(10));

'use strict';

// let n = 0;
// function deepCount(a) {
// 	if (a.length === 0) {
// 		return 0;
// 	}

// 	for (let i = 0; i < a.length; i++) {
// 		n++;
// 		if (Array.isArray(a[i])) {
// 			deepCount(a[i]);
// 		}
// 	}

// 	return n;
// }


function deepCount(a) {
	if (a.length === 0) {
		return 0;
	}

	let count = a.length;

	for (let i = 0; i < a.length; i++) {
		if (Array.isArray(a[i])) {
			count += deepCount(a[i]);
		}
	}

	return count;
}

console.log(deepCount([1, 2, [3, 4, [5]]]))
'use strict';

const log = function (a, b, ...rest) {
	console.log(a, b, rest);
} 

log('test', 'rest', 'eshkere', 'chinazes'); 

function calcOrDouble(num, basic = 2) {
	console.log(num * basic);
}

calcOrDouble(3 * 2);
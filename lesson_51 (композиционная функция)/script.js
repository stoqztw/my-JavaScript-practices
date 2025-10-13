'use strcit';

const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);

const compose = (...funcs) => (x) =>
	funcs.reduceRight((res, func) => func(res), x);

const result = compose(multiply20, divide100, normalizePrice)(200);

console.log(result);

// two

const add1 = function (a) { return a + 1 }
const addAll3 = function (a, b, c) { return a + b + c }

const composeWithArgs = (...fns) => (...x) =>
	fns.reduceRight((res, fn, index, arr) => {
		if (typeof (res) === 'object') {
			return fn(...res);
		} else {
			return fn(res);
		}
	}
		, x);

const resultTwo = composeWithArgs(add1, addAll3)(1, 2, 3, 4);

console.log(resultTwo)


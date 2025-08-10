function isPP(n) {
	let result = [],
		m = 0;

	for (let i = 2; i <= Math.log2(n); i++) {
		m = Math.round(Math.pow(n, 1 / i));
		if (Math.pow(m, i) === n) {
			return [m, i];
		}
	}

	return null;
}
console.log(isPP(125))

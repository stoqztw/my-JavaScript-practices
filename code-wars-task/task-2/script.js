let result = '';
let j = 1;
function isPP(n) {

	// result += `${Math.sqrt(n)}^${j * 2} `;
	// n = Math.sqrt(n);
	// j = j * 2;

	if (Number.isInteger(Math.sqrt(n))) {
		Math.sqrt(isPP(Math.sqrt(n)));
	} else {
		return n ^ 2;
	}
	result += `${Math.sqrt(n)}^${j * 2} `;
	j = j * 2;
	


	return `${n} = ${result}`;
}

console.log(isPP(81))





// if (Number.isInteger(Math.sqrt(n))) {
// 	count++;
// 	Math.sqrt(isPP(Math.sqrt(n)));
// 	return count;
// } else {
// 	return n^2;
// }
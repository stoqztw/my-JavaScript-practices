'use strict';

function isPangram(string) {
	const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G',
		'H', 'I', 'J', 'K', 'L', 'M', 'N',
		'O', 'P', 'Q', 'R', 'S', 'T', 'U',
		'V', 'W', 'X', 'Y', 'Z'];

	const stringToArr = string.replaceAll(' ', '').toUpperCase().split('');
	let result = new Set();

	for (let i = 0; i < stringToArr.length; i++) {
		for (let j = 0; j < alphabet.length; j++) {
			if (stringToArr[i] == alphabet[j]) {
				result.add(alphabet[j]);
				break;
			}
		}
	}

	result = Array.from(result).sort();

	return result.join('') == alphabet.join('');
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));

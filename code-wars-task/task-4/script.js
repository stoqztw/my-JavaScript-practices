const testArr = [2, 1, 2, 2, 2, 2, 1];

function pickPeaks(arr){
  const result = {
		pos: [],
		peaks: []
	};

	let platoStart = null;

	for (let i = 1; i < arr.length - 1; i++) {
		if (arr[i] > arr[i - 1] && arr[i] === arr[i + 1]) {
			platoStart = i;
		}

		if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
			result.pos.push(i);
			result.peaks.push(arr[i]);
		} else if (arr[i] === arr[i - 1] && arr[i] > arr[i + 1] && platoStart !== null) {
			result.pos.push(platoStart);
			result.peaks.push(arr[platoStart]);
      platoStart = null;
		} else {
			continue;
		}
	}

	return result;
}

console.log(pickPeaks(testArr))
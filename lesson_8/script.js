'use strict'

function factorial(n) {
    if (typeof(n) !== 'number' || n % 1 !== 0) {
        return 'error';
    } else if (n <= 0) {
        return 1;
    }

    return n * factorial(n - 1)
}

console.log(factorial(4))
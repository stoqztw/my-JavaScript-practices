'use strict'

// function recursion(a, b) {
//     if (a < b) {
//         return
//     }
//     console.log(a);
//     recursion(a - 1, b)
// }

// recursion(5, 1)

function recursion(n) {
    if (n <= 0) {
        return;
    }
    recursion(n - 1)
    console.log(n)
}

recursion(5)
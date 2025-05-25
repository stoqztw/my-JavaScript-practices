'use strict'


if (-1) {
    console.log('Ok!');
} else {
    console.log('Not ok!')
}

const num = 100;

if (num < 49) {
    console.log('error')
} else if (num > 100) {
    console.log('More')
} else {
    console.log('Ok!')
}

(num === 50) ? console.log('ok') : console.log('error');

switch (num) {
    case 49:
        console.log('error');
        break;
    case '100':
        console.log('error 2');
        break;
    case 50:
        console.log('Ok');
        break;
    default:
        console.log('Not now');
        break;
}
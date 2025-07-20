'use strict';

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('Hello');
    }
};

const john = Object.create(soldier);

// const john = {
//     health: 100
// };

// john.__proto__ = soldier;

Object.setPrototypeOf(john, soldier)

console.log(john.armor);
john.sayHello()

let testObj = {
    privat: true
};

testObj.privat = !testObj.privat;
console.log(testObj.privat)

let tetarr = ['a', 'b', 'c']
tetarr.forEach((lit) => {console.log(Object.keys(lit))})
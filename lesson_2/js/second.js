'use strict';

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Somebody'];

function sortStudentsByGroups(arr) {
    arr.sort();
    let sortArr = [];
    for (let i = 0; i <= 2; i++) {
        sortArr[i] = arr.slice(0, 3);
        arr = arr.slice(3);
    };
    if (arr.length !== 0) {
        sortArr[3] = `Оставшиеся студенты: ${arr.join(', ')}`
    } else {
        sortArr[3] = 'Оставшиеся студенты: -';
    };
    return sortArr;
}

console.log(sortStudentsByGroups(students))

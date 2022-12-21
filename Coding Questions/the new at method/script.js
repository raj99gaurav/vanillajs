'use strict';

const arr = [23, 11, 64];
console.log(arr[0]);

console.log(arr.at(0)); // arraay at position 0

//It is more useful because of following :-

console.log(arr[arr.length - 1]); // last elemet
console.log(arr.slice(-1)[0]); // last elemet
console.log(arr.at(-1)); // last elemet

console.log('rajgaurav'.at(0));
console.log('rajgaurav'.at(-1));

"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log([1, 2, 3, 4]);
console.log(new Array(1, 2, 3, 4, 5, 6));

//Empty array + fill array
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));

x.fill(1);
console.log(x);

x.fill(1, 3);
console.log(x);

x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 4, 6);
console.log(arr);

//Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

//we use from to convert node/ui values to array
const movementsUI = Array.from(
  document.querySelectorAll(".movements__value"),
  (el) => Number(el.textContent.replace("€", ""))
);
console.log(movementsUI);

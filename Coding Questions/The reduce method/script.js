'use strict';
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

console.log(movements);
//accumator is like a snowball
const balance = movements.reduce(function (acc, curr, i, arr) {
  console.log(acc);
  return acc + curr;
}, 0); // 0 we can put anything that is the inital value of acc

console.log(balance);

//maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

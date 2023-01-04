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

const eurToUsd = 1.1;

const movementsUsd = movements.map(function (mov) {
  return mov * eurToUsd;
}); //functional programming mostly used in modern js

console.log(movements);
console.log(movementsUsd);

//doing same with for of loop

const movementsUsdForOf = [];
for (const mov of movements) movementsUsdForOf.push(mov * eurToUsd);

console.log(movementsUsdForOf);

//movementsUsd using arrow functions
const movementsUsdArrow = movements.map(mov => mov * eurToUsd);

console.log(movementsUsdArrow);

const movementsDescription = movements.map((movement, index, arr) => {
  if (movement > 0) {
    return `Movement ${index} : You deposited ${movement}`;
  } else {
    return `Movement ${index} : You Withdrew ${Math.abs(movement)}`;
  }
});
console.log(movementsDescription);

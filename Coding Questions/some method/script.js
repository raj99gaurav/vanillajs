'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);
console.log(movements.includes(-130)); //we can only test for equality

//check for any positive entry

const anyDeposit = movements.some(mov => mov > 0);
console.log(anyDeposit);

const anyDepositAbove5000 = movements.some(mov => mov > 5000);
console.log(anyDepositAbove5000);

console.log(movements.some(mov => mov === -130)); // doesnt make sense but we can do

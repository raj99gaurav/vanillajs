'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Every all ele should satisy the condition

console.log(movements.every(mov => mov > 0));

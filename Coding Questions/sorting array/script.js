'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const owners = ['Raj', 'Gaurav', 'RGVlogs', 'Like', 'Sub'];
console.log(owners);
console.log(owners.sort()); //mutates the original array

console.log(movements);
//console.log(movements.sort()); //does sorting by strings thats why the results dont look good

//return < 0 A,B ( keep order )
//return > 0 B,A ( switch order )

//Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b); // as a-b will always be positive if a > b and neg. if a < b
console.log(movements);

//Decending order
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);

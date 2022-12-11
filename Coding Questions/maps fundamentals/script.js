'use strict';

const rest = new Map();
rest.set('name', 'RG Restro');
rest.set(1, 'India');
console.log(rest.set(2, 'Delhi'));

rest
  .set('categories', ['India', 'Italiian', 'Non Veg', 'Vegan'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
rest.get(time > rest.get('open') && time < rest.get('close'));

console.log(rest.has('categories'));

rest.delete(2); //location
console.log(rest);
console.log(rest.size);
// rest.clear();

// rest.set([1, 2], 'Test');
// console.log(rest.get[1,2]); wont work
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading');

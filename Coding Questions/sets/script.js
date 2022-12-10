'use strict';

const orderSet = new Set([
  'Pasta',
  'Pizzaa',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);

console.log(new Set('Raj'));

console.log(orderSet.size); //3 its size not length
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');

console.log(orderSet);
console.log(orderSet.size);

///no value to get data out of sets and we need to just know if the value is present and not for that we use has

// orderSet.clear(); delete all values in the set

for (const order of orderSet) console.log(order);

//example
const staff = ['Waiter', 'Cheif', 'Waiter', 'Manaer', 'Cheif', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);

const staffUniqueArray = [...new Set(staff)];

console.log(
  new Set(['Waiter', 'Cheif', 'Waiter', 'Manaer', 'Cheif', 'Waiter']).size
);

console.log(new Set('rajaurav').size);

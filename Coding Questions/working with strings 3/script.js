'use strict';

//split and join
console.log('a+very+nice+string'.split('+'));
console.log('Raj Gaurav'.split(' '));

const [firstName, lastName] = 'Raj Gaurav'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizzeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

capitalizzeName('jessica ann smith davis');
capitalizzeName('raj gaurav');

const capitalizzeName2 = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizzeName2('jessica ann smith davis');
capitalizzeName2('raj gaurav');

//padding
const message = 'Go to gate 23';
console.log(message.padStart(25, '+')); // total characters 25
console.log(message.padStart(25, '+').padEnd(30, '+')); // total characters 25

//masking

const maskCreditCard = function (number) {
  const str = number + ''; //convert number to string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(23454533453534535345));
console.log(maskCreditCard('555523454533453534535345'));

//repeat
const message2 = ' Bad Weather.. All dept deplayed ...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(9);
planesInLine(3);

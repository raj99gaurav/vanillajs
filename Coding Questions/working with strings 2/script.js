'use strict';

const airLine = 'TAP Air Portugal';

console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

//fix capitalization in name

const passanger = 'rajGaURav'; //Rajgaurav
const passangerLower = passanger.toLowerCase();
const passangerCorrect =
  passangerLower[0].toUpperCase() + passangerLower.slice(1);
console.log(passangerCorrect);

//comapring emails

const email = 'hello@raj.io';
const loginEmail = 'Hello@Raj.io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const allInOneStepEmail = loginEmail.toLowerCase().trim();
console.log(allInOneStepEmail);

console.log(email === allInOneStepEmail);

//replacing
const priceIn = '288,97R'; // r for ruppees
const priceUS = priceIn.replace('R', '$').replace(',', '.');

console.log(priceUS);

const annoucement = 'All passangers come to boarding door 23.boarding door 23!';
console.log(annoucement.replace('door', 'gate'));
console.log(annoucement.replaceAll('door', 'gate')); //.replace(/door/g,'gate'));

//Booleans

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('noe')) {
  console.log('Part of new airbus family');
}

//Pratice ecercise

const chcekItem = function (item) {
  const itemLower = item.toLowerCase();
  if (itemLower.includes('knife') || itemLower.includes('gun')) {
    console.log(`You are not allowed on board becuase you have a ${itemLower}`);
  } else {
    console.log('Welcome');
  }
};

chcekItem('I have a laptop and a KnIfe');
chcekItem('Socks and camera');
chcekItem(' I have a gun for protection');

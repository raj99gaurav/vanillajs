'use strict';

const airLine = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B2320'[0]);

console.log(airLine.length);
console.log('B2320'.length);

console.log(airLine.indexOf('r'));
console.log(airLine.lastIndexOf('r'));

console.log(airLine.indexOf('Portugal')); // case sensitive

console.log(airLine.slice(4));
console.log(airLine.slice(4, 7)); //start from 4 and end before 7

console.log(airLine.slice(0, airLine.indexOf(' '))); //first word
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1)); //last word

console.log(airLine.slice(-2)); //last 2 letters
console.log(airLine.slice(1, -1));

//B and E are middle seats
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat 🥺');
  } else {
    console.log('You got lucky 😋');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

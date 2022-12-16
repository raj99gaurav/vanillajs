"use strict";

//Example 1 :
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// re assigning f function
h();
f();

console.dir(f);

//Example 2 :
const boardPassangers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passangers`);
    console.log(`There are 3 groups,each with ${perGroup} passengers.`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds.`);
};

boardPassangers(100, 3);

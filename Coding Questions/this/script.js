'use strict';

console.log(this);

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this); //undefined
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2022 - birthYear);
  console.log(this); // window
};
calcAgeArrow(1991);

const raj = {
  year: 1999,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};

raj.calcAge();

const gaurav = {
  year: 2017,
};

gaurav.calcAge = raj.calcAge;
gaurav.calcAge(); //this keyword now points to gaurav now sp it points to the object that is calling the method.

const f = raj.calcAge;

f(); //this is undefined here as it is not attached to anything

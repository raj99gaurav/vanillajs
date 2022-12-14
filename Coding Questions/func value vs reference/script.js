"use strict";

const flight = "LM2334";
const raj = {
  name: "Raj Gaurav",
  passport: 12334578,
};

const checkIn = function (flightNum, passenger) {
  (flightNum = "LH999"), (passenger.name = "Mr." + passenger.name);
  if (passenger === 12334578) {
    alert("Checked in");
  } else {
    alert("Wrong passporet");
  }
};

checkIn(flight, raj);
console.log(flight); // primitrve so the value didnt change
console.log(raj); // reference so the name changed

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(raj); //passport is changed for both
checkIn(flight, raj);

//js doesnt have passing by refernce , only passing by value

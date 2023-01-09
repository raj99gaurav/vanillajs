"use strict";

///////////////////////////////////////
// Constructor Functions and the new Operator -> constructor function doesnt work with arrow func
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this! as each obj will carry this func and will be bad for perf. so we use prototype
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const raj = new Person("Raj", 1991);
console.log(raj);

// 1. New {empty object} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);

console.log(raj instanceof Person);

Person.hey = function () {
  console.log("Hey there 👋");
  console.log(this);
};
Person.hey();

"use strict";

const lufthansa = {
  airline: "Lufthansa",
  iatacode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iatacode} ${flightNum}`, name });
  },
};

lufthansa.book(239, "Raj");
lufthansa.book(6969, "Gaurav");
console.log(lufthansa);

const eurowings = {
  airline: "eurowings",
  iatacode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// book(23, "rg"); in strict mode it is a regular function call so it will give an error

book.call(eurowings, 23, "rg");
console.log(eurowings);

book.call(lufthansa, 69, "rg69");
console.log(lufthansa);

const swiss = {
  airline: "swiss",
  iatacode: "SW",
  bookings: [],
};

book.call(swiss, 6999, "raj");
console.log(swiss);

//apply doesnt take list but an array

const flightData = [696969, "raj the gaurav"];
book.apply(swiss, flightData);
console.log(swiss);

// we dont use apply anymore as we have a better way to do it now.

book.call(swiss, ...flightData);
console.log(swiss);

//bind method doesnt need call function it return a new function that binds it to a particular class

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);

bookEW(20, "Raj ew");

//partial application
const bookEW23 = book.bind(eurowings, 23); // only for flight 23
bookEW23("RAJG23");
bookEW23("G23");

//with event listerns

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

//partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23); //null is skip that argument

console.log(addVat(200));

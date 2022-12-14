"use strict";

const greet = function (gretting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const gretterHey = greet("Hey");
gretterHey("Raj");

//works because of closure

greet("hello")("raj");

//challenge write greet as arrow function

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

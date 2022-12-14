"use strict";

const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
};

//higher order func
const transformer = function (str, fn) {
  console.log(`Original string : ${str}`);
  console.log(`Transformer string : ${fn(str)}`);

  console.log(`Transformered by  : ${fn.name}`);
};

transformer("Js is the best", upperFirstWord);
transformer("Js is the best", oneWord);

//js uses call back functions all the time as tthey allow to create abstraction as the transformer function should not care about how the string is transformed

const high5 = function () {
  console.log("👋🏼");
};
document.body.addEventListener("click", high5);

["Raj", "Gaurav", "RgVlogs"].forEach(high5);

'use strict';

function calcAge(birthYear) {
  const age = 2022 - birthYear;
  console.log(firstName); //firsname is a global variable so we can access it.

  function printAge() {
    const output = `${firstName} ,You are ${age} born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      //block scope
      var millenial = true;

      //const firstName = 'Gaurav'; within this if we will get firstName as gaurav we define it inside the block.

      const str = `Oh and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      output = 'New Output';
    }
    //console.log(str); cant access it as it was blocked scope.

    console.log(millenial); // we can access it as we used var keyword which is func scoped.

    // add(2, 3); we cant access it as funcs are also blocked scoped in strict mode.

    console.log(output); // we will get new output
  }
  printAge();

  return birthYear;
}

const firstName = ' Raj';
calcAge(1999);

//console.log(age); we cant access age here as it in not in the scope
//printAge(); same for this function

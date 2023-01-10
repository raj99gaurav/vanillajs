'use strict';

/*Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining!
Test data:
§ Data1:[5,2,4,1,15,8,3] § Data2:[16,6,10,5,6,1,4]
GOOD LUCK 😀
*/

const calcAverageHumanAge = function (age) {
  const humanAge = age.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  // console.log(humanAge);
  const adults = humanAge.filter(age => age >= 18);
  // console.log(adults);
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  return average;
};

const calcAverageHumanAgeArrow = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg = calcAverageHumanAgeArrow([5, 2, 4, 1, 15, 8, 3]);
console.log(avg);

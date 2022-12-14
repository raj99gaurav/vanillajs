'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

let [main, secondary] = restaurant.categories;
console.log(first, second);

const [one, , three] = restaurant.categories;
console.log(one, three);

//switching variables
// const temp=main;
// main=secondary;
// secondary=temp;
// console.log(main,secondary);
//switching variables
[main, secondary] = [secondary, , main];
console.log(main, secondary);

//receive 2 retun values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested array
const nested = [2, 4, [5, 6]];
const [i, , j] = nested; //(2) [5,6]
console.log(i, j);

//what if we want 2 5 6 as an elements and not [5,6]

const [x, , [y, z]] = nested;
console.log(x, y, z);

//default values when we dont know length of the array

// const [p, q, r] = [8, 9];
// console.log(p,q,r); error as we dont know value of r

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

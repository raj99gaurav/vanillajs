'use strict';

/*Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Juliafoundoutthattheownersofthefirstandthelasttwodogsactuallyhave cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. CreateanarraywithbothJulia's(corrected)andKate'sdata
3. Foreachremainingdog,logtotheconsolewhetherit'sanadult("Dognumber1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy   ")
4. Runthefunctionforbothtestdatasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3] § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉 GOOD LUCK 😀*/

const arrJulia = [3, 5, 2, 12, 7];
const arrKate = [4, 1, 15, 8, 3];
const arrJuliaCorrect = arrJulia.slice(1, -1);
console.log(arrJuliaCorrect);

const checkDogs = function (arr1, arr2) {
  const dogs = arr1.concat(arr2);
  dogs.forEach(function (mov, i, arr) {
    if (mov >= 3) {
      console.log(`Dog Number ${i} is an adult,and is ${mov} years old`);
    } else {
      console.log(`Dog Number ${i} is still a puppy`);
    }
  });
};

checkDogs(arrJuliaCorrect, arrKate);

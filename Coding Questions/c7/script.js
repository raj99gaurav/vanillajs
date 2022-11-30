'use strict';

/*Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
Your tasks:
1. Foreachofthem,createanobjectwithpropertiesfortheirfullname,mass,and height (Mark Miller and John Smith)
2. Createa'calcBMI'methodoneachobjecttocalculatetheBMI(thesame method on both objects). Store the BMI value to a property, and also return it from the method
3. LogtotheconsolewhohasthehigherBMI,togetherwiththefullnameandthe respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
GOOD LUCK 😀 */

const mark = {
  fullname: 'Mark',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

const john = {
  fullname: 'John',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();
console.log(john.bmi);
console.log(mark.bmi);

if (mark.bmi < john.bmi) {
  console.log(`${john.fullname} BMI (${john.bmi}) is higher than ${mark.fullname} (${mark.bmi})!`);
}
else if (mark.bmi > john.bmi) {
  console.log(`${mark.fullname} BMI (${mark.bmi}) is higher than ${john.fullname} (${john.bmi})!`);
}
else {
  console.log("Both have equal bmi");
}
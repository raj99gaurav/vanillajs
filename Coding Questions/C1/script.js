/*Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. StoreMark'sandJohn'smassandheightinvariables
2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
versions)
3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.*/

const markHeight = 1.69;
const markMass = 78;
const johnHeight = 92;
const johnMass = 1.95;

const markBMIV1 = markMass / markHeight ** 2;
const markBMIV2 = markMass / (markHeight * markHeight);

const johnBMIV1 = johnMass / johnHeight ** 2;
const johnBMIV2 = johnMass / (johnHeight * johnHeight);

const markHigherBMI = markBMIV1 > johnBMIV1;

console.log(markHigherBMI);
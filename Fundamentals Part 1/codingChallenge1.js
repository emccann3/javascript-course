//Test Data 1
let markMass = 78;
let markHeight = 1.69
let johnMass = 92;
let johnHeight = 1.95

// BMI calculation = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
console.log("**********TEST DATA ONE*************");
let markBMI = markMass / markHeight ** 2
let johnBMI = johnMass / johnHeight ** 2

console.log(markBMI, johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// Test Data 2
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

markBMI = markMass / markHeight ** 2
johnBMI = johnMass / johnHeight ** 2

console.log("**********TEST DATA TWO*************");
console.log(markBMI, johnBMI);

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
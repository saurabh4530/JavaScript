const sum = require('./operation.cjs');
console.log("sum of given num: ",sum(1, 2)); // Output: 3 imported single file

const div=require("./operation.cjs")
console.log("division :", div(6,3));


//import multiple files
let {multiplication,substraction}=require("./math.cjs")
console.log("multiplication: ", multiplication(25,20));
console.log("substraction",substraction(10,5));


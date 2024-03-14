
// 1. Primitive Data Types


// Example 1: Number 2^53
let age = 25 + 12 - 11 / 2; // age is a number variable
console.log(typeof age); // Output: "number"





// Example 2: String
let name = "John"; // name is a string variable
let fname = "John" + " Raja " + "Smith"; // name is a string variable
let lname = 'Smith';
let mname = `Raja`;

console.log(typeof name); // Output: "string"
console.log(typeof lname); // Output: "string"
console.log(typeof mname); // Output: "string"

// Example 3: Boolean
let isStudent = true; // isStudent is a boolean variable
let isTeacher = false; // isStudent is a boolean variable
console.log(typeof isStudent); // Output: "boolean"
console.log(typeof isTeacher); // Output: "boolean"

// Example 4: Undefined
let undefinedVar; // undefinedVar is undefined
console.log(typeof undefinedVar); // Output: "undefined"


// Example 5: Null
// Output: "object" (quirk in JavaScript, null is an object)
 
let  nullVar = null; // nullVar is explicitly assigned null
console.log(typeof nullVar);


// Example 6: Symbol


// Example 7: BigInt
let elonMuskWelth = 10000000000000000n;


// 2. Object Data Type

// Example 8: Object
let person = {
  // Property = name: value,
  firstName: "John",
  lastName: "Doe",
  age: 30
};

console.log(typeof person); // Output: "object"

// 3. Function type


// Example 7: Function

// 3. Function type

// Example 7: Function
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet();
console.log(typeof greet); // Output: "function"



 // Output: "function"



// 4. Symbols

// Example 8: Symbol
const symbol1 = Symbol("symbol1");
const symbol2 = Symbol("symbol2");
console.log(symbol1 === symbol2); // Output: false (symbols are always unique)

// Summary:
// - JavaScript has primitive data types (number, string, boolean, undefined, null) and non-primitive data types (object, arrays,function ,symbol).
// - Variables are declared using let, const, or var (legacy).
// - Objects and functions are considered non-primitive data types.
// - Each data type serves a specific purpose in JavaScript and is used for different kinds of data and operations.



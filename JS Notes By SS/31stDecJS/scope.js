// // scopes.js

// // let var const are nothing but scopes...... aka Variable scope type 


//  //Variable scope type

//  //Example 1: Using var in the global scope

  var globalVar = "I am a global variable";

  function exampleVar() {
    // *****Variables declared with var are function-scoped *****
 var localVar = "I am a local variable";
  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible
  }
exampleVar();
console.log(globalVar);
// console.log(localVar)
//  Uncommenting this line would result in an error since localVar is not accessible outside the function scope. ****can we say that local var is blocked scope?****


//Example 2: Using let in block scope

  function exampleLet() {
// //   // ****Variables declared with let are block-scoped****
 let ravi = "I am watchmen";
 np ="This is a global variable created from inside "
    // Re-initialization of let is allowed inside the same scope  
     ravi = "Please call me ravi watchmen";
//     console.log(ravi); 
    if (true) {
      let ravi = "I am brother";
      console.log(ravi)           
    }

    //  else{
    //   console.log('You made it')
    // }
console.log(ravi); 
  } 
exampleLet();
console.log(np);

// Example 3: Using const for constants
const pi = 3.14;

// pi = 3.14159; // Uncommenting this line would result in an error since const variables cannot be reassigned.

//Example 4: Hoisting with var
  
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted";

hoistedVar ="is reinialization working"

//hoistedVar = "I am hoisted"; ReferenceError: hoistedVar is not defined
//let hoistedVar = "I am hoisted";  ReferenceError: Cannot access 'hoistedVar' before initialization
//const hoistedVar = "I am hoisted";  ReferenceError: Cannot access 'hoistedVar' before initialization



// Example 5: Hoisting with let and const
// console.log(hoistedLet); // Uncommenting this line would result in a ReferenceError since let and const are not hoisted.
// let hoistedLet = "I am not hoisted";

// Summary:
// - var is function-scoped and is hoisted to the top of its function.
// - let is block-scoped and is hoisted to the top of its block.
// - const is block-scoped and cannot be reassigned after initialization.



function checking(){
  
  console.log(hoistedVar); // Output: undefined
  var hoistedVar = "I am hoisted";
  
  hoistedVar ="is reinialization working"
  }
  checking();
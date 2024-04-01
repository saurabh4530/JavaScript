
// !   CommonJS Modules vs. ES6 Modules

/*

- In JavaScript, modules are used to break up large programs into smaller, manageable, and reusable pieces of code. 

- There are two widely used module systems in JavaScript: 
    CommonJS (CJS) and ECMAScript 2015 Modules (ES6 Modules).

 !   CommonJS Modules
- CommonJS is the module system initially used in Node.js for server-side development.
- It allows you to encapsulate code within modules and export them to be used in other parts of an application.
-   Exporting in CommonJS  : You use `module.exports` to export functions, objects, or primitive
 values from a module so they can be used by other modules.
-   Importing in CommonJS  : You use `require()` function to import the exported module into another module.
*/

//?  Basic Example (CommonJS):  

//* File Name = lib.js (Exporting module)
  
function sum(a, b) {
  return a + b;
}
module.exports = sum;
  

//* File Name = main.js (Importing module)
  
const sum = require('./lib');
console.log(sum(1, 2)); // Output: 3
  

// !  ES6 Modules
/*
- ES6 modules are a standard for working with modules in the JavaScript language defined in ECMAScript 2015. 

- They are supported in most modern browsers and can be used for both client-side and server-side JavaScript.

- Exporting in ES6 Modules  : You use `export` to export functions, objects, or primitive values. You can have multiple named exports per module and one default export.

- Importing in ES6 Modules  : You use `import` to import the exported entities from other modules.
*/

// Basic Example (ES6 Modules):  
//* File Name = lib.mjs (Exporting module)

export function sum(a, b) {
  return a + b;
}
  

//* File Name = main.mjs (Importing module)
  
import { sum } from './lib.mjs';

console.log(sum(1, 2)); // Output: 3
  

/*
!   Key Differences

? Syntax  : 
   - CommonJS uses `require` and `module.exports`, while ES6 modules use `import` and `export`.

? Loading Mechanism  : 
   - CommonJS modules are loaded synchronously, which suits server-side development like in Node.js. ES6 modules can be loaded asynchronously, which is beneficial for client-side development.

? Runtime Support  : 
   - CommonJS is supported by default in Node.js. ES6 modules are supported in most modern browsers and in Node.js (with `.mjs` extension or by setting `"type": "module"` in `package.json`).

- Both module systems can get more complex with named exports, default exports, dynamic imports, and re-exporting modules.
*/

// Todo ------------------------ CommonJS Module Syntax


// ? Single Export using module.exports (CommonJS):  

//* File Name = sum.js
const sum = (a, b) => a + b;
module.exports = sum;

//* File Name = main.js (Importing module)
const sum = require('./sum');
console.log(sum(1, 2)); // Output: 3

// ? Multiple Exports using module.exports (CommonJS):  

//* File Name = math.js
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;
module.exports = { multiply, subtract };

//* File Name = main.js (Importing module)
const { multiply, subtract } = require('./math');
console.log(multiply(6, 4)); // Output: 24
console.log(subtract(10, 5)); // Output: 5

// ? Named Exports using exports alias (CommonJS):  

//* File Name = operations.js
exports.divide = (a, b) => a / b;
exports.modulus = (a, b) => a % b;

//* File Name = main.js (Importing module)
const { divide, modulus } = require('./operations');
console.log(divide(20, 4)); // Output: 5
console.log(modulus(20, 3)); // Output: 2

//Todo ------------------------ ES6 Module Syntax

// ?  Named Exports (ES6 Modules):  

//* File Name = lib.mjs
export const pi = 3.14;
export function multiply(a, b) {
  return a * b;
}

//* File Name = main.mjs (Importing module)
import { pi, multiply } from './lib.mjs';
console.log(pi); // Output: 3.14
console.log(multiply(2, 3)); // Output: 6


// ?  Default Export (ES6 Modules):  

//* File Name = sum.mjs
const sum = (a, b) => a + b;
export default sum;

//* File Name = main.mjs (Importing module)
import sum from './sum.mjs';
console.log(sum(1, 2)); // Output: 3


// ? Mixing Default and Named Exports (ES6 Modules):  

//* File Name = calculator.mjs
const subtract = (a, b) => a - b;
export default subtract; // Default export
export const divide = (a, b) => a / b; // Named export

//* File Name = main.mjs (Importing module)
import subtract, { divide } from './calculator.mjs';
console.log(subtract(10, 5)); // Output: 5
console.log(divide(20, 4)); // Output: 5


//?   Re-exporting (ES6 Modules):  

//* File Name = util.mjs
export { sum as add } from './lib.mjs';
  

//* File Name = main.mjs
import { add } from './util.mjs';
console.log(add(4, 5)); // Output: 9
  

/*
? Dynamic Imports (ES6 Modules):  
- Dynamic imports can be used to load modules on demand.
*/

//* File Name = main.mjs

async function loadModule() {
  const { sum } = await import('./lib.mjs');
  console.log(sum(6, 7)); // Output: 13
}

loadModule();


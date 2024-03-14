// Example 1: Using for...in with arrays

const colorsArray = ["red", "green", "blue"];

console.log("Using for...in with arrays:");

for (let index in colorsArray) {
  console.log(index); // Outputs: 0, 1, 2 (indices, not values)
}

console.log("------------------------");


// Example 2: Using for...of with arrays

console.log("Using for...of with arrays:");
for (let color of colorsArray) {
  console.log(color); // Outputs: red, green, blue
}
console.log("------------------------");

// Example 3: Using for...in with objects
const personObject = {
  name: "John",
  age: 30,
  city: "New York"
};
console.log("Using for...in with objects:");
for (let key in personObject) {
  console.log(`${key}: ${personObject[key]}`);
  console.log(key + ":" + personObject[key])
}
console.log("------------------------");

// Example 4: Using for...of with strings

const messageString = "Hello";

console.log("Using for...of with strings:");
for (let char of messageString) {
  console.log(char); // Outputs: H, e, l, l, o
}
console.log("------------------------");


//! ************************* Nested Examples

// Example 5: Using for...in with nested arrays

const nestedColorsArray = [
  ["red", "green", "blue"],
  ["yellow", "purple", "orange"]
];

console.log("Using for...in with nested arrays:");

// for (let index in nestedColorsArray) {
//   for (let color of nestedColorsArray[index]) {
//     console.log(color); // Outputs: red, green, blue, yellow, purple, orange
//   }
// }

for (let key of nestedColorsArray){
for (let say of key){
  console.log(say)
     }
}
console.log("------------------------");

// Example 8: Using for...of with nested arrays
console.log("Using for...of with nested arrays:");
for (let colors of nestedColorsArray) {
  for (let color of colors) {
    console.log(color); // Outputs: red, green, blue, yellow, purple, orange
  }
}
console.log("------------------------");


// Example 6: Using for...of with nested objects

const nestedPersonObject = {
  person1: {
    name: "John",
    age: 30
  },
  person2: {
    name: "Alice",
    age: 25
  }
};
for (let key in nestedPersonObject) {
  console.log(`${key}: ${nestedPersonObject[key].name}`);
}

console.log(Object.entries(nestedPersonObject)); 

//Object.entries(obj) = This will return all the values in the object with names.

console.log(Object.values(nestedPersonObject));
// Object.values(obj) = This will return all the values in the object without names.


console.log("Using for...of with nested objects:");
for (let person of Object.values(nestedPersonObject)) {
  console.log(person.name); // Outputs: John, Alice
}
console.log("------------------------");


// Example 7: Using for...in with nested objects
console.log("Using for...in with nested objects:");

console.log("------------------------");


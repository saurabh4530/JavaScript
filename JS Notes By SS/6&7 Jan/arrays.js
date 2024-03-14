//! Array Basics

//? What are arrays = An array is a DATA STRUCTURE in JavaScript used to store and manage multiple values of same or different datatype in a sequential manner.
// Never say its a data type. Essentially its an object which has index as keys if we see it as an object datatype.

//! Basic declaration and initializaion.

// let array2 = [1, 2, 3, 4, 5];
// let array3 = ["Hello", "there", "my", "name", "is", "lazy", "Mahesh"];

let array1 = [1,"there",{ name: "Shubham",lname: "sonar" },["Mustang", "Lamborghini", "Rolls Royce", "Bentley", "Dodge Challenger"]];

console.log(array1[0]);//1
console.log(array1[1]);//there
console.log(array1[2].name);//Shubham  note here dot operator is used so it must be a function
console.log(array1[2].lname);//sonar
//console.log(array1[3][0]); indivisual item acesses
// console.log(array1[3][1]);
// console.log(array1[3][2]);
// console.log(array1[3][3]);
console.log(array1[3]);

//! Notes on arrays

// JavaScript Array Definition
let exampleArray = ["Red", "Green", "Blue"];
console.log("Example Array:", exampleArray);

/*
? Declaration
 Two syntaxes for creating an empty array.
 */
let arr1 = new Array();
let arr2 = [];
console.log("Empty Array Declaration:", arr1, arr2);

/*
 Initial elements in the array.
 */

let fruits = ["Apple", "Orange", "Plum"];
console.log("Array with Initial Elements:", fruits);

/*
 Accessing array elements.
 */
console.log("First Element:", fruits[0]); // Apple
console.log("Second Element:", fruits[1]); // Orange
console.log("Third Element:", fruits[2]); // Plum

/*
 Modifying array elements.
 Replace an element at a specific index.
 */
fruits[2] = 'Pear';
console.log("Modified Array:", fruits);  //Modified Array: [ 'Apple', 'Orange', 'Pear' ]

/*
 Adding a new element to the array.
 Add a new element at the end of the array.
 */
fruits[3] = 'Lemon';
console.log("Array with New Element:", fruits);

/*
 Array length.
 Get the total count of elements in the array.
 */
console.log("Array Length:", fruits.length);

/*
 Array with mixed values.
 Arrays can store elements of any type.
 */
let mixedArray = ['Apple', { name: 'John' }, true, function() { console.log('hello'); }];
console.log("Mixed Array:", mixedArray);
console.log("Accessing Object in Array:", mixedArray[1].name); // John
mixedArray[3](); // hello
console.log(mixedArray[2]);
/*
 Trailing comma in array.
 The "trailing comma" style makes it easier to insert/remove items.
 */
let trailingCommaArray = [
  "Apple",
  "Orange",
  "Plum",
];
console.log("Array with Trailing Comma:", trailingCommaArray);

/*
 Get last element with "at".
 Explicitly calculate the last element index using arr.at(-1).
 */
let lastElement = fruits.at(-1);
console.log("Last Element using at(-1):", lastElement);

// Methods pop/push, shift/unshift

let fruitsForMethods = ["Apple", "Orange", "Pear"];

/*
? pop
 Extracts the last element of the array and returns it.
 If the array is empty, it returns undefined.
 Alternative: fruitsForMethods.at(-1) can be used to get the last element without modification.
 */
let poppedElement = fruitsForMethods.pop();
console.log("Popped Element:", poppedElement);
console.log("Array after pop:", fruitsForMethods);

/*
? push
 Append the element to the end of the array.
 Equivalent to fruitsForMethods[fruitsForMethods.length] = ...
 */
fruitsForMethods.push("Peach");
console.log("Array after push:", fruitsForMethods);

/*
? shift
 Extracts the first element of the array and returns it.
 If the array is empty, it returns undefined.
 Alternative: fruitsForMethods[0] or fruitsForMethods.at(0) can be used to get the first element without modification.
 */
let shiftedElement = fruitsForMethods.shift();
console.log("Shifted Element:", shiftedElement);//Apple
console.log("Array after shift:", fruitsForMethods);//[ 'Orange', 'Peach' ]

/*
? unshift
 Add the element to the beginning of the array.
 Equivalent to fruitsForMethods[0] = ..., shifting existing elements.
 */
fruitsForMethods.unshift('Banana');
console.log("Array after unshift:", fruitsForMethods);

/*
? Adding multiple elements with push and unshift.
 */
fruitsForMethods.push("Cherry", "Grapes");
fruitsForMethods.unshift("Mango", "Kiwi");
console.log("Array after multiple push and unshift:", fruitsForMethods);

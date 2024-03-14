/*
! `sort()` Method
What it Does: The `sort()` method sorts the elements of an array in place and returns the sorted array. The default sort order is according to string Unicode code points.

Syntax:
array.sort([compareFunction]);

- compareFunction (optional): Specifies a function that defines the sort order. If omitted, the array elements are converted to strings and sorted according to each character's Unicode code point value.

Compare Function:
- If `compareFunction(a, b)` returns less than 0, `a` is sorted before `b`.
- If `compareFunction(a, b)` returns 0, `a` and `b` are left unchanged with respect to each other.
- If `compareFunction(a, b)` returns greater than 0, `b` is sorted before `a`.

The sort method is mutating method. It makes changes in the actual array. and also returns the new sorted array.
Returns: The sorted array.
*/

// ! Default Sorting (Alphabetical)
// - Example: Sorting an array of strings alphabetically.

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
console.log(fruits.sort());
// - Output: `["Apple", "Banana", "Mango", "Orange"]`.

// ! Numeric Sorting
// - Since the default sort method sorts elements as strings, it's necessary to provide a compare function for numeric sorting.
// - Ascending Order:

let numbers = [40, 100, 1, 5, 25];
numbers.sort();
console.log(numbers);

// Writing callback function inside the sort call.
numbers.sort(function (a, b) {
  return a - b;
});

// Sending callback function sort method.
numbers.sort(asscendingOrder);

function asscendingOrder(a, b) {
  return a - b;
}
console.log("Array sorted in asscending order: ", numbers);

// - Descending Order:
numbers.sort(descendingOrder);

function descendingOrder(a, b) {
  return b - a;
}
console.log("Array sorted in descending order: ", numbers);

numbers.sort(function (a, b) {
  return b - a;
});

// ! Real-Life Examples
// 1. Sorting User Data: If you have an array of user objects with a `name` property, you can sort these users alphabetically by their name.

let users = [
  {
    empId: 123,
    name: "Charlie",
    location: "NYC",
  },
  {
    empId: 234,
    name: "Bob",
    location: "WDC",
  },
  {
    empId: 432,
    name: "Alice",
    location: "Wonderland",
  },
];

//? Sorting using string in the object

users.sort(function (a, b) {
  console.log(a.name.localeCompare(b.name));
  return a.name.localeCompare(b.name);
});
console.log(users);

//? Sorting using number in the object

users.sort(function (a, b) {
  return a.empId - b.empId; // compare the id and arrange accordingly.
});
console.log(users);


// 2. Sorting Product Prices: In an e-commerce app, sorting an array of product prices from lowest to highest to display products in ascending order of price.

let prices = [29.99, 9.99, 199.99, 49.99];
prices.sort(function (a, b) {
  return a - b;
});

// 3. Sorting Dates: If you have an array of  Date objects, you can sort them chronologically.
// It can only sort correctly if we use yyyy-mm-dd format.

let dates = [new Date(2020, 1, 1), new Date(2019, 6, 1), new Date(2020, 6, 1)];
dates.sort(function (a, b) {
  return a - b;
});
console.log(dates);


// ! Notes
// - The `sort()` method mutates the original array. If you need to keep the original array unchanged, create a copy of the array before sorting.
// - Sorting is done based on the string Unicode code point value by default, which can lead to unexpected results for numbers. Therefore, always use a compare function for numeric sorting.
// - The sorting algorithm used by `sort()` varies across browsers, but it's typically a combination of insertion sort and quicksort (as of most modern browsers).

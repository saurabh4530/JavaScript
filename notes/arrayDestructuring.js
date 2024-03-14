
//!           Destructuring Assignment

/*
? iNTERVIEWER Definition =
? Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables.

Destructuring also works great with complex functions that have a lot of parameters, default values, etc.
It’s called “destructuring assignment,” because it “destructurizes” by copying items into variables.

*/

//! Destructuring an Array
/*
Destructuring helps us to use the array elements as variables with names instead of index. There's no change in the orignal array. 

Usage --->
1] We can work with variables instead of array members.
2] It can be combined with split or other array-returning methods:
*/

//Todo- Example no 1:

let arr = ["Shubham", "Sonar", "Nashik"];
let myName = arr[0];
let mySurname = arr[1];

let [fname, lname, address] = arr;
console.log(fname);
console.log(lname);
console.log(address);

// Here shubham in arr[0] is assigned to the fname and sonar in arr[1] to the lname. 

//Todo- Example no 2:

let [firstName, surName] = "Shubham Sonar".split(' ');
console.log(firstName);
console.log(surName);


//Todo- Example no 3 = Ignore elements using commas

// Unwanted elements of the array can also be thrown away via an extra comma: Here second element is not needed.

let [first, , last, title] = ["Ashoka", "The", "Maurya", "is one of the greatest King"];
console.log(`${first}  ${last}  ${title}`);


//! Note- Works with any iterable on the right-side.
// Because=  It’s a kind of syntax sugar for calling for..(x of Itterable) over the value to the right of = operator and assigning the values.

let [a, b, c, d, e, f, g, h, , , , , , , , p] = "abcdefghijklmnop";
console.log(a,b,c,d,e,f,g,p);

let [one, two, three, four, five, six] = new Set([1, 2, 3, 4, 5, 6, 7]);
console.log(one, two, three, four, five, six);

console.log(`${a}`);

// let {a,b,c} = [1,2,3]; // This is invalid because we cant create object using litteral in this manner.


//! NOte- Assign to anything at the left-side
// We can use any 'assignables' on the left side.

let user1 = {};

[user1.name, user1.surname] = "Shubham Sonar".split(' ');

console.log(user1);

{
    let name, surname;
    [name, surname] ="Shubham Sonar".split(' ');
    console.log(name, surname)
}


//! Note- Looping with .entries()
// We can use it with destructuring to loop over keys-and-values of an object:

// Here in this example in for loop the .entries method will give here pair of 2 values in which first pair will be destructured and copied to key and value variables then this step is followed for each pair of values in the object untill its empty. Means here the expression Object.entries(user1) can be used as replacement for an array like variables.

// This is very imp because we can not directly run the for..of on the object but only for...in

console.log(Object.entries(user1));

for (let [key, value] of Object.entries(user1)) {

    console.log(`${key} : ${value}`);
    
}




//! Using DESTRUCTURING on maps using the loops.
// We can use it with destructuring to loop over keys-and-values pairs of map directly because it is itterable.

let user2 = new Map();
user2.set("name", "Shubham");
user2.set("age", "26");

for (let [key, value] of user2) {
    console.log(`${key} : ${value}`);
}


//! Swap variables trick
// There’s a well-known trick for swapping values of two variables using a destructuring assignment.
let x =1, y=2, z;
z = y;  // 2, 2
y = x; // 1, 1
x = z;// 2, 2

let me = 'Shubham';
let you = 'Person';

console.log(`Before = ${me} : ${you}`);
// #123abc = [person, shubham];
[me, you] = [you, me];
console.log(`After = ${me} : ${you}`);

//  Actual way to split without using third variable.

me = me + " " + you;
you = me.split(" ")[0];
me = me.split(" ")[1];
console.log(`After = ${me} : ${you}`);



//! Using the rest ‘...’  with destructuring.
// Usually, if the array is longer than the list at the left, the “extra” items are ignored. For example, here only two items are taken, and the rest is just ignored:
// Further items aren't assigned anywhere

let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(name1); // Julius
console.log(name2); // Caesar

// If we’d like also to gather all that follows – we can add one more parameter that gets “the rest” using three dots "...":
// Here ...rest is array of items, starting from the 3rd one i.e value of rest is the array of the remaining array elements.

let [name3, name4, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(rest[0]);
console.log(rest[1]);
console.log(rest.length);





//! Default VAlues
// If the array is shorter than the list of variables at the left, there’ll be no errors. Absent values are considered undefined:

let [value1, value2] = [];
console.log(` Value 1 is : ${value1} \n Value 2 is : ${value2} `);

// If we want a “default” value to replace the missing one, we can provide it using =:
// default values

let [name = "Guest", surname = "Anonymous"] = ["Julius"];

console.log(name);    // Julius (from array)
console.log(surname); // Anonymous (default used)



// Default values can be more complex expressions or even function calls. They are evaluated only if the value is not provided.
// For instance, here we use the prompt function for two defaults:

// IIFE with arrow function to get the surnam.

let [nam = () => 'Arjun', surnam = (() => { return 'Saraf' })()] = ["Julius"];

console.log(' This is an example of complex Default Values. ');
console.log(nam);    // Julius (from array)
console.log(surnam); // whatever arrow function gets

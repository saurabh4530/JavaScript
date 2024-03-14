
//!                               Javascript Statements

//? Example 1: Basic if statement

let temperature = 10;

if (temperature > 30 && temperature < 45) {

  console.log("It's a hot day!");

}else if(temperature >=25 && temperature < 30){

  console.log("It's a normal day!");

}else{

  if(temperature >= 45) console.log("Its the exterem hot temperature");
  
  if(temperature < 25) console.log("Its the exterem cold temperature");
}

//? Example 2: if-else statement

let hour = 14;

if (hour < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!");
}

//? 2. Nested if Statements
//? Example 3: Nested if statements

let userAge = 18;
let hasID = true;

if (userAge >= 18) {
  console.log("You are eligible to enter.");

  if (hasID) {
    console.log("You have a valid ID. Welcome!");
  } else {
    console.log("You need to have a valid ID to enter.");
  }
} else {
  console.log("You are too young to enter.");
}

//? 3. else-if Statement
//? Example 4: else-if statement

let timeOfDay = "evening";

if (timeOfDay === "morning") {
  console.log("Good morning!");
} else if (timeOfDay === "afternoon") {
  console.log("Good afternoon!");
} else if (timeOfDay === "evening") {
  console.log("Good evening!");
} else {
  console.log("Good night!");
}

//? 4. Ternary Operator
//? Syntax:-
// condition ? "Its true" : "Its false";

//Todo- Example 5A: Without Ternary operator

let isRain = true;
if(isRain){
  console.log("Raining");
}else{
  console.log("Not Raining");
}

//Todo- Example 5B: With Ternary operator

let isRaining = true;
let weatherMessage = isRaining ? "Bring an umbrella" : "Enjoy the weather";
console.log(weatherMessage);

// 5. Logical Operators with if Statements

// Example 6: Logical AND (&&) with if statement
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
  console.log("You are logged in as an admin.");
} else {
  console.log("Access denied.");
}

// Example 7: Logical OR (||) with if statement
let isGuest = false;
let isVIP = true;

if (isGuest || isVIP) {
  console.log("Welcome to the event!");
} else {
  console.log("Access denied.");
}

// Summary:
// - `if` statements are used for conditional execution of code blocks.
// - `else` statements provide an alternative block of code to be executed when the condition in the `if` statement is false.
// - Nested `if` statements allow for more complex conditions and logic.
// - `else-if` statements provide multiple alternative conditions.
// - Ternary operator is a concise way to write simple `if-else` statements.
// - Logical operators (`&&`, `||`) are used to combine conditions in `if` statements.



//! 4. Ternary Operator within if Statement

// Example 8: Ternary operator within an if statement
let isUserLoggedIn = true;
let message = isUserLoggedIn ? "Welcome, User!" : "Please log in to continue";
console.log(message);

// Summary:
// - The ternary operator is a concise way to write simple if-else statements.
// - It consists of a condition followed by a question mark, the expression to execute if the condition is true, a colon, and the expression to execute if the condition is false.

// @ts-nocheck
//!                          object
{//? sort by key
  // Original object
const originalObject = { b: 2, c: 1, a: 3 };

// Convert object to array of key-value pairs
const entries = Object.entries(originalObject);
console.log(entries);
// Sort the array based on keys
entries.sort((a, b) => a[0].localeCompare(b[0]));

// Reconstruct object from sorted array
const sortedObject = Object.fromEntries(entries);

console.log(sortedObject); // Output: { a: 3, b: 2, c: 1 }

}
{
  //? sort by value
  // Original object
const originalObject = { b: 2, c: 1, a: 3 };

// Convert object to array of key-value pairs
const entries = Object.entries(originalObject);

// Sort the array based on values
entries.sort((a, b) => a[1] - b[1]);

// Reconstruct object from sorted array
const sortedObject = Object.fromEntries(entries);

console.log(sortedObject); // Output: { c: 1, b: 2, a: 3 }

}

{
  //? JavaScript program to list the properties of a JavaScript object.
  var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
  };
  function access(obj) {
    for (let key in obj) {
      console.log(key, ":", obj[key]);
    }
  }
  access(student);
}
{
  //?Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
  var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
  };
  console.log(student);
  delete student.rollno;
  console.log(student);
}
{
  //?    Write a JavaScript program to get the length of a JavaScript object.

  var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
  };
  function size(obj) {
    let count = 0;
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        count++;
      }
    }
    console.log(count);
  }

  size(student);
}

{
  //? 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

  let library = [
    {
      author: "Bill Gates",
      title: "The Road Ahead",
      readingStatus: true,
    },
    {
      author: "Steve Jobs",
      title: "Walter Isaacson",
      readingStatus: true,
    },
    {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      readingStatus: false,
    },
  ];

  function reading(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].readingStatus) {
        console.log(
          `book ${arr[i].title} is already read and author is ${arr[i].author}`
        );
      } else {
        console.log(
          `book ${arr[i].title} is not  read and author is ${arr[i].author}`
        );
      }
    }
  }
  reading(library);
}
{
  //?Write a JavaScript program to calculate circle area and perimeter.
  function Circle(radius) {
    this.radius = radius;

    this.area = function () {
      return Math.PI * this.radius * this.radius;
    };
    this.perimeter = function () {
      return 2 * Math.PI * this.radius;
    };
  }
  let circle1 = new Circle(3);
  console.log(circle1.area().toFixed(2));
  console.log(circle1.perimeter().toFixed(2));
}
{
  //? want this format [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ] ]
  function objectToList(obj) {
    return Object.entries(obj);
  }

  // Test with an object
  var obj = {
    name: "John",
    age: 30,
    city: "New York",
  };

  console.log(objectToList(obj));
}

console.log("......................................................");

//               ! OOP

{
  //?1. Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

  class Person {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
    details() {
      return ` name: ${this.name},age: ${this.age}, country: ${this.country}`;
    }
  }
  let person1 = new Person("naren", 45, "india");
  let person2 = new Person("saurabh", 25, "bharat");
  console.log(person1.details());
  console.log(person2.details());
}

{
  //?Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.
  class Rectangle {
    constructor(l, w) {
      this.l = l;
      this.w = w;
    }
    area() {
      return `area of reactangle:${this.l * this.w}`;
    }
    perimeter() {
      return `perimeter of reactangle:${2 * (this.l + this.w)}`;
    }
  }
  let rectangle = new Rectangle(20, 10);
  console.log(rectangle.area());
  console.log(rectangle.perimeter());
}
{
  //? Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.
  class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    display() {
      return `${this.make}
    ${this.model}
    ${this.year}`;
    }
  }
  class Car extends Vehicle {
    constructor(make, model, year, NoOfDoor) {
      super(make, model, year);
      this.NoOfDoor = NoOfDoor;
    }
    display() {
      return `${this.make}
    ${this.model}
    ${this.year}
    ${this.NoOfDoor}`;
    }
  }
  let car = new Car("toyota", "suv", 2020, 4);
  console.log(car.display());
}

{
  //?4. Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

  class BankAccount {
    constructor(acNum, balance) {
      this.acNum = acNum;
      this.balance = balance;
    }
    deposit(amt) {
      this.balance += amt;
      return `${amt} Rs is credited in acc num:  ${this.acNum} now total balance is:${this.balance}`;
    }
    withdraw(amt) {
      if (amt <= this.balance) {
        this.balance -= amt;
        return `${amt} rs is debited from acc nuum ${this.acNum} and remaining bal is ${this.balance}`;
      }
    }
    display() {
      return `${this.acNum} have total balance ${this.balance}`;
    }
  }
  let BankAccount1 = new BankAccount("64656365271687", 8500);
  console.log(BankAccount1.deposit(2500));
  console.log(BankAccount1.withdraw(4000));
  console.log(BankAccount1.display());
}
{
  //?5. Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.
  class Shape {
    area() {}
  }
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
    area() {
      return `Area of circle: ${Math.PI * this.radius ** 2}`;
    }
  }
  class Triangle extends Shape {
    constructor(l, b) {
      super();
      this.l = l;
      this.b = b;
    }
    area() {
      return ` area:${(1 / 2) * this.l * this.b}`;
    }
  }
  let triangle = new Triangle(10, 5);
  console.log(triangle.area());
  let circle = new Circle(5);
  console.log(circle.area());
}

{
  //?6. Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.
  class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
    annualSalary() {
      return this.salary * 12;
    }
  }
  class Manager extends Employee {
    constructor(name, salary, dept) {
      super(name, salary);
      this.dept = dept;
    }
    annualSalary() {
      let bonous = this.salary * (20 / 100);
      return `${this.name} have salary ${this.salary} and have bonous ${bonous} work in ${this.dept}`;
    }
  }
  let manager1 = new Manager("saurabh", 25000, "HR");
  console.log(manager1.annualSalary());
}

{
  //? 7. Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

  class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
    details() {
      console.log(this.title);
      console.log(this.author);
      console.log(this.year);
    }
  }
  class Ebook extends Book {
    constructor(title, author, year, price) {
      super(title, author, year);
      this.price = price;
    }
    details() {
      super.details();
      console.log(this.price);
    }
  }
  let ebook = new Ebook("chhava", "shivaji sawant", 2010, 250);
  ebook.details();
}
{
  //? Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.

  class Bank {
    constructor(name) {
      this.name = name;
      this.branches = [];
    }
    addBraches(branch) {
      this.branches.push(branch);
      console.log(`added new branch "${branch} to ${this.name} "`);
    }
    removeBranch(branch) {
      let index = this.branches.indexOf(branch);
      if (index !== -1) {
        this.branches.splice(index, 1);
        console.log(`Removed branch "${branch}" from ${this.name}.`);
      }
    }
    display() {
      console.log("this is main branch", this.name);
      this.branches.forEach((branch) => {
        console.log(branch);
      });
    }
  }
  let bank = new Bank("global bank");
  bank.addBraches("hdfc");
  bank.addBraches("icici");
  bank.addBraches("IDBI");
  bank.addBraches("kotak");
  console.log("............................");
  bank.removeBranch("kotak");
  console.log("............................");

  bank.display();
}

//!Asynchronous Programming

{
  //? Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
  function main(call) {
    setTimeout(call, 2000);
  }
  function message() {
    console.log("hi...............");
  }
  main(message);
}
{
  //? three function callback  eg
  function main(a1, a2, call) {
    let res = call(a1, a2);
    return show(res);
  }
  function sum(x, y) {
    return x + y;
  }
  function show(result) {
    console.log(result);
  }
  main(2, 3, sum);
}

{
  // Sample object
  var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
  };

  // Function to list properties of an object
  function listProperties(obj) {
    for (let prop in obj) {
      console.log(prop);
    }
  }

  // Call the function to list properties of the 'student' object
  console.log("Properties of the 'student' object:");
  listProperties(student);
}
{
  //?Write a JavaScript program that converts a callback-based function to a Promise-based function.
  function callbasefun(arg1, callback) {
    setTimeout(() => {
      let result = arg1 * 2;
      callback(result);
    }, 1000);
  }
  function promisebasefun(arg) {
    return new Promise((resolve) => {
      callbasefun(arg, (result) => {
        resolve(result);
      });
    });
  }
  promisebasefun(3).then((response) => {
    console.log(response);
  });
}
{
  //? 3. Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.
  {
    function getRequest(url) {
      return new Promise((resolve) => {
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }

    getRequest("https://65fc163914650eb2100b7e6f.mockapi.io/api/v100/user")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  }
}

{
  function getdata(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  getdata("https://65fc163914650eb2100b7e6f.mockapi.io/api/v100/user/12")
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}
{
  function paralleldatafetch(urls) {
    let promise = urls.map((url) => {
      return new Promise((resolve, reject) => {
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            resolve(data);
          })
          .catch((error) => reject(error));
      });
    });
    return Promise.all(promise); //any , race, allsettled
  }
  paralleldatafetch([
    "https://65fc163914650eb2100b7e6f.mockapi.io/api/v100/user/2",
    "https://65fc163914650eb2100b7e6f.mockapi.io/api/v100/user/13",
    "https://65fc163914650eb2100b7e6f.mockapi.io/api/v100/user/1",
  ])
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
}
{
  //?5. Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using Promises and 'async/await'.

  {
    //! using async await
    function operation(operateNum, delay) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(operateNum);
        }, delay);
      });
    }
    async function solve() {
      try {
        let result1 = await operation(1, 1000);
        console.log(result1);
        let result2 = await operation(2, 2000);
        console.log(result2);
        let result3 = await operation(3, 2000);
        console.log(result3);
      } catch (err) {
        console.log(err);
      }
    }
    solve();
  }
  {
    //?! promose chaining
    function asyncOperation(operationNumber, delay) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(operationNumber);
        }, delay);
      });
    }

    function performOperationsInSequence() {
      console.log("Starting operations...");

      asyncOperation(1, 2000)
        .then((result1) => {
          console.log("Result of operation 1:", result1);
          return asyncOperation(2, 1000);
        })
        .then((result2) => {
          console.log("Result of operation 2:", result2);
          return asyncOperation(3, 1500);
        })
        .then((result3) => {
          console.log("Result of operation 3:", result3);
          console.log("All operations completed successfully!");
        })
        .catch((error) => {
          console.error("Error occurred:", error);
        });
    }

    // Call the function to perform operations in sequence
    performOperationsInSequence();
  }
}
{
  //?5. Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.

  function fetchDataFromMultipleAPIs(apiUrls) {
    // Map each API URL to a Promise that fetches its data
    const promises = apiUrls.map((url) =>
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((results) => {
          // Combine the results from all APIs into a single object or array
          return results;
        })
        .catch((error) => {
          throw new Error(`Failed to fetch ${url}: ${error.message}`);
        })
    );

    // Use Promise.all() to wait for all Promises to resolve
    return Promise.all(promises);
  }

  // Example usage:
  const apiUrls = [
    "https://65fc163914650eb2100b7e6f.mockapi.io/api/v100/user/2",
    "https://65fc163914650eb2100b7e6f.mockapi.io/api/v100/user/13",
    "https://65fc163914650eb2100b7e6f.mockapi.io/api/v100/user/1",
  ];

  fetchDataFromMultipleAPIs(apiUrls)
    .then((combinedResult) => {
      console.log("Combined result:", combinedResult);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
{
  //? . Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.

  async function fetchedata(url, retries) {
    try {
      for (let i = 0; i < retries; i++) {
        let result = await fetch(url);
        let data = await result.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  fetchedata("https://65fc163914650eb2100b7e6f.mockapi.io/api/v100/user/2", 3);
}
{
  //?  //? . Write a JavaScript function that fetches data from an API and each retries the request fetche differnt user data

  async function fetchData(urltemplate, retries) {
    let url;
    try {
      for (let i = 1; i <= retries; i++) {
        url = urltemplate.replace("{id}", i);
        let result = await fetch(url);
        let data = await result.json();
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  }
  fetchData(
    "https://65fc163914650eb2100b7e6f.mockapi.io/api/v100/user/{id}",
    5
  );
}

//!                                ERROR Handling
{
  //? Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.
  function validate(num) {
    if (!Number.isInteger(num)) {
      throw new Error("kurupya yogya input taka");
    }
    console.log(num);
  }

  try {
    //validate(25)
    validate(2.5); // This will give an error
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("execute");
  }
}
{
  //? Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object.
  try {
    let obj;
    let property = obj.name;
    console.log(property);
  } catch (error) {
    if (error instanceof TypeError) {
      console.log(error.message);
    } else {
      throw error;
    }
  }
}
{
  //?. Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero.
  function check(num1, num2) {
    if (num2 === 0) {
      throw Error(" give another input ");
    }
    console.log(num1 * num2);
  }

  try {
    check(10, 0);
  } catch (error) {
    console.log(error.message);
  }
}

{
  //?. Write a JavaScript function that takes an array as a parameter and throws a custom 'Error' if the array is empty.
  function array(arr) {
    if (arr.length === 0) {
      throw Error("its a empty array");
    }
  }
  try {
    array([]);
  } catch (error) {
    console.log(error.message);
  }
}
{
  //?Write a JavaScript program that uses a try-catch block to catch and handle a 'RangeError' when accessing an array with an invalid index.

  function rangeError(arr, index) {
    try {
      
      let elm=arr[index];
      return (elm);
    } catch (error) {
      
      if (error instanceof RangeError) {
        console.log(error.name);
        console.log(error.message);   
        console.log("its range error");   
      }
      else{
        throw error
      }
      
    }

    
  }
 console.log( rangeError([1,2,3,4], 5));
}
{
let obj={
  fname:"naren",lname:"modi",age:"67"
}
let x=obj.hasOwnProperty("dept");

console.log(x);
console.log(obj.key(fname));
 for(let [key ,value] of Object.entries(obj)){
     
     console.log(key,":",value);
 }
}
{
  //? concate the nested array

  let arr=[1,2,3,[4,5,6,[7,8,9,[7,6,5,4],7,9],1,2],1,23,4];
  function concate(arr) {
    let ar=[];
    function flat(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          flat(arr[i])
          
        } else {
          ar.push(arr[i])
          
        }
        
      }
      
    }flat(arr);
    console.log(ar);
  }
  concate(arr)
}
{
  
}
//!                                  encapsulation

//Encapsulation is a process of binding the data (i.e. variables) with the functions acting on that data.
// It allows us to control the data and validate it.

// Use var keyword to make data members private.
// Use setter methods to set the data and getter methods to get that data.

// ? The encapsulation allows us to handle an object using the following properties:

// Read/Write - Here, we use setter methods to write the data and getter methods read that data.

// Read Only - In this case, we use getter methods only.
// write Only - In this case, we use setter methods only.

class Student {
  constructor() {
    var name;
    var marks;
  }
  get Name() {
    return this.name;
  }
  set Name(name) {
    this.name = name;
  }

  get Mark() {
    return this.marks;
  }
  set Marks(marks) {
    if (marks < 0 || marks > 100) {
      console.log("invalid marks");
    } else {
      this.marks = marks;
    }
  }
}
let student1 = new Student();
student1.Name="prasad";
student1.Marks=85;
console.log(
  `name of student:${student1.Name} and he got ${student1.Mark} marks`
);

// ..........................................//..................//..............
class Car {
    constructor() {
      
      
      this.make ;
      this.model ;
      this.year ;
      this.speed = 0; // Private variable
    }
   
  
    // Getter methods
    get Make() {
      return this.make;
    }
  
    get Model() {
      return this.model;
    }
  
    get Year() {
      return this.year;
    }
  
    get Speed() {
      return this.speed;
    }
  
    // Setter methods
    set Make(make) {
      this.make = make;
    }
  
    set Model(model) {
      this.model = model;
    }
  
    set Year(year) {
      this.year = year;
    }
  
    // Method to increase speed
    accelerate() {
      this.speed += 10;
      console.log("Car is accelerating. Current speed: " + this.speed);
    }
  
    // Method to decrease speed
    brake() {
      if (this.speed >= 10) {
        this.speed -= 10;
        console.log("Car is braking. Current speed: " + this.speed);
      } else {
        console.log("Car is already stationary.");
      }
    }
  }
  
  // Creating a car object
  var myCar = new Car();
  myCar.Make="Toyota";
  myCar.Model="Corolla";
  myCar.Year=2020;
  
  // Accessing properties and methods
  console.log("Make: " + myCar.Make);
  console.log("Model: " + myCar.Model);
  console.log("Year: " + myCar.Year);
  myCar.accelerate();
  myCar.accelerate();
  myCar.brake();
  

console.log(".....................................................................................");


// encapsulation using constructor function 
function BankAccount(accountNumber, ownerName, initialBalance) {
    var _accountNumber = accountNumber; // Private property
    var _ownerName = ownerName; // Private property
    var _balance = initialBalance; // Private property
  
    // Getter method for account number
    this.getAccountNumber = function() {
      return _accountNumber;
    };
  
    // Getter method for owner's name
    this.getOwnerName = function() {
      return _ownerName;
    };
  
    // Getter method for balance
    this.getBalance = function() {
      return _balance;
    };
  
    // Method to deposit money
    this.deposit = function(amount) {
      if (amount > 0) {
        _balance += amount;
        console.log(amount + " deposited. New balance: " + _balance);
      } else {
        console.log("Invalid amount.");
      }
    };
  
    // Method to withdraw money
    this.withdraw = function(amount) {
      if (amount > 0 && amount <= _balance) {
        _balance -= amount;
        console.log(amount + " withdrawn. New balance: " + _balance);
      } else {
        console.log("Insufficient funds or invalid amount.");
      }
    };
  }
  
  // Creating a bank account object
  var myAccount = new BankAccount("123456789", "John Doe", 1000);
  
  // Accessing properties and methods
  console.log("Account Number: " + myAccount.getAccountNumber());
  console.log("Owner's Name: " + myAccount.getOwnerName());
  console.log("Initial Balance: " + myAccount.getBalance());
  myAccount.deposit(500);
  myAccount.withdraw(200);
  
//! 

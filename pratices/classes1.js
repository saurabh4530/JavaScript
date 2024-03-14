// @ts-nocheck
//!                              class
// class declearation

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  info() {
    return `User name:${this.name} and age :${this.age}`;
  }
}
let User1 = new User("saurabh", 25);
console.log(User1.info());
//................//.............................//...........................
// class declearation using variable

let square = class {
  constructor(value) {
    this.value = value;
  }

  area() {
    return this.value ** 2;
  }
};
let square1 = new square(25);
console.log("area of square is:", square1.area());
console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,");



console.log("...............................");

let emp = class {
  constructor(name, company) {
    this.name = name;
    this.company = company;
  }
  details() {
    return `employee name:${this.name} and company with i work is :${this.company}`;
  }
};
let e1 = new emp("saurabh", "xyz");
let e2 = new emp("lokesh", "tesla");

console.log(e1.details());
console.log(e2.details());
console.log("...............................");



//! .......................//.....................//...................//..........

//?     inheritance using class


class Bike{// parent
    constructor(company){
        this.company="tvs";// here company name is fixed  for all obj
    }
}
 class Vehicle extends Bike{// child
   constructor(name,price){
 super();
 this.name=name;
 this.price=price;
  }
  info(){
   return`company of vehicle:${this.company} , name of vehicle:${this.name} and price:${this.price}`;
  }
 }
 let vehicle1=new Vehicle("rider",100000);
 console.log(vehicle1.info());
console.log("...................................................");
// same as above but here we create object for parent class and company name can be given by user object
class Bike {
    constructor(company) {
        this.company = company;//here company name is varies   for all obj
    }
    getCompany() {
        return this.company;
    }
}

class Vehicle extends Bike {
    constructor(company, name, price) {
        super(company);
        this.name = name;
        this.price = price;
    }
    info() {
        return `company of vehicle: ${this.company}, name of vehicle: ${this.name}, and price: ${this.price}`;
    }
}

let bike1 = new Bike("TVS");
console.log(bike1.getCompany());

let vehicle1 = new Vehicle("bajaj", "Rider", 100000);
console.log(vehicle1.info());


//! /////////////////////////////////////////////////////////////////

class Animal{// parent
    constructor(name){
        this.speed=0;
        this.name=name;
    }

    run(speed){
        this.speed=speed;
        console.log(`${this.name  } is run with speed of ${this.speed} kmph`);
    }
    stop(){
        this.speed=0;
        console.log(`${this.name  } is still stands `);

    }
}

class Rabit extends Animal{//child
    
    hide(){
        console.log(`${this.name} is hides`);

    }
      stop(){
     
        this.hide();// call 1 method to another
        super.stop();// taken from parent class method
    }

}
let rabit1=new Rabit("grey rabit");
rabit1.run(5);
rabit1.stop();
rabit1.hide();




// inheritance using constructor function


function Person(name,age){     //parent CF
  this.name=name;
  this.age=age;

}  
Person.prototype.info=function(){
  return `my name is  ${this.name} and I am ${this.age} yrs old `;
}

function Saurabh(company){    // child CF
  this.company=company;

}
Saurabh.prototype=Object.create(Person.prototype);
Saurabh.prototype.details=function(){
  return `my name is  ${this.name} and I am ${this.age} yrs old and Im work in ${this.company}`;

}
let Person1=new Person("akshay",25);
console.log(Person1.info());

let saurabh1=new Saurabh("tcs");
saurabh1.name="saurabh";  // here we access properties of person and method also
saurabh1.age=45;
console.log(saurabh1.info());
console.log(saurabh1.details());





// polymophism
/**Polymorphism in JavaScript refers to the ability of different objects to respond to the same message or method invocation in different ways.
 This is typically achieved through method overriding or method overloading. Here's how polymorphism can be implemented in JavaScript:

Method Overriding:

Method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its superclass.
JavaScript does not have native support for method overriding like some other languages,
 but you can achieve a similar effect by redefining a method in a subclass. */

 
class A{
  area(x,y){
    console.log(x*y);
  }
}
class B extends A{
  area(a,b){
    super.area(a,b);
    console.log("class B");
  }
}
let ob1=new B();
console.log(ob1.area(25,30));
console.log("........................................................");

//! polymorphism
// Parent class

class Animal {
  speak() {
      console.log("Animal speaks");
  }
}

// Subclass
class Dog extends Animal {
  speak() {
      console.log("Dog barks");
  }
}

// Creating objects
const animal = new Animal();
const dog = new Dog();

// Polymorphic behavior
animal.speak(); // Output: Animal speaks
dog.speak();    // Output: Dog barks











//? inheritance

class Bank{
  constructor(bname ,paymentmode){
    this.bname=bname;
    this.paymentmode=paymentmode;
  }
  getpayment(){
    console.log("parent class called");
  }
}
let bank1=new Bank("sbi" ,"upi");

class HDFC extends Bank{
  constructor(btrans){
    super();
    this.btrans=btrans;

  }
  getpayment(){
    console.log("child class called");
  }
  getbtrans(){
    console.log("btrans called");
  }

}
let hdfc1=new HDFC("2500");
hdfc1.bname="icici";
console.log(hdfc1.bname); 
hdfc1.getpayment();
hdfc1.getbtrans();

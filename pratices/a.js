/// function

function fun1() {
  return fun2;
}
function fun2() {
  return "hello";
}
console.log(fun1()());

console.log("....................................................");
/////////////////////////////////////////////////////////////
let arr = [];
function f1() {
  return "hello";
}
for (let i = 0; i < 7; i++) {
  arr.push(f1());
}
for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}

console.log("....................................................");
///////////////////////////////////////////////////////////////////

// setTimeout function
function fone() {
  return "hello";
}
setTimeout(function () {
  console.log(fone());
}, 3000);
console.log("....................................................");

// /
// /////////////////////////////////

// print limited output for specific time interval

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 3000);
}

// rest parameter func

function fun11(...arg1) {
  console.log(arg1);
}
fun11("xyz", "asd");
console.log(".......................................");

// default parameter function

function d1(a1 = "saurabh", a2 = 25, a3 = "kakade") {
  console.log(a1, "  ", a2, " ", a3);
}
d1();
d1("bfgfdb");

// @ts-ignore
d1("bfgfdb", "sdgdfh", "sgfdj");

console.log(".......................................");

/////////////////

//arrow function

let af = (a1, a2, a3) => {
  console.log(a1, " ", a2, " ", a3);
};
af("ahy", 25, "uiuug");

console.log(".......................................");

let af1 = () => {
  return "say hi....";
};
console.log(af1());

console.log(".......................................");

let af3 = (a1, a2, a3) => {
  return a1 + " " + a2 + " " + a3;
};
console.log(af3("saurabh", 25, "kakade"));

console.log(".......................................");

/////////////////////////////////
// pass anonymous func as argument

let af4 = (a1, a2, a3) => {
  console.log(a1(), " ", a2(), "  ", a3());
};
af4(
  () => {
    return "hello";
  },
  () => {
    return "saurabh";
  },
  () => {
    return "kakade";
  }
);

console.log(".......................................");

/////////////////////////////////////////////////////////

let start = (user, getElementByEmail, getElementById) => {
  console.log(user, getElementByEmail(), getElementById());
};
let getElementByEmail = () => {
  return "kakadesaurabh473@gmail.com";
};
let getElementById = () => {
  return "saurabhkakade";
};

start("hello1", getElementByEmail, getElementById);

console.log(".......................................");

let ar = [];
for (let i = 0; i < 5; i++) {
  ar.push(() => {
    return "say hi...........";
  });
}
for (let j = 0; j < ar.length; j++) {
  console.log(ar[j]());
}
console.log(".......................................");

// constructor functions

function Class1() {
  // constructor func
  // properties
  this.sub1 = "angular.js";
  this.sub2 = "node.js";
  this.sub3 = "mongob";
}

let obj1 = new Class1();


console.log(obj1.sub1, obj1.sub2, obj1.sub3);

console.log(".......................................");

function Class2() {
  this.languagename = "javascript";
  this.myfun = function () {
    return `Welcome to ${this.languagename} `;
  };
}
let obj2 = new Class2();
console.log(obj2.myfun());

console.log(".......................................");
//////////////////////////////////////////////////

function Class3() {
  this.v1 = "hello";
  this.v2 = "saurabh";
  this.v3 = "kakade";

  this.f1 = function () {
    return this.v1;
  };
  this.f1 = function () {
    return this.v2;
  };
  this.f1 = function () {
    return this.v3;
  };
}
let obj3 = new Class3();
console.log(obj3.v1, obj3.v2, obj3.v3);
console.log(".......................................");
///////////////////////////////////////////

function Class4(a1, a2, a3) {
  this.v1 = a1;
  this.v2 = a2;
  this.v3 = a3;
}
let obj4 = new Class4("saurabh", "kakade", 25);

console.log(obj4.v1, obj4.v2, obj4.v3);
let obj5 = new Class4("welcome", "to", "slfkjhnbjkdfnlknbgf");

console.log(obj5.v1, obj5.v2, obj5.v3);

console.log("............................. ...................");

///////////////////////////////////////////////

// using prototype
function Class5() {

};

Class5.prototype.var1 = "saurabh kakade";
Class5.prototype.fx = function () {
  return "how are you............";
};
let objx = new Class5();
console.log(objx.var1, objx.fx());

let objm = new Class5();

console.log(objm.var1, objm.fx());

console.log("............................. ...................");

////////////////////////////////

// inheritance i.e

function Parent() {};
Parent.prototype.var1 = "Parentclass";

function Child() {}
Child.prototype = Object.create(Parent.prototype);

Child.prototype.var2 = "ChildClass";

let obji = new Child();
console.log(
  // @ts-ignore
  obji.var1,

  obji.var2
);

console.log(".........................................");


////////////////////////


    























console.log(".........................................");
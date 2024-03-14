// Basic hello Javascript programm.

console.log('hello world')
console.log('we are here')
console.log('Learn JavaScript')




// Basic mathematics operation.

/*
? Declaration and definition

* Both things are same in JS 
- Definition includes the declaration step and goes further by allocating memory 
and specifying the data type of the variable. 
- It is the process of preparing the variable for use. */


var a;


/* 
? Initialization
- Initialization involves assigning the first value to a variable. 
- It can happen at the time of declaration or later in the code. 
- Variables can be used without initialization, but they will have an "undefined" value. */


a = 5;


//? Declare and Initialize at same time.

var b = 10;

var c;

c = a + b;

// Different types of console.log()
console.log(a + b);
// 15

console.log("Addition is : ", c);

console.log("Addition is : " +c);

// Without Backtiks

console.log("Addition of "+ a +"and" + b + "is" +c);

// Using Backtiks.

console.log(`Addition of ${c} and ${b} is ${c}`);


